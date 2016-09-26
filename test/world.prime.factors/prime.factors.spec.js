var primeFactorsOf = require('../../libs/world.prime.factors/lib/prime.factors.of');

describe('Prime factors decomposition', function() {

	it('can decompose 2', function() {
		expect(primeFactorsOf(2)).toEqual([2]);
	});
	
	it('can decompose 8', function() {
		expect(primeFactorsOf(8)).toEqual([2, 2, 2]);
	});
	
	it('can decompose 27', function() {
		expect(primeFactorsOf(27)).toEqual([3, 3, 3]);
	});

});