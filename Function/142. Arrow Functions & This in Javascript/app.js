// let obj = {
//   name: "Rezaul karim",
//   print: function () {
//     setTimeout(
//       function () {
//         console.log(`Hello, ${this.name}`);
//       }.bind(this),
//       1000
//     );
//   },
// };
// obj.print();
let obj = {
  name: "Rezaul karim",
  print: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);
    }, 1000);
  },
};
obj.print();
