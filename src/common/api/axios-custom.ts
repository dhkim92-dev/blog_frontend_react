import axios, {AxiosRequestConfig} from "axios";
import ApiResult from "./schema/ApiResult";
import { rootStore } from "../store/root";

interface CustomAxiosConfig extends AxiosRequestConfig {
  retry : boolean,
}


const axiosCustom = axios.create({
  baseURL : process.env.REACT_APP_API_HOST_URL,
  headers : {
    "Content-Type" : "application/json;charset=UTF-8"
  }
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

axiosCustom.interceptors.response.use(
  async function (response) {
    return response.data
  },

  async function (error) {
    const {config, response} = error
    const originalRequest = error.config

    if(response?.status === 401 && config?.url == "/v1/authentication/reissue") {
      alert("Your token expired. sign in again.")
    }

    const payload = response?.data as ApiResult<any> 

    if(payload.code == "J002" && config?.url != "v1/authentication/reissue" && !config.retry) {
      const cfg = {...config, retry : true}
      return axios(cfg)
    }

    return Promise.reject(error)
  }
)



export default axiosCustom