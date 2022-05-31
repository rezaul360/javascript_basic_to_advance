const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce(function (prev, curr) {
//   return prev + curr;
// }, 100);
// const max = arr.reduce(function (prev, curr) {
//   return Math.max(prev, curr);
// }, 0);

// console.log(sum);
// console.log(max);

function myReduce(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}
const sum = myReduce(
  arr,
  function (prev, curr) {
    return prev + curr;
  },
  0
);
const max = myReduce(
  arr,
  function (prev, curr) {
    return Math.max(prev, curr);
  },
  0
);
const mini = myReduce(
  arr,
  function (prev, curr) {
    return Math.min(prev, curr);
  },
  arr[0]
);
console.log(sum, max, mini);
