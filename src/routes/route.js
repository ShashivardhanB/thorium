const express =  require('express');
const res = require('express/lib/response');
const router = express.Router();
const userController= require("../controllers/userController")
const assignController= require("../controllers/assignController")
const auth = require('../middleware/auth')
const axios = require('axios');


router.post("/users", userController.createUser  )
router.post("/login",userController.loginUser)
router.get("/users/:userId",auth.headerValidation, userController.getUserData)
router.put("/users/:userId", auth.headerValidation,userController.updateUser)
router.put("/delete/:userId", auth.headerValidation,userController.deleteUser)
router.put("/posts/:userId", auth.headerValidation,userController.posts)
router.get("/district", assignController.districtDetails)
router.get("/wheather", assignController.wheather)
router.get("/memes", assignController.memes)
router.post("/memes", assignController.createMemes)



router.get("*", function (req, res) {
    res.status(404).send("page not found")
})

 

module.exports=router;



