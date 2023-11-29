// Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest =(principal * rate * time) / 100.

function calculateSimpleInterest(principal,rate,time)
{
  return (principal*rate*time)/100;
}
let result = calculateSimpleInterest(500,2,2);
console.log("Simple interest " +result);


// Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/height * height.


function calculateBodyMass(weight,height)
{
  return (weight) / (height * height) 
}
let BMI = calculateBodyMass(39,5);
console.log("Body Mass is "+BMI);

// Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate arithmetic operators.


function calculateAreaOfCircle(radius)
{ 
  let pi =3.14159265359;
  return pi*(radius*radius);
}
let AreaOfCircle = calculateAreaOfCircle(5);
console.log("Area of Circle is "+AreaOfCircle);