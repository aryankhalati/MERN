//Function

function slogan(){
   // console.log("Y'Nada Mas, Hala Madrid!!!")
}
slogan();

function addNum(num1,num2){
    const sum = num1 + num2;
   // console.log(sum)
}
//addNum(7,10)
//addNum(15,36)
//we use functions so that we dont have to write the same code over n over again, we can simply use function keyword and call it. in short reusability

//Rest operator imp***
//rest op creates an array so that we can enter as many values as we want and dont need to maunally declare every variable
function add(...num){
    let sum = 0;

    for(let n of num){
        sum += n;
    }
    // console.log(sum)
}
//add(7,10,30)
//add(5,18,8)
//add(18,17,24,12)

//2nd way of creating function

const subNum = function(num1,num2){
    return num1 - num2;
}
//console.log(subNum(2024,1956))

//diff bw 1st and 2nd way 
//1st way
addply(1914,1939)
function addply(p1,p2){
 const psum =  p1 + p2;
  //console.log(psum)
}
//addply(66,23)

//2nd way
//console.log(sumply(1945,1918))
const sumply = function(p3,p4)
{
    return p3-p4;
}

//if i write console.log before declaring the function in 2nd way it will show error but not in 1st way

//arrow function

const squareNumber = (num) => (num*num)
//console.log(squareNumber(9))

const motto = () => ("Jai Hind, Jai Maharashtra")
//console.log(motto());

//IIFE

(function warcry() {
    //console.log("Har Har Mahadev");
})();

//callback

function answer() {
  //   console.log("Cristiano Ronaldo is the Greatest Of All Time")
}

function statement(){
   // console.log("No for me its Lionel Messi")
}

function question(callback)
{
    //console.log("Who is the GOAT of Football?")
    callback()
}
question(answer);
question(statement);

//Real life use case of callback

function laliga(){
    console.log("La Liga match tickets confirmed")
}
function ucl(){
    console.log("UCL match tickets confirmed")
}
function ticket(amount, callback){
    console.log(`${amount} euros has been initialized`)
    console.log("Your payment is successful")
    callback();
}
//ticket(250,laliga)
ticket(500,ucl)
