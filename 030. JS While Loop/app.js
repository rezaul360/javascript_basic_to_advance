// var i = 0;
// while (i < 10) {
//   console.log("Rezaul Karim");
//   i++;
// }

var isRunning = true;
while (isRunning) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand == 9) {
    console.log("This Is A While Loop");
    isRunning = false;
  } else {
    console.log("You Have Got " + rand);
  }
}
