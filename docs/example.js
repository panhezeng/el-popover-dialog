!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=Vue},function(t,e,n){var o;window,t.exports=(o=n(2),function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=o},function(t,e,n){"use strict";n.r(e),n.d(e,"ElPopoverDialog",function(){return r});var o,r=n(2).default;function i(t){o?console.warn("[ElPopoverDialog] already installed. Vue.use(ElPopoverDialog) should be called only once."):(o=t).component(r.name,r)}r.install=i,"undefined"!=typeof window&&window.Vue&&i(window.Vue)},function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-popover",t._g(t._b({staticClass:"popover-dialog",staticStyle:{"font-size":"0px"},attrs:{placement:t.$attrs.placement||"top"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},"el-popover",t.$attrs,!1),t.$listeners),[t.popoverContentShow?n("p",{staticClass:"popover-content"},[t._v("\n    "+t._s(t.popoverContent)+"\n  ")]):t._e(),t._v(" "),t._t("popover-content",null,{hide:t.hide}),t._v(" "),t.showConfirmButton||t.showCancelButton?n("div",{staticClass:"popover-button",style:t.popoverButtonStyle},[t.showCancelButton?n("el-button",{staticClass:"cancel-button",attrs:{type:"text",size:"mini"},on:{click:t.cancel}},[t._v(t._s(t.cancelButtonText)+"\n    ")]):t._e(),t._v(" "),t.showConfirmButton?n("el-button",{staticClass:"confirm-button",attrs:{type:"primary",size:"mini"},on:{click:t.confirm}},[t._v("\n      "+t._s(t.confirmButtonText)+"\n    ")]):t._e(),t._v(" "),t._t("popover-button",null,{hide:t.hide})],2):t._e(),t._v(" "),n("span",{staticClass:"reference",attrs:{slot:"reference"},slot:"reference"},[t.buttonShow?n("el-button",t._b({staticClass:"reference-button",style:t.buttonStyle,attrs:{size:t.buttonSize,type:t.buttonType}},"el-button",t.$attrs,!1),[t._v(t._s(t.buttonTxt)+"\n    ")]):t._e(),t._v(" "),t._t("reference",null,{hide:t.hide})],2)],2)};o._withStripped=!0;var r=n(0),i=function(t,e,n,o,r,i,l,s){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=[],c._compiled=!0),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(t,e){return a.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,a):[a]}return{exports:t,options:c}}({name:"ElPopoverDialog",components:{"el-button":r.Button,"el-popover":r.Popover},inheritAttrs:!1,props:{popoverContentShow:{type:Boolean,default:!0},popoverContent:{type:String,default:"确认要删除？"},popoverButtonStyle:{type:String,default:"text-align: right; margin: 0"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0},cancelButtonText:{type:String,default:"取消"},confirmButtonText:{type:String,default:"确定"},buttonShow:{type:Boolean,default:!0},buttonTxt:{type:String,default:"删除"},buttonType:{type:String,default:"text"},buttonSize:{type:String,default:""},buttonStyle:{type:String,default:"color:#f56c6c; margin-right: 0 !important;"},confirmHide:{type:Boolean,default:!0}},data:function(){return{visible:!1}},methods:{cancel:function(){this.visible=!1,this.$emit("cancel")},confirm:function(){this.confirmHide&&(this.visible=!1),this.$emit("confirm")},hide:function(t){this.visible=!1,/^\[object [^F]*Function\]$/.test(Object.prototype.toString.call(t))&&t()}}},o);i.options.__file="src/ElPopoverDialog.vue",e.default=i.exports}]).ElPopoverDialog)},function(t,e){t.exports=ELEMENT},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.show?n("div",[t._v("被删除的东西")]):t._e(),t._v(" "),n("div",[t._v(t._s(t.slot))]),t._v(" "),n("el-popover-dialog",{on:{show:function(e){return t.slotChange("@show")},hide:function(e){return t.slotChange("@hide")},confirm:t.confirm}}),t._v(" "),n("el-popover-dialog",{staticClass:"icon-delete",attrs:{"button-show":!1},on:{confirm:t.confirm}},[n("i",{staticClass:"el-icon-delete",attrs:{slot:"reference"},slot:"reference"})]),t._v(" "),n("el-popover-dialog",{attrs:{title:"演示slot用法","popover-content-show":!1,"button-txt":"演示slot用法","confirm-button-text":"可以"},on:{confirm:function(e){return t.slotChange("可以")}},scopedSlots:t._u([{key:"popover-button",fn:function(e){return[n("el-button",{staticClass:"confirm-button",attrs:{type:"danger",size:"mini"},on:{click:function(n){t.slotChange("不行",e.hide())}}},[t._v("\n        不行\n      ")])]}}])})],1)};i._withStripped=!0;n(1);var l=function(t,e,n,o,r,i,l,s){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),l?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=a):r&&(a=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(t,e){return a.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,a):[a]}return{exports:t,options:c}}({name:"App",data:function(){return{show:!0,slot:""}},methods:{confirm:function(){this.show=!1},slotChange:function(t){this.slot=t}}},i,[],!1,null,null,null);l.options.__file="example/components/App.vue";var s=l.exports;new r.a({el:"#app",render:function(t){return t(s)}})}]);
