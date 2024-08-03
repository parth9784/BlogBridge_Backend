const Blog = require('../models/Blogs');

async function Blog_user(req, res) {
    try {
        if (!req.userid) {
            return res.status(400).json({ msg: 'User ID is required.' });
        }

        const blogs = await Blog.find({ author: req.userid })
            .populate('comments') 
            .populate('likes'); 

        if (blogs.length === 0) {
            return res.status(200).json({ msg: 'No blogs found for this user.' });
        }

        res.status(200).json(blogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error retrieving blogs.' });
    }
}

module.exports = { Blog_user };

