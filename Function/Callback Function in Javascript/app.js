// function simple(a, b) {
//   var c = a + b;
//   var d = a - b;
//   var result = sum(c, d);
//   return result;
// }

// function sum(a, b) {
//   return a + b;
// }
// console.log(simple(5, 8));
//----------------------------
function simple(a, b, cb) {
  var c = a + b;
  var d = a - b;
  var result = cb(c, d);
  return result;
}

function sum(a, b) {
  return a + b;
}
var result = simple(5, 8, sum);
console.log(result);

var result2 = simple(5, 8, function (c, d) {
  return c - d;
});
console.log(result2);

var result3 = simple(5, 8, function (c, d) {
  return c * d;
});
console.log(result3);
