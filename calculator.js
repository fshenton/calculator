

window.addEventListener("DOMContentLoaded", init);


function init(){

	const powerButton = document.getElementsByClassName("power button");
	const numberButtons = document.getElementsByClassName("number button");
	const operatorButtons = document.getElementsByClassName("operator button");
	const screen = document.getElementById("screen");
	const powered = "powered";

	powerButton[0].addEventListener("click", handlePowerPressed);

	//add a click event listener to every number-button
	for(button of numberButtons){
		button.addEventListener("click", addNumberToScreen);
	}

	//add a click event listener to every operator-button
	for(button of operatorButtons){
		button.addEventListener("click", addOperatorToScreen);
	}


	function handlePowerPressed(event){
		//prevents the form buttons from triggering a refresh
		event.preventDefault();

		//grab the button that fired trigger the click event
		const button = event.target;

		//try to find if the screen is powered by checking its classes
		if(!screen.classList.contains(powered)){
			//add the class if it's not there
			screen.classList.add(powered);
		}

		//set the screen to show zero
		screen.innerText = "0";
	}//handlePowerPressed


	function addNumberToScreen(event){
		//prevents the form buttons from triggering a refresh
		event.preventDefault();

		//don't do anything else if the screen isn't turned on
		if(screen.classList.contains(powered)){
			
			//grabs the button that triggered the click event
			const button 						= event.target;
			//grab the data-value from the buttons dataset
			const { value: buttonValue } 		= button.dataset;
			//grab the value from the screen
			const { innerText: screenValue } 	= screen;
			//add the new value to the existing one
			
			let newScreenValue = 0;

			//don't append new number to new value if current value is 0 (prevents "0134"...)
			if(screen.innerText === "0"){
				newScreenValue = buttonValue;
			}
			else{
				newScreenValue = screenValue + buttonValue;
			}			

			//change the current screen value to the new value
			screen.innerText = newScreenValue;
		}

	}// addNumberToScreen

	function addBasicOperatorsToScreen(event){
		event.preventDefault();

		if(screen.classList.contains(powered)){
			
			const button 						= event.target;
			const { innerText : operator } 		= button;
			const { innerText : currentValue } 	= screen;

			let newScreenValue = currentValue;

			newScreenValue += operator;

			//need to handle cases where last char in currentValue is also an operator
			screen.innerText = newScreenValue;
		}
	}

	function add(num1, num2){

	}//add


	function subtract(num1, num2){

	}//subtract


	function multiply(num1, num2){

	}//multiply


	function divide(num1, num2){

	}//divide


	function sqrt(num){

	}//sqrt


	function index(num){

	}//index


	function equals(num){

	}//equals

	function mrc(num){

	}//mrc
	

	function memminus(num){

	}//memminus


	function memmplus(num){

	}//memmplus


}// init




