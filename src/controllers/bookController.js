const bookModel = require("../models/bookModel")
const authorModel= require("../models/authorModel")




const createAuthor= async function (req, res) {
   let reqAuthor= req.body 
   let savedData= await authorModel.create(reqAuthor)
  res.send({msg: savedData})
}
const createBook= async function (req, res) {
  let data= req.body
  let savedData= await bookModel.create(data)
  res.send({msg: savedData})
}

const getBooksOfChetanBhagat= async function (req, res) {
  let authorDetails=await authorModel.find({author_name:"Chetan Bhagat"})
  let id = authorDetails[0].author_id
  let allBooks =await bookModel.find({author_id:id}).select({name:1})
    res.send({msg: allBooks})
 }

 const getAuthorOfTwoStates = async function (req, res) {
  let bookDetails = await bookModel.find({name:"Two states"})
let id = bookDetails[0].author_id
  let authorN = await authorModel.find({author_id:id}).select({author_name:1, _id:0})

let bkName = bookDetails[0].name
  let  updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {price:100},{new:true}).select({price:1, _id:0})

  res.send({msg:authorN, updatedPrice})
 
}

     
const authorsName = async function (req,res) {
  const booksId= await bookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
//   console.log(booksId)
//   const id = booksId.map(inp => inp.author_id)
//   let temp =[]
//   for(let i=0; i<id.length; i++) {
//       let x = id[i]
//       const author = await authorModel.find({author_id:x}).select({author_name:1, _id:0})
//       temp.push(author)
//   }

//  const authorName = temp.flat()

res.send({msg:booksId})
}
    
module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.getBooksOfChetanBhagat= getBooksOfChetanBhagat
module.exports.getAuthorOfTwoStates=getAuthorOfTwoStates
module.exports.authorsName= authorsName
