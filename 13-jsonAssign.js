
const aleixInfo = `{
   "name" : "Aleix Melon",
   "id" : "E00245",
   "role" : ["Dev" , "DBA"],
   "age" : 23,
   "doj" : "11-12-2019",
   "married" : "false",
   "address" : {
        "street" : "32, Laham St.",
        "city" : "Inssbruck",
        "country" : "Austria"
        },
        "reffered-by" : "0012"
}`
console.log("========Aleix information in  object format================");

const aliexInfoInObjectFormat = JSON.parse(aleixInfo)
console.log(aliexInfoInObjectFormat);

console.log("==========Aleix role ================");
// let roleOfAleix = aliexInfoInObejectFormat.role[0]
// console.log(roleOfAleix);

console.log(aliexInfoInObjectFormat.role[0]);

console.log("============Last name of Aleix=============================");
let lastNameOfAliex = aliexInfoInObjectFormat.name.split(" ");
let aleixLastName = lastNameOfAliex[lastNameOfAliex.length-1]
console.log(aleixLastName);

console.log("==========Joining year of Aliex============");
const dateOfJoining = aliexInfoInObjectFormat.doj.split("-");
const joiningYearofAleix = dateOfJoining[dateOfJoining.length-1]
console.log(joiningYearofAleix);




