

let banksbi = {
    bankName : "State Bank of India",
    branch : "Arvi",
    "IFSC Code" : "SBIN0000317",
    phoneNo : 222016
}

let bankLocation = {
    street : "Deurwada Road",
    city : "Arvi",
    pin : 442201
}
console.log("===========Clone step 1(bankSbi)============");

const cloneBankSbi = Object.assign({}, banksbi);
console.log("Cloned bankSbi Object :",cloneBankSbi);
console.log("============Clone step 2(bankLocation)===========================");
const cloneBankLocation = Object.assign({}, bankLocation)
console.log("Cloned bankLocation Obejct : ",cloneBankLocation);

console.log("=======Obejct using object literals 'rateOfInterest'=============");

let rateOfInterest = { 
    homeLoanInterest : "7%",
    personalLoanInterest : "12%",
    dueInterest : "17%"
}
console.log(rateOfInterest);

console.log("===Merging 'bankSbi','bankLoaction' and 'rateOfInterest' into new object 'sbiDetails'====");

const sbiDetails = Object.assign({},banksbi,bankLocation,rateOfInterest)
console.log("Merged SBI Details : ",sbiDetails);

console.log("=============Traversing Merged Details using for in loop===============");
const finalMergeName = sbiDetails;
for (const key in sbiDetails) {
    if (Object.prototype.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log( `${key} =  ${element}`);     
}
}

