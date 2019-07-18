

window.addEventListener("DOMContentLoaded", init);


function init(){

	const powerButtons = document.getElementsByClassName("power button");
	const numberButtons = document.getElementsByClassName("number button");
	const decimalButtons = document.getElementsByClassName("decimal button");
	const operatorButtons = document.getElementsByClassName("operator button");
	const equalsButtons = document.getElementsByClassName("equals button");
	const screen = document.getElementById("screen");
	const powered = "powered";

	powerButtons[0].addEventListener("click", handlePowerPressed);
	
	//add a click event listener to every number-button
	for(button of numberButtons){
		button.addEventListener("click", addNumberToScreen);
	}

	decimalButtons[0].addEventListener("click", addDecimalToScreen);
	
	//add a click event listener to every number-button
	for(button of operatorButtons){
		button.addEventListener("click", handleOperatorPressed);
	}

	equalsButtons[0].addEventListener("click", calculateAndShowResult);

	function handlePowerPressed(event){
		//prevents the form buttons from triggering a refresh
		event.preventDefault();

		//grab the button that fired trigger the click event
		const button = event.target;

		//try to find if the screen is powered by checking its classes
		if(!screen.classList.contains(powered)){
			//add the class if it's not there
			screen.classList.add(powered);
			//initialise new custom attribute that stores most recent value type
		}
		screen.dataset.previousKeyType = "number";
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

			let lastChar = screen.dataset.previousKeyType;
			//console.log(lastChar);

			//don't append new number to new value if current value is 0 (prevents "0134"...)
			if(screenValue === "0"){
				newScreenValue = buttonValue;
			}
			else if(lastChar === "operator"){
				screen.dataset.operator = screenValue[screenValue.length-1];
				newScreenValue = buttonValue;
			}
			//if entering numbers while the result of a calculation is shown, start from fresh
			else if(screen.leftHandValue !== undefined){
				newScreenValue = buttonValue;
				screen.leftHandvalue = undefined;
			}
			else{
				newScreenValue = screenValue + buttonValue;
			}			

			screen.dataset.previousKeyType = "number";

			//change the current screen value to the new value
			screen.innerText = newScreenValue;
		}

	}// addNumberToScreen


	function addDecimalToScreen(event){
		//prevents the form buttons from triggering a refresh
		event.preventDefault();

		//don't do anything else if the screen isn't turned on
		if(screen.classList.contains(powered)){
			
			//grabs the button that triggered the click event
			const button 						= event.target;

			//grab the value from the screen
			const { innerText: screenValue } 	= screen;
			
			if(!screenValue.includes(".")){
				screen.innerText = screenValue + '.';
			}
		}
	}

	function handleOperatorPressed(event){
		//prevents the form buttons from triggering a refresh
		event.preventDefault();

		if(screen.classList.contains(powered)){
			
			const button 						= event.target;

			const { action } 					= button.dataset;

			const { innerText: screenValue } 	= screen;

			let lastChar = screen.dataset.previousKeyType;

			if(lastChar === "number"){
				screen.dataset.leftHandValue = screenValue;
				screen.dataset.previousKeyType = "operator";
				//console.log(lastChar);
			}
			else if(lastChar === "operator"){
				let newStr = screenValue.slice(0, screenValue.length-1);
				screen.innerText = newStr;
			}

			screen.innerText += button.innerText;
		}
	}

	function calculateAndShowResult(event){
		event.preventDefault();

		if(screen.classList.contains(powered)){
			const { leftHandValue : left } = screen.dataset;
			const { operator } = screen.dataset;

			let result = 0;

			if(left !== undefined || operator !== undefined){
				
				let right = screen.innerText;

				let l = parseFloat(left);
				let r = parseFloat(right);

				if(operator === "-"){
					result = l - r;
				}
				else if(operator === "/"){
					result = l / r;
				}	
				else if(operator === "+"){
					result = l + r;
				}
				else if(operator === "*"){
					result = l * r;
				}

				screen.innerText = result;

				screen.dataset.leftHandValue = result;
				screen.dataset.operator = undefined;

				screen.dataset.previousKeyType = "operator";
			}
		}
	}

}// init




