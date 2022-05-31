const arr = [4, 8, 1, 3, 5, 6, 4, 3, 9];

// const filteredArr = arr.filter(function (value) {
//   return value % 2 == 1;
// });
// console.log(filteredArr);

function mYFilter(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(
  mYFilter(arr, function (value) {
    return value % 2 == 0;
  })
);
console.log(
  mYFilter(arr, function (value) {
    return value % 2 == 1;
  })
);
console.log(
  mYFilter(arr, function (value) {
    return value > 4;
  })
);
