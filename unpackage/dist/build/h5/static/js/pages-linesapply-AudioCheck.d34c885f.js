(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-linesapply-AudioCheck"],{"234a":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("cu-custom",{staticClass:"navtit border solid",attrs:{bgColor:"bg-white"}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("身份信息")])],2),e("v-uni-view",{staticClass:"padding-xs align-center bg-gray"},[e("v-uni-view",{staticClass:"text-sm text-left text-grey"},[e("v-uni-text",[t._v("仅用于核实身份")])],1)],1),e("v-uni-view",{staticClass:"padding bg-white "},[e("v-uni-view",{staticClass:"img text-center bg-gray solid border round-dot"},[e("v-uni-image",{staticStyle:{width:"40%",height:"445upx"},attrs:{src:"../../static/imgs/realface.png"}})],1),e("v-uni-view",{staticClass:"padding solid border align-center text-sm bg-white"},[e("v-uni-view",{staticClass:"prompt-box-text"},[e("span",{staticClass:"prompt-box-text-number"},[t._v("1")]),e("span",{staticClass:"prompt-box-text-content"},[t._v("牢记随机数，点击开始录制")]),e("span",{staticClass:"prompt-box-text-border"})]),e("v-uni-view",{staticClass:"prompt-box-text"},[e("span",{staticClass:"prompt-box-text-number"},[t._v("2")]),e("span",{staticClass:"prompt-box-text-content"},[t._v("开启前置摄像头，普通话朗读数字")]),e("span",{staticClass:"prompt-box-text-border"})]),e("v-uni-view",{staticClass:"prompt-box-text"},[e("span",{staticClass:"prompt-box-text-number"},[t._v("3")]),e("span",{staticClass:"prompt-box-text-content"},[t._v("完成录制，等待验证结果")])])],1),t._e()],1),e("v-uni-view",{staticClass:"padding-xl flex flex-direction "},[e("v-uni-button",{staticClass:"cu-btn yanzhengbtns bg-gradual-orange margin-tb-sm round lg",on:{click:function(n){n=t.$handleEvent(n),t.start(n)}}},[e("v-uni-text",{staticClass:"cuIcon-video margin-right-xs"}),t._v("开始认证")],1)],1)],1)},r=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r})},"2d40":function(t,n,e){"use strict";e.r(n);var i=e("6028"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=r.a},4461:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 验证码按钮激活 */.yanzhengbtns[data-v-24b2f93c]{background-image:-webkit-gradient(linear,left top,right top,color-stop(3%,#ffb759),to(#ff7d00));background-image:-o-linear-gradient(left,#ffb759 3%,#ff7d00 100%);background-image:linear-gradient(90deg,#ffb759 3%,#ff7d00);-webkit-box-shadow:0 6px 12px -3px rgba(255,180,92,.7);box-shadow:0 6px 12px -3px rgba(255,180,92,.7)}.prompt-box-text-number[data-v-24b2f93c]{-webkit-border-radius:%?200?%;-moz-border-radius:%?200?%;border-radius:%?200?%;border:%?1?% solid #fbbd08;text-align:center;color:#fbbd08;display:inline-block;width:.934rem;height:.934rem;line-height:.934rem;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin-right:.883rem;letter-spacing:0;vertical-align:top}.prompt-box-text[data-v-24b2f93c]{margin:0 auto 1.466rem;height:.934rem;line-height:.934rem;width:22.5rem}.prompt-box-text[data-v-24b2f93c]:last-child{margin-bottom:0}.prompt-box-text-content[data-v-24b2f93c]{color:#333;letter-spacing:0;white-space:nowrap;display:inline-block}.prompt-box-text-border[data-v-24b2f93c]{height:.9rem;margin:.247rem 0 .187rem .444rem;width:0;border-left:%?1?% dotted #fbbd08;display:block}.modal-layer-popup-number[data-v-24b2f93c]{font-size:0;text-align:center}.modal-layer-popup-number span[data-v-24b2f93c]{font-size:%?54?%;color:#333;display:inline-block;width:2.55rem;height:3rem;line-height:3rem;margin-right:.43rem;border:1px solid #e1e1e1;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;text-align:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.modal-layer-popup-number span[data-v-24b2f93c]:last-child{margin-right:0}",""])},"488c":function(t,n,e){var i=e("4461");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("79eef744",i,!0,{sourceMap:!1,shadowMode:!1})},6028:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={onShow:function(){console.log("App1 Show")},onHide:function(){console.log("App1 Hide")},data:function(){return{}},onLoad:function(){},methods:{start:function(){uni.redirectTo({url:"AreaMsg"})}}};n.default=i},d79f:function(t,n,e){"use strict";var i=e("488c"),r=e.n(i);r.a},feda:function(t,n,e){"use strict";e.r(n);var i=e("234a"),r=e("2d40");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("d79f");var o=e("2877"),s=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"24b2f93c",null);n["default"]=s.exports}}]);