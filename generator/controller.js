
function defineModule(name) {
    return "angular.module('" + name + "')"
}

function createController(name) {
    return ".controller('" + name + "', ctrl)"
}

function createCtrlHeader(params) {
    return "function ctrl(" + params.join(',') + ")"
}

function createCtrlBody() {
    return "{}"
}


function generate(module, model) {
    var txt = defineModule(module) + "\n"
    txt += createController(model + 'Ctrl') + "\n"
    txt += createCtrlHeader(['$scope', model+'Service']) + "\n"
    txt += createCtrlBody()
    return txt
}

exports.generate = generate