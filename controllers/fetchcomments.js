const Comment = require('../models/Comments');

async function Fetchcomments(req, res) {
    try {
        const { blog_id } = req.query; // Changed from req.body to req.query for GET request
        if (!blog_id) {
            return res.status(400).json({
                msg: "Data toh pura Bhejo yrr."
            });
        }
        const comments = await Comment.find({ blog_id });
        res.status(200).json({
            msg: "Successfully fetched..",
            data: comments
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Comments fetching me dikkat h..."
        });
    }
}

module.exports = { Fetchcomments };
