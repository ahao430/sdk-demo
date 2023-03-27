/**
 * qs方法，处理形如a=1&b=2格式的query字符串。
 * 包含qs.stringify和qs.parse, 分别进行序列化和反序列化。
 */
export default {
  /**
   * query字符串反序列化
   * @param str query字符串
   * @returns 解析的对象
   */
  parse: (str = ''): any => {
    const arr = str.split('&')
    const obj = {}
    arr.forEach(item => {
      const index = item.indexOf('=')
      const key = item.slice(0, index)
      const val = item.slice(index + 1)
      if (key) {
        obj[key] = val
      }
    })
    return obj
  },
  /**
   * 对象序列化为query字符串
   * @param obj 参数对象
   * @returns query字符串
   */
  stringify: (obj = {}): string => {
    const arr = []
    for (const key in obj) {
      arr.push(key + '=' + obj[key])
    }
    return arr.join('&')
  },
}
