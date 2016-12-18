angular.module('myApp').directive("userInfo",function(){
	var obj={};
	obj.restrict="E";
	obj.scope={
		'age':'@',
		'job':'=',
		'change':'&'
	};
	obj.template="<div>This is a user info <div>{{user.fname}}</div>";
	obj.template+="<input ng-model='user.fname'> </div>"; 
	obj.template+="<button ng-click=\"change({job:{'name':'avhijit',job:'IT'}})\">Chnage Name </button>"; 
	obj.template+="<input type='text' ng-model='job'>";
	obj.controller=function($scope){
		
	}
	return obj;
});
