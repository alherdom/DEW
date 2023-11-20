function fibo() {
  const fiboElement = document.getElementById("result");
  const n = parseInt(document.getElementById("number").value);
  if (isNaN(n) || n <= 0) {
    alert("Please enter a positive integer for Fibonacci calculation.");
    return;
  }
  let sequence = [0, 1];
  if (n === 1) {
    fiboElement.innerHTML = "[0]";
    return;
  } else if (n === 2) {
    fiboElement.innerHTML = "[0, 1]";
    return;
  } else {
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    fiboElement.innerHTML = sequence.join(", ");
  }
}
