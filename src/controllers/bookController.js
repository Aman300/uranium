
const NewBookModel= require("../models/NewBookModel")
const NewAuthorModel= require("../models/NewAuthorModel")
const NewPublisherModel= require("../models/NewPublisherModel")
//const { validate } = require("../models/NewBookModel")

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
    if(book.author_id == book.author_id && book.publisher_id == book.publisher_id){
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
const findPubisher = async function (req, res) {
    let book = await NewBookModel.find().populate(['author_id','publisher_id'])
    let data = [];
    for (let i = 0; i < book.length; i++) {
        const element = book[i];
        if(element.author_id){
            element.author_id.rating += 10
        } 
        data.push(element.author_id.rating)
    }
    res.send({data: data})
}

const ratingIncrease = async function (req, res) {
    let book = await NewBookModel.find().populate(['author_id','publisher_id'])
    let data = [];
    for (let i = 0; i < book.length; i++) {
        const element = book[i];
        if(element.author_id.rating > 3.5){
            element.author_id.rating += 10
        }
        data.push(element.author_id.rating)
    }
    res.send({data: data})
}
module.exports.createBook= createBook
module.exports.createPublisher= createPublisher
module.exports.createAuthor= createAuthor
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.findPubisher = findPubisher
module.exports.ratingIncrease = ratingIncrease
