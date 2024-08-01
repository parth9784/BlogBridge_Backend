const User = require("../models/User");

async function Verifyotp(req, res) {
    try {
        const { otp, email } = req.body;
        if (!otp || !email) {
            return res.status(400).json({
                msg: "Data toh pura bhejo yrr...."
            });
        }

        const userotp = await User.findOne({ email });
        if (!userotp) {
            return res.status(400).json({
                msg: "User does not exist..."
            });
        }

        const realotp = userotp.otp;
        if (otp !== realotp || Date.now() > userotp.otpExpires) {
            return res.status(400).json({
                msg: "Invalid OTP or OTP has expired.."
            });
        }

        res.status(200).json({
            msg: "OTP verified successfully.."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "OTP verification me dikkat h.."
        });
    }
}

module.exports = { Verifyotp };
