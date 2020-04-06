angular.module('wohnheim')
.service('EtudiantService', srvc)
function srvc($http)
{ const baseApi = '' 
 return { create:function(data) { return $http({method: 'POST',
 url: baseApi + '/etudiants/',
 data: data}).then(function(res){return res.data}, function (err) {return console.log(err)})}, 
findAll:function() { return $http({method: 'GET',
 url: baseApi + '/etudiants/'
}).then(function(res){return res.data}, function (err) {return console.log(err)})} } }