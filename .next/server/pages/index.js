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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "1yX1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.wait=wait;exports.error=error;exports.warn=warn;exports.ready=ready;exports.info=info;exports.event=event;exports.prefixes=void 0;var _chalk=_interopRequireDefault(__webpack_require__("49VC"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const prefixes={wait:_chalk.default.cyan('wait')+'  -',error:_chalk.default.red('error')+' -',warn:_chalk.default.yellow('warn')+'  -',ready:_chalk.default.green('ready')+' -',info:_chalk.default.cyan('info')+'  -',event:_chalk.default.magenta('event')+' -'};exports.prefixes=prefixes;function wait(...message){console.log(prefixes.wait,...message);}function error(...message){console.error(prefixes.error,...message);}function warn(...message){console.warn(prefixes.warn,...message);}function ready(...message){console.log(prefixes.ready,...message);}function info(...message){console.log(prefixes.info,...message);}function event(...message){console.log(prefixes.event,...message);}
//# sourceMappingURL=log.js.map

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

/***/ "49VC":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(r,e){"use strict";var n={};function __webpack_require__(e){if(n[e]){return n[e].exports}var t=n[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,__webpack_require__);t.l=true;return t.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(313)}e(__webpack_require__);return startup()}({83:function(r,e,n){var t=n(161);var a=n(840);var o={};var i=Object.keys(t);function wrapRaw(r){var e=function(e){if(e===undefined||e===null){return e}if(arguments.length>1){e=Array.prototype.slice.call(arguments)}return r(e)};if("conversion"in r){e.conversion=r.conversion}return e}function wrapRounded(r){var e=function(e){if(e===undefined||e===null){return e}if(arguments.length>1){e=Array.prototype.slice.call(arguments)}var n=r(e);if(typeof n==="object"){for(var t=n.length,a=0;a<t;a++){n[a]=Math.round(n[a])}}return n};if("conversion"in r){e.conversion=r.conversion}return e}i.forEach(function(r){o[r]={};Object.defineProperty(o[r],"channels",{value:t[r].channels});Object.defineProperty(o[r],"labels",{value:t[r].labels});var e=a(r);var n=Object.keys(e);n.forEach(function(n){var t=e[n];o[r][n]=wrapRounded(t);o[r][n].raw=wrapRaw(t)})});r.exports=o},87:function(r){r.exports=__webpack_require__("jle/")},149:function(r){r.exports=__webpack_require__("V8Zh")},161:function(r,e,n){var t=n(694);var a={};for(var o in t){if(t.hasOwnProperty(o)){a[t[o]]=o}}var i=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in i){if(i.hasOwnProperty(l)){if(!("channels"in i[l])){throw new Error("missing channels property: "+l)}if(!("labels"in i[l])){throw new Error("missing channel labels property: "+l)}if(i[l].labels.length!==i[l].channels){throw new Error("channel and label counts mismatch: "+l)}var s=i[l].channels;var c=i[l].labels;delete i[l].channels;delete i[l].labels;Object.defineProperty(i[l],"channels",{value:s});Object.defineProperty(i[l],"labels",{value:c})}}i.rgb.hsl=function(r){var e=r[0]/255;var n=r[1]/255;var t=r[2]/255;var a=Math.min(e,n,t);var o=Math.max(e,n,t);var i=o-a;var l;var s;var c;if(o===a){l=0}else if(e===o){l=(n-t)/i}else if(n===o){l=2+(t-e)/i}else if(t===o){l=4+(e-n)/i}l=Math.min(l*60,360);if(l<0){l+=360}c=(a+o)/2;if(o===a){s=0}else if(c<=.5){s=i/(o+a)}else{s=i/(2-o-a)}return[l,s*100,c*100]};i.rgb.hsv=function(r){var e;var n;var t;var a;var o;var i=r[0]/255;var l=r[1]/255;var s=r[2]/255;var c=Math.max(i,l,s);var u=c-Math.min(i,l,s);var v=function(r){return(c-r)/6/u+1/2};if(u===0){a=o=0}else{o=u/c;e=v(i);n=v(l);t=v(s);if(i===c){a=t-n}else if(l===c){a=1/3+e-t}else if(s===c){a=2/3+n-e}if(a<0){a+=1}else if(a>1){a-=1}}return[a*360,o*100,c*100]};i.rgb.hwb=function(r){var e=r[0];var n=r[1];var t=r[2];var a=i.rgb.hsl(r)[0];var o=1/255*Math.min(e,Math.min(n,t));t=1-1/255*Math.max(e,Math.max(n,t));return[a,o*100,t*100]};i.rgb.cmyk=function(r){var e=r[0]/255;var n=r[1]/255;var t=r[2]/255;var a;var o;var i;var l;l=Math.min(1-e,1-n,1-t);a=(1-e-l)/(1-l)||0;o=(1-n-l)/(1-l)||0;i=(1-t-l)/(1-l)||0;return[a*100,o*100,i*100,l*100]};function comparativeDistance(r,e){return Math.pow(r[0]-e[0],2)+Math.pow(r[1]-e[1],2)+Math.pow(r[2]-e[2],2)}i.rgb.keyword=function(r){var e=a[r];if(e){return e}var n=Infinity;var o;for(var i in t){if(t.hasOwnProperty(i)){var l=t[i];var s=comparativeDistance(r,l);if(s<n){n=s;o=i}}}return o};i.keyword.rgb=function(r){return t[r]};i.rgb.xyz=function(r){var e=r[0]/255;var n=r[1]/255;var t=r[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92;n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92;var a=e*.4124+n*.3576+t*.1805;var o=e*.2126+n*.7152+t*.0722;var i=e*.0193+n*.1192+t*.9505;return[a*100,o*100,i*100]};i.rgb.lab=function(r){var e=i.rgb.xyz(r);var n=e[0];var t=e[1];var a=e[2];var o;var l;var s;n/=95.047;t/=100;a/=108.883;n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;t=t>.008856?Math.pow(t,1/3):7.787*t+16/116;a=a>.008856?Math.pow(a,1/3):7.787*a+16/116;o=116*t-16;l=500*(n-t);s=200*(t-a);return[o,l,s]};i.hsl.rgb=function(r){var e=r[0]/360;var n=r[1]/100;var t=r[2]/100;var a;var o;var i;var l;var s;if(n===0){s=t*255;return[s,s,s]}if(t<.5){o=t*(1+n)}else{o=t+n-t*n}a=2*t-o;l=[0,0,0];for(var c=0;c<3;c++){i=e+1/3*-(c-1);if(i<0){i++}if(i>1){i--}if(6*i<1){s=a+(o-a)*6*i}else if(2*i<1){s=o}else if(3*i<2){s=a+(o-a)*(2/3-i)*6}else{s=a}l[c]=s*255}return l};i.hsl.hsv=function(r){var e=r[0];var n=r[1]/100;var t=r[2]/100;var a=n;var o=Math.max(t,.01);var i;var l;t*=2;n*=t<=1?t:2-t;a*=o<=1?o:2-o;l=(t+n)/2;i=t===0?2*a/(o+a):2*n/(t+n);return[e,i*100,l*100]};i.hsv.rgb=function(r){var e=r[0]/60;var n=r[1]/100;var t=r[2]/100;var a=Math.floor(e)%6;var o=e-Math.floor(e);var i=255*t*(1-n);var l=255*t*(1-n*o);var s=255*t*(1-n*(1-o));t*=255;switch(a){case 0:return[t,s,i];case 1:return[l,t,i];case 2:return[i,t,s];case 3:return[i,l,t];case 4:return[s,i,t];case 5:return[t,i,l]}};i.hsv.hsl=function(r){var e=r[0];var n=r[1]/100;var t=r[2]/100;var a=Math.max(t,.01);var o;var i;var l;l=(2-n)*t;o=(2-n)*a;i=n*a;i/=o<=1?o:2-o;i=i||0;l/=2;return[e,i*100,l*100]};i.hwb.rgb=function(r){var e=r[0]/360;var n=r[1]/100;var t=r[2]/100;var a=n+t;var o;var i;var l;var s;if(a>1){n/=a;t/=a}o=Math.floor(6*e);i=1-t;l=6*e-o;if((o&1)!==0){l=1-l}s=n+l*(i-n);var c;var u;var v;switch(o){default:case 6:case 0:c=i;u=s;v=n;break;case 1:c=s;u=i;v=n;break;case 2:c=n;u=i;v=s;break;case 3:c=n;u=s;v=i;break;case 4:c=s;u=n;v=i;break;case 5:c=i;u=n;v=s;break}return[c*255,u*255,v*255]};i.cmyk.rgb=function(r){var e=r[0]/100;var n=r[1]/100;var t=r[2]/100;var a=r[3]/100;var o;var i;var l;o=1-Math.min(1,e*(1-a)+a);i=1-Math.min(1,n*(1-a)+a);l=1-Math.min(1,t*(1-a)+a);return[o*255,i*255,l*255]};i.xyz.rgb=function(r){var e=r[0]/100;var n=r[1]/100;var t=r[2]/100;var a;var o;var i;a=e*3.2406+n*-1.5372+t*-.4986;o=e*-.9689+n*1.8758+t*.0415;i=e*.0557+n*-.204+t*1.057;a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a*12.92;o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o*12.92;i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*12.92;a=Math.min(Math.max(0,a),1);o=Math.min(Math.max(0,o),1);i=Math.min(Math.max(0,i),1);return[a*255,o*255,i*255]};i.xyz.lab=function(r){var e=r[0];var n=r[1];var t=r[2];var a;var o;var i;e/=95.047;n/=100;t/=108.883;e=e>.008856?Math.pow(e,1/3):7.787*e+16/116;n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;t=t>.008856?Math.pow(t,1/3):7.787*t+16/116;a=116*n-16;o=500*(e-n);i=200*(n-t);return[a,o,i]};i.lab.xyz=function(r){var e=r[0];var n=r[1];var t=r[2];var a;var o;var i;o=(e+16)/116;a=n/500+o;i=o-t/200;var l=Math.pow(o,3);var s=Math.pow(a,3);var c=Math.pow(i,3);o=l>.008856?l:(o-16/116)/7.787;a=s>.008856?s:(a-16/116)/7.787;i=c>.008856?c:(i-16/116)/7.787;a*=95.047;o*=100;i*=108.883;return[a,o,i]};i.lab.lch=function(r){var e=r[0];var n=r[1];var t=r[2];var a;var o;var i;a=Math.atan2(t,n);o=a*360/2/Math.PI;if(o<0){o+=360}i=Math.sqrt(n*n+t*t);return[e,i,o]};i.lch.lab=function(r){var e=r[0];var n=r[1];var t=r[2];var a;var o;var i;i=t/360*2*Math.PI;a=n*Math.cos(i);o=n*Math.sin(i);return[e,a,o]};i.rgb.ansi16=function(r){var e=r[0];var n=r[1];var t=r[2];var a=1 in arguments?arguments[1]:i.rgb.hsv(r)[2];a=Math.round(a/50);if(a===0){return 30}var o=30+(Math.round(t/255)<<2|Math.round(n/255)<<1|Math.round(e/255));if(a===2){o+=60}return o};i.hsv.ansi16=function(r){return i.rgb.ansi16(i.hsv.rgb(r),r[2])};i.rgb.ansi256=function(r){var e=r[0];var n=r[1];var t=r[2];if(e===n&&n===t){if(e<8){return 16}if(e>248){return 231}return Math.round((e-8)/247*24)+232}var a=16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(t/255*5);return a};i.ansi16.rgb=function(r){var e=r%10;if(e===0||e===7){if(r>50){e+=3.5}e=e/10.5*255;return[e,e,e]}var n=(~~(r>50)+1)*.5;var t=(e&1)*n*255;var a=(e>>1&1)*n*255;var o=(e>>2&1)*n*255;return[t,a,o]};i.ansi256.rgb=function(r){if(r>=232){var e=(r-232)*10+8;return[e,e,e]}r-=16;var n;var t=Math.floor(r/36)/5*255;var a=Math.floor((n=r%36)/6)/5*255;var o=n%6/5*255;return[t,a,o]};i.rgb.hex=function(r){var e=((Math.round(r[0])&255)<<16)+((Math.round(r[1])&255)<<8)+(Math.round(r[2])&255);var n=e.toString(16).toUpperCase();return"000000".substring(n.length)+n};i.hex.rgb=function(r){var e=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e){return[0,0,0]}var n=e[0];if(e[0].length===3){n=n.split("").map(function(r){return r+r}).join("")}var t=parseInt(n,16);var a=t>>16&255;var o=t>>8&255;var i=t&255;return[a,o,i]};i.rgb.hcg=function(r){var e=r[0]/255;var n=r[1]/255;var t=r[2]/255;var a=Math.max(Math.max(e,n),t);var o=Math.min(Math.min(e,n),t);var i=a-o;var l;var s;if(i<1){l=o/(1-i)}else{l=0}if(i<=0){s=0}else if(a===e){s=(n-t)/i%6}else if(a===n){s=2+(t-e)/i}else{s=4+(e-n)/i+4}s/=6;s%=1;return[s*360,i*100,l*100]};i.hsl.hcg=function(r){var e=r[1]/100;var n=r[2]/100;var t=1;var a=0;if(n<.5){t=2*e*n}else{t=2*e*(1-n)}if(t<1){a=(n-.5*t)/(1-t)}return[r[0],t*100,a*100]};i.hsv.hcg=function(r){var e=r[1]/100;var n=r[2]/100;var t=e*n;var a=0;if(t<1){a=(n-t)/(1-t)}return[r[0],t*100,a*100]};i.hcg.rgb=function(r){var e=r[0]/360;var n=r[1]/100;var t=r[2]/100;if(n===0){return[t*255,t*255,t*255]}var a=[0,0,0];var o=e%1*6;var i=o%1;var l=1-i;var s=0;switch(Math.floor(o)){case 0:a[0]=1;a[1]=i;a[2]=0;break;case 1:a[0]=l;a[1]=1;a[2]=0;break;case 2:a[0]=0;a[1]=1;a[2]=i;break;case 3:a[0]=0;a[1]=l;a[2]=1;break;case 4:a[0]=i;a[1]=0;a[2]=1;break;default:a[0]=1;a[1]=0;a[2]=l}s=(1-n)*t;return[(n*a[0]+s)*255,(n*a[1]+s)*255,(n*a[2]+s)*255]};i.hcg.hsv=function(r){var e=r[1]/100;var n=r[2]/100;var t=e+n*(1-e);var a=0;if(t>0){a=e/t}return[r[0],a*100,t*100]};i.hcg.hsl=function(r){var e=r[1]/100;var n=r[2]/100;var t=n*(1-e)+.5*e;var a=0;if(t>0&&t<.5){a=e/(2*t)}else if(t>=.5&&t<1){a=e/(2*(1-t))}return[r[0],a*100,t*100]};i.hcg.hwb=function(r){var e=r[1]/100;var n=r[2]/100;var t=e+n*(1-e);return[r[0],(t-e)*100,(1-t)*100]};i.hwb.hcg=function(r){var e=r[1]/100;var n=r[2]/100;var t=1-n;var a=t-e;var o=0;if(a<1){o=(t-a)/(1-a)}return[r[0],a*100,o*100]};i.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]};i.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]};i.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]};i.gray.hsl=i.gray.hsv=function(r){return[0,0,r[0]]};i.gray.hwb=function(r){return[0,100,r[0]]};i.gray.cmyk=function(r){return[0,0,0,r[0]]};i.gray.lab=function(r){return[r[0],0,0]};i.gray.hex=function(r){var e=Math.round(r[0]/100*255)&255;var n=(e<<16)+(e<<8)+e;var t=n.toString(16).toUpperCase();return"000000".substring(t.length)+t};i.rgb.gray=function(r){var e=(r[0]+r[1]+r[2])/3;return[e/255*100]}},285:function(r,e,n){"use strict";r=n.nmd(r);const t=n(83);const a=(r,e)=>(function(){const n=r.apply(t,arguments);return`[${n+e}m`});const o=(r,e)=>(function(){const n=r.apply(t,arguments);return`[${38+e};5;${n}m`});const i=(r,e)=>(function(){const n=r.apply(t,arguments);return`[${38+e};2;${n[0]};${n[1]};${n[2]}m`});function assembleStyles(){const r=new Map;const e={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};e.color.grey=e.color.gray;for(const n of Object.keys(e)){const t=e[n];for(const n of Object.keys(t)){const a=t[n];e[n]={open:`[${a[0]}m`,close:`[${a[1]}m`};t[n]=e[n];r.set(a[0],a[1])}Object.defineProperty(e,n,{value:t,enumerable:false});Object.defineProperty(e,"codes",{value:r,enumerable:false})}const n=r=>r;const l=(r,e,n)=>[r,e,n];e.color.close="[39m";e.bgColor.close="[49m";e.color.ansi={ansi:a(n,0)};e.color.ansi256={ansi256:o(n,0)};e.color.ansi16m={rgb:i(l,0)};e.bgColor.ansi={ansi:a(n,10)};e.bgColor.ansi256={ansi256:o(n,10)};e.bgColor.ansi16m={rgb:i(l,10)};for(let r of Object.keys(t)){if(typeof t[r]!=="object"){continue}const n=t[r];if(r==="ansi16"){r="ansi"}if("ansi16"in n){e.color.ansi[r]=a(n.ansi16,0);e.bgColor.ansi[r]=a(n.ansi16,10)}if("ansi256"in n){e.color.ansi256[r]=o(n.ansi256,0);e.bgColor.ansi256[r]=o(n.ansi256,10)}if("rgb"in n){e.color.ansi16m[r]=i(n.rgb,0);e.bgColor.ansi16m[r]=i(n.rgb,10)}}return e}Object.defineProperty(r,"exports",{enumerable:true,get:assembleStyles})},313:function(r,e,n){"use strict";const t=n(149);const a=n(285);const o=n(933).stdout;const i=n(341);const l=process.platform==="win32"&&!(process.env.TERM||"").toLowerCase().startsWith("xterm");const s=["ansi","ansi","ansi256","ansi16m"];const c=new Set(["gray"]);const u=Object.create(null);function applyOptions(r,e){e=e||{};const n=o?o.level:0;r.level=e.level===undefined?n:e.level;r.enabled="enabled"in e?e.enabled:r.level>0}function Chalk(r){if(!this||!(this instanceof Chalk)||this.template){const e={};applyOptions(e,r);e.template=function(){const r=[].slice.call(arguments);return chalkTag.apply(null,[e.template].concat(r))};Object.setPrototypeOf(e,Chalk.prototype);Object.setPrototypeOf(e.template,e);e.template.constructor=Chalk;return e.template}applyOptions(this,r)}if(l){a.blue.open="[94m"}for(const r of Object.keys(a)){a[r].closeRe=new RegExp(t(a[r].close),"g");u[r]={get(){const e=a[r];return build.call(this,this._styles?this._styles.concat(e):[e],this._empty,r)}}}u.visible={get(){return build.call(this,this._styles||[],true,"visible")}};a.color.closeRe=new RegExp(t(a.color.close),"g");for(const r of Object.keys(a.color.ansi)){if(c.has(r)){continue}u[r]={get(){const e=this.level;return function(){const n=a.color[s[e]][r].apply(null,arguments);const t={open:n,close:a.color.close,closeRe:a.color.closeRe};return build.call(this,this._styles?this._styles.concat(t):[t],this._empty,r)}}}}a.bgColor.closeRe=new RegExp(t(a.bgColor.close),"g");for(const r of Object.keys(a.bgColor.ansi)){if(c.has(r)){continue}const e="bg"+r[0].toUpperCase()+r.slice(1);u[e]={get(){const e=this.level;return function(){const n=a.bgColor[s[e]][r].apply(null,arguments);const t={open:n,close:a.bgColor.close,closeRe:a.bgColor.closeRe};return build.call(this,this._styles?this._styles.concat(t):[t],this._empty,r)}}}}const v=Object.defineProperties(()=>{},u);function build(r,e,n){const t=function(){return applyStyle.apply(t,arguments)};t._styles=r;t._empty=e;const a=this;Object.defineProperty(t,"level",{enumerable:true,get(){return a.level},set(r){a.level=r}});Object.defineProperty(t,"enabled",{enumerable:true,get(){return a.enabled},set(r){a.enabled=r}});t.hasGrey=this.hasGrey||n==="gray"||n==="grey";t.__proto__=v;return t}function applyStyle(){const r=arguments;const e=r.length;let n=String(arguments[0]);if(e===0){return""}if(e>1){for(let t=1;t<e;t++){n+=" "+r[t]}}if(!this.enabled||this.level<=0||!n){return this._empty?"":n}const t=a.dim.open;if(l&&this.hasGrey){a.dim.open=""}for(const r of this._styles.slice().reverse()){n=r.open+n.replace(r.closeRe,r.open)+r.close;n=n.replace(/\r?\n/g,`${r.close}$&${r.open}`)}a.dim.open=t;return n}function chalkTag(r,e){if(!Array.isArray(e)){return[].slice.call(arguments,1).join(" ")}const n=[].slice.call(arguments,2);const t=[e.raw[0]];for(let r=1;r<e.length;r++){t.push(String(n[r-1]).replace(/[{}\\]/g,"\\$&"));t.push(String(e.raw[r]))}return i(r,t.join(""))}Object.defineProperties(Chalk.prototype,u);r.exports=Chalk();r.exports.supportsColor=o;r.exports.default=r.exports},341:function(r){"use strict";const e=/(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;const n=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;const t=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;const a=/\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;const o=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function unescape(r){if(r[0]==="u"&&r.length===5||r[0]==="x"&&r.length===3){return String.fromCharCode(parseInt(r.slice(1),16))}return o.get(r)||r}function parseArguments(r,e){const n=[];const o=e.trim().split(/\s*,\s*/g);let i;for(const e of o){if(!isNaN(e)){n.push(Number(e))}else if(i=e.match(t)){n.push(i[2].replace(a,(r,e,n)=>e?unescape(e):n))}else{throw new Error(`Invalid Chalk template style argument: ${e} (in style '${r}')`)}}return n}function parseStyle(r){n.lastIndex=0;const e=[];let t;while((t=n.exec(r))!==null){const r=t[1];if(t[2]){const n=parseArguments(r,t[2]);e.push([r].concat(n))}else{e.push([r])}}return e}function buildStyle(r,e){const n={};for(const r of e){for(const e of r.styles){n[e[0]]=r.inverse?null:e.slice(1)}}let t=r;for(const r of Object.keys(n)){if(Array.isArray(n[r])){if(!(r in t)){throw new Error(`Unknown Chalk style: ${r}`)}if(n[r].length>0){t=t[r].apply(t,n[r])}else{t=t[r]}}}return t}r.exports=((r,n)=>{const t=[];const a=[];let o=[];n.replace(e,(e,n,i,l,s,c)=>{if(n){o.push(unescape(n))}else if(l){const e=o.join("");o=[];a.push(t.length===0?e:buildStyle(r,t)(e));t.push({inverse:i,styles:parseStyle(l)})}else if(s){if(t.length===0){throw new Error("Found extraneous } in Chalk template literal")}a.push(buildStyle(r,t)(o.join("")));o=[];t.pop()}else{o.push(c)}});a.push(o.join(""));if(t.length>0){const r=`Chalk template literal is missing ${t.length} closing bracket${t.length===1?"":"s"} (\`}\`)`;throw new Error(r)}return a.join("")})},694:function(r){"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},804:function(r){"use strict";r.exports=((r,e)=>{e=e||process.argv;const n=r.startsWith("-")?"":r.length===1?"-":"--";const t=e.indexOf(n+r);const a=e.indexOf("--");return t!==-1&&(a===-1?true:t<a)})},840:function(r,e,n){var t=n(161);function buildGraph(){var r={};var e=Object.keys(t);for(var n=e.length,a=0;a<n;a++){r[e[a]]={distance:-1,parent:null}}return r}function deriveBFS(r){var e=buildGraph();var n=[r];e[r].distance=0;while(n.length){var a=n.pop();var o=Object.keys(t[a]);for(var i=o.length,l=0;l<i;l++){var s=o[l];var c=e[s];if(c.distance===-1){c.distance=e[a].distance+1;c.parent=a;n.unshift(s)}}}return e}function link(r,e){return function(n){return e(r(n))}}function wrapConversion(r,e){var n=[e[r].parent,r];var a=t[e[r].parent][r];var o=e[r].parent;while(e[o].parent){n.unshift(e[o].parent);a=link(t[e[o].parent][o],a);o=e[o].parent}a.conversion=n;return a}r.exports=function(r){var e=deriveBFS(r);var n={};var t=Object.keys(e);for(var a=t.length,o=0;o<a;o++){var i=t[o];var l=e[i];if(l.parent===null){continue}n[i]=wrapConversion(i,e)}return n}},933:function(r,e,n){"use strict";const t=n(87);const a=n(804);const o=process.env;let i;if(a("no-color")||a("no-colors")||a("color=false")){i=false}else if(a("color")||a("colors")||a("color=true")||a("color=always")){i=true}if("FORCE_COLOR"in o){i=o.FORCE_COLOR.length===0||parseInt(o.FORCE_COLOR,10)!==0}function translateLevel(r){if(r===0){return false}return{level:r,hasBasic:true,has256:r>=2,has16m:r>=3}}function supportsColor(r){if(i===false){return 0}if(a("color=16m")||a("color=full")||a("color=truecolor")){return 3}if(a("color=256")){return 2}if(r&&!r.isTTY&&i!==true){return 0}const e=i?1:0;if(process.platform==="win32"){const r=t.release().split(".");if(Number(process.versions.node.split(".")[0])>=8&&Number(r[0])>=10&&Number(r[2])>=10586){return Number(r[2])>=14931?3:2}return 1}if("CI"in o){if(["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(r=>r in o)||o.CI_NAME==="codeship"){return 1}return e}if("TEAMCITY_VERSION"in o){return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(o.TEAMCITY_VERSION)?1:0}if(o.COLORTERM==="truecolor"){return 3}if("TERM_PROGRAM"in o){const r=parseInt((o.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(o.TERM_PROGRAM){case"iTerm.app":return r>=3?3:2;case"Apple_Terminal":return 2}}if(/-256(color)?$/i.test(o.TERM)){return 2}if(/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(o.TERM)){return 1}if("COLORTERM"in o){return 1}if(o.TERM==="dumb"){return e}return e}function getSupportLevel(r){const e=supportsColor(r);return translateLevel(e)}r.exports={supportsColor:getSupportLevel,stdout:getSupportLevel(process.stdout),stderr:getSupportLevel(process.stderr)}}},function(r){"use strict";!function(){r.nmd=function(r){r.paths=[];if(!r.children)r.children=[];Object.defineProperty(r,"loaded",{enumerable:true,get:function(){return r.l}});Object.defineProperty(r,"id",{enumerable:true,get:function(){return r.i}});return r}}()});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

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

/***/ "KnzP":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"backone": "style_backone__1tFbb",
	"btnmenu": "style_btnmenu__3PvxD",
	"ulmenu": "style_ulmenu__3Ztn1",
	"limenu": "style_limenu__2UohB",
	"Texttopdouble": "style_Texttopdouble__2se1c",
	"centertopte": "style_centertopte__1X_UY",
	"title": "style_title__21KZW",
	"TitleAnime": "style_TitleAnime__3_sOz",
	"undertitle": "style_undertitle__jz3mI",
	"centerclass": "style_centerclass__2mdLC",
	"imgmoues": "style_imgmoues__2OViH",
	"anime": "style_anime__20YMz",
	"btnstoper": "style_btnstoper__31Q4r",
	"titlefromtwo": "style_titlefromtwo__3aaOl",
	"textslide2": "style_textslide2__3POcZ",
	"animeslidetexttwo": "style_animeslidetexttwo__21-PR",
	"textfromtwo": "style_textfromtwo__3Gzlp",
	"heighvhdiv": "style_heighvhdiv__2DS3i",
	"CardSecctionThree": "style_CardSecctionThree__2BAvP",
	"anim3": "style_anim3__2vIQZ",
	"ulmenuFour": "style_ulmenuFour__31FBu",
	"limenuFour": "style_limenuFour__vjK57",
	"catgoryes": "style_catgoryes__1iF1s",
	"h3tozihat": "style_h3tozihat__1JD--",
	"limenublog": "style_limenublog__3mdWO",
	"yellowcolor": "style_yellowcolor__2m5rp",
	"fontsize": "style_fontsize__3Lyo8",
	"fonttextblog": "style_fonttextblog__1uSZH",
	"blogbg": "style_blogbg__1DiIf",
	"bgblog": "style_bgblog__AQbvu",
	"fontbars": "style_fontbars__3v7CS",
	"Heigytthree": "style_Heigytthree__1csfC",
	"HeigytFour": "style_HeigytFour__lKNXJ",
	"FiveHeightImg": "style_FiveHeightImg__2Xwsu",
	"HelightListFour": "style_HelightListFour__iicJX",
	"Heigytfive": "style_Heigytfive__2MQ-2",
	"CardMenu": "style_CardMenu__cdhQN",
	"menu": "style_menu__3Area",
	"menuanime": "style_menuanime__38p7G",
	"ulmenuresponsive": "style_ulmenuresponsive__2R2Xg",
	"limenureposnsive": "style_limenureposnsive__3B_I2",
	"cardmenu": "style_cardmenu__FFgTI",
	"navheader": "style_navheader__AW6Hr",
	"header": "style_header__3S3AQ",
	"sricon": "style_sricon__QYBxG",
	"srtext": "style_srtext__-J77I",
	"TextSrZero": "style_TextSrZero__1Z5sP",
	"withblogsection": "style_withblogsection__2QU5T",
	"dnone": "style_dnone__37-sC",
	"displaynone": "style_displaynone__23jKl",
	"dclose": "style_dclose__3qCb0",
	"animeclose": "style_animeclose__3Vu81",
	"textcardmenu": "style_textcardmenu__3zY7Z"
};


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index_OneSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tAWR");
/* harmony import */ var _component_index_TwoSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("v5b1");
/* harmony import */ var _component_index_ThreeSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("o55I");
/* harmony import */ var _component_index_FourSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("bzQR");
/* harmony import */ var _component_css_style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("KnzP");
/* harmony import */ var _component_css_style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_component_css_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_index_FiveSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("VffC");
/* harmony import */ var _component_index_BlogSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("mC/l");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("gifY");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import '../public/css/bootstrap.min.css'











function Home({
  data
}) {
  console.log(data);
  return __jsx("div", null, __jsx(_component_index_OneSection__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_component_index_TwoSection__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_component_index_ThreeSection__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_component_index_FourSection__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_component_index_FiveSection__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx("section", {
    className: _component_css_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.heighvhdiv + " " + _component_css_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.blogbg + " row mr-0 ml-0 bg-white"
  }, __jsx("div", {
    className: "col-lg-5 text-lg-right text-center mt-lg-0 mt-5 col-md-12 d-flex justify-content-center align-items-center"
  }, __jsx("div", {
    className: _component_css_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.withblogsection
  }, __jsx("h2", null, __jsx("b", {
    className: _component_css_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.yellowcolor
  }, "\u0645\u0642\u0627\u0644\u0627\u062A"), __jsx("br", null), "\u0633\u0648\u067E\u0631\u06CC\u0648\u0631 \u0648\u0628"), __jsx("p", {
    className: _component_css_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.fontsize + " " + _component_css_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.fonttextblog
  }, "\u0634\u0645\u0627 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u062E\u0631\u06CC\u0646 \u0645\u0642\u0627\u0644\u0627\u062A \u0648 \u0627\u062E\u0628\u0627\u0631 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u062F\u0646\u06CC\u0627\u06CC \u0641\u0646\u0627\u0648\u0631\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0648 \u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A \u0631\u0627 \u0628\u0627 \u0645\u0627 \u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u06CC\u062F \u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0633\u0648\u0627\u0644\u0627\u062A \u062E\u0648\u062F \u0631\u0627 \u0627\u0632 \u0645\u0627 \u0628\u067E\u0631\u0633\u06CC\u062F"))), __jsx("div", {
    className: "col-lg-7 col-md-12 d-flex justify-content-center align-items-center"
  }, __jsx("ul", {
    className: "w-100"
  }, data.map(text => {
    return __jsx("li", {
      className: _component_css_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.limenublog
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: {
        pathname: '/Article',
        query: {
          pts: text.id
        }
      }
    }, __jsx("div", null, __jsx("h4", {
      className: "mt-2 mb-3 d-block"
    }, react_html_parser__WEBPACK_IMPORTED_MODULE_8___default()(text.title)), __jsx("p", {
      className: "mt-2"
    }, react_html_parser__WEBPACK_IMPORTED_MODULE_8___default()(text.description), __jsx("br", null), __jsx("i", {
      className: "d-block mt-2"
    }, react_html_parser__WEBPACK_IMPORTED_MODULE_8___default()(text.date))))));
  })))));
}
async function getStaticProps() {
  const res = await fetch('https://api.superiorweb.ir/api/post/resultpost', {
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"
    }
  });
  const datas = await res.json();
  const data = datas.slice(0, 5);
  return {
    props: {
      data
    }
  };
}

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

/***/ "V8Zh":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(r,e){"use strict";var t={};function __webpack_require__(e){if(t[e]){return t[e].exports}var _=t[e]={i:e,l:false,exports:{}};r[e].call(_.exports,_,_.exports,__webpack_require__);_.l=true;return _.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(766)}return startup()}({766:function(r){"use strict";const e=/[|\\{}()[\]^$+*?.-]/g;r.exports=(r=>{if(typeof r!=="string"){throw new TypeError("Expected a string")}return r.replace(e,"\\$&")})}});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "VffC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KnzP");
/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_module_css__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class FiveSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Heigytfive + " row mr-0 ml-0 bg-secondary text-white"
    }, __jsx("div", {
      className: "col-lg-4 col-md-12 align-items-center d-flex justify-content-center"
    }, __jsx("div", {
      className: "p-5"
    }, __jsx("h2", {
      className: ""
    }, __jsx("b", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.yellowcolor
    }, "\u062F\u0631\u0628\u0627\u0631\u0647 \u06CC \u0645\u0627"), __jsx("br", null)), __jsx("p", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fontsize
    }, "\u0645\u0627 \u06CC\u06A9 \u062A\u06CC\u0645 \u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0648 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC \u0628\u0635\u0631\u06CC \u0647\u0633\u062A\u06CC\u0645 \u06A9\u0647 \u062F\u0627\u0631\u0627\u06CC \u0627\u0646\u06AF\u06CC\u0632\u0647 \u0641\u0648\u0642 \u0627\u0644\u0639\u0627\u062F\u0647 \u0628\u0631\u0627\u06CC \u062F\u0633\u062A\u06CC\u0627\u0628\u06CC \u0628\u0647 SEO \u0648 \u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u060C \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0647\u0633\u062A\u06CC\u0645", __jsx("br", null), "\u0645\u0627 \u060C \u062F\u0631 \u0633\u0648\u067E\u0631\u06CC\u0648\u0631 \u0648\u0628 \u060C \u0639\u0644\u0627\u0642\u0647 \u0632\u06CC\u0627\u062F\u06CC \u0628\u0647 \u0634\u0641\u0627\u0641\u06CC\u062A \u060C \u0642\u0627\u0628\u0644\u06CC\u062A \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u060C \u0627\u0639\u062A\u0645\u0627\u062F \u0648 \u0645\u0631\u0627\u0642\u0628\u062A \u0627\u0632 \u0645\u0634\u062A\u0631\u06CC \u0628\u0631\u062C\u0633\u062A\u0647 \u062F\u0627\u0631\u06CC\u0645 . \u0645\u0627 \u0628\u0647 \u0634\u062F\u062A \u0645\u0631\u0627\u0642\u0628 \u0646\u06CC\u0627\u0632\u0647\u0627\u06CC \u0634\u0645\u0627 \u0647\u0633\u062A\u06CC\u0645. \u0645\u0627 \u0627\u0647\u062F\u0627\u0641 \u062A\u062C\u0627\u0631\u06CC \u0634\u0645\u0627 \u0631\u0627 \u062F\u0631\u06A9 \u0645\u06CC \u06A9\u0646\u06CC\u0645 \u0648 \u0622\u0646\u0647\u0627 \u0631\u0627 \u0645\u0637\u0627\u0628\u0642 \u0628\u0627 \u0627\u0631\u0632\u0634\u0647\u0627\u06CC \u062A\u062C\u0627\u0631\u06CC \u0634\u0645\u0627 \u062A\u062D\u0648\u06CC\u0644 \u0645\u06CC \u062F\u0647\u06CC\u0645. \u0647\u062F\u0641 \u0645\u0627 \u0631\u0633\u0627\u0646\u062F\u0646 \u0634\u0645\u0627 \u0628\u0647 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0633\u062A"))), __jsx("div", {
      className: "col-lg-8 col-md-12"
    }, __jsx("div", {
      className: "row mr-0 ml-0"
    }, __jsx("div", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.FiveHeightImg + " col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
    }, __jsx("img", {
      className: "w-100 h-50",
      src: "/img/index/aboutustwo.jpg",
      alt: "team"
    })), __jsx("div", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.FiveHeightImg + " col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
    }, __jsx("img", {
      className: "w-100 h-50",
      src: "/img/index/aboutusone.jpeg",
      alt: "team"
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FiveSection);

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

/***/ "bzQR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FourSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedPostsData", function() { return getSortedPostsData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KnzP");
/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_build_output_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1yX1");
/* harmony import */ var next_dist_build_output_log__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_build_output_log__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class FourSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      result: []
    });
  }

  componentDidMount() {
    const asynchronousFunction = async () => {
      let x = await getSortedPostsData();
      this.setState({
        result: x
      });
    };

    asynchronousFunction();
  }

  render() {
    console.log(this.state.result);
    const link = this.state.result.map(result => {
      return __jsx("li", {
        className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.limenuFour
      }, __jsx("a", {
        href: result.link
      }, " ", result.name));
    });
    const imgproject = this.state.result.map(result => {
      return __jsx("div", {
        className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.catgoryes + " col-md-6 col-lg-6 col-sm-6 col-12 pr-0 pl-0 "
      }, __jsx("a", {
        style: {
          textDecoration: "none"
        },
        href: result.link
      }, __jsx("img", {
        className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imgfour + " w-100 h-100",
        src: "https://api.superiorweb.ir/postimage/" + result.image,
        alt: result.name
      }), __jsx("h3", {
        className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.h3tozihat
      }, result.catgory)));
    });
    return __jsx("section", {
      id: "nmonekar",
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.HeigytFour + " row mr-0 ml-0"
    }, __jsx("div", {
      className: "col-lg-6 col-12 bg-gradient bg-white"
    }, __jsx("div", {
      className: "row justify-content-end"
    }, __jsx("div", {
      className: "col-12 text-center col-lg-12 mt-5 text-left"
    }, __jsx("div", {
      className: "mt-5"
    }, __jsx("h2", {
      className: "text-center"
    }, __jsx("span", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.yellowcolor
    }, "\u0646\u0645\u0648\u0646\u0647"), __jsx("br", null), "\u06A9\u0627\u0631 \u0647\u0627\u06CC \u0645\u0627")), __jsx("div", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.HelightListFour + " d-flex align-items-center justify-content-end"
    }, __jsx("ul", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ulmenuFour
    }, link))))), __jsx("div", {
      className: "col-lg-6 col-12 bg-primary"
    }, __jsx("div", {
      className: "row"
    }, imgproject)));
  }

}
async function getSortedPostsData() {
  const res = await fetch('https://api.superiorweb.ir/api/Projects/result', {
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"
    }
  });
  return res.json();
}

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

/***/ "jle/":
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "mC/l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KnzP");
/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gifY");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class BlogSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      postcard: []
    });
  }

  componentDidMount() {
    // const asynchronousFunction = async () => {
    //     let x = await getServerSideProps()
    // }
    // asynchronousFunction()
    this.setState({
      postcard: this.props.data
    });
    console.log(this.state.postcard);
  }

  render() {
    const cards = this.state.postcard.map(card => {
      return __jsx("li", {
        className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.limenublog
      }, __jsx("h4", {
        className: "mt-2 mb-3 d-block"
      }, react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(card.title)), __jsx("p", {
        className: "mt-2"
      }, react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(card.description), __jsx("br", null), __jsx("i", {
        className: "d-block mt-2"
      }, react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(card.date))));
    });
    return __jsx("section", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heighvhdiv + " " + _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.blogbg + " row mr-0 ml-0 bg-white"
    }, __jsx("div", {
      className: "col-lg-5 text-lg-right text-center mt-lg-0 mt-5 col-md-12 d-flex justify-content-center align-items-center"
    }, __jsx("div", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.withblogsection
    }, __jsx("h2", null, __jsx("b", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.yellowcolor
    }, "\u0645\u0642\u0627\u0644\u0627\u062A"), __jsx("br", null), "\u0633\u0648\u067E\u0631\u06CC\u0648\u0631 \u0648\u0628"), __jsx("p", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fontsize + " " + _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fonttextblog
    }, "\u0634\u0645\u0627 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u062E\u0631\u06CC\u0646 \u0645\u0642\u0627\u0644\u0627\u062A \u0648 \u0627\u062E\u0628\u0627\u0631 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u062F\u0646\u06CC\u0627\u06CC \u0641\u0646\u0627\u0648\u0631\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0648 \u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A \u0631\u0627 \u0628\u0627 \u0645\u0627 \u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u06CC\u062F \u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0633\u0648\u0627\u0644\u0627\u062A \u062E\u0648\u062F \u0631\u0627 \u0627\u0632 \u0645\u0627 \u0628\u067E\u0631\u0633\u06CC\u062F"))), __jsx("div", {
      className: "col-lg-7 col-md-12 d-flex justify-content-center align-items-center"
    }, __jsx("ul", {
      className: "w-100"
    }, cards)));
  }

} // export async function getAllPostIds() {
//
//     const res = await fetch('https://api.superiorweb.ir/api/post/resultpost',{
//         method:"GET",
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json',
//             'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWppZCIsImp0aSI6Ik1hamlkMDk5ME0iLCJ1bmlxdWVfbmFtZSI6Im1hamlkIiwiZXhwIjoxNjM0ODkyMjc3LCJpc3MiOiJKd3RFeGFtcGxlIiwiYXVkIjoiamF2YWRpLmNvbSJ9.gugJJgtODLU4FiuTlNErfrEEx7ZY3z8Lp2qtJOqPtdE"
//
//         },
//     })
//     return res.json()
// }
// export default BlogSection

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

/***/ "o55I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThreeSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KnzP");
/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_module_css__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ThreeSection() {
  return __jsx("section", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Heigytthree + " row mr-0 ml-0 text-white"
  }, __jsx("div", {
    className: "col-lg-3 col-md-12 pr-lg-5 d-flex align-items-center"
  }, __jsx("div", {
    className: "text-lg-right text-center text-md-center mt-lg-0 mt-5"
  }, __jsx("h2", null, __jsx("span", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.yellowcolor
  }, " \u0646\u0642\u0627\u0637 \u0642\u0648\u062A"), __jsx("br", null), "\u06CC\u06A9 \u0648\u0628 \u0633\u0627\u06CC\u062A \u062E\u0648\u0628"), __jsx("p", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fontsize
  }, "\u0627\u06AF\u0631 \u0634\u0645\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u06CC\u06A9 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0642\u062F\u0631\u062A\u0645\u0646\u062F \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F \u06A9\u0647 \u0628\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0622\u0646 \u062E\u062F\u0645\u0627\u062A\u060C \u0645\u062D\u0635\u0648\u0644 \u06CC\u0627 \u0647\u0631 \u0686\u06CC\u0632 \u062F\u06CC\u06AF\u0631\u06CC \u0631\u0627 \u0628\u0647 \u0635\u0641\u062D\u0647 \u0627\u0648\u0644 \u06AF\u0648\u06AF\u0644 \u0628\u06CC\u0627\u0648\u0631\u06CC\u062F\u060C \u0628\u0627\u06CC\u062F \u062A\u0645\u0627\u0645 \u0627\u0635\u0648\u0644 \u0641\u0646\u06CC \u0648 \u0638\u0627\u0647\u0631\u06CC \u0637\u0631\u0627\u062D\u06CC \u06CC\u06A9 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0648 \u0633\u0626\u0648 \u0631\u0627 \u0631\u0639\u0627\u06CC\u062A \u06A9\u0646\u06CC\u062F . \u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A\u060C \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0633\u0626\u0648 \u0648 \u062A\u06A9\u0646\u06CC\u06A9\u200C\u0647\u0627\u06CC \u0622\u0646 \u062F\u0631 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0646\u06CC\u0627\u0632 \u0628\u0647 \u062F\u0627\u0646\u0634 \u0648\u06CC\u0698\u0647\u200C\u0627\u06CC \u062F\u0627\u0631\u062F \u0627\u0632 \u0627\u06CC\u0646\u200C\u0631\u0648 \u0628\u0647\u062A\u0631 \u0627\u0633\u062A \u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A\u060C \u0627\u0641\u0632\u0627\u06CC\u0634 \u0631\u062A\u0628\u0647 \u0648 \u0628\u0647\u06CC\u0646\u0647\u200C\u0633\u0627\u0632\u06CC \u0622\u0646 \u0631\u0627 \u0628\u0647 \u06CC\u06A9 \u062A\u06CC\u0645 \u0645\u062A\u062E\u0635\u0635 \u0628\u0633\u067E\u0627\u0631\u06CC\u062F."), __jsx("hr", {
    className: "w-25 bg-white mt-5"
  }))), __jsx("div", {
    style: {
      overflowX: "hidden"
    },
    className: "col-lg-9 col-md-12 col-12 d-flex align-items-center"
  }, __jsx("div", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CardSecctionThree
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 col-lg-6 col-md-6 col-sm-12  "
  }, __jsx("div", {
    className: "card bg-transparent text-white border-0 text-dark"
  }, __jsx("div", {
    className: "card-header bg-transparent fa-4x border-0"
  }, __jsx("i", {
    className: "fas fa-mobile-alt"
  })), __jsx("div", {
    className: "card-body"
  }, __jsx("h3", {
    className: "card-title"
  }, "Responsive"), __jsx("p", {
    className: "card-text"
  }, "\u0627\u0645\u0631\u0648\u0632\u0647 \u0628\u0627 \u0641\u0631\u0627\u06AF\u06CC\u0631 \u0634\u062F\u0646 \u06AF\u0648\u0634\u06CC \u0647\u0627\u06CC \u0647\u0648\u0634\u0645\u0646\u062F \u0648 \u0648\u0628 \u06AF\u0631\u062F\u06CC \u062A\u0648\u0633\u0637 \u0627\u0646\u0647\u0627 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0647\u0627 \u0628\u0647 \u0633\u0645\u062A \u0637\u0631\u0627\u062D\u06CC \u0647\u0627\u06CC\u06CC \u0645\u062E\u0635\u0648\u0635 \u0648 \u0628\u0647\u062A\u0631 \u0628\u0631\u0627\u06CC \u06AF\u0648\u0634\u06CC \u0647\u0627\u06CC \u0647\u0648\u0634\u0645\u0646\u062F \u0631\u0641\u062A\u0647 \u0627\u0646\u062F . \u0627\u0645\u0631\u0648\u0632\u0647 \u0637\u0628\u0642 \u0627\u0646\u0627\u0644\u06CC\u0632 \u0647\u0627\u06CC \u06AF\u0648\u06AF\u0644 \u0631\u06CC\u0633\u067E\u0627\u0646\u0633\u06CC\u0648 \u0648 \u06CC\u0627 \u0648\u0627\u06A9\u0646\u0634 \u06AF\u0631\u0627 \u0628\u0648\u062F\u0646 \u06CC\u06A9\u06CC \u0627\u0632 \u0627\u0631\u06A9\u0627\u0646 \u0627\u0635\u0644\u06CC \u0633\u0626\u0648 \u0628\u0647 \u0634\u0645\u0627\u0631 \u0645\u06CC\u0631\u0648\u062F \u06A9\u0647 \u0648\u062C\u0648\u062F \u0627\u0646 \u062F\u0631 \u0647\u0631 \u0633\u0627\u06CC\u062A\u06CC \u0636\u0631\u0648\u0631\u06CC \u0627\u0633\u062A")))), __jsx("div", {
    className: "col-12 col-lg-6 col-md-6 col-sm-12 "
  }, __jsx("div", {
    className: "card bg-transparent text-white border-0 text-dark"
  }, __jsx("div", {
    className: "card-header bg-transparent fa-4x border-0 bg-white"
  }, __jsx("i", {
    className: "fas fa-search"
  })), __jsx("div", {
    className: "card-body"
  }, __jsx("h3", {
    className: "card-title"
  }, " SEO "), __jsx("p", {
    className: "card-text"
  }, "\u0645\u0627 \u0645\u0639\u0645\u0627\u0631\u06CC \u0648 \u0627\u0647\u062F\u0627\u0641 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0634\u0645\u0627 \u0631\u0627 \u062A\u062C\u0632\u06CC\u0647 \u0648 \u062A\u062D\u0644\u06CC\u0644 \u0645\u06CC\u06A9\u0646\u06CC\u0645. \u0645\u0627 \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062D\u0627\u0635\u0644 \u0645\u06CC\u06A9\u0646\u06CC\u0645 \u06A9\u0647 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0634\u0645\u0627 \u062A\u0648\u0633\u0637 \u0645\u0648\u062A\u0648\u0631 \u0647\u0627\u06CC \u062C\u0633\u062A \u062C\u0648 \u062F\u0631 \u0635\u0641\u062D\u0627\u062A \u0627\u0648\u0644 \u0642\u0631\u0627\u0631 \u0628\u06AF\u06CC\u0631\u062F \u0648 \u0645\u0648\u0627\u0646\u0639 \u0646\u0631\u0633\u06CC\u062F\u0646 \u0628\u0647 \u0627\u06CC\u0646 \u0647\u062F\u0641 \u0631\u0627 \u0627\u0632 \u0633\u0631 \u0631\u0627\u0647 \u0634\u0645\u0627 \u0628\u0631 \u0645\u06CC\u062F\u0627\u0631\u06CC\u0645")))), __jsx("div", {
    className: "col-12 col-lg-6 col-md-6 col-sm-12 "
  }, __jsx("div", {
    className: "card bg-transparent text-white border-0 text-dark"
  }, __jsx("div", {
    className: "card-header bg-transparent fa-4x border-0 bg-white"
  }, __jsx("i", {
    className: "fas fa-shield-alt"
  })), __jsx("div", {
    className: "card-body"
  }, __jsx("h3", {
    className: "card-title"
  }, "security"), __jsx("p", {
    className: "card-text"
  }, "\u0627\u0645\u0646\u06CC\u062A \u0628\u0631\u0646\u0627\u0645\u0647 \u0648\u0628 \u060C \u0641\u0631\u0622\u06CC\u0646\u062F \u0645\u062D\u0627\u0641\u0638\u062A \u0627\u0632 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0647\u0627 \u0648 \u0633\u0631\u0648\u06CC\u0633 \u0647\u0627\u06CC \u0622\u0646\u0644\u0627\u06CC\u0646 \u062F\u0631 \u0628\u0631\u0627\u0628\u0631 \u062A\u0647\u062F\u06CC\u062F\u0647\u0627\u06CC \u0627\u0645\u0646\u06CC\u062A\u06CC \u0645\u062E\u062A\u0644\u0641 \u0627\u0633\u062A \u06A9\u0647 \u0627\u0632 \u0622\u0633\u06CC\u0628 \u067E\u0630\u06CC\u0631\u06CC \u0647\u0627\u06CC \u06A9\u062F \u0628\u0631\u0646\u0627\u0645\u0647 \u0633\u0648 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC \u06A9\u0646\u062F \u0645\u0627 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0631 \u0628\u0631\u0627\u0628\u0631 \u0627\u06CC\u0646 \u0646\u0648\u0639 \u062A\u0647\u062F\u06CC\u062F\u0627\u062A \u0627\u06CC\u0645\u0646 \u0645\u06CC\u06A9\u0646\u06CC\u0645 \u0648 \u0627\u0645\u0646\u06CC\u062A \u0628\u0631\u0646\u0627\u0645\u0647 \u06CC \u0634\u0645\u0627 \u0631\u0627 \u062A\u0636\u0645\u06CC\u0646 \u0645\u06CC\u06A9\u0646\u06CC\u0645")))), __jsx("div", {
    className: "col-12 col-lg-6 col-md-6 col-sm-12 "
  }, __jsx("div", {
    className: "card bg-transparent text-white border-0 text-dark"
  }, __jsx("div", {
    className: "card-header bg-transparent fa-4x border-0 bg-white"
  }, __jsx("i", {
    className: "fas fa-comment-dollar"
  }), "                                        "), __jsx("div", {
    className: "card-body"
  }, __jsx("h3", {
    className: "card-title"
  }, "Digital Marketing"), __jsx("p", {
    className: "card-text"
  }, "\u0645\u0627 \u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u0645 \u062A\u062C\u0627\u0631\u062A \u0634\u0645\u0627 \u0631\u0627 \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0633\u0627\u06CC\u062A \u0647\u0627\u06CC \u0631\u0633\u0627\u0646\u0647 \u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC (\u062A\u0648\u06CC\u06CC\u062A\u0631 \u060C \u0641\u06CC\u0633 \u0628\u0648\u06A9 \u060C TikTok \u0648 \u0645\u0648\u0627\u0631\u062F \u062F\u06CC\u06AF\u0631) \u060C \u0633\u06CC\u0633\u062A\u0645 \u0639\u0627\u0645\u0644 \u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC \u0645\u0648\u062A\u0648\u0631 \u062C\u0633\u062A\u062C\u0648 (SEM) \u0645\u0627\u0646\u0646\u062F Google Adwords \u0648 \u0647\u0631 \u0646\u0642\u0637\u0647 \u062A\u0645\u0627\u0633 \u062F\u06CC\u06AF\u0631\u06CC \u06A9\u0647 \u062F\u0631 \u0627\u06A9\u0648\u0633\u06CC\u0633\u062A\u0645 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644 \u0638\u0627\u0647\u0631 \u0645\u06CC \u0634\u0648\u062F \u060C \u0627\u0631\u062A\u0642\u0627 \u062F\u0647\u06CC\u0645."))))))));
}

/***/ }),

/***/ "tAWR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OneSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KnzP");
/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function OneSection() {
  const menuOPCL = () => {
    const xc = document.getElementById("menu");
    const bars = document.getElementById("bars");

    if (xc.classList.contains("disnone")) {
      xc.classList.remove("disnone");
      xc.classList.remove(_css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.displaynone);
      xc.classList.add(_css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dnone);
      xc.classList.remove(_css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dclose);
      bars.classList.remove("fa", "fa-bars");
      bars.classList.add("fas", "fa-times");
    } else {
      xc.classList.add("disnone");
      xc.classList.remove(_css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dnone);
      xc.classList.add(_css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dclose);
      bars.classList.add("fa", "fa-bars");
      bars.classList.remove("fas", "fa-times");
    }
  };

  return __jsx("section", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A | \u0633\u0646\u06CC\u0648\u0631 \u0648\u0628 | SEO | \u0648\u0628 \u0633\u0627\u06CC\u062A"), __jsx("meta", {
    name: "description",
    content: "\u0637\u0631\u0627\u062D\u06CC \u0627\u0646\u0648\u0627\u0639 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0647\u0627\u06CC \u0641\u0631\u0648\u0634\u06AF\u0627\u0647\u06CC \u060C \u062E\u0628\u0631\u06CC \u060C \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u062F\u0631 \u0628\u0633\u062A\u0631 \u0648\u0631\u062F\u067E\u0631\u0633 \u0648 cms \u0647\u0627\u06CC \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u0633\u0646\u06CC\u0648\u0631 \u0648\u0628 "
  }), __jsx("meta", {
    name: "keywords",
    content: "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A, \u0637\u0631\u0627\u062D\u06CC \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646, \u0633\u0646\u06CC\u0648\u0631 \u0648\u0628, SEO , \u0633\u0627\u06CC\u062A \u0641\u0631\u0648\u0634\u06AF\u0627\u0647\u06CC"
  }), __jsx("meta", {
    name: "author",
    content: "majid javadi"
  }), __jsx("meta", {
    property: "og:url",
    content: "https://superiorweb.ir/"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "./logo.ico"
  })), __jsx("header", {
    id: "menu",
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header + " " + _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.displaynone + " disnone"
  }, __jsx("div", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menu
  }), __jsx("nav", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navheader
  }, __jsx("ul", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ulmenuresponsive
  }, __jsx("li", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.limenureposnsive
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, "\u062E\u0627\u0646\u0647")), __jsx("li", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.limenureposnsive
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/Cv"
  }, "\u0631\u0632\u0648\u0645\u0647")), __jsx("li", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.limenureposnsive
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/Articles"
  }, "\u0628\u0644\u0627\u06AF")), __jsx("li", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.limenureposnsive
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ConnectUs"
  }, "\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627")))), __jsx("div", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardmenu
  }, __jsx("div", {
    style: {
      background: "rgba(0,0,0,0)",
      maxWidth: "18rem"
    },
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.CardMenu + " card border-0 mt-5 mt-xxl-0 text-white mr-5"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("img", {
    src: "/img/index/logotext.png",
    className: "w-100"
  }))))), __jsx("div", {
    className: "row mr-0 ml-0"
  }, __jsx("div", {
    className: "col-12 pl-0 pr-0"
  }, __jsx("div", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.backone
  }, __jsx("div", {
    className: "row mr-0 ml-0"
  }, __jsx("div", {
    className: "col-8 col-lg-1 col-md-10 col-sm-10 col-xl-1 mt-5"
  }, __jsx("button", {
    onClick: menuOPCL,
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btnmenu
  }, __jsx("i", {
    id: "bars",
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fontbars + " fa fa-bars"
  }))), __jsx("div", {
    className: "col d-none d-lg-block col-lg-10 col-md-8 col-sm-8"
  }, __jsx("div", {
    className: "w-100 d-none d-md-block"
  }, __jsx("ul", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ulmenu
  }, __jsx("li", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.limenu
  }, __jsx("a", null, "windows")), __jsx("li", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.limenu
  }, __jsx("a", null, "android")), __jsx("li", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.limenu
  }, __jsx("a", null, "ios")), __jsx("li", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.limenu
  }, __jsx("a", null, "website"))))), __jsx("div", {
    className: "col-4 col-lg-1 col-md-2 col-sm-2 col-xl-1 mt-3"
  }, __jsx("img", {
    src: "/img/index/logotext.png",
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo + " w-100 h-100"
  }))), __jsx("div", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.centertopte + " row justify-content-center mr-0 ml-0"
  }, __jsx("div", {
    className: "col-8 text-center"
  }, __jsx("h1", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title + " mt-5 animate__animated animate__bounceInDown"
  }, __jsx("span", {
    className: "text-danger"
  }, "\u0645\u0634\u0627\u0648\u0631\u0647 \u0648 \u062A\u0648\u0633\u0639\u0647"), __jsx("br", null), "\u0633\u0627\u06CC\u062A \u0648 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0628\u0627 \u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F \u0647\u0627\u06CC \u0631\u0648\u0632 \u062F\u0646\u06CC\u0627"), __jsx("h4", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.undertitle + " text-white mt-4"
  }, "\u0645\u0627 \u0627\u0641\u062A\u062E\u0627\u0631 \u0645\u06CC \u06A9\u0646\u06CC\u0645 \u06A9\u0647 \u062A\u0646\u0647\u0627 \u062A\u06CC\u0645 \u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0628\u0627 \u06A9\u06CC\u0641\u06CC\u062A \u0645\u0634\u062A\u0631\u06CC \u0645\u062F\u0627\u0631 \u0647\u0633\u062A\u06CC\u0645 \u06A9\u0647 \u0645\u06CC \u062A\u0648\u0627\u0646\u062F \u062A\u0645\u0627\u0645 \u0646\u06CC\u0627\u0632\u0647\u0627\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A \u0634\u0645\u0627 \u0631\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u06A9\u0646\u062F."), __jsx("div", {
    className: "mt-lg-5"
  }, __jsx("button", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btnstoper
  }, __jsx("a", {
    href: "#nmonekar"
  }, "\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631")), __jsx("button", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btnstoper
  }, __jsx("a", {
    href: "#khadamat"
  }, "\u062E\u062F\u0645\u0627\u062A \u0645\u0627"))))), __jsx("div", {
    className: "row mr-0 ml-0 justify-content-center mt-5"
  }, __jsx("div", {
    className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.centerclass + " col-4 col-sm-4 col-md-2 col-lg-1 mt-lg-5 mt-sm-2 mt-1"
  }))))));
}

/***/ }),

/***/ "v5b1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KnzP");
/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_module_css__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class TwoSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", null, __jsx("div", {
      className: "container-lg"
    }, __jsx("div", {
      id: "khadamat",
      className: "row mt-5 mb-5"
    }, __jsx("div", {
      style: {
        borderLeft: "2px solid black"
      },
      className: "col-lg-6 col-12"
    }, __jsx("ul", null, __jsx("li", {
      className: "d-flex mt-5 align-items-center"
    }, __jsx("div", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sricon
    }, __jsx("i", {
      className: "fas fa-shopping-basket"
    }), "                                    "), __jsx("div", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.srtext
    }, __jsx("h3", null, "\u0648\u0628 \u0633\u0627\u06CC\u062A \u0641\u0631\u0648\u0634\u06AF\u0627\u0647\u06CC"), __jsx("h6", null, "\u0637\u0631\u0627\u062D\u06CC \u0627\u0646\u0648\u0627\u0639 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0647\u0627\u06CC \u0641\u0631\u0648\u0634\u06AF\u0627\u0647\u06CC"))), __jsx("li", {
      className: "d-flex mt-5 align-items-center"
    }, __jsx("div", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sricon
    }, __jsx("i", {
      className: "fas fa-newspaper"
    }), "                                    "), __jsx("div", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.srtext
    }, __jsx("h3", null, "\u0648\u0628 \u0633\u0627\u06CC\u062A \u062E\u0628\u0631\u06CC"), __jsx("h6", null, "\u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A \u062E\u0628\u0631\u06CC \u0648 \u062E\u0628\u0631 \u062E\u0648\u0627\u0646"))), __jsx("li", {
      className: "d-flex mt-5 align-items-center"
    }, __jsx("div", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sricon
    }, __jsx("i", {
      className: "fas fa-building"
    }), "                                    "), __jsx("div", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.srtext
    }, __jsx("h3", null, "\u0648\u0628 \u0633\u0627\u06CC\u062A \u0634\u0631\u06A9\u062A\u06CC"), __jsx("h6", null, "\u0637\u0631\u0627\u062D\u06CC \u062D\u0631\u0641\u0647 \u0627\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A \u0634\u0631\u06A9\u062A\u06CC \u06AF\u0627\u0645\u06CC \u0628\u0631\u0627\u06CC \u0628\u0631\u0646\u062F \u0634\u062F\u0646"))), __jsx("li", {
      className: "d-flex mt-5 align-items-center"
    }, __jsx("div", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sricon
    }, __jsx("i", {
      className: "fas fa-people-arrows"
    }), "                                    "), __jsx("div", {
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.srtext
    }, __jsx("h3", null, "\u0648\u0628 \u0633\u0627\u06CC\u062A \u0634\u062E\u0635\u06CC"), __jsx("h6", null, "\u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A \u062D\u0631\u0641\u0647 \u0627\u06CC \u0645\u0637\u0627\u0628\u0642 \u0628\u0627 \u0646\u06CC\u0627\u0632 \u0647\u0627\u06CC \u0634\u0645\u0627"))))), __jsx("div", {
      className: "col-lg-6 col-12 d-flex align-items-center justify-content-center"
    }, __jsx("div", {
      className: "w-75 mt-5"
    }, __jsx("h2", {
      className: "text-center"
    }, " \u0686\u0631\u0627 \u062F\u0634\u062A\u0646 \u0633\u0627\u06CC\u062A \u0627\u0647\u0645\u06CC\u062A \u062F\u0627\u0631\u062F "), __jsx("h5", {
      style: {
        textAlign: "justify"
      },
      className: _css_style_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.TextSrZero + " mt-4"
    }, "\u062F\u0631 \u062F\u0646\u06CC\u0627\u06CC \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644 \u0627\u0645\u0631\u0648\u0632 \u060C \u0648\u0628 \u0633\u0627\u06CC\u062A \u0634\u0645\u0627 \u0627\u0648\u0644\u06CC\u0646 \u062A\u0639\u0627\u0645\u0644 \u0645\u0635\u0631\u0641 \u06A9\u0646\u0646\u062F\u06AF\u0627\u0646 \u0628\u0627 \u062A\u062C\u0627\u0631\u062A \u0634\u0645\u0627 \u0627\u0633\u062A. \u0628\u0647 \u0647\u0645\u06CC\u0646 \u062F\u0644\u06CC\u0644 \u0627\u0633\u062A \u06A9\u0647 \u062A\u0642\u0631\u06CC\u0628\u0627\u064B 95 \u062F\u0631\u0635\u062F \u0627\u0632 \u0627\u0648\u0644\u06CC\u0646 \u0628\u0631\u062F\u0627\u0634\u062A \u06A9\u0627\u0631\u0628\u0631 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0627\u0633\u062A. \u0647\u0645\u0686\u0646\u06CC\u0646 \u0628\u0647 \u0647\u0645\u06CC\u0646 \u062F\u0644\u06CC\u0644 \u0627\u0633\u062A \u06A9\u0647 \u062E\u062F\u0645\u0627\u062A \u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0645\u06CC \u062A\u0648\u0627\u0646\u0646\u062F \u062A\u0623\u062B\u06CC\u0631 \u0632\u06CC\u0627\u062F\u06CC \u0628\u0631 \u062E\u0637 \u0627\u0635\u0644\u06CC \u0634\u0631\u06A9\u062A \u0634\u0645\u0627 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u0646\u062F. \u0628\u0647 \u0647\u0645\u06CC\u0646 \u062F\u0644\u06CC\u0644 \u0634\u0631\u06A9\u062A \u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631\u06CC \u0646\u0647 \u062A\u0646\u0647\u0627 \u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A \u062E\u0648\u062F \u0631\u0627 \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u0645\u062C\u062F\u062F \u0645\u06CC \u06A9\u0646\u0646\u062F \u0628\u0644\u06A9\u0647 \u0628\u0627 \u0622\u0698\u0627\u0646\u0633 \u0647\u0627\u06CC \u0637\u0631\u0627\u062D\u06CC \u0648\u0628  \u0647\u0645\u06A9\u0627\u0631\u06CC \u0645\u06CC \u06A9\u0646\u0646\u062F. \u0628\u0627 \u062F\u0627\u0634\u062A\u0646 \u0628\u06CC\u0634 \u0686\u0646\u062F \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647 \u060C \u0645\u0627 \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062F\u0627\u0631\u06CC\u0645 \u06A9\u0647 \u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u0645 \u06CC\u06A9 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0633\u0641\u0627\u0631\u0634\u06CC \u0637\u0631\u0627\u062D\u06CC \u06A9\u0646\u06CC\u0645 \u06A9\u0647 \u0641\u0631\u0648\u0634 \u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631 \u0645\u0646\u062D\u0635\u0631 \u0628\u0647 \u0641\u0631\u062F \u0634\u0645\u0627 \u0631\u0627 \u0647\u062F\u0627\u06CC\u062A \u06A9\u0646\u062F. \u0627\u0645\u0631\u0648\u0632 \u0628\u0627 \u0645\u0627 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F \u062A\u0627 \u062F\u0631\u0628\u0627\u0631\u0647 \u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631 \u062E\u0648\u062F \u0628\u06CC\u0634\u062A\u0631 \u0628\u06AF\u0648\u06CC\u06CC\u062F \u0648 \u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A \u0633\u0641\u0627\u0631\u0634\u06CC \u062E\u0648\u062F \u0631\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TwoSection);

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