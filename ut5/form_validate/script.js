window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar);
  document.getElementById("nombre").addEventListener("blur", upperCaseInput);
  document.getElementById("apellidos").addEventListener("blur", upperCaseInput);
  document.getElementById("nif").addEventListener("blur", upperCaseInput);
}

function upperCaseInput() {
  var inputId = this.id;
  var inputValue = document.getElementById(inputId).value;
  document.getElementById(inputId).value = inputValue.toUpperCase();
}

function validar(eventopordefecto) {
  var form = eventopordefecto.target.form;

  for (var i = 0; i < form.elements.length; i++) {
    form.elements[i].className = "";
  }

  if (validarCamposTexto(form) && validarEdad(form) && validarProvincia()) {
    if (!confirm("¿Deseas enviar formulario?")) {
      eventopordefecto.preventDefault();
    }
  } else {
    eventopordefecto.preventDefault();
  }
}

function validarCamposTexto(form) {
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === "text" && element.value === "") {
      mostrarError(element.name + " no puede estar en blanco");
      resaltarCampoError(element);
      return false;
    }
  }
  return true;
}

function validarEdad(form) {
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.id === "edad") {
      var edad = parseInt(element.value, 10);
      if (isNaN(edad) || edad < 0 || edad > 105) {
        mostrarError(
          element.name + " posee valores incorrectos o la edad < 0 o > 105"
        );
        resaltarCampoError(element);
        return false;
      }
    }
  }
  return true;
}

function validarProvincia() {
  var provinciaElement = document.getElementById("provincia");

  if (provinciaElement.selectedIndex === 0) {
    mostrarError("Debes seleccionar una provincia.");
    resaltarCampoError(provinciaElement);
    return false;
  }
  return true;
}

function mostrarError(mensaje) {
  var errorElement = document.getElementById("errores");
  errorElement.innerHTML = mensaje;
}

function resaltarCampoError(element) {
  element.className = "error";
  element.focus();
}
