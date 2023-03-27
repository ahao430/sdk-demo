import './utils/polyfill'
import SDK from './core/sdk'
import getProxy from './core/proxy'
import zfb from './platform/zfb'

const sdk = new SDK(zfb)

export default getProxy(sdk)
