const BookModel= require("../models/bookModel")
const authorsModel= require("../models/authorsModel")
const bookModel = require("../models/bookModel")



// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE

    const createBook= async function (req, res) {   
        let data= req.body 
        let savedData= await BookModel.create(data)
        res.send({msg: savedData})
    }
    const createAuthor= async function (req, res) { 
        let data= req.body
        let creatauthor= await authorsModel.create(data)
        res.send({msg: creatauthor})
    }
    const AllBook= async function (req, res) {  
       // let data= req.body  
        let writenbook = await authorsModel.find({author_name: "Chetan Bhagat"})
        let w = writenbook[0].author_id;
        let getdata= await BookModel.find({author_id: w}).select({name: 1})
        res.send({msg: getdata})
    }

    const updateBookPrice= async function (req, res) {   
        let data = {price: 100}
        let getauthorsdata= await bookModel.findOneAndUpdate( 
                    { name: "Two states"},//condition
                     { $set: data }, //update in data
                     { new: true , upsert: true}).select({name: 1, _id: 0, price: 1, 
                        author_id :1}) //findOneAndUpdate({$set: {price: 200}}, ({ new: true , upsert: true}))   
        res.send({msg: getauthorsdata})
    }

    const AuthorName = async function (req, res) {   
            let getauth = await bookModel.find({price: {$gte: 50,$lte: 100}}).select({author_id: 1, _id: 0})
            let id = getauth.map(inp => inp.author_id); // [1,2,3,4,5]
            let temp =[]
            for(let i = 0; i < id.length; i++ ){
                let x = id[i];
                const author = await authorsModel.find({author_id: x}).select({author_name: 1, _id: 0});
                temp.push(author);
            }
            const authorName  = temp.flat()

        res.send({msg: authorName})
    }



module.exports.createBook= createBook
module.exports.AllBook= AllBook

module.exports.createAuthor= createAuthor
module.exports.updateBookPrice= updateBookPrice

module.exports.AuthorName= AuthorName


// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
