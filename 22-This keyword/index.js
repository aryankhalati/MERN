// // // // 'use strict'
// // // // let a = 10;
// // // // let b = 5;
// // // // console.log(a,b)

// // // //  function greet(name1, name2){
// // // //     console.log(name1,name2)
// // // // } 
// // // // greet("Mbappe", "Jude")

// // // console.log(globalThis)

// // const p1 = {
// //     name: "Mbappe",
// //     age: 28,
// //     greet: function(){
// //         console.log( `${this.name} is the best player in Real Madrid`)
// //     }
// // }

// // const p2 = {
// //     name:"Vinicius",
// //     age: 26
// // }
// //  p2.greet = p1.greet


// // const p3 = {
// //     name:"Jude Bellingham",
// //     age: 23
// // }
// // p3.greet = p2.greet
// // p3.greet()


function greet(rank){
    console.log(`${this.name} is the best ${this.type} in the world`)
}

const navy = {
    name: "Indian Navy",
    type: "navy"
}
const airforce = {
    name: "Indian Air Force",
    type: "air force"
}
const army = {
    name: "Indian Army",
    type: "army"
}
greet.call(navy)
greet.apply(airforce)
const NAVAL = greet.bind(army)
NAVAL()


