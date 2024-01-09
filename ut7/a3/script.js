const boton1 = $("#boton1");
const boton2 = $("#boton2");
const boton3 = $("#boton3");

boton1.click(() => {
  alert("Contenido del parrafo: " + $("#parrafo1").text());
});
boton2.click(() => {
  $("#parrafo1").text("Nuevo texto del parrafo");
});

boton3.click(() => {
  $("td").text("Nuevo texto de la celda");
});
