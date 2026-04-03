const realMadrid = [
  { name: "Vinicius Junior", kit: 7, position: "Attacker", goals: 23, isStarter: true },
  { name: "Jude Bellingham", kit: 5, position: "Midfielder", goals: 20 },
  { name: "Rodrygo Goes", kit: 11, position: "Attacker", goals: 15 },
  { name: "Federico Valverde", kit: 8, position: "Midfielder", goals: 5 }
];
//const playerName = (realMadrid[1].name)
//const playerGoal = (realMadrid[1].goals)
//console.log(`${playerName} has scored ${playerGoal} goals for Real Madrid this season`)

const team = [realMadrid[0].goals,realMadrid[1].goals,realMadrid[2].goals,]
const topScorer = Math.max(...team)
//console.log(topScorer)

realMadrid[1].isCaptain = true;
realMadrid[3].goals = 6
//console.log(realMadrid)

const  scoutedPlayer = realMadrid.find((realMadrid)=>realMadrid.kit===11)
//console.log(scoutedPlayer)


 const isElite = (realMadrid) => {
  if(realMadrid.goals>15)
    return true;
  else
    return false;
 }
// console.log(isElite(realMadrid[0]))

function createScout(){
 let count = 0;

 function scout(){
   
  count = count+1;
  return (`scouted ${count} players`)
 }
    return scout
}
const myScout = createScout()
//console.log(myScout())
//console.log(myScout())

const totalGoals = realMadrid.reduce((accumulator, currenValues)=>{
  return accumulator+currenValues.goals
},0)
console.log(totalGoals)
