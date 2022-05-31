// This is anonymous Function- ES5

// const anonymousFunc = function (x, y) {
//   x = 10;
//   y = 20;
//   y += x;
//   console.log(y);
// };
// anonymousFunc();

//-------------------
//ES6-> This is Arrow Function-1

// const aroow = (x, y) => {
//   y += x;
//   console.log(y);
// };
// aroow(10, 20);

//ES6-> This is Arrow Function-2 = Single Line
const arow2 = (x, y) => (y += x);
console.log(arow2(10, 20));
