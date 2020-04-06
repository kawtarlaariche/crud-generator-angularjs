angular.module('wohnheim')
.service('BatimentService', srvc)
function srvc($http)
{ const baseApi = '' 
 return { create:function(data) { return $http({method: 'POST',
 url: baseApi + '/batiments/',
 data: data}).then(function(res){return res.data}, function (err) {return console.log(err)})}, 
findAll:function() { return $http({method: 'GET',
 url: baseApi + '/batiments/'
}).then(function(res){return res.data}, function (err) {return console.log(err)})} } }