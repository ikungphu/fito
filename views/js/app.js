var fitoApp = angular.module('fitoApp', [
  'ngRoute',
  'dashboardController',
  'diagnosticsController',
  'shoelifeController',
  'recommendationsController',
  'settingsController',
  'loginController',
  'registerController'
]);

fitoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardCtrl'
      }).
       when('/diagnostics', {
        templateUrl: 'partials/diagnostics.html',
        controller: 'diagnosticsCtrl'
      }).
       
        when('/shoe-life', {
        templateUrl: 'partials/shoe-life.html',
        controller: 'shoelifeCtrl'
      }).
          when('/settings', {
        templateUrl: 'partials/settings.html',
        controller: 'settingsCtrl'
      }).
          when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
      }).
          when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'registerCtrl'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }]);

var checkLogin = function($q, $timeout, $http, $location, $rootScope) {
  var deferred = $q.defer();

  $http.get('/login').success(function(user) {
    $rootScope.errorMessage = null;
    //User is authenticated
    if (user !== '0') {
      $rootScope.currentUser = user;
      deferred.resolve();
    } else {
      $rootScope.errorMessage = "Please log in to access this page";
      console.log("Please login to access this page");
      deferred.reject();
      $location.url('/login');
    }
  });
  return deferred.promise;
};


fitoApp.controller("navController", function($scope, $http, $location) {

  $scope.logout = function() {
    $http.post('/logout').success(function() {
      $location.url('/login');
    });
  };

  $scope.isActive = function(route) {
    return route === $location.path();
  }

});

// fitoApp.controller("mainController", function($scope, $http, $location, $rootScope) {
//     alert($location.url());
//     //alert(JSON.stringify($location));
//     if ($location.url() == '/login' || $location.url() == '/register') {
//         $scope.dashboard = false;
//     } else {
//         $scope.dashboard = true;
//     }
// });

// added back for user profiles
fitoApp.controller("mainController", function($scope, $http, $location, $rootScope) {
  $scope.firstName = "";
  $scope.lastName = "";

  $scope.savedSettings = false;

  $scope.saveChanges = function() {
    $scope.savedSettings = !$scope.savedSettings;
    if ($location.path() === '/dashboard') {
      $scope.savedSettings = false;
    }    
    console.log($scope.firstName);
    console.log($scope.lastName);
  }
});