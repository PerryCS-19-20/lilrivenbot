//----- START 404 -----//

function goBack() {
  window.history.go(-1);	
}

//----- END 404------//

//----- START FUN STUFF -----//

function piestuff() {
  alert("Eureka!");
}

function changeBackground(colorName) {
  document.body.style.backgroundColor = colorName;
}

function testHTML() {
  var userInput = document.getElementById("textInput");
  var theSpan = document.getElementById("spanModify");
  theSpan.innerHTML = userInput.value; 
}

// ----- END FUN STUFF -----//
