// write a program to check whether the number is even or odd using the ternary operator.


const number = 6;
const result = number % 2 === 0 ? "Even":"Odd";
console.log(result);



// Use a nested ternary operator to check that a number is positive, negative or zero. You have to print “positive” if the number is positive and similarly for negative and zero also.


const num = 0;
num > 0 ? console.log("Positive") : num < 0 ? console.log("Negative") : console.log("Zero");


// Use a ternary operator to check that a person is eligible to vote or not by checking his age. If the age of the person is less than 18 then “You cannot vote” should be logged else “You can vote” should be logged.



const age = 18;
age < 18 ? console.log("You cannot Vote") : console.log("You can vote");