// // const obj =  {
// //     name: "Mbappe",
// //     age: 28,
// //     country: "France"
// // }

// // const obj2 = {
// //     club: "Real Madrid",
// //     position: "Forward"
// // }

// // // console.log(obj)
// // // console.log(obj2)

// // obj2.__proto__ = obj

// // console.log(obj2.name, obj2.age, obj2.country, obj2.club, obj2.position)

// class Place{
//     constructor(city,state,country){
//         this.city = city
//         this.state= state
//         this.country= country
//     }
// }

// const p1 = new Place("Pune", "Maharashtra", "India")
// const p2 = new Place("Los Angeles", "California", "USA")
// console.log(p1.city, p1.state, p1.country)
// console.log(p2.city, p2.state, p2.country)

class player {
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

class stats extends player{
    constructor(name,age,goals,rating){
      super (name,age)
      this.goals =  goals
      this.rating = rating

    }
    checkStats(){
        return this.goals;
    }
   

}

const p1 = new stats("Mbappe", 28, 45, 8.1)
console.log(p1.goals)