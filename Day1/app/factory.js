angular.module("myApp")
.factory("myFactory",function(){

	var obj={};

	obj.name="Avhijit";

	obj.setName=function(val){
		obj.name=val;
	}	

	obj.getName=function(){

		return obj.name;
	}

	return obj;

});

function myObject(){

	this.getValue=function(){

		return "my object value";
	}
}


angular.module('myApp').factory("myProvider",function(){
	console.log("my factory :function called");
	return new myObject();	
});
