
import store from '../../core/store'
import {
  requestInterceptor,
  responseInterceptor,
  errorInterceptor
} from '../../core/interceptor'
import formatDate from '../../utils/formatDate'
import { setStorage, getStorage } from './util'

const AUTHCODE_KEY = 'gy_authCode'
getStorage(AUTHCODE_KEY)
  .then(res => {
    if (res) {
      store[AUTHCODE_KEY] = res
    }
  })

/**
 * 请求静默授权的authcode
 * @returns
 */
const getBaseAuthCode = () => {
  // 判断缓存
  const gy_authCode = store[AUTHCODE_KEY] || {}
  const now = Date.now()
  if (gy_authCode && gy_authCode.authCode && (formatDate(now, 'YYYY-MM-dd') === formatDate(gy_authCode.time, 'YYYY-MM-dd'))) {
    return Promise.resolve(gy_authCode.authCode)
  } else {
    return new Promise((resolve, reject) => {
      my.getAuthCode({
        scopes: 'auth_base',
        success: (res) => {
          const { authCode } = res
          if (!authCode || typeof authCode !== 'string') {
            my.showToast({
              content: '授权失败，请稍后重试',
            })
            reject(res)
          } else {
            resolve(authCode)
            const new_gy_authCode = {
              authCode: authCode,
              time: now,
            }
            store[AUTHCODE_KEY] = new_gy_authCode
            setStorage(AUTHCODE_KEY, new_gy_authCode)
          }
        },
        fail: (err: any = {}) => {
          reject(err)
        },
      })
    })
  }
}

// 小程序的data，
const ajax = async (url, data, options) => {
  try {
    const host = options.host || 'host1'
    const method = options.method.toUpperCase()

    // authcode
    const authCode = await getBaseAuthCode()
    data.authCode = authCode

    // authcode
    if (host !== 'xh') {
      data.authCode = await getBaseAuthCode()
    }

    let config
    if (method === 'GET') {
      config = {
        ...options,
        url,
        params: data,
      }
    } else {
      config = {
        ...options,
        url,
        data,
      }
    }

    config = requestInterceptor(config)

    const response = await new Promise((resolve, reject) => {
      let formatUrl = config.baseURL + url
      if (config.method === 'GET') {
        my.request({
          ...config,
          data: config.params,
          url: formatUrl,
          success: resolve,
          fail: reject
        })
      } else {
        if (config.params) {
          const arr = []
          for (const key in config.params) {
            arr.push(key + '=' + config.params[key])
          }
          if (arr.length) {
            formatUrl += '?' + arr.join('&')
          }
        }
        my.request({
          ...config,
          data: config.data,
          url: formatUrl,
          success: resolve,
          fail: reject
        })
      }
    })

    const res: any = responseInterceptor(response)

    if (res.status === 200) {
      return res.data
    } else {
      const err = errorInterceptor(res)
      return Promise.reject(err)
    }
  } catch (error) { // 失败处理
    const err = errorInterceptor(error)
    return Promise.reject(err)
  }
}

const get = (url, data, options) => ajax(url, data, {
  method: 'GET',
  ...options,
})
const post = (url, data, options) => ajax(url, data, {
  method: 'POST',
  ...options,
})

export default {
  get,
  post
}
