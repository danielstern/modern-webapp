declare var angular:any;

var greeting : string = "Ice to meet you.";
console.log(greeting);

angular.module("DemoApp",['ui.router'])
.directive("ngKitten",function(){
	return {
		template: '<img src="http://placekitten.com/300/200">',
		restrict:'AE'
	}
})
.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
				url: '/',
        views: {
        	"main": {
        		templateUrl:'partials/main.html'
        	},
        	"image": {
        		template:'<ng-kitten></ng-kitten>'
        	}
        }
		})
})