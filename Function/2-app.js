// Function Composition
function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function times(a, b) {
  return a * b;
}
const a = 10;
const b = 20;

const r = Math.abs(times(sum(a, b), sub(a, b)));
console.log(r);


// Function defination
//function invoking
//Function paramiters/ arguments
// return result from function