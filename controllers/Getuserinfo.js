const user = require("../models/User");

async function Getuserinfo(req, res) {
    try {
        const { userid } = req; 

        if (!userid) {
            return res.status(400).json({
                msg: "User ID is missing."
            });
        }

        const User = await user.findById(userid);
        if (!User) {
            return res.status(404).json({
                msg: "User not found."
            });
        }

        res.status(200).json({
            msg: "Successfully fetched user information.",
            user_id: userid,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error fetching user information."
        });
    }
}

module.exports = { Getuserinfo };
