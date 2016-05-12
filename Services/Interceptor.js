var app = angular.module('ServicesApp');
app.factory('myInterceptor', 
	function($q) {

		var interceptor = {
			'request': function(config) {
				return config;
			},
			'response': function(response) {
				return response;
			},
			'requestError': function(rejection) {
				return rejection;
			},
			'responseError': function(rejection) {
				switch (rejection.status) {
					case 401:
					{
						// Reidrect to the login page.
						$rootScope.$broadcast('auth.loginRequired');
						break;
					}
				}
				return rejection;				
			}
		};
		return interceptor;
	});

app.config(function($httpProvider) {
	$httpProvider.interceptors.push('myInterceptor');
	//$provide.decorator('githubService', githubDecorator);

});


app.run(function($http, $cacheFactory){
    $http.defaults.cache = $cacheFactory('myCache', { capacity: 50 });
});