
function defineModule(name) {
    return "angular.module('" + name + "')"
}

function createController(name) {
    return ".controller('" + name + "', ctrl)"
}

function createCtrlHeader(params) {
    return "function ctrl(" + params.join(',') + ")"
}

function createCtrlBody(model) {
    return "{" + getModel(model) + "\n" + initialize(model) + findAll(model) + create(model) + deletee(model) + update(model)+"}"
}

function getModel(model) {
    model = model.toLowerCase()
    return "$scope." + model + "={}"
}

function getModels(model) {
    model = model.toLowerCase()
    return (model.endsWith('y') ? model.substr(0, model.length - 1) + "ies" : model + "s")
}

function findAll(model) {
    return model + "Service.findAll().then(function(" + getModels(model) + "){$scope." + getModels(model) + " =" + getModels(model) + "})\n"
}

function create(model) {
    return "$scope.create = function(){\n" + model + "Service.create($scope." + model.toLowerCase() + ").then(function(" + model.toLowerCase() + "){$scope." + getModels(model) + ".push(" + model.toLowerCase() + ")})}\n"
}

function deletee(model) {
    return "$scope.delete = function(index," + model.toLowerCase() + "){\n" + model + "Service.delete(" + model.toLowerCase() + ".id).then(function(){ $scope." + getModels(model) + ".splice(index, 1); })}"
}

 function initialize(model){
     return "if($routeParams.id != undefined) {"+model+"Service.findById($routeParams.id).then(function("+model.toLowerCase()+"){$scope."+model+"="+model.toLowerCase()+"});}\n"
 }
function update(model) {
    return "$scope.update = function(" + model.toLowerCase() + "){\n "+model+"Service.update("+model.toLowerCase()+","+model.toLowerCase()+".id).then(function(){});}"
}

function generate(module, model) {
    var txt = defineModule(module) + "\n"
    txt += createController(model + 'Ctrl') + "\n"
    txt += createCtrlHeader(['$scope', model + 'Service', '$routeParams']) + "\n"
    txt += createCtrlBody(model)
    return txt
}

exports.generate = generate