var registerController = angular.module('registerController', []);


registerController.controller('registerCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {

  	$rootScope.dashboard = false;
  	console.log("hello world from register");


  
 }]);