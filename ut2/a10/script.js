function printRhombus() {
  const rows = document.getElementById("rows").value;
  console.log(rows);
  let output = "";

  //Parte creciente del rombo:
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= 2 * i - 1; j++) {
      line += "*";
    }
    output += line + "<br>";
  }

  //Parte decreciente del rombo:
  for (let i = rows - 1; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= 2 * i - 1; j++) {
      line += "*";
    }
    output += line + "<br>";
  }
  document.getElementById("rombo").innerHTML = output;
}
