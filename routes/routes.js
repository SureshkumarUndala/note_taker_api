const express = require("express")
const router = express.Router()
const PostModel = require("../models/postModel")

router.get("/mynotes", async(req,res)=>{
       console.log(req.user)    
        try{
            const posts = await PostModel.find({author:req.user})
          
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

    router.post("/createnote", async(req,res)=>{

        const {title, description} = req.body
        try{
            const newnotes = await PostModel.create({
                title:title,
                description:description,
                author:req.user

            }
             

                
            )
            return res.status(201).json(newnotes)
        }
        catch(err){
            res.status(500).json({
                error:err
            })
        }
    


    })


 module.exports = router