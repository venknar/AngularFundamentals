angular.module('ServicesApp', [])
.factory('githubService', function($http, $cacheFactory) {
	var githubUrl = 'http://api.github.com';
	var githubUserName;

	var runUserRequest = function(path) {

		return $http.jsonp(githubUrl + '/users/' + githubUserName + '/' + path + '?callback=JSON_CALLBACK');
	}

	return {
		events: function() {
			return runUserRequest('events');
		},
		setUserName: function(username) {
			githubUserName = username;
		}
	}

})
.controller('ServicesController', function($scope, $cacheFactory, githubService) {
	$scope.message = "Welcome to Github Events Page";	

	$scope.$watch('username', function(newusername) {

		var cache = $cacheFactory.get('myCache');
		var cacheRes = cache.get(newusername);
		if (cacheRes != null) {
			$scope.events = cacheRes;
			return;		
		}	

		githubService.setUserName(newusername);
		githubService.events()
		.success(function(data, status, headers) {
			$scope.events = data.data;
			$scope.error = data.data.message;
			cache.put(newusername, data.data);
		})
		.error(function(data, status, headers) {
			$scope.error = data.data;	
		});
	});
});

var githubDecorator = function($delegate, $log) {
	var events = function(path) {
		var startedAt = new Date();
		var events = $delegate.events(path);
		var result = $delegate.locate();
		// Events is a promise
		events.always(function() {
			$log.info("Fetching Events" + 
				" took " + 
				(new Date() - startedAt) + "ms");
		});
		return result;
	}

	return {
		events: events,
		setUserName: function(username) {
			$delegate.setUserName(username);
		}

	};
}