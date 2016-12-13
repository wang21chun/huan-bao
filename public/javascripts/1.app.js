webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(7)

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(14)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wangchun/Documents/Object/VueDemo/src/client/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b24a267c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-b24a267c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-b24a267c!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-b24a267c!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "\n.index .page-header {\n    padding: 0 20px;\n}\n.index .lead {\n    padding: 0 10px;\n}\n.association {\n    background-color: #fff;\n    border-left: 1px solid #ccc;\n    border-right: 1px solid #ccc;\n    border-bottom: 1px solid #ccc;\n    position: absolute;\n    z-index: 100;\n}\n.association>ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n.association>ul>li {\n    line-height: 25px;\n    padding-left: 16px;\n}\n.move-select {\n    background-color: #ddd;\n    font-size: 16px;\n}\n.border-bottom-left-radius-none {\n    border-bottom-left-radius: 0px!important;\n}\n", ""]);

	// exports


/***/ },
/* 9 */,
/* 10 */
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
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

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

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
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

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            search: '',
	            association_w: 0,
	            automatedKeyword: false,
	            keywords: [],
	            keyIndex: -1,
	            isSearch: true

	        };
	    },
	    watch: {
	        search: 'automatedSearch'
	    },
	    mounted: function mounted() {
	        var $_input = $(this.$el).find('input');
	        var _input_width = $_input.outerWidth(true);
	        this.$set(this, 'association_w', _input_width);
	    },
	    methods: {
	        searchBut: function searchBut() {
	            if (this.search != '') {
	                this.$router.push('list');
	                this.$store.commit({
	                    type: 'setSearch',
	                    search: this.search
	                });
	                this.$set(this, 'automatedKeyword', false);
	            }
	        },
	        automatedSearch: function automatedSearch(val, oldVal) {
	            var _this = this;

	            if (!this.isSearch) {
	                this.$set(this, 'isSearch', true);
	                return;
	            }
	            if ('' != val) {
	                this.$http.get('/automatedSearch', {
	                    params: {
	                        keyword: val
	                    }
	                }).then(function (res) {
	                    var keywords = res.body;
	                    _this.$set(_this, 'automatedKeyword', keywords.length > 0);
	                    _this.$set(_this, 'keywords', keywords);
	                }, function (error) {
	                    console.error(error);
	                });
	            } else {
	                this.$set(this, 'automatedKeyword', false);
	            }
	        },
	        autoSearch: function autoSearch(index) {
	            this.$set(this, 'automatedKeyword', false);
	            this.mouseenter(index);
	            this.searchBut();
	        },
	        moveSelect: function moveSelect(event) {
	            var keyIndex = this.keyIndex;
	            if (event.keyCode === 40) {
	                keyIndex += 1;
	            }
	            if (event.keyCode === 38) {
	                keyIndex -= 1;
	            }
	            var max = this.keywords.length;
	            var min = -1;

	            if (keyIndex >= max) {
	                keyIndex = min;
	            } else if (keyIndex <= min) {
	                keyIndex = max;
	            }
	            this.$set(this, 'keyIndex', keyIndex);
	            if (keyIndex > min && keyIndex < max) {
	                var k = this.keywords[keyIndex].key;
	                if (this.search !== k) {
	                    this.$set(this, 'isSearch', false);
	                }
	                this.$set(this, 'search', k);
	            }
	        },
	        mouseenter: function mouseenter(index) {
	            this.$set(this, 'keyIndex', index);
	            var k = this.keywords[index].key;
	            if (this.search !== k) {
	                this.$set(this, 'isSearch', false);
	            }
	            this.$set(this, 'search', k);
	        },
	        mouseleave: function mouseleave() {
	            this.$set(this, 'keyIndex', -1);
	        }

	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "index"
	  }, [_h('div', {
	    staticClass: "jumbotron"
	  }, [_h('div', {
	    staticClass: "container"
	  }, [_h('h1', ["换宝"]), " ", _h('div', {
	    staticClass: "input-group input-group-lg"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.search),
	      expression: "search"
	    }],
	    staticClass: "form-control",
	    class: {
	      'border-bottom-left-radius-none': _vm.automatedKeyword
	    },
	    attrs: {
	      "type": "text",
	      "placeholder": "试试换宝"
	    },
	    domProps: {
	      "value": _vm._s(_vm.search)
	    },
	    on: {
	      "keyup": [function($event) {
	        if ($event.keyCode !== 13) { return; }
	        $event.preventDefault();
	        $event.stopPropagation();
	        _vm.searchBut($event)
	      }, function($event) {
	        if ($event.keyCode !== 38) { return; }
	        $event.preventDefault();
	        $event.stopPropagation();
	        _vm.moveSelect($event)
	      }, function($event) {
	        if ($event.keyCode !== 40) { return; }
	        $event.preventDefault();
	        $event.stopPropagation();
	        _vm.moveSelect($event)
	      }],
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.search = $event.target.value
	      }
	    }
	  }), " ", _h('span', {
	    staticClass: "input-group-btn"
	  }, [_h('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.searchBut
	    }
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-search"
	  })])])]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.automatedKeyword),
	      expression: "automatedKeyword"
	    }],
	    staticClass: "association",
	    style: ({
	      width: _vm.association_w + 'px'
	    }),
	    on: {
	      "mouseleave": function($event) {
	        $event.preventDefault();
	        $event.stopPropagation();
	        _vm.mouseleave($event)
	      }
	    }
	  }, [_h('ul', [_vm._l((_vm.keywords), function(keyword, index) {
	    return _h('li', {
	      class: {
	        'move-select': index === _vm.keyIndex
	      },
	      on: {
	        "click": function($event) {
	          _vm.autoSearch(index)
	        },
	        "mouseenter": function($event) {
	          $event.preventDefault();
	          $event.stopPropagation();
	          _vm.mouseenter(index)
	        }
	      }
	    }, [_vm._s(keyword.key)])
	  })])])])]), " ", _h('router-view')])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-b24a267c", module.exports)
	  }
	}

/***/ }
]);