const mongo=require("mongoose")
const scheme=new mongo.Schema({
    image:{
        type:String,
        default:"https://plus.unsplash.com/premium_photo-1661440230568-f5adc365e3f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
    },
    title:{
        type:String,
        trim:true,
        required:true

    },
    author:{
        type:mongo.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    content:{
        type:String,
        trim:true,
        required:true
    },desc:{
        type:String,
    },
    Like:[{
        type:mongo.Schema.Types.ObjectId,
        ref:"Likes"
    }],
    Comments:[{
        type:mongo.Schema.Types.ObjectId,
        ref:"Comments"
    }],
    Category:{
        type:String,
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    updated_at:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongo.model("Blogs",scheme)