export const getImageSize = (file: File) =>
  new Promise((resolve, reject) => {
    const image_abstract = document.createElement('img')
    image_abstract.src = URL.createObjectURL(file)
    image_abstract.onerror = (err) => {
      clearInterval(intervalId)
      reject(err)
    }
    const intervalId = setInterval(() => {
      if (image_abstract.naturalWidth && image_abstract.naturalHeight) {
        clearInterval(intervalId)
        URL.revokeObjectURL(image_abstract.src)
        resolve({
          width: image_abstract.naturalWidth,
          height: image_abstract.naturalHeight,
        })
      }
    }, 1)
  })
 