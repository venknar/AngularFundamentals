angular.module('AddNumberApp', []).controller('AddNumberController', 
	function($scope) 
	{

		$scope.count = 0;
		
		$scope.add = function(amount) 
		{
			$scope.count += amount;
		}
		
		$scope.subtract = function(amount) 
		{
			$scope.count -= amount;
		}

	}
);

