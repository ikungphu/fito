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
        
         when('/recommendations', {
        templateUrl: 'partials/recommendations.html',
        controller: 'recommendationsCtrl'
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