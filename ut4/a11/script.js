function Car(model, colour, plate, year) {
  this.model = model;
  this.colour = colour;
  this.plate = plate;
  this.year = year;
}

let cars = {};

function addCar(model, colour, plate, year) {
  if (cars[plate]) {
    alert("A car with this number plate already exists");
  } else {
    const newCar = new Car(model, colour, plate, year);
    cars[plate] = newCar;
    console.log("Car successfully added");
  }
}

function removeCar(plate) {
  if (cars[plate]) {
    delete cars[plate];
    console.log("Car successfully removed");
  } else {
    alert("A car with this number plate does not exist");
  }
}

function showCars() {
  for (let plate in cars) {
    const car = cars[plate];
    console.log(
      `Model: ${car.model}, Colour: ${car.colour}, Plate: ${car.plate}, Year: ${car.year}`
    );
  }
}

// Examples
addCar("Toyota Camry", "Rojo", "ABC123", 2022);
addCar("Honda Civic", "Azul", "XYZ789", 2021);
showCars();
removeCar("ABC123");
showCars();
