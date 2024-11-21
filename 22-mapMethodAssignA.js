

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

const newArray = arrayNumbers.map( (element) => {

    return element + 10;

});

console.log(`Given array ${arrayNumbers}`)
console.log("=======Adding 10 to the each array element==========");
console.log(newArray);

console.log("=========Cube of each element in array===================");
const cubeOfArray = arrayNumbers.map( (element) => {
    return element*element*element
})
console.log(cubeOfArray);

console.log("=========Adding index value to its each corresponding element====================");
const arrayNew = arrayNumbers.map( (element,index) =>{
    return element+index
})
console.log(arrayNew);
