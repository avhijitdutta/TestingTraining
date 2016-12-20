angular.module('myApp').directive("userInfo",function(){
	var obj={};
	obj.restrict="E";
	obj.scope={
		'age':'@',
		'info':'=',
		'change':'&'
	};
	obj.template="<div>This is user info directive</div>";
	obj.template+="<p><ul><li>{{info.fname}}</li><li>{{info.lname}}</li> <li>{{info.job}}</li> <li>{{age}} </li></ul></p>";
	obj.template+="<button ng-click=\"change()\"> </button>";
	return obj;
});
