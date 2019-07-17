

window.addEventListener("DOMContentLoaded", init);



function init(){

	const powerButton = document.getElementsByClassName("power button");

	const numberButtons = document.getElementsByClassName("number button");

	powerButton[0].addEventListener("click", handlePowerPressed);

	//add a click event listener to every number-button
	for(button of numberButtons){
		button.addEventListener("click", addNumberToScreen);
	}
}// init


function handlePowerPressed(event){
	//prevents the form buttons from triggering a refresh
	event.preventDefault();

	//grab the button that fired trigger the click event
	const button = event.target;

	//declare the class name to be checked for and added if not present
	const powerOnClass = "powered";

	const screen = document.getElementById("screen");

	//try to find if the screen is powered
	if(!screen.classList.contains(powerOnClass)){
		//add the class if it's not there
		screen.classList.add(powerOnClass);
	}

	//set the screen to show zero
	screen.innerText = "0";
}//handlePowerPressed


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

function add(num1, num2){

}

