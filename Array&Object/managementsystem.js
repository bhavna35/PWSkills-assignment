// Description:
// You are tasked with building a student management system using JavaScript. 
// The system should allow you to perform various operations on a list of students, including adding, updating, deleting, and displaying student information.
// Requirements:
// Here is an initial array of students. Each student is represented as an object with the following properties: id,firstName, lastName, age, and grade.


// Implement the following functions using pure JavaScript (without any external libraries or frameworks):
// a. Add a Student: Create a function to add a new student to the array.
// b. Update Student Information: Create a function to update a student's information based on their id.
// c. Delete a Student: Create a function to delete a student based on their id.
// d. List All Students: Create a function to display a list of all students.
// e. Find Students by Grade: Create a function to find all students who have a specific grade.
// f. Calculate Average Age: Create a function to calculate the average age of all students using array method.



// Initial array of students
let students = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
  { id: 3, firstName: 'James', lastName: 'Johnson', age: 21, grade: 'A' },
  { id: 4, firstName: 'Emily', lastName: 'Davis', age: 19, grade: 'C' }
];

// a. Add a Student
function addStudent(newStudent) {
  students.push(newStudent);
}

// b. Update Student Information
function updateStudentInfo(id, updatedInfo) {
  const index = students.findIndex(student => student.id === id);
  if (index !== -1) {
      students[index] = { ...students[index], ...updatedInfo };
  }
}

// c. Delete a Student
function deleteStudent(id) {
  students = students.filter(student => student.id !== id);
}

// d. List All Students
function listAllStudents() {
  students.forEach(student => {
      console.log(`${student.firstName} ${student.lastName} (ID: ${student.id}) - Age: ${student.age}, Grade: ${student.grade}`);
  });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
  return students.filter(student => student.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
  const totalAges = students.reduce((sum, student) => sum + student.age, 0);
  return totalAges / students.length;
}

// Test the functions
addStudent({ id: 5, firstName: 'Sarah', lastName: 'Wilson', age: 18, grade: 'B' });

updateStudentInfo(4, { age: 20, grade: 'B' });

deleteStudent(1);

listAllStudents();

console.log('Students with Grade A:');
console.log(findStudentsByGrade('A'));
console.log('Average Age:', calculateAverageAge());


// 5. You are given a JavaScript object representing a student's information. Your task is to use the 'for...in' loop to iterate over the properties of the object and perform various operations.

// a. Create a function displayStudentInfo that takes the student object as a parameter. Inside this function, use a'for...in' loop to iterate over the properties of the student object and print each property and its corresponding value to the console.

function displayStudentInfo(studentObj) {
  for (let prop in studentObj) {
      console.log(`Property: ${prop}, Value: ${studentObj[prop]}`);
  }
}
const student={
  name:"Alice",
  age:22,
  major:"Computer Science",
  GPA:3.8,
  isEnrolled:true
};
displayStudentInfo(student);