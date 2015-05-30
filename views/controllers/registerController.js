var registerController = angular.module('registerController', []);


registerController.controller('registerCtrl', ['$scope', '$http', '$rootScope', '$location',
  function($scope, $http, $rootScope, $location) {

  	$rootScope.dashboard = false;
  	$scope.user = "";
  	console.log("hello world from register");

  	$scope.register = function() {
  		console.log(JSON.stringify($scope.user));

  		if ($scope.user.password != $scope.user.password2) {
  			alert("Please make sure that your passwords match");
  		} else {

  			//Make request to server to save user
  			$http.post('/register', $scope.user).success(function(response) {
  				console.log(JSON.stringify(response));
  				$rootScope.currentUser = response;
  			});
  		}
  		
  	};


  
 }]);