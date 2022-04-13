const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type: String,
        required: true
    },
    year: Number,
    tags: [String],
    authorName: String, 
    totalPage: Number,

    prices: {
        indianPrice: String,
        europePrice: String,
    },
    stockAvailable: Boolean,
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
