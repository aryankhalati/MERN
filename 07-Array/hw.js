let transferTargets = [`Davies`, `Wirtz`, `Haaland`, `Saliba`]
transferTargets.push(`Trent`)
//console.log(transferTargets)
transferTargets.splice(2,1)
//console.log(transferTargets)

const plyr = transferTargets
plyr.sort()
console.log(plyr)