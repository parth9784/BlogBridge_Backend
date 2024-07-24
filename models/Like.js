const mongo=require("mongoose")
const scheme=new mongo.Schema({
    user:{
        type:mongo.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    blog_id: {
        type: mongo.Schema.Types.ObjectId,
        ref: "Blogs",
        required: true
    },
})
module.exports=mongo.model("Likes",scheme)