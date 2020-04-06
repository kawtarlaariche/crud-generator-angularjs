angular.module('wohnheim')
  .controller('StrasseCtrl', ctrl)

function ctrl($scope, StrasseService) {
  $scope.strasse = {}
  StrasseService.findAll().then(function(strasses) {
    $scope.strasses = strasses
  })
  $scope.create = function() {
    StrasseService.create($scope.strasse).then(function(strasse) {
      $scope.strasses.push(strasse)
    })
  }
  $scope.delete = function(index, strasse) {
    StrasseService.delete(strasse.id).then(function() {
      $scope.strasses.splice(index, 1);
    })
  }
}