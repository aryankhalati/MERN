console.log("Hello I am start")

const buttonOne = document.getElementById("button1")
buttonOne.addEventListener('click',()=>{
    console.log(buttonOne)
})

const buttonTwo = document.getElementById("button2")
buttonTwo.addEventListener('click',()=>{
    console.log(buttonTwo)
})

const buttonThree = document.getElementById("button3")
buttonThree.addEventListener('click',()=>{
    console.log(buttonThree)
})

console.log("Hello I am end")

//Event Loop
//javascript is a single thread synchronous language. it executes only one task at a time
//this is where event loop plays a major role, if we consider the above example
//when the code runs js stores console.log("Hello I am start") in callstack and executes it,
//then const buttonOne = document.getElementById("button1") it sends to web api and says if 
//button is clicked then inform me, so web api stores the buttonOne and also teh callback Fn
//similary js does it for button2 and button3 and finally it runs and prints console.log("Hello I am end")
//then if a button is clicked the web api stores its callback Fn in a callback queue 
// this is where event loop comes into play, it sees if callstack is empty if yes it places the 
//callback fn into the callstack, removes it from callback queue and then again js runs and executes it and callstack is empty 
//this is bcoz js doesnt wait for anyone its just keeps on executing whatever it sees
//there also another thing called microtask queu where more imp functions like fetch are kept
//which have high priority than normal callback fn like settimer and eventlisten etc
