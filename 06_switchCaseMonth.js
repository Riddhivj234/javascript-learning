 
 function monthOfYear(month) {
    switch (month) {
        case 0 :
          console.log("January");
             break;
    
             case 1 :
           console.log("February");
             break;

             case 2 :
          console.log("March");
             break;

             case 3 :
          console.log("April");
             break;

             case 4 :
          console.log("May");
             break;

             case 5 :
          console.log("June");
             break;

             case 6 :
          console.log("July");
             break;

             case 7 :
          console.log("August");
             break;

             case 8 :
          console.log("September");
             break;

             case 9 :
         console.log("October");
             break;

             case 10 :
         console.log("November");
             break;
            
             case 11 :
                console.log("Decenber");
                    break;
        default:
            console.log("Invalid month number", month);
            
            break;
    }
 }

monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);