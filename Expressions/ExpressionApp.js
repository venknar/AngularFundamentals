app = angular.module('ExpressionsApp', []);

app.controller('ExpressionController', 
	function($scope, $parse) 
	{ 
		$scope.$watch('expr', function(newval, oldval, scope){
			var parseFun = $parse(newval);
			$scope.exprValue = parseFun(scope);	
		});
	}
);
