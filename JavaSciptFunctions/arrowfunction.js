//Q1. Create an arrow function called square that takes a number as an argument and returns its square. Use the arrow function to calculate the square of a given number and display the result.

square = (x) => {
  return x * x;
};
console.log(square(9));


// Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a personalized greeting message. Use this function to greet three different people.

generateGreeting = (name) => {
  return `Hello Mr. ${name}. Welcome to PWSkills`;
};
console.log(generateGreeting("Christian"));
console.log(generateGreeting("John"));
console.log(generateGreeting("Ravi"));



// Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and immediately displays the result.

(function () {
  // IIFE code block
  var num = 8;
  console.log(num * num);
})();



// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the function with various incomes.

function calculateTax() {
  // Tax rate ranges and corresponding functions
  const taxRates = [
    { minIncome: 0, maxIncome: 10000, taxRate: 0.1 },
    { minIncome: 10001, maxIncome: 50000, taxRate: 0.2 },
    { minIncome: 50001, maxIncome: 100000, taxRate: 0.3 },
    { minIncome: 100001, maxIncome: Infinity, taxRate: 0.4 },
  ];
  // Closure function to calculate tax based on income
  return function (income) {
    for (const rate of taxRates) {
      if (income >= rate.minIncome && income <= rate.maxIncome) {
        return income * rate.taxRate;
      }
    }
  };
}
const calculateTaxForIncome = calculateTax();

console.log(calculateTaxForIncome(5000)); // Output: 500
console.log(calculateTaxForIncome(25000)); // Output: 5000
console.log(calculateTaxForIncome(75000)); // Output: 22500
console.log(calculateTaxForIncome(150000)); // Output: 60000



// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using recursion. Test the function with different inputs.
function factorial(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: multiply n by factorial of n-1
  else {
    return n * factorial(n - 1);
  }
}
// Test the function with different inputs
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(5)); // Output: 120



// Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried version of that function. The curried function should accept arguments one at a time and return a new function until all arguments are provided. Then, it should execute the original function with all arguments.Test the curry function with a function that adds two numbers.

function curry(func) {
  return function curried(...args) {
      if (args.length >= func.length) {
          return func(...args);
      } else {
          return function (...moreArgs) {
              return curried(...args, ...moreArgs);
          };
      }
  };
}

// Test the curry function with a function that adds two numbers
function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);

console.log(curriedAdd(2)(3)); // Output: 5
console.log(curriedAdd(5)(7)); // Output: 12
console.log(curriedAdd(1, 2)); // Output: 3
console.log(curriedAdd(4)(6, 8)); // Output: 10
