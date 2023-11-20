class Calculator {
  constructor(result = 0) {
    this.result = result;
  }

  isValidNumber(number) {
    if (!Number.isFinite(number)) {
      console.error("Error: Invalid input. Please provide a finite number.");
      return false;
    }
    return true;
  }

  sum(number) {
    if (this.isValidNumber(number)) {
      this.result += number;
    }
  }

  subtract(number) {
    if (this.isValidNumber(number)) {
      this.result -= number;
    }
  }

  multiply(number) {
    if (this.isValidNumber(number)) {
      this.result *= number;
    }
  }

  divide(number) {
    if (this.isValidNumber(number) && number !== 0) {
      this.result /= number;
    } else if (number === 0) {
      console.error("Error: Division by zero is not allowed.");
    }
  }

  showResult() {
    console.log(this.result);
  }

  resetResult() {
    this.result = 0;
  }
}

// Example usage
const myCalculator = new Calculator(8);
myCalculator.sum(2);
myCalculator.showResult();
myCalculator.multiply(3);
myCalculator.showResult();
myCalculator.subtract(2);
myCalculator.showResult();
myCalculator.divide(4);
myCalculator.showResult();
myCalculator.resetResult();
myCalculator.showResult();
