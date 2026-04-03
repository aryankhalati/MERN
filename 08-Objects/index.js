//CRUD ops
//1 Create
const ply1 = {
    name: "Kylian Mbappe",
    age: 27,
    position: "Forward",
    country: "France",
    kit: 10,
    goals: 38
}
//2 Read
//console.log(ply1)
//3 Update
ply1.goals = 52
//console.log(ply1)
//4 Delete
delete ply1.country
//console.log(ply1)
const ply2 = {
    name: "Vincius Jr",
    age: 25,
    position: "Forward",
    country: "Brazil",
    kit: 7,
    goals: 12
}
//console.log(Object.keys(ply2))
//console.log(Object.values(ply2))
//console.log(Object.entries(ply2))

//for in loop
//for(let keys in ply2)
//{
//    console.log(keys)
//}

//destructuring
const ply3 = {
    name: "Jude Bellingham",
    age: 23,
    position: "Midfielder",
    country: "England",
    kit: 5,
    goals:8
}

const {name,position,goals} = ply3
//console.log(name,position,goals)
const arr = [7,10,5,15,8,11]
const [first,second] = arr
//console.log(first, second)

//for of loop
// we cant directly apply for of loop on objects so we use arrays

//for(let keys of Object.keys(ply3))
//{
//    console.log(keys)
//}
//for(let values of Object.values(ply3))
//{
   // console.log(values)
//}
//for(let entries of Object.entries(ply3))
//{
   // console.log(entries)
//}
//for(let [keys, values] of Object.entries(ply3))
//{
//    console.log(keys, values)
//}
const ply4 = {
    name: "Federico Valverde",
    age: 28,
    position: "Midfielder",
    country: "Uruguay",
    kit: 8,
    goals:3,
    //greeting: function(){
        //console.log(`The most complete midfielder in the world is ${this.name} `)
   // }
}
//ply4.greeting()

const plyr = {
    name: "Cristiano Ronaldo",
    age: 41,
    position: "Forward",
    country: "Portugal",
    kit: 7,
    goals:25,
    former : {
        club1: "Manchester United",
         club2 :  "Real Madrid",
         club3: "Juventus"
    }
}
const plyr2 = {...plyr}
plyr.former.club1 = "Sporting CP"
console.log(plyr)




    







