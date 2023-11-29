
// Q2. Write a program that grades students based on their marks
//  If greater than 90 than A Grade
//  If between 70 and 90 than a B grade
//  If between 50 and 70 than a C grade
//  Below 50 than an F gradF

const marks = 67;
if(marks > 90)
{
  console.log("Grade A");
}
if(marks >=70 && marks <=90)
{
  console.log("Grade B");
} 
if(marks >=50 && marks <=70)
{
  console.log("Grade C");
}
if(marks<50)
{
  console.log("Grade F")
}


// Q4. Generate numbers between any 2 given numbers.

const  min = 5;
const max = 10;
for(let i=0;i<=5;i++)
{
  console.log(Math.floor(Math.random() * (max-min) + min));
}



// Q5. Use the while loop to print numbers from 1 to 25 in ascending and descending order.

// Ascending order
let i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}

// Descending order
let j = 25;
while (j >= 1) {
    console.log(j);
    j--;
}
