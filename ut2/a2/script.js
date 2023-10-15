// Clear the content of the table with id 'table7'
function clean7() {
    const table = document.getElementById('table7');
    table.innerHTML = '';
}

// Clear the content of the table with id 'table8'
function clean8() {
    const table = document.getElementById('table8');
    table.innerHTML = '';
}

// Clear the content of the table with id 'table9' and enable a run button
function clean9() {
    const table = document.getElementById('table9');
    table.innerHTML = '';
    const runButton = document.getElementById('button9');
    runButton.disabled = false; // Enable a run button after clearing the table
}

// Generate a table for the multiplication of 7
function table7() {
    const table = document.getElementById('table7');
    table.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const result = 7 * i;
        const row = document.createElement('tr');
        row.innerHTML = `<td>7 * ${i} =</td><td>${result}</td>`;
        table.appendChild(row);
    }
}

// Generate a table for the addition of 8 to numbers from 1 to 10
function table8() {
    const table = document.getElementById('table8');
    table.innerHTML = '';
    let counter = 0;
    while (counter < 10) {
        counter++;
        const result = counter + 8;
        const row = document.createElement('tr');
        row.innerHTML = `<td>${counter} + 8 =</td><td>${result}</td>`;
        table.appendChild(row);
    }
}

// Generate a table for the division of numbers from 1 to 10 by 9
function table9() {
    const table = document.getElementById('table9');
    let x = 0;
    do {
        x++;
        const result = x / 9;
        const row = document.createElement('tr');
        row.innerHTML = `<td>${x} ÷ 9 =</td><td>${result.toFixed(3)}</td>`;
        table.appendChild(row);
    } while (x < 10);
    const runButton = document.getElementById('button9');
    runButton.disabled = true; // Disable the run button after generating the table
}

// Perform a bitwise right shift operation and display the result
function operation1() {
    const divisor = Math.log(8) / Math.log(2);
    const result = 125 >> divisor.toFixed(0);
    document.getElementById('result1').innerHTML = result;
}

// Perform a bitwise left shift operation and display the result
function operation2() {
    const multiplier = Math.log(4) / Math.log(2);
    const result = 40 << multiplier.toFixed(0);
    document.getElementById('result2').innerHTML = result;
}

// Perform a bitwise right shift operation and display the result
function operation3() {
    const divisor = Math.log(2) / Math.log(2);
    const result = 25 >> divisor.toFixed(0);
    document.getElementById('result3').innerHTML = result;
}

// Perform a bitwise left shift operation and display the result
function operation4() {
    const multiplier = Math.log(16) / Math.log(2);
    const result = 10 << multiplier.toFixed(0);
    document.getElementById('result4').innerHTML = result;
}

// Perform a basic arithmetic operation based on the operator and display the result
function calc1(oper) {
    // Get values of the input numbers
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    // Declare the result variable for later update
    var result;

    // Perform the operation according to the operator
    if (oper === '+') {
        result = number1 + number2;
    } else if (oper === '-') {
        result = number1 - number2;
    } else if (oper === '*') {
        result = number1 * number2;
    } else if (oper === '/') {
        result = number1 / number2;
    }
    // Display the result in the text box
    document.getElementById("result").value = result;
}

// Perform a basic arithmetic operation based on the operator using a switch statement and display the result
function calc2(oper) {
    // Get values of the input numbers
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    // Declare the result variable for later update
    var result;

    // Perform the operation based on the operator using a switch statement
    switch (oper) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        default:
            result = "Not a valid operation";
            break;
    }
    // Display the result in the text box
    document.getElementById("result").value = result;
}
