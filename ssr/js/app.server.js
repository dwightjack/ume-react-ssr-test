module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/js/app.server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Root__ = __webpack_require__("./app/assets/js/containers/Root/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ssr_templates_index_html__ = __webpack_require__("./ssr/templates/index.html");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ssr_templates_index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ssr_templates_index_html__);
if (!global._babelPolyfill) {
    //eslint-disable-line no-underscore-dangle
    __webpack_require__("babel-polyfill"); //eslint-disable-line global-require
}
/* eslint-disable import/first */


// import serialize from 'serialize-javascript';



 //eslint-disable-line
/* eslint-enable */

if (true) {
    __webpack_require__("source-map-support").install(); //eslint-disable-line global-require
}

var render = function render() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    //eslint-disable-line
    // const { url } = context;

    return new Promise(function (resolve) {
        var html = __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_Root__["a" /* default */], null));

        context.status = 200; //eslint-disable-line no-param-reassign

        resolve(__WEBPACK_IMPORTED_MODULE_3_ssr_templates_index_html___default.a.replace('<!-- app -->', html));
    });
};

/***/ }),

/***/ "./app/assets/js/containers/Root/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__root_scss__ = __webpack_require__("./app/assets/js/containers/Root/root.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__root_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__root_scss__);







var Root = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Root, _Component);

    function Root() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Root);

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
    }

    Root.prototype.render = function render() {

        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_4__root_scss___default.a.root },
            'Hello World'
        );
    };

    return Root;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Root);

/***/ }),

/***/ "./app/assets/js/containers/Root/root.scss":
/***/ (function(module, exports) {

module.exports = {
	"root": "root__root---1_Xsn"
};

/***/ }),

/***/ "./ssr/templates/index.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html><html class=\"no-js\" lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/><meta name=\"format-detection\" content=\"telephone=no\"/><script defer=\"defer\" src=\"/assets/vendors/modernizr/modernizr.js\"></script><link href=\"/assets/styles/app.032bd815c3.css\" rel=\"stylesheet\"></head><body><div id=\"app-root\"></div><script type=\"text/javascript\" src=\"/assets/js/manifest.f4d40185c841ce9644c4.js\" defer=\"defer\"></script><script type=\"text/javascript\" src=\"/assets/js/vendors.2551f32ce344d0b5e2d7.js\" defer=\"defer\"></script><script type=\"text/javascript\" src=\"/assets/js/app.9474487379a92b4e2a65.js\" defer=\"defer\"></script></body></html>"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./app/assets/js/app.server.js");


/***/ }),

/***/ "babel-polyfill":
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "source-map-support":
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ })

/******/ });
//# sourceMappingURL=app.server.js.map