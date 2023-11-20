function calcularFibonacci() {
  // Obtener el valor ingresado por el usuario
  var n = document.getElementById("numero").value;

  // Validar si se ingresó un número válido
  if (isNaN(n) || n < 0 || !Number.isInteger(parseFloat(n))) {
    alert("Por favor, ingrese un número entero no negativo.");
    return;
  }

  // Convertir el valor a un entero
  n = parseInt(n);

  // Calcular la secuencia de Fibonacci y mostrarla
  var resultado = obtenerSecuenciaFibonacci(n);
  document.getElementById("resultado").innerHTML =
    "La secuencia de Fibonacci hasta n=" + n + " es: " + resultado.join(", ");
}

function obtenerSecuenciaFibonacci(n) {
  var secuencia = [];
  for (var i = 0; i <= n; i++) {
    secuencia.push(fibonacci(i));
  }
  return secuencia;
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
