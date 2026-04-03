let cr = 7;

if(true){
    const lm = 10
   // console.log(lm)
}
function plyr()
{
    let nm = 11;
   // console.log(nm)
}
plyr()

//console.log(cr)
//Global variable -> can be accessed by anyone 
//Function scope -> cannot be accessed outside the function
//Block level scope -> cannot be accessed outside the block

let sr = 4;

function df()
{
    let sr = 3;
    function cb(){
       // let sr = 15;
      //  console.log(sr);
    }
    cb();
    
}
df()
//both function and block level scopes first explore their respective functions/blocks if found access it, if not explore outside and so on....

function winMatch()
{
    let goals = 0;
    function scoreGoals(){
       goals++;
       return goals;
    }
    return scoreGoals
}
const lead = winMatch()
//console.log(lead())
//console.log(lead())
//console.log(lead())
//closure remembers variables from its outer scppe even if the outer function is executed
function bankAccount(){
    let  balance = 1000
let user = {
   
    deposit: function(amount){
        if(typeof amount === "number" && amount>=0){
            balance = balance + amount;
            return balance;
        }
    },
    withdraw: function(amount){
        if(typeof amount === "number" && amount>=0 && balance>=amount){
            balance = balance - amount;
            return balance;
        }
    },
    getbalance : function(){
        return balance; 
    }
}
return user
}
const customer = bankAccount()
//console.log(customer.deposit(2000))
//console.log(customer.withdraw(1200))
//console.log(customer.getbalance())

//Higher order function

function addition()
{
    function addThem(num1,num2){
       
        return  num1 + num2;
    }
    return  addThem
}
const sum = addition()
console.log(sum(23,34))
