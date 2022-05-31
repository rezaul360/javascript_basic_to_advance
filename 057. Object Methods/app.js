//  Object Methods in Javascript

var obj = {
  x: 40,
  y: 60,
  z: 75,
};

// console.log(Object.keys(obj)); // Show object Property like array
// console.log(Object.values(obj)); // Show object values like array
// console.log(Object.entries(obj)); // Show object like Multy Dimensional array

var obj2 = Object.assign({}, obj); // Clone Object
obj2.x = 100;
console.log(obj);
console.log(obj2);
