

function squareOfWordLength(givenString) {
    console.log("Given string is : ", givenString);
    var givenStringLength = givenString.length;
     var result = givenStringLength * givenStringLength
 return result;     
}
 var returnValue = squareOfWordLength("Javascript");
 
 console.log("Its lenght square is : ",returnValue);

 console.log("===========================================");
 
 var returnValue = squareOfWordLength("Google Chrome");
 console.log("Its lenght square is : ",returnValue);

 console.log("================================================");
 
 var returnValue = squareOfWordLength("Web Developer Smart");
 console.log("Its lenght square is : ",returnValue);


 console.log("=========================================================");
 
 function string(givenString) {
    console.log("Given string is : ",givenString);
   var stringLenght = givenString.length;
   console.log("Total lenght of string : ",stringLenght);
   var Words = givenString.split(" ");
   
   var totalwords = Words.length;
   console.log("Total words in given string : ",Words);
   
   var stringDivision = stringLenght/totalwords
   console.log("Total length is divided by total words : ",stringDivision)

   var stringmultiply = stringLenght*totalwords
   console.log("Total lenght is multiplied by total words : ",stringmultiply);
   
   
 }
string("I am Angular Developer");
 