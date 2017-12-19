(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 12px 24px 12px 20px;\n  margin: 2em 0;\n  border-left: 4px solid;\n  position: relative;\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  border-left-color: #3c763d;\n  background-color: rgba(241,249,241,.83);\n\n  &::before {\n    background-color: #3c763d;\n    content: "!";\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    color: #fff;\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: 700;\n    font-family: Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;\n  }\n'], ['\n  padding: 12px 24px 12px 20px;\n  margin: 2em 0;\n  border-left: 4px solid;\n  position: relative;\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  border-left-color: #3c763d;\n  background-color: rgba(241,249,241,.83);\n\n  &::before {\n    background-color: #3c763d;\n    content: "!";\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    color: #fff;\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: 700;\n    font-family: Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;\n  }\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _unified = __webpack_require__(15);

var _unified2 = _interopRequireDefault(_unified);

var _remarkParse = __webpack_require__(16);

var _remarkParse2 = _interopRequireDefault(_remarkParse);

var _remarkRehype = __webpack_require__(17);

var _remarkRehype2 = _interopRequireDefault(_remarkRehype);

var _remarkFrontmatter = __webpack_require__(18);

var _remarkFrontmatter2 = _interopRequireDefault(_remarkFrontmatter);

var _rehypeRaw = __webpack_require__(19);

var _rehypeRaw2 = _interopRequireDefault(_rehypeRaw);

var _rehypeSlug = __webpack_require__(20);

var _rehypeSlug2 = _interopRequireDefault(_rehypeSlug);

var _rehypeAutolinkHeadings = __webpack_require__(21);

var _rehypeAutolinkHeadings2 = _interopRequireDefault(_rehypeAutolinkHeadings);

var _remarkCollapse = __webpack_require__(22);

var _remarkCollapse2 = _interopRequireDefault(_remarkCollapse);

var _remarkToc = __webpack_require__(23);

var _remarkToc2 = _interopRequireDefault(_remarkToc);

var _reactify = __webpack_require__(24);

var _reactify2 = _interopRequireDefault(_reactify);

var _Wrapper = __webpack_require__(27);

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Code = __webpack_require__(28);

var _Code2 = _interopRequireDefault(_Code);

var _Pre = __webpack_require__(29);

var _Pre2 = _interopRequireDefault(_Pre);

var _Icon = __webpack_require__(30);

var _Icon2 = _interopRequireDefault(_Icon);

var _Link = __webpack_require__(33);

var _Link2 = _interopRequireDefault(_Link);

var _Tip = __webpack_require__(3);

var _Tip2 = _interopRequireDefault(_Tip);

var _Info = __webpack_require__(34);

var _Info2 = _interopRequireDefault(_Info);

var _Warning = __webpack_require__(35);

var _Warning2 = _interopRequireDefault(_Warning);

var _Danger = __webpack_require__(36);

var _Danger2 = _interopRequireDefault(_Danger);

var _Highlight = __webpack_require__(37);

var _Highlight2 = _interopRequireDefault(_Highlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Contents from './Contents'

var makeComponents = function makeComponents(options) {
  return {
    a: _Link2.default,
    i: _Icon2.default,
    tip: _Tip2.default,
    info: _Info2.default,
    warning: _Warning2.default,
    danger: _Danger2.default,
    highlight: _Highlight2.default,
    code: (0, _Code2.default)(options),
    pre: (0, _Pre2.default)(options)
  };
};

var linkHAST = {
  type: 'element',
  tagName: 'i',
  properties: { className: 'link' }
};

function getFrontMatter() {
  return function (dir) {
    return console.log(dir.children.find(function (c) {
      return c.type === 'yaml';
    }));
  };
}

var makeProcessor = function makeProcessor(options) {
  return (0, _unified2.default)().use(_remarkParse2.default, { highlightLines: true }).use(_remarkFrontmatter2.default, ['yaml']).use(getFrontMatter).use(_remarkCollapse2.default, { test: 'collapse' }).use(_remarkToc2.default).use(_remarkRehype2.default, { allowDangerousHTML: true }).use(_rehypeRaw2.default).use(_rehypeSlug2.default).use(_rehypeAutolinkHeadings2.default, { content: linkHAST }).use(_reactify2.default, {
    createElement: _react2.default.createElement,
    components: makeComponents(options)
  });
};

var Markdown = function (_PureComponent) {
  _inherits(Markdown, _PureComponent);

  function Markdown() {
    _classCallCheck(this, Markdown);

    return _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).apply(this, arguments));
  }

  _createClass(Markdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          source = _props.source,
          _props$config = _props.config,
          config = _props$config === undefined ? {} : _props$config;


      var options = {
        showLineNumbers: config.showLineNumbers,
        highlighter: config.highlighter,
        theme: config.theme
      };

      var processor = makeProcessor(options);
      var processed = processor.processSync(source);

      // if (config.tableOfContents) {
      //   const toc = <Contents toc={content.toc} key="markdown-toc" />
      //   content.tree.unshift(toc)
      // }

      return _react2.default.createElement(
        _Wrapper2.default,
        { className: 'markdown' },
        processed.contents
      );
    }
  }]);

  return Markdown;
}(_react.PureComponent);

exports.default = Markdown;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/prism");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(10);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.hydrate(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactStaticRoutes = __webpack_require__(12);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _nprogress = __webpack_require__(41);

var _nprogress2 = _interopRequireDefault(_nprogress);

var _Sidebar = __webpack_require__(42);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Toggle = __webpack_require__(49);

var _Toggle2 = _interopRequireDefault(_Toggle);

__webpack_require__(51);

var _Wrapper = __webpack_require__(52);

var _Wrapper2 = _interopRequireDefault(_Wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sidebarIsOpen: true, //window ? window.innerWidth > 700 : true,
      width: 500 // window && window.innerWidth,
    }, _this.updateDimensions = function (e) {
      // TODO: Debounce this
      _this.setState({
        width: e.target.innerWidth,
        sidebarIsOpen: e.target.innerWidth > 700
      });
    }, _this.handleSidebarToggle = function () {
      _this.setState({
        sidebarIsOpen: !_this.state.sidebarIsOpen
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactStatic.Router.subscribe(function (loading) {
        if (loading) {
          _nprogress2.default.start();
        } else {
          _nprogress2.default.done();
          window.scrollTo(0, 0);
        }
      });

      // if (config.languages) {
      //   config.languages.forEach(l => {
      //     try {
      //       const lang = require(`react-syntax-highlighter/languages/hljs/${l}`).default
      //       config.syntaxes[l] = lang
      //       console.log(typeof lang)
      //     } catch (e) {
      //       //
      //     }
      //   })
      // }

      if (window) {
        window.addEventListener('resize', this.updateDimensions);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (window) {
        window.removeEventListener('resize', this.updateDimensions);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tree = _props.tree,
          toc = _props.toc,
          config = _props.config;

      var sideBarRight = config.sidebar && config.sidebar.position === 'right';
      var sidebar = _react2.default.createElement(_Sidebar2.default, {
        tree: tree,
        toc: toc,
        config: config,
        sidebarIsOpen: this.state.sidebarIsOpen
      });
      var toggle = _react2.default.createElement(_Toggle2.default, {
        onClick: this.handleSidebarToggle,
        sidebarIsOpen: this.state.sidebarIsOpen,
        position: config.sidebar.position
      });

      return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          _Wrapper2.default,
          null,
          !sideBarRight && [sidebar, toggle],
          _react2.default.createElement(_reactStaticRoutes2.default, null),
          sideBarRight && [toggle, sidebar]
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactStatic.getSiteProps)(App);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(13);

var _Docs = __webpack_require__(14);

var _Docs2 = _interopRequireDefault(_Docs);

var _ = __webpack_require__(40);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Template Imports


// Template Map
var templateMap = {
  t_0: _Docs2.default,
  t_1: _2.default

  // Template Tree
};var templateTree = { c: { "404": { t: "t_1" }, "introduction": { t: "t_0" }, "/": { t: "t_0" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-top: 1px solid #ddd;\n  padding: 1rem 0;\n  margin-top: 1rem !important;\n\n  a {\n    display: flex;\n    align-items: center;\n  }\n\n  svg {\n    height: 20px;\n    width: 20px;\n    margin-right: .5rem;\n  }\n'], ['\n  border-top: 1px solid #ddd;\n  padding: 1rem 0;\n  margin-top: 1rem !important;\n\n  a {\n    display: flex;\n    align-items: center;\n  }\n\n  svg {\n    height: 20px;\n    width: 20px;\n    margin-right: .5rem;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(2);

var _Markdown = __webpack_require__(4);

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Doc = __webpack_require__(38);

var _Doc2 = _interopRequireDefault(_Doc);

var _GitHub = __webpack_require__(39);

var _GitHub2 = _interopRequireDefault(_GitHub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Footer = _styledComponents2.default.div(_templateObject);

var page = function page(_ref) {
  var doc = _ref.doc,
      config = _ref.config;
  return _react2.default.createElement(
    _Doc2.default,
    { className: 'doc' },
    _react2.default.createElement(_Markdown2.default, {
      source: doc.body,
      config: config
    }),
    _react2.default.createElement(
      Footer,
      null,
      config.repository && _react2.default.createElement(
        'a',
        { href: config.repository + '/blob/master/' + doc.file },
        _react2.default.createElement(_GitHub2.default, null),
        ' Edit this page'
      )
    )
  );
};

exports.default = (0, _reactStatic.getSiteProps)((0, _reactStatic.getRouteProps)(page));

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("unified");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("remark-parse");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("remark-rehype");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("remark-frontmatter");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("rehype-raw");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("rehype-slug");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("rehype-autolink-headings");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("remark-collapse");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("remark-toc");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable */


/* Dependencies. */

var has = __webpack_require__(25);
var toH = __webpack_require__(26);

/* Expose `rehype-react`. */
module.exports = rehype2react;

/**
 * Attach a react compiler.
 *
 * @param {Unified} processor - Instance.
 * @param {Object?} [options]
 * @param {Object?} [options.components]
 *   - Components.
 * @param {string?} [options.prefix]
 *   - Key prefix.
 * @param {Function?} [options.createElement]
 *   - `h()`.
 */
function rehype2react(options) {
  var settings = options || {};
  var createElement = settings.createElement;
  var components = settings.components || {};

  this.Compiler = compiler;

  /* Compile HAST to React. */
  function compiler(node) {
    if (node.type === 'root') {
      if (node.children.length === 1 && node.children[0].type === 'element') {
        node = node.children[0];
      } else {
        node = {
          type: 'element',
          tagName: 'div',
          properties: {},
          children: node.children
        };
      }
    }

    return toH(h, node, settings.prefix);
  }

  /* Wrap `createElement` to pass components in. */
  function h(name, props, children) {
    var component = has(components, name) ? components[name] : name;
    return createElement(component, props, children);
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("has");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("hast-to-hyperscript");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: rgba(0,0,0,.7);\n  line-height: 1.5;\n\n  h1, h2, h3 {\n    position: relative;\n\n    a {\n      text-decoration: none;\n      display: block;\n    }\n\n    svg {\n      position: absolute;\n      padding-right: 10px;\n      left: -25px;\n      top: 50%;\n      transform: translateY(-50%);\n      height: 16px;\n      width: 25px;\n\n      g { fill: #FFF }\n    }\n\n    &:hover svg, svg:hover{\n      g { fill: inherit; }\n    }\n  }\n\n  ul {\n    list-style: disc;\n    padding-left: 2rem;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  blockquote {\n    border-left: 3px solid #315FA8;\n    padding-left: 1rem;\n    font-style: italic;\n  }\n\n  pre, code {\n    font-size: 14px;\n  }\n\n  p > code, div > code, ul > code, ol > code, li > code {\n    border-radius: 4px;\n    padding: .05rem .25rem !important;\n    display: inline-block;\n  }\n\n  pre .line-numbers {\n    white-space: pre;\n  }\n\n  pre .no-line-numbers {\n    white-space: pre-wrap;\n  }\n\n  pre.language-bash .react-syntax-highlighter-line-number,\n  pre.language-shell .react-syntax-highlighter-line-number {\n    font-size: 1px;\n    letter-spacing: -1px;\n  }\n\n  pre.language-bash .react-syntax-highlighter-line-number:first-child::before,\n  pre.language-shell .react-syntax-highlighter-line-number:first-child::before {\n    content: \'$\';\n  }}\n\n  pre.language-bash .react-syntax-highlighter-line-number::before,\n  pre.language-shell .react-syntax-highlighter-line-number::before {\n    content: \'>\';\n    font-size: 14px;\n    color: inherit;\n  }}\n\n  ul p {\n    margin: 0;\n  }\n\n  table {\n    display: block;\n    width: 100%;\n    overflow: auto;\n  }\n\n  table th {\n    font-weight: bold;\n  }\n\n  table th,\n  table td {\n    padding: 6px 13px;\n    border: 1px solid #ddd;\n  }\n\n  table tr {\n    background-color: #fff;\n    border-top: 1px solid #ccc;\n  }\n\n  table tr:nth-child(2n) {\n    background-color: #f8f8f8;\n  }\n\n  svg {\n    height: 18px;\n    width: 18px;\n    margin-right: .5rem;\n    margin-bottom: 2px;\n  }\n\n  hr {\n    border-bottom-color: #eee;\n    height: .25em;\n    padding: 0;\n    margin: 24px 0;\n    background-color: #e7e7e7;\n    border: 0;\n  }\n'], ['\n  color: rgba(0,0,0,.7);\n  line-height: 1.5;\n\n  h1, h2, h3 {\n    position: relative;\n\n    a {\n      text-decoration: none;\n      display: block;\n    }\n\n    svg {\n      position: absolute;\n      padding-right: 10px;\n      left: -25px;\n      top: 50%;\n      transform: translateY(-50%);\n      height: 16px;\n      width: 25px;\n\n      g { fill: #FFF }\n    }\n\n    &:hover svg, svg:hover{\n      g { fill: inherit; }\n    }\n  }\n\n  ul {\n    list-style: disc;\n    padding-left: 2rem;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  blockquote {\n    border-left: 3px solid #315FA8;\n    padding-left: 1rem;\n    font-style: italic;\n  }\n\n  pre, code {\n    font-size: 14px;\n  }\n\n  p > code, div > code, ul > code, ol > code, li > code {\n    border-radius: 4px;\n    padding: .05rem .25rem !important;\n    display: inline-block;\n  }\n\n  pre .line-numbers {\n    white-space: pre;\n  }\n\n  pre .no-line-numbers {\n    white-space: pre-wrap;\n  }\n\n  pre.language-bash .react-syntax-highlighter-line-number,\n  pre.language-shell .react-syntax-highlighter-line-number {\n    font-size: 1px;\n    letter-spacing: -1px;\n  }\n\n  pre.language-bash .react-syntax-highlighter-line-number:first-child::before,\n  pre.language-shell .react-syntax-highlighter-line-number:first-child::before {\n    content: \'$\';\n  }}\n\n  pre.language-bash .react-syntax-highlighter-line-number::before,\n  pre.language-shell .react-syntax-highlighter-line-number::before {\n    content: \'>\';\n    font-size: 14px;\n    color: inherit;\n  }}\n\n  ul p {\n    margin: 0;\n  }\n\n  table {\n    display: block;\n    width: 100%;\n    overflow: auto;\n  }\n\n  table th {\n    font-weight: bold;\n  }\n\n  table th,\n  table td {\n    padding: 6px 13px;\n    border: 1px solid #ddd;\n  }\n\n  table tr {\n    background-color: #fff;\n    border-top: 1px solid #ccc;\n  }\n\n  table tr:nth-child(2n) {\n    background-color: #f8f8f8;\n  }\n\n  svg {\n    height: 18px;\n    width: 18px;\n    margin-right: .5rem;\n    margin-bottom: 2px;\n  }\n\n  hr {\n    border-bottom-color: #eee;\n    height: .25em;\n    padding: 0;\n    margin: 24px 0;\n    background-color: #e7e7e7;\n    border: 0;\n  }\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSyntaxHighlighter = __webpack_require__(6);

var _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);

var _prism = __webpack_require__(7);

var _prism2 = _interopRequireDefault(_prism);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return function (_ref) {
    var children = _ref.children;
    var theme = options.theme,
        highlighter = options.highlighter;

    var isPrism = highlighter && highlighter.includes('prism');

    var codeClass = (0, _classnames2.default)({
      'inline-code': true,
      'language-none': true,
      'hljs-code': !isPrism,
      hljs: !isPrism
    });

    if (theme) {
      var codeStyle = {
        background: !isPrism ? theme.hljs.background : theme['pre[class*="language-"]'].background,
        color: !isPrism ? theme.hljs.color : theme['code[class*="language-"]'].color
      };
      return _react2.default.createElement(
        'code',
        {
          className: codeClass,
          style: codeStyle
        },
        children
      );
    }

    return _react2.default.createElement(
      'code',
      { className: codeClass },
      children
    );
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSyntaxHighlighter = __webpack_require__(6);

var _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);

var _prism = __webpack_require__(7);

var _prism2 = _interopRequireDefault(_prism);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getLanguage = function getLanguage(className) {
  if (!className) return null;
  return className.indexOf('-') ? className.split('-')[1] : null;
};

exports.default = function (options) {
  return function (_ref) {
    var _cx, _cx2;

    var children = _ref.children,
        className = _ref.className;

    // data-lines="1-3"
    // diff format
    var childProps = children[0].props;
    var language = childProps ? getLanguage(className || childProps.className) : null;

    var theme = options.theme,
        highlighter = options.highlighter,
        showLineNumbers = options.showLineNumbers;

    var isPrism = highlighter && highlighter.includes('prism');

    var wrapperClass = (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, 'syntax-' + language, true), _defineProperty(_cx, 'language-' + language, true), _defineProperty(_cx, 'line-numbers', showLineNumbers), _defineProperty(_cx, 'no-line-numbers', !showLineNumbers), _cx));

    // Kind of dirty, need to figure out how to get the code class on the Pre
    // tag through some kind of remark plugin or remark-parse extension
    var codeString = typeof children[0] === 'string' ? children.join('').trim() // html <pre>
    : children.map(function (c) {
      return c.props.children;
    }).join(''); // markdown fenced block

    var langClass = (0, _classnames2.default)((_cx2 = {}, _defineProperty(_cx2, 'syntax-' + language, true), _defineProperty(_cx2, 'language-' + language, true), _cx2));

    console.log(options);

    var props = {
      language: language,
      useInlineStyles: theme !== undefined,
      style: theme,
      showLineNumbers: showLineNumbers,
      lineNumberStyle: { opacity: 0.3 },
      className: wrapperClass,
      children: codeString,
      PreTag: function PreTag(props) {
        return console.log(props), _react2.default.createElement('pre', _extends({}, props, { className: wrapperClass }));
      },
      codeTagProps: {
        className: langClass
      }
    };

    return isPrism ? _react2.default.createElement(_prism2.default, props) : _react2.default.createElement(_reactSyntaxHighlighter2.default, props);
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Checkmark = __webpack_require__(31);

var _Checkmark2 = _interopRequireDefault(_Checkmark);

var _Link = __webpack_require__(32);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var className = _ref.className,
      children = _ref.children;

  switch (className) {
    case 'doc-plus':
      return _react2.default.createElement(_Checkmark2.default, null);
    case 'link':
      return _react2.default.createElement(_Link2.default, null);
    default:
      return _react2.default.createElement(_Checkmark2.default, null);
  }
};

exports.default = Icon;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkmark = function Checkmark(_ref) {
  var color = _ref.color,
      strokeWidth = _ref.strokeWidth,
      height = _ref.height,
      width = _ref.width;
  return _react2.default.createElement(
    'svg',
    { width: width || 24, height: height || 24, viewBox: '0 0 24 24' },
    _react2.default.createElement('path', { strokeWidth: strokeWidth || '2', fill: color || '#5E61A2', d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
  );
};

exports.default = Checkmark;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? '#444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 24 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 24 : _ref$width;
  return _react2.default.createElement(
    'svg',
    { viewBox: '0 0 24 24', width: width, height: height },
    _react2.default.createElement(
      'g',
      { className: 'nc-icon-wrapper', fill: color },
      _react2.default.createElement('path', { d: 'M11.864 16.378a3.914 3.914 0 0 1-1.124 2.468l-2 2a3.956 3.956 0 0 1-5.586 0 3.954 3.954 0 0 1 0-5.586l2-2a3.916 3.916 0 0 1 2.468-1.124l1.816-1.816c-1.974-.51-4.155-.017-5.698 1.527l-2 2a5.956 5.956 0 0 0 0 8.414C2.9 23.42 4.424 24 5.947 24s3.047-.58 4.207-1.74l2-2c1.543-1.543 2.036-3.724 1.527-5.698l-1.817 1.816zM16.378 11.864a3.914 3.914 0 0 0 2.468-1.124l2-2a3.956 3.956 0 0 0 0-5.586 3.954 3.954 0 0 0-5.586 0l-2 2a3.916 3.916 0 0 0-1.124 2.468L10.32 9.438c-.51-1.974-.017-4.155 1.527-5.698l2-2a5.956 5.956 0 0 1 8.414 0C23.42 2.9 24 4.424 24 5.947s-.58 3.047-1.74 4.207l-2 2c-1.543 1.543-3.724 2.036-5.698 1.527l1.816-1.817z' }),
      _react2.default.createElement('path', { 'data-color': 'color-2', d: 'M7.586 15l7.413-7.414L16.414 9 9 16.415z' })
    )
  );
};

exports.default = Link;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkRenderer = function LinkRenderer(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === undefined ? [] : _ref$children,
      href = _ref.href,
      name = _ref.name,
      _ref$doc = _ref.doc,
      doc = _ref$doc === undefined ? {} : _ref$doc;

  if (!href && name) {
    return _react2.default.createElement('a', { href: '#' + name });
  }

  if (href.indexOf('://') !== -1 || href.match(/(^|[ ])#(\S+)/)) {
    return _react2.default.createElement(
      'a',
      { href: href },
      children
    );
  }

  var to = href.charAt(0) === '/' ? href.replace('.md', '').toLowerCase() : ('/' + href.replace('.md', '')).toLowerCase();

  var className = doc.path === to ? 'link active' : 'link';

  return _react2.default.createElement(
    _reactStatic.Link,
    { to: to, className: className },
    children
  );
};

exports.default = LinkRenderer;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-left-color: #3a6bbd;\n  background-color: #eff5ff;\n  &::before { background-color: #3a6bbd }\n'], ['\n  border-left-color: #3a6bbd;\n  background-color: #eff5ff;\n  &::before { background-color: #3a6bbd }\n']);

var _Tip = __webpack_require__(3);

var _Tip2 = _interopRequireDefault(_Tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _Tip2.default.extend(_templateObject);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-left-color: #f7d24c;\n  background-color: #fefbed;\n  &::before { background-color: #f7d24c }\n'], ['\n  border-left-color: #f7d24c;\n  background-color: #fefbed;\n  &::before { background-color: #f7d24c }\n']);

var _Tip = __webpack_require__(3);

var _Tip2 = _interopRequireDefault(_Tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _Tip2.default.extend(_templateObject);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-left-color: #f66;\n  background-color: hsla(0,100%,70%,.06);\n  &::before { background-color: #f66 }\n'], ['\n  border-left-color: #f66;\n  background-color: hsla(0,100%,70%,.06);\n  &::before { background-color: #f66 }\n']);

var _Tip = __webpack_require__(3);

var _Tip2 = _interopRequireDefault(_Tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _Tip2.default.extend(_templateObject);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: #525035;\n  background: #FDF37D;\n  display: inline-block;\n  padding: .05rem .2rem;\n  margin: 0;\n'], ['\n  color: #525035;\n  background: #FDF37D;\n  display: inline-block;\n  padding: .05rem .2rem;\n  margin: 0;\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.p(_templateObject);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: rgba(0,0,0,.7);\n  line-height: 1.75;\n  padding: 1rem 2rem;\n  font-family: "source-sans-pro", sans-serif;\n  font-size: 1.1rem;\n  word-wrap: break-word;\n  flex: 1 1 auto;\n  overflow-y: scroll;\n\n  .header {\n    display: block;\n    font-family: "source-sans-pro", sans-serif;\n    font-weight: 600;\n    font-size: 16px;\n    color: #3D4A67;\n    letter-spacing: .11px;\n    text-decoration: none;\n    border-bottom: 1px solid #dde1eb;\n    padding: .5rem 0;\n    margin: .5rem 0;\n  }\n\n  .link {\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  .additions {\n    background: #d8fbdb;\n    border-radius: 5px;\n    color: #1d8745;\n    padding: 0.75em 1em;\n    margin-bottom: 1em;\n    font-size: 85%;\n\n    h3 {\n      margin: 0 0 1em 0;\n    }\n\n    .learn-more {\n      display: block;\n      font-size: 80%;\n    }\n\n    > p:last-child {\n      margin-bottom: 0\n    }\n\n    ol,\n    ul {\n      margin: 0.5em 0;\n      padding: 0 0 0 2px;\n      list-style: none;\n      color: #1d8745;\n\n      li {\n        margin: 0;\n        padding: 0;\n      }\n    }\n  }\n'], ['\n  color: rgba(0,0,0,.7);\n  line-height: 1.75;\n  padding: 1rem 2rem;\n  font-family: "source-sans-pro", sans-serif;\n  font-size: 1.1rem;\n  word-wrap: break-word;\n  flex: 1 1 auto;\n  overflow-y: scroll;\n\n  .header {\n    display: block;\n    font-family: "source-sans-pro", sans-serif;\n    font-weight: 600;\n    font-size: 16px;\n    color: #3D4A67;\n    letter-spacing: .11px;\n    text-decoration: none;\n    border-bottom: 1px solid #dde1eb;\n    padding: .5rem 0;\n    margin: .5rem 0;\n  }\n\n  .link {\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  .additions {\n    background: #d8fbdb;\n    border-radius: 5px;\n    color: #1d8745;\n    padding: 0.75em 1em;\n    margin-bottom: 1em;\n    font-size: 85%;\n\n    h3 {\n      margin: 0 0 1em 0;\n    }\n\n    .learn-more {\n      display: block;\n      font-size: 80%;\n    }\n\n    > p:last-child {\n      margin-bottom: 0\n    }\n\n    ol,\n    ul {\n      margin: 0.5em 0;\n      padding: 0 0 0 2px;\n      list-style: none;\n      color: #1d8745;\n\n      li {\n        margin: 0;\n        padding: 0;\n      }\n    }\n  }\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GitHub = function GitHub() {
  return _react2.default.createElement(
    "svg",
    { viewBox: "0 0 16 16", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "1.414" },
    _react2.default.createElement("path", { d: "M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8" })
  );
};

exports.default = GitHub;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _Markdown = __webpack_require__(4);

var _Markdown2 = _interopRequireDefault(_Markdown);

var _SidebarItem = __webpack_require__(43);

var _SidebarItem2 = _interopRequireDefault(_SidebarItem);

var _Wrapper = __webpack_require__(47);

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Header = __webpack_require__(48);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(_ref) {
  var tree = _ref.tree,
      toc = _ref.toc,
      doc = _ref.doc,
      config = _ref.config,
      sidebarIsOpen = _ref.sidebarIsOpen;
  return _react2.default.createElement(
    _Wrapper2.default,
    { sidebarIsOpen: sidebarIsOpen, className: 'sidebar', position: config.sidebar.position },
    _react2.default.createElement(
      _Header2.default,
      null,
      _react2.default.createElement(
        'a',
        { href: config.repository },
        config.name,
        ' version ',
        config.version
      )
    ),
    _react2.default.createElement(
      'ul',
      null,
      toc && _react2.default.createElement(_Markdown2.default, { source: toc.body, doc: doc }),
      !toc && tree.children.map(function (c) {
        return _react2.default.createElement(_SidebarItem2.default, _extends({}, c, {
          key: c.path,
          doc: doc,
          config: config
        }));
      })
    )
  );
};

exports.default = (0, _reactStatic.getRouteProps)(Sidebar);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__(44);

var _Caret = __webpack_require__(45);

var _Caret2 = _interopRequireDefault(_Caret);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.h3(_templateObject);

var Title = function Title(_ref) {
  var name = _ref.name,
      type = _ref.type,
      path = _ref.path,
      _ref$doc = _ref.doc,
      doc = _ref$doc === undefined ? {} : _ref$doc,
      hasChildren = _ref.hasChildren,
      expanded = _ref.expanded;

  if (type === 'directory') {
    return _react2.default.createElement(
      Header,
      null,
      name,
      hasChildren && _react2.default.createElement(_Caret2.default, { degrees: expanded ? 0 : -90, color: '#AAB0B9' })
    );
  }

  var href = (0, _utils.getDocPath)(path);
  var className = href === doc.path ? 'active link' : 'link';

  return _react2.default.createElement(
    _reactStatic.Link,
    { to: '/' + href, className: className },
    name.replace('.md', '')
  );
};

var SidebarItem = function (_React$Component) {
  _inherits(SidebarItem, _React$Component);

  function SidebarItem(props) {
    _classCallCheck(this, SidebarItem);

    var _this = _possibleConstructorReturn(this, (SidebarItem.__proto__ || Object.getPrototypeOf(SidebarItem)).call(this, props));

    _initialiseProps.call(_this);

    var depth = (0, _utils.getDocPath)(props.path).split('/').length;
    var underActiveRoute = _this.getUnderActiveRoute(props);

    _this.state = {
      expanded: depth <= props.config.defaultDepth || underActiveRoute
    };
    return _this;
  }

  _createClass(SidebarItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var depth = (0, _utils.getDocPath)(nextProps.path).split('/').length;
      var underActiveRoute = this.getUnderActiveRoute(nextProps);

      this.setState({
        expanded: depth <= nextProps.config.defaultDepth || underActiveRoute
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          children = _props.children,
          type = _props.type,
          path = _props.path,
          doc = _props.doc,
          config = _props.config;


      return _react2.default.createElement(
        'li',
        { onClick: this.handleClick },
        _react2.default.createElement(Title, {
          name: name,
          type: type,
          path: path,
          doc: doc,
          hasChildren: children,
          expanded: this.state.expanded
        }),
        this.state.expanded && children && _react2.default.createElement(
          'ul',
          null,
          children.map(function (c) {
            return _react2.default.createElement(SidebarItem, _extends({}, c, {
              key: c.path,
              doc: doc,
              config: config
            }));
          })
        )
      );
    }
  }]);

  return SidebarItem;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getUnderActiveRoute = function (props) {
    return props.doc.path.includes((0, _utils.getDocPath)(props.path)) || props.children && props.children.find(function (c) {
      return props.doc.path.includes(c.path);
    }) !== undefined;
  };

  this.handleClick = function (e) {
    e.stopPropagation();
    _this2.setState({ expanded: !_this2.state.expanded });
  };
};

exports.default = SidebarItem;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocPath = getDocPath;
function getDocPath(path) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/docs';

  if (path.includes(root)) {
    return path.split(root + '/')[1].replace('.md', '').toLowerCase();
  }

  return path.replace('.md', '').toLowerCase();
}

/* eslint-disable */
function setValue(object, objPath, value) {
  var a = objPath;
  var o = object;
  for (var i = 0; i < a.length - 1; i++) {
    var n = a[i];
    if (n in o) {
      o = o[n];
    } else {
      o[n] = {};
      o = o[n];
    }
  }
  o[a[a.length - 1]] = value;
}

// const getValue = (obj, objPath) => objPath.reduce((a, b) => a[b], obj)

function deepFind(obj, currentPath) {
  var paths = currentPath,
      current = obj,
      i;

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(46);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Caret = function Caret(_ref) {
  var color = _ref.color,
      height = _ref.height,
      width = _ref.width,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      onClick = _ref.onClick,
      _ref$degrees = _ref.degrees,
      degrees = _ref$degrees === undefined ? 0 : _ref$degrees,
      className = _ref.className;
  return _react2.default.createElement(
    'svg',
    { onClick: onClick, className: className, style: _extends({}, style, { transform: 'rotate(' + degrees + 'deg)' }), width: width || 24, height: height || 24, viewBox: '0 0 24 24' },
    _react2.default.createElement('path', { fill: color, d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
  );
};

Caret.propTypes = {
  color: _propTypes2.default.string,
  height: _propTypes2.default.number,
  width: _propTypes2.default.number,
  degrees: _propTypes2.default.number,
  style: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string
};

exports.default = Caret;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  flex: 1 0 auto;\n  transition: all .1s ease-in-out;\n  min-width: ', ';\n  max-width: ', ';\n  background: #f4f7fa;\n  overflow-y: auto;\n  margin: 0;\n  z-index: 99;\n\n  ', '\n\n  @media(max-width: 700px) {\n    width: 0;\n  }\n\n  ', '\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0 0 1.5rem 0;\n  }\n\n  > ul {\n    padding: 1rem 1.5rem 1.5rem 1.5rem;\n  }\n\n  ul ul {\n    padding-left: 15px;\n  }\n\n  ul ul ul {\n    border-left: 3px solid #e4e4e4;\n  }\n\n  ul li {\n    margin-bottom: .75rem;\n  }\n\n  li > ul {\n    margin-top: .5rem;\n    margin-bottom: 0;\n  }\n\n  li > a {\n    text-decoration: none;\n    color: #404e5c;\n    font-size: 1rem;\n    line-height: 1.5;\n    display: block;\n\n    &.active {\n      color: #4688F1;\n    }\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  h1, h2, h3 {\n    text-transform: uppercase;\n    letter-spacing: .05em;\n    color: #919eab;\n    font-weight: 700;\n    font-size: .75rem;\n\n    a { text-decoration: none }\n  }\n'], ['\n  flex: 1 0 auto;\n  transition: all .1s ease-in-out;\n  min-width: ', ';\n  max-width: ', ';\n  background: #f4f7fa;\n  overflow-y: auto;\n  margin: 0;\n  z-index: 99;\n\n  ', '\n\n  @media(max-width: 700px) {\n    width: 0;\n  }\n\n  ', '\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0 0 1.5rem 0;\n  }\n\n  > ul {\n    padding: 1rem 1.5rem 1.5rem 1.5rem;\n  }\n\n  ul ul {\n    padding-left: 15px;\n  }\n\n  ul ul ul {\n    border-left: 3px solid #e4e4e4;\n  }\n\n  ul li {\n    margin-bottom: .75rem;\n  }\n\n  li > ul {\n    margin-top: .5rem;\n    margin-bottom: 0;\n  }\n\n  li > a {\n    text-decoration: none;\n    color: #404e5c;\n    font-size: 1rem;\n    line-height: 1.5;\n    display: block;\n\n    &.active {\n      color: #4688F1;\n    }\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  h1, h2, h3 {\n    text-transform: uppercase;\n    letter-spacing: .05em;\n    color: #919eab;\n    font-weight: 700;\n    font-size: .75rem;\n\n    a { text-decoration: none }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['border-right: 1px solid #DFE3E8;'], ['border-right: 1px solid #DFE3E8;']),
    _templateObject3 = _taggedTemplateLiteral(['border-left: 1px solid #DFE3E8;'], ['border-left: 1px solid #DFE3E8;']),
    _templateObject4 = _taggedTemplateLiteral(['\n    @media(max-width: 700px) {\n      position: fixed;\n      ', '\n      top: 0;\n      bottom: 0;\n    }\n  '], ['\n    @media(max-width: 700px) {\n      position: fixed;\n      ', '\n      top: 0;\n      bottom: 0;\n    }\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['left: 0;'], ['left: 0;']),
    _templateObject6 = _taggedTemplateLiteral(['right: 0;'], ['right: 0;']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.aside(_templateObject, function (props) {
  return props.sidebarIsOpen ? '230px' : '0';
}, function (props) {
  return props.sidebarIsOpen ? '280px' : '0';
}, function (props) {
  if (props.position === 'left') {
    return (0, _styledComponents.css)(_templateObject2);
  }
  return (0, _styledComponents.css)(_templateObject3);
}, function (props) {
  return props.sidebarIsOpen && (0, _styledComponents.css)(_templateObject4, function (props) {
    return props.position === 'left' ? (0, _styledComponents.css)(_templateObject5) : (0, _styledComponents.css)(_templateObject6);
  });
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #DFE3E8;\n  padding: 1rem 1.5rem;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  color: #919eab;\n  font-weight: 700;\n  font-size: .75rem;\n  a { color: inherit }\n\n  @media (min-width: 1500px) {\n    border-bottom: none;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #DFE3E8;\n  padding: 1rem 1.5rem;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  color: #919eab;\n  font-weight: 700;\n  font-size: .75rem;\n  a { color: inherit }\n\n  @media (min-width: 1500px) {\n    border-bottom: none;\n  }\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 35px;\n  width: 35px;\n  border: 1px solid #ddd;\n  position: relative;\n  top: 15px;\n  ', '\n  cursor: pointer;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n\n  &:hover svg g {\n    stroke: #4688F1;\n  }\n\n  @media (min-width: 1500px) {\n    display: none;\n  }\n\n  @media (max-width: 720px) {\n    ', '\n  }\n\n  ', '\n'], ['\n  height: 35px;\n  width: 35px;\n  border: 1px solid #ddd;\n  position: relative;\n  top: 15px;\n  ', '\n  cursor: pointer;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n\n  &:hover svg g {\n    stroke: #4688F1;\n  }\n\n  @media (min-width: 1500px) {\n    display: none;\n  }\n\n  @media (max-width: 720px) {\n    ', '\n  }\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['right: 15px;'], ['right: 15px;']),
    _templateObject3 = _taggedTemplateLiteral(['left: 15px;'], ['left: 15px;']),
    _templateObject4 = _taggedTemplateLiteral(['float: left;'], ['float: left;']),
    _templateObject5 = _taggedTemplateLiteral(['float: right;'], ['float: right;']),
    _templateObject6 = _taggedTemplateLiteral(['\n    @media (max-width: 720px) {\n      ', '\n      top: 6px;\n    }\n  '], ['\n    @media (max-width: 720px) {\n      ', '\n      top: 6px;\n    }\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['left: 245px;'], ['left: 245px;']),
    _templateObject8 = _taggedTemplateLiteral(['right: 245px;'], ['right: 245px;']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Hamburger = __webpack_require__(50);

var _Hamburger2 = _interopRequireDefault(_Hamburger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.position === 'right' ? (0, _styledComponents.css)(_templateObject2) : (0, _styledComponents.css)(_templateObject3);
}, function (props) {
  return props.position === 'left' ? (0, _styledComponents.css)(_templateObject4) : (0, _styledComponents.css)(_templateObject5);
}, function (props) {
  return props.sidebarIsOpen && (0, _styledComponents.css)(_templateObject6, function (props) {
    return props.position === 'left' ? (0, _styledComponents.css)(_templateObject7) : (0, _styledComponents.css)(_templateObject8);
  });
});

exports.default = function (props) {
  return _react2.default.createElement(
    Wrapper,
    props,
    _react2.default.createElement(_Hamburger2.default, null)
  );
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hamburger = function Hamburger(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? '#444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 16 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 16 : _ref$width;
  return _react2.default.createElement(
    'svg',
    { viewBox: '0 0 16 16', width: width, height: height },
    _react2.default.createElement(
      'g',
      { fill: 'none', stroke: color, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '10' },
      _react2.default.createElement('path', { d: 'M.5 3.5h15' }),
      _react2.default.createElement('path', { 'data-color': 'color-2', d: 'M.5 8.5h15' }),
      _react2.default.createElement('path', { d: 'M.5 13.5h8' })
    )
  );
};

exports.default = Hamburger;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  html, body {\n    height: 100%;\n    width: 100%;\n    text-rendering: optimizeLegibility;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-family: "futura-pt", sans-serif;\n  }\n\n  .powered { display: none }\n\n  main > div {\n    overflow: hidden;\n  }\n\n  a {\n    text-decoration: none;\n    color: #4688F1;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  .pace {\n    pointer-events: none;\n    user-select: none;\n  }\n\n  .pace-inactive {\n    display: none;\n  }\n\n  .pace .pace-progress {\n    opacity: .9;\n    position: fixed;\n    z-index: 2000;\n    top: 0;\n    right: 100%;\n    width: 100%;\n    height: 2px;\n  }\n\n  *,\n  ::before,\n  ::after {\n    background-repeat: no-repeat; /* 1 */\n    box-sizing: inherit; /* 2 */\n  }\n\n  ::before,\n  ::after {\n    text-decoration: inherit; /* 1 */\n    vertical-align: inherit; /* 2 */\n  }\n\n  html {\n    box-sizing: border-box; /* 1 */\n    cursor: default; /* 2 */\n    -ms-text-size-adjust: 100%; /* 3 */\n    -webkit-text-size-adjust: 100%; /* 3 */\n  }\n\n  article,\n  aside,\n  footer,\n  header,\n  nav,\n  section {\n    display: block;\n  }\n\n  /**\n   * Remove the margin in all browsers (opinionated).\n   */\n\n  body {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 2em;\n    margin: .67em 0;\n  }\n\n  figcaption,\n  figure,\n  main { /* 1 */\n    display: block;\n  }\n\n  /**\n   * Add the correct margin in IE 8.\n   */\n\n  figure {\n    margin: 1em 40px;\n  }\n\n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n\n  nav ol,\n  nav ul {\n    list-style: none;\n  }\n\n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  a {\n    background-color: transparent; /* 1 */\n    -webkit-text-decoration-skip: objects; /* 2 */\n  }\n\n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n\n  b,\n  strong {\n    font-weight: inherit;\n  }\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  dfn {\n    font-style: italic;\n  }\n\n  mark {\n    background-color: #ffff00;\n    color: #000000;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -.25em;\n  }\n\n  sup {\n    top: -.5em;\n  }\n\n  ::-moz-selection {\n    background-color: #b3d4fc; /* 1 */\n    color: #000000; /* 1 */\n    text-shadow: none;\n  }\n\n  ::selection {\n    background-color: #b3d4fc; /* 1 */\n    color: #000000; /* 1 */\n    text-shadow: none;\n  }\n\n  audio,\n  canvas,\n  iframe,\n  img,\n  svg,\n  video {\n    vertical-align: middle;\n  }\n\n  audio,\n  video {\n    display: inline-block;\n  }\n\n  audio:not([controls]) {\n    display: none;\n    height: 0;\n  }\n\n  img {\n    border-style: none;\n  }\n\n  svg {\n    fill: currentColor;\n  }\n\n  svg:not(:root) {\n    overflow: hidden;\n  }\n\n  table {\n    border-collapse: collapse;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    margin: 0;\n  }\n\n  button,\n  input,\n  select,\n  textarea {\n    background-color: transparent;\n    color: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n\n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n\n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n\n  button,\n  html [type="button"], /* 1 */\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button; /* 2 */\n  }\n\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n\n  progress {\n    display: inline-block; /* 1 */\n    vertical-align: baseline; /* 2 */\n  }\n\n  textarea {\n    overflow: auto; /* 1 */\n    resize: vertical; /* 2 */\n  }\n\n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n\n  [type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n\n  details, /* 1 */\n  menu {\n    display: block;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  canvas {\n    display: inline-block;\n  }\n\n  template {\n    display: none;\n  }\n\n  a,\n  area,\n  button,\n  input,\n  label,\n  select,\n  summary,\n  textarea,\n  [tabindex] {\n    -ms-touch-action: manipulation; /* 1 */\n    touch-action: manipulation;\n  }\n\n  [hidden] {\n    display: none;\n  }\n\n  [aria-busy="true"] {\n    cursor: progress;\n  }\n\n  [aria-controls] {\n    cursor: pointer;\n  }\n\n  [aria-hidden="false"][hidden]:not(:focus) {\n    clip: rect(0, 0, 0, 0);\n    display: inherit;\n    position: absolute;\n  }\n\n  [aria-disabled] {\n    cursor: default;\n  }\n'], ['\n  html, body {\n    height: 100%;\n    width: 100%;\n    text-rendering: optimizeLegibility;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-family: "futura-pt", sans-serif;\n  }\n\n  .powered { display: none }\n\n  main > div {\n    overflow: hidden;\n  }\n\n  a {\n    text-decoration: none;\n    color: #4688F1;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  .pace {\n    pointer-events: none;\n    user-select: none;\n  }\n\n  .pace-inactive {\n    display: none;\n  }\n\n  .pace .pace-progress {\n    opacity: .9;\n    position: fixed;\n    z-index: 2000;\n    top: 0;\n    right: 100%;\n    width: 100%;\n    height: 2px;\n  }\n\n  *,\n  ::before,\n  ::after {\n    background-repeat: no-repeat; /* 1 */\n    box-sizing: inherit; /* 2 */\n  }\n\n  ::before,\n  ::after {\n    text-decoration: inherit; /* 1 */\n    vertical-align: inherit; /* 2 */\n  }\n\n  html {\n    box-sizing: border-box; /* 1 */\n    cursor: default; /* 2 */\n    -ms-text-size-adjust: 100%; /* 3 */\n    -webkit-text-size-adjust: 100%; /* 3 */\n  }\n\n  article,\n  aside,\n  footer,\n  header,\n  nav,\n  section {\n    display: block;\n  }\n\n  /**\n   * Remove the margin in all browsers (opinionated).\n   */\n\n  body {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 2em;\n    margin: .67em 0;\n  }\n\n  figcaption,\n  figure,\n  main { /* 1 */\n    display: block;\n  }\n\n  /**\n   * Add the correct margin in IE 8.\n   */\n\n  figure {\n    margin: 1em 40px;\n  }\n\n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n\n  nav ol,\n  nav ul {\n    list-style: none;\n  }\n\n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  a {\n    background-color: transparent; /* 1 */\n    -webkit-text-decoration-skip: objects; /* 2 */\n  }\n\n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n\n  b,\n  strong {\n    font-weight: inherit;\n  }\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  dfn {\n    font-style: italic;\n  }\n\n  mark {\n    background-color: #ffff00;\n    color: #000000;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -.25em;\n  }\n\n  sup {\n    top: -.5em;\n  }\n\n  ::-moz-selection {\n    background-color: #b3d4fc; /* 1 */\n    color: #000000; /* 1 */\n    text-shadow: none;\n  }\n\n  ::selection {\n    background-color: #b3d4fc; /* 1 */\n    color: #000000; /* 1 */\n    text-shadow: none;\n  }\n\n  audio,\n  canvas,\n  iframe,\n  img,\n  svg,\n  video {\n    vertical-align: middle;\n  }\n\n  audio,\n  video {\n    display: inline-block;\n  }\n\n  audio:not([controls]) {\n    display: none;\n    height: 0;\n  }\n\n  img {\n    border-style: none;\n  }\n\n  svg {\n    fill: currentColor;\n  }\n\n  svg:not(:root) {\n    overflow: hidden;\n  }\n\n  table {\n    border-collapse: collapse;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    margin: 0;\n  }\n\n  button,\n  input,\n  select,\n  textarea {\n    background-color: transparent;\n    color: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n\n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n\n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n\n  button,\n  html [type="button"], /* 1 */\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button; /* 2 */\n  }\n\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n\n  progress {\n    display: inline-block; /* 1 */\n    vertical-align: baseline; /* 2 */\n  }\n\n  textarea {\n    overflow: auto; /* 1 */\n    resize: vertical; /* 2 */\n  }\n\n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n\n  [type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n\n  details, /* 1 */\n  menu {\n    display: block;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  canvas {\n    display: inline-block;\n  }\n\n  template {\n    display: none;\n  }\n\n  a,\n  area,\n  button,\n  input,\n  label,\n  select,\n  summary,\n  textarea,\n  [tabindex] {\n    -ms-touch-action: manipulation; /* 1 */\n    touch-action: manipulation;\n  }\n\n  [hidden] {\n    display: none;\n  }\n\n  [aria-busy="true"] {\n    cursor: progress;\n  }\n\n  [aria-controls] {\n    cursor: pointer;\n  }\n\n  [aria-hidden="false"][hidden]:not(:focus) {\n    clip: rect(0, 0, 0, 0);\n    display: inherit;\n    position: absolute;\n  }\n\n  [aria-disabled] {\n    cursor: default;\n  }\n']);

var _styledComponents = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  height: 100vh;\n  position: relative;\n\n  section > div {\n    max-width: 800px;\n    margin: 0 auto;\n  }\n\n  @media(max-width: 700px) {\n    flex-direction: column\n\n    aside {\n      min-height: 200px;\n      width: 100%;\n      background: #F4F3FB;\n      overflow: scroll;\n    }\n  }\n\n  @media(min-width: 1500px) {\n    max-width: 1200px;\n    margin: 0 auto;\n    height: auto;\n\n    aside {\n      height: auto;\n      background: #FFF;\n      margin: 2rem 0;\n      padding-top: 0;\n\n      .back {\n        border: none;\n      }\n    }\n  }\n'], ['\n  display: flex;\n  height: 100vh;\n  position: relative;\n\n  section > div {\n    max-width: 800px;\n    margin: 0 auto;\n  }\n\n  @media(max-width: 700px) {\n    flex-direction: column\n\n    aside {\n      min-height: 200px;\n      width: 100%;\n      background: #F4F3FB;\n      overflow: scroll;\n    }\n  }\n\n  @media(min-width: 1500px) {\n    max-width: 1200px;\n    margin: 0 auto;\n    height: auto;\n\n    aside {\n      height: auto;\n      background: #FFF;\n      margin: 2rem 0;\n      padding-top: 0;\n\n      .back {\n        border: none;\n      }\n    }\n  }\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.main(_templateObject);

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.5cae5765.js.map