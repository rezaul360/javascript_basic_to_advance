// Es6 Map Function

//step 1
const arr = [5, 10, 8, 3, 6];
// const arr2 = [];

// arr.forEach(myFunc);

// function myFunc(value) {
//   arr2.push(value * value);
// }
// console.log(arr2);

//===========================
//step 2

const arr2 = arr.map(myFunc);

function myFunc(x) {
  return x * x;
}
console.log(arr2);
