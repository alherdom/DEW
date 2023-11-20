function circleCalc() {
  const perimeterElement = document.getElementById("perimeter");
  const areaElement = document.getElementById("area");
  const radius = parseFloat(document.getElementById("radius").value);

  if (isNaN(radius)) {
    perimeterElement.innerHTML = "0";
    areaElement.innerHTML = "0";
    return;
  }

  let area = Math.pow(radius, 2) * Math.PI;
  let perimeter = 2 * Math.PI * radius;

  perimeterElement.innerHTML = perimeter.toFixed(2);
  areaElement.innerHTML = area.toFixed(2);
}
