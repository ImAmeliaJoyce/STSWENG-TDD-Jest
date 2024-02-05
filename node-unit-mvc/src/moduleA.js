const Post = require('../models/post.model.js');

async function findPost(postId) {
    try {
        const post = await Post.findById(postId).populate('author');
        return post; 
    } catch (error) {
        console.error('Error while finding post', error);
        throw error;
    }
}

module.exports = {
    findPost,
};