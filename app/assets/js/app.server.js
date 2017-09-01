if (!global._babelPolyfill) { //eslint-disable-line no-underscore-dangle
    require('babel-polyfill'); //eslint-disable-line global-require
}
/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';

import tmpl from './tmpl/index.ejs';
/* eslint-enable */

if (__PRODUCTION__ === false) {
    require('source-map-support').install(); //eslint-disable-line global-require
}

export const renderView = (path, model = {}, resource, callback) => {
    const history = createHistory(path);
    const modelState = typeof model === 'string' ? JSON.parse(model) : model;
    const result = {
        html: null,
        status: 404,
        redirect: null
    };
    match(
        { history, routes: getRoutes(), location: path },
        (error, redirectLocation, renderProps) => {
            if (redirectLocation) {
                const { pathname, search } = redirectLocation;
                result.redirect = pathname + search;
                callback(error, result, resource);
            } else if (error) {
                result.status = 500;
                callback(error, result, resource);
            } else if (renderProps) {
                // if this is the NotFoundRoute, then return a 404
                const isNotFound = renderProps.routes.find((route) => route.status === 404);
                const { params } = renderProps;

                result.status = isNotFound ? 404 : 200;

                Promise
                    .all(renderProps.routes.map(({ component }) => {
                        if (component && (typeof component.fetchData === 'function')) {
                            return component.fetchData({ params });
                        }
                        return {};
                    }))
                    .then((results) => {

                        const initialState = Object.assign({}, modelState, ...results);

                        const component = <RouterContext {...renderProps} />;

                        const content = component ? ReactDOM.renderToString(component) : '';
                        const head = Helmet.rewind();
                        const htmlAttrs = head.htmlAttributes.toString();
                        const meta = [
                            head.base.toString(),
                            head.title.toString(),
                            head.meta.toString(),
                            head.link.toString(),
                            head.script.toString()
                        ].join('');

                        result.html = tmpl({
                            meta,
                            content,
                            tracking: '',
                            htmlAttrs,
                            initialState: `<script>window.__data=${serialize(initialState, { isJSON: true })};</script>`
                        });
                        callback(error, result, resource);
                    });
            } else {
                //default fallback... page not found
                result.status = 404;
                callback(error, result, resource);
            }
        });
};

//compat with next SSR middleware version
export default renderView;