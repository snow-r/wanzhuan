(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"23be":function(e,t,o){"use strict";o.r(t);var n=o("e4a4"),r=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"3dfd":function(e,t,o){"use strict";o.r(t);var n=o("23be");for(var r in n)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(r);o("7c55");var a,i,c,d,u=o("f0c5"),f=Object(u["a"])(n["default"],a,i,!1,null,null,null,!1,c,d);t["default"]=f.exports},"56d7":function(e,t,o){"use strict";(function(e,t){o("6cdc");var n=d(o("66fd")),r=d(o("3dfd")),a=d(o("f96b")),i=d(o("da0b")),c=d(o("4360"));function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function f(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}n.default.config.productionTip=!1,r.default.mpType="app",e.getSystemInfo({success:function(t){console.log(t);var o=t.statusBarHeight+46,r=t.statusBarHeight+4;e.setStorageSync("navHeight",o),e.setStorageSync("topHeight",r),t.model.indexOf("iPhone X")>=0||t.model.indexOf("iPhone XR")>=0||t.model.indexOf("iPhone XS Max")>=0||t.model.indexOf("iPhone 11")>=0||t.model.indexOf("iPhone 11 Pro")>=0||t.model.indexOf("iPhone 11 Pro Max")>=0||t.model.indexOf("iPhone 12")>=0||t.model.indexOf("iPhone 12 Pro")>=0||t.model.indexOf("iPhone 12 Pro Max")>=0||t.model.indexOf("iPhone 12")>=0||t.model.indexOf("iPhone 13 Pro")>=0||t.model.indexOf("iPhone 13 Pro Max")>=0?n.default.prototype.$isIpx=!0:n.default.prototype.$isIpx=!1}}),e.getProvider({service:"oauth",success:function(t){console.log(t),"getProvider:ok"==t.errMsg&&e.setStorageSync("provider",t.provider[0])},fail:function(e){console.log(e)}}),n.default.prototype.$api=a.default,n.default.prototype.$comfun=i.default,n.default.prototype.$noMultipleClicks=i.default.noMultipleClicks,n.default.prototype.$store=c.default;var s=new n.default(f(f({},r.default),{},{store:c.default}));t(s).$mount()}).call(this,o("543d")["default"],o("543d")["createApp"])},"7c55":function(e,t,o){"use strict";var n=o("ddbf"),r=o.n(n);r.a},ddbf:function(e,t,o){},e4a4:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(t){e.setStorageSync("isPop",!1),e.setStorageSync("showAuthModal",!0);var o=e.getUpdateManager();o.onCheckForUpdate((function(e){})),o.onUpdateReady((function(){e.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&o.applyUpdate()}})})),o.onUpdateFailed((function(t){e.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})}))},methods:{init:function(){var t=window.android.getUserInfo();t=JSON.parse(t),e.setStorageSync("token",t.token),e.setStorageSync("userId",t.userId),e.setStorageSync("avatar",t.avatar),e.setStorageSync("realName",t.realName),e.setStorageSync("nickName",t.nickName),e.setStorageSync("phonenumber",t.phonenumber)}},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=o}).call(this,o("543d")["default"])}},[["56d7","common/runtime","common/vendor"]]]);