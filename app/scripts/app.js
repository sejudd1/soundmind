'use strict';

angular
  .module('soundmind', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'usersController'
      })
      .when('/client', {
        templateUrl: 'views/clientView.html',
        controller: 'usersController as usersContr'
      })
      .when('/admin', {
        templateUrl: 'views/adminList.html',
        controller: 'usersController as usersContr'
      })
			.when( '/client/:id', {
				
			} )
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/team', {
        templateUrl: 'views/team.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });