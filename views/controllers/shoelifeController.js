var shoelifeController = angular.module('shoelifeController', []);


shoelifeController.controller('shoelifeCtrl', ['$scope', '$http', '$rootScope',
	function($scope, $http, $rootScope) {


		$rootScope.dashboard = true;

		$scope.remainingTitle = "";
		$scope.remainingValue = "";
		$scope.distanceTitle = "";
		$scope.distanceValue = "";
		$scope.daysTitle = "";
		$scope.daysValue = "";
		$scope.rateValue = "";
		$scope.rateTitle = "";
		$scope.footstrike = "";
		$scope.pressure = "";
		$scope.pronation = "";


		$http.get('http://teamfito.me/api/users?username=' + $rootScope.currentUser.username).success(function(response) {
			//console.log(JSON.stringify(response));
			userData = response[0]['shoeLife'][0];
			console.log(userData);
			
			$scope.remainingTitle = response[0]['shoeLife'][0]['remaining'][0]['title'];
			$scope.remainingValue = response[0]['shoeLife'][0]['remaining'][0]['value'];
			$scope.distanceTitle = response[0]['shoeLife'][0]['distance'][0]['title'];
			$scope.distanceValue = response[0]['shoeLife'][0]['distance'][0]['value'];
			$scope.daysTitle = response[0]['shoeLife'][0]['days'][0]['title'];
			$scope.daysValue = response[0]['shoeLife'][0]['days'][0]['value'];
			$scope.rateValue = response[0]['shoeLife'][0]['rate'][0]['value'];
			$scope.rateTitle = response[0]['shoeLife'][0]['rate'][0]['title'];
			$scope.footstrike = "";
			$scope.pressure = "";
			$scope.pronation = "";
			//console.log("Title is " + $scope.remainingTitle);

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

		var chart3 = document.getElementById("polar-chart").getContext("2d");
		window.myLine = new Chart(chart3).Doughnut(doughnutData, {
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


  }]);