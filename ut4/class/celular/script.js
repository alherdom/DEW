class Celular {
  constructor() {
    this.contactos = [];
    this.llamadas = [];
  }

  agregarContacto(contacto) {
    const existeNombre = this.contactos.some(
      (c) => c.nombre === contacto.nombre
    );
    const existeNumero = this.contactos.some(
      (c) => c.numero === contacto.numero
    );

    if (!existeNombre && !existeNumero) {
      this.contactos.push(contacto);
    } else {
      throw new Error(
        "No se puede agregar el contacto. Ya existe un contacto con el mismo nombre o número."
      );
    }
  }

  buscarPorNombre(nombre) {
    return this.contactos.find((contacto) => contacto.nombre === nombre);
  }

  buscarPorNumero(numero) {
    return this.contactos.find((contacto) => contacto.numero === numero);
  }

  eliminarContacto(nombre) {
    const index = this.contactos.findIndex(
      (contacto) => contacto.nombre === nombre
    );
    if (index !== -1) {
      this.contactos.splice(index, 1);
    } else {
      throw new Error(`No se encontró un contacto con el nombre ${nombre}.`);
    }
  }

  llamar(nombre) {
    const contacto = this.buscarPorNombre(nombre);

    if (contacto) {
      const registroLlamada = `Llamada a ${contacto.nombre} con número ${contacto.numero} realizada`;
      this.llamadas.push(registroLlamada);
    } else {
      throw new Error(`No se encontró un contacto con el nombre ${nombre}.`);
    }
  }

  verContactos() {
    let result = "Lista de contactos:\n";
    this.contactos.forEach((contacto) => {
      result += `Nombre: ${contacto.nombre}, Número: ${contacto.numero}\n`;
    });
    return result;
  }

  verHistorial() {
    let result = "Historial de llamadas:\n";
    result += this.llamadas.join("\n");
    return result;
  }
}

// Ejemplo de uso:
const miCelular = new Celular();

miCelular.agregarContacto({ nombre: "Amigo1", numero: "123456789" });
miCelular.agregarContacto({ nombre: "Amigo2", numero: "987654321" });
console.log(miCelular.verContactos());

miCelular.llamar("Amigo1");
miCelular.llamar("Amigo3"); // Intentar llamar a un contacto que no existe
console.log(miCelular.verHistorial());

miCelular.eliminarContacto("Amigo2");
console.log(miCelular.verContactos());
