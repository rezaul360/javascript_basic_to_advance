var persons = [
  {
    name: "A",
    age: 24,
  },
  {
    name: "B",
    age: 19,
  },
  {
    name: "C",
    age: 26,
  },
  {
    name: "D",
    age: 21,
  },
];

var arr = [4, 8, 1, -8, 6, 7, 9, 0, -2, 4, 3, 5, 6, 8, 2, 1, 7, -4];
var arr2 = [4, 8, 1, 6, 7, 9, 0, 4, 3, 5, 6, 8, 2, 1, 7];

// arr.sort();
// console.log(arr);
// persons.sort();
// console.log(persons);

// arr.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// console.log(arr);

// arr.sort(function (a, b) {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// console.log(arr);

// persons.sort(function (a, b) {
//   if (a.age > b.age) {
//     return 1;
//   } else if (a.age < b.age) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// console.log(persons);

// persons.sort(function (a, b) {
//   if (a.name > b.name) {
//     return 1;
//   } else if (a.name < b.name) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// console.log(persons);

// var res1 = arr2.every(function (value) {
//   return value % 2 == 0;
// });

// console.log(res1);

// var res2 = arr2.every(function (value) {
//   return value >= 0;
// });

// console.log(res2);

var res3 = arr2.some(function (value) {
  return value % 2 == 1;
});
console.log(res3);
