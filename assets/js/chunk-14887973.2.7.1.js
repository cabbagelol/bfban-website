(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14887973"],{2630:function(e,t,s){"use strict";s("700c")},"2d3b":function(e,t,s){"use strict";s.r(t);s("14d9");var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[t("br"),t("Row",[t("Col",{attrs:{xs:{push:1},lg:{push:0}}},[t("Breadcrumb",[t("BreadcrumbItem",{attrs:{to:{name:"home"}}},[e._v(e._s(e.$t("header.index")))]),t("BreadcrumbItem",[e._v(e._s(e.$t("search.title")))])],1)],1)],1),t("br"),t("div",{class:"search-content "+(e.cheaters.length>0?"search-content-mini":"")},[t("Row",{staticStyle:{width:"100%"},attrs:{type:"flex",justify:"center",gutter:0}},[t("Col",{attrs:{xs:{span:24},sm:{span:12},md:{span:7}}},[t("RadioGroup",{attrs:{type:"button",size:"large"},model:{value:e.searchScopeValue,callback:function(t){e.searchScopeValue=t},expression:"searchScopeValue"}},e._l(e.searchScope,(function(s){return t("Radio",{key:s,staticClass:"search-input-show",attrs:{label:s,border:""}},[e._v(e._s(e.$t("search.scope."+s)))])})),1)],1),t("Col",{staticClass:"desktop-hide",attrs:{xs:{span:24}}},[e._v(" ")]),t("Col",{attrs:{xs:{span:24},sm:{span:12},md:{span:12}}},[t("Dropdown",{staticStyle:{width:"100%"}},[t("Input",{staticClass:"search-input search-input-show",attrs:{"enter-button":e.searchVal.length>=3,search:e.searchVal.length>=3,size:"large",placeholder:e.$t("search.placeholder")},on:{"on-clear":function(t){e.searchVal="",e.cheaters=[]},"on-click":e.handleSearch,"on-search":e.handleSearch},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}),t("div",{attrs:{slot:"list",transfer:""},slot:"list"},[e.searchHistory.list.length>0?t("Row",{staticStyle:{padding:"10px"},attrs:{gutter:5}},e._l(e.searchHistory.list,(function(s,a){return t("Col",{key:a},[t("Tag",{attrs:{stype:"border",type:"dot",checkable:"",closable:""},on:{"on-change":function(t){return e.handleSearchHistoryClickTag(a)},"on-close":function(t){return e.handleSearchHistoryClose(a)}}},[e._v(e._s(s||"")+" ")])],1)})),1):t("div",{attrs:{align:"center"}},[e._v(" 🦖 ")])],1)],1)],1)],1),e.cheaters.length<=0?t("Row",{staticClass:"checkboxGroup",attrs:{type:"flex",justify:"center",align:"middle"}},[t("Col",{attrs:{xs:{span:24},lg:{span:6},align:"center"}},[t("Icon",{attrs:{type:"md-alert"}}),e._v(" "+e._s(e.$t("search.describe"))+" ")],1),t("Col",{attrs:{xs:{span:0},lg:{span:1}}},[t("Divider",{attrs:{type:"vertical"}})],1),t("Col",{attrs:{xs:{span:24},lg:{span:6},align:"center"}},[t("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s(e.$t("search.collectionHint")))])])],1):e._e()],1),0!==e.cheaters.length?t("div",[t("List",{staticClass:"content",attrs:{border:""}},[e._l(e.cheaters,(function(s,a){return t("ListItem",{key:a,nativeOn:{click:function(t){return e.$router.push({name:"player",params:{ouid:s.originPersonaId}})}}},[t("ListItemMeta",{attrs:{avatar:s.avatarLink,title:s.currentName||s.originName,description:`${s.originUserId?"uid:"+s.originPersonaId:""} ${s.historyName?e.$t("search.scope.history")+":"+s.historyName:""}`}}),t("router-link",{attrs:{slot:"action",to:{name:"player",params:{ouid:""+s.originPersonaId}}},slot:"action"},[t("div",{on:{click:function(t){e.searchModal=!1}}},[t("Icon",{attrs:{type:"ios-eye",size:"30"}})],1)])],1)})),t("Spin",{directives:[{name:"show",rawName:"v-show",value:e.modalSpinShow,expression:"modalSpinShow"}],attrs:{size:"large",fix:""}})],2)],1):e._e()],1)])},r=[],c=s("890e"),i=s("e4b4"),o=new c["a"]({name:"search",data(){return{searchVal:"",searchHistory:{list:[]},modalSpinShow:!1,searchScope:["current","history"],searchScopeValue:"current",cheaters:[]}},created(){const{s:e,type:t}=this.$route.query;this.searchScopeValue=t||this.searchScope[0],this.searchVal=e||"",this.handleSearch(),this.getSearchHistory()},methods:{getSearchHistory(){let e=i["j"].get("search.history");-1==e.code&&this.setSearchHistoryValue([]),this.searchHistory.list=e.data.value||[]},async setSearchHistoryValue(e){let t=10,s=e;for(let a=0;a<s.length;a++)s.length>t&&s.pop();i["j"].set("search.history",s)},handleSearchHistoryClose(e){this.searchHistory.list.splice(e,1),this.setSearchHistoryValue(this.searchHistory.list)},handleSearchHistoryClickTag(e){this.searchVal=this.searchHistory.list[e],this.handleSearch()},handleSearch(){const e=this,t=this.searchVal.trim();""==t||t.length<=3||!this.searchScopeValue||(this.searchModal=!0,this.modalSpinShow=!0,i["c"].get(i["b"]["search"],{params:{param:t,scope:this.searchScopeValue}}).then(s=>{let a=Array.from(new Set(e.searchHistory.list.concat([t])));e.setSearchHistoryValue(a),e.searchHistory.list=a;const r=s.data;if(1===r.success)return this.cheaters=r.data,void(r.data.length<=0&&this.$Message.info("The player is not found in the database"));this.$Message.error(r.code)}).finally(()=>{e.modalSpinShow=!1}))}}}),n=o,l=(s("2630"),s("2877")),h=Object(l["a"])(n,a,r,!1,null,"61f75e5e",null);t["default"]=h.exports},"700c":function(e,t,s){}}]);
//# sourceMappingURL=chunk-14887973.2.7.1.js.map