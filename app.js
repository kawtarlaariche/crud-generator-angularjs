var fs = require('fs');
const controllerGenerator = require('./generator/controller');
const serviceGenerator = require('./generator/service');
const fileUtil = require('./util/fileUtil')

const outputs_folder = './outputs'

var config = {
    pages_path: 'pages',
    suffix_ctrl: 'Ctrl',
    suffix_service: 'Service'
}

var list = ['Etudiant', 'Chambre', 'Batiment', 'Couloire', 'Strasse']


var i = 4
var path = outputs_folder + '/' + config.pages_path + '/' + list[i].toLowerCase()
fileUtil.createDir(path)



fs.writeFile(path + "/" + list[i].toLowerCase() + 'Service.js', fileUtil.beautify(serviceGenerator.generate('wohnheim', list[i])), function (err) {
    if (err) throw err;
    console.log('Saved!');
});




