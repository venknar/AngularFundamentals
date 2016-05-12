angular.module('ProtractorCalc', [])
.controller('ProtractorCalcController', function($scope) {
  $scope.greeting = "Hello, World!";
  $scope.newText = undefined;
  $scope.changeGreeting = function() {
    if ($scope.newText !== undefined) {
      $scope.greeting = $scope.newText;
    }
  };
});
