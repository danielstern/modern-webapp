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

	console.log("configuring");

	$stateProvider
		.state('home', {
				url: '/home',
				template:"hi",
				// controller: function() {
				// 	console.log("HI!");
				// 	},
    //     // views: {
        // 	"main": {
        // 		template:'partials/main.html'
        // 	},
        // 	"thought": {
        // 		template:'an apple a day'
        // 	}
        // }
		})
})