// Factory Example

angular.module('myApp', [])
.factory('githubservice', ['$http', function($http) {

	return {
		getUserEvents: function(username) {
		}

	}

}]);


// Service Example
var person = function($http) {
	this.getName = function() {
		return $http({
			method: 'GET',
			url: '/api/user'
		});
	};
};

angular.Service('personService', person);



angular.module('myApp')
.factory('myService', function() {
	return {
		'username' : 'auser'
	}
});

// Provider is an object with a get method. Injector calls the get method on the provide r method to create an instance of the service.
// factory is shorthand for creating a service through the provider() method 
.provider('myService', {
	$get: function() {
		return {
			'username' : 'auser'
		}
	}
})


// Register existing value as a service that can be injected into other parts.
angular.module('myApp', [])
.constant('apiKey', '1234566');

angular.module('myApp', [])
.controller('MyController', function($scope, apiKey) {
	$scope.apiKey = apiKey;
})


angular.module('myApp', [])
.constant('apiKey', '1234566')
.config(function(apiKey) {
	// This is allowed since we are using a constant. However using .Value is not allowed.
});


angular.module('myApp', [])
.value('apiKey', '12345');