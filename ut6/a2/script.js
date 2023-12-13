document.getElementById("botonAñadir").addEventListener("click", function () {
  var list = document.getElementById("lista");
  var newElement = document.createElement("li");
  newElement.appendChild(document.createTextNode("Nuevo elemento"));
  list.appendChild(newElement);
});

//   var lista = document.querySelector("#lista");
//   var nuevoElemento = document.createElement("li");
//   nuevoElemento.appendChild(document.createTextNode("Nuevo elemento"));
//   lista.appendChild(nuevoElemento);
// });
