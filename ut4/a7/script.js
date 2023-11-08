function randomArray(length = 5, min = 1, max = 3) {
  const numbers = Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min)) + min
  );
  document.getElementById("array-numbers").innerHTML = numbers.join(", ");
  console.log(numbers);
  let withoutRepeat = [];
  for (i = 0; i < length; i++) {
    let x = numbers[i];
    if (withoutRepeat.includes(x)) {
      console.log("Repeat number");
    } else {
      withoutRepeat.unshift(x);
      console.log("No repeat number");
    }
  }
}
