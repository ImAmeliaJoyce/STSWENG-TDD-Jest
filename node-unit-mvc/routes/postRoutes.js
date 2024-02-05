const router = require('express').Router();
const postController = require('../controllers/post.controller');

router.post('/', postController.create);
router.put('/:postId', postController.update);
router.get('/:postId', postController.findPost);
router.get('/', postController.getAllPosts);

module.exports = router;