let arr = [10, 22, 35];

// function* generate() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

function* generate(collection) {
  for (let i = 0; i < collection.length; i++) {
    yield collection[i];
  }
}

let it = generate(arr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
