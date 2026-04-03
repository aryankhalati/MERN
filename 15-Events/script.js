//const team = document.getElementById("first")

//team.addEventListener('click', ()=>{
//    team.textContent = "Welcome to the home of Real Madrid"
//})
//team.addEventListener('click', ()=>{
  //  team.style.backgroundColor = "red"
//})
//team.addEventListener('click', () =>{
  //  team.style.color = "yellow"
//})

const parent = document.getElementById("parent1")
parent.addEventListener('dblclick', (e)=>{
e.target.textContent = "I am a footballer"
})
//console.log(parent.children)
// for(let player of parent.children){
//    console.log(player)
//     player.addEventListener('click', ()=>{
//        player.textContent = "I Play for Real Madrid"
//     })
// }

// const grandparent = document.getElementById("grandparent")
// grandparent.addEventListener('click', ()=>{
//    console.log(" I AM GRANDPARENT")
// },true)
// const parent = document.getElementById("parent")
// parent.addEventListener('click', ()=>{
//     console.log(" I am Parent")
// },true)
// const child = document.getElementById("child")
// child.addEventListener('click', ()=>{
//     console.log("i am child")
// },true)