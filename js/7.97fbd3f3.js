(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"2da0":function(t,a,s){"use strict";s("a331")},"713b":function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-layout",{attrs:{view:"hHh lpR fff"}},[s("q-header",{staticStyle:{"backdrop-filter":"blur(10px)","background-color":"rgba(130, 169, 181,0.5)"}},[s("q-toolbar",[s("q-toolbar-title",[s("router-link",{staticClass:"router-text",attrs:{to:"/"}},[s("div",{staticClass:"logo"},[t._v("\n            🩸Plasmatch\n          ")])])],1),t.$q.screen.lt.md?s("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(a){t.right=!t.right}}}):s("div",[s("div",{staticClass:"non-ham"},[t.isOnLandingPage?s("div",[s("router-link",{staticClass:"router-text",attrs:{to:"/DonorRegistration"}},[s("q-btn",{staticClass:"q-pa-sm q-ma-sm",attrs:{color:"secondary",size:".75rem",rounded:"",label:"Donor Registration"}})],1),s("router-link",{staticClass:"router-text",attrs:{to:"/PatientRegistration"}},[s("q-btn",{staticClass:"q-pa-sm ",attrs:{color:"secondary",size:".75rem",rounded:"",label:"Patient Registration"}})],1),s("router-link",{staticClass:"router-text",attrs:{to:"/users"}},[s("q-btn",{staticClass:"q-ml-md q-pa-sm",attrs:{color:"secondary",rounded:"",size:".75rem",label:"Users"}})],1),s("router-link",{staticClass:"router-text",attrs:{to:"/ContactUs"}},[s("q-btn",{staticClass:"q-mr-sm q-pa-sm q-ma-sm",attrs:{color:"secondary",size:".75rem",rounded:"",label:"Contact Us"}})],1)],1):t._e()])])],1)],1),s("q-drawer",{attrs:{side:"right",overlay:"",behavior:"mobile","content-class":"bg-primary text-white"},model:{value:t.right,callback:function(a){t.right=a},expression:"right"}},[s("div",{staticStyle:{"margin-top":"50%","left-align":"left","padding-left":"30%"}},[s("router-link",{staticClass:"ham-options",attrs:{to:"/DonorRegistration"}},[t._v("\n        Donor Registration\n      ")]),s("router-link",{staticClass:"ham-options",attrs:{to:"/PatientRegistration"}},[t._v("\n        Patient Registration\n      ")]),s("router-link",{staticClass:"ham-options",attrs:{to:"/users"}},[t._v("\n        Users\n      ")]),s("router-link",{staticClass:"ham-options",attrs:{to:"/ContactUs"}},[t._v("\n        Contact us\n      ")])],1)]),s("q-page-container",{staticClass:"bg-gra-02",staticStyle:{"min-height":"100vh","max-hight":"100%","padding-right":"0px","padding-top":"10px"},attrs:{id:"page-container"}},[s("transition",{attrs:{name:"router-anim"}},[s("router-view")],1)],1)],1)},e=[],n=s("2b0e"),i=s("8cb8");n["a"].use(i["default"]);var o={name:"MainLayout",data(){return{settingsOpen:!1,right:!1,isOnLandingPage:!0,email:"",password:"",name:"",userName:"",userEmail:""}},updated(){"home"===this.$router.currentRoute.name?this.isOnLandingPage=!0:this.isOnLandingPage=!1},mounted(){"home"===this.$router.currentRoute.name?this.isOnLandingPage=!0:this.isOnLandingPage=!1},methods:{patientSignUp(){this.$router.push("PatientRegistration")},donorSignUp(){this.$router.push("DonorRegistration")}}},l=o,c=(s("2da0"),s("2877")),u=Object(c["a"])(l,r,e,!1,null,null,null);a["default"]=u.exports},a331:function(t,a,s){}}]);