webpackJsonp([0],{"+6dg":function(t,e){},"+skl":function(t,e){},"1Rq0":function(t,e){},"6Fbr":function(t,e){},"9IY6":function(t,e){},Ei8Q:function(t,e){},EqLZ:function(t,e){},FSuR:function(t,e,n){t.exports=n.p+"static/img/my-img.455c3f6.jpg"},FTJJ:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s=(n("l2Nk"),{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-box"},[n("div",{staticClass:"header container"},[n("div",{staticClass:"logo"},[t._v("tcy's blog")]),t._v(" "),n("div",{staticClass:"nav-list-show"},[n("ul",t._l(t.navs,function(e,i){return n("li",{key:i},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title))])],1)}))]),t._v(" "),n("div",{staticClass:"nav"},[n("div",{staticClass:"nav-btn",on:{click:t.btnDrap}},[n("Icon",{attrs:{type:"navicon"}})],1),t._v(" "),n("div",{staticClass:"nav-list-hide",style:{display:t.isDrap}},[n("ul",t._l(t.navs,function(e,i){return n("li",{key:i,on:{click:function(e){e.stopPropagation(),t.isDrap="none"}}},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title))])],1)}))])])])])},staticRenderFns:[]});var a={name:"App",components:{Header:n("VU/8")({name:"Header",data:function(){return{navs:[{path:"/",title:"首页"},{path:"/about",title:"关于我"},{path:"/skill",title:"专业技能"},{path:"/experience",title:"我的经历"},{path:"/project",title:"项目经历"},{path:"/contactMe",title:"联系我"}],isDrap:"none"}},methods:{btnDrap:function(){"block"==this.isDrap?this.isDrap="none":"none"==this.isDrap&&(this.isDrap="block")}}},s,!1,function(t){n("9IY6")},"data-v-3cbc03be",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")(a,r,!1,function(t){n("EqLZ")},null,null).exports,l=n("/ocq"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[e("h1",[this._v("\n        Hello World!\n    ")]),this._v(" "),e("p",[this._v("一个前端工程师的简历")])])}]};var u=n("VU/8")({name:"Index"},o,!1,function(t){n("oMz2")},"data-v-ae6465ae",null).exports,p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-me container main-content"},[n("h2",{staticClass:"main-h2"},[t._v("关于我")]),t._v(" "),t._m(0),t._v(" "),t._l(t.pList,function(e,i){return n("p",{key:i},[t._v(t._s(e))])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my-img"},[e("img",{attrs:{src:n("FSuR"),alt:"我的头像"}})])}]};var m=n("VU/8")({name:"About",data:function(){return{pList:["我叫唐春娅，是一个学习能力较强的人。在大学时间里学习踏实，充分掌握了所需技能。在生活上，性格乐观，做事积极，有责任心，待人友善。个性随和谦虚、自信、自律；积极创新，善于沟通，有一定的组织协调能力，具有较强的团队合作精神，能够快速适应新的环境。这些经历，使我具备了一定的组织协调能力、处理应对各种问题的能力，这些能力在工作中是不可或缺的。","在岗期间为了提高个人能力自行学习了nodejs、mongodb和vue框架，对git和webpack也有初步了解。在众多应聘者中，我不一定是最优秀的，但我仍然很有自信。“怀赤诚以待明主，持经论以待明君”。我真诚地希望能成为贵公司的一员, 我将以高尚的品德、热情的服务，倾我所能，不断学习，为贵单位发展事业贡献一份力量。最后，祝贵单位纳得良才，业绩蒸蒸日上！"],show:!0}}},p,!1,function(t){n("6Fbr")},"data-v-0f8c19b7",null).exports,v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skill container main-content"},[n("h2",{staticClass:"main-h2"},[t._v("专业技能")]),t._v(" "),n("Row",{staticClass:"container"},t._l(t.ulList,function(e,i){return n("Col",{key:i,staticClass:"li",attrs:{xs:24,sm:12,md:8}},[n("div",{staticClass:"title"},[t._v(t._s(e.title)+"：")]),t._v(" "),n("div",{staticClass:"li-box"},[n("div",{staticClass:"li-bg",style:{width:e.percentage+"%"}})]),t._v(" "),n("div",{staticClass:"li-num"},[t._v(t._s(e.percentage)+"%")])])}))],1)},staticRenderFns:[]};var d=n("VU/8")({name:"Skill",data:function(){return{ulList:[{title:"HTML5",percentage:90},{title:"CSS3",percentage:90},{title:"ajax",percentage:85},{title:"JS/JQ",percentage:90},{title:"nodejs",percentage:85},{title:"MongoDB",percentage:75},{title:"Vue",percentage:85},{title:"git",percentage:70},{title:"webpack",percentage:70}]}}},v,!1,function(t){n("hMyg")},"data-v-59aafa21",null).exports,f={name:"ExpItem",props:{isLeft:{type:Boolean,default:!1},timeFrom:String,timeTo:String,title:String,subTitle:String,pTitle:String,content:Array},mounted:function(){this.$el.clientWidth<582&&(this.isLeft=!1,this.$el.style.marginLeft="20px",this.$el.children[0].style.display="none",this.$el.children[1].style.width="100%")}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exp-item"},[n("div",{staticClass:"left-box"}),t._v(" "),n("div",{staticClass:"content-box"},[n("div",{staticClass:"time"},[n("p",[t._v(t._s(t.timeFrom))]),t._v(" "),n("p",[t._v("-")]),t._v(" "),n("p",[t._v(t._s(t.timeTo))])]),t._v(" "),n("div",{class:["content",{left:t.isLeft}]},[n("div",{staticClass:"item title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"item sub-title"},[t._v(t._s(t.subTitle))]),t._v(" "),n("div",{staticClass:"item"},[n("p",[t._v(t._s(t.pTitle))]),t._v(" "),t._l(t.content,function(e,i){return n("p",{key:i},[t._v(t._s(e))])})],2)])])])},staticRenderFns:[]};var h=n("VU/8")(f,_,!1,function(t){n("FTJJ")},"data-v-60f06883",null).exports,b={name:"Experience",components:{ExpItem:h},data:function(){return{expItemList:[{id:"01",isLeft:!0,timeFrom:"2017/10",timeTo:"2018/06",title:"成都驰云科技有限公司",subTitle:"web前端工程师",pTitle:"工作内容：",content:["页面实现，熟练使用Vue，封装常用组件，进行页面开发及功能的实现","后台数据交互沟通，接口需求发布","检查优化代码，调试页面间的交互效果","根据分配的工作流程完成工作进度"]},{id:"02",isLeft:!1,timeFrom:"2017/01",timeTo:"2017/10",title:"四川易小保网络科技有限公司",subTitle:"web前端工程师",pTitle:"工作内容：",content:["学习了解web前端开发，历史，工具，技术栈","完成项目页面开发","使用原生js完成已运行项目活动页面的开发添加"]},{id:"03",isLeft:!0,timeFrom:"2009/09",timeTo:"2011/04",title:"电子科技大学",subTitle:"电子商务 专科",pTitle:"主修课程：",content:["客户关系管理、市场营销学、服务外包质量管理、ERP应用、营销心理学、大学英语"]}]}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"experience container main-content"},[e("h2",{staticClass:"main-h2"},[this._v("我的经历")]),this._v(" "),this._l(this.expItemList,function(t){return e("ExpItem",{key:t.id,attrs:{isLeft:t.isLeft,timeFrom:t.timeFrom,timeTo:t.timeTo,title:t.title,subTitle:t.subTitle,pTitle:t.pTitle,content:t.content}})})],2)},staticRenderFns:[]};var T=n("VU/8")(b,C,!1,function(t){n("Ei8Q")},"data-v-eb8f38e4",null).exports,g={name:"Project",components:{ExpItem:h},data:function(){return{proList:[{id:"01",isLeft:!0,timeFrom:"2018/03",timeTo:"2018/06",title:"成都驰云科技有限公司承接的项目开发",subTitle:"项目简介：车友汇app开发",pTitle:"主要工作内容：",content:["1.使用vue框架完成各项目页面开发","2.完成页面交互，沟通客户需求，更改页面","3.App的页面开发，数据交互","4.App开发的bug发现及解决","参与的模块：首页详情，轮播图，企业文化等详细介绍，车友汇项目的“我的”开发","开发人数：8人","开发技术：html css JavaScript vue node.js","开发工具：vscode，车友汇测试手机"]},{id:"02",isLeft:!1,timeFrom:"2017/05",timeTo:"2017/10",title:"开心购商城",subTitle:"项目简介：PC端商城，后台管理系统",pTitle:"主要工作内容：",content:["1.切图后构建页面框架","2.依据设计图实现页面效果","3.对接后台数据交互，完善接口文档","4.维护后台管理系统，优化系统功能","参与的模块：商品列表，商品详情，购物车页面","开发人数：7人","开发技术：html css JavaScript ajax","开发工具：Hbuilder Photoshop"]}]}}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"project container main-content"},[e("h2",{staticClass:"main-h2"},[this._v("项目经历")]),this._v(" "),this._l(this.proList,function(t){return e("ExpItem",{key:t.id,attrs:{isLeft:t.isLeft,timeFrom:t.timeFrom,timeTo:t.timeTo,title:t.title,subTitle:t.subTitle,pTitle:t.pTitle,content:t.content}})})],2)},staticRenderFns:[]};var F=n("VU/8")(g,x,!1,function(t){n("lG7W")},"data-v-17ebf9e2",null).exports,k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-me container main-content"},[n("h2",{staticClass:"main-h2"},[t._v("联系我")]),t._v(" "),t._m(0),t._v(" "),n("Row",{staticClass:"contact-box container"},t._l(t.contactList,function(e,i){return n("Col",{key:i,staticClass:"item",attrs:{xs:24,md:8}},[t._v("\n            "+t._s(e)+"\n        ")])}))],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my-img"},[e("img",{attrs:{src:n("FSuR"),alt:"我的头像"}})])}]};var E=n("VU/8")({name:"ContactMe",data:function(){return{contactList:["电话：130-8281-0126","邮箱：1472017469@qq.com","QQ：1472017469"]}}},k,!1,function(t){n("+6dg")},"data-v-5907829f",null).exports,L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"no-find"},[e("h1",[this._v("您的页面未找到!")])])}]};var y=n("VU/8")({name:"NoFind"},L,!1,function(t){n("1Rq0")},"data-v-62bb5d5a",null).exports;i.default.use(l.a);var R=new l.a({routes:[{path:"/",name:"Index",component:u},{path:"/about",name:"About",component:m},{path:"/skill",name:"Skill",component:d},{path:"/experience",name:"Experience",component:T},{path:"/project",name:"Project",component:F},{path:"/contactMe",name:"ContactMe",component:E},{path:"*",name:y,component:y}]}),$=n("BTaQ"),w=n.n($),S=n("I0MY"),j=n.n(S);n("QKTF"),n("+skl");i.default.use(w.a),i.default.use(j.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:R,components:{App:c},template:"<App/>"})},hMyg:function(t,e){},l2Nk:function(t,e){},lG7W:function(t,e){},oMz2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.befe59bd27f5824ef83e.js.map