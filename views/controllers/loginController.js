var loginController = angular.module('loginController', []);


loginController.controller('loginCtrl', ['$scope', '$http', '$rootScope', '$location',
  function($scope, $http, $rootScope, $location) {

  	$rootScope.dashboard = false;
  	console.log("hello world from login");
  	$scope.user = "";

  	$scope.login = function() {

  		console.log(JSON.stringify($scope.user));

  		$http.post('/login', $scope.user).success(function(response) {
  			console.log("Success ");
  			$rootScope.currentUser = response;
  			$location.url('/dashboard');
  		});
  	};

  
 }]);