const jwt = require("jsonwebtoken");

function checkAuth(req,res,next){
    try{
        let {authorization} = req.headers;
        if(!authorization){
           return  res.status(400).send({error:"Token not provided"});
        }
        let token = authorization.split(" ")[1];
        let {_id} = jwt.verify(token, "SECRETKEY");
        req.user = _id;
        next();
    }catch(err){
        res.status(400).send({error:"Token Invalid"});
    }
}

module.exports = checkAuth;