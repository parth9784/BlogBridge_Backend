const Blog = require('../models/Blogs');

async function Blog_user(req, res) {
    try {

        if (!req.userid) {
            return res.status(400).json({ msg: 'User ID is required.' });
        }
        const data = await Blog.find({ author: req.userid })
            .populate('Comments')
            .populate('Like');     

        if (data.length === 0) {
            return res.status(400).json({ msg: 'No blogs found for this user.' });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error retrieving blogs.' });
    }
}

module.exports = { Blog_user };
