const jwt = require("jsonwebtoken");


const headerValidation = function (req, res, next){
    let token = req.headers["x-auth-token"];   
    console.log(token)
    if (Object.keys(token).length == 0) {
      return res.status(401).send({ status: false, msg: "token must be present" })
    } 
    let decodedToken = jwt.verify(token, "functionup");
    if (decodedToken.userId == req.params.userId){
      next() 
    } else {
      return res.status(403).send({ status: false, msg: "user is invalid" });
    } 
    } 
module.exports.headerValidation = headerValidation;