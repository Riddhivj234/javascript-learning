

let fruitsSeasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruitsSeasonal);

let firstFruitseasonal = fruitsSeasonal[0];
console.log(`First eleement : ${firstFruitseasonal}`);

let lastFruitSeasonal = fruitsSeasonal[fruitsSeasonal.length-1];
console.log(`Last element : ${lastFruitSeasonal}`);
 
let addFruitseasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
addFruitseasonal.unshift("Papaya")
console.log("Adding Papaya element in existing array : ",addFruitseasonal);

let removingFruit = ["Papaya","Banana","Orange","Apple","Mango","Water Melon"];
removingFruit.splice(4,1)
console.log("Removing Mango element from array : ",removingFruit);

let addElement = ["papaya","Banana","Orange","Apple","Mango","Water Melon"];
addElement.push("Pineapple");
console.log("Adding Pineapple element in the array : ",addElement);

let insertElement = ["Papaya","Banana","Orange","Apple","Mango","Water Melon"];
insertElement.splice(5,0,"Dragon Fruit")
console.log("Insert Dragon Fruit in arrya : ",insertElement);

let replaceElement =  ["Papaya","Banana","Orange","Apple","Mango","Water Melon"];
replaceElement.splice(2,1,"Kiwi");
console.log("Repalce element orange with Kiwi : ",replaceElement);

let sliceSeasonalfruit =  ["Papaya","Banana","Orange","Apple","Mango","Water Melon"];
const sliceElements = sliceSeasonalfruit.slice(1,4);
console.log("Log the Elemnt 1 to 4 : ",sliceElements);

let seasonalFruitsArray =  ["Papaya","Banana","Orange","Apple","Mango","Water Melon"];
const sliceElements2 = seasonalFruitsArray.slice(seasonalFruitsArray.length-3)
console.log("Last 3 elements log on console  : ",sliceElements2);







