function calcDivisor() {
  const number = document.getElementById("number").value;
  const divisorsElement = document.getElementById("divisors");
  let divisors = [];
  for (i = 0; i < number / 2 + 1; i++) {
    if (number % i == 0) {
      divisors.push(i);
    }
  }
  divisorsElement.innerHTML = divisors.join(", ");
}
