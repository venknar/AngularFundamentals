angular.module('DigestApplyApp', []).controller('DigestApplyController', 
	function($scope) 
	{
		$scope.$watch('full_name', function(newval, oldval, scope) {
			if (newval == oldval) {

			} else {
				console.log("oldval", oldval);
				console.log("newval", newval);
			}			
		});
	}
);

