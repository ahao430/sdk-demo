import helloTip from './hello-tip'
import store, { setStore } from './store'
import modules from '../modules/index'

Object.freeze(modules)

/** SDK工具类 */
class SDK {
  /** 平台对象 */
  private _engine: any
  public _modules: any
  public store: any
  public request: Function
  public get: Function
  public post: Function
  public setStore: Function

  constructor (engine: any) {
    /* 构建时打印提示信息 */
    helloTip()
    this._engine = engine
    this.store = store
    this.store.platform = engine.platform
    this.request = engine.request
    this.get = engine.request.get
    this.post = engine.request.post
    this._modules = modules
    this.setStore = setStore
  }
}

export type TSdk = typeof SDK

export default SDK
