const user = require("../models/User");

async function Getuserinfo(req, res) {
    try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({
                msg: "User ID is missing."
            });
        }

        const User = await user.findById(id);
        if (!User) {
            return res.status(404).json({
                msg: "User not found."
            });
        }

        res.status(200).json({
            msg: "Successfully fetched user information.",
            person: User.username
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error fetching user information."
        });
    }
}

module.exports = { Getuserinfo };
