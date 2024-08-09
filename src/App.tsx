import { Route, Routes } from "react-router-dom";
import useAuthentication from "./common/hooks/useAuthenticated";
import { useEffect } from "react";
import { decodeJWT, reissueAccessToken } from "./domain/authentication/api/api";
import { GithubOAuth2Callback } from "./domain/authentication/view/GithubOAuth2Callback";
import SignInView from "./domain/authentication/view/SignInView";
import NavigationBar from "./domain/navigation/NavigationBar";
import ResumeView from "./domain/resume/ResumeView";
import ArticleView from "./domain/board/view/article/ArticleView";
import ArticleViewer from "./domain/board/view/article-viewer/ArticleViewer";
import ArticleEditorView from "./domain/board/view/article-editor/ArticleEditorView";
import { HomeView } from "./domain/home/view/HomeView";
import MemberProfileView from "./domain/member/view/MemberProfileView";

function App() {
  const authentication = useAuthentication()

  useEffect(() => {
    const ts = Date.now()
    const payload = decodeJWT(authentication.accessToken!!)
    const delay = payload?.exp * 1000 - ts - 60000
    // console.log("access token will be refreshed after " + delay/1000 + " seconds")
    const timer =  setTimeout(() => {
      reissueAccessToken()
      .then(()=>{
        // console.log("periodically access token refresh complete.")
      })
    }, delay)
  }, [authentication.accessToken])

  useEffect(() => {
    if(authentication.accessToken == null) return
    
    reissueAccessToken().then(()=>{
      // console.log("access token refreshed.")
    })
  }, [])

  return (
    <>
        <NavigationBar/>
        <Routes>
          <Route path="/" element = {<HomeView/>}/>
          <Route path="/articles" element = {<ArticleView/>}/>
          <Route path="/articles/view" element = {<ArticleViewer/>}/>
          <Route path="/articles/edit" element = {<ArticleEditorView/>}/>
          <Route path="/resume" element = {<ResumeView/>}/>
          <Route path="/profile" element = {<MemberProfileView/>}/>
          <Route path="/sign-in" element = {<SignInView/>}/>
          <Route path="/sign-in/oauth2/callback" element = {<GithubOAuth2Callback/>}/>
        </Routes>
    </>
  )
}

//   return (
//     <>
//       <Container>
//       <TestView/>
//       </Container>
//     </>
//   )
// }

export default App
