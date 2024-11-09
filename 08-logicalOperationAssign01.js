

let array = [10,20,45,30,77,60];
console.log(array);
console.log("Even number from the array");
let countEvenNum = 0;
for (const char of array){
    if (char%2==0) {
      countEvenNum = countEvenNum+1  
    }
}
console.log(countEvenNum);

console.log("==========================");

const myLove = "I Love Only Javascript";
const vowels = "aeiou";
let countVowels = 0;
for (const char of myLove) {
    if (vowels.includes(char.toLowerCase())) {
        countVowels = countVowels + 1;
    }
}
console.log(`vowels in the array : ${countVowels}`);

console.log("=====================================");

const sentence = "Javascript LANGUAGUE";
let countAChar = 0;
for (const char of sentence) {
  if (char.toUpperCase()== "A") {
    countAChar = countAChar + 1
  }
    
    
} 
console.log(`Count of A character in array : ${countAChar}`);


    

    


