var greeting = "Ice to meet you.";
console.log(greeting);

angular.module("DemoApp", ['ui.router']).directive("ngKitten", function () {
    return {
        template: '<img src="http://placekitten.com/300/200">',
        restrict: 'AE'
    };
}).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    console.log("configuring");

    $stateProvider.state('home', {
        url: '/home',
        template: "hi"
    });
});
