class Usuario {
  constructor(nombre) {
    this.id = generateUniqueId();
    this.nombre = nombre;
  }

  getId() {
    return this.id;
  }

  getNombre() {
    return this.nombre;
  }
}

class Mensaje {
  constructor(remitente, destinatario, texto) {
    this.remitente = remitente;
    this.destinatario = destinatario;
    this.texto = texto;
    this.fecha = new Date();
  }

  getRemitente() {
    return this.remitente;
  }

  getDestinatario() {
    return this.destinatario;
  }

  getTexto() {
    return this.texto;
  }

  getFecha() {
    return this.fecha;
  }
}

class Chat {
  constructor(usuario) {
    this.usuario = usuario;
    this.contactos = [];
    this.mensajes = [];
  }

  agregarContacto(usuario) {
    this.contactos.push(usuario);
  }

  obtenerContactos() {
    return this.contactos.map((contacto) => ({
      id: contacto.getId(),
      nombre: contacto.getNombre(),
    }));
  }

  obtenerMensajes() {
    return this.mensajes.map((mensaje) => ({
      remitente: mensaje.getRemitente().getNombre(),
      destinatario: mensaje.getDestinatario().getNombre(),
      texto: mensaje.getTexto(),
      fecha: mensaje.getFecha(),
    }));
  }

  filtrarPorContacto(id) {
    return this.mensajes.filter(
      (mensaje) => mensaje.getDestinatario().getId() === id
    );
  }

  filtrarPorFecha(fecha) {
    return this.mensajes.filter(
      (mensaje) =>
        mensaje.getFecha().getFullYear() === fecha.getFullYear() &&
        mensaje.getFecha().getMonth() === fecha.getMonth() &&
        mensaje.getFecha().getDate() === fecha.getDate()
    );
  }

  mandarMensaje(mensaje) {
    if (!this.contactos.includes(mensaje.getDestinatario())) {
      throw new Error(
        "No puedes enviar mensajes a usuarios que no están en tu lista de contactos."
      );
    }

    if (
      !this.mensajes.some(
        (existingMensaje) =>
          existingMensaje.getRemitente() === mensaje.getRemitente() &&
          existingMensaje.getDestinatario() === mensaje.getDestinatario() &&
          existingMensaje.getTexto() === mensaje.getTexto()
      )
    ) {
      this.mensajes.push(mensaje);
    }
  }
}

// Helper function to generate a unique ID for users
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Example usage:
const usuario1 = new Usuario("Usuario1");
const usuario2 = new Usuario("Usuario2");

const chat = new Chat(usuario1);
chat.agregarContacto(usuario2);

const mensaje1 = new Mensaje(usuario1, usuario2, "Hola, ¿cómo estás?");
chat.mandarMensaje(mensaje1);

const mensaje2 = new Mensaje(usuario2, usuario1, "¡Hola! Estoy bien, gracias.");
chat.mandarMensaje(mensaje2);

console.log(chat.obtenerMensajes());
console.log(chat.filtrarPorContacto(usuario2.getId()));
console.log(chat.filtrarPorFecha(new Date()));
