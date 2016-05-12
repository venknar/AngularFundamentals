var user = $resource('/api/users/:userId.json', 
{
	userId: '@id'
}
);

// This would be GET /api/users
user.get(function(resp) {

	}, function(err) {

	}
);

// This would be GET /api/users/124
user.get({
	id: '124'
	}, function(resp) {

	}, function(err) {
});

user.save({}, {
	name: 'Ari'
}, function(response) {

}, function(response) {

});

user.delete({}, {
	id: '123'
}, function(response) {

}, function(response) {

});


var user = $resource('/api/users/:userId.json',
	{
		userId: '@Id'
	},
	{
		sendEmail: {
			method: 'POST',
			transformRequest: function(data, headerFn) {
				return JSON.stringify(data);
			},
			transformResponse: function(data, headerFn) {
				return JSON.parse(data);
			}
		},
		allInboxes: {
			method: 'JSONP'
		}
	}
);