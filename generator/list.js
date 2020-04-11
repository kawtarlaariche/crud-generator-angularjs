function divDdisplayListModel(model) {
    return '<div class="row"><div class="col-lg-12"><div class="panel panel-default"><div class="panel-heading">' + getModels(model) + '</div><div class="panel-body"><div class="table-responsive"><table class="table table-striped table-bordered table-hover">' + displayListModel(model) + ' </table></div></div></div></div></div>'
}
function displayListModel(model) {
    return '<thead><tr>' + headList() + '</tr></thead><tbody>' + bodyListModel(model) + '</tbody>'
}
function getModels(model) {
    model = model.toLowerCase()
    return (model.endsWith("y") ? model.substr(0, model.length - 1) + 'ies' : model + 's')
}

function headList() {
    params = ["data"]
    models = []
    for (i = 0; i < params.length; i++) {
        element = "<th>" + params[i] + "</th>",
            models.push(element)

    }

    return models;
}

function bodyListModel(model) {
    return '<tr ng-repeat="' + model.toLowerCase() + ' in ' + getModels(model) + '">' + bodyModel(model) + '</tr>'
}

function bodyModel(model) {
    params = ["{{"+model.toLowerCase()+"}}"]
    models = []
    for (i = 0; i < params.length; i++) {
        element = "<td>" + params[i] + "</td>",
            models.push(element)

    }
    return models;
}

function generate(model) {
    var txt =divDdisplayListModel(model) + '\n'
    return txt
}

exports.generate = generate