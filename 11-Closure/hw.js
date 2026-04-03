function Club(clubname){
  return  function playerProfile(){
let player = {
    name: "mbappe",
    value: 150,
}
let updateName = player.name.toUpperCase()
let performace = (Math.floor(Math.random(player.value)*2-1+1)+1)
let metric = player.value * performace
return `${clubname} report : ${updateName} is now worth ${metric} million euros`
  }
}
const scoutEngine = Club("Real Madrid")
let scoutlog = []

scoutlog.push(scoutEngine('Mbappe',150))
console.log(scoutlog)



