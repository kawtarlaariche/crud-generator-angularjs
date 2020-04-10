const fs = require('fs')
const beautify = require('js-beautify').js
const pretty = require('pretty')

    exports.createDir = (path) => {
        const folders = path.split('/')
        console.log(path)
        for (let i = 0; i < folders.length; i++) {
            const tmp = folders.slice(0, i + 1).join('/')
            
            if (!fs.existsSync(tmp)) {
                fs.mkdirSync(tmp)
            }
        }
    }

exports.beautifyJs = (data) => {
 return beautify(data, { indent_size: 2, space_in_empty_paren: true })
}

exports.beautifyHtml = (html) => {
    return pretty(html)
   }