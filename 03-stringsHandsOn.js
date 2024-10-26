
function stringHandsOn(){
    var str = "   Hey you are doing good, keep it up     ";
    console.log(`Given string is: ${str}`);
    console.log(`Length of the string:  ${str.length}`);
    var result = str.trim();
    console.log(`After trimming string is: ${result} and its length: ${str.length}`);
    console.log(`First character after trimming: ${result.charAt(0) } and last character after trimming: ${result.charAt(result.length-1)}`);
   var resultValue = result.split(" ");
   console.log(`Total words: ${resultValue.length}`);
   var abc = result.indexOf("good");
  console.log(`Index of good: ${abc}`);
  var xyz = result.slice("22");
  console.log(`Substring starting form index 22: ${xyz}`);
  var stringEndsWithUp = result.endsWith("up")
  console.log(`Is string ends with word 'up': ${stringEndsWithUp}`)
  var resultStartsWithGood = result.startsWith("Hey");
  console.log(`Is string starts with word 'Hey': ${resultStartsWithGood}`);
  
  
  
   
    
    
    
    
    
    

    


}
stringHandsOn();

