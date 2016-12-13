webpackJsonp([2],{

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(16)
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
	__vue_options__.__file = "/Users/wangchun/Documents/Object/huan-bao/src/client/index_page_header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-adde2614", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-adde2614", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index_page_header.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "page-header"
	  }, [_h('h1', ["给您讲个故事！", _h('small', ["钱是怎么来的！"])])]), " ", _h('p', {
	    staticClass: "lead"
	  }, ["人类社会起初并无货币存在。货币是商品交换的长期发展过程中分离出来的特殊商品，是商品交换发展的自然结果。原始社会后期，由于社会生产力的发展，产品在满足生产者自身需要后有了一些剩余，于是，在原始公社之间出现了最初的实物交换。随着生产的发展，商品交换逐渐变成经常的行为，交换数量日益增多，范围也日益扩大。但是，直接的物物交换中常会出现商品转让的困难。因为被交换商品必须对双方都具有使用价值，且商品价值又必须等量。而物物交换不可能永远同时满足这两个条件，必然要求有一个一般等价物作为交换的媒介。最初充当一般等价物的商品是不固定的，它只在狭小的范围内暂时地交替地由这种或那种商品承担，当一般等价物逐渐固定在特定种类的商品上时，它就定型化为货币。"])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-adde2614", module.exports)
	  }
	}

/***/ }

});