const mongoose = require("mongoose")
const Schema  = mongoose.Schema
const ObjectId = Schema.ObjectId
const postModel = require("./postModel")

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true

    },
    repeatpassword:{
        type:String,
    
    }


    

   

}, {timestamps:true})


const UserModel = mongoose.model("UserModel", userSchema)
module.exports = UserModel