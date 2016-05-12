angular.module('FiltersApp', []).controller('FiltersController', function($scope) {
	$scope.expr = "";
	$scope.today = new Date();
	$scope.string1 = ['Ari', 'likes', 'to', 'travel'];
	$scope.string2 = 'This WOULD be good to TRY';

	$scope.isCapitalized = function(str) {
		return str[0] == str[0].toUpperCase();
	}
})
.filter('capitalize', function(){
	return function(input) 
	{
		if (input) {
			return input[0].toUpperCase() + input.slice(1);
		}
	}
});

