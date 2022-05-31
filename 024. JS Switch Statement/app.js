var date = new Date();
var today = date.getDay();

switch (today) {
  case 0:
    console.log("Today Is Sunday");
    break;
  case 1:
    console.log("Today Is Monday");
    break;
  case 2:
    console.log("Today Is Tuesday");
    break;
  case 3:
    console.log("Today Is Wednesday");
    break;
  case 4:
    console.log("Today Is Thursday");
    break;
  case 5:
    console.log("Today Is Fryday");
    break;
  case 6:
    console.log("Today Is Saturday");
    break;
  default:
    console.log("Not A vaillid number");
}
