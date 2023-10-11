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

function tale8() {
    let counter = 0;
    while (counter < 5) {
        console.log("Iteración " + counter);
        counter++;
    }
}

function table9() {
    let x = 0;
    do {
        console.log("Iteración " + x);
        x++;
    } while (x < 5);
}