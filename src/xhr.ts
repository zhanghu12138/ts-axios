import { AxiosRequestConfig } from "./types/index"
export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get'} = config
  
  const request = new XMLHttpRequest()
  
  request.open(method.toUpperCase(), url, true)  // true 设置同步异步

  request.send(data)

}