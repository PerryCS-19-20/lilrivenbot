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
  var userInput = document.getElementById("textInputHTML");
  var theSpan = document.getElementById("spanModifytestHTML");
  theSpan.innerHTML = userInput.value; 
  }

function createList() {
  var userInput = document.getElementById("textInputList");
  var theSpan = document.getElementById("spanModifyList");
  var newItem = document.createElement("li");
  newItem.textContent = userInput.value;
  theSpan.appendChild(newItem);
  }
  
function chalkboard() {
  var userInput = document.getElementById("textInputChalkboard");
  var theSpan = document.getElementById("spanModifyChalkboard");
    for(var i = 0; i < 100 ; i++) {
      var newItem = document.createElement("li");  
      newItem.textContent = "I will not" + " " + userInput.value;
      theSpan.appendChild(newItem);
    }
  }
// ----- END FUN STUFF -----//
