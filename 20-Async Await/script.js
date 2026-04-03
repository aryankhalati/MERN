const player = {
    name: "Mbappe",
    age: 28,
    currentClub: "PSG"
}

function checkMedical(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
     if(Math.random()>0.3){
        resolve("Medical cleared")
     }
     else{
        reject("Knee Injury detected")
     }
    },2000)
    })
    
}
async function signContract(){
    try{
       const response = await checkMedical()
       console.log(`${player.name} has passed the medical`)
    }
    catch(error){
        console.log("Transfer aborted: ", error)
    }
   
}
signContract()