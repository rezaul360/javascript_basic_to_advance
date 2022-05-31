var name = "Ripon mahomud";

var fullName = name || "Rezaul Karim";
console.log(fullName); // result = Ripon mahomud

var name = "";
var fullName = name || "Rezaul Karim";
console.log(fullName); // result = Rezaul Karim

var isOk = true;
isOk && console.log("Everything Is Ok"); //result = Everything Is Ok
