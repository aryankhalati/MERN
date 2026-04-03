let rawName = "  CRISTIANO ronaldo  ";
let rn =(rawName.trim())
let RN = (rn.toLowerCase())
//console.log(RN)
const dt = new Date
 let DT = dt.toLocaleDateString()
let welcomemsg = `Welcome ${RN}!, You joined us on ${DT} `
//console.log(welcomemsg)

const nm = `Santiago Bernabeu`
let nm1 = (nm.replace(`Santiago Bernabeu`, `Santiago-Bernabeu`))
console.log(nm1.toUpperCase())
