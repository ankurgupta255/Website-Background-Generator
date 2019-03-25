// var _ = require('lodash');

// var arr=[1,2,3,4,5];
// console.log('answer',_.without(arr, 3));

var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var rand=document.getElementById("unique");

function setgrad(){
	body.style.background =
	"linear-gradient(to right, "
	 + color1.value
	 + ", "
	 + color2.value 
	 + ")";

	 css.textContent= body.style.background;
}

function rc(){
	var r1='#'+(Math.random()*0xFFFFFF<<0).toString(16);
	return r1;
}
function randcol(){
	color1.value=rc();
	color2.value=rc();
	setgrad();
}
console.log(css);
console.log(color1.value);
console.log(color2.value);

rand.addEventListener("click",randcol);
color1.addEventListener("input", setgrad);
color2.addEventListener("input", setgrad);