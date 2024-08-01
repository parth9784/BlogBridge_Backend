const {Mailer}=require("./Mailer")
const user=require("../models/User")
const otpGenerator = require('otp-generator');
async function Forgotpassword(req, res) {
  try {
    const {email} = req.body;
    if (!email) {
      return res.status(400).json({
        msg: "Please provide email",
      });
    }
    const userexist=await user.findOne({email});
    if(!userexist){
      res.status(400).json({
        msg:"User Does not Exist..."
      })
    }
    // console.log(userexist);
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false ,lowerCaseAlphabets:false});
    // console.log(typeof(otp))
    // console.log(otp)
    const subject="Your One Time Password for BlogBridge Password Reset ";
    const message=`Your One time Password for Password reset is ${otp}.It is valid upto 10 minutes.`
    Mailer(email,subject,message)
    userexist.otp=otp;
    userexist.otpExpires=new Date(Date.now() + 10 * 60 * 1000)
    await userexist.save();
    res.status(200).json({
      msg:"OTP sent Successfully..."
    })
  } catch (error) {
    console.error("Error in Nodemail:", error);
    res.status(500).json({
      msg: "Error in sending email",
    });
  }
}
module.exports = { Forgotpassword };
