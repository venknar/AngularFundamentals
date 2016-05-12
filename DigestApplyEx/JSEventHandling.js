var div = document.findElementById('clickDiv');
div.addEventListener("click", function(evt) {
	console.log("evt", evt);
});

// $watch List Exmple

<body>
	<input ng-model="name" type="text" placeholder="your name"/>
	<h1>{{ name }}</h1>
</body>