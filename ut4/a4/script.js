function randomArray(length = 15, min = -10, max = 20) {
  const numbers1 = Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min)) + min
  );
  console.log(numbers1);
  document.getElementById("array-numbers").innerHTML = numbers1.join(", ");
  const numbers2 = numbers1;
  for (i = 0; i < length; i++) {
    const x = numbers2[i];
    if (x <= -5) {
      console.log(x, "Less or equal to -5");
    } else if (-5 < x && x <= 0) {
      console.log(x, "Between -5 and 0");
    } else if (0 < x && x <= 10) {
      console.log(x, "Between 0 and 10");
    } else if (10 < x && x <= 10) {
      console.log(x, "Between 10 and 10");
    }
  }
}
