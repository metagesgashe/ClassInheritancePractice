class Person {
    //creates instance of Person with properties name, age, and numBooksRead
    constructor(name, age, numBooksRead) {
        this.name = name;
        this.age = age;
        this.numBooksRead = numBooksRead;
    }

    //increments numBooksRead by 1
    readNewBook() {
        this.numBooksRead++;
    }
}

class Electrician extends Person {
    //creates instance of Electrician with Person properites plus certifications, an array of strings
    constructor(name, age, numBooksRead, certifications) {
        super(name, age, numBooksRead);
        this.certifications = certifications;
    }
}

class Teenager extends Person {
    //creates instance of Teenager with Person properties plus isHungry, a boolean value
    constructor(name, age, numBooksRead, isHungry = true) {
        super(name, age, numBooksRead);
        this.isHungry = isHungry;
    }

    //feeds the teenager.  If they are hungry, changes isHungry to false, if they are not hungry, prints message to console.
    eat() {
        if(this.isHungry) {
            this.isHungry = false;
        } else {
            console.log('Oh no I think I ate too much')
        }
    }
}

//below we will test our classes by instantiating them, calling each method, and verifying output

//create instances of each class
let person = new Person('Euthyphro', 35, 0);
let electrician = new Electrician('Zeus', 28, 3, ['Lightning', 'Polymorphism']);
let teen = new Teenager('Persius', 16, 5, true);

//log each instance
console.log(person);
console.log(electrician);
console.log(teen);

//call the method from the parent class to ensure it works as expected
person.readNewBook();
electrician.readNewBook();
teen.readNewBook();

//log the objects after calling .readNewBook() to verify it worked as intended
console.log(person);
console.log(electrician);
console.log(teen);

//call .eat()
teen.eat();

//check that .eat() when isHungry == true works as expected
console.log(teen);

//check that .eat() when isHungry == false works as expected
teen.eat();

console.log('')

// parent class name Vehicle

class Vehicle {
    constructor (name, color, speed){
        this._name = name;
        this._color = color;
        this._speed = speed;
    }
// speed decreas by 3
    brake(){
        return this._speed -= 3;
    }
    get name (){
        return this._name
    }
    get color (){
        return this._color
    }
    get speed (){
        return this._speed
    }
}

// child class car
class Car extends Vehicle {
    constructor(name, color, speed, type){
        super(name, color, speed);
        this._type = type
    }

}

// child class train
class Train extends Vehicle{
    constructor(name, color, speed, passengers){
        super(name, color, speed);
        this._passengers = passengers
    }
    
    // add passengers 
    addPassengers(){
        return this._passengers += 10;

    }

    get passengers (){
        return this._passengers
    }
}

// creat instances for each 

let vehicle = new Vehicle('vehicle1', 'black', 80);
let car = new Car('car1', 'white', 60, 'toyota');
let train = new Train ('train1', 'purple', 100, 150);

// print the whole property of all instances
console.log(vehicle)
console.log(car)
console.log(train)
console.log('')
// call the the brake method for all of the instances
vehicle.brake();
car.brake();
train.brake();

//print one more time after the method was called 
console.log(vehicle.speed)
console.log(car.speed)
console.log(train.speed)
console.log('')

// calling the train's addPassengers method three times
train.addPassengers()
train.addPassengers()
train.addPassengers()

//ptint the number of passengers after the addPassengers method was called
console.log(`The number of passengers is ${train.passengers}`)

// let x = setTimeOut(console.log("hello world"), 1000)

// console.log(x)

function myFunction() {
    setTimeout(function(){ 
        prompt("Hello")
    }, 3000);
  }

  myFunction();