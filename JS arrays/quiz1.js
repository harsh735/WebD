function isEven(x) {
	if(x % 2 == 0) {
		console.log("True");
	}
	else if(x % 2 != 0) {
		console.log("False");
	}
}


function factorial(x) {
	var fact = 1;
	for(var i = 1; i <= x; ++i) {
		fact *= i;
	}
	console.log(fact);
}


function kebabToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr;
}	 