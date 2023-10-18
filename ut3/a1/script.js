function  abrirSubVentana()
{
	nuevaVentana =  window.open("excercise1.1.html",  "sub",  "height=300,width=400");
}
function  copiarAlPadre()
{
	opener.document.getElementById("original").innerHTML = document.getElementById('textocopiar').value;
}