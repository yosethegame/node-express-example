var request = require('request');
var http    = require('http');
var chai = require('chai');
var expect = chai.expect;
var server  = require('../libs/server');

describe('String Guard make it accept a GET request with a string as parameter and make it respond a JSON containing the "not a number" error message.:', function() {
	
	var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
   
    it('returns the expected pong', function(done) {
        request('http://localhost:7000/primeFactors?number=hello', function(error, response, body) {
            expect(body.replace(/\r?\n|\r|\s/g,"")).to.equal( JSON.stringify({"number" : "hello","error" : "not a number"}) );
            done(); 
        });
    });
})