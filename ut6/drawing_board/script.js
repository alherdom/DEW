document.addEventListener("DOMContentLoaded", function () {
  const cellNumber = 100;
  var board = document.getElementById("zonadibujo");
  var boardTable = document.createElement("table");
  boardTable.className = "tablerodibujo";
  board.appendChild(boardTable);
  for (var i = 0; i < cellNumber; i++) {
    var row = document.createElement("tr");
    boardTable.appendChild(row);
    for (var j = 0; j < cellNumber; j++) {
      var cell = document.createElement("td");
      cell.addEventListener("mousemove", function () {
        this.style.backgroundColor = pincel.style.backgroundColor;
      });
      row.appendChild(cell);
    }
  }
});

const pincel = document.getElementById("pincel");
document.getElementById("color1").addEventListener("click", function () {
  pincel.style.backgroundColor = "#FF0";
  pincel.style.color = "black";
  
});

document.getElementById("color2").addEventListener("click", function () {
  pincel.style.backgroundColor = "#0F0";
  pincel.style.color = "black";
});

document.getElementById("color3").addEventListener("click", function () {
  pincel.style.backgroundColor = "#000";
  pincel.style.color = "white";
});

document.getElementById("color4").addEventListener("click", function () {
  pincel.style.backgroundColor = "#F00";
  pincel.style.color = "black";
});

document.getElementById("color5").addEventListener("click", function () {
  pincel.style.backgroundColor = "#06C";
  pincel.style.color = "black";
});

document.getElementById("color6").addEventListener("click", function () {
  pincel.style.backgroundColor = "#FFF";
  pincel.style.color = "black";
});

document.querySelector("#btnLimpiar").addEventListener("click", () => {
  window.location.reload();
});
