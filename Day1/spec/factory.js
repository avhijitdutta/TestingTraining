'use strict';

describe("factory : myfactory",function(){

	// load module 
	beforeEach(module('myApp'));
	var myfactory;
	beforeEach(inject(function(_myFactory_){
		myfactory=_myFactory_;

	}));	

	it("test my factory",function(){
		
		expect(myfactory.getName()).toEqual('Avhijit');
	});

});
