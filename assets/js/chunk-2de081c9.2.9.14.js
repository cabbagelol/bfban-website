(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2de081c9"],{3290:function(e,t,s){},"4a33":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("div",{attrs:{"dis-hover":"",padding:0}},[s("Row",{attrs:{gutter:0,type:"flex",justify:"center"}},[s("Col",{staticStyle:{width:"500px"}},[s("br"),s("Row",[s("Col",{attrs:{xs:{push:1},lg:{push:0}}},[s("Breadcrumb",[s("BreadcrumbItem",{attrs:{to:{name:"home"}}},[e._v(e._s(e.$t("header.index")))]),s("BreadcrumbItem",[e._v(e._s(e.$t("signin.title")))])],1)],1)],1),s("br"),e.isLogin?e._e():s("Card",{staticClass:"signin-box",attrs:{padding:e.isMobile?20:50,"dis-hover":""}},[s("Form",{ref:"signin",attrs:{model:e.signin,rules:e.ruleValidate,"label-position":"top"}},[e.serverReturnMessage?s("Alert",{attrs:{type:"error","show-icon":""}},[s("b",[e._v(e._s(e.$t("signin.failed"))+" :")]),e._v(" "+e._s(e.serverReturnMessage)+" ")]):e._e(),s("FormItem",{attrs:{label:e.$t("signin.form.username"),prop:"username"}},[s("Input",{attrs:{prefix:"ios-contact",type:"text",size:"large",placeholder:e.$t("signin.form.username")},model:{value:e.signin.username,callback:function(t){e.$set(e.signin,"username",t)},expression:"signin.username"}})],1),s("FormItem",{attrs:{label:e.$t("signin.form.password"),prop:"password"}},[s("Input",{attrs:{type:"password",password:"",size:"large",placeholder:e.$t("signin.form.password")},model:{value:e.signin.password,callback:function(t){e.$set(e.signin,"password",t)},expression:"signin.password"}})],1),s("Row",{attrs:{gutter:30,type:"flex",justify:"space-between",align:"middle"}},[s("Col",{attrs:{span:e.isMobile?24:15}},[s("FormItem",{attrs:{label:e.$t("captcha.title"),prop:"captcha"}},[s("Input",{attrs:{type:"text",size:"large",maxlength:"4",placeholder:e.$t("captcha.title")},model:{value:e.signin.captcha,callback:function(t){e.$set(e.signin,"captcha",t)},expression:"signin.captcha"}},[s("div",{staticClass:"captcha-input-append",attrs:{slot:"append",alt:e.$t("captcha.get")},slot:"append"},[s("Captcha",{ref:"captcha",attrs:{seconds:15,disable:!(e.signin.password&&e.signin.username)}})],1)])],1)],1)],1),s("br"),s("FormItem",[s("Button",{attrs:{long:"",loading:e.spinShow,size:"large",type:"primary"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSignin.apply(null,arguments)}}},[e._v(" "+e._s(e.$t("basic.button.submit"))+" ")])],1),e.spinShow?s("spin",{attrs:{fix:""}},[s("Icon",{attrs:{type:"md-refresh spin-icon-load",size:"30"}})],1):e._e()],1),s("Divider",{style:"margin:40px -"+(e.isMobile?20:50)+"px;width:calc(100% + "+(e.isMobile?40:100)+"px)",attrs:{dashed:""}}),s("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("Col",[s("router-link",{attrs:{to:{name:"signup"}}},[s("Icon",{attrs:{type:"md-mail"}}),e._v(" "+e._s(e.$t("signin.form.submitHint"))+" ")],1)],1),s("Divider",{attrs:{type:"vertical"}}),s("Col",[s("router-link",{attrs:{to:{name:"forgetPassword"}}},[e._v(e._s(e.$t("signin.form.forgetPasswordHint")))])],1),s("Divider",{attrs:{type:"vertical"}}),s("Col",[s("a",{attrs:{href:"http://kook.top/wHwxhw"}},[e._v(e._s(e.$t("signin.form.Feedback")))])])],1)],1),e.isLogin?s("Card",{attrs:{shadow:"",align:"center",padding:e.isMobile?20:50}},[s("Avatar",{attrs:{icon:"ios-person",size:"100",src:e.currentUser.userinfo.userAvatar}}),s("h1",[s("router-link",{attrs:{to:{name:"profile",params:{pagename:"information"}}}},[e._v(" "+e._s(e.currentUser.userinfo.username)+" ")])],1),s("p",[e._v(" "+e._s(e.$t("signin.loggedIn"))+" ")])],1):e._e()],1)],1)],1)])])},r=[],i=s("ad43"),n=s("e4b4"),o=s("e7f8"),c=s("2f62"),p=s("2ef0"),l=s.n(p);const{mapActions:u,mapMutations:d}=c["a"];var g=new i["a"]({components:{Captcha:o["a"]},data(){return{ruleValidate:{username:[{required:!0,min:4,max:40,trigger:"blur"},{validator(e,t,s){return 0==n["k"].check("username",t).code||0==n["k"].check("email",t).code},message:this.$t("signup.placeholder.username"),trigger:"change"}],password:[{required:!0,trigger:"blur"}],captcha:[{required:!0,len:4,trigger:"blur"}]},serverReturnMessage:"",signin:{username:"",password:"",captcha:""},spinShow:!1}},beforeMount(){this.$route.query.backPath&&this.$Message.info(this.$t("signin.loginFirst"))},methods:{...u({signinUser:"signin"}),...d(["SIGNIN"]),handleSignin:function(){const e=this,t=this.$route.query.backPath,{username:s,password:a,captcha:r}=l.a.each(this.signin,(e,t,s)=>{s[t]=e.trim()});this.$refs["signin"].validate(i=>{i?(this.spinShow=!0,n["d"].post(n["c"]["account_signin"],{data:{data:{username:s,password:a},encryptCaptcha:this.$refs.captcha.hash,captcha:r}}).then(async s=>{const a=s.data;if(1===a.error)return e.signin.password="",e.signin.captcha="",e.serverReturnMessage=this.$t(`basic.tip['${a.code}']`,{message:a.message||""}),void this.$Message.error(e.serverReturnMessage);await e.signinUser(a.data),t?await this.$router.push({path:t}):this.$router.go("-1"),this.$Message.success(this.$t(`basic.tip['${a.code}']`,{message:a.message||""}))}).finally(t=>{e.spinShow=!1,e.$refs.captcha&&e.$refs.captcha.refreshCaptcha()})):this.$Message.error(this.$t("signin.fillEverything"))})}},computed:{currentUser(){return this.$store.state.user||{token:""}}}}),h=g,m=(s("8a00"),s("2877")),f=Object(m["a"])(h,a,r,!1,null,"a507b24e",null);t["default"]=f.exports},"8a00":function(e,t,s){"use strict";s("3290")}}]);
//# sourceMappingURL=chunk-2de081c9.2.9.14.js.map