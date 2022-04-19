const developerModel = require("../models/developerModel")
const batchModel = require("../models/batchModel")

const creatDeveloper= async function (req, res) {
    let developer = req.body
    let value = await developerModel.create(developer)
    res.send({data: value})

}

const createBatch= async function (req, res) {
    let batch = req.body
    let value = await batchModel.create(batch)
    res.send({data: value})
    
}

const scholarship_developers= async function (req, res) {
    let value = await developerModel.find({gender: 'female' , percentage: {$gte: 70}})
    res.send({data: value})

}

// {percentage:{$gte: 50}}

//this part is not complet

const developers= async function (req, res) {
     let batch = req.query.percentage
     let developer = req.query.program
     let value = await developerModel.find({percentage: {$gte: batch}}).select({_id: 1})
     let Storevalue  = await batchModel.find({program:{$eq: developer}})

     //let finalData = await batchModel.find(value)
    res.send({data: value})

}
     
module.exports.creatDeveloper = creatDeveloper
module.exports.createBatch = createBatch

module.exports.scholarship_developers = scholarship_developers
module.exports.developers = developers
    