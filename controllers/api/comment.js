const router = require('express').Router();
const { Comment } = require('../../models/');
const authorization = require('../../utils/auth');

router.post('/', authorization, async (req, res) => {
    try {
        const comment = await Comment.create({
            ...req.body
            , userId: req.session.userId
        });
        res.json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;