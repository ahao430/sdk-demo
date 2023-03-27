
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.sdk = factory());
})(this, (function () { 'use strict';

  ['warn', 'error', 'table', 'group', 'groupEnd'].forEach(function (key) {
      if (!console[key]) {
          console[key] = console.log;
      }
  });

  /**
   * 打印使用提示信息
   */
  function helloTip () {
      console.warn('欢迎使用sdk');
  }

  function deepClone (obj) {
      return JSON.parse(JSON.stringify(obj));
  }

  const store = {
    uid: '',
    appId: '',
    config: null,
    env: 'prod',
    debug: false
  };
  const setStore = (obj = {}) => {
    if (store.debug) {
      console.group('更新store');
      console.log('更新前：');
      console.table(deepClone(store));
    }
    for (const key in obj) {
      store[key] = obj[key];
    }
    if (store.debug) {
      console.log('更新后：');
      console.table(deepClone(store));
      console.groupEnd();
    }
  };

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
  function getList$1(params, options) {
      if (params === void 0) { params = {}; }
      if (options === void 0) { options = {}; }
      return this.get('/a/get-list', params, options);
  }

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
  function getDetail$1(params, options) {
      if (params === void 0) { params = {}; }
      if (options === void 0) { options = {}; }
      return this.get('/a/get-detail', params, options);
  }

  var a = {
      getList: getList$1,
      getDetail: getDetail$1,
  };

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
  function getList(params, options) {
      if (params === void 0) { params = {}; }
      if (options === void 0) { options = {}; }
      return this.get('/b/get-list', params, options);
  }

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
  function getDetail(params, options) {
      if (params === void 0) { params = {}; }
      if (options === void 0) { options = {}; }
      return this.get('/b/get-detail', params, options);
  }

  var b = {
      getList: getList,
      getDetail: getDetail,
  };

  var modules = {
      a: a,
      b: b,
  };

  Object.freeze(modules);
  /** SDK工具类 */
  var SDK = /** @class */ (function () {
      function SDK(engine) {
          /* 构建时打印提示信息 */
          helloTip();
          this._engine = engine;
          this.store = store;
          this.store.platform = engine.platform;
          this.request = engine.request;
          this.get = engine.request.get;
          this.post = engine.request.post;
          this._modules = modules;
          this.setStore = setStore;
      }
      return SDK;
  }());

  /**
   * sdk实例
   * 调用sdk[模块名][方法名]
   */
  var getProxy = function (sdk) {
      var proxy = new Proxy((sdk), {
          get: function (target, prop, receiver) {
              var modules = sdk._modules;
              if (typeof prop === 'string' && ['debug'].includes(prop)) {
                  return target.store[prop];
              }
              else if (typeof prop === 'string' && prop.indexOf('_') === 0) {
                  return undefined;
              }
              else {
                  for (var key in modules) {
                      if (prop === key) {
                          var module_1 = modules[prop];
                          var moduleProxy = new Proxy(module_1, {
                              get: function (target, prop, receiver) {
                                  if (typeof target[prop] === 'function') {
                                      return target[prop];
                                  }
                                  else {
                                      return sdk[prop];
                                  }
                              },
                              set: function (target, prop, value) {
                                  return false;
                              }
                          });
                          return moduleProxy;
                      }
                  }
              }
              return target[prop];
          },
          set: function (target, prop, value) {
              if (prop === 'debug') {
                  return Reflect.set(target.store, prop, value);
              }
              return false;
          }
      });
      return proxy;
  };

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  var hosts = {
      dev: {
          host: 'https://host1-dev.com',
          host2: 'https://host2-dev.com',
      },
      test: {
          host: 'https://host1-test.com',
          host2: 'https://host2-test.com',
      },
      prod: {
          host: 'https://host1.com',
          host2: 'https://host2.com',
      }
  };

  /**
   * qs方法，处理形如a=1&b=2格式的query字符串。
   * 包含qs.stringify和qs.parse, 分别进行序列化和反序列化。
   */
  var qs = {
      /**
       * query字符串反序列化
       * @param str query字符串
       * @returns 解析的对象
       */
      parse: function (str) {
          if (str === void 0) { str = ''; }
          var arr = str.split('&');
          var obj = {};
          arr.forEach(function (item) {
              var index = item.indexOf('=');
              var key = item.slice(0, index);
              var val = item.slice(index + 1);
              if (key) {
                  obj[key] = val;
              }
          });
          return obj;
      },
      /**
       * 对象序列化为query字符串
       * @param obj 参数对象
       * @returns query字符串
       */
      stringify: function (obj) {
          if (obj === void 0) { obj = {}; }
          var arr = [];
          for (var key in obj) {
              arr.push(key + '=' + obj[key]);
          }
          return arr.join('&');
      },
  };

  var getBaseURL = function (options) {
      var env = options.env || store.env || 'prod';
      var host = options.host;
      if (options.baseURL)
          return options.baseURL;
      // console.log({ hosts, env, host })
      return hosts[env][host];
  };
  var parseUrl = function (url) {
      if (url === void 0) { url = ''; }
      var index = url.indexOf('?');
      if (index === -1)
          return [url];
      var prev = url.slice(0, index);
      var search = url.slice(index + 1);
      return [prev, qs.parse(search)];
  };
  var requestInterceptor = function (config) {
      store.appId; store.uid; var debug = store.debug;
      var method = config.method.toUpperCase();
      if (debug) {
          console.group('请求' + config.url);
          console.log('url: ', config.url);
          console.log('入参: ');
          console.table(method === 'GET' ? config.params : deepClone(config.data));
          console.log('完整请求配置：');
          console.table(deepClone(config));
      }
      config.params = config.params || {};
      config.data = config.data || {};
      config.host = config.host || 'host1';
      config.baseURL = getBaseURL(config);
      // 处理url参数
      var parsed = parseUrl(config.url);
      if (parsed.length === 2) {
          config.url = parsed[0];
          config.params = __assign(__assign({}, parsed[1]), config.params);
      }
      if (config.host === 'host1') ;
      else if (config.host === 'host2') ;
      if (debug) {
          console.log('处理后的配置：');
          console.table(deepClone(config));
          console.groupEnd();
      }
      return config;
  };
  var responseInterceptor = function (response) {
      if (response.status === 200) ;
      var config = response.config;
      var debug = store.debug;
      if (debug) {
          console.group('请求响应' + config.url);
          console.log('请求响应：', response);
          console.table(response);
          if (response.status === 200 && response.data) {
              console.log('响应数据：');
              console.table(response.data);
          }
          console.groupEnd();
      }
      return response;
  };
  var errorInterceptor = function (error) {
      return error;
  };

  /**
   * 日期格式化
   * @param date 原始日期时间，毫秒或字符串，如'2022-02-02'
   * @param fmt 要输出的日期时间格式，默认值'YYYY-MM-dd HH:mm:ss'，[Yy]+年 M+月, [Dd]+日, h+12小时，H+24小时，m+分，s+秒，q+季度，S毫秒， E+星期
   * @returns 格式化后的日期时间
   */
  function formatDate (date, fmt) {
      if (fmt === void 0) { fmt = 'YYYY-MM-dd HH:mm:ss'; }
      if (date == null)
          return null;
      if (typeof date === 'string') {
          date = date.slice(0, 19).replace('T', ' ').replace(/-/g, '/');
          date = new Date(date);
      }
      else if (typeof date === 'number') {
          date = new Date(date);
      }
      var o = {
          '[Yy]+': date.getFullYear(),
          'M+': date.getMonth() + 1,
          '[Dd]+': date.getDate(),
          'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
          'H+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds(),
          'q+': Math.floor((date.getMonth() + 3) / 3),
          S: date.getMilliseconds() // 毫秒
      };
      var week = {
          0: '/u65e5',
          1: '/u4e00',
          2: '/u4e8c',
          3: '/u4e09',
          4: '/u56db',
          5: '/u4e94',
          6: '/u516d'
      };
      if (/(Y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      if (/(E+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[date.getDay() + '']);
      }
      for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
          }
      }
      return fmt;
  }

  var setStorage = function (key, val) {
      return new Promise(function (resolve, reject) {
          my.setStorage({
              key: key,
              data: val,
              success: resolve,
              fail: reject
          });
      });
  };
  var getStorage = function (key) {
      return new Promise(function (resolve, reject) {
          my.getStorage({
              key: key,
              success: function (res) {
                  resolve(res.data);
              },
              fail: reject
          });
      });
  };

  var AUTHCODE_KEY = 'gy_authCode';
  getStorage(AUTHCODE_KEY)
      .then(function (res) {
      if (res) {
          store[AUTHCODE_KEY] = res;
      }
  });
  /**
   * 请求静默授权的authcode
   * @returns
   */
  var getBaseAuthCode = function () {
      // 判断缓存
      var gy_authCode = store[AUTHCODE_KEY] || {};
      var now = Date.now();
      if (gy_authCode && gy_authCode.authCode && (formatDate(now, 'YYYY-MM-dd') === formatDate(gy_authCode.time, 'YYYY-MM-dd'))) {
          return Promise.resolve(gy_authCode.authCode);
      }
      else {
          return new Promise(function (resolve, reject) {
              my.getAuthCode({
                  scopes: 'auth_base',
                  success: function (res) {
                      var authCode = res.authCode;
                      if (!authCode || typeof authCode !== 'string') {
                          my.showToast({
                              content: '授权失败，请稍后重试',
                          });
                          reject(res);
                      }
                      else {
                          resolve(authCode);
                          var new_gy_authCode = {
                              authCode: authCode,
                              time: now,
                          };
                          store[AUTHCODE_KEY] = new_gy_authCode;
                          setStorage(AUTHCODE_KEY, new_gy_authCode);
                      }
                  },
                  fail: function (err) {
                      if (err === void 0) { err = {}; }
                      reject(err);
                  },
              });
          });
      }
  };
  // 小程序的data，
  var ajax = function (url, data, options) { return __awaiter(void 0, void 0, void 0, function () {
      var authCode, config_1, response, res, err, error_1, err;
      return __generator(this, function (_a) {
          switch (_a.label) {
              case 0:
                  _a.trys.push([0, 3, , 4]);
                  options.host || 'host1';
                  options.method.toUpperCase();
                  return [4 /*yield*/, getBaseAuthCode()];
              case 1:
                  authCode = _a.sent();
                  data.authCode = authCode;
                  config_1 = requestInterceptor(__assign({ url: url, data: data }, options));
                  return [4 /*yield*/, new Promise(function (resolve, reject) {
                          var formatUrl = config_1.baseURL + url;
                          if (config_1.method === 'GET') {
                              my.request(__assign(__assign({}, config_1), { data: config_1.params, url: formatUrl, success: resolve, fail: reject }));
                          }
                          else {
                              if (config_1.params) {
                                  var arr = [];
                                  for (var key in config_1.params) {
                                      arr.push(key + '=' + config_1.params[key]);
                                  }
                                  if (arr.length) {
                                      formatUrl += '?' + arr.join('&');
                                  }
                              }
                              my.request(__assign(__assign({}, config_1), { data: config_1.data, url: formatUrl, success: resolve, fail: reject }));
                          }
                      })];
              case 2:
                  response = _a.sent();
                  res = responseInterceptor(response);
                  if (res.status === 200) {
                      return [2 /*return*/, res.data];
                  }
                  else {
                      err = errorInterceptor(res);
                      return [2 /*return*/, Promise.reject(err)];
                  }
              case 3:
                  error_1 = _a.sent();
                  err = errorInterceptor(error_1);
                  return [2 /*return*/, Promise.reject(err)];
              case 4: return [2 /*return*/];
          }
      });
  }); };
  var get = function (url, data, options) { return ajax(url, {}, __assign(__assign({}, options), { params: data, method: 'GET' })); };
  var post = function (url, data, options) { return ajax(url, data, __assign(__assign({}, options), { method: 'POST' })); };
  var request = {
      get: get,
      post: post
  };

  var zfb = {
      platform: 'zfb',
      request: request
  };

  var sdk = new SDK(zfb);
  var index_zfb = getProxy(sdk);

  return index_zfb;

}));
//# sourceMappingURL=zfb.umd.js.map
