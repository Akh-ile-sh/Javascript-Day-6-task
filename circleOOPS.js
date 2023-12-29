class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    console.log(`the radius of the circle is ${this.radius}`);
  }

  setRadius(radius) {
    this.radius = radius;
  }

  setColor(color) {
    this.color = color;
  }

  getArea() {
    console.log(
      `the area of the circle is ${this.radius * this.radius * 3.141}`
    );
  }

  getCircumference() {
    console.log(`the circumference is ${this.radius * 2 * 3.141}`);
  }
}

const circle1 = new Circle(2, "red");
console.log(circle1);
circle1.getRadius();
circle1.setRadius(4);
console.log(circle1.radius);
console.log(circle1.color);
circle1.setColor("yellow");
console.log(circle1.color);
circle1.getArea();
circle1.getCircumference();
