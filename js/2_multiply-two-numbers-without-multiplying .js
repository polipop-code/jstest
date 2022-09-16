function multiply(a, b) {
	let result = 0;
	const positive = Math.abs(b) == b;

	for (i = 0; i < Math.abs(b); i++) {
		if (positive == true) {
			result = result + a;
		} else {
			result = result - a;
		}
	}

	console.log(result);
}

multiply(-2, 20);
