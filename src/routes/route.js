const express =  require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController");




router.post("/createUser", function(req,res,next){
    let itAsProperty = req.headers.isfreeappuser
    console.log(itAsProperty)
    if( itAsProperty == null)  res.send("request is missing")
    
    next()

    
}, userController.createUser  )

router.post("/createProduct", productController.createProduct )


router.post("/createOrder",function(req,res,next){
    let itAsProperty = req.headers.isfreeappuser
    console.log(itAsProperty)
    if( itAsProperty == null)  res.send("request is missing")
    
    next()

    
}, orderController.createOrder )




module.exports = router;

