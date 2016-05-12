angular.module('InjectorApp', [])
.factory('greeter', function() {
	return {
		greet: function(msg) { alert(msg); }
	}
})
.controller('InjectorController',
	['$scope', 'greeter', function($scope, greeter1) {

		$scope.sayHello = function() {
			greeter1.greet("Hello Inline Annotation");
		}	
	}]
);