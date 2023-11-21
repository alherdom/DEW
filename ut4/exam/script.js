class Paciente {
  constructor(nhc, nombre, apellido, nacimiento, sexo) {
    this.nhc = nhc;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.sexo = sexo;
    this.historial = [];
  }
  modificarNHC() {
    let nhc = prompt("Introduce el nuevo NHC:");
    this.nhc = nhc;
    console.log("NHC modificado correctamente");
    alert("NHC modificado correctamente");
    const datosPaciente = document.getElementById("datospaciente");
    datosPaciente.innerHTML = `NHC: ${paciente.nhc}, Nombre: ${paciente.nombre}, Apellido: ${paciente.apellido}, Nacimiento: ${paciente.nacimiento}, Sexo: ${paciente.sexo}`;
  }
  modificarNombre() {
    let nombre = prompt("Introduce el nuevo nombre:");
    this.nombre = nombre;
    console.log("nombre modificado correctamente");
    alert("nombre modificado correctamente");
    const datosPaciente = document.getElementById("datospaciente");
    datosPaciente.innerHTML = `NHC: ${paciente.nhc}, Nombre: ${paciente.nombre}, Apellido: ${paciente.apellido}, Nacimiento: ${paciente.nacimiento}, Sexo: ${paciente.sexo}`;
  }
  modificarApellido() {
    let apellido = prompt("Introduce el nuevo apellido:");
    this.apellido = apellido;
    console.log("apellido modificado correctamente");
    alert("apellido modificado correctamente");
    const datosPaciente = document.getElementById("datospaciente");
    datosPaciente.innerHTML = `NHC: ${paciente.nhc}, Nombre: ${paciente.nombre}, Apellido: ${paciente.apellido}, Nacimiento: ${paciente.nacimiento}, Sexo: ${paciente.sexo}`;
  }
  modificarNacimiento() {
    let nacimiento = prompt("Introduce el nuevo nacimiento:");
    this.nacimiento = nacimiento;
    console.log("nacimiento modificado correctamente");
    alert("nacimiento modificado correctamente");
    const datosPaciente = document.getElementById("datospaciente");
    datosPaciente.innerHTML = `NHC: ${paciente.nhc}, Nombre: ${paciente.nombre}, Apellido: ${paciente.apellido}, Nacimiento: ${paciente.nacimiento}, Sexo: ${paciente.sexo}`;
  }
  modificarSexo() {
    let sexo = prompt("Introduce el nuevo sexo:");
    this.sexo = sexo;
    console.log("sexo modificado correctamente");
    alert("sexo modificado correctamente");
    const datosPaciente = document.getElementById("datospaciente");
    datosPaciente.innerHTML = `NHC: ${paciente.nhc}, Nombre: ${paciente.nombre}, Apellido: ${paciente.apellido}, Nacimiento: ${paciente.nacimiento}, Sexo: ${paciente.sexo}`;
  }
  agregarHistorial() {
    let id = prompt("Introduce el ID:");
    let fecha = prompt("Introduce la fecha:");
    let diagnostico = prompt("Introduce el diagnostico:");
    let tratamiento = prompt("Introduce el tratamiento:");
    let medico = prompt("Introduce el medico:");
    this.historial.push({
      id: id,
      fecha: fecha,
      diagnostico: diagnostico,
      tratamiento: tratamiento,
      medico: medico,
    });
    const datosHistorial = document.getElementById("historial");
    for (let i = 0; i < this.historial.length; i++) {
      console.log(
        `${this.historial[i].id}, ${this.historial[i].fecha}, ${this.historial[i].diagnostico}, ${this.historial[i].tratamiento}, ${this.historial[i].medico}`
      );
      datosHistorial.innerHTML = `${this.historial[i].id}, ${this.historial[i].fecha}, ${this.historial[i].diagnostico}, ${this.historial[i].tratamiento}, ${this.historial[i].medico}`;
    }
  }
  modificarHistorial() {
    let id = prompt("Introduce el nuevo ID:");
    let fecha = prompt("Introduce la nueva fecha:");
    let diagnostico = prompt("Introduce el nuevo diagnostico:");
    let tratamiento = prompt("Introduce el nuevo tratamiento:");
    let medico = prompt("Introduce el nuevo medico:");
    for (let i = 0; i < this.historial.length; i++) {
      this.historial[i][id] = id;
      this.historial[i][fecha] = fecha;
      this.historial[i][diagnostico] = diagnostico;
      this.historial[i][tratamiento] = tratamiento;
      this.historial[i][medico] = medico;
      console.log(
        `${this.historial[i].id}, ${this.historial[i].fecha}, ${this.historial[i].diagnostico}, ${this.historial[i].tratamiento}, ${this.historial[i].medico}`
      );
      document.getElementById(
        "historial"
      ).innerHTML = `${this.historial[i].id}, ${this.historial[i].fecha}, ${this.historial[i].diagnostico}, ${this.historial[i].tratamiento}, ${this.historial[i].medico}`;
    }
  }
  mostrarHistorial() {
    const datosHistorial = document.getElementById("historial");
    for (let i = 0; i < this.historial.length; i++) {
      console.log(
        `${this.historial[i].id}, ${this.historial[i].fecha}, ${this.historial[i].diagnostico}, ${this.historial[i].tratamiento}, ${this.historial[i].medico}`
      );
      datosHistorial.innerHTML = `${this.historial[i].id}, ${this.historial[i].fecha}, ${this.historial[i].diagnostico}, ${this.historial[i].tratamiento}, ${this.historial[i].medico}`;
    }
  }
}
let paciente;
function crearPaciente() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellidos").value;
  const nhc = document.getElementById("nhc").value;
  const sexo = document.getElementById("sexo").value;
  const nacimiento = document.getElementById("fechaNacimiento").value;
  const datosPaciente = document.getElementById("datospaciente");
  paciente = new Paciente(nhc, nombre, apellido, nacimiento, sexo);
  console.log(paciente);
  datosPaciente.innerHTML = `NHC: ${paciente.nhc}, Nombre: ${paciente.nombre}, Apellido: ${paciente.apellido}, Nacimiento: ${paciente.nacimiento}, Sexo: ${paciente.sexo}`;
}
function limpiarPagina() {
  window.location.reload();
  let formulario = document.getElementById("formulario");
  formulario.reset();
}
