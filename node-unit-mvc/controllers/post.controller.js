const PostModel = require('../models/post.model');
const ModuleA = require('../src/moduleA');
const PostController = {};

PostController.create = (req, res) => {
    return PostModel.createPost(req.body, (err, post) => {
        if (err) {
            return res.status(500).end();
        } else {
            return res.json(post);
        }
    })

};

PostController.update = (req, res) => {

};

// 2nd test case
PostController.findPost = (req, res) => {
    return ModuleA.findPost(req.body, (err, post) => {
        if (err) {
            return res.status(500).end();
        } else {
            return res.json(post);
        }
    })
};

PostController.getAllPosts = (req, res) => {

};

module.exports = PostController;