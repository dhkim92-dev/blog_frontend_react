import axiosCustom from "../../../common/api/axios-custom";
import { rootStore } from "../../../common/store/root";
import { setAccessToken, setMember } from "../../../common/store/slice/authentication";
import { LoginRequest } from "../dto/LoginRequest";
import { LoginResponse } from "../dto/LoginResponse";
import jwt_decode from 'jwt-decode'

const env = process.env

export function decodeJWT(token: string) {
    if(token == null) return null;

    const decoded = jwt_decode(token)
    const payload = JSON.parse(JSON.stringify(decoded))
  
    return {
      id : payload.sub,
      nickname : payload.nickname,
      email : payload.email,
      role : payload.roles[0],
      isActivated : payload.isActivated,
      exp : payload.exp
    } 
}

export async function reissueAccessToken() {
    try {
        const response = await axiosCustom.post(env.REACT_APP_JWT_AUTH_REFRESH)
    } catch(error) {
        rootStore.dispatch(setMember(null))
        rootStore.dispatch(setAccessToken(null))
    }
}

export async function revokeOAuth2Accesstoken(memberId: string, platform: string): Promise<void> {
    const url = `${process.env.REACT_APP_API_MEMBER}/${memberId}/oauth2/${platform}`
    try {
        const response = await axiosCustom.delete(url, {withCredentials: true})
        if(response.status !== 204) {
            console.log("something wrong. github revoke failed.")
        }
    }catch(err) {
        console.error(err)
        throw new Error("Github revoke failed.")
    }
}

export async function logout(): Promise<void> {
    const url = `${process.env.REACT_APP_JWT_AUTH}/revoke`
    try {
        const response = await axiosCustom.delete(url)
        rootStore.dispatch(setMember(null))
        rootStore.dispatch(setAccessToken(null))
    } catch(e) {
        console.log(e)
    }
}

export async function githubLogin(queries: string): Promise<LoginResponse> {
  const url = process.env.REACT_APP_OAUTH2_GITHUB_CALLBACK_URI + "?" + queries
  try {
    const response = await axiosCustom.get(url, { withCredentials: true })

    return {
        type: response.data.type,
    }
  } catch (err) {
    throw new Error("Github Login failed");
  }
}

export async function emailPasswordSignIn(email: string, password: string): Promise<LoginResponse> {
    const request: LoginRequest = {
        email: email,
        password: password
    }

    try{
        const response = await axiosCustom.post(env.REACT_APP_JWT_AUTH, request) 
        console.log(response)
        return {
            type: response.data.type
        }
    }catch(error) {
        alert("Failed to login, check your email & password.")
        throw error
    }
}

export function snsSignIn(refreshToken : string, accessToken : string, callback : any) {
    localStorage.setItem(process.env.REACT_APP_TOKEN_REFRESH_KEY, refreshToken)
    rootStore.dispatch(setAccessToken(accessToken))
    callback()
}

export function signOut() {
    localStorage.removeItem(env.REACT_APP_TOKEN_REFRESH_KEY)
    rootStore.dispatch(setAccessToken(null));
    rootStore.dispatch(setMember(null));
}