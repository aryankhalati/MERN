const club = document.getElementById("first")
const greet = document.getElementById("second")

const manager = document.createElement("h3")
manager.textContent = " Manager - Carlo Ancelloti"
greet.before(manager)

const squad = ["Vinicius", "Mbappe", "Guler", "Bellingham", "Valverde", "Tchouameni", "Carreras", "Huijsen", "Acensio", "Trent", "Courtois"]
const team = document.getElementById("fourth")
const fragment = document.createDocumentFragment()
for(let player of squad){
    const list = document.createElement("li")
    list.textContent = player
    if(player === "Vinicius" || player ==="Mbappe")
        {list.classList.add("galactico")
       list.style.fontSize = "24px"}
    fragment.append(list)
}
team.append(fragment)
team.lastElementChild.remove()

const match = document.createElement("div")
match.textContent = "<script>alert('Hacked')</script>"
team.after(match)

const match2 = document.createElement("p")
match2.innerHTML = "<b>Powered by Madridista Scout Tech</b>"
match.after(match2)