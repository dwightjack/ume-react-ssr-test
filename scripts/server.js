const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const address = require('ip').address();
const middlewares = require('./middlewares');
const localhost = require('../config/hosts').local;
const { render } = require('../ssr/js/app.server');

const app = express();

app.use(history());
app.use(express.static(path.join(process.cwd(), 'public')));

if (middlewares.length > 0) {
    middlewares.forEach((middleware) => app.use(middleware));
}

app.get('*', (req, res) => {
    const context = { url: req.url };

    render(context).then((html) => {
        res.end(html);
    });
});

app.listen(localhost.port, () => {
    console.log(`Listening on http://${address}:${localhost.port}`); //eslint-disable-line no-console
});