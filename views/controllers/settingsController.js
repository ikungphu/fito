var settingsController = angular.module('settingsController', []);


settingsController.controller('settingsCtrl', ['$scope', '$http', function($scope, $http) {


	 console.log("Hello world from settings");

      $scope.upload = function() {
        var x = $("#data-input").get(0).files[0];
        var parsed = Papa.parse(x, {

	      	complete: function(results) {
	            alert(JSON.stringify(results));
	            if(results['error'] == null) {
	            	//Code to modify users
	            	$http.put('/users', results['data']).success(function(response) {
	            		alert("successfully updated user data");
	            	});
	            }
	            //alert(JSON.stringify(results['data']));
	        }
          
        });
        
    }

}]);