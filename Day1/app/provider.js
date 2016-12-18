angular.module('myApp').provider("myProvider",function(){

	this.$get=function(){
		console.log("myProvider: $get Called");
		return "My Value";
	}		
});
