var fs = require('fs');

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