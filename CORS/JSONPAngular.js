$http.jsonp('http://query.yahooapis.com/v1/public/yql', {
    params: {
        q: 'select woeid from geo.places where text="' + location + '"',
        format: 'json',
        callback: 'JSON_CALLBACK'
    }
}).then(function (result) {
    // result.data contains the 
    // the response from Yahoo
    console.log(result.data);
});
