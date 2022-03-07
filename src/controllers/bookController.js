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

const updateBooks = async function (req, res) {
 
    let hardCoverPublishers = await PublisherModel.find({
      name: { $in: ["Penguin", "sri"] },
    });
    let publisherIds = hardCoverPublishers.map((p) => p._id); //publisherIds is an array of publisher _id values
  
      await BookModel.updateMany(
      { publisher: { $in: publisherIds } },
      { isHardCover: true }
    );

let highRatedAuthors = await AuthorModel.find({ rating: { $gt: 3.5 } });
  let authorIds = highRatedAuthors.map((a) => a._id);

  await BookModel.updateMany(
    { author: { $in: authorIds } },
    { $inc: { price: 10 } }
  );

  let updatedBooks = await BookModel.find();
  res.send({ updatedBookCollection: updatedBooks });
};


module.exports.createBook= createBook
module.exports.allBook= allBook
module.exports.updateBooks= updateBooks
