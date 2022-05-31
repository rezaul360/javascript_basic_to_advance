//Accessing Object Properties in Javascript

var obj = {
  x: 10,
  y: 20,
  z: 15,
};

// //---.dot notetion
// console.log(obj.x);
// console.log(obj.y);
// console.log(obj.y + obj.z);
// console.log("____________________");
// //-------Array Notetion---
// console.log(obj["x"]);
// console.log(obj["y"]);

// var show = "z";

// console.log(obj[show]);

obj.y = 100; // Update value
obj.a = 150; // assign new property and value
//console.log(obj);
//console.log(obj.b); // Undefined

obj["z"] = 250;
//console.log(obj);
var prop = ["z"];
obj[prop] = 500;
console.log(obj);
