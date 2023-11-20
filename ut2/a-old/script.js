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

function findDivisors() {
    // Get the number from the 'number' input element and convert it to a floating-point number.
    const number = parseInt(document.getElementById('number').value);
    // Create an empty array to store the divisors.
    const divisors = [];
    // Loop from 1 to the entered number to find divisors.
    for (let i = 1; i <= number; i++) {
        // Check if the current number is a divisor of the input number.
        if (number % i === 0) {
            // If it is a divisor, add it to the 'divisors' array.
            divisors.push(i);
        }
    }
    // Log the divisors to the console.
    console.log(divisors);
    // Display the divisors in the 'divisors' element on the HTML page.
    document.getElementById('divisors').innerHTML = divisors.join(', ');
}

function getFibonacci() {
    // Get the limit from the 'limit' input element and convert it to an integer.
    const limit = parseInt(document.getElementById('limit').value);
    // Create an array to store the Fibonacci sequence.
    const fibonacci = [];
    // Initial values for the Fibonacci sequence.
    let a = 0;
    let b = 1;
    // If the limit is 0 or 1, just return the appropriate sequence.
    if (limit === 0) {
        fibonacci.push(0);
    } else if (limit === 1) {
        fibonacci.push(0, 1);
    } else {
        // Calculate the Fibonacci sequence.
        fibonacci.push(a, b);
        for (let i = 2; i < limit; i++) {
            const next = a + b;
            fibonacci.push(next);
            a = b;
            b = next;
        }
    }
    // Log the Fibonacci sequence to the console.
    // console.log(fibonacci);
    // Display the Fibonacci sequence in the 'fibonacci' element on the HTML page.
    document.getElementById('fibonacci').innerHTML = fibonacci.join(', ');
}

