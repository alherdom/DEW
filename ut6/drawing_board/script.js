let isPainting = false; // flag to know if the mouse is pressed or not
const pincel = document.getElementById("brush"); // pincel is the brush
let selectedColor = "white"; // selectedColor is the color selected by the user
// function to start painting
function startPainting() {
  isPainting = true; // the mouse is pressed
  pincel.textContent = "🖌️ ENABLED";
}
// function to stop painting
function stopPainting() {
  isPainting = false; // the mouse is not pressed
  pincel.textContent = "🖌️ DISABLED";
}
// function to paint
function paint(event) {
  if (isPainting) {
    // if the mouse is pressed
    event.target.style.backgroundColor = selectedColor; // cell is painted with selectedColor
  }
}
// when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  let inputColor = document.querySelector(".color9"); // inputColor is the color picker
  inputColor.addEventListener("change", function () {
    // when the color picker changes
    selectedColor = this.value; // selectedColor is the color picked
    resetColorSelection(); // reset the color selection of the palette
    this.classList.add("selected"); // the color picker is selected
  });
  const cellNumber = 90; // number of cells in the board
  const board = document.getElementById("drawingArea"); // board is the drawing area
  const boardTable = document.createElement("table"); // boardTable is the table of the board
  boardTable.className = "drawingBoard"; // boardTable has the class drawingBoard
  board.appendChild(boardTable); // boardTable is a child of board
  for (var i = 0; i < cellNumber; i++) {
    const row = document.createElement("tr"); // row is a row of the table
    boardTable.appendChild(row); // row is a child of boardTable
    for (var j = 0; j < cellNumber; j++) {
      // for each cell
      const cell = document.createElement("td"); // cell is a cell of the table
      cell.className = "cell"; // cell has the class cell
      cell.addEventListener("mousemove", paint); // when the mouse moves over the cell, paint
      cell.addEventListener("mousedown", startPainting); // when the mouse is pressed over the cell, start painting
      cell.addEventListener("mouseup", stopPainting); // when the mouse is released over the cell, stop painting
      row.appendChild(cell); // cell is a child of row
    }
  }
});
// closure function to select a color
function selectColorHandler(selectedIndex) {
  // selectedIndex is the index of the color
  return function () {
    // return a function that will be called when the color is selected
    selectedColor = getComputedStyle(this).backgroundColor; // user selected color
    resetColorSelection(); // reset the color selection of the palette
    this.classList.add("selected"); // add selected class
  };
}
// for each color in the palette (1 to 9) add an event listener
for (let i = 1; i <= 9; i++) {
  const colorElement = document.querySelector(`.color${i}`); // colorElement is the color in the palette
  colorElement.addEventListener("click", selectColorHandler(i)); // when the color is clicked, select it
}
// reset the color selection of the palette
function resetColorSelection() {
  for (let i = 1; i <= 9; i++) {
    // for each color in the palette (1 to 9) remove the selected class
    const colorElement = document.querySelector(`.color${i}`); // colorElement is the color in the palette
    colorElement.classList.remove("selected"); // remove selected class
  }
}
// when the clean button is clicked, reload the page
document.querySelector("#cleanButton").addEventListener("click", () => {
  window.location.reload();
});
// dragstart event listener to prevent dragging
document.body.addEventListener("dragstart", function (event) {
  event.preventDefault();
});
