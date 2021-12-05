const router = require('express').Router();
const { Post } = require('../../models/');
const authorization = require('../../utils/auth');

router.post('/', authorization, async (req, res) => {
    const data = req.body;

    try {
        const post = await Post.create({ ...data, userId: req.session.userId });
        res.json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', authorization, async (req, res) => {
    try {
        const [Rows] = Post.destroy({
            where: {
                id: req.params.id
            }
        });
    
        if (Rows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', authorization, async (req, res) => {
    try {
        const [Rows] = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        if (Rows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;