import { AxiosInstance } from "./types/index"
import Axios from "./core/Axios"
import { extend } from "./helpers/utils"

function  createInstance(): AxiosInstance {
  const contest = new Axios
  const instance = Axios.prototype.request.bind(contest)
  extend(instance, contest)
  return instance as AxiosInstance
}

const axios = createInstance()

export default axios