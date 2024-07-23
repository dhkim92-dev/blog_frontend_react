import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setAccessToken, setMember } from "../../../common/store/slice/authentication"
import { decodeJWT, githubLogin } from "../api/api"
import { LoginResponse } from "../dto/LoginResponse"

export const GithubOAuth2Callback : React.FC = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  
  useEffect(()=>{
    const authorizationCode = searchParams.get("code")
    // console.log("authorization Code : " + authorizationCode)
    const queries =  decodeURI(searchParams.toString())
    // console.log("queries : " + queries)
    
    githubLogin(queries)
    .then((res: LoginResponse)=>{
      dispatch(setAccessToken(res.accessToken))
      const member = decodeJWT(res.accessToken)
      dispatch(setMember(member))
      localStorage.setItem(process.env.REACT_APP_TOKEN_REFRESH_KEY, res.refreshToken)
      navigate("/")      
    }).catch((error)=>{
      alert("Github login failed.")
      navigate(-1)
    })
  },[])

  return (
    <div style = {{marginTop: "100px"}}>
    </div>
  )
}