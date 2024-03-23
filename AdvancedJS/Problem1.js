//Q1 Create an object constructor Person that takes name and age as parameters and initializes them. Also, add a method sayHello to greet the person.

// Define the Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add the sayHello method to the Person prototype
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create an instance of Person
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

// Call the sayHello method for each person
person1.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I am 30 years old.
