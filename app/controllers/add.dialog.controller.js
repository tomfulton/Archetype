{{VERSION}}
angular.module("umbraco").controller("Imulus.ArchetypeAddDialogController", function ($scope, archetypePropertyEditorResource) {
  $scope.fieldsetMetaData = {};

  $scope.pickFieldset = function (alias, index) {
    $scope.model.submit({alias: alias, index: index});
  };

  archetypePropertyEditorResource.getFieldsetMetaData().then(function (d) {
    $scope.fieldsetMetaData = d;
  });

  $scope.getFieldsetMeta = function (alias, property) {
    var fs = $scope.fieldsetMetaData[alias];
    if (fs == null) {
      return "";
    }
    return fs[property];
  };

});
