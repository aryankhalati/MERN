const main = document.getElementById("hall")
main.addEventListener('click', (e)=>{
    e.target.textContent = "Attending"
    e.target.style.backgroundColor = "green"
})

main.addEventListener('dblclick', (e)=>{
   e.target.textContent = "Completed"
    e.target.style.backgroundColor = "red"

})
const campus = document.getElementById("outer-box")
campus.addEventListener('click', (e)=>{
    e.target.style.border = "2px solid red"
})
const lab = document.getElementById("inner-box")
lab.addEventListener('click', (e)=>{
    e.target.style.backgroundColor = "brown"
    e.stopPropagation()
})