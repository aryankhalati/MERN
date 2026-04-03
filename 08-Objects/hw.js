const rawManager = "   caRLo anCElotti   "
const manager = rawManager.toLowerCase()
console.log(manager.trim())

const matchGoals = [2, 0, 1, 3]
const avggoals = (2+0+1+3)/4
const upgoals = avggoals.toFixed(1)
console.log(upgoals)


const squadStatus = {
    manager,
    matchGoals,
    upgoals,
    stadium: "Santiago Bernabeu"
}
console.log(squadStatus)