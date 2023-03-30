Page({
  data: {
    danmuList: [],
  },
  onLoad(query) {
    // 页面加载
    this.getData()
  },
  getData() {
    const list = []

    for (let i = 0; i < 10; i++) {
      const item = {
        id: i,
        avatar: `https://haixing-v2-test.19ego.cn/api/text2svg?text=${this.randomStr(3)}&color=red&size=32`,
        name: this.randomStr(6),
        text: this.randomStr(30),
      }
      list.push(item)
    }

    this.setData({
      danmuList: list
    })
  },
  randomStr (e) {
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
  },
});
