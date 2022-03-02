const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const authorModel = require("../models/authorModel.js")
const bookController= require("../controllers/bookController")


router.post("/createAuthor", bookController.createAuthor)
router.post("/createBook", bookController.createBook  )
router.get("/getBooksOfChetanBhagat", bookController.getBooksOfChetanBhagat )
router.get("/getAuthorOfTwoStates", bookController.getAuthorOfTwoStates )
router.get("/authorsName", bookController.authorsName)

module.exports = router;