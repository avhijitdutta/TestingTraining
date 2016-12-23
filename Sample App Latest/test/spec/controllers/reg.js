'use strict';

describe('Controller: RegCtrl', function () {

  // load the controller's module
  beforeEach(module('contactMgmtApp'));

  var RegCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegCtrl = $controller('RegCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    
  });

});
