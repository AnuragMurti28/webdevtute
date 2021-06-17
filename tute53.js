console.log("This is tutorial 53");

// function for greeting

function greet(name, greetText = "Greetings from javascript") {
    console.log(greetText + " " + name);
    console.log(name + " is a good boy.");
    console.log("\n");
} //function with default text. 

function sum(a, b, c) {
    let d = a + b + c;
    return d;
    console.log("unreachable line"); //This line will never execute because functions exits the interpreter or compiler after return.
}

let a = 10;
let b = 20;
let c = 30;
let returnSum = sum(a, b, c);
let name1 = "Anurag";
let name2 = "Harrry";
let name3 = "Shubham";
let name4 = "Akshay";
let name5 = "Sagar";
let greetText = "Good Morning";
console.log("Function call and input start");
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);
greet(name5); //here greetText not passed so function will takes default greeting text.
console.log("\n");
console.log("sum of a+b+c : " + (returnSum));