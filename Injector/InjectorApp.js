angular.module('InjectorApp', [])
.factory('greeter', function() {
	return {
		greet: function(msg) { alert(msg); }
	}
})
.controller('InjectorController', function($scope, greeter) {
	$scope.sayHello = function() {
		greeter.greet("Have a great day !!!");
	}
});