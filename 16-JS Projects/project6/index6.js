// parent div -> h1(fifa countdown timer)
// next div -> result
//current date -> by date.now
// world cup date -> by new data (Y,M,D)
// result select by id
// timer is worldcup date - currentdate
// day is time/ ms * s * min * hr * day
// hr is timer/ms * sec* min
// min is timer/ms * sec
//sec is timer/ms
// for all above use math floor and timer% 
//show in result using template literal
setInterval(()=>{
const currentDate = Date.now()
const worldcupDate = new Date(2026, 5, 12)
let timer = worldcupDate-currentDate

const result = document.getElementById('result')

const day = Math.floor((timer)/(1000*60*60*24))
timer%=1000*60*60*24
const hour = Math.floor((timer)/(1000*60*60))
timer%=1000*60*60
const minute = Math.floor((timer)/(1000*60))
timer%=1000*60
const second = Math.floor((timer)/(1000)) 
timer%=1000
result.textContent  = `${day} Days ${hour} Hours ${minute} Minutes ${second} Seconds`
}, 1000)