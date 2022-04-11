const bookModule = require("../models/bookModel");

const createBook= async function (req, res) {
    let data = req.body
    let savedData= await bookModule.create(data)
    res.send({msg: savedData})
}

const getbooksData= async function (req, res) {
    let allbook= await bookModule.find()
    res.send({msg: allbook})
}

module.exports.createBook = createBook;
module.exports.getbooksData = getbooksData;

