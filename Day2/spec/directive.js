'use strict';

describe("directive : userInfo",function(){

	beforeEach(module('myApp'));

	var compile,scope,directiveElem;

	function getCompiledElement(){
		var elem=angular.element("<user-info> </user-info>");
		var compileElem=compile(elem)(scope);
		scope.$digest();
		return compileElem;
	}

	beforeEach(inject(function($compile,$rootScope){
		scope=$rootScope.$new();
		compile=$compile;
		directiveElem = getCompiledElement();
	}));

	it('test directive',function(){

		var divElement = directiveElem.find('div');
  		expect(divElement).toBeDefined();
		expect(divElement.text()).toEqual('This is user info directive  ');
	});

});