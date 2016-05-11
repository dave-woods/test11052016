/*
This is a test file to make sure that git works as expected
on this machine in the LG12 lab at TCD
*/

var fs = require("fs");

fs.readFile("README.md", function(err, data){
    if (err) throw err;
    console.log(data.toString().split("").reverse().join("");
});
