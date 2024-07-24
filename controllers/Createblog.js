const blog=require("../models/Blogs")

async function Createblog(req,res){
    try{
        const {title,image,content}=req.body;
        const userid=req.userid;
        if(!title||!content||!userid){
            res.status(400).json({
                msg:"Data toh pura bhejo yrr..."
            })
        }
        let payload;
        if(image){
            payload={
                image,title,content,author
            }
        }
        else{
            payload={
                title,content,author:userid
            }
        }
        const data=blog.create(payload);
        res.status(200).json({
            msg:"Blog Created Sucessfully...."
        })
    }
    catch(error){
        console.error(error)
        res.status(500).json({
            msg:"Create Blog me dikkat h...."
        })
    }
}
module.exports={Createblog}