const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  console.log(user)
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id,
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup"
  );
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let Id = req.params.userId
  let data = req.body;
  
  let user = await userModel.findByIdAndUpdate(
    { _id: Id },
    { $set: data },
    { new: true }
  );
  console.log(user)
  if (!user) {
    return res.send("No such user exists");
  }
  res.send({mes:user})
};

const deleteUser = async function (req, res) {

  let userId = req.params.userId;
  let deleteUser = await userModel.findByIdAndUpdate({_id:userId }, {$set :{isDeleted:true }}, {new : true});
  res.send({ status: true, data: deleteUser });

}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser= deleteUser;
