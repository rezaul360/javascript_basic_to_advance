//JS For Loop

// for (let i = 0; i < 10; i++) {
//   console.log("Rezaul karim");result= count from 0
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i + 1, "Rezaul karim"); // result= count from 1
// }

//--------------------------------
// const names = [
//   "Rezaul Karim",
//   "Ripon Mahomud",
//   "Rubaiya Akter",
//   "Fency Banu",
//   "Aleya Beoya",
// ];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);// result all name
// }

// for (let i = 1; i < 100; i++) {
//   if (i % 2 == 1) {
//     console.log(i);//result = Negative value
//   }
// }

// for (let i = 1; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);//result = Positive value
//   }
// }

let sum = 0;
for (let i = 1; i <= 10; i++) {
  console.log(sum + "+" + i + "=" + (sum + i));
  sum += i;
}
console.log("Result Is " + sum);
