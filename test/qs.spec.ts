import qs from '../src/utils/qs'

const list1 = [
  [{a: "1"}, 'a=1'],
  [{a: "1", b: "2"}, 'a=1&b=2'],
  [{a: "1", b: "2", c: null}, 'a=1&b=2&c=null'],
]
describe('qs.stringify 执行', () => {
  list1.forEach((item: any) => {
    test(item[1], () => {
      expect(qs.stringify(item[0])).toBe(item[1])
    })
  })
})

const list2 = [
  ['a=1', {a: "1"}, ],
  ['a=1&b=2', {a: "1", b: "2"},],
  ['a=1&b=', {a: "1", b: ""},],
  ['a=1&b=2&c=null', {a: "1", b: "2", c: "null"},],
]
describe('qs.stringify 执行', function() {
  list2.forEach( (item: any) => {
    test(item[0], function(){
      expect(qs.parse(item[0])).toEqual(item[1])
    })
  })
})