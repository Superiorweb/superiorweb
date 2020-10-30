module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("h4g4");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "ARU5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YpKv");
/* harmony import */ var _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Menu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      result: [],
      notfound: []
    });

    _defineProperty(this, "closemenu", () => {
      const menu = document.getElementById('menures');
      menu.classList.add('d-none');
    });

    _defineProperty(this, "openmenu", () => {
      const menu = document.getElementById('menures');
      menu.classList.remove('d-none');
    });

    _defineProperty(this, "search", value => {
      const resulsearch = document.querySelector("#resulsearch");

      if (value != null && value != "" && value != " ") {
        resulsearch.classList.remove("d-none");
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`api/post/search?str=${value}`).then(res => {
          if (res.data.length > 0) {
            this.setState({
              result: res.data
            });
            this.setState({
              notfound: " "
            });
          } else {
            this.setState({
              result: res.data
            });
            this.setState({
              notfound: "Not Found"
            });
          }
        });
      } else {
        resulsearch.classList.add("d-none");
      }
    });
  }

  render() {
    const search = this.state.result.map(result => {
      return __jsx("li", null, __jsx(NavLink, {
        to: '/post/' + result.id
      }, result.title));
    });
    return __jsx("header", {
      className: "bg-dark mt-0 pt-3 pb-3 pt-lg-0 pb-lg-0 text-white"
    }, __jsx("div", {
      className: "row mr-0 ml-0"
    }, __jsx("div", {
      className: "col-4 col-lg-6"
    }, __jsx("ul", {
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ulmenu + " d-none d-lg-flex mt-2 mb-0"
    }, __jsx("li", {
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.limenu + " ml-2 text-center"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/"
    }, "\u062E\u0627\u0646\u0647")), __jsx("li", {
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.limenu + " ml-2 text-center"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/Cv"
    }, "\u0631\u0632\u0648\u0645\u0647")), __jsx("li", {
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.limenu + " ml-2 text-center"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/Articles"
    }, "\u0628\u0644\u0627\u06AF")), __jsx("li", {
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.limenu + " ml-2 text-center"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/ConnectUs"
    }, "\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627"))), __jsx("button", {
      onClick: this.openmenu,
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnmenuopen
    }, __jsx("i", {
      className: "fa fa-bars",
      "aria-hidden": "true"
    })), __jsx("div", null, __jsx("ul", {
      id: "menures",
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ulmenuresponsive + " mt-2 mb-0 d-none"
    }, __jsx("li", {
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.limenuresponsive + " ml-2 text-center"
    }, __jsx("button", {
      onClick: this.closemenu,
      id: "close",
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnclose
    }, __jsx("i", {
      className: "fas text-dark fa-times"
    }))), __jsx("li", {
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.limenuresponsive + " ml-2 text-center"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/"
    }, "\u062E\u0627\u0646\u0647")), __jsx("li", {
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.limenuresponsive + " ml-2 text-center"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/Cv"
    }, "\u0631\u0632\u0648\u0645\u0647")), __jsx("li", {
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.limenuresponsive + " ml-2 text-center"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/posts"
    }, "\u0628\u0644\u0627\u06AF")), __jsx("li", {
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.limenuresponsive + " ml-2 text-center"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/ConnectUs"
    }, "\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627")), __jsx("li", {
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.limenuresponsive + " ml-2 text-center"
    }, __jsx("img", {
      src: "/img/index/logotext.png",
      className: "w-100"
    }))))), __jsx("div", {
      className: "col-8 col-lg-6 justify-content-end align-items-center d-flex"
    }, __jsx("div", {
      className: ""
    }, __jsx("form", {
      style: {
        marginLeft: "2vw"
      }
    }, __jsx("label", {
      className: "sr-only",
      htmlFor: "inlineFormInputGroupUsername"
    }, "Username"), __jsx("div", {
      style: {
        direction: "ltr"
      },
      className: "input-group"
    }, __jsx("div", {
      className: "input-group-prepend"
    }, __jsx("button", {
      type: "submit",
      className: "input-group-text h-100 " + _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnsearch
    }, __jsx("i", {
      className: "fa fa-search",
      "aria-hidden": "true"
    }))), __jsx("input", {
      onChange: event => this.search(event.target.value),
      type: "text",
      className: "form-control " + _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.search,
      id: "",
      placeholder: "search"
    })), __jsx("div", {
      style: {
        zIndex: "100000"
      },
      id: "resulsearch",
      className: _component_css_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.resulsearch + "  bg-dark d-none"
    }, __jsx("ul", null, search, __jsx("li", {
      style: {
        listStyle: "none",
        textAlign: "center"
      }
    }, this.state.notfound))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "Fdpp":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"logo": "Catgorys_logo__12jRH",
	"bgsection": "Catgorys_bgsection__1bAq-",
	"titleslide": "Catgorys_titleslide__11AC0",
	"textslide": "Catgorys_textslide__2KBHD",
	"btnslide": "Catgorys_btnslide__2Brgu",
	"items": "Catgorys_items__yaNDJ",
	"item": "Catgorys_item__3I6bA",
	"animitem": "Catgorys_animitem__M1Sgl",
	"titleT": "Catgorys_titleT__1clPy",
	"bg_primary": "Catgorys_bg_primary__2P5Jx",
	"card": "Catgorys_card__FYZ5q",
	"iconcard": "Catgorys_iconcard__1LhR6",
	"textslidetwo": "Catgorys_textslidetwo__2sgtI",
	"customwith": "Catgorys_customwith__l5MLk",
	"select": "Catgorys_select__svH_f"
};


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YpKv":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"search": "menu_search__2sO7i",
	"btnsearch": "menu_btnsearch__1H1bm",
	"ulmenu": "menu_ulmenu__xCgZ1",
	"limenu": "menu_limenu__1zqJG",
	"ulmenuresponsive": "menu_ulmenuresponsive__3_9D9",
	"btnmenuopen": "menu_btnmenuopen__1qKcd",
	"resulsearch": "menu_resulsearch__3t51W",
	"limenuresponsive": "menu_limenuresponsive__T-NKv",
	"btnclose": "menu_btnclose__2upwn"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "gifY":
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "h4g4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ifbw");
/* harmony import */ var _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Fdpp");
/* harmony import */ var _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("gifY");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 //
//
//
//
// class Indexx extends Component {
//     state = {
//         postcard: [],
//         lenght: null,
//         paginationUl: [],
//         catgoryes: []
//     };
//
//
//     componentDidMount() {
//         axios.get('/api/post/resultpost', {}).then(res => {
//             this.setState({lenght: res.data.length})
//         });
//         axios.get("/api/post/rsultpagin?count=1", {}).then(res => {
//             // console.log(res.data);
//             console.log(res.data.length)
//             this.setState({postcard: res.data})
//         });
//         axios.get('/api/Catgory/result', {
//         }).then(
//             reponse => {
//                 this.setState({catgoryes:reponse.data});
//             }
//         )
//     }
//
//     setcatgory=(catgory)=>{
//         axios.get(`/api/post/CatgoryFinder?catgory=${catgory}`, {}).then(res => {
//             console.log(res.data);
//             this.setState({postcard: res.data})
//         })
//     };
//
//     pagehandler = (event, id) => {
//
//         console.log(id)
//         axios.get(`/api/post/rsultpagin?count=${id}`, {}).then(res => {
//             // console.log(res.data);
//             console.log(res.data.length)
//             this.setState({postcard: res.data})
//         });
//
//     };
//
//     static async getInitialProps() {
//         const res = await fetch('https://api.superiorweb.ir/api/post/resultpost',{
//             method:"GET",
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Content-Type': 'application/json',
//                 'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"
//
//             },
//         })
//         const datas = await res.json()
//         const data = datas.slice(0,5)
//         return { stars: data }
//     }
//
//
//     render() {
//         let z = Math.round(this.state.lenght / 12);
//         const cards = this.state.postcard.map((card) => {
//             return (
//                 <div
//                     className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 d-flex text-white justify-content-center m-lg-4 m-0 p-2">
//                     <div className={styleC.card + " card border-0"}>
//                         <img src={"https://api.superiorweb.ir//postimage/" + card.img} className="card-img-top" alt={card.title}/>
//
//                         <ul className={styleC.iconcard + " d-flex pr-1 pl-1 w-50"}>
//                             <li>
//                                 <i className="fas fa-2x fa-angle-right"></i>
//                             </li>
//                             <li style={{marginRight: " -1vw", background: "#ff0000a3"}}>
//                                 <i className="fa fa-share-alt" aria-hidden="true"></i>
//                             </li>
//                         </ul>
//                         <div className="card-body">
//                             <h5 className="card-title">{card.title}</h5>
//                             <p className="card-text">      {ReactHtmlParser(card.description)}
//
//                             </p>
//                             {/*<Link as={`/Article/${card.id}`} href="/Article/">*/}
//
//                             {/*</Link>*/}
//                             <Link href={{ pathname: '/Article', query: { pts: card.id } }}>
//                                 <button className="btn btn-primary">
//                                     Read Post
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             )
//         });
//         return (
//             <Layouts>
//             <section className="bg-dark" style={{height: "auto"}}>
//                 <Head>
//                     <title>بلاگ | طراحی سایت | مقالات </title>
//                     <meta name="description" content="اخرین و به روزترین اخبار و مقالات را با ما دنبال کنید " />
//                     <meta name="keywords" content={this.state.catgoryes.map(p=>{return(p.name)})}/>
//                     <meta name="author" content="majid javadi"/>
//                 </Head>
//                 <div className={"w-100 mb-5 d-flex justify-content-center"}>
//                     <div className={styleC.customwith}>
//                         <h1 onClick={console.log("error")} className={styleC.titleT + " text-center text-white"}>
// مقالات سوپریور وب
//                         </h1>
//                         <p className={"w-100 text-white text-center mt-4 " + styleC.textslidetwo}>
//                             شما میتوانید اخرین مقالات و اخبار مربوط به دنیای فناوری اطلاعات و طراحی وب سایت را با ما دنبال کنید و همچنین سوالات خود را از ما بپرسید
//                         </p>
//                     </div>
//                 </div>
//
//                 {/*....one....*/}
//
//                 <div id="posts" className={styleC.bg_primary + " row justify-content-center mt-5 pt-5 pb-5 mr-0 ml-0"}>
//                     <div className="row w-100 justify-content-center mb-5">
//                         <div className="col-3">
//                             <div className={styleC.select}>
//                                 <select onChange={(event)=>this.setcatgory(event.target.value)} className="w-100 text-center" name="slct" id="slct">
//                                     <option selected disabled>موضوع مورد نظر را جست و جو کنید</option>
//                                     {
//                                         this.state.catgoryes.map((cat)=>{
//                                             return (
//                                                 <option>{cat.name}</option>
//                                             )
//                                         })
//                                     }
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     {cards}
//                     <div className="d-flex justify-content-center w-100 position-relative mb-3 mt-3">
//                         <nav aria-label="Page navigation example">
//                             <ul className="pagination">
//                                 <li className="page-item"><a className="page-link">Previous</a></li>
//                                 {[
//                                     ...new Array(z)
//                                 ].map((item, index) => {
//                                     return (<li className="page-item"><a
//                                         onClick={(event) => this.pagehandler(event, index + 1)}
//                                         className="page-link">{index + 1}</a></li>)
//                                 })}
//                                 <li className="page-item"><a className="page-link">Next</a></li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </section>
//             </Layouts>
//         );
//     }
// }
//

/* harmony default export */ __webpack_exports__["default"] = (function ({
  data,
  catgories
}) {
  const {
    0: posting,
    1: setpost
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data);

  function setcatgory(catgory) {
    let rerult = axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/post/CatgoryFinder?catgory=${catgory}`, {}).then(res => {
      return res.data;
    });

    const asynchronousFunction = async () => {
      let x = await rerult;
      setpost(x);
    };

    asynchronousFunction();
  }

  function pagehandler(event, id) {
    let rest = axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/post/rsultpagin?count=${id}`, {}).then(res => {
      return res.data;
    });

    const asynchronousFunction = async () => {
      let x = await rest;
      setpost(x);
    };

    asynchronousFunction();
  }

  data = posting;
  let z = Math.round(data.length / 12);
  return __jsx(_Layouts__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx("section", {
    className: "bg-dark",
    style: {
      height: "auto"
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("title", null, "\u0628\u0644\u0627\u06AF | \u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A | \u0645\u0642\u0627\u0644\u0627\u062A "), __jsx("meta", {
    name: "description",
    content: "\u0627\u062E\u0631\u06CC\u0646 \u0648 \u0628\u0647 \u0631\u0648\u0632\u062A\u0631\u06CC\u0646 \u0627\u062E\u0628\u0627\u0631 \u0648 \u0645\u0642\u0627\u0644\u0627\u062A \u0631\u0627 \u0628\u0627 \u0645\u0627 \u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u06CC\u062F "
  }), __jsx("meta", {
    name: "keywords",
    content: catgories.map(p => {
      return p.name;
    })
  }), __jsx("meta", {
    name: "author",
    content: "majid javadi"
  }), __jsx("meta", {
    property: "og:url",
    content: "https://superiorweb.ir/"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "./logo.ico"
  })), __jsx("div", {
    className: "w-100 mb-5 d-flex justify-content-center"
  }, __jsx("div", {
    className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.customwith
  }, __jsx("h1", {
    onClick: console.log("error"),
    className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleT + " text-center text-white"
  }, "\u0645\u0642\u0627\u0644\u0627\u062A \u0633\u0648\u067E\u0631\u06CC\u0648\u0631 \u0648\u0628"), __jsx("p", {
    className: "w-100 text-white text-center mt-4 " + _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textslidetwo
  }, "\u0634\u0645\u0627 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u062E\u0631\u06CC\u0646 \u0645\u0642\u0627\u0644\u0627\u062A \u0648 \u0627\u062E\u0628\u0627\u0631 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u062F\u0646\u06CC\u0627\u06CC \u0641\u0646\u0627\u0648\u0631\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0648 \u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A \u0631\u0627 \u0628\u0627 \u0645\u0627 \u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u06CC\u062F \u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0633\u0648\u0627\u0644\u0627\u062A \u062E\u0648\u062F \u0631\u0627 \u0627\u0632 \u0645\u0627 \u0628\u067E\u0631\u0633\u06CC\u062F"))), __jsx("div", {
    id: "posts",
    className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bg_primary + " row justify-content-center mt-5 pt-5 pb-5 mr-0 ml-0"
  }, __jsx("div", {
    className: "row w-100 justify-content-center mb-5"
  }, __jsx("div", {
    className: "col-12 col-lg-4"
  }, __jsx("div", {
    className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.select
  }, __jsx("select", {
    onChange: event => setcatgory(event.target.value),
    className: "w-100 text-center",
    name: "slct",
    id: "slct"
  }, __jsx("option", {
    selected: true,
    disabled: true
  }, "\u0645\u0648\u0636\u0648\u0639 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u062C\u0633\u062A \u0648 \u062C\u0648 \u06A9\u0646\u06CC\u062F"), catgories.map(cat => {
    return __jsx("option", null, cat.name);
  }))))), data.map(card => {
    return __jsx("div", {
      style: {
        cursor: "pointer"
      },
      className: "col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 d-flex text-white justify-content-center m-0 p-2"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: {
        pathname: '/Article',
        query: {
          pts: card.id
        }
      }
    }, __jsx("div", {
      className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card + " card border-0"
    }, __jsx("img", {
      src: "https://api.superiorweb.ir//postimage/" + card.img,
      className: "card-img-top",
      alt: card.title
    }), __jsx("ul", {
      className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.iconcard + " d-flex pr-1 pl-1 w-50"
    }, __jsx("li", null, __jsx("i", {
      className: "fas fa-2x fa-angle-right"
    })), __jsx("li", {
      style: {
        marginRight: " -1vw",
        background: "#ff0000a3"
      }
    }, __jsx("i", {
      className: "fa fa-share-alt",
      "aria-hidden": "true"
    }))), __jsx("div", {
      className: "card-body"
    }, __jsx("h5", {
      className: "card-title"
    }, card.title), __jsx("p", {
      style: {
        textAlign: "justify"
      },
      className: "card-text"
    }, react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(card.description)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: {
        pathname: '/Article',
        query: {
          pts: card.id
        }
      }
    }, __jsx("button", {
      className: "btn btn-primary"
    }, "Read Post"))))));
  }), __jsx("div", {
    className: "d-flex justify-content-center w-100 position-relative mb-3 mt-3"
  }, __jsx("nav", {
    "aria-label": "Page navigation example"
  }, __jsx("ul", {
    className: "pagination"
  }, __jsx("li", {
    className: "page-item"
  }, __jsx("a", {
    className: "page-link"
  }, "Previous")), [...new Array(z)].map((item, index) => {
    return __jsx("li", {
      className: "page-item"
    }, __jsx("a", {
      onClick: event => pagehandler(event, index + 1),
      className: "page-link"
    }, index + 1));
  }), __jsx("li", {
    className: "page-item"
  }, __jsx("a", {
    className: "page-link"
  }, "Next"))))))));
});
async function getServerSideProps() {
  const res = await fetch('https://api.superiorweb.ir/api/post/resultpost', {
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"
    }
  });
  const catgory = await fetch('https://api.superiorweb.ir/api/Catgory/result', {
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"
    }
  });
  const data = await res.json();
  const catgories = await catgory.json();
  return {
    props: {
      data,
      catgories
    }
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "ifbw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layouts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Fdpp");
/* harmony import */ var _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ARU5");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Layouts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", null, __jsx(_header_menu__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("section", {
      className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bgsection + " row justify-content-center align-items-center text-white mr-0 ml-0"
    }, __jsx("div", {
      className: "col-12 pr-0 pl-0"
    }, __jsx("div", {
      className: "w-100 h-100 d-flex justify-content-center align-items-center text-center"
    }, __jsx("div", {
      style: {
        width: "90%"
      }
    }, __jsx("h1", {
      className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.titleslide
    }, "\u0645\u0642\u0627\u0644\u0627\u062A"), __jsx("p", {
      className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textslide
    }, "\u062A\u06CC\u0645 \u0633\u0646\u06CC\u0648\u0631 \u0648\u0628 \u062F\u0631 \u062A\u0644\u0627\u0634 \u0627\u0633\u062A \u062A\u0627 \u0628\u0627 \u0642\u0631\u0627\u0631 \u062F\u0627\u062F\u0646 \u0645\u0637\u0627\u0644\u0628 \u0627\u0645\u0648\u0632\u0646\u062F\u0647 \u062F\u0631 \u062D\u0648\u0632\u0647 \u06CC \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC \u0648 \u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0648 SEO \u0628\u0647 \u0634\u0645\u0627 \u062F\u0631 \u062D\u0644 \u0645\u0634\u06A9\u0644\u0627\u062A \u0648 \u0633\u0648\u0627\u0644\u0627\u062A \u0634\u0645\u0627 \u06A9\u0645\u06A9 \u06A9\u0646\u062F"), __jsx("div", null, __jsx("a", {
      href: "#posts"
    }, __jsx("button", {
      className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnslide
    }, "\u062F\u06CC\u062F\u0646 \u067E\u0633\u062A \u0647\u0627"))), __jsx("div", {
      className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.items + " row justify-content-center mr-0 ml-0 align-items-center"
    }, __jsx("div", {
      className: "col-lg-2 col-3 d-flex justify-content-end justify-content-lg-center"
    }, __jsx("div", {
      className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item
    }, __jsx("i", {
      className: "fab fa-java"
    }))), __jsx("div", {
      className: "col-lg-2 col-3 d-flex justify-content-center"
    }, __jsx("div", {
      className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item
    }, __jsx("i", {
      className: "fab fa-microsoft"
    }))), __jsx("div", {
      className: "col-lg-2 col-3 d-flex justify-content-center text-center"
    }, __jsx("div", {
      className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item
    }, __jsx("i", {
      className: "fab fa-php"
    }))), __jsx("div", {
      className: "col-lg-2 col-3 d-flex justify-content-start justify-content-lg-center"
    }, __jsx("div", {
      className: _component_css_Catgorys_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item
    }, __jsx("i", {
      className: "fab fa-react"
    })))))))), this.props.children);
  }

}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });