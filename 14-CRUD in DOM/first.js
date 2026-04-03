const main = document.getElementById("main-title")
main.textContent = "My Professional Stack"

const sub = document.createElement("p")
sub.id = "subtitle"
sub.textContent = "Exploring the MERN ecossytem"
main.after(sub)

const coreTech = ["MongoDB", "Express", "React", "Node"]
const techlist = document.getElementById("tech-list")
const fragment = document.createDocumentFragment()
for(let skills of coreTech){
    const skillset = document.createElement("li")
    skillset.textContent = skills
    skillset.style.fontSize = "22px"
    fragment.append(skillset)
}
techlist.append(fragment)

const backend = document.createElement("span")
backend.textContent = "Current Focus: Backend"
backend.classList.add("active")
backend.classList.add("highlight")
backend.classList.remove("active")
backend.style.backgroundColor = "blue"
backend.style.color = "white"
main.before(backend)

const dsa = document.getElementById("dsa")
dsa.textContent = "C++ (DSA)"
dsa.append(techlist)