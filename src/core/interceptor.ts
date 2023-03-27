import store from './store'
import { hosts } from './constants'
import qs from '../utils/qs'
import deepClone from '../utils/deepClone'

const getBaseURL = (options) => {
  const env = options.env || store.env || 'prod'
  const host = options.host
  if (options.baseURL) return options.baseURL
  // console.log({ hosts, env, host })
  return hosts[env][host]
}

const parseUrl = (url = '') => {
  const index = url.indexOf('?')
  if (index === -1) return [url]

  const prev = url.slice(0, index)
  const search = url.slice(index + 1)

  return [prev, qs.parse(search)]
}

export const requestInterceptor = (config) => {
  const {
    appId,
    uid,
    debug,
  } = store

  const method = config.method.toUpperCase()

  if (debug) {
    console.group('请求' + config.url)
    console.log('url: ', config.url)
    console.log('入参: ')
    console.table(method === 'GET' ? config.params : deepClone(config.data))
    console.log('完整请求配置：')
    console.table(deepClone(config))
  }

  config.params = config.params || {}
  config.data = config.data || {}
  config.host = config.host || 'host1'

  config.baseURL = getBaseURL(config)

  // 处理url参数
  const parsed = parseUrl(config.url)
  if (parsed.length === 2) {
    config.url = parsed[0]
    config.params = {
      ...parsed[1],
      ...config.params,
    }
  }

  if (config.host === 'host1') {
    //
  } else if (config.host === 'host2') {
    //
  }

  if (debug) {
    console.log('处理后的配置：')
    console.table(deepClone(config))
    console.groupEnd()
  }
  return config
}

export const responseInterceptor = (response) => {
  if (response.status === 200) {
    //
  }

  const { config } = response
  const { debug } = store
  if (debug) {
    console.group('请求响应' + config.url)
    console.log('请求响应：', response)
    console.table(response)
    if (response.status === 200 && response.data) {
      console.log('响应数据：')
      console.table(response.data)
    }
    console.groupEnd()
  }
  return response
}

export const errorInterceptor = (error) => {
  return error
}
