angular.module('ServicesApp', [])
.config(function(githubServiceProvider) {
	githubServiceProvider.setGithubUrl('git@github.com');
})
.provider('githubService', function($http){
	var githubUrl = 'https://github.com',

	setGithubUrl: function(url) {
		if (url) { githubUrl = url }
	},

	method: JSONP,

	$get: function($http) {
		self = this;
		return $http({
			method: self.method,
			url: githubUrl + '/events'
		});
	}
})
.controller('ServicesController', function($scope, githubService) {
	$scope.message = "Welcome to Github Events Page";	

	$scope.$watch('username', function(newusername) {
		githubService.setUserName(newusername);
		githubService.events()
		.success(function(data, status, headers) {
			$scope.events = data.data;
		})
	});
});