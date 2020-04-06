function defineModule(name) {
    return "angular.module('" + name + "')"
}
function createService(name) {
    return ".service('" + name + "', srvc)"
}

function createSrvcHeader(param) {
    return "function srvc(" + param + ")"
}

function createSrvcBody(model) {
    return "{ const baseApi = '' \n return { " + buildCRUDMethods(model).join(', \n') + " } }"
}

function createSrvcMethod(name, params, httpOptions) {
    return name + ":function(" + params.join(',') + ") { return $http(" + httpOptions + ").then(function(res){return res.data}, function (err) {return console.log(err)})}"
}


function buildCRUDMethods(model) {
    const cruds = [
        { name: 'create', params: ['data'], httpOptions: "{method: 'POST',\n url: baseApi + '/" + getModelUrl(model) + "',\n data: data}" },
        { name: 'findAll', params: [], httpOptions: "{method: 'GET',\n url: baseApi + '/" + getModelUrl(model) + "'\n}" }
    ]

    methods = []
    for (let index = 0; index < cruds.length; index++) {
        const element = cruds[index]
        methods.push(createSrvcMethod(element.name, element.params, element.httpOptions))
    }
    return methods;
}

function getModelUrl(model) {
    model = model.toLowerCase()
    return (model.endsWith('y') ? model.substr(0, model.length - 1) + "ies" : model + "s") + '/'
}


function generateService(module, model) {
    var txt = defineModule(module) + "\n"
    txt += createService(model + 'Service') + "\n"
    txt += createSrvcHeader('$http') + "\n"
    txt += createSrvcBody(model)
    return txt
}

exports.generate = generateService
