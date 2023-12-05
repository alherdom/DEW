document.addEventListener("DOMContentLoaded", launch);

function launch() {
  document.getElementById("enviar").addEventListener("click", validate);
  document.getElementById("nombre").addEventListener("blur", upperCaseInput, true);
  document.getElementById("apellidos").addEventListener("blur", upperCaseInput, true);
  document.getElementById("nif").addEventListener("blur", upperCaseInput, true);
}

function upperCaseInput() {
  var inputId = this.id;
  var x = document.getElementById(inputId).value;
  document.getElementById(inputId).value = x.toUpperCase();
}

function validate(defaultEvent) {
  addAttemps();
  showAttempts();
  if (validateTextFields(this) && confirm("¿Desea enviar el formulario?")) {
    return true;
  } else {
    defaultEvent.preventDefault();
    return false;
  }
}

function addAttemps() {
  var attemps = getAttemps() + 1;
  document.cookie = "intentos=" + attemps;
}

function getAttemps() {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].split("=");
      if (cookie[0] === "intentos") {
        return parseInt(cookie[1]) || 0;
      }
    }
    return 0;
  }

function showAttempts() {
    var attemps = getAttemps();
    var attempsElement = document.getElementById("intentos");
    attempsElement.innerHTML = "Intentos: " + attemps;
    }

function validateTextFields(objeto) {
  var form = objeto.form;
  var errorElement = document.getElementById("errores");
  for (var i = 0; i < form.elements.length; i++) {
    form.elements[i].className = "";
  }

  for (var i = 0; i < form.elements.length; i++) {
    var currentElement = form.elements[i];

    if (currentElement.type == "text" && currentElement.value == "") {
      showError(currentElement.name + " no puede estar en blanco");
      return false;
    }

    if (currentElement.id == "edad") {
      var ageValue = parseInt(currentElement.value);
      if (isNaN(ageValue) || ageValue < 0 || ageValue > 105) {
        showError(currentElement.name + " incorrecto o la edad <0 o >105");
        return false;
      }
    }

    // ^\d{8}-[A-Za-z]$ -> Empieza por 8 dígitos, seguido de guión,
    // termina con 1 letra mayúscula o minúscula
    if (currentElement.id == "nif" && !/^\d{8}-[A-Za-z]$/.test(currentElement.value)) {
      showError(currentElement.name + " incorrecto, ejemplo: 00000000-A");
      return false;
    }

    // ^[\w]+@{1}[\w]+\.[a-z] -> Empieza por 1 o más caracteres alfanuméricos,
    // seguido de @, seguido de 1 o más caracteres alfanuméricos,
    // seguido de un punto y termina con 2 o 3 caracteres alfabéticos
    if (currentElement.id == "email" && !/^[\w]+@{1}[\w]+\.[a-z]{2,3}$/.test(currentElement.value)) {
      showError(currentElement.name + " incorrecto, ejemplo: name@email.com");
      return false;
    }

    if (currentElement.id == "provincia" && currentElement.selectedIndex === 0) {
      showError(currentElement.name + " no puede estar en blanco");
      return false;
    }

    // ^\d{2}\/\d{2}\/\d{4}$ -> Empieza por 2 dígitos, seguido de /,
    // seguido de 2 dígitos, seguido de / y termina con 4 dígitos
    if (currentElement.id == "fecha" && !/^\d{2}\/\d{2}\/\d{4}$/.test(currentElement.value)) {
      showError(currentElement.name + " incorrecto, formato: dd/mm/yyyy");
      return false;
    }

    // ^\d{9}$ -> Empieza y termina por 9 dígitos
    if (currentElement.id == "telefono" && !/^\d{9}$/.test(currentElement.value)) {
      showError(currentElement.name + " incorrecto, ejemplo: 666777888");
      return false;
    }

    // ^\d{2}:\d{2}$ -> Empieza por 2 dígitos, seguido de : y termina con 2 dígitos
    if (currentElement.id == "hora" && !/^\d{2}:\d{2}$/.test(currentElement.value)) {
      showError(currentElement.name + " incorrecto, formato: HH:MM");
      return false;
    }
  }
  return true;
}

function showError(message) {
  var errorElement = document.getElementById("errores");
  errorElement.innerHTML = "Campo " + message;
  errorElement.className = "error";
  errorElement.focus();
}
