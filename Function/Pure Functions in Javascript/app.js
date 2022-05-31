//Pure Function

function sqr(n) {
  return n * n;
}
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));

//Not a Pure Function
var n = 10;

function change() {
  n = 100;
}
change();
console.log(n);

//Not a Pure Function
var point = {
  x: 45,
  y: 30,
};
function printPoint(point) {
  point.x = 100;
  point.y = 200;
  console.log(point);
}
printPoint(point);

console.log(point);
