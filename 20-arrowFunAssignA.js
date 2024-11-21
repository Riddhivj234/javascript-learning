

console.log("=========Arrow function with no argument and no return value======================");

let greet = () => {
     console.log("Good Morning, Today is Tuesday");
     
}
greet()

console.log("========Arrow function with argument and no return value=============");

let multiplication = (n1, n2, n3 = 1) => {
  let multiply = (n1*n2*n3)
    console.log(`multiplication of ${n1}, ${n2} and ${n3} : ${multiply}`);
    
}
multiplication(5,5,2);
multiplication(10, 4);

console.log("========Arrow function with argument and return type==================");
let sum = (n1, n2, n3, n4, n5) => {
    let result = n1+n2+n3+n4+n5 ;
    return result
}
const summation = sum(100, 100, 200, 349, 756)
console.log("Summation of 5 numbers :",summation)
const learningFeature = sum("I am", " learning", " ES6", " features", " in depth.")
console.log(learningFeature);
