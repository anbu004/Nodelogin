	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
			
			.when('/register', {
				templateUrl : 'pages/Register.html',
				controller  : 'RegisterController'
			})
			
			.when('/Login', {
				templateUrl : 'pages/LogIn.html',
				controller  : 'LogInController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope,$http) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$scope.currentUser  = function () {		
		console.log("$scope.deal :" +$scope.deal);
		$http({
    	    url: '/userInfo',
    	    method	: 'GET',
    	    headers	: { 'Access-Control-Request-Headers': 'accept, content-type','Access-Control-Request-Method': 'POST,PUT,DELETE'},
            dataType: 'json'
    	}).then(function (response) {
			if (!angular.isUndefined(response)) {
				if (!angular.isUndefined(response.error)) {
					alert("create kupon deal error :" + respObj.error);
				} else {
					console.log(JSON.stringify(response));
					$scope.kuponDealList = response.data;
					
				}
			} else {
				alert("Ajax Error: "+ respObj);
			}
		});
	};
	$scope.currentUser();
		
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
	scotchApp.controller('RegisterController', function($scope,$http) {
		$scope.createUser  = function () {
		$http({
    	    url:'/createUser',
    	    method	: 'POST',
    	    headers	: { 'Access-Control-Request-Headers': 'accept, content-type','Access-Control-Request-Method': 'POST,PUT,DELETE'},
            dataType: 'json',
			data	:	$scope.userData
    	}).then(function (response) {
			if (!angular.isUndefined(response)) {
				if (!angular.isUndefined(response.data.error)) {
					alert("create userData error :" + response.data.error);
				} else {
					alert = (response.data.success);
					$scope.userData = {};
				}
			} else {
				alert("Ajax Error: "+ response);
			}
		});
	};
	});
	
	scotchApp.controller('LogInController', function($scope,$http,$location) {
		$scope.logInUser  = function () {
		$http({
    	    url:'/login',
    	    method	: 'POST',
    	    headers	: { 'Access-Control-Request-Headers': 'accept, content-type','Access-Control-Request-Method': 'POST,PUT,DELETE'},
            dataType: 'json',
			data	:	$scope.userData
    	}).then(function (response) {
			if (!angular.isUndefined(response)) {
				if (!angular.isUndefined(response.data.error)) {
					alert("create userData error :" + response.data.error);
				} else {
					if(response.data.success=='Inside'){
						$location.path('/');
						
					}else{
					alert("email has been Not Registered");
					}
				}
			} else {
				alert("Ajax Error: "+ response);
			}
		});
	};
	});