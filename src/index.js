import glob from 'glob'

export default function (pattern, options) {
  return new Promise((resolve, reject) => {
    glob(pattern, options, (err, files) => err === null ? resolve(files) : reject(err))
  })
}
