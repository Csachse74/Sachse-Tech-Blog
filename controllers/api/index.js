const router = require('express').Router();
const userRoutes = require('./user.js');
const postRoutes = require('./post.js');
const commentRoutes = require('./comment.js');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);
module.exports = router;