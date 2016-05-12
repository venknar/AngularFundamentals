var controllerFactory = 
	function aController($scope, greeter1) {
		console.log('Loaded Controller', greeter1);

		$scope.sayHello = function() {
			greeter1.greet("Have a great day !!!");				
		}
	};

controllerFactory.$inject = ['$scope', 'greeter'];

var greeterService = function() {

	return {
		
		function() {
			console.log("greeter service");
			return 'Hi, This is greeter service';
		},

		greet: function(msg) { alert(msg); }
	}

}


angular.module('InjectorApp', [])
	.controller('InjectorController', controllerFactory)
	.factory('greeter', greeterService);


var injector = angular.injector(['ng', 'InjectorApp']),
controller = injector.get('$controller'),
rootScope = injector.get('$rootScope'),
newScope = rootScope.$new();

controller('InjectorController', {$scope: newScope});


