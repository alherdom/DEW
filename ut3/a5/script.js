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
    } else if (oper === '^') {
        result = number1 ** number2;
    }
    console.log(result);
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
        case "^":
            result = number1 ** number2;
            break;
        default:
            result = "Not a valid operation";
            break;
    }
    // Display the result in the text box
    document.getElementById("result").value = result;
}
