

window.addEventListener("DOMContentLoaded", init);



function init(){

	const powerButton = document.getElementsByClassName("power button");

	const calculatorScreen = document.getElementById("screen");

	const numberButtons = document.getElementsByClassName("number button");

	//add a click event listener to every number-button
	for(button of numberButtons){
		button.addEventListener("click", addNumberToScreen);
	}
}// init


function addNumberToScreen(event){
	//prevents the form buttons from triggering a refresh
	event.preventDefault();

	//grabs the button that triggered the click event
	const button 						= event.target;
	//grab the data-value from the buttons dataset
	const { value: buttonValue } 		= button.dataset;
	//grab the value from the screen
	const { innerText: screenValue } 	= calculatorScreen;
	//add the new value to the existing one
	const newScreenValue 				= screenValue + buttonValue;

	//change the current screen value to the new value
	screenValue.innerText = newScreenValue;
}// addToScreen


