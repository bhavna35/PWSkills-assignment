//Q4 Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override the draw method. Demonstrate polymorphism using instances of these classes.
// Define the base class Shape
class Shape {
  draw() {
      console.log('Drawing a generic shape');
  }
}

// Define the Circle subclass that overrides the draw method
class Circle extends Shape {
  draw() {
      console.log('Drawing a circle');
  }
}

// Define the Rectangle subclass that overrides the draw method
class Rectangle extends Shape {
  draw() {
      console.log('Drawing a rectangle');
  }
}

// Create instances of Circle and Rectangle
const circle = new Circle();
const rectangle = new Rectangle();

// Demonstrate polymorphism by calling the draw method on each instance
circle.draw(); // Output: Drawing a circle
rectangle.draw(); // Output: Drawing a rectangle