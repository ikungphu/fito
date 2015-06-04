var dashboardController = angular.module('dashboardController', []);


dashboardController.controller('dashboardCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    

    $rootScope.dashboard = true;

    //console.log("Current user is " + $rootScope.currentUser.username);
    $scope.steps = "";
    $scope.fitment= "";
    $scope.distance = "";
    $scope.rate = "";
    $scope.recentActivity = "";
    $scope.footStrike = "";
    $scope.pressureOutput = "";
    $scope.fitmentRating = "";

    var userData = [];
    $http.get('http://teamfito.me/api/users?username=' + $rootScope.currentUser.username).success(function(response) {
    	//console.log(JSON.stringify(response));
    	userData = response[0]['dashboard'][0];
    	console.log(JSON.stringify(userData));
    	console.log('Steps are ' + userData['steps']);
    	$scope.steps = userData['steps'];
	    $scope.fitment= userData['fitment'];
	    $scope.distance = userData['distance']; 
	    $scope.rate = userData['rate'];
	    $scope.recentActivity = userData['recentActivity'];
	    $scope.footStrike = userData['footStrike'];
	    $scope.pressureOutput = userData['pressureOutput'];
	    $scope.fitmentRating = userData['fitmentRating'];
	    $scope.pronation = userData['pronation'];
    });
  
  	var chart1 = document.getElementById("line-chart").getContext("2d");
	window.myLine = new Chart(chart1).Line(lineChartData, {
		responsive : true,  
		scaleLineColor: "rgba(255,255,255,.2)", 
		scaleGridLineColor: "rgba(255,255,255,.05)", 
		scaleFontColor: "#ffffff"
	});
	var chart2 = document.getElementById("bar-chart").getContext("2d");
	window.myBar = new Chart(chart2).Bar(barChartData, {
		responsive : true,  
		scaleLineColor: "rgba(255,255,255,.2)",
		scaleGridLineColor: "rgba(255,255,255,.05)", 
		scaleFontColor: "#ffffff"
	});
	var chart5 = document.getElementById("radar-chart").getContext("2d");
	window.myRadarChart = new Chart(chart5).Radar(radarData, {
		responsive : true,
		scaleLineColor: "rgba(255,255,255,.05)",
		angleLineColor : "rgba(255,255,255,.2)"
	});
/*
	$http.get('/users').success(function(response) {
		console.log(JSON.stringify(response));
	});
*/


  }]);