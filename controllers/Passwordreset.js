const user = require("../models/User");
const bcrypt = require("bcrypt");

async function Passwordreset(req, res) {
    try {
        const { password, email } = req.body;
        if (!password || !email) {
            return res.status(400).json({
                msg: "Data toh pura bhejo yrr..."
            });
        }

        const user_detail = await user.findOne({ email });
        if (!user_detail) {
            return res.status(400).json({
                msg: "User does not exist..."
            });
        }

        const hashed = await bcrypt.hash(password, 10);
        user_detail.password = hashed;
        await user_detail.save();

        res.status(200).json({
            msg: "Password Reset Successful.."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Password Reset me dikkat h..."
        });
    }
}

module.exports = { Passwordreset };
