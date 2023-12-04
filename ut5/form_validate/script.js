window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
  document.getElementById("nombre").addEventListener("blur", upperCaseName, true);
  document.getElementById("apellidos").addEventListener("blur", upperCaseLastName, true);
}

function upperCaseName() {
  var x = document.getElementById("nombre").value;
  document.getElementById("nombre").value = x.toUpperCase();
}

function upperCaseLastName() {
  var x = document.getElementById("apellidos").value;
  document.getElementById("apellidos").value = x.toUpperCase();
}

function validar(eventopordefecto) {
  if (
    validarcampostexto(this) &&
    validarProvincia() &&
    confirm("¿Deseas enviar formulario?")
  )
    return true;
  else {
    eventopordefecto.preventDefault();
    return false;
  }
}

function validarcampostexto(objeto) {
  var formulario = objeto.form;
  var errorElement = document.getElementById("errores");

  for (var i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }

  for (var i = 0; i < formulario.elements.length; i++) {
    if (
      formulario.elements[i].type == "text" &&
      formulario.elements[i].value == ""
    ) {
      errorElement.innerHTML = "El campo:" + formulario.elements[i].name + " no puede estar en blanco";
      formulario.elements[i].className = "error";
      formulario.elements[i].focus();
      return false;
    } else if (formulario.elements[i].id == "edad") {
            if (
                isNaN(formulario.elements[i].value) ||
                formulario.elements[i].value < 0 ||
                formulario.elements[i].value > 105
            ) {
                errorElement.innerHTML = "El campo:" + formulario.elements[i].name + " posee valores incorrectos o la edad <0 o >105";
                formulario.elements[i].className = "error";
                formulario.elements[i].focus();
                return false;
            }
    } else if (formulario.elements[i] == "nif") {
        var patron = /^\d{8}-[A-Za-z]$/;
        if (patron.test(document.getElementById("nif").value)) {
            document.getElementById("nif").focus();
            errorElement.innerHTML = "El campo:" + formulario.elements[i].name + " posee valores incorrectos";
        }
    }
    
    }
    return true;
}

function validarProvincia() {
    var errorElement = document.getElementById("errores");
  if (document.getElementById("provincia").selectedIndex == 0) {
    errorElement.innerHTML = "Atención!:Debes seleccionar una provincia.";
    document.getElementById("provincia").focus();
    return false;
  } else return true;
}
