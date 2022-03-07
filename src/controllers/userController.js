const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let  user= req.body
    let header= req.headers.isfreeappuser
    user.isfreeAppUser=header

    let UserCreated = await UserModel.create(user)
    res.send({data:UserCreated})
}



module.exports.createUser= createUser


