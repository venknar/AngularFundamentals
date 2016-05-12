angular.module('myApp.directives', []);
angular.module('myApp.services', []);
angular.module('myApp.filters', []);

angular.module('myApp.controllers', [
'myApp.services'
]);

angular.module('myApp', [
'myApp.directives',
'myApp.controllers',
'myApp.filters',
'myApp.services'
]);



angular.module('myApp.home', []);
angular.module('myApp.login', []);
angular.module('myApp.account', []);
angular.module('myApp', [
'myApp.home',
'myApp.login',
'myApp.account'
]);