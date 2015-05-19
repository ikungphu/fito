var loginController = angular.module('loginController', []);


loginController.controller('loginCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {

  	$rootScope.dashboard = false;
  	console.log("hello world from login");


  
 }]);