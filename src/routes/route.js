const express =  require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require('../middleware/auth')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )
router.post("/login",userController.loginUser)
router.get("/users/:userId",auth.headerValidation, userController.getUserData)
router.put("/users/:userId", auth.headerValidation,userController.updateUser)
router.put("/delete/:userId", auth.headerValidation,userController.deleteUser)
 

module.exports=router;



