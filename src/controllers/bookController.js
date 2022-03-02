const BookModel= require("../models/bookModel")
const PublisherModel= require("../models/publisherModel")
const AuthorModel= require("../models/authorModel")


const createBook= async function (req, res) {
  let data = req.body
  let authorId= req.body.author
  let publisherId = req.body.publisher
  let id = await AuthorModel.findById(authorId)
  let idP = await PublisherModel.findById(publisherId)
  


  if(data.hasOwnProperty("author")){
  if(id ===null ) 
   {
    res.send({mes:"author is not matched" })
    
   } else {
  if(data.hasOwnProperty("publisher")){
  if( idP === null)
   { 
     res.send({mes:"publisher is not matched" })
     }
  else { 
     let bookCreated = await BookModel.create(data) 
      res.send({mes:bookCreated})
     } 
    } else {
       res.send({ mes:" publisher is empty"})
       }
}      
  } else {
    res.send({ mes:" author is empty"})

  }


}


const allBook= async function (req, res) {
  let allbooks = await BookModel.find().populate("author").populate("publisher")
  res.send({ mes:allbooks})
}



module.exports.createBook= createBook
module.exports.allBook= allBook


