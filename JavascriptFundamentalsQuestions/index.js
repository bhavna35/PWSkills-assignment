// Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.The inner function should access both the parameter of outerFunction and a variable declared within outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these variables even after outerFunction has finished executing.

function outerFunction(param) {
  const localVar = "I am a local variable";

  function innerFunction() {
    console.log("Parameter of outerFunction:", param);
    console.log("Local variable of outerFunction:", localVar);
  }
  // Returning the inner function
  return innerFunction;
}
// Creating an instance of the inner function
const inner = outerFunction("Hello, world!");
// Calling the inner function
inner();



// Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test the function with various patterns and strings.

function matchRegex(pattern, str) {
  const regex = new RegExp(pattern);
  return regex.test(str);
}
// Test the function with various patterns and strings
console.log(matchRegex('hello', 'hello world')); // Output: true
console.log(matchRegex('world', 'hello world')); // Output: true
console.log(matchRegex('123', 'abc123xyz')); // Output: true



// Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.Create a function that searches for specific character classes in a given string and returns the matches. Test the function with patterns for digits, uppercase letters, lowercase letters, and special characters.

function findMatches(str) {
  const digitPattern = /\d/g; // Matches digits
  const uppercasePattern = /[A-Z]/g; // Matches uppercase letters
  const lowercasePattern = /[a-z]/g; // Matches lowercase letters
  const specialCharPattern = /[^A-Za-z0-9]/g; // Matches special characters

  const digitMatches = str.match(digitPattern) || [];
  const uppercaseMatches = str.match(uppercasePattern) || [];
  const lowercaseMatches = str.match(lowercasePattern) || [];
  const specialCharMatches = str.match(specialCharPattern) || [];

  return {
      digits: digitMatches,
      uppercaseLetters: uppercaseMatches,
      lowercaseLetters: lowercaseMatches,
      specialCharacters: specialCharMatches
  };
}

// Test the function with a sample string
const sampleString = 'Hello! 123 World';
const matches = findMatches(sampleString);

console.log('Digits:', matches.digits); // Output: ['1', '2', '3']
console.log('Uppercase Letters:', matches.uppercaseLetters); // Output: ['H', 'W']
console.log('Lowercase Letters:', matches.lowercaseLetters); // Output: ['e', 'l', 'l', 'o', 'o', 'r', 'l', 'd']
console.log('Special Characters:', matches.specialCharacters); // Output: ['!', ' ']



// Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not only checks if there is a match but also extracts specific parts of the matched text using groups. Test the function with patterns that include groups to capture different parts of a date (e.g., day, month, and year) from a given string.
function extractDateParts(pattern, str) {
  const regex = new RegExp(pattern);
  const match = regex.exec(str);

  if (match) {
      const [fullMatch, day, month, year] = match;
      return { day, month, year };
  } else {
      return null; // No match found
  }
}
// Test the function with a sample string and regex pattern
const sampleStringdata = 'Today is 2024-03-22, which is Wednesday';
const datePattern = /(\d{4})-(\d{2})-(\d{2})/;
const extractedDate = extractDateParts(datePattern, sampleStringdata);

if (extractedDate) {
  console.log('Day:', extractedDate.day); // Output: 22
  console.log('Month:', extractedDate.month); // Output: 03
  console.log('Year:', extractedDate.year); // Output: 2024
} else {
  console.log('No date found in the input string.');
}



// Q5. You are building a shipping application. Write a program that takes the type of package ("standard","express", or "overnight") and uses a switch statement to calculate and print the estimated delivery timebased on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and"overnight" would be delivered the next day.

function calculateDeliveryTime(packageType) {
  let deliveryTime;

  switch (packageType.toLowerCase()) {
      case 'standard':
          deliveryTime = '3-5 days';
          break;
      case 'express':
          deliveryTime = '1-2 days';
          break;
      case 'overnight':
          deliveryTime = 'next day';
          break;
      default:
          deliveryTime = 'not specified';
          break;
  }

  return deliveryTime;
}
// Test the program with different package types
const package1 = 'standard';
const package2 = 'express';
const package3 = 'overnight';

console.log(`Delivery time for ${package1}: ${calculateDeliveryTime(package1)}`);
console.log(`Delivery time for ${package2}: ${calculateDeliveryTime(package2)}`);
console.log(`Delivery time for ${package3}: ${calculateDeliveryTime(package3)}`);
