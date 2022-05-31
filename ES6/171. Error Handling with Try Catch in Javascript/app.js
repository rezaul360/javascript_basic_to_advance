function makeWords(text) {
  // let str = text.trim();
  // let words = str.split();
  // return words;
  try {
    let str = text.trim();
    let words = str.split(" ");
    return words;
  } catch (e) {
    console.log(e.message);
    console.log("Please Provide Valid Text");
  }
}

let words = makeWords(85);
console.log(words);
