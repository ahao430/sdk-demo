import deepClone from '../utils/deepClone'

const store = {
  uid: '',
  appId: '',
  config: null,
  env: 'prod',
  debug: false,
}
export const setStore = (obj = {}) => {
  if (store.debug) {
    console.group('更新store')
    console.log('更新前：')
    console.table(deepClone(store))
  }
  for (const key in obj) {
    store[key] = obj[key]
  }
  if (store.debug) {
    console.log('更新后：')
    console.table(deepClone(store))
    console.groupEnd()
  }
}

export default store
