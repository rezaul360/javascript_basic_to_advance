const Reza = Function(
  "width",
  "height",
  `console.log("My Height is", height);console.log("My Width is", width)`
);

console.log(new Reza(50, 150));
