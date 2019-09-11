exports.$ = id => {
  return document.getElementById(id)
}

exports.convertDuration = time => {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0')
  const seconds = Math.floor(time - minutes * 60).toString().padStart(2, '0')
  return `${minutes}:${seconds}`
}