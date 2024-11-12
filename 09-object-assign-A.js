
let professor = {
    fullName : "Gajanan Kharat",
    city : "Pune",
    age : 35,
    isMarried : true,
    email : "Gajanan.Kharat@gmail.com",
    certificates : ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"],
    degrees : {
        enginering : "CSC",
        "PHD" : "Adv Computing"
    }
    
};
console.log(professor);

console.log("===========Add new property TotalExperience======================");
professor.totalexperience = "14 years",
console.log(professor);

console.log("===========Modify any existing property ==============");
professor.city = "Mumbai",
console.log(professor);

console.log("===Add one new certificate 'Oracle Certified' at 2nd index=====");
professor.certificates.splice(2,0,"Oracle Certified"),
console.log(professor.certificates);

console.log("=======Last element of array 'certificates'=======");
console.log(professor.certificates[professor.certificates.length-1]);

console.log("========Traverse the array=========");
const lastArray = professor.certificates
for (const element of lastArray) {
    console.log(element);
    
};







