class Producto {
  constructor(nombre, precio, cantidad, tieneImpuesto) {
    if (precio < 0) {
      throw new Error("El precio no puede ser menor a 0.");
    }

    this.id = this.generarId();
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad > 0 ? cantidad : 1; // La cantidad nunca puede ser 0
    this.tieneImpuesto = tieneImpuesto;
  }

  generarId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  get obtenerId() {
    return this.id;
  }

  get obtenerNombre() {
    return this.nombre;
  }

  get obtenerPrecio() {
    return this.precio;
  }

  get obtenerCantidad() {
    return this.cantidad;
  }

  get obtenerTieneImpuesto() {
    return this.tieneImpuesto;
  }

  set establecerCantidad(nuevaCantidad) {
    if (nuevaCantidad > 0) {
      this.cantidad = nuevaCantidad;
    } else {
      throw new Error("La cantidad no puede ser 0.");
    }
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  actualizarCantidadProducto(id, cantidad) {
    const producto = this.productos.find((p) => p.obtenerId === id);

    if (producto) {
      producto.establecerCantidad = cantidad;
    } else {
      throw new Error(`No se encontró un producto con el ID '${id}'.`);
    }
  }

  eliminarProducto(id) {
    const index = this.productos.findIndex((p) => p.obtenerId === id);
    if (index !== -1) {
      this.productos.splice(index, 1);
    } else {
      throw new Error(`No se encontró un producto con el ID '${id}'.`);
    }
  }

  calcularTotal() {
    return this.productos.reduce((total, producto) => {
      const precioTotal = producto.obtenerTieneImpuesto
        ? producto.obtenerPrecio * 1.1
        : producto.obtenerPrecio;
      return total + precioTotal * producto.obtenerCantidad;
    }, 0);
  }

  calcularImpuestoTotal() {
    return this.productos.reduce((total, producto) => {
      if (producto.obtenerTieneImpuesto) {
        return total + producto.obtenerPrecio * 0.1 * producto.obtenerCantidad;
      }
      return total;
    }, 0);
  }

  obtenerCantidadTotal() {
    return this.productos.reduce(
      (total, producto) => total + producto.obtenerCantidad,
      0
    );
  }

  toString() {
    let result = "Lista de productos en el carrito:\n";
    this.productos.forEach((producto) => {
      result += `Nombre: ${
        producto.obtenerNombre
      }, Precio por unidad: ${producto.obtenerPrecio.toFixed(2)}, Cantidad: ${
        producto.obtenerCantidad
      }\n`;
    });
    result += `\nSubtotal de productos: ${this.calcularTotal().toFixed(2)}\n`;
    result += `Subtotal de impuestos: ${this.calcularImpuestoTotal().toFixed(
      2
    )}\n`;
    result += `Total: ${(
      this.calcularTotal() + this.calcularImpuestoTotal()
    ).toFixed(2)}`;
    return result;
  }
}

// Ejemplo de uso:
const producto1 = new Producto("Producto A", 10, 2, true);
const producto2 = new Producto("Producto B", 20, 3, false);

const carrito = new Carrito();
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);

console.log(carrito.toString());
