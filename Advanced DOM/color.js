var tag = document.querySelector("button");

var isPurple = false;
tag.addEventListener("click" , function(){
	if(isPurple){
		document.body.style.background = "white";
	}
	else{
		document.body.style.background = "purple";
	}
	isPurple != isPurple;
});