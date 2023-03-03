function errorhandler(err,req,res,next){
    if(err.name === "UnauthorizedError"){
        // jwt authentication error 
        return res.status(401).json({Message:"The User is not authorized"});
    }

    if(err.name === "ValidationError"){
        // Validation error 
        return res.status(401).json({Message: "Error"});
    }

    // default to 500 server error
    return res.status(500).json(err)
}

module.exports=errorhandler