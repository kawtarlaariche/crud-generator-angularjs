function containPage(model) {
    return '<div class="container-fluid">' + divCreateModel(model) + divDdisplayListModel(model) + '</div>'
}

function getModels(model) {
    model = model.toLowerCase()
    return (model.endsWith("y") ? model.substr(0, model.length - 1) + 'ies' : model + 's')
}

function divCreateModel(model) {
    return '<div class="row"><div class="col-lg-12"><h1 class="page-header">' + model + '</h1><div class="row"><div class="col-lg-8"><div class="panel panel-default"><div class="panel-heading">Add' + model + '</div><div class="panel-body"><div class="row"><form role="form">' + createModel(model) + '</form></div></div></div></div></div>'
}

function divDdisplayListModel(model) {
    return '<div class="row"><div class="col-lg-12"><div class="panel panel-default"><div class="panel-heading">' + getModels(model) + '</div><div class="panel-body"><div class="table-responsive"><table class="table table-striped table-bordered table-hover">' + displayListModel(model) + ' </table></div></div></div></div></div>'
}
function displayListModel(model) {
    return '<thead><tr>' + headList() + '</thead></tr><tbody>' + bodyListModel(model) + '</tbody>'
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
    return '<tr ng-repeat="' + model.toLowerCase() + ' in ' + getModels(model) + '">' + bodyModel() + '</tr>'
}

function bodyModel() {
    params = ["data"]
    models = []
    for (i = 0; i < params.length; i++) {
        element = "<td>" + params[i] + "</td>",
            models.push(element)

    }
    return models;
}

function generate(model) {
    var txt = containPage(model) + '\n'
    return txt
}

exports.generate = generate