const p1 = "Vinicius Junior";
const p2 = 'Jude Bellingham';
const p3 = `Kylian Mbappe`;
//we tend to use  (``) more often as if we use ("") pr ('') and our code moves to the next line it will show an error
//console.log(p1,p2,p3)
const num = 15;
const club1 = `Real Madrid had won  ${num} Champions League Titles`
//console.log(club1)

const club2 = `Real Madrid is the Best Club in the World, Hala Madrid!`
//console.log(club2)
//console.log(club2.length)
//console.log(club2.toLowerCase())
//console.log(club2.toUpperCase())
//console.log(club2.includes('Mad'))
//console.log(club2.indexOf('Bes'))
//console.log(club2.lastIndexOf('Mad'))

//Slice
//console.log(club2.slice(0,11))
//console.log(club2.slice(-12))

//Substring
//console.log(club2.substring(19,29))
//main diff bw slice and substring is that we can use negative values in slice but cant do the same in substring

//concat
const PR1 = "Florentino"
const PR2 = "Perez"
const PR3 = (PR1+" "+PR2)
//console.log(PR3)

//trim
const std1 = "  Estadio Santiago Bernabeu    "
//console.log(std1.trim())

//replace
//console.log(club2.replace('the World','Europe'))

//split
const team = "Mbappe, Vincius, Jude, Arda, Valverde"
//console.log(team.split(","))

//Date
const now = new Date()
//console.log(now.toString())
//console.log(now.toISOString())
//console.log(now.toLocaleDateString())
//console.log(now.toLocaleTimeString())
//console.log(now.getDate())
//console.log(now.getDay())
//console.log(now.getFullYear())
//console.log(now.getMonth()+1)
//console.log(now.getMilliseconds())

const dt = new Date(1902, 2, 6,12,46,23,15)
console.log(dt.toLocaleString())

