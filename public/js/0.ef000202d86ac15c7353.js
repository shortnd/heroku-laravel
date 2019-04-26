(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(t,a,e){"use strict";function r(t,a,e,r,s,n,o,i){var l,c="function"==typeof t?t.options:t;if(a&&(c.render=a,c.staticRenderFns=e,c._compiled=!0),r&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):s&&(l=i?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,a){return l.call(a),d(t,a)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,l):[l]}return{exports:t,options:c}}e.d(a,"a",function(){return r})},2:function(t,a,e){"use strict";e(3);var r=e(1),s={inject:["page"],components:{InertiaLink:r.b},methods:{logout:function(){r.a.post("/logout")}},computed:{guest:function(){return null===this.page.props.auth.user}}},n=e(0),o=Object(n.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-md navbar-light navbar-laravel"},[e("div",{staticClass:"container"},[e("inertia-link",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("\n            "+t._s(t.page.props.app.name)+"\n            ")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"}),t._v(" "),e("ul",{staticClass:"navbar-nav ml-auto"},[t.guest?[e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:"/login"}},[t._v("Login")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:"/register"}},[t._v("register")])],1)]:[e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:"/tasks/create"}},[t._v("Add Task")])],1),t._v(" "),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expaned":"false"}},[t._v("\n                                    "+t._s(t.page.props.auth.user.name)+" "),e("span",{staticClass:"caret"})]),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right"},[e("a",{staticClass:"dropdown-item",on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[t._v("Logout")])])])]],2)])],1)]),t._v(" "),e("main",{staticClass:"py-4"},[t._t("default")],2)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,null,null);a.a=o.exports},8:function(t,a,e){"use strict";e.r(a);var r=e(3),s=e.n(r),n=e(2),o=e(1),i={data:function(){return{form:{email:null,password:null,remember:!1},errors:null}},components:{Layout:n.a,InertiaLink:o.b},methods:{handleLogin:function(){var t=this;this.errors=null,s.a.post("/login",this.form).then(function(t){o.a.visit("".concat(t.request.responseURL))}).catch(function(a){var e=a.response;a.errors;422===e.status&&(t.errors=e.data.errors)})}},computed:{hasErrors:function(){return!!this.errors},getErrors:function(){return this.errors}}},l=e(0),c=Object(l.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("layout",[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("Login")]),t._v(" "),e("div",{staticClass:"card-body"},[t.hasErrors?e("div",{staticClass:"alert alert-danger"},[e("ul",t._l(t.getErrors,function(a,r){return e("li",{key:r},[t._v("\n                                    "+t._s(a[0])+"\n                                ")])}),0)]):t._e(),t._v(" "),e("form",{on:{submit:function(a){return a.preventDefault(),t.handleLogin(a)}}},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("E-Mail Address:")]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-4 text-md-right",attrs:{for:"password"}},[t._v("Password:")]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",required:""},domProps:{value:t.form.password},on:{input:function(a){a.target.composing||t.$set(t.form,"password",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-md-6 offset-md-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.remember,expression:"form.remember"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"remember"},domProps:{checked:Array.isArray(t.form.remember)?t._i(t.form.remember,null)>-1:t.form.remember},on:{change:function(a){var e=t.form.remember,r=a.target,s=!!r.checked;if(Array.isArray(e)){var n=t._i(e,null);r.checked?n<0&&t.$set(t.form,"remember",e.concat([null])):n>-1&&t.$set(t.form,"remember",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.form,"remember",s)}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"remember"}},[t._v("Remember Me")])])]),t._v(" "),e("div",{staticClass:"form-group row mb-0"},[e("div",{staticClass:"col-md-8 offset-md-4"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")]),t._v(" "),e("inertia-link",{staticClass:"btn btn-link",attrs:{href:"/password/reset"}},[t._v("Forgot Your Password?")])],1)])])])])])])])])},[],!1,null,null,null);a.default=c.exports}}]);