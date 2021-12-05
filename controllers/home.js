const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

router.get('/', async (req, res) => {
    try {
        const Info = await Post.findAll({
            include: [User]
        });

        const posts = Info.map((data) => data.get({ plain: true }));

        res.render('all-posts', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const Info = await Post.findByPk(req.params.id, {
            include: [
                User
                , {
                    model: Comment
                    , include: [User]
                }
            ]
        });

        if (Info) {
            const data = Info.get({ plain: true });

            res.render('single-post', { data });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;