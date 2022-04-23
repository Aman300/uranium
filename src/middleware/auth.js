const jwt = require("jsonwebtoken");
const userController = require("../controllers/userController")
const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
   

    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

    return decodedToken;


    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let userId = req.params.userId
    //userId for the logged-in user
    let decodeUserId =  authenticate.decodedToken
    if(userId != decodeUserId) return res.send({ status: false, msg: "error"})
    //return decodeUserId;

    next()
}

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;
