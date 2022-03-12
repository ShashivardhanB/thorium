const res = require("express/lib/response");
const { use } = require("express/lib/router");
const jwt = require("jsonwebtoken");
const { findByIdAndUpdate } = require("../models/userModel");
const userModel = require("../models/userModel");
const axios = require('axios');



const createUser = async function (req, res) {
  try{
  let data = req.body;
  if(Object.keys(data).length != 0) {
  let savedData = await userModel.create(data);
  res.status(201).send({ msg: savedData });
  } else {
    return res.status(400).send({ mes:"data not found"})
  }
  }catch(err){
    res.status(400).send({mes:err.message})
  }
     
};

const loginUser = async function (req, res) {
  let userName = data.emailId;
  let password = data.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (Object.keys(user).length != 0){
    let token = jwt.sign({ userId: user._id,batch: "thorium", organisation: "FUnctionUp"},"functionup" );
    res.status(200).send({ status: true, data: token }); 
  } else {
    res.status(400).send({mes:"The email address  you entered isn't connected to an account."})
  }

};

const getUserData = async function (req, res) {
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
 
  res.status(200).send({ status: true, data: userDetails });
} catch(err){
  res.status(500).send({err:err.message})
}
};

const updateUser = async function (req, res) {
  try{
  let Id = req.params.userId
  let data = req.body;
  let updatedUser = await userModel.findByIdAndUpdate({ _id: Id },{ $set: data },{ new: true });
  res.status(200).send({status:true,mes:updatedUser})
} catch(err){
  res.status(500).send({err:err.message})
}
};

const deleteUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let deleteUser = await userModel.findByIdAndUpdate({_id:userId }, {$set :{isDeleted:true }}, {new : true});
  
    return res.status(200).send({ status: true, data: deleteUser })
  } catch(err){
    res.status(500).send({err:err.message})
  }

} ;
const posts = async function (req, res) {
try{
 let message = req.body.message;
  let userId = req.params.userId;
  let user = await userModel.findById({_id:userId})
  
  let  posts = user.posts
  posts.push(message)
  console.log(posts)
  let updatedUser = await userModel.findByIdAndUpdate({_id:userId},{$set:{posts}},{new:true})
  res.status(200).send({ status: true, data:updatedUser });
}catch(err){
  return res.status(500).send({status:false,mes:err.message})
}

  

};






module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser= deleteUser;
module.exports.posts = posts;
