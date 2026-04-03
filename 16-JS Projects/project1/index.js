const madridLegends = [
    "Cristiano Ronaldo (CR7)",
    "Alfredo Di Stéfano (The Blond Arrow)",
    "Zinedine Zidane (Zizou)",
    "Raúl González (El Capitán)",
    "Iker Casillas (San Iker)",
    "Luka Modrić (The Lukita)",
    "Sergio Ramos (The Monarch)",
    "Karim Benzema (Monsieur)",
    "Roberto Carlos (The Bullet Man)",
    "Ferenc Puskás (The Cannon)",
    "Gareth Bale (The Cardiff Express)",
    "Toni Kroos (The Sniper)",
    "Marcelo (The Magician)",
    "Paco Gento (The Storm)",
    "Hugo Sánchez (Hugol)",
    "Ronaldo Nazário (O Fenômeno)",
    "Luis Figo (The Galactico)",
    "Fernando Hierro (The Iron Man)",
    "Pepe (The Beast)",
    "Vinícius Júnior (Vini Malvadeza)"
];
const legend = document.querySelector('h1')
const button = document.querySelector('button')

button.addEventListener('click', ()=>{
    const list = Math.floor(Math.random()*madridLegends.length)
    legend.textContent = madridLegends[list]
})
