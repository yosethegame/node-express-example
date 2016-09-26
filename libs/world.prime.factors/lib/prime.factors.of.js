primeFactorsOf = function(number) {
	var factors = [];
	var factor = 2;
	while(number > 1) {
		while(number % factor === 0) {
			factors.push(factor);
			number = number / factor;
		}
		factor ++;
	}

	return (typeof number === 'string' || number instanceof String)? "not a number" : factors;
};

module.exports = primeFactorsOf;