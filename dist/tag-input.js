(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by daneding on 8/1/15.
	 */
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _componentsTagInputReact = __webpack_require__(1);

	var _componentsTagInputReact2 = _interopRequireDefault(_componentsTagInputReact);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by daneding on 7/14/15.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(3);

	exports['default'] = _react2['default'].createClass({
	  displayName: 'tagInput.react',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      allTagList: [],
	      shownTagList: []
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      allTagList: this.props.allTagList,
	      shownTagList: this.props.shownTagList,
	      value: '',
	      showDropdown: false,
	      selectedIndex: -1
	    };
	  },

	  showExistTags: function showExistTags() {
	    return this.state.shownTagList.map(function (item, index) {
	      return _react2['default'].createElement(
	        'li',
	        { className: 'tag-manager__tag', onClick: this.removeTagHandler.bind(this, index) },
	        item.name,
	        _react2['default'].createElement(
	          'span',
	          { className: 'icon-close' },
	          'X'
	        )
	      );
	    }, this);
	  },

	  removeTagHandler: function removeTagHandler(index) {
	    var shownTagList = this.state.shownTagList;
	    shownTagList.splice(index, 1);
	    this.setState({
	      shownTagList: shownTagList
	    });
	  },

	  handleChange: function handleChange(event) {
	    this.setState({ value: event.target.value });
	  },

	  handleKeyUp: function handleKeyUp(event) {
	    var keyCode = event.keyCode;

	    if (keyCode === 13) {
	      //ENTER
	      if (this.state.selectedIndex > -1 && !this.state.value) {
	        this.addTagToList(this.state.allTagList[this.state.selectedIndex].name);
	      } else {
	        this.addTagToList(this.state.value);
	      }
	    } else if (keyCode === 8 && !this.state.value.trim()) {
	      //BACKSPACE
	      var lastIndex = this.state.shownTagList.length - 1;
	      this.removeTagHandler(lastIndex);
	      this.setState({
	        value: ''
	      });
	    } else if (keyCode === 38) {
	      //UP
	      var currentIndex = this.state.selectedIndex;
	      var totalLength = this.state.allTagList.length;

	      if (currentIndex !== -1) {
	        currentIndex -= 1;
	      }

	      currentIndex = totalLength + currentIndex;
	      this.setState({
	        selectedIndex: currentIndex % totalLength
	      });
	    } else if (keyCode === 40) {
	      //DOWN
	      var currentIndex = this.state.selectedIndex;
	      var totalLength = this.state.allTagList.length;

	      currentIndex += 1;
	      currentIndex = Math.abs(currentIndex);

	      this.setState({
	        selectedIndex: currentIndex % totalLength
	      });
	    }
	  },

	  addTagToList: function addTagToList(tag) {
	    var shownTagList = this.state.shownTagList;
	    var tagList = shownTagList.map(function (item) {
	      return item.name;
	    });

	    if (!!tag && tagList.indexOf(tag) === -1) {
	      this.state.shownTagList.push({ name: tag });
	      this.setState({
	        shownTagList: this.state.shownTagList
	      });
	    }

	    this.setState({
	      value: ''
	    });
	  },

	  handleBlur: function handleBlur() {
	    window.setTimeout((function () {
	      this.setState({
	        showDropdown: false,
	        value: ''
	      });
	    }).bind(this), 100);
	  },

	  handleFocus: function handleFocus() {
	    this.setState({
	      showDropdown: true,
	      selectedIndex: -1
	    });
	  },

	  dropdownItemClickHandler: function dropdownItemClickHandler(index) {
	    var selectedItem = this.state.allTagList[index];
	    this.addTagToList(selectedItem.name);
	  },

	  appendDropdown: function appendDropdown() {
	    if (this.state.showDropdown && this.state.allTagList.length > 0) {
	      return _react2['default'].createElement(
	        'ul',
	        { className: 'tag-manager__dropdown', ref: 'dropdown' },
	        this.state.allTagList.map(function (item, index) {
	          return _react2['default'].createElement(
	            'li',
	            { className: this.state.selectedIndex === index ? "tag-manager__dropdown-item highlight" : "tag-manager__dropdown-item", onClick: this.dropdownItemClickHandler.bind(this, index) },
	            item.name
	          );
	        }, this)
	      );
	    } else {
	      return null;
	    }
	  },

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'tag-manager' },
	      _react2['default'].createElement(
	        'ul',
	        { className: 'tag-manager__tag-list' },
	        this.showExistTags()
	      ),
	      _react2['default'].createElement(
	        'span',
	        { className: 'tag-manager__input-wrapper', style: { width: '350px' } },
	        _react2['default'].createElement('input', { className: 'tag-manager__input', onKeyUp: this.handleKeyUp, onBlur: this.handleBlur, onFocus: this.handleFocus, value: this.state.value, onChange: this.handleChange, placeholder: 'Tag your message with information about your post', type: 'text' }),
	        this.appendDropdown()
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./tag-input.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./tag-input.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".tag-manager {\n  position: relative;\n  cursor: text;\n  border: 1px solid #B3BDC1;\n  border-radius: 5px;\n  z-index: 1;\n  padding: 8px;\n}\n\n.tag-manager__tag-list {\n  display: inline;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.tag-manager__input-wrapper {\n  display: inline-block;\n}\n\n.tag-manager__input {\n  width: 100%;\n  padding: 5px 0;\n  margin-bottom: 6px;\n  border: 0;\n}\n\n.tag-manager__tag {\n  border-radius: 5px;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  display: inline-block;\n  padding: 5px 10px;\n  margin-bottom: 6px;\n  color: #FFF;\n  cursor: pointer;\n  background-color: #748288;\n  margin-right: 5px;\n}\n\n.tag-manager__tag-list pre {\n  display: inline;\n  font-family: inherit;\n}\n\n.tag-manager__tag .icon-close{\n  margin-left: 3px;\n  vertical-align: middle;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.tag-manager__dropdown {\n  position: absolute;\n  right: -1px;\n  left: -1px;\n  max-height: 300px;\n  padding: 0;\n  padding-top: 5px;\n  margin: 0;\n  margin-top: -5px;\n  overflow-y: scroll;\n  list-style: none;\n  background-color: #fff;\n  border: 1px solid #b3bdc1;\n  border-top: 0;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.tag-manager__dropdown-item {\n  padding: 8px 10px;\n  cursor: pointer;\n}\n\n.tag-manager__dropdown-item:first-child {\n  border-top: 1px solid #b3bdc1;\n}\n\n.tag-manager__dropdown-item:hover, .tag-manager__dropdown-item.highlight{\n  background-color: #fff8ed;\n}", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;