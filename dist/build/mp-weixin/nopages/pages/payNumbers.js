(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["nopages/pages/payNumbers"],{"0eb1":function(n,e,t){"use strict";(function(n){t("6cdc");a(t("66fd"));var e=a(t("ed98"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},7967:function(n,e,t){"use strict";var a;t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return a}));var o=function(){var n=this,e=n.$createElement;n._self._c},i=[]},b5b2:function(n,e,t){"use strict";var a=t("dad2"),o=t.n(a);o.a},d7fd:function(n,e,t){"use strict";t.r(e);var a=t("ee84"),o=t.n(a);for(var i in a)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(i);e["default"]=o.a},dad2:function(n,e,t){},ed98:function(n,e,t){"use strict";t.r(e);var a=t("7967"),o=t("d7fd");for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);t("b5b2");var r,c=t("f0c5"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"5863249c",null,!1,a["a"],r);e["default"]=s.exports},ee84:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){t.e("components/topBar").then(function(){return resolve(t("ad1a"))}.bind(null,t)).catch(t.oe)},o={components:{TopBar:a},data:function(){return{payNum:null,orderId:null,orderNo:"",orderTime:"",start:"",end:""}},computed:{isIpx:function(){return this.$isIpx},navHeight:function(){return n.getStorageSync("navHeight")}},onLoad:function(n){this.payNum=n.number,this.orderId=n.orderId},methods:{payMentOrder:function(){var e=this,t={id:Number(this.orderId),payType:"wxPay",payWay:"JSAPI"};n.showLoading({mask:!0}),this.$api.payShopList(t).then((function(t){n.hideLoading(),200==t.code?e.wxPay(t.data.wxPay):e.$comfun.Toast(t.msg,"none")}))},wxPay:function(e){var t=this;n.showLoading({mask:!0}),n.requestPayment({timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign,success:function(e){n.hideLoading(),n.showToast({title:"支付成功",icon:"none"}),n.navigateTo({url:"/nopages/pages/paySuccesss?payNum="+t.payNum})},fail:function(e){console.log(e,"支付"),n.hideLoading(),"requestPayment:fail cancel"==e.errMsg?n.showToast({title:"取消支付",icon:"none"}):n.showToast({title:"支付失败",icon:"none"})}})},appPay:function(e){n.requestPayment({provider:"wxpay",orderInfo:JSON.stringify({appid:e.appid,noncestr:e.noncestr,package:e.package,partnerid:e.partnerid,prepayid:e.prepayid,timestamp:e.timestamp,sign:e.sign.slice(0,30)}),success:function(e){n.hideLoading(),n.showToast({title:"支付成功",icon:"none"}),n.navigateTo({url:"/subpages/pages/paySuccess?payNum=".concat(this.payNum)})},fail:function(e){n.hideLoading(),"requestPayment:fail cancel"==e.errMsg?n.showToast({title:"取消支付",icon:"none"}):n.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})}})}}};e.default=o}).call(this,t("543d")["default"])}},[["0eb1","common/runtime","common/vendor"]]]);