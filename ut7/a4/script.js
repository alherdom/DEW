const boton1 = $("#boton1");
const boton2 = $("#boton2");
const boton3 = $("#boton3");

boton1.click(() => {
  $("table").addClass("table-bordered");
});
boton2.click(() => {
  alert($("table").css("border"));
});

boton3.click(() => {
  $("table").removeClass("table-bordered");
});
