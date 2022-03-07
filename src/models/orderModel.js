const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const orderSchema = new mongoose.Schema( 
 {
		userId:{
               type: ObjectId,
               ref: "newUser"
           },
           amount :Number,
	   
		productId: {
               type: ObjectId,
               ref: "newProduct"
        },
isFreeAppUser: {type: Boolean, default: false}
 }, { timestamps: true });


module.exports = mongoose.model("newOrder", orderSchema)




// {
//     _id: ObjectId("61951bfa4d9fe0d34da86344"),
//     userId: “61951bfa4d9fe0d34da86829”,
//     productId: “61951bfa4d9fe0d34da86344”
//     amount: 0,
//     isFreeAppUser: true, 
//     date: “22/11/2021”
//     }