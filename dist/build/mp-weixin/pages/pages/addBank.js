(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pages/addBank"],{"29d4":function(n,e,t){"use strict";(function(n){t("6cdc");o(t("66fd"));var e=o(t("9519"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"6a80":function(n,e,t){},8593:function(n,e,t){"use strict";var o=t("6a80"),a=t.n(o);a.a},9519:function(n,e,t){"use strict";t.r(e);var o=t("ea87"),a=t("e941");for(var i in a)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("8593");var r,u=t("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"7065e1ca",null,!1,o["a"],r);e["default"]=s.exports},dde3:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){t.e("components/topBar").then(function(){return resolve(t("ad1a"))}.bind(null,t)).catch(t.oe)},a={components:{TopBar:o},data:function(){return{userId:"",form:{bankName:"",bankNumber:"",phoneNumber:"",userName:"",wangdian:""}}},computed:{isIpx:function(){return this.$isIpx},navHeight:function(){return n.getStorageSync("navHeight")}},onLoad:function(){},methods:{getSave:function(){if(this.form.bankName)if(this.form.wangdian)if(this.form.bankNumber)if(this.form.userName)if(this.form.phoneNumber){var e={account:this.form.userName,bankName:this.form.bankName,cardNo:this.form.bankNumber,phone:this.form.phoneNumber,address:this.form.wangdian};n.showLoading(),this.$api.addBankId(e).then((function(e){200==e.code?(n.hideLoading(),n.showToast({title:"添加成功",duration:1500}),setTimeout((function(){n.navigateBack()}),2e3)):n.showToast({title:e.msg,icon:"none",duration:1500})}))}else n.showToast({title:"预留电话不能为空！",icon:"none"});else n.showToast({title:"预留姓名不能为空！",icon:"none"});else n.showToast({title:"银行卡号不能为空！",icon:"none"});else n.showToast({title:"开户行网点不能为空！",icon:"none"});else n.showToast({title:"银行名称不能为空！",icon:"none"})}}};e.default=a}).call(this,t("543d")["default"])},e941:function(n,e,t){"use strict";t.r(e);var o=t("dde3"),a=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=a.a},ea87:function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var a=function(){var n=this,e=n.$createElement;n._self._c},i=[]}},[["29d4","common/runtime","common/vendor"]]]);