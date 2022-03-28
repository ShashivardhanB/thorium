const express = require('express');
const { route } = require("express/lib/application");
const router = express.Router();
const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const reviewController = require("../controllers/reviewController")

router.post("/register", userController.createUser)
router.post("/login",userController.createLogin)

router.post("/books",bookController.createBook)
router.get("/books",bookController.getBooks)
router.post("/books/:bookId/review",reviewController.createReview)
router.put("/books/:bookId/review/:reviewId",reviewController.updateReview)
router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReview)


module.exports = router;