let goals = [38, 11, 6, 3, 2, 1]
//console.log(goals)
//console.log(goals.length)
//console.log(goals[1])

let plyr = ["Mbappe", "Vinicus", "Jude", "Fede", "Arda"]
//console.log(plyr)

//push -> insert element from the end 
plyr.push("Franco")
plyr.push("Tchouameni")
///console.log(plyr)

//pop -> delete element from the end
plyr.pop("Tchouameni")
//console.log(plyr)

//unshift -> add element from the start
plyr.unshift("Trent")
//console.log(plyr)

//shift -> delete element from the start
plyr.shift("Trent")
//console.log(plyr)

//for of loop
//let kit = [7,10,5,15,8,18]
//for(let num of kit)
//{
//    console.log(num)
//}

//let kit2 = kit
//kit2.push(30)
//console.log(kit)
//it adds 30 in 1st array as it copies by reference and not by value

//slice
// slice cuts out elements from the initial array and gets stored in a new array
const kit = [7,10,5,15,8,18]
const kit2 = kit.slice(1,4)
//console.log(kit)
//console.log(kit2)
//splice
//splice cuts element from the existing array and only keeps the remaining ones
const kit3 = kit.splice(2,3)
//console.log(kit3)

//spread -> combines all elements from all existing arrays indiviualy.
const fw = ["Vinicius", "Mbappe", "Arda"]
const mf = ["Jude", "Tchouameni", "Fede"]
const df = ["Carreras", "Huijsen", "Asensio", "Trent"]
const gk = ["Courtois"]

//const lineup = [...fw, ...mf, ...df, ...gk]
//console.log(lineup.toString())


//join 
//console.log(fw.join("-"))
//console.log(mf.join("-"))
//console.log(df.join("-"))
//console.log(gk.join("-"))

//console.log(fw.lastIndexOf('Arda'))
// console.log(fw.includes('Franco'))

const subs = ['Franco', 'Gonzalo', 'Camavinga', 'Rodrygo', 'Rudiger', 'Carvajal', 'Lunin']
//subs.sort()
//subs.sort()
//subs.reverse()
//console.log(subs)

const gols = [308, 450, 242, 354, 323, 290]
//ascending order
gols.sort((a,b) => a-b) // formula is imp
//console.log(gols)

//descending order
const gols2 = gols.sort((a,b) => b-a) 
//console.log(gols2)


const legends = ['Marcelo', 'Pepe',['Kroos', 'Modric',['Benzema', 'Ronaldo', 'Bale'],'Casemiro'], 'Ramos', 'Carvajal']
console.log(legends[2][2][1]) // i accessed Ronaldo

//flat
console.log(legends.flat(Infinity))