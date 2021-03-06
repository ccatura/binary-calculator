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
  console.log('Button: ', buttonPressed);

    if (!isNaN(buttonPressed)) {
      if (toDisplay.length < 12) {
        toDisplay = parseInt(toDisplay) + buttonPressed;
        updateDisplay();
        // console.log('Display Value: ', toDisplay);
      }
    } else if (buttonPressed == "C") {
      // console.log("Button: [CLEAR]");
      toDisplay = '0';
      updateDisplay();
    } else if (buttonPressed == "To Bin") {
      // console.log("Button: [TO BINARY]");
      decToBin(toDisplay);
    } else if (buttonPressed == "To Dec") {
      // console.log("Button: [TO DECIMAL]");
      binToDec(toDisplay);
    }
}

function updateDisplay() {
  document.getElementById('readout').innerHTML = parseInt(toDisplay);
}

function binToDec (binNumber) {
  let result = 0;
  let binVal = 1;

  // Checks if digits are not binary
  for (var i = 0; i < binNumber.length; i++) {
    if (binNumber.charAt(i) > 1 || binNumber.charAt(i) < 0) {
      binNumber = "Non-Binary";
      document.getElementById('readout').innerHTML = binNumber;
      console.log('Error: ', binNumber);
      return;
    }
  }

  // Calculate binary to decimal value
  for (var i = binNumber.length - 1; i > -1; i--) { // Search through variable starting from right end
    if (binNumber.charAt(i) == 1) {
      result += parseInt(binNumber.charAt(i) * binVal);
      // console.log(result);
    }

    if (binVal == 1) {
      binVal = 2;
    } else {
      binVal *= 2;
    }
  }
  console.log('Result: ', result);
  document.getElementById('readout').innerHTML = result;


}

  function decToBin(decNumber) {
    let bin_num = "";

    function deci_to_bin(decNumber) {

        // Base Case
        if (decNumber <= 1) {
            bin_num += String.fromCharCode(decNumber + '0'.charCodeAt());
        } else {
            // Recursion call
            deci_to_bin(parseInt(decNumber / 2, 10));
 
            // If decNumber is divisible by 2
            if(decNumber%2 != 0)
              bin_num += '1';
             else
              bin_num += '0';
        }
        
  }
  deci_to_bin(decNumber);
  document.getElementById('readout').innerHTML = bin_num;
}