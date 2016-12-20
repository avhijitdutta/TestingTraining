'use strict';

describe("directive : userInfo",function(){

  beforeEach(module('myApp'));
  var scope,compile,directiveElem;

  function getCompiledElem(){
  	var elem="<user-info info=\"info\" age=\"age\" change=\"onChange()\"> </user-info>";
  	var compiledElement=compile(elem)(scope);
  	scope.$digest();
  	return compiledElement;
  }

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope,$compile) {
    scope = $rootScope.$new();
    scope.info={name:'avhijit'};
    scope.age = '23';
    scope.onChange = jasmine.createSpy('onChange');

    compile=$compile;
    directiveElem=getCompiledElem();
  }));

  it("check the dom value",function(){
  	var divElem=directiveElem.find('div');
  	expect(divElem.text()).toBe('This is user info directive');

  	var isolatedScope=directiveElem.isolateScope();
  	expect(isolatedScope.info).toEqual({name:'avhijit'});
  	isolatedScope.info.name="sudu";
  	expect(scope.info.name).toEqual('sudu');

  	expect(typeof(scope.onChange)).toEqual('function');
  	isolatedScope.change();
  	expect(scope.onChange).toHaveBeenCalled();
  })
  
});