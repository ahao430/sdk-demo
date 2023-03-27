import axios from 'axios'
// import store from '../../core/store'
import {
  requestInterceptor,
  responseInterceptor,
  errorInterceptor
} from '../../core/interceptor'

const instance = axios.create({
  timeout: 10000
})

// Request 拦截器
instance.interceptors.request.use(
  config => {
    return requestInterceptor(config)
  }
)
// Response 拦截器
instance.interceptors.response.use(
  (response) => {
    const res: any = responseInterceptor(response)
    if (res.status === 200) {
      return res.data
    } else {
      const err = errorInterceptor(res)
      return Promise.reject(err)
    }
  },
  errorInterceptor
)

const get = (url, data, options = {}) => instance.get(url, {
  ...options,
  method: 'GET',
  params: data
})
const post = (url, data, options = {}) => instance.post(url, data, {
  ...options,
  method: 'POST',
})

export default {
  get,
  post
}
