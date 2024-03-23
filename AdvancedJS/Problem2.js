//Q2 Create a constructor Employee that inherits from the Person constructor of problem 1. 
// Add an additional property designation and a method getDetails to display the employee details.

// Define the Person constructor function (from problem 1)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add the sayHello method to the Person prototype (from problem 1)
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Define the Employee constructor function that inherits from Person
function Employee(name, age, designation) {
  // Call the Person constructor to initialize name and age properties
  Person.call(this, name, age);
  this.designation = designation;
}

// Set up inheritance using Object.create
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add the getDetails method to the Employee prototype
Employee.prototype.getDetails = function() {
  console.log(`Employee: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
};

// Create an instance of Employee
const employee1 = new Employee('John Doe', 35, 'Software Engineer');

// Call the sayHello method (inherited from Person) and getDetails method (added to Employee)
employee1.sayHello(); // Output: Hello, my name is John Doe and I am 35 years old.
employee1.getDetails(); // Output: Employee: John Doe, Age: 35, Designation: Software Engineer
