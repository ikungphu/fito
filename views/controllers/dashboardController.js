var dashboardController = angular.module('dashboardController', []);


dashboardController.controller('dashboardCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    
  	var randomScalingFactor = function(){ return Math.round(Math.random()*10)};
	

//Under Pronated User
	var underLineChartData = {
			labels : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(255, 64, 64, 0.2)",
					strokeColor : "rgba(255, 64, 64, 1)",
					pointColor : "rgba(255, 64, 64, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [8282,6795,7192,4611,6964,9043,5535]
				}
			]

		}
		
	var barChartData = {
			labels : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
			datasets : [
				{
					fillColor : "rgba(220,220,220, 0.2)",
					strokeColor : "rgba(220,220,220, 0.8)",
					highlightFill : "rgba(220,220,220, 0.75)",
					highlightStroke : "rgba(220,220,220, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
	
		}

	var pieData = [
				{
					value: 300,
					color:"#BF4834",
					highlight: "#62b9fb",
					label: "Toes"
				},
				{
					value: 50,
					color: "#ffb53e",
					highlight: "#7F3022",
					label: "Back"
				},
				{
					value: 100,
					color: "#1ebfae",
					highlight: "#FF5F45",
					label: "Heel"
				},
				{
					value: 120,
					color: "#f9243f",
					highlight: "#401811",
					label: "Midfoot"
				}

			];
			
	var doughnutData = [
				{
					value: 300,
					color:"#011C26",
					highlight: "#ffffff",
					label: "Toes"
				},
				{
					value: 50,
					color: "#630C00",
					highlight: "#ffffff",
					label: "Back"
				},
				{
					value: 100,
					color: "#A20064",
					highlight: "#ffffff",
					label: "Heel"
				},
				{
					value: 120,
					color: "#B7745B",
					highlight: "#ffffff",
					label: "Midfoot"
				}
			];
			
	var underRadarData = {
	    labels: ["Normal Pronation", "Under Pronation", "Over Pronation"],
	    datasets: [
	        {
	            label: "My Second dataset",
	            fillColor : "rgba(255, 64, 64, 0.2)",
	            strokeColor : "rgba(255, 64, 64, 0.8)",
	            pointColor : "rgba(255, 64, 64, 1)",
	            pointStrokeColor : "#fff",
	            pointHighlightFill : "#fff",
	            pointHighlightStroke : "rgba(48, 164, 255, 1)",
	            data: [25, 63, 12]
	        }
	    ]
	};
	var polarData = [
		    {
		    	value: 300,
		    	color:"#011C26",
		    	highlight: "#011C26",
		    	label: "adsfadfasdfa"
		    },
		    {
		    	value: 140,
		    	color: "#D9042B",
		    	highlight: "#D9042B",
		    	label: "Orange"
		    },
		    {
		    	value: 220,
		    	color: "#F4CB89",
		    	highlight: "#F4CB89",
		    	label: "Teal"
		    },
		    {
		    	value: 250,
		    	color: "#588C8C",
		    	highlight: "#588C8C",
		    	label: "Red"
		    }
		
	];


	// Normal Pronated user

var normalLineChartData = {
			labels : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(255, 64, 64, 0.2)",
					strokeColor : "rgba(255, 64, 64, 1)",
					pointColor : "rgba(255, 64, 64, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [4956,8739,4798,6055,9573,5384,9077]
				}
			]

		}

var normalRadarData = {
	    labels: ["Normal Pronation", "Under Pronation", "Over Pronation"],
	    datasets: [
	        {
	            label: "My Second dataset",
	            fillColor : "rgba(255, 64, 64, 0.2)",
	            strokeColor : "rgba(255, 64, 64, 0.8)",
	            pointColor : "rgba(255, 64, 64, 1)",
	            pointStrokeColor : "#fff",
	            pointHighlightFill : "#fff",
	            pointHighlightStroke : "rgba(48, 164, 255, 1)",
	            data: [88, 2, 10]
	        }
	    ]
	};
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
    $scope.status = "";
    var userData = [];
    $http.get('http://teamfito.me/api/users?username=' + $rootScope.currentUser.username).success(function(response) {
    	console.log(JSON.stringify(response));
    	userData = response[0]['dashboard'][0];
    	$scope.steps = userData['steps'];
	    $scope.fitment= userData['fitment'];
	    $scope.distance = userData['distance']; 
	    $scope.rate = userData['rate'];
	    $scope.recentActivity = userData['recentActivity'];
	    $scope.footStrike = userData['footStrike'];
	    $scope.pressureOutput = userData['pressureOutput'];
	    $scope.fitmentRating = userData['fitmentRating'];
	    $scope.pronation = userData['pronation'];
	    $scope.status = response[0]['status'];
	    console.log("Scope status " + $scope.status);
	    if ($scope.status == "Good") {
	    	$("#badfoot").hide();
	    } else {
	    	console.log("hiding");
	    	$("#goodfoot").hide();
	    }

	    
	    if($scope.status == "Good") {
	    	var chart1 = document.getElementById("line-chart").getContext("2d");
			window.myLine = new Chart(chart1).Line(normalLineChartData, {
				responsive : true,  
				scaleLineColor: "rgba(255,255,255,.2)", 
				scaleGridLineColor: "rgba(255,255,255,.05)", 
				scaleFontColor: "#ffffff"
			});

			var chart5 = document.getElementById("radar-chart").getContext("2d");
			window.myRadarChart = new Chart(chart5).Radar(normalRadarData, {
				responsive : true,
				scaleLineColor: "rgba(255,255,255,.05)",
				angleLineColor : "rgba(255,255,255,.2)"
			});
	    } else {
	    	
	    	var chart1 = document.getElementById("line-chart").getContext("2d");
			window.myLine = new Chart(chart1).Line(underLineChartData, {
				responsive : true,  
				scaleLineColor: "rgba(255,255,255,.2)", 
				scaleGridLineColor: "rgba(255,255,255,.05)", 
				scaleFontColor: "#ffffff"
			});
			
			var chart5 = document.getElementById("radar-chart").getContext("2d");
			window.myRadarChart = new Chart(chart5).Radar(underRadarData, {
				responsive : true,
				scaleLineColor: "rgba(255,255,255,.05)",
				angleLineColor : "rgba(255,255,255,.2)"
			});
	    }
	    
	    
	});
   
	}]);
   
  	
  	
/*
	$http.get('/users').success(function(response) {
		console.log(JSON.stringify(response));
	});
*/


  