//-----Asynchronous-----
function sayMyName(name) {
  let result;
  setTimeout(() => {
    result = name;
    console.log(result); // exicuted
  }, 3000);
  return result; // Is Result = undefined
}

let output = sayMyName("Rezaul Karim");
console.log(output);
