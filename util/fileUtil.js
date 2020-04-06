const fs = require('fs')
const beautify = require('js-beautify').js

    exports.createDir = (path) => {
        const folders = path.split('/')
        console.log(path)
        console.log(folders)
        for (let i = 0; i < folders.length; i++) {
            const tmp = folders.slice(0, i + 1).join('/')
            console.log(tmp)
            if (!fs.existsSync(tmp)) {
                fs.mkdirSync(tmp)
            }
        }
    }

exports.beautify = (data) => {
 return beautify(data, { indent_size: 2, space_in_empty_paren: true })
}