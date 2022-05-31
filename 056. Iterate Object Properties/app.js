// Comparing Two Object

var obj = {
  x: 40,
  y: 60,
  z: 75,
};

// console.log("x" in obj); // true
// console.log("a" in obj); // false

for (i in obj) {
  console.log(i);
  console.log(i + ": " + obj[i]);
}
