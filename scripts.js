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
    var PLAYER = "O";
    var PLAYER = "X";
  function play(cellid) {
     
   var cell = document.getElementById(cellid);
   var spanTac = document.getElementById("spanTic");
     
     if((cell.textContent === "") && (WON === false)) {
       cell.textContent = PLAYER; 
       
     
         if (PLAYER === "X") {  
           PLAYER = "O";
           spanTac.textContent = "O's turn";
           checkWinner("X");
         } else {
           PLAYER = "X";
           spanTac.textContent = "X's turn";
           checkWinner("O");
         } 
         
       } else if (WON === false){
         spanTac.textContent = "Invalid move!";
       }  
       
     }
     
  function checkWinner(player) {    
   checkWinner3("tdTic1", "tdTic2", "tdTic3", player);
   checkWinner3("tdTic4", "tdTic5", "tdTic6", player);
   checkWinner3("tdTic7", "tdTic8", "tdTic9", player);
   checkWinner3("tdTic1", "tdTic4", "tdTic7", player);
   checkWinner3("tdTic2", "tdTic5", "tdTic8", player);
   checkWinner3("tdTic3", "tdTic6", "tdTic9", player);
   checkWinner3("tdTic1", "tdTic5", "tdTic9", player);
   checkWinner3("tdTic3", "tdTic5", "tdTic7", player);
   }
   
  function checkWinner3(cell1id, cell2id ,cell3id, player) {
    var cell1 = document.getElementById(cell1id);
    var cell2 = document.getElementById(cell2id);
    var cell3 = document.getElementById(cell3id);
    var spanTac = document.getElementById("spanTic");


     
    if ((cell1.textContent === cell2.textContent) && 
        (cell2.textContent === cell3.textContent) && 
        (cell1.textContent !== "")) {
      WON = true;
        
      spanTac.textContent  = player + " " + "is the winner!";
      cell1.style.backgroundColor = "#b3d8d2";
      cell2.style.backgroundColor = "#b3d8d2";
      cell3.style.backgroundColor = "#b3d8d2";
    }
  }
  
  function buildTimesTable() {
    var timesTable = document.createElement("table");
    timesTable.id = "timesTable";
    timesTable.class = "multiply";
    
    var body = document.getElementById("tableBorder");
    body.appendChild(timesTable);
      
    for (var i = 0; i < 13; i++) {
      var tableRow = document.createElement("tr");
      tableRow.id = "tableRow";
      timesTable.appendChild(tableRow);
        for(var j = 0; j < 13; j++) {
            var tableData = document.createElement("td");
            tableData.id = "tableData";
            tableRow.appendChild(tableData);
            tableData.textContent = i * j;
            
        }
      }
    }
 
// ----- END FUN STUFF -----//
