function Building(street, number, postalCode, floors) {
  this.street = street;
  this.number = number;
  this.postalCode = postalCode;
  this.floors = floors;
  alert(
    `    New building was constructed in,
    street ${this.street} 
    number ${this.number}
    postal code ${this.postalCode}`
  );
}

Building.prototype.addFloorsAndDoors = function (floors, doors) {
  this.floors += floors;
  this.doors = doors;
};

Building.prototype.editNumber = function (number) {
  this.number = number;
};
Building.prototype.editStreet = function (street) {
  this.street = street;
};

Building.prototype.editPostalCode = function (postalCode) {
  this.postalCode = postalCode;
};
Building.prototype.showStreet = function () {
  alert(this.street);
};

Building.prototype.showNumber = function () {
  alert(this.number);
};

Building.prototype.showPostalCode = function () {
  alert(this.postalCode);
};

const firstBuilding = new Building("Culantrillo", 1, 38300, 5);
console.log(firstBuilding);
firstBuilding.addFloorsAndDoors(5, 10);
console.log(firstBuilding);
firstBuilding.editNumber(6);
console.log(firstBuilding);
firstBuilding.editPostalCode(38400);
console.log(firstBuilding);
firstBuilding.editStreet("Perdomo");
console.log(firstBuilding);
firstBuilding.showNumber;
firstBuilding.showPostalCode;
firstBuilding.showStreet;
/* 
agregarPropietario(nombre,planta,puerta) // Se le pasa un nombre de propietario, un 
número de planta y un número de puerta y lo asignará como propietario de ese piso.
imprimePlantas // Recorrerá el edificio e imprimirá todos los propietarios de cada puerta. */
