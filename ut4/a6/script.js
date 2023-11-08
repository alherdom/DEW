function randomArray(length = 20, min = -100, max = 100) {
  const numbers = Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min)) + min
  );
  console.log(numbers);
  document.getElementById("array-numbers").innerHTML = numbers.join(", ");
  let max_value = numbers.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);

  let min_value = numbers.reduce(function (a, b) {
    return Math.min(a, b);
  }, +Infinity);

  console.log(max_value);
  console.log(min_value);
  document.getElementById("max-value").innerHTML = max_value;
  document.getElementById("max-index").innerHTML = numbers.indexOf(max_value);
  document.getElementById("min-value").innerHTML = min_value;
  document.getElementById("min-index").innerHTML = numbers.indexOf(min_value);
}
