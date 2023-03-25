const express = require("express")
const router = express.Router()


router.get("/myposts", async(req,res)=>{
    //    console.log(req.user)    
        try{
            const posts = await PostModel.find({author:req.user}).populate("author", "_id fullname")
          
            if(posts){
                return res.json({posts:posts})
            }
            return res.json({ message:"no posts available"})
        }
        catch(err){
            res.json({
                error:err.message
            })
    
        }
    })


 router.post("/createpost",async(req,res)=>{


 })