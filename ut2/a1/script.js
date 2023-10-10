// Calculate the area and perimeter of the circumference with a fixed radius of 5 meters
var fixedRadius = 5;
var fixedArea = Math.PI * Math.pow(fixedRadius, 2);
var fixedPerimeter = 2 * Math.PI * fixedRadius;

// Display the results with the fixed radius in the HTML page
document.getElementById('area1').innerHTML = fixedArea.toFixed(2);
document.getElementById('perimeter1').innerHTML = fixedPerimeter.toFixed(2);

function calculateCircumference() {
    // Get the value of the radius entered by the user
    var radius = parseFloat(document.getElementById('radiusInput').value);

    // Check if the radius is a valid number
    if (isNaN(radius)) {
        // Display an error message if the radius is not a valid number
        window.alert("The radius is not a valid number");
    } else {

        // Calculate the area and perimeter of the circumference with the entered radius
        var area = Math.PI * Math.pow(radius, 2);
        var perimeter = 2 * Math.PI * radius;

        // Display the results in the HTML page
        document.getElementById('area2').innerHTML = area.toFixed(2);
        document.getElementById('perimeter2').innerHTML = perimeter.toFixed(2);
    }
}

function calculateTip() {
    // Get the value of the bill and percentage entered by the user
    var bill = parseFloat(document.getElementById('bill').value);
    var percentage = parseFloat(document.getElementById('percentage').value);
    // var percentage2 = parseFloat(document.getElementById('value').value)
    // Check if the radius is a valid number
    if (isNaN(bill) || (isNaN(percentage))) {
    // if (isNaN(bill)) {
        // Display an error message if the bill or percentage is not a valid number
        window.alert("The bill or percentage is not a valid number");
    } else {
        // Calculate the area and perimeter of the circumference with the entered radius
        var tip = bill * (percentage / 100)
        // Display the results in the HTML page
        document.getElementById('tip').innerHTML = tip.toFixed(2);
    }
}