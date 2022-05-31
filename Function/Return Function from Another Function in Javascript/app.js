// function greet(msg) {
//   function greetings(name) {
//     return msg + ", " + name + "!";
//   }
//   return greetings;
// }

// var gm = greet("Good Mornig");
// var gn = greet("Good Night");
// var af = greet("good Afternoon");
// //-----------------------------
// console.log(gm("Rezaul Karim"));
// console.log(gn("Ripon Mahomud"));
// console.log(af("Rubaiya Akter"));

function base(b) {
  return function (n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}

var base10 = base(10);
console.log(base10(2));
var base5 = base(5);
console.log(base5(2));
console.log(base5(3));
