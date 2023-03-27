import a from './a/index'
import b from './b/index'

const modules = {
  a,
  b,
}

export default modules

export type TModules = typeof modules
