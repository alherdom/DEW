const LETTERS = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

const btn = document.querySelector("#generate");
const letterElement = document.getElementById("letter");

function findLetter() {
  let number = document.getElementById("number").value;
  let index = parseInt(number) % 23;
  letterElement.innerHTML = LETTERS[index];
}

btn.addEventListener("click", findLetter);
