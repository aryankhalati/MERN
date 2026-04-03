const welcome = document.createElement("h2")
welcome.textContent = "Welcome to the home of Real Madrid"
welcome.id = "second"

const club = document.getElementById("first")
club.after(welcome)

const slogan = document.createElement("span")
slogan.textContent = "Y Nada Mas, Hala Madrid!"
slogan.id = "third"
slogan.classList.add("one");
slogan.classList.add("two");
slogan.classList.remove("one");
slogan.style.backgroundColor = "red"
slogan.style.fontSize = "20px"
welcome.after(slogan)
const stadium = document.getElementById("stadium")
stadium.textContent = "Santiago Bernabeu"
stadium.after(welcome)
//const p1 = document.createElement("li")
//p1.textContent = "Mbappe"
//const p2 = document.createElement("li")
//p2.textContent = "Vinicius"
//const p3 = document.createElement("li")
//p3.textContent = "Bellingham"
//const p4 = document.createElement("li")
//p4.textContent = "Tchouameni"
//const squad = document.getElementById("players")
//squad.append(p1)
//squad.prepend(p2)
//p2.after(p3)
//p1.before(p4)
// const squad = ["Vinicius", "Mbappe", "Guler", "Bellingham", "Valverde", "Tchouameni", "Carreras", "Huijsen", "Acensio", "Trent", "Courtois"]
// const team = document.getElementById("zidane")
// const fragment = document.createDocumentFragment()
// for(let players of squad){
//     const startingEleven = document.createElement("li");
//     startingEleven.textContent = players
//     fragment.append(startingEleven)
// }
// team.append(fragment)
