const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    product_image: [{
        filename: String
    }
    ]
})

const ProductModel = mongoose.model("product",ProductSchema)
module.exports = ProductModel