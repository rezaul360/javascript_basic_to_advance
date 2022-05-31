// Search data
let arr = [1, 2, 3, 5, 6, 8, 9, 10, 13, 14, 15, 19, 20];
var find = 2;
var isfound = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == find) {
    console.log("Data found at index " + i);
    isfound = true;
    break;
  }
}
if (!isfound) {
  console.log("Data not found");
}
