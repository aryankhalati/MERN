const sensorLoc = "  vALdebebas-field-03  "
const updatedsensor = sensorLoc.trim().toLowerCase()
console.log(updatedsensor)

const readings = [85.2, 90.5, 88.3]
let total = 0;
for(let value  of readings)
{
    total = total + value;
}
const avgread = total
console.log(avgread.toFixed(1))

const isHealthy = true

const energyReport = {
 updatedsensor,
 readings,
isHealthy,
totalConsumption : avgread
}
console.log(energyReport)