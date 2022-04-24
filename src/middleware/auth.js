const jwt = require("jsonwebtoken");
// const userController = require("../controllers/userController")
// const authenticate = function(req, res, next) {
//     //check the token in request header
//     //validate this token
   
//     let token = req.headers["x-auth-token"];
//     if (!token) token = req.headers["x-auth-token"];

//     //If no token is present in the request header return error
//     if (!token) return res.send({ status: false, msg: "token must be present" });

//     let decodedToken = jwt.verify(token, "functionup-thorium");
//     if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });

//     return decodedToken;


//     next()
// }

// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     let userId = req.params.userId
//     //userId for the logged-in user
//     let header =  req.headers;
//     console.log(header);
//     let decodeUserId =  authenticate(req, res, next)
//     if(userId != decodeUserId) return res.send({ status: false, msg: "error"})
//     //return decodeUserId;

//     next()
// }

const authorise = async function (req, res, next) {
    //let message = req.body.message

    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    let userToBeModified = req.params.userId  
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId  

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) 
    return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    next()
};

// module.exports.authenticate = authenticate;

module.exports.authorise = authorise;

// module.exports.postMessage = postMessage;
