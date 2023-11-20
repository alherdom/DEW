class BilleteraVirtual {
  constructor(montoInicial) {
    this.monto = montoInicial;
    this.operaciones = [];
  }

  agregarGasto(gasto) {
    gasto.tipo = "GASTO";
    this.operaciones.push(gasto);
    this.monto -= gasto.cantidad;
  }

  agregarGanancia(ganancia) {
    ganancia.tipo = "GANANCIA";
    this.operaciones.push(ganancia);
    this.monto += ganancia.cantidad;
  }

  obtenerGastosPorMes(mes) {
    return this.operaciones
      .filter(
        (operacion) =>
          operacion.tipo === "GASTO" && operacion.fecha.getMonth() === mes
      )
      .map(({ tipo, ...rest }) => rest);
  }

  obtenerGananciasPorMes(mes) {
    return this.operaciones
      .filter(
        (operacion) =>
          operacion.tipo === "GANANCIA" && operacion.fecha.getMonth() === mes
      )
      .map(({ tipo, ...rest }) => rest);
  }

  obtenerGastosPorCategoria(categoria) {
    return this.operaciones
      .filter(
        (operacion) =>
          operacion.tipo === "GASTO" && operacion.categoria === categoria
      )
      .map(({ tipo, ...rest }) => rest);
  }

  obtenerGananciasPorCategoria(categoria) {
    return this.operaciones
      .filter(
        (operacion) =>
          operacion.tipo === "GANANCIA" && operacion.categoria === categoria
      )
      .map(({ tipo, ...rest }) => rest);
  }

  calcularTotalPorMes(mes) {
    const gastos = this.obtenerGastosPorMes(mes).reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    const ganancias = this.obtenerGananciasPorMes(mes).reduce(
      (total, ganancia) => total + ganancia.cantidad,
      0
    );
    return ganancias - gastos;
  }

  calcularTotalPorCategoria(categoria) {
    const gastos = this.obtenerGastosPorCategoria(categoria).reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    const ganancias = this.obtenerGananciasPorCategoria(categoria).reduce(
      (total, ganancia) => total + ganancia.cantidad,
      0
    );
    return ganancias - gastos;
  }

  obtenerMonto() {
    return this.monto;
  }
}

// Ejemplo de uso:
const miBilletera = new BilleteraVirtual(1000);

miBilletera.agregarGasto({
  descripcion: "Compra de alimentos",
  cantidad: 200,
  fecha: new Date(),
  categoria: "Comida",
});

miBilletera.agregarGanancia({
  descripcion: "Salario",
  cantidad: 1500,
  fecha: new Date(),
  categoria: "Ingresos",
});

console.log(miBilletera.obtenerGastosPorMes(new Date().getMonth()));
console.log(miBilletera.obtenerGananciasPorMes(new Date().getMonth()));
console.log(miBilletera.calcularTotalPorMes(new Date().getMonth()));
console.log(miBilletera.obtenerMonto());
