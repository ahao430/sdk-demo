import sdk from './libs/zfb.js'

App({
  onLaunch (options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch')
    console.log(sdk)
    sdk.debug = true
    sdk.a.getList({a: 1}, {method: 'POST', params: {b: 2}})
  },
  onShow (options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
})
