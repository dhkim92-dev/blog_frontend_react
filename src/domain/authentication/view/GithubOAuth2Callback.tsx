import { NavigateFunction, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { Dispatch, useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setAccessToken, setMember } from "../../../common/store/slice/authentication"
import { decodeJWT, githubLogin } from "../api/api"
import { LoginResponse } from "../dto/LoginResponse"
import { AnyAction } from "@reduxjs/toolkit"
import { Cookies, useCookies } from "react-cookie"
import axiosCustom from "../../../common/api/axios-custom"

const onLinkMode = (queries: string, dispatch: Dispatch<AnyAction>, navigate: NavigateFunction) => {
  githubLogin(queries)
    .then((res: LoginResponse)=>{
      // console.log(res)
      // dispatch(setAccessToken(res.accessToken))
      // const member = decodeJWT(res.accessToken)
      // dispatch(setMember(member))
      // localStorage.setItem(process.env.REACT_APP_TOKEN_REFRESH_KEY, res.refreshToken)
      navigate("/")      
    }).catch((error)=>{
      alert("Github login failed.")
      navigate(-1)
    })
}

const onUnlinkMode = (queries: string, dispaych: Dispatch<AnyAction>, navigate: NavigateFunction) => {

}

export const GithubOAuth2Callback : React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  
  useEffect(()=>{
    const authorizationCode = searchParams.get("code")
    const mode = searchParams.get("mode")
    const queries =  decodeURI(searchParams.toString())
    console.log("queries : "+ queries)
    onLinkMode(queries,dispatch, navigate)
    // onLinkMode(queries, dispatch, navigate)
    // onUnlinkMode(queries, dispatch, navigate)
  },[])

  return (
    <div style = {{marginTop: "100px"}}>
    </div>
  )
}