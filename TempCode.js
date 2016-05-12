angular.module('RouteApp', ['ngRoute']).
	config(['$routeProvider', function($routeProvider) {
		
		$routeProvider.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'	
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})
		.when('/dashboard', {
			templateUrl: 'views/dashboard.html',
			controller: 'DashboardController',
			resolve: {
				user: function(SessionService) {
					return SessionService.getCurrentUser();
				}
			}
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);


	.factory('UserService', function($http) {
	
	var currentUser;

	return {
		getCurrentUser: function() {
			return currentUser;
		},
		setCurrentUser: function(user) {
			currentUser = user;
		}
	}

})
