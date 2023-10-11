function table7() {
    const table = document.getElementById('table7');
    table.innerHTML = ''; // Limpia el contenido anterior de la tabla

    for (let i = 1; i <= 10; i++) {
        const result = 7 * i;
        const row = document.createElement('tr');
        row.innerHTML = `<td>7 * ${i} =</td><td>${result}</td>`;
        table.appendChild(row);
    }
}

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
}

function operation1() {
    const divisor = Math.log(8) / Math.log(2);
    const result = 125 >> divisor.toFixed(0);
    document.getElementById('result1').innerHTML = result;
}

function operation2() {
    const multiplier = Math.log(4) / Math.log(2);
    const result = 40 << multiplier.toFixed(0);
    document.getElementById('result2').innerHTML = result;
}

function operation3() {
    const divisor = Math.log(2) / Math.log(2);
    const result = 25 >> divisor.toFixed(0);
    document.getElementById('result3').innerHTML = result;
}

function operation4() {
    const multiplier = Math.log(16) / Math.log(2);
    const result = 10 << multiplier.toFixed(0);
    document.getElementById('result4').innerHTML = result;
}

function calc1(oper) {
    // Obtener los valores de los números ingresados
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    // Declaro la variable resultado para actualizarla posteriormente
    var resultado;

    // Realizar la operación según el operador
    if (oper === '+') {
        resultado = numero1 + numero2;
    } else if (oper === '-') {
        resultado = numero1 - numero2;
    } else if (oper === '*') {
        resultado = numero1 * numero2;
    } else if (oper === '/') {
        resultado = numero1 / numero2;
    }
    // Mostrar el resultado en la caja de texto
    document.getElementById("resultado").value = resultado;
}

function calc2(oper) {
    // Obtener los valores de los números ingresados
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    // Declaro la variable resultado para actualizarla posteriormente
    var resultado;

    // Realizar la operación según el operador
    switch (oper) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            resultado = numero1 / numero2;
            break;
        default:
            resultado = "Not valid oper";
            break;
    }
    // Mostrar el resultado en la caja de texto
    document.getElementById("resultado").value = resultado;
}