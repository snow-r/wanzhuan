(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["nopages/pages/msgCompany"],{"0c85":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(o("0c3f")),i=s(o("2018")),a=o("b703");function s(e){return e&&e.__esModule?e:{default:e}}var r,c=function(){o.e("components/topBar").then(function(){return resolve(o("ad1a"))}.bind(null,o)).catch(o.oe)},u={components:{TopBar:c},data:function(){return{userId:"",IMG_BEFORE_URL:a.IMG_BEFORE_URL,markers:[],shopId:null,form:{customerName:"",xinyong:"",comyName:"",phoneNumber:"",houseNumber:"",titleAddress:"",number:"",backSide:"",frontSide:"",frontSides:"",backSides:"",latitude:null,longitude:null},isShow:!0,tagIndex:-1,show:!1,id:"",addressData:{},sheng:"",shi:"",qu:"",gender:0}},computed:{isIpx:function(){return this.$isIpx},navHeight:function(){return e.getStorageSync("navHeight")}},onLoad:function(e){this.shopId=e.id,this.getShop()},methods:{chooseGender:function(e){this.gender=e},hideShow:function(){this.show=!1},onsetCity:function(e){var t=e.detail.target.dataset,o=t.province+t.city+t.area;this.form.titleAddress=o,console.log(o),this.show=!1},openPicker:function(){this.show=!0},getShop:function(){var t=this;e.showLoading();var o={id:this.shopId};this.$api.getShopDetail(o).then((function(o){e.hideLoading(),200==o.code&&(t.form.customerName=o.data.frName,t.form.xinyong=o.data.xyCode,t.form.comyName=o.data.name,t.form.number=o.data.frPhone,t.form.phoneNumber=o.data.idcard,t.form.address=o.data.address,t.form.frontSide=a.IMG_BEFORE_URL+o.data.yingyePic,t.form.backSide=a.IMG_BEFORE_URL+o.data.xukePic)}))},getUserLocation:function(){var t=this;e.getLocation({success:function(e){(e.errMsg="getLocation:ok")&&(r=new n.default.BMapWX({ak:"o9FZ3zhus8bwG08ros15iWXqehXp7zAE"}),r.regeocoding({location:{latitude:e.latitude,longitude:e.longitude},success:function(e){console.log(e,"4444"),t.form.latitude=e.originalData.result.location.lat,t.form.longitude=e.originalData.result.location.lng,t.form.address=e.originalData.result.formatted_address,t.markers[0]={longitude:e.originalData.result.location.lng,latitude:e.originalData.result.location.lat,width:23,height:25,title:e.originalData.result.formatted_address,iconPath:"http://www.mingtongxa.com/wanzhuan/addressto.png"}},fail:function(e){},complete:function(e){}}))}})},openMap:function(){var t=this;e.chooseLocation({success:function(e){console.log(e,"55555");var o=t.formatLocation(e);t.form.titleAddress=o.REGION_PROVINCE+o.REGION_CITY+o.REGION_COUNTRY,t.form.address=e.address,console.log("位置名称：",e),console.log("详细地址："+e.address)}})},formatLocation:function(t){var o=/^(北京市|天津市|重庆市|上海市|香港特别行政区|澳门特别行政区)/,n=[],i={REGION_PROVINCE:null,REGION_COUNTRY:null,REGION_CITY:null,ADDRESS:null};function a(e,n){o=/^(.*?[市]|.*?地区|.*?特别行政区)(.*?[市区县])(.*?)$/g;var i=o.exec(e);n.REGION_CITY=i[1],n.REGION_COUNTRY=i[2],n.ADDRESS=i[3]+"("+t.name+")"}return(n=o.exec(t.address))?(i.REGION_PROVINCE=n[1],a(t.address,i)):(o=/^(.*?(省|自治区))(.*?)$/,n=o.exec(t.address),i.REGION_PROVINCE=n[1],a(n[3],i)),console.log(i,"555555"),this.sheng=i.REGION_PROVINCE,this.shi=i.REGION_CITY,this.qu=i.REGION_COUNTRY,e.setStorageSync("district",i.REGION_COUNTRY),this.getQuNumber(),i},getQuNumber:function(){var t=this;i.default.map((function(o){o.cities.map((function(o){o.name==t.shi&&o.dis.map((function(o){o.disname==t.qu&&e.setStorageSync("quhao",o.disid)}))}))}))},chooseImg:function(t){if(1==t){var o=this;e.chooseImage({count:1,sourceType:["camera","album"],sizeType:["original","compressed"],success:function(e){var t=e.tempFilePaths[0];o.$comfun.uploadImg(t).then((function(e){var t=JSON.parse(e.data);o.form.frontSide=a.IMG_BEFORE_URL+t.data.url,o.form.frontSides=t.data.url}))}})}else if(2==t){o=this;e.chooseImage({count:1,sourceType:["camera","album"],sizeType:["original","compressed"],success:function(e){var t=e.tempFilePaths[0];o.$comfun.uploadImg(t).then((function(e){var t=JSON.parse(e.data);o.form.backSide=a.IMG_BEFORE_URL+t.data.url,o.form.backSides=t.data.url}))}})}},getSave:function(){if(this.form.comyName)if(this.form.xinyong)if(this.form.customerName)if(this.form.number)if(this.form.phoneNumber)if(this.form.address)if(this.form.frontSide)if(this.form.backSide){var t={id:this.shopId,address:this.form.address,frName:this.form.customerName,frPhone:this.form.number,idcard:this.form.phoneNumber,name:this.form.comyName,yingyePic:this.form.frontSides,xukePic:this.form.backSides,xyCode:this.form.xinyong};e.showLoading(),this.$api.iWantComyAdd(t).then((function(t){200==t.code?(e.hideLoading(),e.showToast({title:"提交审核成功",duration:1500}),setTimeout((function(){e.navigateBack()}),2e3)):e.showToast({title:t.msg,icon:"none",duration:1500})}))}else e.showToast({title:"请上传公司经营许可证！",icon:"none"});else e.showToast({title:"请上传公司营业执照！",icon:"none"});else e.showToast({title:"请选择地址！",icon:"none"});else e.showToast({title:"身份证号不能为空！",icon:"none"});else e.showToast({title:"法人电话不能为空！",icon:"none"});else e.showToast({title:"法人姓名不能为空！",icon:"none"});else e.showToast({title:"信用代码不能为空！",icon:"none"});else e.showToast({title:"公司名称不能为空！",icon:"none"})}}};t.default=u}).call(this,o("543d")["default"])},"3a20":function(e,t,o){"use strict";o.r(t);var n=o("7f47"),i=o("6a79");for(var a in i)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(a);o("fb04");var s,r=o("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"6d03fa4c",null,!1,n["a"],s);t["default"]=c.exports},"6a79":function(e,t,o){"use strict";o.r(t);var n=o("0c85"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},"7f47":function(e,t,o){"use strict";var n;o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"9ac7":function(e,t,o){},ef7b:function(e,t,o){"use strict";(function(e){o("6cdc");n(o("66fd"));var t=n(o("3a20"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},fb04:function(e,t,o){"use strict";var n=o("9ac7"),i=o.n(n);i.a}},[["ef7b","common/runtime","common/vendor"]]]);