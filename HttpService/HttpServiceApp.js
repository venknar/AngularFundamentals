$http({
	method: 'GET',
	url: '/api/users.json'
}).success(function(data, status, headers, config) {

}).error(function(data, status, headers, config) {

});

then(function(resp) {

}, function (resp) {

});

$http.get('/api/users.json', { cache: true})
.success(function(data) {})
.error(function(data) {})


var lru = $cacheFactory('lru', {capacity : 20});
$http.get('/api/users.json', {cache:lru})
.success(function(data) {})
.error(function(data) {})


