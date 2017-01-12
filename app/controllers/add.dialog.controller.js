{{VERSION}}
angular.module("umbraco").controller("Imulus.ArchetypeAddDialogController", function ($scope) {

  $scope.pickFieldset = function (alias, index) {
    $scope.model.submit({alias: alias, index: index});
  }

});
