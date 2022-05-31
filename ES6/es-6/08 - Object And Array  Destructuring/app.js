//Array Destructuring
let array = [10, 20, 30, 40, 50];
let [a, b, c, ...all] = array;

//console.log(a, b, c, all);
//console.log(a, b, c, ...all);

//--------------------------------

//Object Destructuring
let obj = {
  name: "Rezaul Karim",
  number: "01770837295",
  age: 33,
  status: "Object Destructuring",
};

let { name, number, age } = obj;
let final = `I am ${name} My Number ${number} And My Age ${age}`;
console.log(final);
