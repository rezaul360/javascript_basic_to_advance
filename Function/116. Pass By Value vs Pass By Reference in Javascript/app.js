// Pass By Value

// const n = 10;

// function change(n) {
//   n = n + 100;
//   console.log(n);
// }
// change(n);
// console.log(n);
//----------------------------
// Pass By Reference
const obj = {
  a: 20,
  b: 10,
};

function changeMe(obj) {
  obj.a = 100;
  obj.b = 50;
  console.log(obj.a + obj.b);
}
changeMe(obj);
console.log(obj.a + obj.b);
