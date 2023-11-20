// Obtiene la referencia al elemento con el id "texto"
var texto = document.getElementById("texto");

// Obtiene la referencia al elemento con el id "btnSubmit"
var button = document.getElementById("btnSubmit");

// Verifica si el checkbox con id "lepero" está marcado
if (document.getElementById("lepero").checked) {
  // Si está marcado, añade un evento click que llama a la función creaHistoriaLepero
  button.addEventListener("click", creaHistoriaLepero, false);
} else {
  // Si no está marcado, añade un evento click que llama a la función creaHistoriaMurciano
  button.addEventListener("click", creaHistoriaMurciano, false);
}

// Función que genera una historia con temática murciana
function creaHistoriaMurciano() {
  // Limpia el contenido del elemento con id "texto"
  texto.innerHTML = "";

  // Obtiene el valor del campo de entrada con id "nombre"
  var nombre = document.getElementById("nombre").value.toString();

  // Array de historias murcianas
  var historiasMurciano = [
    "En Murcia las naranjas siempre han sido muy baratas, pero ahora le parecen caras.",
    "La ciudad se llena siempre en verano, pero en invierno es un desierto. ",
    "" + nombre + " visitaba a su abuela, ella siempre le hacía buena comida. ",
    "La Juventud lo dejó deprimido y ahora " +
      nombre +
      " solo tiene a su peluche. ",
    "No tenía ganas de hacer deporte así que " +
      nombre +
      " engordo hasta el límite. ",
    "Los donuts eran su debilidad, pero últimamente estaba comportándose de forma extraña. ",
    "" + nombre + " antes era calvo, pero se hizo un injerto capilar. ",
  ];

  // Genera historias aleatorias hasta que el array esté vacío
  while (historiasMurciano.length > 0) {
    var nAleatorio = Math.round(Math.random() * historiasMurciano.length - 1);

    if (historiasMurciano[nAleatorio] == undefined) {
      nAleatorio = Math.round(Math.random() * historiasMurciano.length - 1);
    } else {
      // Añade la historia seleccionada al contenido del elemento con id "texto" y la elimina del array
      texto.innerHTML += historiasMurciano[nAleatorio];
      historiasMurciano.splice(nAleatorio, 1);
    }
  }
}

// Función que genera una historia con temática lepera
function creaHistoriaLepero() {
  // Limpia el contenido del elemento con id "texto"
  texto.innerHTML = "";

  // Obtiene el valor del campo de entrada con id "nombre"
  var nombre = document.getElementById("nombre").value.toString();

  // Array de historias leperas
  var historiasLepero = [
    "En Lepe las flores se marchitan en Primavera, así que no había excusa. ",
    "" + nombre + " era una persona modesta que conducía un Ford Ka. ",
    "Cada semana " + nombre + " visitaba a sus padres. ",
    "Cualquiera lo hubiera adivinado. ",
    "Llovía fuerte aquella noche y " +
      nombre +
      " no podía dejar de pensar en los campos de fresas. ",
    "A " + nombre + " no le gustaba la informática. ",
  ];

  // Genera historias aleatorias hasta que el array esté vacío
  while (historiasLepero.length > 0) {
    var nAleatorio = Math.round(Math.random() * historiasLepero.length - 1);

    if (historiasLepero[nAleatorio] == undefined) {
      nAleatorio = Math.round(Math.random() * historiasLepero.length - 1);
    } else {
      // Añade la historia seleccionada al contenido del elemento con id "texto" y la elimina del array
      texto.innerHTML += historiasLepero[nAleatorio];
      historiasLepero.splice(nAleatorio, 1);
    }
  }
}
