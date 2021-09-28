// Name: Quyen Pham
// Springboard Unit 12 : OO Challenge
// Date: 9/28/2021

/* Part One */
class Vehicle{
    constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    }
    honk(){
        return `Beep`
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

/* Part two */
class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }

}

/* Part three */
class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2
    }
    revEngine(){
        return `VROOM!!!`
    }
    
}

/* Part Four */
class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;

    }
   add(newVehicle){
       if (!(newVehicle instanceof Vehicle)) {
           return `Only vehicles are allowed in here!`;
       }
       if(this.vehicles.length >=  this.capacity){
           return `Sorry, we're full.`;
       }
       this.vehicles.push(newVehicle);
       return `Vehicle added`;
   }
}