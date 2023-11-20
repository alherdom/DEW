class Anotador {
  constructor(titulo) {
    this.titulo = titulo;
    this.notas = [];
  }

  agregarNota(nota) {
    this.notas.push(nota);
  }

  actualizarNota(id, nota) {
    if (id >= 0 && id < this.notas.length) {
      this.notas[id] = nota;
    } else {
      throw new Error("Índice de nota fuera de rango.");
    }
  }

  obtenerNota(id) {
    if (id >= 0 && id < this.notas.length) {
      return this.notas[id];
    } else {
      throw new Error("Índice de nota fuera de rango.");
    }
  }

  eliminarNota(id) {
    if (id >= 0 && id < this.notas.length) {
      this.notas.splice(id, 1);
    } else {
      throw new Error("Índice de nota fuera de rango.");
    }
  }

  eliminarNotas() {
    this.notas = [];
  }

  listarNotas() {
    let result = `${this.titulo}\n------------------------\n`;
    this.notas.forEach((nota, index) => {
      result += `${index + 1}. ${nota}\n`;
    });
    return result;
  }
}

// Ejemplo de uso:
const miAnotador = new Anotador("Cosas para hacer");
miAnotador.agregarNota("Ir al súper");
miAnotador.agregarNota("Ver serie");
miAnotador.agregarNota("Programar");
miAnotador.agregarNota("Leer libro");

console.log(miAnotador.listarNotas());

miAnotador.actualizarNota(2, "Programar en JavaScript");
console.log(miAnotador.listarNotas());

miAnotador.eliminarNota(3);
console.log(miAnotador.listarNotas());

miAnotador.eliminarNotas();
console.log(miAnotador.listarNotas());
