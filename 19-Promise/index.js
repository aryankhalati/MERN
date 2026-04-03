// // console.log("Bharat Mata ki Jai")

// // fetch("https://api.github.com/users")
// // .then((response)=>{
// //     if(!response.ok)
// //     {
// //         throw new Error("Data is not present")
// //     }
// //     return response.json();
// // })
// // .then((response)=>{
// //     const parent = document.getElementById("first")
// //     for(i = 0; i<=30; i++){
// //     const image = document.createElement('img')
// //     image.src = response[i].avatar_url;
// //     image.style.height = "130px"
// //     image.style.width = "10px"
// //     parent.append(image)
// //    }
// // })

// // .catch((error)=>{
// //     const parent = document.getElementById("first")
// //     parent.textContent = error.message
// // })

// // console.log("Vande Mataram")
// //JS object -> JSON
// // const p1 = {
// //     name: "Mbappe",
// //     age : 30,
// //     country : "France",
// // }
// // const j1 = JSON.stringify(p1)

// // console.log(j1)

// //JSON -> JS object
// // const p2 = `{
// //    "name": "Mbappe",
// //    "age":30,
// //    "country": "France"
// // }`

// // const j2 = JSON.parse(p2)

// // console.log(j2)

// const player = new Promise((resolve, reject)=>{
//     reject({
//         name:"Mbappe",
//         age: 28,
//         club: "Real Madrid",
//         country: "France",
//         position: "Forward",
//         kit_no: 10
//     })
// })
// player.then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })

//buying real madrid kit

const orderDetails = {
    orderID : 9860,
    kit_type : `Real Madrid`,
    kit : [`jersey`, `shorts`, `cleats`, `stocking`, `shinguard`],
    cost : `2350`,
    store_location : `Champion Sports`,
    customer_location : `Shivane`,
}
function placeOrder(orderDetails){
    return new Promise((resolve, reject)=>{
    console.log(` ${orderDetails.cost} Payment is under process`);
    setTimeout(()=>{
    console.log(`Payment is successful`)
    resolve(orderDetails)
    },2000)
})
}
function prepareOrder(orderDetails){
    return new  Promise((resolve,reject)=>{
     console.log(`Your ${orderDetails.kit_type} kit of ${orderDetails.kit} is being prepared `);
    setTimeout(()=>{
    console.log(`Your ${orderDetails.kit_type} kit is now ready`)
    resolve(orderDetails)
    },3000)
    })
    
}
function dispatchOrder(orderDetails){
    return new Promise((resolve,reject)=>{
    console.log(`Delivery boy has arrived at ${orderDetails.store_location} store`)
    setTimeout(()=>{
    console.log(`Your ${orderDetails.kit_type} kit is dispatched and out for delivery`)
    resolve(orderDetails)
    },3000)
    })
    
  
}
function deliverOrder(orderDetails){
    return new Promise((resolve, reject)=>{
    console.log(`Your ${orderDetails.kit_type} kit is on the way`)
    setTimeout(()=>{
     console.log(`Your${orderDetails.kit_type} kit has been delivered at ${orderDetails.customer_location}`)
    },3000)
    resolve(orderDetails)
    })
    
}
placeOrder(orderDetails)
.then((orderDetails)=>prepareOrder(orderDetails))
.then((orderDetails)=>dispatchOrder(orderDetails))
.then((orderDetails)=>deliverOrder(orderDetails))
.then((orderDetails)=>{
   console.log(orderDetails)
})
.catch((error)=>{
    console.log("Error", error.message)
})