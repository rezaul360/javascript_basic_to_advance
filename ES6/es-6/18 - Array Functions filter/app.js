// Array Functions filter()

const arr = [1, 5, 6, 7, 9, 8, 2, 11, 57, 48, 36, 24, 51, 34, 26, 96, 75];
const arr2 = arr.filter(myFunc);

function myFunc(x) {
  return x > 10;
}
console.log(arr2);
