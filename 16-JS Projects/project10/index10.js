

const form = document.querySelector('form')

const answer = {
    q1: "Cristiano Ronaldo",
    q2: "Real Madrid",
    q3: "Ronaldo Nazario",
    q4: "61",
    q5: "Vinicius Junior"
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const data =  new FormData(form)
    let finalscore = 0;
     
    for(let [name,value] of data.entries()){
        if(answer[name]== value)
            finalscore++;
    }
    
    document.getElementById("out").textContent = `Your score is ${finalscore} out of 5`

    form.reset();
})