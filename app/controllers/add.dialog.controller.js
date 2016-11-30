{{VERSION}}
angular.module("umbraco").controller("Imulus.ArchetypeAddDialogController", function ($scope) {

  $scope.overlayMenu = $scope.dialogData.overlayMenu;

  $scope.pickFieldset = function (alias, index) {
    $scope.submit({alias: alias, index: index});
  }

});
