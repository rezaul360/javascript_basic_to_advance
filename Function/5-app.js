const greetFn = new Function(
  "name",
  "email",
  `
const fName = name.split(" ")[0];
console.log("Hello,", fName, "is that your email?", email);
console.log("Yeah, this is mine");
return fName;
`
);
console.log(typeof greetFn);
//console.log(greetFn.toString());
const fName = greetFn("Rezaul Karim", "rezaulkarim@gmail.com");
console.log("first name", fName);
//------------------------------------------------

const operations = [
  {
    args: [10, 20],
    params: ["a", "b"],
    body: "console.log('a+b', a+b)",
  },
  {
    args: [10, 20],
    params: ["a", "b"],
    body: "console.log('a-b', a-b)",
  },
  {
    args: [10, 20],
    params: ["a", "b"],
    body: "console.log('a*b', a*b)",
  },
  {
    args: [10, 20],
    params: ["a", "b"],
    body: "console.log('a*b', a*b-20)",
  },
];

operations.forEach((operation) => {
  const fn = new Function(...operation.params, operation.body);
  fn(...operation.args);
});
