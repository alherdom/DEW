class Auto {
  constructor(manufacture, model, patent) {
    this.on = false;
    this.speed = 0;
    this.manufacture = manufacture;
    this.model = model;
    this.patent = patent;
  }
  starting() {
    this.on = true;
  }
  shutdown() {
    if (this.speed === 0) {
      this.on = false;
    } else {
      alert(`The car has speed, to stop it must decelerate to speed 0.`);
    }
  }
  accelerate() {
    if (this.on === true) {
      this.speed += 10;
    } else {
      alert("The car is shutdown, starting to accelerate");
    }
  }
  decelerate() {
    if (this.on === true) {
      this.speed = Math.max(0, this.speed - 10);
    } else {
      alert("The car is shutdown, starting to decelerate");
    }
  }
  toString() {
    console.log(
      `On: ${this.on}, Speed: ${this.speed}, Manufacture: ${this.manufacture}, Model: ${this.model}, Patent: ${this.patent}`
    );
  }
}

// Example
const car1 = new Auto("Toyota", "Camry", "ABC123");
car1.toString();
car1.starting();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.toString();
car1.decelerate();
car1.decelerate();
car1.decelerate();
car1.toString();
car1.shutdown();
car1.toString();
