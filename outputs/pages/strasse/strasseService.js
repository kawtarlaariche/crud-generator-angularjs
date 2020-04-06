angular.module('wohnheim')
  .service('StrasseService', srvc)

function srvc($http) {
  const baseApi = ''
  return {
    create: function(data) {
      return $http({
        method: 'POST',
        url: baseApi + '/strasses/',
        data: data
      }).then(function(res) {
        return res.data
      }, function(err) {
        return console.log(err)
      })
    },
    findAll: function() {
      return $http({
        method: 'GET',
        url: baseApi + '/strasses/'
      }).then(function(res) {
        return res.data
      }, function(err) {
        return console.log(err)
      })
    },
    delete: function(data) {
      return $http({
        method: 'DELETE',
        ulr: baseApi + '/strasses/' + data
      }).then(function(res) {
        return res.data
      }, function(err) {
        return console.log(err)
      })
    },
    update: function(data) {
      return $http({
        methos: 'PUT',
        url: baseApi + '/strasses/' + data,
        data: data
      }).then(function(res) {
        return res.data
      }, function(err) {
        return console.log(err)
      })
    }
  }
}