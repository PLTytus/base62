function convertBase(input, fromBase, toBase){
	const MIN_BASE = 2;
	const MAX_BASE = 62;
	const DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

	if(fromBase < MIN_BASE || fromBase > MAX_BASE || toBase < MIN_BASE || toBase > MAX_BASE) return 0n;
	if(fromBase == toBase) return input;

	let base, result, digits;

	if(fromBase == 10){
		input = BigInt(input);
	} else {
		if(fromBase <= 36) input = input.toUpperCase();

		base = BigInt(fromBase);
		result = 0n;
		digits = DIGITS.slice(0, fromBase);

		for(let i = 0; i < input.length; i++){
			result = result * base + BigInt(digits.indexOf(input.charAt(i)));
		}

		input = result;
	}

	if(toBase == 10) return input;

	base = BigInt(toBase);
	result = "";
	digits = DIGITS.slice(0, toBase);

	while(0n < input){
		result = digits[Number(input % base)] + result;
		input /= base;
	}

	return result || "0";
}
