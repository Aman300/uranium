
const NewBookModel= require("../models/NewBookModel")
const NewAuthorModel= require("../models/NewAuthorModel")
const NewPublisherModel= require("../models/NewPublisherModel")
const { validate } = require("../models/NewBookModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await NewPublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await NewAuthorModel.create(author)
    res.send({data: authorCreated})
}

const createBook= async function (req, res) {
    let book = req.body
    if(book.author_id == "625a48bb59bb1cc23aa5f37f" && book.publisher_id == "625a48ef59bb1cc23aa5f381"){
        let bookCreated = await NewBookModel.create(book)
        res.send({data: bookCreated})
    }else{
        res.send({mes: 'error'})
    }
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await NewBookModel.find().populate(['author_id','publisher_id'])
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.createPublisher= createPublisher
module.exports.createAuthor= createAuthor
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
