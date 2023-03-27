/**
 * 日期格式化
 * @param date 原始日期时间，毫秒或字符串，如'2022-02-02'
 * @param fmt 要输出的日期时间格式，默认值'YYYY-MM-dd HH:mm:ss'，[Yy]+年 M+月, [Dd]+日, h+12小时，H+24小时，m+分，s+秒，q+季度，S毫秒， E+星期
 * @returns 格式化后的日期时间
 */
export default function (date, fmt = 'YYYY-MM-dd HH:mm:ss') {
  if (date == null) return null
  if (typeof date === 'string') {
    date = date.slice(0, 19).replace('T', ' ').replace(/-/g, '/')
    date = new Date(date)
  } else if (typeof date === 'number') {
    date = new Date(date)
  }
  const o = {
    '[Yy]+': date.getFullYear(), // 年
    'M+': date.getMonth() + 1, // 月份
    '[Dd]+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  const week = {
    0: '/u65e5',
    1: '/u4e00',
    2: '/u4e8c',
    3: '/u4e09',
    4: '/u56db',
    5: '/u4e94',
    6: '/u516d'
  }
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[date.getDay() + ''])
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
