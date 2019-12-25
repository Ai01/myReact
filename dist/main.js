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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_react_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/react/index */ \"./src/react/index.js\");\n/* harmony import */ var _src_reactDom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/reactDom/index.js */ \"./src/reactDom/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nfunction Welcome(props) {\n  return _src_react_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h1\", null, \"Hello, \", props.name);\n}\n\nvar Counter =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Counter, _React$Component);\n\n  function Counter(props) {\n    var _this;\n\n    _classCallCheck(this, Counter);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Counter).call(this, props));\n    _this.state = {\n      num: 0\n    };\n    return _this;\n  }\n\n  _createClass(Counter, [{\n    key: \"componentWillUpdate\",\n    value: function componentWillUpdate() {\n      console.log('update');\n    }\n  }, {\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      console.log('mount');\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick() {\n      for (var i = 0; i < 100; i++) {\n        // this.setState({ num: this.state.num + 1 });\n        this.setState(function (prevState) {\n          return {\n            num: prevState.num + 1\n          };\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return _src_react_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n        onClick: function onClick() {\n          return _this2.onClick();\n        }\n      }, _src_react_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(Welcome, {\n        name: 'baihaihui'\n      }), _src_react_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h1\", null, \"number: \", this.state.num), _src_react_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", null, \"add\"));\n    }\n  }]);\n\n  return Counter;\n}(_src_react_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component);\n\n_src_reactDom_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(_src_react_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(Counter, null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/react/component.js":
/*!********************************!*\
  !*** ./src/react/component.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setState */ \"./src/react/setState.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n/**\n * @description: react.Component的实现\n *\n * @date: 2019/12/24 10:13 下午\n */\n\nvar Component =\n/*#__PURE__*/\nfunction () {\n  function Component() {\n    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Component);\n\n    this.state = {};\n    this.props = props;\n  } // 改变state\n\n\n  _createClass(Component, [{\n    key: \"setState\",\n    value: function setState(stateChanges) {\n      Object(_setState__WEBPACK_IMPORTED_MODULE_0__[\"enqueueSetState\"])(stateChanges, this);\n    }\n  }]);\n\n  return Component;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n//# sourceURL=webpack:///./src/react/component.js?");

/***/ }),

/***/ "./src/react/createElement.js":
/*!************************************!*\
  !*** ./src/react/createElement.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/react/component.js\");\n\n\nfunction createElement(tag, attrs) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  return {\n    tag: tag,\n    attrs: attrs,\n    children: children\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack:///./src/react/createElement.js?");

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/react/createElement.js\");\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./src/react/component.js\");\n\n\nvar React = {\n  createElement: _createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Component: _component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (React);\n\n//# sourceURL=webpack:///./src/react/index.js?");

/***/ }),

/***/ "./src/react/setState.js":
/*!*******************************!*\
  !*** ./src/react/setState.js ***!
  \*******************************/
/*! exports provided: enqueueSetState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enqueueSetState\", function() { return enqueueSetState; });\n/* harmony import */ var _reactDom_diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reactDom/diff */ \"./src/reactDom/diff.js\");\n\nvar setStateQueue = [];\nvar renderQueue = [];\n\nfunction defer(fn) {\n  return Promise.resolve().then(fn);\n}\n\nfunction flush() {\n  var item, component; // 遍历\n\n  while (item = setStateQueue.shift()) {\n    var _item = item,\n        stateChange = _item.stateChange,\n        _component = _item.component; // 如果没有prevState，则将当前的state作为初始的prevState\n    // 利用prevState做区分\n\n    if (!_component.prevState) {\n      _component.prevState = Object.assign({}, _component.state);\n    } // 如果stateChange是一个方法，也就是setState的第二种形式\n\n\n    if (typeof stateChange === 'function') {\n      Object.assign(_component.state, stateChange(_component.prevState, _component.props));\n    } else {\n      // 如果stateChange是一个对象，则直接合并到setState中\n      Object.assign(_component.state, stateChange);\n    }\n\n    _component.prevState = _component.state;\n    console.log(_component.state);\n  } // 渲染每一个组件\n\n\n  while (component = renderQueue.shift()) {\n    Object(_reactDom_diff__WEBPACK_IMPORTED_MODULE_0__[\"renderComponent\"])(component);\n  }\n}\n\nfunction enqueueSetState(stateChange, component) {\n  // 如果queue的长度是0，也就是在上次flush执行之后第一次往队列里添加\n  if (setStateQueue.length === 0) {\n    defer(flush);\n  }\n\n  setStateQueue.push({\n    stateChange: stateChange,\n    component: component\n  }); // 如果renderQueue里没有当前组件，则添加到队列中\n\n  if (!renderQueue.some(function (item) {\n    return item === component;\n  })) {\n    renderQueue.push(component);\n  }\n}\n\n//# sourceURL=webpack:///./src/react/setState.js?");

/***/ }),

/***/ "./src/reactDom/diff.js":
/*!******************************!*\
  !*** ./src/reactDom/diff.js ***!
  \******************************/
/*! exports provided: renderComponent, setComponentProps, createComponent, setAttribute, diff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderComponent\", function() { return renderComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setComponentProps\", function() { return setComponentProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createComponent\", function() { return createComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAttribute\", function() { return setAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"diff\", function() { return diff; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction isSameNodeType(dom, vnode) {\n  if (typeof vnode === 'string' || typeof vnode === 'number') {\n    return dom.nodeType === 3;\n  }\n\n  if (typeof vnode.tag === 'string') {\n    return dom.nodeName.toLowerCase() === vnode.tag.toLowerCase();\n  }\n\n  return dom && dom._component && dom._component.constructor === vnode.tag;\n}\n\nfunction removeNode(dom) {\n  if (dom && dom.parentNode) {\n    dom.parentNode.removeChild(dom);\n  }\n}\n\nfunction unmountComponent(component) {\n  if (component.componentWillUnmount) component.componentWillUnmount();\n  removeNode(component.base);\n}\n/**\n * @description: renderComponent\n *\n * @date: 2019/12/24 10:36 下午\n */\n\n\nfunction renderComponent(component) {\n  var base;\n  var renderer = component.render();\n\n  if (component.base && component.componentWillUpdate) {\n    component.componentWillUpdate();\n  }\n\n  base = diffNode(component.base, renderer);\n  console.log(base);\n  component.base = base;\n  base._component = component;\n\n  if (component.base) {\n    if (component.componentDidUpdate) component.componentDidUpdate();\n  } else if (component.componentDidMount) {\n    component.componentDidMount();\n  }\n\n  component.base = base;\n  base._component = component;\n}\n/**\n * @description: setComponentProps\n *\n * @date: 2019/12/24 10:19 下午\n */\n\nfunction setComponentProps(component, props) {\n  if (!component.base) {\n    if (component.componentWillMount) component.componentWillMount();\n  } else if (component.componentWillReceiveProps) {\n    component.componentWillReceiveProps(props);\n  }\n\n  component.props = props;\n  renderComponent(component);\n}\n/**\n * @description: createComponent\n *\n * @date: 2019/12/24 10:16 下午\n */\n\nfunction createComponent(component, props) {\n  var inst;\n\n  if (component.prototype && component.prototype.render) {\n    // 如果component继承自react.component\n    inst = new component(props);\n  } else {\n    inst = new component(props);\n    inst.constructor = component;\n\n    inst.render = function () {\n      return this.constructor(props);\n    };\n  }\n\n  return inst;\n}\n/**\n * @description: setAttribute需要对className, style进行处理\n *\n * @date: 2019/12/24 6:59 下午\n */\n\nvar setAttribute = function setAttribute(dom, name, value) {\n  // className\n  if (name === 'className') name = 'class'; // click事件\n\n  if (/^on\\w+$/.test(name)) {\n    name = name.toLowerCase();\n    dom[name] = value || '';\n  } else if (name === 'style') {\n    if (!value || typeof value === 'string') {\n      dom.style.cssText = value;\n    } else if (value && _typeof(value) === 'object') {\n      for (var _name in value) {\n        // 可以通过style={ width: 20 }这种形式来设置样式，可以省略掉单位px\n        dom.style[_name] = typeof value[_name] === 'number' ? value[_name] + 'px' : value[_name];\n      }\n    }\n  } else {\n    // 普通属性设置\n    if (name in dom) {\n      dom[name] = value || '';\n    }\n\n    if (value) {\n      dom.setAttribute(name, value);\n    } else {\n      dom.removeAttribute(name);\n    }\n  }\n};\n/**\n * @description: diff attributes\n *\n * @date: 2019/12/24 11:27 下午\n */\n\nfunction diffAttributes(dom, vnode) {\n  var old = {}; // 当前DOM的属性\n\n  var attrs = vnode.attrs; // 虚拟DOM的属性\n\n  for (var i = 0; i < dom.attributes.length; i++) {\n    var attr = dom.attributes[i];\n    old[attr.name] = attr.value;\n  } // 如果原来的属性不在新的属性当中，则将其移除掉（属性值设为undefined）\n\n\n  for (var name in old) {\n    if (!(name in attrs)) {\n      setAttribute(dom, name, undefined);\n    }\n  } // 更新新的属性值\n\n\n  for (var _name2 in attrs) {\n    if (old[_name2] !== attrs[_name2]) {\n      setAttribute(dom, _name2, attrs[_name2]);\n    }\n  }\n}\n/**\n * @description: diff children\n *\n * @date: 2019/12/24 11:29 下午\n */\n\n\nfunction diffChildren(dom, vchildren) {\n  var domChildren = dom.childNodes;\n  var children = [];\n  var keyed = {}; // 将有key的节点和没有key的节点分开\n\n  if (domChildren.length > 0) {\n    for (var i = 0; i < domChildren.length; i++) {\n      var child = domChildren[i];\n      var key = child.key;\n\n      if (key) {\n        keyed[key] = child;\n      } else {\n        children.push(child);\n      }\n    }\n  }\n\n  if (vchildren && vchildren.length > 0) {\n    var min = 0;\n    var childrenLen = children.length;\n\n    for (var _i = 0; _i < vchildren.length; _i++) {\n      var vchild = vchildren[_i];\n      var _key = vchild.key;\n\n      var _child = void 0; // 如果有key，找到对应key值的节点\n\n\n      if (_key) {\n        if (keyed[_key]) {\n          _child = keyed[_key];\n          keyed[_key] = undefined;\n        } // 如果没有key，则优先找类型相同的节点\n\n      } else if (min < childrenLen) {\n        for (var j = min; j < childrenLen; j++) {\n          var c = children[j];\n\n          if (c && isSameNodeType(c, vchild)) {\n            _child = c;\n            children[j] = undefined;\n            if (j === childrenLen - 1) childrenLen--;\n            if (j === min) min++;\n            break;\n          }\n        }\n      } // 对比\n\n\n      _child = diff(_child, vchild); // 更新DOM\n\n      var f = domChildren[_i];\n\n      if (_child && _child !== dom && _child !== f) {\n        // 如果更新前的对应位置为空，说明此节点是新增的\n        if (!f) {\n          dom.appendChild(_child); // 如果更新后的节点和更新前对应位置的下一个节点一样，说明当前位置的节点被移除了\n        } else if (_child === f.nextSibling) {\n          removeNode(f); // 将更新后的节点移动到正确的位置\n        } else {\n          // 注意insertBefore的用法，第一个参数是要插入的节点，第二个参数是已存在的节点\n          dom.insertBefore(_child, f);\n        }\n      }\n    }\n  }\n}\n/**\n * @description: diff component\n *\n * @date: 2019/12/24 11:30 下午\n */\n\n\nfunction diffComponent(dom, vnode) {\n  var c = dom && dom._component;\n  var oldDom = dom; // 如果组件类型没有变化，则重新set props\n\n  if (c && c.constructor === vnode.tag) {\n    setComponentProps(c, vnode.attrs);\n    dom = c.base; // 如果组件类型变化，则移除掉原来组件，并渲染新的组件\n  } else {\n    if (c) {\n      unmountComponent(c);\n      oldDom = null;\n    }\n\n    c = createComponent(vnode.tag, vnode.attrs);\n    setComponentProps(c, vnode.attrs);\n    dom = c.base;\n\n    if (oldDom && dom !== oldDom) {\n      oldDom._component = null;\n      removeNode(oldDom);\n    }\n  }\n\n  return dom;\n}\n/**\n * @description: dom diff\n *\n * 对比真实DOM和虚拟DOM，最后返回更新后的DOM。这个实现在对比中途就更新节点\n * @date: 2019/12/24 11:21 下午\n */\n\n\nfunction diffNode(dom, vnode) {\n  var out = dom;\n  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';\n  if (typeof vnode === 'number') vnode = String(vnode); // 比较文本节点\n\n  if (typeof vnode === 'string') {\n    if (dom && dom.nodeType === 3) {\n      // nodeType: https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType\n      if (dom.textContent !== vnode) {\n        dom.textContent = vnode;\n      }\n    } else {\n      // 如果dom不是文本节点。vnode是文本节点\n      out = document.createTextNode(vnode);\n\n      if (dom && dom.parentNode) {\n        dom.parentNode.replaceChild(out, dom);\n      }\n    }\n\n    return out;\n  } // 比较component\n\n\n  if (typeof vnode.tag === 'function') {\n    return diffComponent(dom, vnode);\n  } // 对比非文本节点\n  // 原dom不存在了\n\n\n  if (!dom || !isSameNodeType(dom, vnode)) {\n    out = document.createElement(vnode.tag);\n\n    if (dom) {\n      _toConsumableArray(dom.childNodes).map(out.appendChild); // 将原来的子节点移到新节点下\n\n\n      if (dom.parentNode) {\n        dom.parentNode.replaceChild(out, dom); // 移除掉原来的DOM对象\n      }\n    }\n  } // diff children\n\n\n  if (vnode.children && vnode.children.length > 0 || out.childNodes && out.childNodes.length > 0) {\n    diffChildren(out, vnode.children);\n  } // 那么改变属性\n\n\n  diffAttributes(out, vnode);\n  return out;\n}\n\nfunction diff(dom, vnode, container) {\n  var ret = diffNode(dom, vnode);\n\n  if (container && ret.parentNode !== container) {\n    container.appendChild(ret);\n  }\n\n  return ret;\n}\n\n//# sourceURL=webpack:///./src/reactDom/diff.js?");

/***/ }),

/***/ "./src/reactDom/index.js":
/*!*******************************!*\
  !*** ./src/reactDom/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/reactDom/render.js\");\n\nvar ReactDOM = {\n  render: _render__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReactDOM);\n\n//# sourceURL=webpack:///./src/reactDom/index.js?");

/***/ }),

/***/ "./src/reactDom/render.js":
/*!********************************!*\
  !*** ./src/reactDom/render.js ***!
  \********************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff */ \"./src/reactDom/diff.js\");\n\n/**\n * @description: vnode是createElement返回的对象或者string\n *\n * @date: 2019/12/24 6:50 下午\n */\n// function _render(vnode) {\n//   if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';\n//\n//   if (typeof vnode === 'number') vnode = String(vnode);\n//\n//   // 字符串直接处理\n//   if (typeof vnode === 'string') {\n//     return document.createTextNode(vnode);\n//   }\n//\n//   // 处理component\n//   if (typeof vnode.tag === 'function') {\n//     const component = reateComponent(vnode.tag, vnode.attrs);\n//     setComponentProps(component, vnode.attrs);\n//     return component.base;\n//   }\n//\n//   const dom = document.createElement(vnode.tag);\n//\n//   // 设置属性\n//   if (vnode.attrs) {\n//     Object.keys(vnode.attrs).forEach(key => {\n//       setAttribute(dom, key, vnode.attrs[key]);\n//     });\n//   }\n//\n//   // 递归渲染children\n//   if (Array.isArray(vnode.children) && vnode.children.length) {\n//     vnode.children.forEach(i => render(i, dom));\n//   }\n//\n//   return dom;\n// }\n\nfunction render(vnode, container, dom) {\n  return Object(_diff__WEBPACK_IMPORTED_MODULE_0__[\"diff\"])(dom, vnode, container);\n}\n\n//# sourceURL=webpack:///./src/reactDom/render.js?");

/***/ })

/******/ });