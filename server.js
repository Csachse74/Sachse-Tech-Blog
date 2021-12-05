const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const helper = require('./utils/helper');
const controller = require('./controllers/');
const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require('./config/config');
const SequelizeSession = require('connect-session-sequelize')(session.Store);
const sessionStorage = {
    secret: 'secret sachse'
    , saveUninitialized: true
    , resave: false
    , cookie: {}
    , store: new SequelizeSession({
        db: sequelize
    })
};

app.use(session(sessionStorage));
const handlebar = handlebars.create({ helper });

app.engine('handlebars', handlebar.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(controller);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
});