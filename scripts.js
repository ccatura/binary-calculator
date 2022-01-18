// All for buttons
let displayValue = '0';
document.getElementById('readout').innerHTML = parseInt(displayValue);

btns = document.getElementsByClassName('button');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',redirect,false);
}

function redirect(){
  if (displayValue.length < 12) {
    displayValue = parseInt(displayValue) + this.innerHTML;
    // displayValue = parseInt(displayValue);
    document.getElementById('readout').innerHTML = parseInt(displayValue);
    console.log(displayValue);
  }
}

