
var evenOrOdd = function (num) {
    if (num%2==0) {
        return "EVEN";
    } else {
        return "ODD";
    }
}

var result = evenOrOdd(45);
console.log(`Is the number 45 even or odd :${result}`);

var result = evenOrOdd(70);
console.log(`Is the number 70 even or odd :${result}`);

var result = evenOrOdd(67);
console.log(`Is the number 67 even or odd :${result}`);

var result = evenOrOdd(98);
console.log(`Is the number 98 even or odd :${result}`);

console.log("========================================================");


var voteEligibility = function(age){
    if (age>=18) {
        return "Eligible "
        
    } else {
        return"Sorry, try again next time"
    }
}
var result = voteEligibility(18);
console.log(`Is this person eligible to vote age 18 : ${result}`);

var result = voteEligibility(20);
console.log(`Is this person eligible to vote age 20 : ${result}`);

var result = voteEligibility(14);
console.log(`Is this person eligible to vote age 14 : ${result}`);

var result = voteEligibility(40);
console.log(`Is this person eligible to vote age 40 : ${result}`);

console.log("==========Check the given string contains more than 10 characters=========");


function javascript(str) {

   if (str.length >=10) {
    console.log(`Yes, the string Javascript-ES6 contains more than 10 characters`);
    
   } else {
    console.log(`No, the string does not exceed 10 characters`);
    
   }
   
}

javascript("javascript-ES6");

console.log("=============================================================");


function java(str) {
    if (str.startsWith("Java")) {
        console.log(`Yes, the string starts with Java `);
        
        
    } else {
        console.log(`No, the does not starts with Java`);
        
        
    }
    
}
java("Javascript Languague");
java("Programming Lanaguage")