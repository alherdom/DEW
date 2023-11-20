class Tarea {
  constructor(descripcion, categoria, vencimiento) {
    this.id = this.generarId();
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.vencimiento = new Date(vencimiento);
    this.finalizada = false;
  }

  generarId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  finalizar() {
    this.finalizada = true;
  }

  get obtenerId() {
    return this.id;
  }

  get obtenerDescripcion() {
    return this.descripcion;
  }

  get obtenerCategoria() {
    return this.categoria;
  }

  get obtenerVencimiento() {
    return this.vencimiento;
  }

  get obtenerFinalizada() {
    return this.finalizada;
  }
}

class Agenda {
  constructor() {
    this.tareas = [];
  }

  agregar(tarea) {
    this.tareas.push(tarea);
  }

  eliminar(id) {
    const index = this.tareas.findIndex((tarea) => tarea.obtenerId === id);
    if (index !== -1) {
      this.tareas.splice(index, 1);
    } else {
      throw new Error(`No se encontró una tarea con el ID '${id}'.`);
    }
  }

  finalizar(id) {
    const tarea = this.obtener(id);
    if (tarea) {
      tarea.finalizar();
    } else {
      throw new Error(`No se encontró una tarea con el ID '${id}'.`);
    }
  }

  obtener(id) {
    return this.tareas.find((tarea) => tarea.obtenerId === id);
  }

  obtenerTodas() {
    return this.tareas;
  }

  filtrarActivas() {
    return this.tareas.filter((tarea) => !tarea.obtenerFinalizada);
  }

  filtrarFinalizadas() {
    return this.tareas.filter((tarea) => tarea.obtenerFinalizada);
  }

  filtrarPorCategoria(categoria) {
    return this.tareas.filter((tarea) => tarea.obtenerCategoria === categoria);
  }

  filtrarPorVencimiento(fecha) {
    return this.tareas.filter(
      (tarea) =>
        tarea.obtenerVencimiento.getTime() === new Date(fecha).getTime()
    );
  }
}

// Ejemplo de uso:
const tarea1 = new Tarea("Hacer ejercicio", "Salud", "2023-12-01");
const tarea2 = new Tarea("Comprar víveres", "Compras", "2023-12-05");
const tarea3 = new Tarea("Estudiar para examen", "Estudios", "2023-12-10");

const agenda = new Agenda();
agenda.agregar(tarea1);
agenda.agregar(tarea2);
agenda.agregar(tarea3);

console.log(agenda.obtenerTodas());
console.log(agenda.filtrarActivas());
console.log(agenda.filtrarFinalizadas());
console.log(agenda.filtrarPorCategoria("Estudios"));
console.log(agenda.filtrarPorVencimiento("2023-12-05"));
