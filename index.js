//console.log("gfgfgf");
//window.alert("I love pizza");

/*let firstName = "seha";
let age = 21;
let student = false;

console.log("hello", firstName);
console.log("you are", age, "years old");
console.log(student);

document.getElementById("p1").innerHTML = "Hello" + firstName;
document.getElementById("p1").innerHTML = "You are" + age + "years old"; */

/*
let userName;

document.getElementById("myButton").onclick = function () {
  userName = document.getElementById("myText").value;
  console.log(userName);
  document.getElementById("myLabel").innerHTML = "hello " + userName;
}; */

/*const pi = 3.144159;
let radius;
let circumference;

radius = window.prompt("enter the radius of a circle");
radius = Number(radius);

pi = 420.69;

circumference = 2 * pi * radius;

console.log("The circumference is:", circumference); */

/*//Math

//let x = 3.14;
//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//console.log(x);*/

// let a;
// let b;
// let c;

// a = window.prompt("enter side A");
// a = Number(a);

// b = window.prompt("enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("Side C:", c);

// document.getElementById("submitButton").onclick = function () {
//   a = document.getElementById("aTextBox").value;
//   a = Number(a);
//   b = document.getElementById("bTextBox").value;
//   b = Number(b);
//   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//   document.getElementById("cLabel").innerHTML = "SideC: " + c;
// };

// let count = 0;
// document.getElementById("decButton").onclick = function () {
//   count -= 1;
//   document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("resetButton").onclick = function () {
//   count = 0;
//   document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("incButton").onclick = function () {
//   count += 1;
//   document.getElementById("countLabel").innerHTML = count;
// };

// let x = Math.floor(Math.random() * 6) + 1;
// let y = Math.floor(Math.random() * 6) + 1;
// let z = Math.floor(Math.random() * 6) + 1;
// console.log(x);
// console.log(y);
// console.log(z);

// let x;
// let y;
// let z;

// document.getElementById("rollButton").onclick = function () {
//   x = Math.floor(Math.random() * 6) + 1;
//   y = Math.floor(Math.random() * 6) + 1;
//   z = Math.floor(Math.random() * 6) + 1;

//   document.getElementById("xlabel").innerHTML = x;
//   document.getElementById("ylabel").innerHTML = y;
//   document.getElementById("zlabel").innerHTML = z;
// };

// let userName = "seha Dalay";
// console.log(userName.length);
// //let letter = userName.charAt(0);
// //letter = letter.toUpperCase();

// let letter = userName.charAt(0).toUpperCase().trim();
// console.log(letter);

// let age = 21;
// if (age >= 18) {
//   console.log("You are an adult");
// } else if (age < 0) {
//   console.log("You haven't been born yet!");
// } else if (age > 65) {
//   console.log(" ");
// } else {
//   console.log("Ypu are a child.");
// }

// document.getElementById("myButton").onclick = function () {
//   const myCheckBox = document.getElementById("myCheckBox");
//   const visaBtn = document.getElementById("visaBtn");
//   const masterBtn = document.getElementById("masterBtn");
//   const paypalBtn = document.getElementById("paypalBtn");
//   if (myCheckBox.checked) {
//     console.log("Ypu are subscribed");
//   } else {
//     console.log("You are not subscribed");
//   }

//   if (visaBtn.checked) {
//     console.log("You are paying with Visa Card");
//   } else if (masterBtn.checked) {
//     console.log("You are paying with MASter Card");
//   } else if (paypalBtn.checked) {
//     console.log("You are paying with Paypal Card");
//   } else {
//     console.log("You  must select a payment type!");
//   }
// };

// let grade = "pp";
// switch (grade) {
//   case "A":
//     console.log("You did great");
//     break;
//   case "B":
//     console.log("You did good");
//     break;
//   case "C":
//     console.log("You did ok");
//     break;
//   case "C":
//     console.log("You did ok");
//     break;
//   case "D":
//     console.log("You passed barely");
//     break;
//   case "F":
//     console.log("You failed");
//     break;
//   default:
//     console.log(grade, "is not a letter grade");
// }

// let grade = "50";
// switch (true) {
//   case grade >= 90:
//     console.log("You did great");
//     break;
//   case grade >= 80:
//     console.log("You did good");
//     break;
//   case grade >= 70:
//     console.log("You did ok");
//     break;
//   case grade >= 60:
//     console.log("You did ok");
//     break;
//   case grade >= 50:
//     console.log("You passed barely");
//     break;
//   case grade < 50:
//     console.log("You failed");
//     break;
// }

// let temp = 24;
// if (temp > 0 && temp < 30) {
//   console.log("The weather is great!");
// } else {
//   console.log("The weather is bad!");
// }

// let temp = 50;
// if (temp > 0 || temp >= 30) {
//   console.log("The weather is great!");
// } else {
//   console.log("The weather is bad!");
// }

// let temp = 15;
// let sunny = true;
// if (!(temp > 0)) {
//   console.log("it's cold outside");
// } else {
//   console.log("it's warm outside");
// }
// if (!sunny) {
//   console.log("it's cloudy outside");
// } else {
//   console.log("it's sunny outside");
// }

// let userName = "";
// while (userName == "" || userName == null) {
//   userName = window.prompt("Enter your name!");
// }
// console.log("Hello", userName);

// ------------>> do while loop do something first then check
// the condition. then do something if the condition is true!

// let userName = "";
// do {
//   userName = window.prompt("Enter your name!");
// } while (userName == "");

// console.log("Hello", userName);

// ---------------->>> For lopp  repeats some code for a certain
// amount of Times.

// for (let i = 10; i > 0; i -= 2) {
//   console.log(i);
// }
// console.log("God bless you!");

// for (let i = 1; i <= 20; i += 1) {
//   if (i == 13) {
//     break;
//   }
//   console.log(i);
// }
// for (let i = 1; i <= 20; i += 1) {
//   if (i == 13) {
//     continue;
//   }
//   console.log(i);
// }

//----------> nested loop is a loop is inside of another loop
// let symbol = window.prompt("enter a symnol to use");
// let rows = window.prompt("enter # of rows");
// let columns = window.prompt("enter # of columns");

// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= columns; j++) {
//     document.getElementById("myRectangle").innerHTML += symbol;
//   }
//   document.getElementById("myRectangle").innerHTML += "<br>";
// }

//----------->function is defining a code once and use it many times.
//to perform some code, call the function name!

startParty();

function startParty() {
  let userName = "Seha";
  let age = "28";
  happyBirthday(userName, age);
}
function happyBirthday(userName, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear!", userName);
  console.log("Happy birthday to you!");
  console.log("You are", age, "years old!");
}
