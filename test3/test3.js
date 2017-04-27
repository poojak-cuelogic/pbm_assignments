var calculator = (function() {
	return {
		multiply : function(num1, num2) {
			if (num1  == 0 || num2 == 0) {
				return '0';
			}

			num1 = num1.split('').reverse();
			num2 = num2.split('').reverse();
			
			var product = [];
			for (var i = 0; num1[i] >= 0; i++) {
				for (var j = 0; num2[j] >= 0; j++) {
					if (!product[i + j]) {
						product[i + j] = 0;
					}
					product[i + j] += num1[i] * num2[j];
				}
			}

			for (var index = 0; product[index] >= 0; index++) {
				if (product[index] >= 10) {
					if (!product[index + 1]) {
						product[index + 1] = 0;
					}
					product[index + 1] += parseInt(product[index] / 10);
					product[index] %= 10;
				}
			}
			while(product[product.length - 1] === 0){
				product.pop();
			}
			return product.reverse().join('');
		}
	};
})();

console.log(calculator.multiply('123456789343244355465643534545', '9876543210'));
console.log(calculator.multiply('0123', '004'));
console.log(calculator.multiply('18', '21'));
console.log(calculator.multiply('12345678934534534534534', '987654353'));