angular.module('ServicesApp', ['restangular'])
.factory('githubService', ['Restangular', function(Restangular) {

}]);

var User = Restangular.all('users');

var allUsers = User.getList(); // GET /users

var oneuser = Restangular.one('users', 'abc123');

oneuser.get().then(function(user) {
	user.getList('inboxes');
});


