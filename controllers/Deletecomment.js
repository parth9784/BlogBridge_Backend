const Comment = require('../models/Comments');

async function DeleteComment(req, res) {
    try {
        const { comment_id } = req.body; 

        if (!comment_id) {
            return res.status(400).json({
                msg: "Comment ID is required."
            });
        }
        const result = await Comment.findByIdAndDelete(comment_id);

        if (!result) {
            return res.status(404).json({
                msg: "Comment not found."
            });
        }

        res.status(200).json({
            msg: "Comment deleted successfully."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error deleting comment."
        });
    }
}

module.exports = { DeleteComment };
