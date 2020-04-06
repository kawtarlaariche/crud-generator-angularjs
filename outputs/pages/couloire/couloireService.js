angular.module('wohnheim')
.service('CouloireService', srvc)
function srvc($http)
{ const baseApi = '' 
 return { create:function(data) { return $http({method: 'POST',
 url: baseApi + '/couloires/',
 data: data}).then(function(res){return res.data}, function (err) {return console.log(err)})}, 
findAll:function() { return $http({method: 'GET',
 url: baseApi + '/couloires/'
}).then(function(res){return res.data}, function (err) {return console.log(err)})} } }