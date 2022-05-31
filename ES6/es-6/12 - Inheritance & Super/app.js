// Inheritance & Super
class Parens {
  grndFather() {
    console.log("This is my grnd father property");
  }
  father() {
    console.log("This is my father property");
  }
}

//Method 1
// class Me extends Parens {
//   MyProparty() {
//     super.grndFather();
//     super.father();
//   }
// }
// const result = new Me();
// result.MyProparty();
//--------------------

// Method 2
class Me extends Parens {}
const result = new Me();
result.grndFather();
result.father();
