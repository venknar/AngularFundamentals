angular.module('RouteApp', ['ngRoute']).
	config(function($routeProvider) {		
		$routeProvider.when('/', {
			controller: 'HomeController',	
			templateUrl: 'views/home.html'
		})
		.when('/inbox/:name', {
			controller: 'InboxController',
			templateUrl: 'views/inbox.html'
		})
		.otherwise({redirectTo: '/'});
	})
	.controller('InboxController', function($scope, $routeParams) 
	{
		$scope.message = "Wellcome to your Inbox";
	})
	.controller('HomeController', function($scope) 
	{
		$scope.message = "Welcome to Home Landing";
	});