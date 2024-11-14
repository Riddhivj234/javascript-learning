
class Vehicle{
    constructor(name, manufactoringYear, average, fuelType, color ){
        this.name = name
        this.manufactoringYear = manufactoringYear;
        this.average = average;
        this.fuelType = fuelType;
        this.color = color;
    }
    details(){
        console.log(`Vehicle ${ this.name} details `);
        console.log(`Company name : ${this.name}, Manufacturing Year : ${this.manufactoringYear}, Average: ${this.average}, Fuel Type: ${this.fuelType}, Color : ${this.color} `);  
    }
}
const skoda = new Vehicle("Skoda", "2022", 18, "Petrol", "Black",);
skoda.details();

const maruti = new Vehicle("Maruti Suzuki", "2024", 20, "Diesel", "Black",);
maruti.details();

const kia = new Vehicle("Kia", "2019", 15, "Petrol", "Blue",);
kia.details();

const hyundai = new Vehicle("Hyundai", "2024", 22, "Diesel", "Silver",);
hyundai.details();

const tata = new Vehicle("TATA", "2022", 18, "Petrol", "White",);
tata.details();

console.log("===========================================================================");

class College{
    constructor(num, clgName, city, type, code ){
        this.num = num
        this.clgName = clgName
        this.city = city;
        this.type = type;
        this.code = code;
    }
    details(){
        console.log(`================College ${this.num} and its details===========`);
        console.log(`College name : ${this.clgName}, City : ${this.city}, Type: ${this.type}, Code : ${this.code}`);  
    }
}

const kl = new College("1","Kesharbai Lahoti Mahavidyalya", "Amravati", "Un-Aided", 68942 );
kl.details();

const shivaji = new College("2", "Shivaji Science College  ", "Amravati", "Government-Aided", 49329 );
shivaji.details();

const panjabrao = new College("3","Panjabrao Deshmukh College ", "Arvi", "Government-Aided", 46392 );
panjabrao.details();

const priyadarshini = new College("4","Priyadarshini College of Engineering ", "Nagpur", "Autonomous", 83427 );
priyadarshini.details();

const ramMeghe = new College("5","Ram Meghe College of Science and Technology ", "Badnera", "Un-Aided", 23177 );
ramMeghe.details();