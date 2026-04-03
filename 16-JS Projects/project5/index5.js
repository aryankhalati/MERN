//create div for time
//get div in js
// time variable to get time
// in div set time to local time
//set interval use for continuous time change for 1000 ms

const div = document.getElementById('clock')


setInterval(()=>{
let time  = new Date()
div.textContent = time.toLocaleTimeString()
},1000)