(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0036":function(e,t,n){"use strict";(function(e){n("6cdc");a(n("66fd"));var t=a(n("a86a"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},3285:function(e,t,n){"use strict";n.r(t);var a=n("8edd"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},"653a":function(e,t,n){"use strict";var a=n("f772"),o=n.n(a);o.a},"8edd":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("b39c"),o=function(){n.e("components/topBar").then(function(){return resolve(n("ad1a"))}.bind(null,n)).catch(n.oe)},i={components:{TopBar:o},data:function(){return{loginType:1,pageTitle:"",canBack:!1,phone:"",encryptedData:"",iv:"",code:"",touchStartTime:"",touchEndTime:"",lastTapTime:"",UserCode:"",codeText:"获取验证码",canSendCode:!1,phoneNum:"",phoneCode:"",agree:!1,newDatas:(new Date).getTime()}},computed:{isIpx:function(){return this.$isIpx},navHeight:function(){return e.getStorageSync("navHeight")}},watch:{phoneNum:function(e){a.phoneReg.test(e)?this.canSendCode=!0:this.canSendCode=!1}},mounted:function(){this.getSession()},onLoad:function(t){var n=this;this.$comfun.getUserCity((function(){})),e.login({success:function(e){n.UserCode=e.code}})},methods:{userPhone:function(e){this.phone=e},changeAgree:function(e){1==e?this.agree=!0:2==e&&(this.agree=!1)},crossLogin:function(){e.setStorageSync("isLogin",!0),e.removeStorageSync("token"),this.back()},back:function(){var t=getCurrentPages();console.log(t),t.length>=2?e.navigateBack():e.reLaunch({url:"/pages/index/index"})},touchStart:function(e){this.touchStartTime=e.timeStamp},touchEnd:function(e){this.touchEndTime=e.timeStamp},toH5Yinsi:function(){e.navigateTo({url:"/pages/pages/wordPage?url=https://www.baibianlg.com/html/privacy.html"})},getUserCode:function(t){var n=this,a={code:t};this.$api.getCode(a).then((function(t){n.sessionKey=t.data.sessionKey,e.setStorageSync("sessionKey",t.data.sessionKey),e.setStorageSync("openId",t.data.openid)}))},getPhoneNumber:function(t){if(console.log(t,"666"),this.touchEndTime-this.touchStartTime<350){var n=t.timeStamp;this.lastTapTime;this.lastTapTime=n;var a=this;if("getPhoneNumber:ok"==t.detail.errMsg){var o={encryptedData:t.detail.encryptedData,iv:t.detail.iv,code:a.UserCode,x:e.getStorageSync("longitude")||"",y:e.getStorageSync("latitude")||"",shareUserId:this.$store.state.shareUserId||"",areaCode:e.getStorageSync("quhao")||""};e.showLoading(),a.$api.getUserMsg(o).then((function(t){console.log(t.data),e.hideLoading(),e.setStorageSync("token",t.data.token),e.setStorageSync("userId",t.data.userId),e.setStorageSync("avatar",t.data.avatar),e.setStorageSync("realName",t.data.realName),e.setStorageSync("phonenumber",t.data.phonenumber),""!=t.data.avatar?(e.setStorageSync("avatar",t.data.avatar),e.setStorageSync("nickName",t.data.nickName),e.showToast({title:"登录成功",duration:1500}),setTimeout((function(){e.navigateBack({fail:function(t){e.reLaunch({url:"/pages/index/index"})}})}),1500)):e.reLaunch({url:"/pages/login/shouquan"})}))}}},getCheckCode:function(){var t=this;if(this.canSendCode){this.canSendCode=!1,e.showLoading({mask:!0});var n={phonenumber:this.phoneNum,uuid:this.newDatas};this.$api.getPhoneCode(n).then((function(n){console.log(n),e.hideLoading(),200==n.code?(e.showToast({title:"验证码已成功发送至您手机~",icon:"none"}),t.codeTimeDown()):(t.checkBtnState(),e.showToast({title:n.msg,icon:"none"}))}))}},phoneLogin:function(){var t=this,n="",o=!1;if(""==this.phoneNum.trim()?(n="请输入手机号码",o=!0):a.phoneReg.test(this.phoneNum)?""==this.phoneCode.trim()?(n="请输入验证码",o=!0):this.agree||(n="请同意用户服务协议及隐私协议",o=!0):(n="手机号格式错误",o=!0),o)e.showToast({title:n,icon:"none"});else{var i={phonenumber:this.phoneNum,code:this.phoneCode,uuid:this.newDatas};this.$api.getPhoneLogin(i).then((function(n){if(200==n.code){if(e.setStorageSync("nickname",n.data.nickName),e.setStorageSync("token",n.data.token),e.setStorageSync("phonenumber",n.data.phonenumber),e.setStorageSync("isLogin",!1),""!=n.data.avatar)e.setStorageSync("avatar",n.data.avatar);else{var a={avatar:"https://www.baibianlg.com/xcx/headimg.png"};t.$api.setUserMsg(a).then((function(t){e.setStorageSync("avatar",t.data.avatar)}))}e.setStorageSync("userId",n.data.userId),e.showToast({title:"登录成功",duration:1500}),setTimeout((function(){e.reLaunch({url:"/pages/index/index"})}),1500)}else e.showToast({title:n.msg,icon:"none"})}))}},codeTimeDown:function(){var e=this,t=60,n=setInterval((function(){t=--t,e.codeText=t+"s后重试",0==t&&(clearInterval(n),e.canSendCode=!1,e.codeText="重新发送")}),1e3)},checkBtnState:function(){console.log(this.phone),a.phoneReg.test(this.phone)?this.canSendCode=!0:this.canSendCode=!1},getSession:function(){e.login({success:function(t){t.code;e.setStorageSync("isLogin",!1)}})},getPhoneParams:function(e){console.log(e),this.encryptedData=e.encryptedData,this.iv=e.iv,this.sessionKey=e.sessionKey}}};t.default=i}).call(this,n("543d")["default"])},a86a:function(e,t,n){"use strict";n.r(t);var a=n("ff09"),o=n("3285");for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("653a");var s,c=n("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"43d11548",null,!1,a["a"],s);t["default"]=r.exports},f772:function(e,t,n){},ff09:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement;e._self._c},i=[]}},[["0036","common/runtime","common/vendor"]]]);