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
  
  var i;
  var j;
  function buildTimesTable() {
    var timesTable = document.createElement("table");
    timesTable.id = "timesTable";
    timesTable.class = "multiply";
    
    var body = document.getElementById("tableBorder");
    body.appendChild(timesTable);
      
    for (i = 0; i < 13; i++) {
      var tableRow = document.createElement("tr");
      tableRow.id = "tableRow";
      timesTable.appendChild(tableRow);
      
    for(j = 0; j < 13; j++) {
      var tableCol;
            
      if(i === 0) {
        tableCol = document.createElement("th");
        tableCol.textContent = j;
              
      } else {
              
          if(j === 0) {
            tableCol = document.createElement("th");
            tableCol.textContent = i;
              
          } else {
            tableCol = document.createElement("td");  
            tableCol.textContent = i * j;  
          }        
        }
        tableCol.id = "tableData";
        tableRow.appendChild(tableCol);          
      }
    }
  }
  var l = 0;
  var k = 0;
  function buildTimesTable2() {
      
    // Remove the multiplication table if it already exists.
    var timesTable = document.getElementById("timesTable");
    if (timesTable !== null) {
        timesTable.parentNode.removeChild(timesTable);        
    }
                
    var timesTable = document.createElement("table");
    timesTable.id = "timesTable";
    timesTable.class = "multiply";
    
    var width = document.getElementById("tableWidth").value;
    var height = document.getElementById("tableHeight").value;    
    
    var body = document.getElementById("tableBorder");
    body.appendChild(timesTable);
      
    for (k = 0; k < height; k++) {
      var tableRow = document.createElement("tr");
      tableRow.id = "tableRow";
      timesTable.appendChild(tableRow);
      
    for(l = 0; l < width; l++) {
      var tableCol;
            
      if(k === 0) {
        tableCol = document.createElement("th");
        tableCol.textContent = l;
              
      } else {
              
          if(l === 0) {
            tableCol = document.createElement("th");
            tableCol.textContent = k;
              
          } else {
            tableCol = document.createElement("td");  
            tableCol.textContent = k * l;  
          }        
        }
        tableCol.id = "tableData";
        tableRow.appendChild(tableCol);          
      }
    }
  }
    
// ----- END FUN STUFF -----//
