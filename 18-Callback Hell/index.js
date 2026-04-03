//buying real madrid kit

const orderDetails = {
    orderID : 9860,
    kit_type : `Real Madrid`,
    kit : [`jersey`, `shorts`, `cleats`, `stocking`, `shinguard`],
    cost : `2350`,
    store_location : `Champion Sports`,
    customer_location : `Shivane`,
}
function placeOrder(orderDetails, Callback){
    console.log(` ${orderDetails.cost} Payment is under process`);
    setTimeout(()=>{
    console.log(`Payment is successful`)
    Callback(orderDetails)
    },2000)
}
function prepareOrder(orderDetails, Callback){
    console.log(`Your ${orderDetails.kit_type} kit of ${orderDetails.kit} is being prepared `);
    setTimeout(()=>{
    console.log(`Your ${orderDetails.kit_type} kit is now ready`)
    Callback(orderDetails)
    },3000)
}
function dispatchOrder(orderDetails, Callback){
    console.log(`Delivery boy has arrived at ${orderDetails.store_location} store`)
    setTimeout(()=>{
    console.log(`Your ${orderDetails.kit_type} kit is dispatched and out for delivery`)
    Callback(orderDetails)
    },3000)
  
}
function deliverOrder(orderDetails){
    console.log(`Your ${orderDetails.kit_type} kit is on the way`)
    setTimeout(()=>{
     console.log(`Your${orderDetails.kit_type} kit has been delivered at ${orderDetails.customer_location}`)
    },3000)
}
placeOrder(orderDetails,(orderDetails)=>{
    prepareOrder(orderDetails,(orderDetails)=>{
        dispatchOrder(orderDetails,(orderDetails)=>{
            deliverOrder(orderDetails)
        })
    })
})