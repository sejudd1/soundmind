angular
	.module('Soundmind', [ 'ui.router', 'usersController' ] )
	.config(interceptor)
	.config(MainRouter)

function interceptor($httpProvider){
	$httpProvider.interceptors.push( 'authInterceptorFactory' )
}

function MainRouter($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html'
			controller: 'usersController'
		})

		//add other pages for mainRouter here
		
		// .state('loggedOut', {
		// 	url: '/loggedOut',
		// 	templateUrl: 'templates/home.html'
		// })
		// .state('signup', {
		// 	url: '/signup',
		// 	templateUrl: 'templates/signup.html'
		//})
		// .state('login', {
		// 	url: '/login',
		// 	templateUrl: 'templates/login.html'
		// })
		// .state('profile', {
		// 	url: '/profile',
		// 	templateUrl: 'templates/profile.html'
		// })
		.state('clientView', {
			url: '/clientView',
			templateUrl: 'templates/clientView.html'
			controller: 'usersController'
		})
		.state('adminView', {
			url: '/adminView',
			templateUrl: 'templates/adminView.html'
			controller: 'usersController'
		})
		
}