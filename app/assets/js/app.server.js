if (!global._babelPolyfill) { //eslint-disable-line no-underscore-dangle
    require('babel-polyfill'); //eslint-disable-line global-require
}
/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom/server';
// import serialize from 'serialize-javascript';

import Root from './containers/Root';

import tmpl from 'ssr-templates/index.html'; //eslint-disable-line
/* eslint-enable */

if (__PRODUCTION__ === false) {
    require('source-map-support').install(); //eslint-disable-line global-require
}

export const render = (context = {}) => { //eslint-disable-line
    // const { url } = context;

    return new Promise((resolve) => {
        const html = ReactDOM.renderToString(<Root />);

        context.status = 200; //eslint-disable-line no-param-reassign

        resolve(tmpl.replace('<!-- app -->', html));
    });
};