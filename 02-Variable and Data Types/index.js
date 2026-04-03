/*let player1 = "Mbappe"
let age1 = '28'
console.log(player1,age1)

const player2 = "Vinicius"
const age2 = '26'
console.log(player2,age2)

//we use const if we want to keep the values of variables unchanged  or else use let
// previously var was also used but it had limitations
// 1) it could redeclare a variable multiple times
// 2) it did not respect the scope

//primitive data type
// 1) number
const goals = '32';
console.log(goals)

// 2) string
const player = "Kylian Mbappe";
console.log(player)

// 3) boolean
let worldcup = true;
console.log(worldcup)

// 4) undefined
let ballondor;
console.log(ballondor)

// 5) null
let ucl = null;
console.log(ucl)

// 6)bigint
let number = 122386374083873n;
console.log(number)

// 7)symbol
let id1 = Symbol("id");
console.log(id1)


//Non primitive data type
// 1) array
let madrid = ["Perez", "Los Blancos", 15, 1902, "Ronaldo"]
console.log(madrid)

// 2) object 
let user = {
    name : "Jude Bellingham",
    age : '23',
    position : "Midfield",
    jersey : '5'
}
console.log(user)

// 3) function

function win(){
    console.log("Hasta el Final, Vamos Real")
}
win()

*/
//non primitive is mutable
 let arr2 = [7,10,11,30,16]
 arr2.push(21)
 console.log(arr2)

 // primitive is immutable
 let num = 7;
 let num2 = num;
 num2 = 10;

 console.log(num,num2)
