import { fs } from 'fs'
import { PATH_FILES } from '../../config.mjs'

export const handleImageUpload = (file, filename) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(PATH_FILES + '/images/' + filename + '.png', file, err => {
      if (err) {
        reject(err)
      }
      resolve({ message: 'Upload successfully!' })
    })
  })
}