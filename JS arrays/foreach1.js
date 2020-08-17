var nums = [45,65,77,34];

nums.forEach(function(num){
	console.log(num);
});


function myForEach(arr, func) {
	//loop through array
	for (var i = 0; i < arr.length; i++) {
		//call func for each item in array inside the loop
		func();
	}	
};


Array.prototype.myForEach = function(func) {
    for(var i = 0; i<this.length; i++) {
        func(this[i]);    
    }
}


var friends = ["charlie", "dave", "maddy", "kaitlyn"];

friends.myForEach(alert)