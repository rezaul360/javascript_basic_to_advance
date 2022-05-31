//ES6 Modules

import { NewMessage } from "./module.js";

const person = NewMessage();
const { name, age } = person;

document.querySelector(
  ".module"
).innerText = `My name is ${name} and I am ${age} year Old`;
