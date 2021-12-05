const router = require('express').Router();
const { Post } = require('../models/');
const authorization = require('../utils/auth');

router.get('/', authorization, async (req, res) => {
    try {
        const Info = await Post.findAll({
            where: {
                userId: req.session.userId
            }
        });
        const Data = Info.map((data) => data.get({ plain: true }));
        res.render('all-posts-admin', {
            layout: 'dashboard'
            , Data
        });
    } catch (err) {
        res.redirect('login');
    }
});

router.get('/new', authorization, (req, res) => {
    res.render('new-post', {
        layout: 'dashboard'
    });
});

router.get('/edit/:id', authorization, async (req, res) => {
    try {
        const Info = await Post.findByPk(req.params.id);
        if (Info) {
            const Data = Info.get({ plain: true });

            res.render('edit-post', {
                layout: 'dashboard'
                , Data
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;