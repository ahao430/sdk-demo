# sdk-demo

## 开发

安装依赖

cd到项目目录，npm run dev开发，同时npm start运行demo

npm run build打包

## 发布

npm publish --access public

遇到的问题：

1. 需要设置npm源为npm。nrm use npm
2. 去npm注册，npm login命令登录
3. invalid name。monorepo命名为@name/package，会被当做私有，在发布命令后面加上--access public
4. bug。package.json的name中，@后面的名字必须是刚刚登录的用户名
5. 发布时版本号必须升高
6. 发布时不能有暂存的改动

## 项目中安装和使用

npm install -S @ahao430/sdk-demo

刚发布，npm源改回npm

nvm use v16

yarn

```js
// h5使用，main.js引用
import sdk from '@ahao430/sdk-demo/dist/index.js'

sdk.debug = true
sdk.setStore({
  appId: 'xxx',
  env: 'dev',
}})
console.log(sdk)

sdk.a.getList(params, options)

```

```js
// 小程序使用. app.js引用
import sdk from '@ahao430/sdk-demo/dist/zfb.js'

sdk.debug = true
sdk.setStore({
  appId: 'xxx',
  env: 'dev',
}})

console.log(sdk)

sdk.a.getList(params, options)

```

## store参数

* env 环境变量，控制接口域名环境
* debug 调试，是否打印更多信息
* appId，应用的appId，注入到接口
* uid，支付宝uid，注入到接口，h5需要
* authCode，支付宝小程序authCode，小程序自动获取

## 接口参数

sdk.[module].[api](params, options)
第一个参数是接口参数对象，如果是get请求就是query参数；如果是post请求是body参数，如果post请求还有url参数，可以在options.params写
第二个请求是参数对象，包含一些自定义参数，还有一些通用的参数，如headers等等。

扶摇接口现在在拦截器统一加密放到headers。

h5使用axios，小程序使用my.request，但是做了抹平操作。
