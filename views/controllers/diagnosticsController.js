var diagnosticsController = angular.module('diagnosticsController', []);


diagnosticsController.controller('diagnosticsCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
  
	$rootScope.dashboard = true;

	$http.get('http://teamfito.me/api/users?username=' + $rootScope.currentUser.username).success(function(response) {
		userData = response[0]['diagnostics'][0];
		console.log(JSON.stringify(userData));
		
		$scope.archTitle = response[0]['diagnostics'][0]['arch'][0]['title'];
		$scope.archValue = response[0]['diagnostics'][0]['arch'][0]['value'];
		$scope.dimensionsTitle = response[0]['diagnostics'][0]['dimensions'][0]['title'];
		$scope.dimensionsValue = response[0]['diagnostics'][0]['dimensions'][0]['value'];
		$scope.analysisTitle = response[0]['diagnostics'][0]['analysis'][0]['title'];
		$scope.analysisValue = response[0]['diagnostics'][0]['analysis'][0]['value'];
		$scope.pronationTitle = response[0]['diagnostics'][0]['pronation'][0]['title'];
		$scope.pronationValue = response[0]['diagnostics'][0]['pronation'][0]['value'];
		$scope.diagnosisTitle = response[0]['diagnostics'][0]['diagnosis'][0]['title'];
		$scope.diagnosisValue = response[0]['diagnostics'][0]['diagnosis'][0]['value'];
		$scope.diagnosisDimensions = response[0]['diagnostics'][0]['diagnosisDimensions'];

		var arr = $scope.diagnosisDimensions.split("|");
		$scope.diagnosisDimensions1 = arr[0];
		$scope.diagnosisDimensions2 = arr[1];
		$scope.diagnosisDimensions3 = arr[2];
	});
}]);