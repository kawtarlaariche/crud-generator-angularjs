const Datatypes = require('../util/contantes').Datatypes


function divCreateModel(model, params) {
    return '<h1 class="page-header">' + model + '</h1><div class="panel panel-default"><div class="panel-heading">Add ' + model + '</div><div class="panel-body"><form role="form">' + createInputAttribut(model, params) + '<button type="submit" class="btn btn-default" ng-click="create()">Submit Button</button></form></div></div>'
}
function getModels(model) {
    model = model.toLowerCase()
    return (model.endsWith("y") ? model.substr(0, model.length - 1) + 'ies' : model + 's')
}
function createInputAttribut(model, params) {
    divs = []
    for (i = 0; i < params.length; i++) {
        param = params[i];
        if (param.type == Datatypes.TEXT) { input = '<input type="text" ng-model="' + model.toLowerCase() + '.' + param.attr + '">' }
        else if (param.type == Datatypes.NUMBER) { input = '<input type="number" ng-model="' + model.toLowerCase() + '.' + param.attr + '">' }
        else if (param.type == Datatypes.DATE) { input = '<input type="date" ng-model="' + model.toLowerCase() + '.' + param.attr + '">' }
        div = '<div class="form-group"><label class="sr-only">' + param.attr + ':</label>\n' + input + ' </div>'
        divs.push(div)
    }
    return divs.join('\n');
}
function generate(model, params) {
    var txt = divCreateModel(model, params) + '\n'
    return txt
}

exports.generate = generate

