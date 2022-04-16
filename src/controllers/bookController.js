
const NewBookModel= require("../models/NewBookModel")
const NewAuthorModel= require("../models/NewAuthorModel")
const NewPublisherModel= require("../models/NewPublisherModel")

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
    let bookCreated = await NewBookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await NewBookModel.find().populate(['author_id','publisher_id'])
    res.send({data: specificBook})

}

const getBooksAllCondition = async function (req, res) {
    let data = req.body
    console.log(data);
    //The authorId is present in the request body. If absent send an error message that this detail is required
    let specificBook = await NewBookModel.find().select({data})
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.createPublisher= createPublisher
module.exports.createAuthor= createAuthor
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

module.exports.getBooksAllCondition = getBooksAllCondition
