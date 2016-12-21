'use strict';

describe('Controller: loginCtrl', function () {

  // load the controller's module
  beforeEach(module('contactMgmtApp'));

  var LoginCtrl,scope,compile,compiled,formElem;
  formElem= '<form novalidate name="login" ng-submit="loginForm(login)">';
  formElem+='<input type="email" name="email" class="form-control" placeholder="Email" ng-model="user.email" required>';
  formElem+='<input type="password" class="form-control" name="password" placeholder="Password" ng-model="user.password" required>';
  formElem+='</form>';

  function initFixture() {
    var element = angular.element(formElem);
    compiled = compile(element)(scope);
    scope.$apply();
  }

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$compile) {
    compile=$compile;
    scope = $rootScope.$new();
    LoginCtrl = $controller('loginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
    initFixture();
  }));

  it('init : controller', function () {

    var expectValue={
      email:'',
      password:''
    };

    expect(scope.user).toEqual(expectValue);

  });

  it('init : form testing with invalid email id', function () {
    scope.user.email="counter.jit";
    scope.user.password="123456";
    scope.$apply();
    expect(scope.login.$valid).toEqual(false);
  });

   it('init : form testing with vaild email id', function () {
    scope.user.email="counter.jit@gmail.com";
    scope.user.password="123456";
    scope.$apply();
    expect(scope.login.$valid).toEqual(true)
  });

});
