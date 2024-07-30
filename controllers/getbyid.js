const blog = require("../models/Blogs");

async function getbyid(req, res) {
    try {
        const { blogid } = req.body;
        if (!blogid) {
            return res.status(400).json({
                msg: "Data toh pura bhejo yrr...."
            });
        }
        const data = await blog.findById(blogid).populate('Comments').populate('Like');
        if (!data) {
            return res.status(404).json({
                msg: "Data not found..."
            });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error("Error in getbyid:", error);
        res.status(500).json({
            msg: "Getbyid me dikkat h..."
        });
    }
}

module.exports = { getbyid };
