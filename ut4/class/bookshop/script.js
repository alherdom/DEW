class Autor {
  constructor(nombre, nacionalidad) {
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
  }

  get obtenerNombre() {
    return this.nombre;
  }

  get obtenerNacionalidad() {
    return this.nacionalidad;
  }
}

class Libro {
  constructor(titulo, autor, precio, genero, stock) {
    this.id = this.generarId();
    this.titulo = titulo;
    this.autor = autor;
    this.precio = precio >= 0 ? precio : 0;
    this.genero = genero;
    this.stock = stock >= 0 ? stock : 0;
  }

  generarId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  tieneStock() {
    return this.stock > 0;
  }

  get obtenerId() {
    return this.id;
  }

  get obtenerTitulo() {
    return this.titulo;
  }

  get obtenerAutor() {
    return this.autor;
  }

  get obtenerPrecio() {
    return this.precio;
  }

  get obtenerGenero() {
    return this.genero;
  }

  set modificarPrecio(nuevoPrecio) {
    this.precio = nuevoPrecio >= 0 ? nuevoPrecio : 0;
  }

  set modificarStock(nuevoStock) {
    this.stock = nuevoStock >= 0 ? nuevoStock : 0;
  }

  obtenerInfo() {
    return {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor.obtenerNombre(),
      precio: this.precio,
      genero: this.genero,
      stock: this.stock,
    };
  }
}

class Libreria {
  constructor() {
    this.libros = [];
    this.ganancias = 0;
  }

  agregar(libro) {
    this.libros.push(libro);
  }

  eliminar(id) {
    const index = this.libros.findIndex((libro) => libro.obtenerId === id);
    if (index !== -1) {
      this.libros.splice(index, 1);
    } else {
      throw new Error(`No se encontró un libro con el ID '${id}'.`);
    }
  }

  buscarPorId(id) {
    const libro = this.libros.find((libro) => libro.obtenerId === id);
    return libro ? libro.obtenerInfo() : null;
  }

  buscarPorTitulo(titulo) {
    const libro = this.libros.find((libro) => libro.obtenerTitulo === titulo);
    return libro ? libro.obtenerInfo() : null;
  }

  filtrarPorAutor(autor) {
    return this.libros.filter(
      (libro) => libro.obtenerAutor.obtenerNombre() === autor
    );
  }

  filtrarPorGenero(genero) {
    return this.libros.filter((libro) => libro.obtenerGenero === genero);
  }

  comprarLibros(idLibros) {
    idLibros.forEach((id) => {
      const libro = this.libros.find((libro) => libro.obtenerId === id);
      if (libro && libro.tieneStock()) {
        libro.modificarStock = libro.stock - 1;
        this.ganancias += libro.obtenerPrecio;
      }
    });
  }

  obtenerGanancias() {
    return this.ganancias;
  }
}

// Ejemplo de uso:
const autor1 = new Autor("Gabriel Garcia Marquez", "Colombiano");
const autor2 = new Autor("Jane Austen", "Británica");

const libro1 = new Libro(
  "Cien años de soledad",
  autor1,
  20,
  "Realismo mágico",
  5
);
const libro2 = new Libro(
  "Orgullo y prejuicio",
  autor2,
  15,
  "Novela romántica",
  8
);

const libreria = new Libreria();
libreria.agregar(libro1);
libreria.agregar(libro2);

console.log(libreria.filtrarPorAutor("Gabriel Garcia Marquez"));
console.log(libreria.filtrarPorGenero("Novela romántica"));

libreria.comprarLibros([libro1.obtenerId, libro2.obtenerId]);
console.log(libreria.obtenerGanancias());
console.log(libreria.buscarPorId(libro1.obtenerId));
console.log(libreria.buscarPorTitulo("Orgullo y prejuicio"));
