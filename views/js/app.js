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
        controller: 'dashboardCtrl',
        resolve: {
          logincheck: checkLogin
        }
      }).
       when('/diagnostics', {
        templateUrl: 'partials/diagnostics.html',
        controller: 'diagnosticsCtrl',
        resolve: {
          logincheck: checkLogin
        }
      }).
       
        when('/shoe-life', {
        templateUrl: 'partials/shoe-life.html',
        controller: 'shoelifeCtrl',
        resolve: {
          logincheck: checkLogin
        }
      }).
          when('/settings', {
        templateUrl: 'partials/settings.html',
        controller: 'settingsCtrl',
        resolve: {
          logincheck: checkLogin
        }
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

});
/*
fitoApp.controller("mainController", function($scope, $http, $location, $rootScope) {
    alert($location.url());
    //alert(JSON.stringify($location));
    if ($location.url() == '/login' || $location.url() == '/register') {
        $scope.dashboard = false;
    } else {
        $scope.dashboard = true;
    }
});
*/