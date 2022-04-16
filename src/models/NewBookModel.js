const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    
    name: String,
    author_id: {
        type: ObjectId,
        ref: "NewAuthor",
        required:true
    }, 
    price: Number,
    ratings: Number,
    publisher_id: {
        type: ObjectId,
        ref: "NewPublisher",
        required:true
    }, 
    
     
		//author:"61951bfa4d9fe0d34da86829",
		//publisher: "61951bfa4d9fe0d34da84523"


}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)
