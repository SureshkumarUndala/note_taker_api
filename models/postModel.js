const mongoose = require("mongoose")
const Schema  = mongoose.Schema

const ObjectId = mongoose.Schema.ObjectId


const postSchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true

    },
    author:{
        type:ObjectId,
        ref:"UserModel"
     
    }
 
    

   

}, {timestamps:true})


const Posts = mongoose.model("Post", postSchema)
module.exports = Posts