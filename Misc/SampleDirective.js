angular.module('myApp')
.controller('LoginController', function($scope) {
// Show login form if true and show
// registration form if false
$scope.showLoginForm = true;
	$scope.sendLogin = function() {}
	$scope.sendRegister = function() {}
});

<div ng-show="showLoginForm">
	<form ng-submit="runLogin()"></form>
</div>
<div ng-show="!showLoginForm">
	<form ng-submit="runRegister()"></form>
</div>





angular.module('myApp')
.directive('loginForm', function() {
	return {
		scope: {
			onLogin: '&',
			onRegister: '&'
		},
		templateUrl: '/templates/loginRegForms.html',
		link: function(scope, ele, attrs) {
			scope.showLoginForm = true;
			scope.submitLogin = function() {
				scope.onLogin({user: scope.loginUser});
			}
			scope.submitRegister = function() {
				scope.onRegister({user: scope.newUser});
			}
		}
	}
});

angular.module('myApp')
.controller('LoginController', function($scope) {
	$scope.sendLogin = function() {}
	$scope.sendRegister = function() {}
});


<div login-form
	on-login="sendLogin(user)"
	on-register="sendRegister(user)"></div>