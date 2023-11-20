function calcTip() {
  const percentageElement = document.getElementById("tip");
  const billElement = document.getElementById("bill");
  const tipElement = document.getElementById("tipAmount");

  const percentage = parseFloat(percentageElement.value);
  const bill = parseFloat(billElement.value);

  if (isNaN(percentage) || isNaN(bill)) {
    tipElement.innerHTML = "Invalid input";
    return;
  }

  let tip = (percentage / 100) * bill;
  tipElement.innerHTML = tip.toFixed(2);
}
