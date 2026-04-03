let rawDateString = "Vinicius,24,7,12,5";
let statsarray = rawDateString.split(",")
const player = {
    name: statsarray[0],
    matches: Number(statsarray[1]),
    assists: Number(statsarray[2]),
    goals: Number(statsarray[3]),
    yellowcards: Number(statsarray[4])
    
}
console.log(`${player.name} has a total of ${getGA(player.goals, player.assists)} G/A this season`)
function getGA(g,a)
{
    return g+a;
}
getGA()
