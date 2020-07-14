//Here we try async technique to fetch the data which don't let other tasks to wait for him and this async task will execute at the last.

// Node module
let fs = require("fs");
console.log("Before");
async function fileReader() {
    console.log("Inside fileReader");
    let fReadPromise = fs.promises.readFile("f1.txt");
    
    let data = await fReadPromise;
    console.log(""+data);
    console.log("After data");
}
fileReader();

console.log("After");
console.log("Doing something Else")
// while(true){}