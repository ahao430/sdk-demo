export const setStorage = (key, val) => {
  return new Promise((resolve, reject) => {
    my.setStorage({
      key,
      data: val,
      success: resolve,
      fail: reject
    } as any)
  })
}

export const getStorage = (key) => {
  return new Promise((resolve, reject) => {
    my.getStorage({
      key,
      success: res => {
        resolve(res.data)
      },
      fail: reject
    })
  })
}
