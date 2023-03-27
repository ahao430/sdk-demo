/**
* getList, 查询信息接口， /a/get-list， yapi链接：xxx
* @params {object} params
* @params {string} params.authCode 支付宝校验码或者微信校验码（非加密模式）{string}
* @params {string} params.appId 应用id（非加密模式）{string}
* @returns res 返回代码 {number}
* @returns code 返回代码 {number}
* @returns message 返回处理消息 {string}
* @returns data
*/
export default function getList (params: any = {}, options: Object = {}) {
  return this.get('/a/get-list', params, options)
}
