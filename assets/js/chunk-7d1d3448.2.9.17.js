(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d1d3448","chunk-2d0da581"],{"0626":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Poptip",{attrs:{width:300,trigger:t.trigger,transfer:"",disabled:t.disabled,padding:"0"}},[a("span",{staticClass:"achievement-view-slot"},[t._t("default")],2),a("div",{staticClass:"achievement-view",attrs:{slot:"content"},slot:"content"},[a("Banner",{attrs:{height:160}},[a("div",{attrs:{align:"center"}},[t.achievementInfo.iconPath?a("Avatar",{attrs:{size:50,shape:"square",src:t.achievementUtil.getIcon(t.achievementInfo.iconPath),width:"35px",height:"35px"}}):t._e()],1),a("h3",{staticClass:"achievement-view-body achievement-view-title"},[a("Row",{attrs:{gutter:10,type:"flex",align:"middle"}},[a("Col",[a("b",{attrs:{title:t.achievementInfo.value}},[t._v(t._s(t.$t("profile.achievement.list."+t.achievementInfo.value+".name")))])]),a("Col",[t.achievementInfo.rarity?a("Tag",{attrs:{type:"border",color:t.achievements.raritys[t.achievementInfo.rarity].class}},[t._v(" "+t._s(t.$t("profile.achievement.rarity."+t.achievementInfo.rarity))+" ")]):t._e(),t.time?a("Tag",{attrs:{type:"border"}},[t._v(" "+t._s(t.$t("profile.achievement.acquisitionTime"))+" "),a("TimeView",{attrs:{time:t.time}},[a("Time",{attrs:{time:t.time}})],1)],1):t._e()],1)],1)],1)]),a("div",{staticClass:"achievement-view-body"},[a("p",{staticClass:"achievement-view-description"},[t._v(t._s(t.$t("profile.achievement.list."+t.achievementInfo.value+".description")))]),a("p",[a("b",[t._v(t._s(t.$t("profile.achievement.conditions")))])]),a("p",{staticClass:"achievement-view-conditions",domProps:{innerHTML:t._s(t.$t("profile.achievement.list."+t.achievementInfo.value+".conditions"))}}),t.achievementInfo.acquisition&&t.achievementInfo.acquisition.indexOf("active")>=0&&t.activeButton&&!t.onlyShow?[a("Button",{attrs:{long:"",ghost:"",type:"primary",loading:t.load},on:{click:function(e){return t.onActiveAchievement(t.achievementInfo.value)}}},[t._v(" "+t._s(t.$t("profile.achievement.getButton"))+" ")])]:t._e()],2)],1)])},s=[],n=a("e4b4"),o=a("2ec1"),r=a("84af"),c=a("9648"),l={props:{disabled:{type:Boolean,default:!1},trigger:{type:String,default:"click"},onlyShow:{type:Boolean,default:!1},time:{type:[String,Number],default:""},id:{type:String,default:""}},data(){return{achievementUtil:n["b"],achievements:o,load:!1,activeButton:!0,achievementInfo:{acquisition:[]}}},components:{Banner:r["a"],TimeView:c["a"]},created(){this.getCurrentAchievementInfo(this.id)},methods:{async onActiveAchievement(t){t&&!this.load&&(this.load=!0,await n["b"].onActiveAchievement(t).then(t=>{const e=t.data;if(1===e.success)return this.activeButton=!1,void this.$Message.success(this.$t(`basic.tip['${e.code}']`));this.$Message.error(this.$t(`basic.tip['${e.code}']`,{message:e.message||""}))}).finally(()=>{this.load=!1}))},getCurrentAchievementInfo(t){t&&(this.achievementInfo=n["b"].getItem(t))}}},m=l,u=(a("9b5c"),a("2877")),p=Object(u["a"])(m,i,s,!1,null,"3528eff2",null);e["a"]=p.exports},"0c26":function(t,e,a){"use strict";a("32b8")},"22ca":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"confettiContainer",on:{dblclick:t.stopAnimation}},[t._t("default")],2)},s=[],n={name:"Confetti",props:{switch:{type:Boolean,default:!0},x:{type:[Number],default:0},y:{type:[Number],default:0},emojis:[Array],emojiCount:{type:Number,default:100}},data(){return{animation:[]}},watch:{switch:{handler(t){t&&this.animation.length<=0&&this.generateConfetti()}}},mounted(){this.switch&&this.generateConfetti()},methods:{stopAnimation(){if(this.animation)for(let t=0;t<this.animation.length;t++)clearTimeout(this.animation[t])},generateConfetti(){var t=["🎉","🎊","🎈","🎁","🎀"].concat(this.emojis||[]);if(this.$refs.confettiContainer)for(let e=0;e<this.emojiCount;e++)this.animation.push(setTimeout(()=>{var e,a,i,s=t[Math.floor(Math.random()*t.length)],n=Math.floor(Math.random()*(null===(e=this.$refs.confettiContainer)||void 0===e?void 0:e.offsetWidth)||0)-this.x,o=Math.floor(Math.random()*(null===(a=this.$refs.confettiContainer)||void 0===a?void 0:a.offsetHeight)||0)-this.y,r=document.createElement("span");r.style.position="absolute",r.style.left=n+"px",r.style.top=o+"px",r.style.fontSize="30px",r.style.opacity=0,r.style.transition="all 0.5s",r.innerText=s,null===(i=this.$refs.confettiContainer)||void 0===i||i.appendChild(r),setTimeout(()=>{r.style.opacity=1},50),setTimeout(()=>{r.style.opacity=0,setTimeout(()=>{r.remove()},100)},1e3)},100*e))}}},o=n,r=a("2877"),c=Object(r["a"])(o,i,s,!1,null,null,null);e["a"]=c.exports},"32b8":function(t,e,a){},"485b":function(t,e,a){},"6acc":function(t){t.exports=JSON.parse('{"defaultIndex":0,"default":"bf1","child":[{"value":"bf1","full_name":"bf1","bk_file":"images/games/bf1","bk_src":"//media.contentapi.ea.com/content/dam/gin/images/2017/01/battlefield-1-keyart-5452x3859.jpg.adapt.crop1x1.767p.jpg","logo_src":"//media.contentapi.ea.com/content/dam/gin/common/logos/layer-1.png","app_assets_bk_file":"assets/images/games/bf1/bf.jpg","app_assets_logo_file":"assets/images/games/bf1/logo.png"},{"value":"bfv","full_name":"bfv","bk_file":"images/games/bfv","bk_src":"https://media.contentapi.ea.com/content/dam/gin/images/2018/05/bfv-campaignart-standard-large.jpg.adapt.crop1x1.767p.jpg","bk_width":150,"logo_src":"https://media.contentapi.ea.com/content/dam/gin/common/logos/bfv-logo-white.png","app_assets_bk_file":"assets/images/games/bfv/bf.jpg","app_assets_logo_file":"assets/images/games/bfv/logo.png"},{"value":"bf6","full_name":"bf2042","bk_file":"images/games/bf6","bk_src":"https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg","logo_src":"https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefield-2042-mono-logo-svg.svg","app_assets_bk_file":"assets/images/games/bf6/bf.jpg","app_assets_logo_file":"assets/images/games/bf6/logo.png"}]}')},"7f73":function(t,e,a){},"840b":function(t,e,a){},9648:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Poptip",{staticClass:"time-view",attrs:{transfer:"",trigger:t.trigger}},[a("u",{staticClass:"spelling time-view time-view-slot"},[t._t("default")],2),t.time?a("Form",{staticClass:"time-view-form",attrs:{slot:"content",labelPosition:"top",width:"100"},slot:"content"},[a("FormItem",{attrs:{label:t.$t("detail.dateView.primitive")}},[a("Alert",{attrs:{"show-icon":"",type:"info"}},[t._v(t._s(t.$t("detail.dateView.primitiveDescription")))]),a("Select",{model:{value:t.primitiveValue,callback:function(e){t.primitiveValue=e},expression:"primitiveValue"}},[a("Option",{attrs:{value:"primitive",label:t.timeMap.primitive.toString()}},[a("p",[t._v("primitive value")]),a("Input",{attrs:{value:t.timeMap.primitive.toString(),readonly:""}})],1),a("Option",{attrs:{value:"primitiveDateString",label:t.timeMap.primitiveDateString.toString()}},[a("p",[t._v("primitive date string value")]),a("Input",{attrs:{value:t.timeMap.primitiveDateString.toString(),readonly:""}})],1)],1)],1),a("FormItem",{attrs:{label:t.$t("detail.dateView.localTimeZoneName")}},[a("Tag",{attrs:{type:"border"}},[t._v(t._s(t.timeMap.timeFormatName))])],1),a("FormItem",{attrs:{label:t.$t("detail.dateView.localeTime")}},[a("Alert",{attrs:{"show-icon":"",type:"info"}},[t._v(t._s(t.$t("detail.dateView.localeTimeDescription")))]),a("Input",{attrs:{value:t.timeMap.localeDateString.toString(),readonly:""}})],1)],1):t._e()],1)},s=[],n={props:{time:[String,Number,Date],trigger:{type:String,default:"click"}},data(){return{timeMap:null,primitiveValue:"primitive",options:{hour:"numeric",minute:"numeric",second:"numeric",weekday:"long",year:"numeric",month:"long",day:"numeric"}}},watch:{time:function(){this.loadData()}},created(){this.loadData()},methods:{loadData(){this.time&&(this.timeMap={primitive:this.time,primitiveDateString:this.toDateString(this.time),conversionDate:new Date(this.time).toLocaleDateString(),conversionLocalDate:this.toLocaleString(new Date(this.time).getTime()),timeFormatName:this.getTimeFormatName(),localeDateString:this.toLocaleDateString(this.time)})},toLocaleString(t){const e=new Date(t);return e.toLocaleString()},getTimeFormatName(){return Intl.DateTimeFormat().resolvedOptions().timeZone},toLocaleDateString(t){const e=new Date(t);return e.toLocaleDateString(void 0,this.options)},toDateString(t){const e=new Date(t);return e.toDateString(void 0,this.options)}}},o=n,r=(a("b2f2"),a("2877")),c=Object(r["a"])(o,i,s,!1,null,"c5067ae8",null);e["a"]=c.exports},"9b5c":function(t,e,a){"use strict";a("485b")},b2f2:function(t,e,a){"use strict";a("7f73")},b3a8:function(t,e,a){"use strict";a("840b")},c24f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),a("Row",[a("Col",{attrs:{flex:"1",xs:{push:1},lg:{push:0}}},[a("Breadcrumb",[a("BreadcrumbItem",{attrs:{to:{name:"home"}}},[t._v(t._s(t.$t("header.index")))]),a("BreadcrumbItem",[t._v(t._s(t.$t("account.title")))])],1)],1),t.currentUser&&t.currentUser.userinfo?a("Col",[a("Poptip",{attrs:{trigger:"hover",transfer:"",disabled:t.isChat}},[a("Button",{attrs:{disabled:t.isChat},on:{click:t.openMessage}},[a("Icon",{attrs:{type:"ios-chatbubbles"}}),t._v(" "+t._s(t.$t("account.message.chat"))+" ")],1),a("div",{attrs:{slot:"content"},slot:"content"},[t.account.attr.allowDM?t._e():a("Alert",{attrs:{"show-icon":"",type:"error"}},[t._v(" "+t._s(t.$t("account.message.hint.taOffChat"))+" ")]),t.account.id==t.currentUser.userinfo.userId?a("Alert",{attrs:{"show-icon":"",type:"error"}},[t._v(" "+t._s(t.$t("account.message.hint.selfTalk"))+" ")]):t._e(),[t._v(t._s(t.$t("account.message.chat")))]],2)],1)],1):t._e()],1),a("br"),t.account?[a("div",{attrs:{"dis-hover":"",bordered:""}},[a("Confetti",{attrs:{y:20,emojiCount:300,switch:new Date(t.account.joinTime).getTime()<new Date("2020 01-01").getTime()||t.account.id<=1e3}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{attrs:{justify:"center",align:"middle"}},[a("br"),a("UserAvatar",{attrs:{src:t.account.userAvatar?""+t.account.userAvatar:""}}),a("div",{staticClass:"account-username"},[a("h1",{attrs:{title:t.$t("account.username")}},[t._v(" "+t._s(t.account.username||"username")+" ")]),t.account.attr.introduction?[a("span",{staticStyle:{opacity:".6"},domProps:{innerHTML:t._s(t.account.attr.introduction)}})]:t._e()],2),a("Row",{attrs:{gutter:10,type:"flex",justify:"center",align:"middle"}},[a("Col",[t.account.privilege?a("PrivilegesTag",{attrs:{data:t.account.privilege}}):a("p",[t._v("-")]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.role")))])],1),a("Divider",{attrs:{type:"vertical"}}),a("Col",[t.account.joinTime?a("Tag",{attrs:{type:"border",size:"large",color:"primary"}},[a("TimeView",{attrs:{time:t.account.joinTime||new Date}},[a("Time",{attrs:{time:t.account.joinTime||new Date}})],1)],1):a("p",[t._v("-")]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.joinedAt")))])],1),a("Divider",{attrs:{type:"vertical"}}),a("Col",[t.account.lastOnlineTime?a("Tag",{attrs:{type:"border",size:"large",color:"#df22ff"}},[a("TimeView",{attrs:{time:t.account.lastOnlineTime||new Date}},[a("Time",{attrs:{time:t.account.lastOnlineTime||new Date}})],1)],1):a("p",[t._v("-")]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.lastOnlineTime")))])],1),t.account.attr&&t.account.attr.achievements&&Object.keys(t.account.attr.achievements).length>0?[a("Divider",{attrs:{type:"vertical"}}),a("Col",[a("AchievementsTag",{attrs:{showAll:!0,data:t.account.attr.achievements,size:"17px","max-overflow":3}}),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("profile.achievement.title")))])],1)]:t._e(),a("Divider",{attrs:{type:"vertical"}}),a("Col",[a("Poptip",{attrs:{transfer:!0}},[a("h3",[t._v(t._s(t.account.reportNum||"-")+" "),a("Icon",{attrs:{type:"md-more"}})],1),t.account.statusNum?a("Row",{staticStyle:{"text-align":"center"},attrs:{slot:"content",gutter:15,type:"flex",justify:"center",align:"middle"},slot:"content"},[t.isLogin?[a("Col",[a("b",[t._v(t._s(t.account.statusNum["0"]||"-"))]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("basic.status.0.text")))])]),a("Divider",{attrs:{type:"vertical"}}),a("Col",[a("b",[t._v(t._s(t.account.statusNum["1"]||"-"))]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("basic.status.1.text")))])]),a("Divider",{attrs:{type:"vertical"}}),a("Col",[a("b",[t._v(t._s(t.account.statusNum["4"]||"-"))]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("basic.status.4.text")))])]),a("Divider",{attrs:{type:"vertical"}}),a("Col",[a("b",[t._v(t._s(t.account.reportNum-(t.account.statusNum["0"]+t.account.statusNum["1"]+t.account.statusNum["4"])))]),a("p",{staticClass:"account-info-p"},[t._v("···")])]),a("Col",[t._v("=")]),a("Col",[a("b",[t._v(t._s(t.account.reportNum||"-"))]),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.reportNum")))])])]:t._e(),a("Spin",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],attrs:{size:"large"}},[a("div",[a("Icon",{attrs:{type:"md-lock",size:"30"}})],1),a("Button",{attrs:{to:{name:"signin"}}},[t._v(t._s(t.$t("header.signin")))])],1)],2):t._e()],1),a("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.reportNum")))])],1),a("Divider",{attrs:{type:"vertical"}}),a("Col",[a("Card",{attrs:{padding:0}},[t.$route.params.uId?a("vue-qr",{staticStyle:{display:"block"},attrs:{text:"//bfban.com/space/"+t.$route.params.uId,size:60,margin:3}}):t._e()],1)],1)],2)],1)],1)],1)],1),a("br"),a("div",{staticClass:"content"},[a("Row",{attrs:{gutter:t.isAttachedContent?0:15}},[a("Col",{staticStyle:{width:"100%"},attrs:{xm:{span:24},lg:{span:24}}},[a("Card",{attrs:{"dis-hover":"",padding:0}},[a("Table",{attrs:{"show-header":"",border:!1,"no-data-text":t.$t("basic.tip.noReports"),columns:t.report.columns,data:t.report.data}}),a("Spin",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],attrs:{size:"large",fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"50"}})],1)],1),a("br"),a("Row",[a("Col",{attrs:{xs:{span:23,push:1},lg:{span:24,push:0}}},[a("Page",{staticClass:"page",attrs:{"show-total":"","page-size":t.limit,current:t.page,total:t.total,size:"small"},on:{"on-change":t.getUserReports}})],1)],1)],1)],1)],1),a("Modal",{on:{"on-ok":t.onPushMessage},model:{value:t.message.show,callback:function(e){t.$set(t.message,"show",e)},expression:"message.show"}},[a("Form",[a("FormItem",{attrs:{label:t.$i18n.t("account.message.chat")}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:t.message.content,callback:function(e){t.$set(t.message,"content",e)},expression:"message.content"}})],1)],1)],1)]:[a("div",{attrs:{align:"center"}},[a("Empty")],1)]],2)},s=[],n=a("ad43"),o=a("02bc"),r=a("658f"),c=a.n(r),l=a("808f"),m=a("120c"),u=a("9648"),p=a("eb8a"),h=a("22ca"),d=a("e4b4"),g=a("d78a"),v=a("fb1c"),f=a("6acc"),_=new n["a"]({name:"space",data(){return{games:f.child,load:!0,account:{username:"",originId:"",privilege:"",createDatetime:"",attr:{allowDM:!1}},report:{columns:[{title:this.$i18n.t("account.reported"),key:"originName",fixed:"left",minWidth:200,maxWidth:300,ellipsis:!0,tooltip:!0,render:(t,e)=>{const a=this,i=window.location.origin+a.$router.resolve({name:"player",params:{ouid:e.row.originPersonaId}}).href;return t("row",{props:{type:"flex",align:"middle"}},[t("col",[t("Avatar",{props:{src:e.row.avatarLink},style:{margin:"0 10px 0 0"}})]),t(m["a"],{props:{text:e.row.originName,isPoptip:!1,href:i},style:{overflow:"hidden",display:"block",width:"100px","text-overflow":"ellipsis","white-space":"nowrap"},on:{click:()=>{a.$router.push({name:"player",params:{ouid:e.row.originPersonaId}})}}},e.row.originName)])}},{title:this.$i18n.t("signup.form.originId"),key:"originPersonaId",ellipsis:!0,width:200,align:"center",render:(t,e)=>t("div",[t("p",e.row.originPersonaId)])},{title:this.$i18n.t("account.status"),key:"status",width:200,align:"center",render:(t,e)=>t("div",[t(p["a"],{props:{status:e.row.status}},e.row.status)])},{title:this.$i18n.t("list.colums.reportTime"),key:"createTime",sortable:!0,minWidth:150,render:(t,e)=>t("Tag",{props:{color:"primary"}},[t(u["a"],{props:{time:e.row.createTime}},[t("Time",{props:{time:e.row.createTime,type:"datetime"}})])])},{title:this.$i18n.t("list.colums.updateTime"),key:"updateTime",align:"center",width:200,sortable:!0,render:(t,e)=>t("tag",{props:{color:"primary"}},[t(u["a"],{props:{time:e.row.createTime}},[t("Time",{props:{time:e.row.updateTime}})])])}],data:[]},limit:20,page:1,total:100,cheaterStatus:[],url:"",message:{id:"",show:!1,load:!1,content:""}}},watch:{$route:"loadData"},components:{PrivilegesTag:g["a"],AchievementsTag:v["a"],Empty:o["a"],UserAvatar:l["a"],cheaterStatusView:p["a"],TimeView:u["a"],Confetti:h["a"],vueQr:c.a},created(){const{username:t}=this.$route.query;this.http=d["f"].call(this),this.account.username=t||"",this.loadData()},methods:{async loadData(){const{uId:t}=this.$route.params;await d["q"].initUtil().then(t=>{this.cheaterStatus=t.cheaterStatus,this.url=window.location.href}),this.getUserInfo(t)},getUserInfo(t){this.$Loading.start(),this.http.get(d["c"]["user_info"],{params:{id:t}}).then(t=>{const e=t.data;this.$route.query.repeat&&this.openMessage(),1!==e.success?(this.account="",this.$Message.warning(e.code)):this.account=e.data}).catch(t=>{this.$Loading.error()}).finally(()=>{this.getUserReports()})},openMessage(){this.account.attr.allowDM?this.account.id!=this.currentUser.userinfo.userId?this.message.show=!0:this.$Message.error(this.$i18n.t("account.message.hint.selfTalk")):this.$Message.error(this.$i18n.t("account.message.hint.taOffChat"))},onPushMessage(){const{uId:t}=this.$route.params;t&&this.http.post(d["c"]["user_message"],{data:{data:{toUserId:this.message.id||t,type:"direct",content:this.message.content}}}).then(t=>{if(1!=t.data.success)switch(t.data.error){case"message.denied":this.$Message.error(this.$i18n.t("account.message.hint.denied"));break;case"message.blocked":this.$Message.error(this.$i18n.t("account.message.hint.taOffChat"));break;default:this.$Message.error(t.data.message)}else this.$Message.success(t.data.message)}).finally(()=>{this.message.load=!1,this.message.show=!1})},getUserReports(t){const{uId:e}=this.$route.params;e&&(this.load=!0,d["e"].get(d["c"]["user_reports"],{params:{id:e,skip:(t||1)-1,limit:this.limit}}).then(t=>{const e=t.data;let a=[];1===e.success&&(e.data.forEach(t=>a.push(t)),this.report.data=a,this.total=e.total)}).finally(()=>{this.$Loading.finish(),this.load=!1}))}},computed:{isAttachedContent(){return!this.account.attr.introduction&&!this.account.origin},isChat(){return!this.account.attr.allowDM||this.account.id==this.currentUser.userinfo.userId}}}),b=_,w=(a("0c26"),a("2877")),y=Object(w["a"])(b,i,s,!1,null,null,null);e["default"]=y.exports},eb8a:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.status>=0?a("Tag",{attrs:{color:t.cheaterStatusClass(t.status||0)}},[t._v(" "+t._s(t.$t("basic.status."+(t.status||0)+".text"))+" "),a("span",{staticClass:"judge-action-before-icon"},[a("Poptip",{attrs:{trigger:"hover",transfer:!0,"word-wrap":"",width:"200",content:t.$t("basic.status."+(t.status||0)+".describe")}},[a("Icon",{attrs:{type:"md-help"}})],1)],1)]):t._e()},s=[],n=a("e4b4"),o={props:{status:{type:Number,default:0}},data(){return{util:n["q"],cheaterStatus:[]}},watch:{$route:"loadData"},created(){this.loadData()},methods:{async loadData(){await n["q"].initUtil().then(t=>{this.cheaterStatus=t.cheaterStatus})},cheaterStatusClass(t){const e="#535353";if(null==t)return e;let a=this.cheaterStatus.filter(e=>e.value==t);return a.length<=0?e:a[0]["class"]||e}}},r=o,c=(a("b3a8"),a("2877")),l=Object(c["a"])(r,i,s,!1,null,"f0c53fe2",null);e["a"]=l.exports},fb1c:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Row",{attrs:{gutter:5}},[t.processingSortList.length>=0?[t._l(t.processingSortList.slice(0,t.maxOverflow),(function(e,i){return a("Col",{key:i},[a("AchievementView",{attrs:{id:e.name,time:e.acquisitionTime,onlyShow:!0}},[a("img",{attrs:{src:t.achievementUtil.getIcon(t.achievementUtil.getItem(e.name)["iconPath"]),width:t.size,height:t.size}}),a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("profile.achievement.list."+e.name+".name")))])])],1)})),t.processingSortList.length>t.maxOverflow?a("Col",[a("Poptip",{attrs:{trigger:"hover",transfer:""}},[a("Badge",{attrs:{count:t.processingSortList.slice(t.maxOverflow,t.processingSortList.length).length,offset:[-5,-2]}},[a("Icon",{attrs:{type:"md-more",size:t.size.replace("px","")}})],1),a("template",{slot:"content"},t._l(t.processingSortList.slice(t.maxOverflow,t.processingSortList.length),(function(e,i){return a("span",{key:i},[t.achievementUtil.getItem(e.name)["isShowCard"]?a("AchievementView",{attrs:{id:e.name.toString(),time:e.acquisitionTime,onlyShow:!0}},[a("img",{attrs:{src:t.achievementUtil.getIcon(t.achievementUtil.getItem(e.name)["iconPath"]),width:t.size,height:t.size}}),a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("profile.achievement.list."+e.name+".name")))])]):t._e()],1)})),0)],2)],1):t._e()]:[a("Empty",{attrs:{notHint:!0}})]],2)},s=[],n=a("e4b4"),o=(a("02bc"),a("0626")),r={props:{data:{type:Array,default(){return[]}},size:{type:String,default:"20px"},showAll:{type:Boolean,default:!1},maxOverflow:{type:Number,default:3}},data(){return{achievementUtil:n["b"],processingSortList:[]}},watch:{$route:"onSort",data:"onSort"},components:{AchievementView:o["a"]},created(){this.onSort()},methods:{onSort(){this.processingSortList=this.data.filter(t=>n["b"].getItem(t.name)["isShowCard"]).sort((t,e)=>t.acquisitionTime-e.acquisitionTime)}}},c=r,l=a("2877"),m=Object(l["a"])(c,i,s,!1,null,"436e985a",null);e["a"]=m.exports}}]);
//# sourceMappingURL=chunk-7d1d3448.2.9.17.js.map