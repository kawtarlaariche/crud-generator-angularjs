angular.module('wohnheim')
  .controller('BatimentCtrl', ctrl)

function ctrl($scope, BatimentService) {
  $scope.batiment = {}
  BatimentService.findAll().then(function(batiments) {
    $scope.batiments = batiments
  })
  $scope.create = function() {
    BatimentService.create($scope.batiment).then(function(batiment) {
      $scope.batiments.push(batiment)
    })
  }
  $scope.delete = function(index, batiment) {
    BatimentService.delete(batiment.id).then(function() {
      $scope.batiments.splice(index, 1);
    })
  }
}