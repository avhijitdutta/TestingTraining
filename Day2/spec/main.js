'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var MyCtrl,
    scope,myFactory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_myFactory_) {
    scope = $rootScope.$new();
    myFactory=_myFactory_;
    MyCtrl = $controller('MyCtrl', {
      $scope: scope,
      myFactory:myFactory
      // place here mocked dependencies
    });
  }));
  
  it('to be defined', function () {
    expect(scope.CourseName).toBeDefined();
  });

  it('check value of course name', function () {
    expect(scope.CourseName).toEqual('We will start learning How to write testable angular code');
  });

  it('test factory', function () {
    expect(myFactory.getName()).toEqual('Avhijit');
  });

  it("set data in factory",function(){
    myFactory.setName('Dhiman');
    expect(myFactory.getName()).toEqual('Dhiman');
  })
  
});
