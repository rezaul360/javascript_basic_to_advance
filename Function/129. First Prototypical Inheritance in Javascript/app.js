function Shape() {}
Shape.prototype = {
  common: function () {
    console.log("I Am Common Method");
  },
};

function Square(width) {
  this.width = width;
}
Square.prototype = Object.create(Shape.prototype);

Square.prototype.draw = function () {
  console.log("Drawing");
};

const shape = new Shape();
const sqr = new Square(45);

function Circle() {}
Circle.prototype = Object.create(Shape.prototype);
const crc = new Circle();
