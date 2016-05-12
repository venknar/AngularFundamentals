// Load the App with the injector
var injector = angular.injector(['ng', 'InjectorApp']);
// Load the $controller service with the injector
var $controller = injector.get('$controller');
// Create a new scope under the root scope
var scope = injector.get('$rootScope').$new();
// Instantiate our specific controller using the controller service and pass the scope instance.
var myController = $controller('InjectorController', {$scope:scope})
