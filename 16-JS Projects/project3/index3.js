const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const Player = document.getElementById('player')
    const Fan = document.getElementById('fan')

    const l1 = Player.value.length
    const l2 = Fan.value.length

    const result = Math.pow(l1*l2, 4)%101
    const fandom = document.querySelector('h2')
    fandom.textContent = `Result ${result}%`
    form.reset()
})