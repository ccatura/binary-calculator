/*
// Displays initial '0' on display
let displayValue = '0';
let buttonPressed = parseInt(displayValue);
document.getElementById('readout').innerHTML = buttonPressed;

// Gets button pressed
btns = document.getElementsByClassName('button');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',redirect,false);
}


function redirect(){
    if (!isNaN(this.innerHTML)) {
      if (displayValue.length < 12) {
        displayValue = buttonPressed + this.innerHTML;
        // displayValue = parseInt(displayValue);
        document.getElementById('readout').innerHTML = buttonPressed;
        console.log(displayValue);
      }
    } else if (this.innerHTML == "C") {
      console.log("CLEAR");
      displayValue = '0';
      document.getElementById('readout').innerHTML = buttonPressed;
    }
}
*/



// Displays initial '0' on display
let toDisplay = '0';
updateDisplay();

// Gets button pressed and passes it to function
btns = document.getElementsByClassName('button');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', processButton, false);
}


function processButton(){
  let buttonPressed = this.innerHTML;
    if (!isNaN(buttonPressed)) {
      if (toDisplay.length < 12) {
        toDisplay = parseInt(toDisplay) + buttonPressed;
        updateDisplay();
        console.log('Display Value: ', toDisplay);
      }
    } else if (buttonPressed == "C") {
      console.log("CLEAR");
      toDisplay = '0';
      updateDisplay();
    } else if (buttonPressed == "To Bin") {
      console.log("TO BINARY");
      binToDec(toDisplay);
    } else if (buttonPressed == "To Dec") {
      console.log("TO DECIMAL");
    }
}

function updateDisplay() {
  document.getElementById('readout').innerHTML = parseInt(toDisplay);
}

function binToDec (binNumber) {
  let result = 0;
  let binVal = 1;

  for (var i = 0; i < binNumber.length; i++) {
    if (binNumber.charAt(i) > 1 || binNumber.charAt(i) < 0) { // Checks if digits are binary
      binNumber = "Non-Binary";
      document.getElementById('readout').innerHTML = binNumber;
      return;
    }
  }

  for (var i = binNumber.length - 1; i > -1; i--) { // Search through variable starting from right end
    if (binNumber.charAt(i) == 1) {
      result += parseInt(binNumber.charAt(i) * binVal);
      console.log(result);
    }

    if (binVal == 1) {
      binVal = 2;
    } else {
      binVal *= 2;
    }
  }

  document.getElementById('readout').innerHTML = result;


}

