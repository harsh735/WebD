
//function to print the reverse of an array

function printReverse(arr){
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}	
}


//function which returns true if all items in array are identical

function isUniform(arr){
	for (var i = arr.length - 1; i >= 0; i--) {
		if(arr[i+1] === arr[i]){
			return true;
		}
		else {
			return false;
		}
	}
}



//funtion to find the sum of arrays

function sumArray(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i]
	}	
	return sum;
}


//function to find the max array

function max(arr){
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}



