(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0e08":function(n,t,e){var i=e("f884");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("94bf1c12",i,!0,{sourceMap:!1,shadowMode:!1})},"146c":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"bg-white"},[e("cu-custom",{staticClass:"navtit",attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"}),e("template",{attrs:{slot:"content"},slot:"content"},[n._v("易贷登录")])],2),e("v-uni-view",{staticClass:"solids-bottom padding-xs flex align-center"},[e("v-uni-view",{staticClass:"flex-sub text-center"},[e("v-uni-view",{staticClass:"text-sm"},[e("v-uni-view",{staticClass:"text-left"},[e("v-uni-text",{staticClass:"text-grey text-left"},[n._v("手机号码将作为登录用户名使用")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-text",{staticClass:"cuIcon-mobile shadow margin-xs margin-right"}),e("v-uni-input",{staticClass:"text-left",attrs:{placeholder:"请输入手机号",maxlength:"11",type:"number",name:"input"},on:{input:function(t){t=n.$handleEvent(t),n.yzinput(t)}},model:{value:n.form.mobile,callback:function(t){n.$set(n.form,"mobile",t)},expression:"form.mobile"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-text",{staticClass:"cuIcon-lock shadow margin-xs margin-right"}),e("v-uni-input",{staticClass:"text-left",attrs:{placeholder:"请输入验证码",maxlength:"6",type:"number",name:"input"},model:{value:n.form.timcou,callback:function(t){n.$set(n.form,"timcou",t)},expression:"form.timcou"}}),e("v-uni-button",{staticClass:"cu-btn round ",class:1==n.yzbtn?"yanzhengbtn":"yanzhengbtns",attrs:{type:"warn"},on:{click:function(t){t=n.$handleEvent(t),n.sendck(t)}}},[e("span",{directives:[{name:"show",rawName:"v-show",value:n.showCount,expression:"showCount"}]},[n._v("验证码")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!n.showCount,expression:"!showCount"}],staticClass:"count"},[n._v(n._s(n.count)+" s")])])],1),e("v-uni-view",{staticClass:"padding-xl solid-top flex flex-direction "},[e("v-uni-button",{staticClass:"cu-btn bg-gradual-orange round lg",class:1==n.yzbtn?"yanzhengbtn":"yanzhengbtns",on:{click:function(t){t=n.$handleEvent(t),n.login(t)},keyup:function(t){if(!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t=n.$handleEvent(t),n.login(t)}}},[n._v("登录")])],1),e("v-uni-view",{staticClass:"padding-sm"},[e("v-uni-view",{staticClass:"text-sm text-center"},[e("v-uni-label",{staticClass:"radio"},[e("v-uni-radio",{staticStyle:{transform:"scale(0.6)"},attrs:{value:"r2",checked:n.current},on:{click:function(t){t=n.$handleEvent(t),n.changeradio(t)}}}),n._v("我已阅读、知悉并同意《"),e("a",{staticClass:"Index-a",attrs:{href:"#"}},[n._v("用户协议")]),n._v("》"),e("br"),n._v("《"),e("a",{staticClass:"Index-a",attrs:{href:"#"}},[n._v("个人信息采集授权书")]),n._v("》、\n\t\t\t\t《"),e("a",{staticClass:"Index-a",attrs:{href:"#"}},[n._v("用户注册协议")]),n._v("》")],1)],1)],1)],1)},a=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a})},"430c":function(n,t,e){"use strict";e.r(t);var i=e("aa94"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);t["default"]=a.a},"79f5":function(n,t,e){"use strict";var i=e("0e08"),a=e.n(i);a.a},aa94:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={onShow:function(){console.log("App1 Show")},onHide:function(){console.log("App1 Hide")},data:function(){return{current:!1,showCount:!0,yzbtn:!0,count:"",times:1,gpsdetail:"",reg:{mobile:/^[1][3,4,5,7,8][0-9]{9}$/},form:{mobile:"",timcou:""}}},onLoad:function(){this.getarea(),this.keyupEnter()},methods:{keyupEnter:function(){var n=this;document.onkeydown=function(t){var e=window.event.keyCode;13==e&&n.login()}},yzinput:function(n){""!=n.detail.value||this.reg.mobile.test(n.detail.value)?this.yzbtn=!1:(this.yzbtn=!0,this.showCount=!0,clearInterval(this.timer),this.timer=null,uni.showToast({icon:"none",title:"请输入正确的手机号码"}))},getarea:function(){var n=this;uni.getLocation({type:"wgs84",success:function(t){n.gpsdetail="经度："+t.longitude+",纬度："+t.latitude+",邮编："}})},back:function(){uni.redirectTo({url:"MSloanapply"})},login:function(){this.reg.mobile.test(this.form.mobile)?""==this.form.timcou||6!=this.form.timcou.length?uni.showToast({icon:"none",title:"请输入正确的验证码"}):0==this.current?uni.showToast({icon:"none",title:"请阅读并同意相关协议"}):uni.redirectTo({url:"../linesapply/OcrCheck"}):uni.showToast({icon:"none",title:"请输入正确的手机号码"})},sendck:function(){var n=this;if(this.reg.mobile.test(this.form.mobile))if(1==this.times){var t=60;this.timer||(this.count=t,this.showCount=!1,this.times=2,this.timer=setInterval(function(){n.count>0&&n.count<=t?n.count--:(n.showCount=!0,clearInterval(n.timer),n.timer=null)},1e3))}else if(2==this.times){var e=120;this.timer||(this.count=e,this.showCount=!1,this.times=3,this.timer=setInterval(function(){n.count>0&&n.count<=e?n.count--:(n.showCount=!0,clearInterval(n.timer),n.timer=null)},1e3))}else{var i=200;this.timer||(this.count=i,this.showCount=!1,this.timer=setInterval(function(){n.count>0&&n.count<=i?n.count--:(n.showCount=!0,clearInterval(n.timer),n.timer=null)},1e3))}else uni.showToast({icon:"none",title:"请输入正确的手机号码"})},changeradio:function(){this.current=!this.current}}};t.default=i},f689:function(n,t,e){"use strict";e.r(t);var i=e("146c"),a=e("430c");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("79f5");var s=e("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"58af61ae",null);t["default"]=r.exports},f884:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 验证码按钮默认 */.yanzhengbtn[data-v-58af61ae]{background:#fde8d4}\n/* 验证码按钮激活 */.yanzhengbtns[data-v-58af61ae]{background-image:-webkit-gradient(linear,left top,right top,color-stop(3%,#ffb759),to(#ff7d00));background-image:-o-linear-gradient(left,#ffb759 3%,#ff7d00 100%);background-image:linear-gradient(90deg,#ffb759 3%,#ff7d00);-webkit-box-shadow:0 6px 12px -3px rgba(255,180,92,.7);box-shadow:0 6px 12px -3px rgba(255,180,92,.7)}.cu-form-group .title[data-v-58af61ae]{min-width:calc(4em + 15px)}.code-style[data-v-58af61ae]{font-size:16px;color:red;cursor:pointer}.code-box[data-v-58af61ae]{text-align:center}",""])}}]);