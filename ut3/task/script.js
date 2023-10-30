function openNewWindow() {
	// Open new window non-resizable, and then add link elemente for apply the style.css
	let newWindow = window.open('', '_blank', 'resizable=no,width=2000,height=1100');
	newWindow.document.write('<br><h3>Ejemplo de Ventana Nueva</h3>');
	let linkElement = newWindow.document.createElement('link');
	linkElement.rel = 'stylesheet';
	linkElement.href = 'style.css';
	newWindow.document.head.appendChild(linkElement);
	// Use "location" metods to get: URL, Protocol, and CodeName
	newWindow.document.write(`<li>URL Completa: ${newWindow.location.href}</li>`);
	newWindow.document.write(`<li>Protocolo utilizado: ${newWindow.location.protocol}</li>`);
	newWindow.document.write(`<li>Nombre en código del navegador: ${newWindow.navigator.appCodeName} </li>`);
	// Ask if javascript is enabled or not
	if (newWindow.navigator.javaEnabled()) {
		newWindow.document.write(`<li>Java SI disponible en esta ventana</li>`);
	} else {
		newWindow.document.write(`<li>Java NO disponible en esta ventana</li>`);
	}
	// Open new window that have "www.google.es" iframe 
	newWindow.document.write(`<br><iframe src="https://www.bing.com/" width="800" height="600"></iframe>`);
	// newWindow.document.write(`<br><iframe src="https://www.google.es" width="800" height="600"></iframe>`);
}
// Use "prompt" for type the name and date of birth inputs
let name = prompt('Introduce tu nombre y apellidos:');
let dayOfBirth = prompt('Introduce el DIA de nacimiento:');
let monthOfBirth = prompt('Introduce el MES de nacimiento:');
let yearOfBirth = prompt('Introduce el AÑO de nacimiento:');
// Get the age with current date and date of birth
let dateOfBirth = new Date(yearOfBirth + '-' + monthOfBirth + '-' + dayOfBirth)
let age = new Date().getFullYear() - new Date(yearOfBirth, monthOfBirth, dayOfBirth).getFullYear();
// We need a array with de name of the week days and months, then get de day name of the day of the birth and name month
const weekDays = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
// Documents wirtes for print the info in the main window
document.write('<h1>TAREA DWEC03</h1><hr />');
document.write(`<li>Buenos días ${name}</li>`);
document.write(`<li>Tu nombre y apellidos tienen ${name.length} caracteres, incluidos espacios</li>`);
document.write(`<li>La primera letra A de tu nombre está en la posición: ${(name.toUpperCase().indexOf('A') + 1)} </li>`);
document.write(`<li>La última letra A de tu nombre está en la posición:  ${(name.toUpperCase().lastIndexOf('A') + 1)} </li>`);
document.write(`<li>Tu nombre menos las 3 primeras letras es: ${name.slice(3)} </li>`);
document.write(`<li>Tu nombre todo en mayúsculas es: ${name.toUpperCase()} </li>`);
document.write(`<li>Tu edad es: ${age} años </li>`);
document.write(`<li>Naciste un feliz ${weekDays[dateOfBirth.getDay()]} del mes de ${months[monthOfBirth - 1]} del año ${yearOfBirth}</li>`);
document.write(`<li>El coseno de 180 es: ${Math.cos(180)}</li>`);
document.write(`<li>El número mayor de (34, 67, 23, 75, 35, 19) es: ${Math.max(34, 67, 23, 75, 35, 19)}</li>`);
document.write(`<li>Ejemplo de número al azar: ${(Math.floor(Math.random() * 10000000000) + 1)}</li>`);
