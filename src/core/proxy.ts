import TSdk from './sdk'
import TModules from '../modules'

type TProxy = typeof TModules & TSdk

/**
 * sdk实例
 * 调用sdk[模块名][方法名]
 */
const getProxy = (sdk: any) => {
  const proxy: TProxy = new Proxy((sdk), {
    get (target, prop, receiver) {
      const modules = sdk._modules

      if (typeof prop === 'string' && ['debug'].includes(prop)) {
        return target.store[prop]
      } else if (typeof prop === 'string' && prop.indexOf('_') === 0) {
        return undefined
      } else {
        for (const key in modules) {
          if (prop === key) {
            const module = modules[prop]
            const moduleProxy = new Proxy(module, {
              get (target, prop, receiver) {
                if (typeof target[prop] === 'function') {
                  return target[prop]
                } else {
                  return sdk[prop]
                }
              },
              set (target, prop, value) {
                return false
              }
            })
            return moduleProxy
          }
        }
      }

      return target[prop]
    },
    set (target, prop, value) {
      if (prop === 'debug') {
        return Reflect.set(target.store, prop, value)
      }
      return false
    }
  })

  return proxy
}

export default getProxy
