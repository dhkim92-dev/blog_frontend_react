interface ApiResult<T> {
  status : number
  code : string
  data : T
  message : string
}

export default ApiResult