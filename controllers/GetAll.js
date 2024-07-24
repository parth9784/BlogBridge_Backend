const blog=require("../models/Blogs");
async function GetAll(req,res){
    try{
        const data= await blog.find()
        .populate('Comments')
        .populate('Like');
        if(!data){
            res.status(400).json({
                msg:"No data Found"
            })
        }
        res.status(200).json(data)

    }
    catch(error){
        console.error(error);
        res.status(500).json({
            msg:"GetAll me dikkat h..."
        })
    }
}
module.exports={GetAll}