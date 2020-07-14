//Fetching Data Sync which leads to more loading time and poor performance
let fs = require("fs");
console.log("Before");
let data = fs.readFileSync("f1.txt");//Here we need to wait for the data which is coming externally(f1.txt) and it require more time. This leads to make the others to wait.
console.log("Data: " + data);
console.log("After");