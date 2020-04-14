function divDdisplayListModel(model, params) {
    return '<div class="row"><div class="col-lg-12"><div class="panel panel-default"><div class="panel-heading">' + getModels(model) + '</div><div class="panel-body"><div class="table-responsive"><table class="table table-striped table-bordered table-hover">' + displayListModel(model, params) + ' </table></div></div></div></div></div>'
}
function displayListModel(model, params) {
    return '<thead><tr>' + headList(params) + '</tr></thead><tbody>' + bodyListModel(model, params) + '</tbody>'
}
function getModels(model) {
    model = model.toLowerCase()
    return (model.endsWith("y") ? model.substr(0, model.length - 1) + 'ies' : model + 's')
}

function headList(params) {
    ths = []
    for (i = 0; i < params.length; i++) {
        element = '<th>' + params[i].attr + '</th>',
            ths.push(element)
    }
    ths.push('<th> delete </th>')
    return ths.join('\n');
}

function bodyListModel(model, params) {
    return '<tr ng-repeat="' + model.toLowerCase() + ' in ' + getModels(model) + '">' + bodyModel(model, params) + '</tr>'
}

function bodyModel(model, params) {
   
    tds= []
    for (i = 0; i < params.length; i++) {
        element = '<td>{{'+ model.toLowerCase()+'.'+params[i].attr +'}}</td>',
        tds.push(element)          
    }
    tds.push('<td><button type="button" class="btn btn-danger"ng-click="delete($index, '+model.toLowerCase()+')">delete</button></td>')
    return tds.join('\n');
}

function generate(model, params) {
    var txt = divDdisplayListModel(model, params) + '\n'
    return txt
}

exports.generate = generate