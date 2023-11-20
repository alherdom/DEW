class Televisor {
  constructor(marca, canales) {
    this.encendido = false;
    this.canal = 0;
    this.canales = canales;
    this.volumen = 0;
    this.marca = marca;
  }

  prender() {
    this.encendido = true;
  }

  apagar() {
    this.encendido = false;
  }

  verCanalSiguiente() {
    if (this.encendido) {
      this.canal = (this.canal + 1) % (this.canales + 1);
    }
  }

  verCanalAnterior() {
    if (this.encendido) {
      this.canal = (this.canal - 1 + this.canales + 1) % (this.canales + 1);
    }
  }

  cambiarCanal(canal) {
    if (this.encendido && canal >= 0 && canal <= this.canales) {
      this.canal = canal;
    }
  }

  subirVolumen() {
    if (this.encendido && this.volumen < 100) {
      this.volumen += 1;
    }
  }

  bajarVolumen() {
    if (this.encendido && this.volumen > 0) {
      this.volumen -= 1;
    }
  }

  toString() {
    console.log(
      `Televisor ${this.marca} \n - Encendido: ${this.encendido} \n - Canales: ${this.canales} \n - Canal actual: ${this.canal} \n - Volumen actual: ${this.volumen}`
    );
  }
}

// Ejemplo
const miTelevisor = new Televisor("Samsung", 100);

miTelevisor.prender();
miTelevisor.verCanalSiguiente();
miTelevisor.subirVolumen();
miTelevisor.subirVolumen();
miTelevisor.toString();

miTelevisor.apagar();
miTelevisor.verCanalAnterior();
miTelevisor.toString();
