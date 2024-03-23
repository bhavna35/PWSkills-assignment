// 3. Object Extensibility and Sealing
// a) Use the Object.preventExtensions method to prevent any further additions of properties to the student object.
// b) Use the Object.isExtensible method to check if the student object is extensible. Store the result in a variable called eatensibleStatus.
// c) Create a new object called teacher with a 'subject' property set to 'Math'.
// Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
// e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called sealed Status.
// f) Print the extensibleStatus and sealed Status to the console.

// a) Use Object.preventExtensions to prevent any further additions of properties to the student object
const student = {
  name: 'John',
  age: 20
};
Object.preventExtensions(student);

// b) Use Object.isExtensible to check if the student object is extensible. Store the result in a variable called extensibleStatus
const extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher with a 'subject' property set to 'Math'
const teacher = {
  subject: 'Math'
};

// d) Use Object.seal to seal the teacher object, preventing any additions or deletions of properties
Object.seal(teacher);

// e) Use Object.isSealed to check if the teacher object is sealed. Store the result in a variable called sealedStatus
const sealedStatus = Object.isSealed(teacher);

// f) Print the extensibleStatus and sealedStatus to the console
console.log('Extensible Status of Student:', extensibleStatus);
console.log('Sealed Status of Teacher:', sealedStatus);

// output: Extensible Status of Student: false
//  Sealed Status of Teacher: true