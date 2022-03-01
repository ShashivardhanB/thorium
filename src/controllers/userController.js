const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
  let allBooks =await userModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: allBooks})
}
 const getBooksInYear= async function (req, res) {
   let years = req.body.year
  let allBooks =await userModel.find({year:years})
  res.send({msg: allBooks}) 
}
  const getParticularBooks= async function (req, res) {
    let reqbookName = req.body.bookName
   let allBooks =await userModel.find({bookName:reqbookName})
   res.send({msg: allBooks})
  }
   const getXINRBooks= async function (req, res) {
     
     
   let allBooks =await userModel.find({$or:[{"prices.indianPrice":100},{"prices.indianPrice":200},{"prices.indianPrice":500}]})
   res.send({msg: allBooks})
   }
   const getRandomBooks= async function (req, res) {
    let allBooks =await userModel.find({$or:[{stockAvailable : true,totalPages:{$gt:500}}]})
    res.send({msg: allBooks})
    
   
}
    
module.exports.createBook= createBook
module.exports.bookList= bookList 
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks=getParticularBooks 
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks