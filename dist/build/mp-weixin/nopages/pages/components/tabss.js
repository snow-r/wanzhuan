(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["nopages/pages/components/tabss"],{"2fe7":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"4b16":function(t,n,e){},"7d14":function(t,n,e){"use strict";var a=e("4b16"),r=e.n(a);r.a},8993:function(t,n,e){"use strict";e.r(n);var a=e("8e5d"),r=e.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=r.a},"8a91":function(t,n,e){"use strict";e.r(n);var a=e("2fe7"),r=e("8993");for(var u in r)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("7d14");var c,i=e("f0c5"),s=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"ff70e9e2",null,!1,a["a"],c);n["default"]=s.exports},"8e5d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"Tabs",data:function(){return{id:"tab_0",start:0,orIndex:0}},props:{TabList:{default:function(){return[]},type:Array},currentTab:{default:0,type:Number}},computed:{transformX:function(){var t=this.currentTab;return"translate3d(".concat(100*t,"%, 0px, 0px)")},transformXx:function(){var t=this.currentTab;return"translate3d(-".concat(100*t,"%, 0px, 0px)")}},methods:{tabChange:function(t){this.orIndex=t,this.currentTab!=t&&(console.log("emit:".concat(t)),this.$emit("tabs",t),this.id="tab_".concat(t))},touchstart:function(t){this.start=t.touches[0].clientX},touchend:function(t){var n=t.changedTouches[0].clientX;n-this.start>100&&this.currentTab>=1?this.tabChange(this.currentTab-1):this.start-n>100&&this.currentTab<this.TabList.length-1&&this.tabChange(this.currentTab+1)}}};n.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'nopages/pages/components/tabss-create-component',
    {
        'nopages/pages/components/tabss-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8a91"))
        })
    },
    [['nopages/pages/components/tabss-create-component']]
]);