/* Name: Human Lifecycle
 * param human name
 *"human_name", awake from sleep
 *"human_name", go to wash room
 *"human_name", take breakfast
 *"human_name", go to school/college/office
 *"human_name", take dinner
 *"human_name", go to sleepAkib
 */

//Call Human_Lifecycle for "Rezaul Karim"
//Call Human_Lifecycle for "Ripon Mahomud"
//Call Human_Lifecycle for "Rubaiya Akter"
//Call Human_Lifecycle for "Fency Banu"

//function: Sleep
//param: name
//defination: how to sleep

//function: Eat
//param: name
//param: time
//defination: how to Eat

//function: Walk
//param: name
//param: destination
//defination: how to Walk

//function: Study
//param: name
//defination: how to Study

//function Job_Holder_Lifecycle
//function Students_Lifecycle
//function Remote_Workers_Lifecycle
//-----------------------------------------
// function testFunction(a, b) {
//   const result = a + b + Math.max(a, b);
//   console.log(result);
//   return 100;
// }
// testFunction(test(), 40);
// //console.log(c);

// function test() {
//   const aaa = testFunction(10, 20);
//   const final = aaa + 10;
//   console.log(final);
//   return final;
// }
//-------------------------------------------------
function sleep(name) {
  console.log(`${name} is sleeping`);
}

function awake(name) {
  console.log(`${name} is awake`);
}

function eat(name, time) {
  console.log(`${name} is taking ${time}`);
}

function walk(name, destination) {
  console.log(`${name} is to ${destination}`);
}

function study(name) {
  console.log(`${name} is studing`);
}

function work(name) {
  console.log(`${name} is working`);
}

function jobHolderLifeCycle(name) {
  awake(name);
  eat(name, "breakfast");
  walk(name, "office");
  eat(name, "Lunch");
  walk(name, "Home");
  eat(name, "dinner");
  sleep(name);
}

jobHolderLifeCycle("Rezaul Karim");
console.log("______________________");
jobHolderLifeCycle("Ripon Mahomud");
console.log("______________________");
jobHolderLifeCycle("Rubaiya Akter");
console.log("______________________");
jobHolderLifeCycle("Fency Banu");
console.log("______________________");
//------------------------------------------
function studentsLifeCycle(name) {
  awake(name);
  eat(name, "Breakfast");
  study(name);
}

studentsLifeCycle("Rezaul Karim");
console.log("______________________");
