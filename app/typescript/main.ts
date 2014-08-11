declare var angular:any;

var greeting : string = "Ice to meet you.";
console.log(greeting);

angular.module("DemoApp",[])
.directive("ngKitten",function(){
	return {
		template: '<img src="http://placekitten.com/300/200">',
		restrict:'AE'
	}
})
