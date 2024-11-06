
var n1 = 10
var n2 = 20

var result = n1==n2 ? "Equal" : "Not Equal";
console.log(result);


function voteEligibility(age) {
    var result = age >= 18 ? "You are eligible for vote" : "Sorry not, try again next time";
    console.log(result);
    
    
}
voteEligibility(20);
voteEligibility(70);
voteEligibility(10);