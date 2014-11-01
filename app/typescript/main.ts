declare var angular:any;

angular.module("DemoApp",['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
    	templateUrl:'partials/main.html'
	    
	})
	.state('docs',{
		url: '/docs',
		templateUrl:'partials/docs.html'
	})
})