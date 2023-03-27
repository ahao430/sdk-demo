export const sleep = (time = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

// 等待埋点时间
export const limitTimeWait = (promise, time = 500) => {
  return Promise.race([
    sleep(time),
    promise,
  ])
}
