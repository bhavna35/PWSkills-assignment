// 1. In the following shopping cart add, remove, and edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added!
// add Sugar at the end of your shopping cart if it has not been already added!
//  remove 'Honey' if you are allergic to honey
//  modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'honey'];
// add 'Meat in the begining of shopping cart
if (!shoppingCart.includes('Meat'))
{
  shoppingCart.unshift('Meat');
}
// add 'Sugar' at the end of shopping cart
if (!shoppingCart.includes('Sugar'))
{
  shoppingCart.push('Sugar');
}
// Remove 'Honey' if you are allergic to honey

if (shoppingCart.includes('honey')) {
    shoppingCart.splice(shoppingCart.indexOf('honey'), 1);
}

// modify Tea to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}
console.log(shoppingCart);

// ouput :  ['Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar']



// 2. The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 2i, 24, 25, 24]
//   Sort the array and find the min and max age`
//    Find the median age(one middle item or two middle items divided by two)
//    Find the average age(all items divided by number of items)
//    Find the range of the ages(max minus min)
//    Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];
// 1. Sort the array of ages
ages.sort((a, b) => a - b);

// 2. Find the minimum and maximum age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// 3. Find the median age
let medianAge;
const midIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2;
} else {
    medianAge = ages[midIndex];
}

// 4. Find the average age
const sumOfAges = ages.reduce((sum, age) => sum + age, 0);
const averageAge = sumOfAges / ages.length;

// 5. Find the range of ages
const ageRange = maxAge - minAge;

// 6. Compare (min - average) and (max - average) using abs() method
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log('Sorted Ages:', ages);
console.log('Minimum Age:', minAge);
console.log('Maximum Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Absolute Difference (Min - Average):', diffMinAverage);
console.log('Absolute Difference (Max - Average):', diffMaxAverage);
