import './utils/polyfill'
import SDK from './core/sdk'
import getProxy from './core/proxy'
import h5 from './platform/h5'

const sdk = new SDK(h5)

export default getProxy(sdk)
