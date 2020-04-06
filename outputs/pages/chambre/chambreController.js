angular.module('wohnheim')
  .controller('ChambreCtrl', ctrl)

function ctrl($scope, ChambreService) {
  $scope.chambre = {}
  ChambreService.findAll().then(function(chambres) {
    $scope.chambres = chambres
  })
  $scope.create = function() {
    ChambreService.create($scope.chambre).then(function(chambre) {
      $scope.chambres.push(chambre)
    })
  }
  $scope.delete = function(index, chambre) {
    ChambreService.delete(chambre.id).then(function() {
      $scope.chambres.splice(index, 1);
    })
  }
}