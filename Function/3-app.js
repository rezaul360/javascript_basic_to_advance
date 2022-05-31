// Function is a fisrt class citizen
// We can treat function as value
// 10, "test" -> Function

/**
 * Benefits
 * - we can store function in a variable
 * - we can store function inside an object/ array
 * - we can pass function as an arguments
 * - we can also return a function from another function
 */

// Prove --> Function is a value
function testFunctin() {
  console.log("I am a test function");
}

const fn = testFunctin;
console.log(fn);
fn();

const ar = [fn, testFunctin];
const ob = {
  fn: testFunctin,
};

function returnFn() {
  return testFunctin;
}
