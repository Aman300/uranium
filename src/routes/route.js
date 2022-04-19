const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batchController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/creatDeveloper", batchController.creatDeveloper)

router.post('/createBatch', batchController.createBatch)

router.get("/scholarship_developers", batchController.scholarship_developers)

router.get('/developers', batchController.developers)


module.exports = router;