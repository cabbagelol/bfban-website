(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76a98aa8"],{"34c3":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[t("br"),t("Row",[t("Col",{attrs:{xs:{push:1},lg:{push:0}}},[t("Breadcrumb",[t("BreadcrumbItem",{attrs:{to:{name:"home"}}},[e._v(e._s(e.$t("header.index")))]),t("BreadcrumbItem",[e._v(e._s(e.$t("signup.title")))])],1)],1)],1),t("br"),t("Card",{attrs:{"dis-hover":""}},[e.isMobile?e._e():t("Steps",{attrs:{slot:"title",current:e.stepsIndex},slot:"title"},[t("Step",{attrs:{title:e.$t("signup.steps[0].title"),content:e.$t("signup.steps[0].supplement")}}),t("Step",{attrs:{title:e.$t("signup.steps[1].title"),content:e.$t("signup.steps[1].title")}}),t("Step",{attrs:{title:e.$t("signup.steps[2].title"),content:e.$t("signup.steps[2].title")}}),t("Step",{attrs:{title:e.$t("signup.steps[3].title"),content:e.$t("signup.steps[3].title")}}),t("Step",{attrs:{title:e.$t("signup.steps[4].title"),content:e.$t("signup.steps[4].title")}})],1),t("Row",{attrs:{gutter:e.isMobile?0:30}},[t("Col",{attrs:{span:"24"}},[0==e.stepsIndex?[t("Alert",{attrs:{type:"info","show-icon":""}},[t("div",{domProps:{innerHTML:e._s(e.$t("signup.eaPrivacy"))}}),e._v(" "+e._s(e.$t("signup.checkAllEmail"))+" ")]),t("br")]:e._e(),e.backServiceMsg?t("Alert",{attrs:{type:"error","show-icon":""}},[t("b",[e._v(e._s(e.$t("signup.failed"))+" :")]),e._v(" "+e._s(e.backServiceMsg)+" ")]):e._e(),t("Form",{ref:"formValidate",attrs:{"label-position":"top",model:e.signup,rules:e.ruleValidate}},[t("div",{directives:[{name:"show",rawName:"v-show",value:0==e.stepsIndex,expression:"stepsIndex == 0"}]},[t("FormItem",{attrs:{label:e.$t("signup.form.username"),prop:"username"}},[t("Input",{attrs:{maxlength:"40",size:"large",placeholder:e.$t("signup.placeholder.username")},model:{value:e.signup.username,callback:function(t){e.$set(e.signup,"username",t)},expression:"signup.username"}})],1),t("FormItem",{attrs:{label:e.$t("signup.form.password"),prop:"password"}},[t("Input",{attrs:{type:"password",password:"",minlength:"6",size:"large",placeholder:e.$t("signup.placeholder.password")},model:{value:e.signup.password,callback:function(t){e.$set(e.signup,"password",t)},expression:"signup.password"}})],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:1===e.stepsIndex,expression:"stepsIndex === 1"}]},[t("FormItem",{attrs:{label:e.$t("signup.form.originEmail"),prop:"originEmail"}},[t("Input",{attrs:{size:"large",placeholder:e.$t("signup.placeholder.originEmail")},model:{value:e.signup.originEmail,callback:function(t){e.$set(e.signup,"originEmail",t)},expression:"signup.originEmail"}})],1),t("FormItem",{attrs:{label:e.$t("signup.form.originName"),prop:"originName"}},[t("Input",{attrs:{size:"large",placeholder:e.$t("signup.placeholder.originName")},model:{value:e.signup.originName,callback:function(t){e.$set(e.signup,"originName",t)},expression:"signup.originName"}})],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:2===e.stepsIndex,expression:"stepsIndex === 2"}]},[t("FormItem",{attrs:{label:e.$t("captcha.title"),prop:"captcha"}},[t("Input",{attrs:{type:"text",size:"large",maxlength:"4",placeholder:e.$t("captcha.title")},model:{value:e.signup.captcha,callback:function(t){e.$set(e.signup,"captcha",t)},expression:"signup.captcha"}},[t("div",{staticClass:"captcha-input-append",attrs:{slot:"append",alt:e.$t("captcha.get")},slot:"append"},[t("Captcha",{ref:"captcha",attrs:{seconds:15}})],1)])],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:3===e.stepsIndex,expression:"stepsIndex === 3"}]},[t("Card",{attrs:{"dis-hover":""}},[t("Row",{attrs:{gutter:16,type:"flex",justify:"center",align:"middle"}},[t("Col",[t("Icon",{attrs:{type:"md-cloud",color:"#535353",size:"80"}})],1),t("Col",[t("Icon",{attrs:{type:"md-return-right",color:"#aaa",size:"30"}})],1),t("Col",[t("Icon",{attrs:{type:"md-mail",color:"#535353",size:"80"}})],1)],1)],1),t("br"),t("Alert",{attrs:{type:"success","show-icon":""}},[e._v(e._s(e.$t("signup.needVerify")))])],1),t("Row",{directives:[{name:"show",rawName:"v-show",value:e.stepsIndex<=2,expression:"stepsIndex <= 2"}]},[t("Col",{attrs:{flex:"auto"}},[e.stepsIndex>=0&&e.stepsIndex<=2?t("Button",{attrs:{disabled:0==e.stepsIndex,size:"large"},on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.stepsIndex--}}},[e._v(e._s(e.$t("basic.button.prev"))+" ")]):e._e(),t("Divider",{attrs:{type:"vertical"}}),2!=e.stepsIndex&&e.stepsIndex>=0&&e.stepsIndex<=2?t("Button",{attrs:{size:"large",type:"primary"},on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.stepsIndex++}}},[e._v(e._s(e.$t("basic.button.next"))+" ")]):e._e()],1),t("Col",{attrs:{flex:"auto",align:"right",type:"flex"}},[2==e.stepsIndex?[t("Button",{attrs:{disabled:!e.signup.captcha,loading:e.spinShow,long:"",size:"large",type:"primary"},on:{click:e.onSignup}},[e._v(" "+e._s(e.$t("basic.button.submit"))+" ")])]:e._e()],2)],1)],1)],2)],1),e.stepsIndex<=2?[t("br"),t("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[t("Col",[t("router-link",{attrs:{to:{name:"signin"}}},[e._v(e._s(e.$t("signup.form.submitHint")))])],1),t("Divider",{attrs:{type:"vertical"}}),t("Col",[t("router-link",{attrs:{to:{name:"forgetPassword"}}},[e._v(e._s(e.$t("signup.form.forgetPasswordHint")))])],1)],1)]:e._e()],2)],1)])},a=[],n=s("ad43"),r=s("e4b4"),o=(s("872c"),s("47f2")),p=s("e7f8"),l=new n["a"]({data(){return{stepsIndex:0,ruleValidate:{username:[{required:!0,min:4,max:40,trigger:"blur"}],password:[{required:!0,min:6,max:40,trigger:"blur"}],originEmail:[{required:!0,type:"email",trigger:"change"}],originName:[{required:!0,trigger:"blur"}],captcha:[{required:!0,min:4,max:4,trigger:"change"}]},signup:{username:"",password:"",originEmail:"",originName:"",captcha:""},backServiceMsg:"",spinShow:!1}},components:{EmailTip:o["a"],Captcha:p["a"]},created(){this.http=r["d"].call(this)},methods:{onSignup(){const e=this;this.$refs["formValidate"].validate(t=>{let{username:s,password:i,originEmail:a,originName:n,captcha:o}=this.signup;t?(this.spinShow=!0,r["c"].post(r["b"]["account_signup"],{data:{data:{username:s,password:i,originEmail:a,originName:n,language:r["e"].exchangeLangField(this.$root.$i18n.locale)},encryptCaptcha:this.$refs.captcha.hash,captcha:o}}).then(t=>{const s=t.data;if(1===s.success)return e.stepsIndex+=1,void e.$Message.success({content:this.$i18n.t("signup.needVerify"),duration:10});this.callbackMessage(s)}).catch(e=>{this.$Message.error(e),this.backServiceMsg=this.$i18n.t("signup.failed")}).finally(()=>{this.spinShow=!1,this.$refs.captcha&&this.$refs.captcha.refreshCaptcha()})):this.$Message.info(this.$i18n.t("signup.fillIn"))})},onCleanSignupForm({captcha:e=!0,username:t=!0,password:s=!0,originEmail:i=!0,originName:a=!0,stepsIndex:n=!0}){e&&(this.signup.captcha=""),t&&(this.signup.username=""),s&&(this.signup.password=""),i&&(this.signup.originEmail=""),a&&(this.signup.originName=""),n&&(this.stepsIndex=0)},callbackMessage(e){const t=this;switch(e.code){case"signup.needVerify":t.$Message.info(this.$i18n.t("signup.needVerify"));break;case"signup.gameNotShowed":t.$Message.info(this.$i18n.t("signup.gameNotShowed"));break;case"signup.originBindingExist":t.$Message.info(this.$i18n.t("signup.originBindingExist"));break;case"signup.originNotFound":t.$Message.info(this.$i18n.t("signup.originNotFound"));break;case"signup.usernameExist":t.$Message.info(this.$i18n.t("signup.usernameExist"));break;case"signup.notImplement":case"signup.bad":case"signup.error":default:t.$Message.error(e.code),t.backServiceMsg=e.message||e.code;break}if(e.code.indexOf("captcha")>=0){let s=e.code.split(".")[1],i=this.$i18n.t("captcha.messages."+s);if("gan"==s)return;t.$Message.error({content:i,duration:6}),t.backServiceMsg+=","+i}}}}),c=l,u=s("2877"),g=Object(u["a"])(c,i,a,!1,null,null,null);t["default"]=g.exports},"47f2":function(e,t,s){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",[t("Alert",{attrs:{type:"success","show-icon":""}},[e._v(" "+e._s(e.$("signup.checkAllEmail"))+" ")])],1)},a=[],n={name:"EmailTip",props:{email:String}},r=n,o=s("2877"),p=Object(o["a"])(r,i,a,!1,null,"2af1aae9",null);t["a"]=p.exports},"872c":function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));s("5494"),s("2ef0");function i(e){return e.replace(/\r\n|\r|\n/g,"<br />")}function a(e){return e.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi,e=>{if(/(jpg|jpeg|png|gif)$/gi.test(e))return e;const t=new URL(e).hostname;return-1!==t.indexOf("bfban.com")?`<a href="${e}">${e}</a>`:`<a target="_blank" href="${e}">${e}</a>`})}function n(e){let t=e;return t=i(t),t=a(t),t}}}]);
//# sourceMappingURL=chunk-76a98aa8.2.9.7.js.map