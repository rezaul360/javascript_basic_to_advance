// First Class Function

function add(a, b) {
  return a + b;
}

// 1. A Function Can Be stored in a variable
var sum = add;

console.log(sum(4, 5));
//console.log(typeof sum);

// 2. A Function can be stored in an array
var arr = [];
arr.push(sum);
console.log(arr);
console.log(arr[0](5, 3));

// 3. A Function can be stored in an Object

var obj = {
  sum: add,
};
console.log(obj);
console.log(obj.sum(5, 5));

// 4. We can create function as need

setTimeout(function () {
  console.log("I am a Function");
}, 5000);
