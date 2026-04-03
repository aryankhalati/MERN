const realMadrid = [
    {id:1, name:"Thibaut Courtois", matches:53, goals:0, position:"Goalkeeper",kit:1},
    {id:2, name:"Andrey Lunin", matches:14, goals:0, position:"Goalkeeper",kit:13},
    {id:3, name:"Dani Carvajal", matches:12, goals:1, position:"Defender",kit:2},
    {id:4, name:"Eder Militao", matches:18, goals:1, position:"Defender",kit:3},
    {id:5, name:"Lucaz Vasquez", matches:53, goals:2, position:"Defender",kit:17},
    {id:6, name:"Fran Garcia", matches:54, goals:1, position:"Defender",kit:20},
    {id:7, name:"Antonio Rudiger", matches:55, goals:3, position:"Defender",kit:22},
    {id:8, name:"Raul Asencio", matches:46, goals:0, position:"Defender",kit:35},
    {id:9, name:"Jude Bellingham", matches:58, goals:15, position:"Midfielder",kit:5},
    {id:10, name:"Federico Valverde", matches:65, goals:11, position:"Midfielder",kit:8},
    {id:11, name:"Luka Modric", matches:63, goals:4, position:"Midfielder",kit:10},
    {id:12, name:"Aurelien Tchouameni", matches:58, goals:2, position:"Midfielder",kit:14},
    {id:13, name:"Eduardo Camavinga", matches:35, goals:2, position:"Midfielder",kit:6},
    {id:14, name:"Arda Guler", matches:49, goals:6, position:"Midfielder",kit:15},
    {id:15, name:"Kylian Mbappe", matches:59, goals:44, position:"Attacker",kit:9},
    {id:16, name:"Vinicius Junior", matches:58, goals:22, position:"Attacker",kit:7},
    {id:17, name:"Rodrygo Goes", matches:54, goals:14, position:"Attacker",kit:11},
    {id:18, name:"Brahim Diaz", matches:55, goals:6, position:"Attacker",kit:21},
    
]
const mf = realMadrid.filter((realMadrid)=>realMadrid.position=="Midfielder")
const MF = mf.map((realMadrid)=>({name:realMadrid.name}))
console.log(MF)
