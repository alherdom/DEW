document.addEventListener("DOMContentLoaded", function () {
  const botonesEnvio = document.getElementsByClassName("envio");

  if (botonesEnvio.length > 0) {
    for (let i = 0; i < botonesEnvio.length; i++) {
      botonesEnvio[i].addEventListener("click", function (e) {
        e.preventDefault(); // Evita el envío predeterminado del formulario
        calcularNota();
      });
    }
  } else {
    console.error("No se encontraron elementos con la clase 'envio'.");
  }

  function calcularNota() {
    let elementoResultado = document.getElementById("resultado");
    let elementoManzana = document.getElementById("manzana");
    let elementoFresa = document.getElementById("fresa");
    let elementosRadio = document.getElementsByName("respuesta2");
    let opciones = document.getElementById("opciones");
    let valorSelecionado = opciones.options[opciones.selectedIndex].value;
    let nota = 0;

    if (elementoManzana.checked) {
      nota += 0.5;
    }

    if (elementoFresa.checked) {
      nota += 0.5;
    }

    if (elementosRadio[0].checked) {
      nota += 1;
    }

    if (valorSelecionado === "4") {
      nota += 1;
    }

    elementoResultado.innerHTML = `La nota obtenida es: <br><br> <b>${nota}</b>`;
    console.log(nota);
  }
});
