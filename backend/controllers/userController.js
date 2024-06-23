const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const genToken = require("../createToken");

async function signup(req,res){
    const {fullname,email,password} = req.body;
    let user = await User.findOne({email});
    if(user){
        res.status(400).send({error:"Email already exist"});
    }else{
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password,salt);
        await User.create({email,fullname,password:hashedPassword});
        res.send({message:"Signup Success"});
    }
}

async function login(req,res){
    const {email,password} = req.body;
    let user = await User.findOne({email});
    if(user){
        if(await bcrypt.compare(password, user.password)){
            const token = genToken(user._id);
            res.send({message:"Login Succesfull",token});
        }else{
            res.status(400).send({message:"Incorrect password"});
        }
    }else{
        res.status(400).send({message:"Email not registered .Please sign up first"});
    }
}

exports.signup = signup;
exports.login = login;