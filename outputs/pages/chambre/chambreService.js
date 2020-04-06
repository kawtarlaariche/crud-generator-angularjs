angular.module('wohnheim')
.service('ChambreService', srvc)
function srvc($http)
{ const baseApi = '' 
 return { create:function(data) { return $http({method: 'POST',
 url: baseApi + '/chambres/',
 data: data}).then(function(res){return res.data}, function (err) {return console.log(err)})}, 
findAll:function() { return $http({method: 'GET',
 url: baseApi + '/chambres/'
}).then(function(res){return res.data}, function (err) {return console.log(err)})} } }