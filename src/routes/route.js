const express =  require('express');
const res = require('express/lib/response');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require('../middleware/auth')

// router.get("*", function (req, res) {
//     res.send("page not fount")
// })
router.post("/users", userController.createUser  )
router.post("/login",userController.loginUser)
router.get("/users/:userId",auth.headerValidation, userController.getUserData)
router.put("/users/:userId", auth.headerValidation,userController.updateUser)
router.put("/delete/:userId", auth.headerValidation,userController.deleteUser)
router.put("/posts/:userId", auth.headerValidation,userController.posts)
router.get("/about", function (req, res) {
    res.send("page no fount")
})

router.put("*", function (req, res) {
    res.send("page not fount")
})

 

module.exports=router;



