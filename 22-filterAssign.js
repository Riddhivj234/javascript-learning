


const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]
console.log(`Given array ${arrayNumbers}`);
const arrayN = arrayNumbers.filter( (element) => {
    return element>50;
} );
console.log("==========Numbers greater than 50============");
console.log(arrayN);

console.log("===========All even numbers in the array============");
const newArray = arrayNumbers.filter( (element) =>{
    return element%2==0
})
console.log(newArray);

console.log("=========All Odd numbers in the array======================");
const oddNumbers = arrayNumbers.filter( (element) =>{
    return element%2
})
console.log(oddNumbers);

console.log("=========All numbers which are multiple of 5  in the array======================");
const multipleArray = arrayNumbers.filter( (element) =>{
    return element%5==0
})
console.log(multipleArray);

console.log("=========All numbers which are between 20 to 50 in the array======================");
const arrayNew = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]
const arrayNum = arrayNew.filter( (element) => {
    return element>20 & element<50;
} );
console.log(arrayNum);
