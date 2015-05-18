app = angular.module('wubsite', ['ngRoute']);

app.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeCtrl'
    })
    .when('/about', {
      templateUrl: 'pages/about.html',
      controller: 'aboutCtrl'
    })
    .when('/work', {
      templateUrl: 'pages/resume.html',
      controller: 'resumeCtrl'
    })
    .when('/projects', {
      templateUrl: 'pages/projects.html',
      controller: 'projectsCtrl'
    })
    .when('/thing', {
      templateUrl: 'pages/thing.html',
      controller: 'thingCtrl'
    })
    .when('/contact', {
      templateUrl: 'pages/contact.html',
      controller: 'contactCtrl'
    })
    // .when('/contact', {
    //   templateUrl: 'pages/contact.html',
    //   controller: 'contactCtrl'
    // })
    .when('/experience', {
      templateUrl: 'pages/resume.html',
      controller: 'resumeCtrl'
    })
    .when('/links', {
      templateUrl: 'pages/cool-links.html',
      controller: 'linksCtrl'
    })
    .otherwise('/');
});

app.controller('aboutCtrl', function ($scope, $rootScope) {
  $rootScope.bodyClass = "about";
});

app.controller('homeCtrl', function ($scope, $rootScope) {
  $rootScope.bodyClass = "home";
});

app.controller('projectsCtrl', function ($scope, $rootScope) {
  $rootScope.bodyClass = "projects";
});

app.controller('contactCtrl', function ($scope, $rootScope) {
  $rootScope.bodyClass = "email";
});

app.controller('resumeCtrl', function ($scope, $rootScope) {
  $rootScope.bodyClass = "resume";
});

app.controller('thingCtrl', function ($scope, $rootScope) {
  $rootScope.bodyClass = "thing";
});

app.controller('linksCtrl', function ($scope, $rootScope) {
  $rootScope.bodyClass = "links";
});
