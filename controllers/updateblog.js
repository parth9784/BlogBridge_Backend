const blog=require("../models/Blogs");

function getFirstWords(text, wordCount) {
    let words = text.split(' ');
    let firstWords = words.slice(0, wordCount);
    return firstWords.join(' ');
}

async function Updateblog(req,res){
    try{
        const {title,content,image,id}=req.body;
        const Blog=await blog.findById(id);
        let desc="";
        if(!Blog){
            res.status(400).json({
                msg:"Blog not found.."
            })
        }
        if(content){
            desc=getFirstWords(content,100);
        }
        Blog.title=title || Blog.title;
        Blog.content=content || Blog.content;
        if(content){
            Blog.desc=desc;
        }
        Blog.image=image || Blog.image;
        Blog.updated_at=Date.now();
        await Blog.save();
        res.status(200).json({
            msg:"Updated the Blog Successfully...."
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            msg:"Update me dikkat h..."
        })
    }
}
module.exports={Updateblog}