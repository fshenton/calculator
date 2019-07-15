
const powerButton = document.getElementById("powerbutton");
const calculatorScreen = document.getElementById("calculatorscreen");

const zeroButton = document.getElementById("zerobutton");
const oneButton = document.getElementById("onebutton");
const twoButton = document.getElementById("twobutton");
const threeButton = document.getElementById("threebutton");
const fourButton = document.getElementById("fourbutton");
const fiveButton = document.getElementById("fivebutton");
const sixButton = document.getElementById("sixbutton");
const sevenButton = document.getElementById("sevenbutton");
const eightButton = document.getElementById("eightbutton");
const nineButton = document.getElementById("ninebutton");


// other, better form?
// document.getElementById("myAnchor").addEventListener("click", function(event){
//   blah blah
// });


// FUNCTION BUTTONS
powerButton.onclick = function(event) { 
	event.preventDefault();
	calculatorScreen.style.backgroundColor = "#BBBBBB";
	//calculatorScreen.setAttribute("background-color", "#BBBBBB");
	// ^ unclear why that doesn't work
	calculatorScreen.innerText = "0";
}

// NUMBER BUTTONS!

// sooooo much duplication ;_;

zeroButton.onclick = function(event){
	event.preventDefault()
	if(calculatorScreen.innerText !== "0"){
		calculatorScreen.innerText += "0";
	}
}

oneButton.onclick = function(event){
	event.preventDefault()
	if(calculatorScreen.innerText !== "0"){
		calculatorScreen.innerText += "1"
	} else { 
		calculatorScreen.innerText = "1" 
	}
}

twoButton.onclick = function(event){
	event.preventDefault()
	if(calculatorScreen.innerText !== "0"){
		calculatorScreen.innerText += "2";
	} else { 
		calculatorScreen.innerText = "2" 
	}
}

threeButton.onclick = function(event){
	event.preventDefault()
	if(calculatorScreen.innerText !== "0"){
		calculatorScreen.innerText += "3";
	} else { 
		calculatorScreen.innerText = "3" 
	}
}

fourButton.onclick = function(event){
	event.preventDefault()
	if(calculatorScreen.innerText !== "0"){
		calculatorScreen.innerText += "4";
	} else { 
		calculatorScreen.innerText = "4" 
	}
}

fiveButton.onclick = function(event){
	event.preventDefault()
	if(calculatorScreen.innerText !== "0"){
		calculatorScreen.innerText += "5";
	} else { 
		calculatorScreen.innerText = "5" 
	}
}

sixButton.onclick = function(event){
	event.preventDefault()
	if(calculatorScreen.innerText !== "0"){
		calculatorScreen.innerText += "6";
	} else { 
		calculatorScreen.innerText = "6" 
	}
}

sevenButton.onclick = function(event){
	event.preventDefault()
	if(calculatorScreen.innerText !== "0"){
		calculatorScreen.innerText += "7";
	} else { 
		calculatorScreen.innerText = "7" 
	}
}

eightButton.onclick = function(event){
	event.preventDefault()
	if(calculatorScreen.innerText !== "0"){
		calculatorScreen.innerText += "8";
	} else { 
		calculatorScreen.innerText = "8" 
	}
}

nineButton.onclick = function(event){
	event.preventDefault()
	if(calculatorScreen.innerText !== "0"){
		calculatorScreen.innerText += "9";
	} else { 
		calculatorScreen.innerText = "9" 
	}
}

