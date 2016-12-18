angular.module('myApp').directive("directive2",function(){
	var obj={};
	obj.restrict="E";
	obj.template="<div> Complile and link test</div>";

	obj.compile=function(elem){
		console.log(' Hi this is compile ');
	
		return {

			pre : function(scope, element, attr) {
				console.log("pre link called");
			},
			post : function(scope, element, attr) {
				console.log("post link called");
			}
		};
	};



	obj.link = function() {
		console.log("post lnk called");
	};		
	return obj;
});