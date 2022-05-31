//Rest Parameters

// function rest(...name) {
//   console.log(name);
// }
// rest(1, 2, 3, 4, 5, 6); //Result = [ 1, 2, 3, 4, 5, 6 ]
//-------------------------------

// function rest(a, b, c, ...name) {
//   console.log(name);
// }
// rest(1, 2, 3, 4, 5, 6); //Result = [ 4, 5, 6 ]
// //-------------------------------

function rest(a, b, c, ...name) {
  console.log(a, b, c, ...name);
}
rest(1, 2, 3, 4, 5, 6); //Result = 1 2 3 4 5 6
