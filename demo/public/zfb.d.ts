/**
* getDetail, 查询信息接口， /b/get-detail， yapi链接：xxx
* @params {object} params
* @params {string} params.authCode 支付宝校验码或者微信校验码（非加密模式）{string}
* @params {string} params.appId 应用id（非加密模式）{string}
* @returns res 返回代码 {number}
* @returns code 返回代码 {number}
* @returns message 返回处理消息 {string}
* @returns data
*/
declare function getDetail$1(params?: any, options?: Object): any;

/**
* getList, 查询信息接口， /b/get-list， yapi链接：xxx
* @params {object} params
* @params {string} params.authCode 支付宝校验码或者微信校验码（非加密模式）{string}
* @params {string} params.appId 应用id（非加密模式）{string}
* @returns res 返回代码 {number}
* @returns code 返回代码 {number}
* @returns message 返回处理消息 {string}
* @returns data
*/
declare function getList$1(params?: any, options?: Object): any;

/**
* getDetail, 查询信息接口， /a/get-detail， yapi链接：xxx
* @params {object} params
* @params {string} params.authCode 支付宝校验码或者微信校验码（非加密模式）{string}
* @params {string} params.appId 应用id（非加密模式）{string}
* @returns res 返回代码 {number}
* @returns code 返回代码 {number}
* @returns message 返回处理消息 {string}
* @returns data
*/
declare function getDetail(params?: any, options?: Object): any;

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
declare function getList(params?: any, options?: Object): any;

/** SDK工具类 */
declare class SDK {
    /** 平台对象 */
    private _engine;
    _modules: any;
    store: any;
    request: Function;
    get: Function;
    post: Function;
    setStore: Function;
    constructor(engine: any);
}

declare const _default: {
    a: {
        getList: typeof getList;
        getDetail: typeof getDetail;
    };
    b: {
        getList: typeof getList$1;
        getDetail: typeof getDetail$1;
    };
} & SDK;

export { _default as default };
