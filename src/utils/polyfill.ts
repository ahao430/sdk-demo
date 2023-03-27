['warn', 'error', 'table', 'group', 'groupEnd'].forEach(key => {
  if (!console[key]) {
    console[key] = console.log
  }
})
