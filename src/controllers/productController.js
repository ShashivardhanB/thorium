const ProductModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let product= req.body
    let productCreated = await ProductModel.create(product)
    res.send({data: productCreated})
}



module.exports.createProduct= createProduct