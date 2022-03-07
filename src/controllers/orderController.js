const OrderModel= require("../models/orderModel")
const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")


const createOrder= async function (req, res) {
  let data = req.body
  let userId= req.body.userId
  let productId = req.body.productId
  let freeAppUser = req.headers.isfreeappuser;
  console.log(freeAppUser)
  let id = await UserModel.findById(userId)
  let idP = await ProductModel.findById(productId)
  


  if(data.hasOwnProperty("userId")){
  if(id ===null ) 
   {
    res.send({mes:"userid is not matched" })
    
   } else {
  if(data.hasOwnProperty("productId")){
  if( idP === null)  res.send({mes:"productid is not matched" })

    } else {
       res.send({ mes:" product is empty"})
       }
}      
  } else {
    res.send({ mes:" user is empty"})

  }




 


if( freeAppUser === "true" ){
  data.amount=0;
  data.isFreeAppUser = true
  let order = await OrderModel.create(data)
  console.log(order)
  res.send({mes: order})
  

} else {
  let data = req.body
  let priceOfBook = idP.price
  let balanceOfUser = id.balance
  let balanceAfterOrder = balanceOfUser-priceOfBook
  if(balanceOfUser < priceOfBook) res.send({mes:"user doesn't have enough balance"})
  else {
  data.amount = priceOfBook

   let newBalance = await UserModel.findByIdAndUpdate(
    { _id: userId },
    { $inc: { balance: -priceOfBook} },
    { new: true }
    )
  
  data.isFreeAppUser=false
  let order = await OrderModel.create(data)
  res.send({mes:order})
  }
}


}


module.exports.createOrder= createOrder
