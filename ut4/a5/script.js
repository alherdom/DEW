function someFunctions() {
  randomArray();
}
function randomArray(length = 20, min = 60, max = 100) {
  const numbers1 = Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min)) + min
  );
  console.log(numbers1);
  document.getElementById("array-numbers").innerHTML = numbers1.join(", ");
  squareArray(numbers1);
  function squareArray(array) {
    const numbers2 = new Array();
    for (i = 0; i < length; i++) {
      const x = array[i];
      numbers2.push(Math.sqrt(x).toFixed(2));
    }
    console.log(numbers2);
    document.getElementById("array-numbers2").innerHTML = numbers2.join(", ");
  }
}
