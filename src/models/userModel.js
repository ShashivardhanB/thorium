const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName : String,
    category: String,
    year: Number,
}, { timestamps: true });
const nameSchema = new mongoose.Schema( {
    name: String,
    books:[bookSchema] });
    module.exports = mongoose.model('name', nameSchema) 
    

module.exports = mongoose.model('book', bookSchema) 



