angular.module('SimpleDirectiveApp', [])
.controller('SimpleDirectiveController', function($scope) {
    $scope.CtrlText = "Go";
    
})
// .directive('myDirective', function() {
//     return {
//         restrict: 'EA',
//         template: '<a href="http://google.com">Visit Google</a>',
//        // replace: true  // Explain this.
//     }
// });
.directive('myDirective', function() {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            myUrl: '@someAttr',
            myLinkText: '@'
        },
        template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
  };
});