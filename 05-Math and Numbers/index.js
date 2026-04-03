let a = 7;
let b = 1902.1536
let c = (b.toFixed(2))
console.log(c)
//to fixed for selecting digits only upto decimal pt which we want, and it returns a string since number is immutable and cant be changed
let d = (b.toPrecision(7))
console.log(d)
//to precision for selecting total digits and both to fixed n to precision round up if required
console.log(b.toString())

let e = new Number(10)
let f = new Number(10)
console.log(e==f)
//it shows false as new Number creates 2 diff boxes in the memory and since its an object it doesnt compare  by value but by reference 

let cr = 7
let vi = cr
console.log(cr==vi)
//here since both cr and vi are pointing towards the same memory it shows true, so it is adviced mostly try to avoid new Number 

//Math object
console.log(Math.abs(-9))
console.log(Math.PI)
console.log(Math.sqrt(1902))
console.log(Math.max(7,6,15,5,4,3))
console.log(Math.min(7,6,15,5,4,3))
console.log(Math.ceil(23.5))
console.log(Math.floor(32.5))
console.log(Math.log10(36))

//Math.random
//generate random number from 0-1 but 1 isn't included
console.log(Math.random())
//Generate a random number from 0-9 without any decimal
console.log(Math.floor(Math.random()*10))

//Dice game number generation
console.log(Math.floor(Math.random()*6)+1)

//Practice generate number from 15-25
//console.log(Math.floor(Math.random()*11)+15)
//formula = console.log(Math.floor(Math.random()*(max-min+1))+min)

//4 digit OTP generation (1000-9999)
console.log(Math.floor(Math.random()*(9999-1000+1))+1000)
//But we dont use math.random for otp generation since it can be predictable instead use crypto libraries which ensure the security and privacy of the user
