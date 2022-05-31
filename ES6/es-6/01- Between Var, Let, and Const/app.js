// // Differences Between Var, Let, and Const

// var sum = 100;
// sum = 100 + 50;

// console.log(sum); // Result = 150
// //--------------------------------------

// var sum = 200;
// sum = 30 + 50;

// console.log(sum); // Result = 80
// //--------------------------------------

// let sum2 = 150;
// sum2 = 100;

// console.log(sum2); // Result = 100
// //----------------------------------
// let sum3 = 50;
// let sum3 = 100;
// console.log(sum3); // Result = SyntaxError:
// //-------------------------------------------
// const sum = 30;
// // sum = 60;
// // console.log(sum);//TypeError: Assignment to constant variable.

//---------------------------------------------
const sum = 30;
const sum = 60;
console.log(sum); //SyntaxError: Identifier 'sum' has already been declared
