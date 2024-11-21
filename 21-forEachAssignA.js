

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
console.log(`Given array : ${arrayNumbers}`);
arrayNumbers.forEach((currentValue, index)=>{
     console.log(`Element : ${currentValue} and its index number : ${index}`); // 20  1  [10, 20, 40, 30, 10, 60]  
});

console.log("========Finding the positive numbers=============");
arrayNumbers.forEach( (element) => {
    if (element>=1) {
        console.log(element);   
    }
} );


console.log("========Finding the negative numbers=============");
const newArray = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601]
newArray.forEach( (element) => {
    if (element<1) {
        console.log(element);   
    }
} );

console.log("=========Finding the Even Numbers===================");
newArray.forEach( (element) => {
    if (element%2==0) {
        console.log(element);   
    }
} );

console.log("============Sum of all elements=======================");
const summation = arrayNumbers.reduce( (runningTotal, element) => {
     return runningTotal + element;
}, 0);
console.log(summation);

console.log("=============Even Indexed Array value=====================");
arrayNumbers.forEach( (element,index) => {
    if (element,index%2==0) {
        console.log(`index : ${index} and value : ${element}`);   
    }
} );

