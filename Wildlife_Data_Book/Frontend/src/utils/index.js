export const showBytes = (bytes) => {
  if (bytes < 1024) {
    return `${bytes} bytes`
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(0)} KB`
  }
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}