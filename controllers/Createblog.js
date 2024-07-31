const Blog = require("../models/Blogs");

function getFirstWords(text, wordCount) {
    let words = text.split(' ');
    let firstWords = words.slice(0, wordCount);
    return firstWords.join(' ');
}

async function Createblog(req, res) {
    try {
        const { title, image, content } = req.body;
        const userid = req.userid;
        
        if (!title || !content || !userid) {
            return res.status(400).json({
                msg: "Data toh pura bhejo yrr..."
            });
        }
        // console.log(image);
        let payload;
        const desc = getFirstWords(content, 100) + "....";
        // console.log(image)
        if (image) {
            payload = {
                image, title, content, author: userid, desc
            };
        } else {
            payload = {
                title, content, author: userid, desc
            };
        }

        const data = await Blog.create(payload);

        res.status(200).json({
            msg: "Blog Created Successfully....",
            data: data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Create Blog me dikkat h...."
        });
    }
}

module.exports = { Createblog };
