"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[47662],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return t?i.createElement(m,o(o({ref:n},c),{},{components:t})):i.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},77388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={title:"Parameter Configuration",sidebar_position:3},o=void 0,s={unversionedId:"user-guide/control-panel/param-conf",id:"version-1.3.1/user-guide/control-panel/param-conf",title:"Parameter Configuration",description:"The parameter configuration interface provides the user-defined parameter management function, and the user can manage the related configuration of the engine on this interface. By default, engine configurations for IDE, Visualis, and nodeexecution applications are provided, and users can add or delete applications and engines according to their needs.",source:"@site/versioned_docs/version-1.3.1/user-guide/control-panel/param-conf.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/param-conf",permalink:"/docs/1.3.1/user-guide/control-panel/param-conf",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/user-guide/control-panel/param-conf.md",tags:[],version:"1.3.1",sidebarPosition:3,frontMatter:{title:"Parameter Configuration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Resource Management",permalink:"/docs/1.3.1/user-guide/control-panel/resource-manager"},next:{title:"Global Variable",permalink:"/docs/1.3.1/user-guide/control-panel/global-variable"}},l={},p=[{value:"1. Parameter configuration instructions",id:"1-parameter-configuration-instructions",level:2},{value:"2. Add new application (admin only)",id:"2-add-new-application-admin-only",level:2},{value:"3. New engine",id:"3-new-engine",level:2},{value:"4. Editing Apps and Engines (admins only)",id:"4-editing-apps-and-engines-admins-only",level:2},{value:"5. Global settings",id:"5-global-settings",level:2},{value:"5.1 Queue Settings",id:"51-queue-settings",level:3},{value:"6. Engine parameter modification",id:"6-engine-parameter-modification",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,i.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The parameter configuration interface provides the user-defined parameter management function, and the user can manage the related configuration of the engine on this interface. By default, engine configurations for ",(0,a.kt)("inlineCode",{parentName:"p"},"IDE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Visualis"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeexecution")," applications are provided, and users can add or delete applications and engines according to their needs."),(0,a.kt)("h2",{id:"1-parameter-configuration-instructions"},"1. Parameter configuration instructions"),(0,a.kt)("p",null,"The parameter configuration page is mainly to manage the parameters of each engine plug-in of ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis"),". The engine configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," is managed through tags, and the engine configuration parameters under different applications are isolated from each other. For engine parameters whose configuration is not displayed, the default engine parameter configuration during system initialization will be called when the task is executed."),(0,a.kt)("h2",{id:"2-add-new-application-admin-only"},"2. Add new application (admin only)"),(0,a.kt)("p",null,"The administrator can add an application through the Add Application Type button."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(64091).Z,width:"468",height:"251"})),(0,a.kt)("h2",{id:"3-new-engine"},"3. New engine"),(0,a.kt)("p",null,"The engine is associated with the application, and the corresponding reference must be selected before adding an engine, such as adding an engine under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Visualis")," application."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(86556).Z,width:"1254",height:"734"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(4357).Z,width:"468",height:"251"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:"),"Engine version needs to fill in ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.3.1/user-guide/control-panel/overview"},"Linkis supported engine version"),". Otherwise, an error will be reported when executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," task."),(0,a.kt)("h2",{id:"4-editing-apps-and-engines-admins-only"},"4. Editing Apps and Engines (admins only)"),(0,a.kt)("p",null,"Administrators can delete existing applications and engine configurations through the Edit Directory button (Note! Deleting an application directly will delete all engine configurations under the application and cannot be restored), or add an engine."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(11209).Z,width:"1264",height:"591"})),(0,a.kt)("h2",{id:"5-global-settings"},"5. Global settings"),(0,a.kt)("p",null,"The global setting is mainly to configure the parameters of the queue resources, which will take effect for all application tasks after configuration."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(44300).Z,width:"1263",height:"634"})),(0,a.kt)("h3",{id:"51-queue-settings"},"5.1 Queue Settings"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. View available queues")),(0,a.kt)("p",null,"Visit hadoop cluster to view available queues, address: http://ip:port/cluster/scheduler"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(17919).Z,width:"1274",height:"643"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Set up the queue")),(0,a.kt)("p",null,"Set the name of the available queue queried in step 1 and save it.\n",(0,a.kt)("img",{src:t(93073).Z,width:"1262",height:"700"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. View the available resources of the set queue")),(0,a.kt)("p",null,"Click the button in the lower right corner to view the available resources of the queue.\n",(0,a.kt)("img",{src:t(65321).Z,width:"1259",height:"585"}),"\n",(0,a.kt)("img",{src:t(91909).Z,width:"522",height:"500"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. Set Resource Limits")),(0,a.kt)("p",null,"Set resource limits based on the available resources (CPU and memory) of the queue queried in step 3, including the maximum number of queue instances, the upper limit of queue CPU usage, the upper limit of queue memory usage, and the upper limit of global memory usage of each engine."),(0,a.kt)("h2",{id:"6-engine-parameter-modification"},"6. Engine parameter modification"),(0,a.kt)("p",null,"After the user clicks the engine label under the corresponding application, the engine parameters can be modified, such as modifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," engine under the ",(0,a.kt)("inlineCode",{parentName:"p"},"IDE")," application. After modification, click the Save button."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2022).Z,width:"1259",height:"563"})))}u.isMDXComponent=!0},64091:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/add-app-3abf080c86139bc8a136443326b2460a.png"},86556:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/add-engine-btn-575b169519910ddb415c143880ccf0f1.png"},4357:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/add-engine-3abf080c86139bc8a136443326b2460a.png"},65321:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/click-yarn-44640ba9469740396c0cf71099c66c39.png"},11209:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/del-app-5e2218d7e66b892f04c99b1f5f8750b8.png"},91909:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/deque-resource-7af04c6051d07fc023b1844dc5bf4c17.png"},2022:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/engine-conf-12323f8ef5cdb1ef2dce779de112971c.png"},44300:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/global-conf-7af08c38695eb8fc6eedea616b649443.png"},17919:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/yarn-deque-7550492b4eaa6689783df75404947b13.png"},93073:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/yarn-write-048643d5814d7eb6e416bc710c47417f.png"}}]);