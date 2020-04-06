angular.module('wohnheim')
  .controller('CouloireCtrl', ctrl)

function ctrl($scope, CouloireService) {
  $scope.couloire = {}
  CouloireService.findAll().then(function(couloires) {
    $scope.couloires = couloires
  })
  $scope.create = function() {
    CouloireService.create($scope.couloire).then(function(couloire) {
      $scope.couloires.push(couloire)
    })
  }
  $scope.delete = function(index, couloire) {
    CouloireService.delete(couloire.id).then(function() {
      $scope.couloires.splice(index, 1);
    })
  }
}