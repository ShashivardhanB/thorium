const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")



router.post("/createBook", UserController.createBook  )
router.get("/bookList", UserController.bookList)
router.post("/getBooksInYear", UserController.getBooksInYear )
router.post("/getParticularBooks", UserController.getParticularBooks )
router.get("/getXINRBooks", UserController.getXINRBooks)
router.get("/getRandomBooks", UserController.getRandomBooks)
module.exports = router;