const blog = require("../models/Blogs");
const user=require("../models/User");
async function getbyid(req, res) {
    try {
        const { blogid } = req.body;
        if (!blogid) {
            return res.status(400).json({
                msg: "Data toh pura bhejo yrr...."
            });
        }
        const data = await blog.findById(blogid).populate('Comments').populate('Like');
        const author=data.author;
        const person=await user.findById(author);
        let resdata={...data._doc,person:person.username}
        if (!data) {
            return res.status(404).json({
                msg: "Data not found..."
            });
        }
        res.status(200).json(resdata);
    } catch (error) {
        console.error("Error in getbyid:", error);
        res.status(500).json({
            msg: "Getbyid me dikkat h..."
        });
    }
}

module.exports = { getbyid };
