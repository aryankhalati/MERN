// // //  async function greet(){
// // //    // return "Real Madrid"
// // //    return new Promise((resolve,reject)=>{
// // //       reject("Real Madrid")
// // //    })
// // // }
// // // const response = greet()
// // // // console.log(response)
// // // .then((response)=>{
// // //     console.log(response)
// // // })
// // // .catch((error)=>{
// // //     console.log("Error :", error)
// // // })

// // async function greet(){
// //     try {
// //     const response = await fetch("https://api.github.com/users")
// //     if(!response.ok){
// //         throw new Error("Data not found")
// //     }
// //     const data = await response.json()
// //     const parent = document.getElementById("first")
// //     for(let user of data){
// //         const element = document.createElement('div')
// //         element.classList.add("user")

// //         const image = document.createElement('img')
// //         image.src =  user.avatar_url

// //         const userName = document.createElement('h2')
// //         userName.textContent = user.login

// //         const profile = document.createElement('a')
// //         profile.href = user.html_url
// //         profile.textContent = "Visit Profile"

        
// //         element.append(image, userName, profile)
// //         parent.append(element)
// //     }
// //     }
// //     catch(error){
// //        console.log("error")
// //     }
    


// // }

// // greet()

// const orderDetails = {
//     orderID : 9860,
//     kit_type : `Real Madrid`,
//     kit : [`jersey`, `shorts`, `cleats`, `stocking`, `shinguard`],
//     cost : `2350`,
//     store_location : `Champion Sports`,
//     customer_location : `Shivane`,
// }
// function placeOrder(orderDetails){
//      console.log(` ${orderDetails.cost} Payment is under process`);
//     return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     if(Math.random()>0.09){
//         console.log(`Payment has been received and ${orderDetails.kit_type} kit has been selected`)
//         orderDetails.status = true;
//         resolve(orderDetails)
//     }
//     else{
//         reject("Payment has failed")
//     }
//     },2000)
// })
// }
// function prepareOrder(orderDetails){
//     return new  Promise((resolve,reject)=>{
//      console.log(`Your ${orderDetails.kit_type} kit of ${orderDetails.kit} is being arranged `);
//     setTimeout(()=>{
//     if(Math.random()>0.05){
//         console.log(`Your ${orderDetails.kit_type} kit is now being arranged`)
//         orderDetails.token = 123;
//         resolve(orderDetails)
//     }
//     else{
//         reject(`Kit item is not present in ${orderDetails.store_location} store`)
//     }
//     },3000)
//     })
    
// }
// function dispatchOrder(orderDetails){
//     return new Promise((resolve,reject)=>{
//     console.log(`Delivery boy has arrived at ${orderDetails.store_location} store`)
//     setTimeout(()=>{
//     if(Math.random()>0.05){
//         console.log(`Delivery boy has picked up the parcel`)
//         orderDetails.received = true;
//         resolve(orderDetails)
//     }
//     else{
//         reject(`Delivery boy is unable to reach ${orderDetails.store_location} `)
//     }
//     },3000)
//     })
    
  
// }
// function deliverOrder(orderDetails){
//     return new Promise((resolve, reject)=>{
//     console.log(`Your ${orderDetails.kit_type} kit is on the way`)
//     setTimeout(()=>{
//      console.log(`Your ${orderDetails.kit_type} kit has been delivered at ${orderDetails.customer_location}`)
// 
//     resolve(orderDetails)
//      },3000)
//     })
    
// }

// async function realmadrid(){
//     try{
//         const response1 = await placeOrder(orderDetails);
//         const response2 = await prepareOrder(response1);
//         const response3 = await dispatchOrder(response2);
//         const response4 = await deliverOrder(response3)
//     }
//     catch(error){
//         console.log("Error :", error)
//     }
// }
// realmadrid()

async function user(){
    const [comments,photos,chats] = await Promise.all([fetch("userComment"), fetch("userPhotos"), fetch("userChats")])
}
