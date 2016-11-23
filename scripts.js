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
    var WON = false;
    var PLAYER = "X";
  function play(cellid) {
     
   var cell = document.getElementById(cellid);
   var spanTac = document.getElementById("spanTic");
     
     if(cell.textContent === "") {
       cell.textContent = PLAYER; 
       checkWinner();
     
         if ((PLAYER === "X") && 
            (WON === false)) {  
           PLAYER = "O";
           spanTac.textContent = "O's turn";
         } else {
           PLAYER = "X";
           spanTac.textContent = "X's turn";
         } 
         
       } else {
         spanTac.textContent = "Invalid move!";
       }      
     }
     
  function checkWinner() {    
   checkWinner3("tdTic1", "tdTic2", "tdTic3");
   checkWinner3("tdTic4", "tdTic5", "tdTic6");
   checkWinner3("tdTic7", "tdTic8", "tdTic9");
   checkWinner3("tdTic1", "tdTic4", "tdTic7");
   checkWinner3("tdTic2", "tdTic5", "tdTic9");
   checkWinner3("tdTic3", "tdTic6", "tdTic9");
   checkWinner3("tdTic1", "tdTic5", "tdTic9");
   checkWinner3("tdTic3", "tdTic5", "tdTic9");
   }
   
  function checkWinner3(cell1id, cell2id ,cell3id) {
    var cell1 = document.getElementById(cell1id);
    var cell2 = document.getElementById(cell2id);
    var cell3 = document.getElementById(cell3id);
    var spanTac = document.getElementById("spanTic");
    var WON;

     
    if ((cell1.textContent === cell2.textContent) && 
        (cell2.textContent === cell3.textContent) && 
        (cell1.textContent !== "")) {
       }
        
    if(WON === true) {
      spanTac.textContent  = PLAYER + " " + "is the winner!";
      } 
    }
 
// ----- END FUN STUFF -----//
