//Q3 Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this within these methods such that method chaining of add, subtract, multiply and divide is possible.

// Define the Calculator object
const Calculator = {
  // Method to add numbers
  add: function(num) {
      this.result += num;
      return this; // Return the Calculator object for method chaining
  },
  // Method to subtract numbers
  subtract: function(num) {
      this.result -= num;
      return this; // Return the Calculator object for method chaining
  },
  // Method to multiply numbers
  multiply: function(num) {
      this.result *= num;
      return this; // Return the Calculator object for method chaining
  },
  // Method to divide numbers
  divide: function(num) {
      if (num !== 0) {
          this.result /= num;
      } else {
          console.log('Error: Division by zero.');
      }
      return this; // Return the Calculator object for method chaining
  },
  // Method to initialize the result property
  init: function(initialValue) {
      this.result = initialValue;
      return this; // Return the Calculator object for method chaining
  },
  // Method to display the result
  getResult: function() {
      console.log('Result:', this.result);
      return this; // Return the Calculator object for method chaining
  }
};

// Demonstrate method chaining with Calculator object
Calculator.init(10).add(5).subtract(3).multiply(2).divide(4).getResult();
