'use strict';

describe('Service: loginService', function () {

  // load the service's module
  beforeEach(module('contactMgmtApp'));

  // instantiate service
  var loginService,$httpBackend;
  beforeEach(inject(function (_loginService_,_$httpBackend_) {
    $httpBackend=_$httpBackend_;
    loginService = _loginService_;
    
  }));

  it('should do something', function () {
    //$httpBackend.expect('POST', 'http://localhost/timeEntry', 'hello').respond(200, 'Done');
    $httpBackend.when('GET', 'http://www.json-generator.com/api/json/get/cuaspiexua','hello')
                            .respond(200,{userId: 'userX','A-Token': 'xxx'});

     loginService.getData().then(function(argument) {
        console.log(argument.data);
      }, function(error) {
          console.error(error)
      }
    );

     $httpBackend.flush();

  });

});


