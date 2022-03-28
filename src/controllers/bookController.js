
const bookModel = require('../models/bookModel')
const userModel = require('../models/userModel')
const mongoose = require('mongoose')


const dateRegex = /^\d{4}\-\d{2}\-\d{2}$/;


const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
  }
  const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}
const isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
  }


const createBook = async function(req,res){
    try{

    let requestBody = req.body 

 if(!isValidRequestBody(requestBody)){
     return res.status(400).send({status:false,message:'Invalid request parameters. Please provide book detalls'})
 }
 const {title,excerpt,userId,ISBN,category,subCategory,releasedAt} = requestBody

 if(!isValid(title)){
     return res.status(400).send({status:false,message:"please enter title"})
 }
 if(!isValid(excerpt)){
    return res.status(400).send({status:false,message:"please enter expcerpt"})
}
if(!isValid(userId)){
    return res.status(400).send({status:false,message:"please enter userId"})
}
if(!isValid(ISBN)){
    return res.status(400).send({status:false,message:"please enter ISBN"})
}
if(!isValid(category)){
    return res.status(400).send({status:false,message:"please enter category"})
}
if(!isValid(subCategory)){
    return res.status(400).send({status:false,message:"please enter subCategory"})
}
if(!isValid(releasedAt)){
    return res.status(400).send({status:false,message:"please enter releasedAt"})
}

if(!isValidObjectId(userId)){
    return res.status(400).send({status:false,message:"please enter valid userId"})
}

if(!dateRegex.test(releasedAt)){
    return res.status(400).send({status:false,message:"please provide releasedAt in YYYY-MM-DD format"})
}

let isTitleAlreadyExist = await bookModel.findOne({title})
if(isTitleAlreadyExist){
    return res.status(400).send({status:false,message:'title is already exists '})
}
let isISBNAlreadyExist = await bookModel.findOne({ISBN})
if(isISBNAlreadyExist){
    return res.status(400).send({status:false,message:'ISBN is already exists '})
}


let isUserIdExist = await userModel.findOne({_id:userId})
if(!isUserIdExist){
    return res.status(400).send({status:false,message:'please enter correct userId'})
}

let bookCreation = await bookModel.create(requestBody)
return res.status(201).send({status:true,message:"success",data:bookCreation})


    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }

}

// ----------------------------------------------------------------------------------------------------------
// - Returns all books in the collection that aren't deleted. Return only book _id, title, excerpt, userId, category, releasedAt, reviews field. Response example [here](#get-books-response)
// - Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure) 
// - If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure) 
// - Filter books list by applying filters. Query param can have any combination of below filters.
//   - By userId
//   - By category
//   - By subcategory
//   example of a query url: books?filtername=filtervalue&f2=fv2
// - Return all books sorted by book name in Alphabatical order

const getBooks = async function(req,res){
    try{
        let requestQuery = req.query
        if(!requestQuery){
            return res.status(400).send({status:false,ERROR:"please provide the query"})
        }
        const {userId,category,subCategory} = requestQuery
        let finalFilter = []

        if(userId){
            if(isValidObjectId(userId))  finalFilter.push({userId})
            
        }
        if(category){
            finalFilter.push({category})
        }
        if(subCategory){
            finalFilter.push({subCategory})
        }
        console.log(finalFilter)


        let findBooks = await bookModel.find({$and:[{$or:finalFilter},{isDeleted:false}]}).sort({title:1}).select({ISBN:0,subCategory:0,isDeleted:0,deletedAt:0,__v:0})
        
        if(!findBooks.length){
            return res.status(400).send({status:false,message:"No Books found"})
        }
        res.status(200).send({status:false,message:"Book List",data:findBooks})

    }catch(err){
        return res.status(500).send({status:true,ERROR:err.message})
    }

}








module.exports={
    createBook,getBooks
}