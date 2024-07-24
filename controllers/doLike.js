const like=require("../models/Like")
const Blog=require("../models/Blogs")
async function doLike(req,res){
    try{
        const {blog_id}=req.body
        const userid=req.userid;
        if(!userid||!blog_id){
            res.status(400).status({
                msg:"Data toh pura bhejo yrr...."
            })
        }
        const data=await like.create({
            user:userid,blog_id
        })
        const blog = await Blog.findById(blog_id);
        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found.' });
        }
        blog.Like.push(data._id);
        await blog.save();
        res.status(200).json({
            msg:"Like Created Succesfully...."
        })
    }
    catch(error){
        console.error(error)
        res.status(500).json({
            msg:"Like me dikkat h.."
        })
    }
}
module.exports={doLike}