let isPainting = false;
const pincel = document.getElementById("pincel");

function startPainting() {
  isPainting = true;
  pincel.textContent = "🖌️ ACTIVADO";
}

function stopPainting() {
  isPainting = false;
  pincel.textContent = "🖌️ DESACTIVADO";
}

function paint(event) {
  if (isPainting) {
    event.target.style.backgroundColor = pincel.style.backgroundColor;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cellNumber = 90;
  const board = document.getElementById("zonadibujo");
  const boardTable = document.createElement("table");
  boardTable.className = "tablerodibujo";
  board.appendChild(boardTable);
  for (var i = 0; i < cellNumber; i++) {
    const row = document.createElement("tr");
    boardTable.appendChild(row);
    for (var j = 0; j < cellNumber; j++) {
      const cell = document.createElement("td");
      cell.addEventListener("mousemove", paint);
      cell.addEventListener("mousedown", startPainting);
      cell.addEventListener("mouseup", stopPainting);
      row.appendChild(cell);
    }
  }
});

document.querySelector(".color1").addEventListener("click", function () {
  pincel.style.backgroundColor = getComputedStyle(this).backgroundColor;
  this.classList.add("seleccionado");
  document.querySelector(".color2").classList.remove("seleccionado");
  document.querySelector(".color3").classList.remove("seleccionado");
  document.querySelector(".color4").classList.remove("seleccionado");
  document.querySelector(".color5").classList.remove("seleccionado");
  document.querySelector(".color6").classList.remove("seleccionado");
  document.querySelector(".color6").classList.remove("seleccionado");
  document.querySelector(".color7").classList.remove("seleccionado");
});

document.querySelector(".color2").addEventListener("click", function () {
  pincel.style.backgroundColor = getComputedStyle(this).backgroundColor;
  this.classList.add("seleccionado");
  document.querySelector(".color1").classList.remove("seleccionado");
  document.querySelector(".color3").classList.remove("seleccionado");
  document.querySelector(".color4").classList.remove("seleccionado");
  document.querySelector(".color5").classList.remove("seleccionado");
  document.querySelector(".color6").classList.remove("seleccionado");
  document.querySelector(".color7").classList.remove("seleccionado");
});

document.querySelector(".color3").addEventListener("click", function () {
  pincel.style.backgroundColor = getComputedStyle(this).backgroundColor;
  this.classList.add("seleccionado");
  document.querySelector(".color1").classList.remove("seleccionado");
  document.querySelector(".color2").classList.remove("seleccionado");
  document.querySelector(".color4").classList.remove("seleccionado");
  document.querySelector(".color5").classList.remove("seleccionado");
  document.querySelector(".color6").classList.remove("seleccionado");
  document.querySelector(".color7").classList.remove("seleccionado");
});

document.querySelector(".color4").addEventListener("click", function () {
  pincel.style.backgroundColor = getComputedStyle(this).backgroundColor;
  this.classList.add("seleccionado");
  document.querySelector(".color1").classList.remove("seleccionado");
  document.querySelector(".color2").classList.remove("seleccionado");
  document.querySelector(".color3").classList.remove("seleccionado");
  document.querySelector(".color5").classList.remove("seleccionado");
  document.querySelector(".color6").classList.remove("seleccionado");
  document.querySelector(".color7").classList.remove("seleccionado");
});

document.querySelector(".color5").addEventListener("click", function () {
  pincel.style.backgroundColor = getComputedStyle(this).backgroundColor;
  this.classList.add("seleccionado");
  document.querySelector(".color1").classList.remove("seleccionado");
  document.querySelector(".color2").classList.remove("seleccionado");
  document.querySelector(".color3").classList.remove("seleccionado");
  document.querySelector(".color4").classList.remove("seleccionado");
  document.querySelector(".color6").classList.remove("seleccionado");
  document.querySelector(".color7").classList.remove("seleccionado");
});

document.querySelector(".color6").addEventListener("click", function () {
  pincel.style.backgroundColor = getComputedStyle(this).backgroundColor;
  this.classList.add("seleccionado");
  document.querySelector(".color1").classList.remove("seleccionado");
  document.querySelector(".color2").classList.remove("seleccionado");
  document.querySelector(".color3").classList.remove("seleccionado");
  document.querySelector(".color4").classList.remove("seleccionado");
  document.querySelector(".color5").classList.remove("seleccionado");
  document.querySelector(".color7").classList.remove("seleccionado");
});

document.querySelector(".color7").addEventListener("click", function () {
  pincel.style.backgroundColor = getComputedStyle(this).backgroundColor;
  this.classList.add("seleccionado");
  document.querySelector(".color1").classList.remove("seleccionado");
  document.querySelector(".color2").classList.remove("seleccionado");
  document.querySelector(".color3").classList.remove("seleccionado");
  document.querySelector(".color4").classList.remove("seleccionado");
  document.querySelector(".color5").classList.remove("seleccionado");
  document.querySelector(".color6").classList.remove("seleccionado");
});

document.querySelector(".color8").addEventListener("click", function () {
  pincel.style.backgroundColor = getComputedStyle(this).backgroundColor;
  document.querySelector(".color1").classList.remove("seleccionado");
  document.querySelector(".color2").classList.remove("seleccionado");
  document.querySelector(".color3").classList.remove("seleccionado");
  document.querySelector(".color4").classList.remove("seleccionado");
  document.querySelector(".color5").classList.remove("seleccionado");
  document.querySelector(".color7").classList.remove("seleccionado");
});

document.querySelector("#btnLimpiar").addEventListener("click", () => {
  window.location.reload();
});

document.body.addEventListener("dragstart", function (event) {
  event.preventDefault();
});
