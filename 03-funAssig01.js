
function sayHello(){
    console.log("Hello");
    console.log("=========================");
    
}
sayHello();

function greet(){
    console.log("Good Morning");
    console.log("====================================");
    
}
greet();

function personalDetails(firstName, lastName, collegName){
    console.log("First Name: ",firstName);
    console.log("Last Name: ",lastName);
    console.log("College: ",collegName);
    var result = firstName+lastName+collegName;
    console.log("=================================================");
    
    
    
}
   personalDetails("Riddhi","Joshi","Kesharbai Lahoti Mahavidyalaya");


   function addThreeValues(n1, n2, n3){
    console.log("Given Numbers are: ", n1, n2, n3);
    var result = n1+n2+n3;

    return result
   }

   var returnValue = addThreeValues(10, 23, 600);
   console.log("Addition is: ",returnValue);
   console.log("=======================================================");

   var returnValue = addThreeValues("Hello"," Good", " Morning");
   console.log("Addition is: ",returnValue);
   
   
   
   
   
   
   