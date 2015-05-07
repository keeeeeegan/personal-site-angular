app = angular.module('wubsite', ['ngRoute']);

app.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/about.html',
      controller: 'aboutCtrl'
    })
    .when('/projects', {
      templateUrl: 'pages/projects.html',
      controller: 'projectsCtrl'
    })
    .when('/resume', {
      templateUrl: 'pages/resume.html',
      controller: 'resumeCtrl'
    })
    .otherwise('/');
});

app.controller('aboutCtrl', function ($scope, $rootScope) {
  $rootScope.bodyClass = "about";
});
