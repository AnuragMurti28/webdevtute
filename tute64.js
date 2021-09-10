const fs = require('fs');
let text = fs.readFileSync("./textFiles/tute64.txt", "utf-8");
console.log("The content of text file tute64.txt is :");
console.log(text);
text = text.replace("created", "made");

console.log("creating a new file anurag.txt....");
fs.writeFileSync("anurag.txt", text);
let text2 = fs.readFileSync("anurag.txt", "utf-8");
console.log(text2);