document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("envio1").addEventListener("click", function (e) {
    e.preventDefault();
    calcularNota1();
  });
  document.getElementById("envio2").addEventListener("click", function (e) {
    e.preventDefault();
    calcularNota2();
  });
  document.getElementById("envio3").addEventListener("click", function (e) {
    e.preventDefault();
    calcularNota3();
  });
  document.getElementById("envio4").addEventListener("click", function (e) {
    e.preventDefault();
    calcularNotaTotal();
  });
});

let nota = 0;
function calcularNota1() {
  let elementoManzana = document.getElementById("manzana");
  let elementoFresa = document.getElementById("fresa");
  let elementoPlatano = document.getElementById("platano");
  let elementoMango = document.getElementById("mango");

  if (elementoPlatano.checked && elementoMango.checked) {
    nota = 0;
    alert(`Respuesta1 incorrecta ${nota} pto`);
    return nota;
  }

  if (elementoManzana.checked && elementoFresa.checked) {
    nota += 1;
    alert(`Respuesta1 correcta ${nota} pto`);
    return nota;
  }

  if (elementoManzana.checked && !elementoFresa.checked) {
    nota += 0.5;
    alert(`Respuesta1 parcialmente correcta ${nota} pto`);
    return nota;
  }

  if (elementoFresa.checked && !elementoManzana.checked) {
    nota += 0.5;
    alert(`Respuesta1 parcialmente correcta ${nota} pto`);
    return nota;
  }
}

function calcularNota2() {
  let elementosRadio = document.getElementsByName("respuesta2");
  if (elementosRadio[0].checked) {
    nota += 1;
    alert(`Respuesta2 correcta ${nota} pto`);
  } else {
    alert(`Respuesta2 incorrecta ${nota} pto`);
  }
  console.log(nota);
  return nota;
}

function calcularNota3() {
  let opciones = document.getElementById("opciones");
  let valorSelecionado = opciones.options[opciones.selectedIndex].value;
  if (valorSelecionado === "4") {
    nota += 1;
    alert(`Respuesta3 correcta ${nota} pto`);
  } else {
    alert(`Respuesta3 incorrecta ${nota} pto`);
  }
  console.log(nota);
  return nota;
}

function calcularNotaTotal() {
  resultado = calcularNota1() + calcularNota2() + calcularNota3();
  document.getElementById(
    "resultado"
  ).innerHTML = `La nota obtenida es: <br><br> <b>${nota}</b>`;
  resultado = 0;
  nota = 0;
}
