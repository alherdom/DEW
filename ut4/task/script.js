// Definition of the Edificio (Building) object
function Building(street, number, postalCode) {
  // Building properties
  this.street = street;
  this.number = number;
  this.postalCode = postalCode;
  this.floors = [];

  // Method to add floors and doors to the building
  this.addFloorsAndDoors = function (numFloors, numDoors) {
    for (let i = 0; i < numFloors; i++) {
      let floor = [];
      for (let j = 0; j < numDoors; j++) {
        floor.push({ owner: null });
      }
      this.floors.push(floor);
    }
  };

  // Method to modify the building number
  this.modifyNumber = function (newNumber) {
    this.number = newNumber;
  };

  // Method to modify the street name
  this.modifyStreet = function (newStreet) {
    this.street = newStreet;
  };

  // Method to modify the building postal code
  this.modifyPostalCode = function (newPostalCode) {
    this.postalCode = newPostalCode;
  };

  // Method to print the street name of the building
  this.printStreet = function () {
    return this.street;
  };

  // Method to print the building number
  this.printNumber = function () {
    return this.number;
  };

  // Method to print the postal code of the building
  this.printPostalCode = function () {
    return this.postalCode;
  };

  // Method to add an owner to a floor of the building
  this.addOwner = function (name, floor, door) {
    if (this.floors[floor - 1] && this.floors[floor - 1][door - 1]) {
      this.floors[floor - 1][door - 1].owner = name;
      console.log(
        `${name} is now the owner of door ${door} on floor ${floor}.`
      );
    } else {
      console.log(`The specified floor or door does not exist.`);
    }
  };

  // Method to print all owners of each door
  this.printFloors = function () {
    for (let i = 0; i < this.floors.length; i++) {
      for (let j = 0; j < this.floors[i].length; j++) {
        const owner = this.floors[i][j].owner || "No owner";
        console.log(`Floor ${i + 1}, Door ${j + 1}: ${owner}`);
      }
    }
  };

  // Message for building construction
  console.log(
    `Constructed new building on street: ${street}, no: ${number}, postal code: ${postalCode}.`
  );
}

// Example of usage
const buildingA = new Building("Garcia Prieto", 58, 15706);
const buildingB = new Building("Camino Caneiro", 29, 32004);
const buildingC = new Building("San Clemente", "s/n", 15705);
console.log(
  `The postal code of buiilding A is: ${buildingA.printPostalCode()}`
);
console.log(`The street of building C is: ${buildingC.printStreet()}`);
console.log(
  `The building B is located on the street ${buildingB.printStreet()} number ${buildingB.printNumber()}`
);
buildingA.addFloorsAndDoors(2, 3);
buildingA.addOwner("Jose Antonio Lopez", 1, 1);
buildingA.addOwner("Luisa Martinez", 1, 2);
buildingA.addOwner("Marta Castellón", 1, 3);
buildingA.addOwner("Antonio Pereira", 2, 2);
buildingA.printFloors();
buildingA.addFloorsAndDoors(1, 3);
buildingA.addOwner("Pedro Meijide", 3, 2);
buildingA.printFloors();
