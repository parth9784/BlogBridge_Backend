const mongo=require("mongoose")
const scheme=new mongo.Schema({
    user:{
        type:mongo.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    content:{
        type:String,
        trim:true,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    blog_id:{
        type:mongo.Schema.Types.ObjectId,
        ref:"Blogs"
    }
})
module.exports=mongo.model("Comments",scheme)