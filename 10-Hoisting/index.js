//how javascript code runs 
//it creates an execution context and is divided into 2 phases
//1) memory allocation
//2) execution phase

//eg
let ucl = 15;
let laliga = 36;
function addTrophies(num1,num2){
    let total = num1 + num2;
    return total;
}
const madridtrophy = console.log("Real Madrid has won",addTrophies(ucl,laliga), "trophies")
const barcatrophy = console.log("Barcaelona has won",addTrophies(5,28), "trophies")
//so in the above eg lets divide into 2 phases
//1st phase - memory allocation
//all variables will be allocated memory only no assignment of values
//ucl = undefined, laliga = undefined, = addTrophies = (function code), madridtrophy  = undefined, barcatrophy = undefined
//2nd phase execution phase 
//now it will assign values to the variables
//ucl = 15, la liga = 36,
//now it will repeat steps for the function
//so num1 = undefined, num2 = undefined, total = undefined
//then num1 = 15, num2 = 36, total = 51 and return it
//similarly now this 51 will get alloted to madridtrophy as the function is called

// it will do similar process for barcatrophy and give result of 33

//for let and const

let rma = 1902;
const fcb = 1899;
console.log(rma);
console.log(fcb)
//here 
//Memory allocation
//rma = <uninitializsed> (Temporal dead zone)
//fcb = <uninitializsed> (Temporal dead zone)
//Execution phase
//rma = 1902, fcb = 1899,
//if we try to print it before initializing it will show error since we cant access it before a value is assigned 

 //hoisting
 //function - hoisted completely (name and body)
 //var - hoisted and initialized with undefined
 //let and const - hoisted, but uninitialized, put in temporal dead zone