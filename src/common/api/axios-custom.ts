import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import ApiResult from "./schema/ApiResult";
import { rootStore } from "../store/root";
import authentication, { setAccessToken, setMember } from "../store/slice/authentication";
import jwt_decode from 'jwt-decode'

interface CustomAxiosConfig extends AxiosRequestConfig {
  retry : boolean,
}

const axiosCustom = axios.create({
  baseURL : process.env.REACT_APP_API_HOST_URL,
  headers : {
    "Content-Type" : "application/json; charset=UTF-8"
  },
  withCredentials: true
})

axiosCustom.interceptors.request.use(
  function (config) {
    const accessToken = rootStore.getState().authenticationInfo.accessToken

    if(accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }

    return config
  }, function (error) {
    return Promise.reject(error)
  }
)

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

function onAuthenicationSuccess(res: AxiosResponse<any, any>) {
  const accessToken: string | undefined = res.data.data?.accessToken
  // console.log(JSON.stringify(res.data))
  // console.log("current access token : " + accessToken)
  if(!accessToken) {
    throw new Error("Access token not in response body.")
  } else {
    rootStore.dispatch(setAccessToken(accessToken))
    rootStore.dispatch(setMember(decodeJWT(accessToken)))
  }
}

axiosCustom.interceptors.response.use(
  async function (response) {
    // console.log(JSON.stringify(response.data))
    if(response.data.code === "A001" || response.data.code==="A002") {
      console.log("JWT token published.")
      onAuthenicationSuccess(response)
    }

    return response.data
  },

  async function (error) {
    const {config, response} = error
    const originalRequest = error.config

    /**
     * 401 에러가 발생하고, code 가 J002 라면 엑세스 토큰이 만료된 것
     * 401 에러가 발생하고 code 가 J005 라면 리프레시 토큰이 만료된 것
     */

    // if(response?.status === 401 && config?.url === "/v1/authentication/reissue") {
    //   alert("Your token expired. sign in again.")
    // }

    const payload = response?.data as ApiResult<any> 

    if(response?.status === 401 && payload?.code === "J005") {
      // 이 경우엔 리프레시 토큰이 만료된 것이기 때문에 로그아웃 처리를 해야한다.
      rootStore.dispatch(setAccessToken(null))
      rootStore.dispatch(setMember(null))
      alert("인증 토큰이 만료 되었습니다.")
    }
    // 자동 재발급 로직은 삭제
    // }else if(payload?.code == "J002" && config?.url !== "v1/authentication/reissue" && !config.retry) {
    //   const cfg = {...config, retry : true}
    //   return axios(cfg)
    // }

    return Promise.reject(error)
  }
)



export default axiosCustom