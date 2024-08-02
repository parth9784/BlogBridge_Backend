const Comment = require('../models/Comments');
const Blog = require('../models/Blogs');
const user = require("../models/User");

async function doComment(req, res) {
    try {
        const { content, blog_id } = req.body; 
        const userId = req.userid; 

        if (!userId || !content || !blog_id) {
            return res.status(400).json({ msg: 'Incomplete data provided.' });
        }

        const User = await user.findById(userId); 
        if (!User) {
            return res.status(404).json({ msg: 'User not found.' });
        }

        const newComment = await Comment.create({
            content,
            user: userId,
            blog_id,
            username: User.username  
        });

        const blog = await Blog.findById(blog_id);
        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found.' });
        }

        blog.Comments.push(newComment._id);
        await blog.save();

        res.status(200).json({ msg: 'Comment created successfully.', comment: newComment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error creating comment.' });
    }
}

module.exports = { doComment };
