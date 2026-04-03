// Current Squad Data
//const playerGoals = [12, 28, 15, 7, 22]; 
//const viniciusValue = 150000000; // 150M
//const rodrygoValue = 110000000;  // 110M
//const mostgoals = Math.max(...playerGoals)
//console.log(mostgoals)

///const totalMarketValue = (viniciusValue + rodrygoValue)
//console.log(totalMarketValue)

//console.log(`${mostgoals} Elite Performance`)

//const scoutReport = "   vinicius junior   ";
//const position = "Forward";
//const club = "Real Madrid";

//const cleanname = scoutReport.trim().toUpperCase()
//console.log(cleanname)
//const announce = (`PLAYER: ${cleanname} | POSITION: ${position} | CLUB: ${club}`)
//console.log(announce)
//const isAttacker = (`PLAYER: ${cleanname} | POSITION: ${position} | CLUB: ${club}`).includes("Forward")
//console.log(isAttacker)

//const squad = [
  //  { id: 1, name: "Vini Jr", goals: 12, value: "150M" },
    //{ id: 2, name: "Rodrygo", goals: 15, value: "110M" },
    //{ id: 3, name: "Bellingham", goals: 20, value: "180M" }
//];
//squad.push({ id: 4, name: "Mbappe", goals: 0, value: "200M" })
//squad[2].goals = 21
//console.log(squad)
//const targetPlayer = squad.find(squad=>(squad.id===1))
//console.log(targetPlayer)
//console.log(targetPlayer.goals > 10 ?  `${targetPlayer.goals}: Elite Scorer `: `${targetPlayer.goals}: Need Improvement`);

//function createScout(){
  // let count = 0;
    //return function(playerName){
      //  count++;
        //return `${playerName} has been viewed ${count} times`
    //}
    
//}
//const viniScout = createScout()
//console.log(viniScout("Vini JR"))
//console.log(viniScout("Vini JR"))

const squad = [
    { name: "Vini Jr", goals: 12 },
    { name: "Rodrygo", goals: 15 },
    { name: "Bellingham", goals: 20 }
];

const topscorer= squad.filter((squad)=>squad.goals>14)
//console.log(topscorer)
const nickname = squad.map((squad)=>`${squad.name} - Star`)
//console.log(nickname)
const totalGoals = squad.reduce((accumulator, currenValue)=>{
   return accumulator + currenValue.goals
}, 0)
console.log(totalGoals)