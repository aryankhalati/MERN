const realMadrid = [
  { name: "Vinicius Junior", kit: 7, position: "Attacker", goals: 23, isStarter: true },
  { name: "Jude Bellingham", kit: 5, position: "Midfielder", goals: 20 },
  { name: "Rodrygo Goes", kit: 11, position: "Attacker", goals: 15 },
  { name: "Federico Valverde", kit: 8, position: "Midfielder", goals: 5 }
];

function trackSearch(){
    count = 0;
    function search(){
           count = count + 1;
       return `Search ${count} performed `    
    } 
    return search
}

const logger = trackSearch()

 realMadrid.push({name:"Kylian Mbappe", kit:9, position:"Attacker", goals:43})
 console.log(realMadrid)

 const mostgoals = Math.max(...realMadrid.map(realMadrid=>realMadrid.goals))
 console.log(mostgoals)
 const onlyAttackers = realMadrid.filter((realMadrid)=>realMadrid.position==="Attacker")
 console.log(onlyAttackers)

 const squad = realMadrid.map((player)=>({name:player.name.toUpperCase()}))
console.log(squad)

let summary = `The record for goals is ${mostgoals} and we have ${onlyAttackers.length} attackers`
console.log(logger())
console.log(logger())
console.log(summary)



 



