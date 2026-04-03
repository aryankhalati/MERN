const getplayerStatus = (goals) => (goals>0 ? "Match winner" : "Team player"); //use of ternary function
//console.log(getplayerStatus(0))

function calculatePerformance (playername, ...ratings)
{
   
   let sum = 0;
   
   for(let n of  ratings){
       sum = sum + n;
   }
   const avg = sum/ratings.length
  // console.log(`Player : ${playername}, Avg Rating : ${avg.toFixed()}`)
}
// calculatePerformance("Vincius",9,6,7)


function processPayment(price, callback) {
    //console.log(`Processing payment of ${price} euros`)
    //console.log(`Ticket booking confirmed`)
    callback();
}
function stadium(){
    //console.log("Access to the stadium granted")
}
processPayment(200, stadium)

let rawDateString = "Vinicius,24,7,12,5";
let statsarray = rawDateString.split(',')
const player = {
    name: statsarray[0],
    matches: Number(statsarray[1]),
    assists: Number(statsarray[2]),
    goals: Number(statsarray[3]),
    yellowcards: Number(statsarray[4])
}
getGA()
console.log(`${player.name} has a total of ${getGA(player.goals, player.assists)} G/A this season`)
function getGA(g,a)
{
    const sum = g+a;
    return sum;
}



