var fs = require('fs');
const controllerGenerator = require('./generator/controller');
const serviceGenerator = require('./generator/service');
const htmlListGenerator = require('./generator/list');
const htmlCreateGenerator = require('./generator/create');
const htmlEditGenerator = require('./generator/edit');
const htmlDeleteGenerator = require('./generator/delete');
const fileUtil = require('./util/fileUtil')
const Datatypes = require('./util/contantes').Datatypes

const outputs_folder = './outputs'

var config = {
    pages_path: 'pages',
    suffix_ctrl: 'Ctrl',
    suffix_service: 'Service'
}

var list = ['Etudiant', 'Chambre', 'Batiment', 'Couloire', 'Strasse']


var i = 1
var path = outputs_folder + '/' + config.pages_path + '/' + list[i].toLowerCase()
fileUtil.createDir(path)

/*
fs.writeFile(path + "/" + list[i].toLowerCase() + 'Service.js', fileUtil.beautifyJs(serviceGenerator.generate('wohnheim', list[i])), function (err) {
    if (err) throw err;
    console.log('Saved!');
});

fs.writeFile(path + "/" + list[i].toLowerCase() + 'Controller.js', fileUtil.beautifyJs(controllerGenerator.generate('wohnheim', list[i])), function (err) {
    if (err) throw err;
    console.log('Saved!');
});*/

/*fs.writeFile(path + "/" + list[i].toLowerCase() + '.html', fileUtil.beautifyHtml(htmlListGenerator.generate(list[i])), function (err) {
    if (err) throw err;
    console.log('Saved!');
});*/
fs.writeFile(path + "/" + 'create.html',
 fileUtil.beautifyHtml(
     htmlCreateGenerator.generate(list[i], [
         {attr: 'nom', type: Datatypes.TEXT}, 
         {attr: 'age', type: Datatypes.NUMBER}, 
         {attr: 'createdAt', type: Datatypes.DATE}        
        ])
     ),
  function (err) {
    if (err) throw err;
    console.log('Saved!');
});
/*fs.writeFile(path + "/" + list[i].toLowerCase() + 'Edit.html', fileUtil.beautifyHtml(htmlEditGenerator.generate(list[i])), function (err) {
    if (err) throw err;
    console.log('Saved!');
});*/
/*fs.writeFile(path + "/" + list[i].toLowerCase() + 'Delete.html', fileUtil.beautifyHtml(htmlDeleteGenerator.generate(list[i])), function (err) {
    if (err) throw err;
    console.log('Saved!');
});*/







