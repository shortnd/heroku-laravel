(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Tasks/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Tasks/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/collin/code/laravel/heroku-laravel/resources/js/Pages/Tasks/Show.vue: Unexpected token, expected \",\" (44:8)\n\n\u001b[0m \u001b[90m 42 | \u001b[39m            \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtask\u001b[33m.\u001b[39mtitle\u001b[0m\n\u001b[0m \u001b[90m 43 | \u001b[39m        }\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 44 | \u001b[39m        deleteEntry(id) {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 45 | \u001b[39m            axios\u001b[33m.\u001b[39m\u001b[36mdelete\u001b[39m(\u001b[32m`/tasks/${this.task.id}/${id}`\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m 46 | \u001b[39m                \u001b[33m.\u001b[39mthen(({ request }) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 47 | \u001b[39m                    \u001b[33mInertia\u001b[39m\u001b[33m.\u001b[39mreplace(\u001b[32m`/tasks/${this.task.id}`\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n    at Parser.raise (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:3851:17)\n    at Parser.unexpected (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:5167:16)\n    at Parser.expect (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:5153:28)\n    at Parser.parseObj (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:6637:14)\n    at Parser.parseExprAtom (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:6274:21)\n    at Parser.parseExprSubscripts (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:5914:23)\n    at Parser.parseMaybeUnary (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:5894:21)\n    at Parser.parseExprOps (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:5781:23)\n    at Parser.parseMaybeConditional (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:5754:23)\n    at Parser.parseMaybeAssign (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:5701:21)\n    at Parser.parseObjectProperty (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:6768:101)\n    at Parser.parseObjPropValue (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:6793:101)\n    at Parser.parseObjectMember (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:6717:10)\n    at Parser.parseObj (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:6641:25)\n    at Parser.parseExprAtom (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:6274:21)\n    at Parser.parseExprSubscripts (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:5914:23)\n    at Parser.parseMaybeUnary (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:5894:21)\n    at Parser.parseExprOps (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:5781:23)\n    at Parser.parseMaybeConditional (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:5754:23)\n    at Parser.parseMaybeAssign (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:5701:21)\n    at Parser.parseExportDefaultExpression (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:8470:24)\n    at Parser.parseExport (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:8365:31)\n    at Parser.parseStatementContent (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:7395:27)\n    at Parser.parseStatement (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:7291:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:7868:25)\n    at Parser.parseBlockBody (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:7855:10)\n    at Parser.parseTopLevel (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:7220:10)\n    at Parser.parse (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:8863:17)\n    at parse (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/parser/lib/index.js:11135:38)\n    at parser (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/collin/code/laravel/heroku-laravel/node_modules/@babel/core/lib/transform.js:34:34)\n    at processTicksAndRejections (internal/process/task_queues.js:79:9)");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Tasks/Show.vue?vue&type=template&id=fcbaf732&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Tasks/Show.vue?vue&type=template&id=fcbaf732& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("layout", [
    _c("div", { staticClass: "container" }, [
      _c("h2", [_vm._v(_vm._s(_vm.task.title))]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n            " + _vm._s(_vm.task.body) + "\n        ")
      ]),
      _vm._v(" "),
      _vm.entries
        ? _c("div", { staticClass: "row mt-4" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "ul",
                _vm._l(_vm.entries, function(entry) {
                  return _c("li", { key: entry.id }, [
                    _vm._v(
                      "\n                        " + _vm._s(entry.body) + " - "
                    ),
                    _c(
                      "a",
                      {
                        staticClass: "btn-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.deleteEntry(entry.id)
                          }
                        }
                      },
                      [_vm._v("delete")]
                    )
                  ])
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "nav",
                [
                  _c(
                    "inertia-link",
                    { attrs: { href: "/tasks/" + _vm.task.id + "/new-entry" } },
                    [_vm._v("Add New Entry")]
                  )
                ],
                1
              )
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/Tasks/Show.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Tasks/Show.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_fcbaf732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=fcbaf732& */ "./resources/js/Pages/Tasks/Show.vue?vue&type=template&id=fcbaf732&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Tasks/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_fcbaf732___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_fcbaf732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Tasks/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Tasks/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Tasks/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Tasks/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Tasks/Show.vue?vue&type=template&id=fcbaf732&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Tasks/Show.vue?vue&type=template&id=fcbaf732& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_fcbaf732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=fcbaf732& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Tasks/Show.vue?vue&type=template&id=fcbaf732&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_fcbaf732___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_fcbaf732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);