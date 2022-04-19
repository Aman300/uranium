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
     let percentage = req.query.percentage
     let program = req.query.program
     let value = await batchModel.find({name:program}).select({_id: 1})

     let store = []
     for(let i = 0; i < value.length; i++){
         let objid = value[i]._id
         store.push(objid)
     }
     let fetchData  = await developerModel.find({$and: [ {batch:{$in: store}},{percentage:{$gt:percentage}} ]}).populate('batch')

     //let finalData = await batchModel.find(value)
    res.send({data: fetchData})

}
     
module.exports.creatDeveloper = creatDeveloper
module.exports.createBatch = createBatch

module.exports.scholarship_developers = scholarship_developers
module.exports.developers = developers
    