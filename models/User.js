const mongo=require("mongoose")
const scheme=new mongo.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    username:{
        type:String,
        required:true
    },
    otp:{
        type:String
    },
    otpExpires:{
        type:Date
    }
})
module.exports=mongo.model("User",scheme);