"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[10388],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),h=a,m=c["".concat(s,".").concat(h)]||c[h]||k[h]||l;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},13862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=t(87462),a=(t(67294),t(3905));const l={title:"Release Notes 1.0.2",sidebar_position:10},r=void 0,o={unversionedId:"release-notes-1.0.2",id:"release-notes-1.0.2",title:"Release Notes 1.0.2",description:"This is Non-ASF Version",source:"@site/download/release-notes-1.0.2.md",sourceDirName:".",slug:"/release-notes-1.0.2",permalink:"/download/release-notes-1.0.2",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/download/release-notes-1.0.2.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Release Notes 1.0.2",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Release Notes 1.0.3",permalink:"/download/release-notes-1.0.3"},next:{title:"Download Logo",permalink:"/download/download-logo"}},s={},u=[{value:"New Feature",id:"new-feature",level:2},{value:"EngineConn",id:"engineconn",level:4},{value:"EnginePlugin",id:"engineplugin",level:4},{value:"ComputationClient",id:"computationclient",level:4},{value:"Enhancement",id:"enhancement",level:2},{value:"Bugs Fix",id:"bugs-fix",level:2},{value:"Credits",id:"credits",level:2}],p={toc:u},c="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("font",{color:"red"}," This is Non-ASF Version ")),(0,a.kt)("p",null,"Linkis-1.0.2 includes all of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis/projects/11"},"Project Linkis-1.0.2"),"."),(0,a.kt)("p",null,"This release mainly introduces Flink-support into Linkis ecosystem. "),(0,a.kt)("p",null,"The following key features are added: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flink-EngineConn which offers solid support for Flink jobs. Executing, debugging and monitoring Flink SQL or applications are now available, together with SQL-enhancement ability powered by Linkis Orchestrator."),(0,a.kt)("li",{parentName:"ul"},"LinkisManagerClient which enables direct access to LinkisManager.  Submitting and managing OnceJob rely on this feature.")),(0,a.kt)("p",null,"Abbreviations:"),(0,a.kt)("p",null,"CGS: Computation Governance Services"),(0,a.kt)("p",null,"PES: Public Enhancement Services"),(0,a.kt)("p",null,"MGS: Microservice Governance Services"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"new-feature"},"New Feature"),(0,a.kt)("h4",{id:"engineconn"},"EngineConn"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/936"},"Linkis-936"),"  ","[CGS-LinkisOnceEngineconn]"," supports OnceEngineExecutor")),(0,a.kt)("h4",{id:"engineplugin"},"EnginePlugin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/935"},"Linkis-935"),"  ","[CGS-EngineConnPlugin-Flink]"," supports Flink EngineConn"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/947"},"Linkis-947"),"  ","[CGS-EngineConnPlugin-Flink]"," supports executing Flink SQL and Flink applications"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/948"},"Linkis-948"),"  ","[CGS-EngineConnPlugin-Flink]"," multiple-datasource support for Flink EngineConn"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/949"},"Linkis-949"),"  ","[CGS-EngineConnPlugin-Flink]"," monitoring Flink Metrics")),(0,a.kt)("h4",{id:"computationclient"},"ComputationClient"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/937"},"Linkis-937"),"  ","[CGS-LinkisComputationClient]"," supports OnceEngineExecutor client")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"enhancement"},"Enhancement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/953"},"Linkis-953"),"  ","[CGS-LinkisManager]"," label supports '-' in hostname"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/925"},"Linkis-925"),"  ","[MGS-LinkisServiceGateway]"," fix weak password in linkis gateway "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/950"},"Linkis-950"),"  ","[CGS-LinkisEngineConnManager]"," support both ip address and hostname for service discovery"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/967"},"Linkis-967")," ","[CGS-LinkisEntrance]"," remove instance-label client dependency, Solve the host name and ip judgment abnormality in the gateway router, exclude the pom dependency to pentaho-aggdesigner-algorithm jar."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/963"},"Linkis-963"),"  ","[PES-LinkisBmlServer]"," default download user changed to jvm user, and supports to set default download user by configuration.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"bugs-fix"},"Bugs Fix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/938"},"Linkis-938"),"  ","[CGS-LimkisMnagager]"," fixes a serial execution bug"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/952"},"Linkis-952"),"  ","[CGS-LinkisEngineConn]"," fixes a redundant thread bug"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/943"},"Linkis-943"),"  ","[CGS-EngineConnPlugin-Hive]"," fixes a Hive3.0 compilation error"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/961"},"Linkis-961"),"  ","[CGS-EngineConnPlugin-Flink]"," fixes a Flink-EnginePlugin compilation bug"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/966"},"Linkis-966"),"  ","[CGS-EngineConnPlugin-Hive][CGS-EnginePlugin-Spark]"," Solve Spark and hive compatibility issue")),(0,a.kt)("h2",{id:"credits"},"Credits"),(0,a.kt)("p",null,"The release of Linkis 1.0.2 is inseparable from the contributors of the Linkis community. Thanks to all the community contributors!"))}k.isMDXComponent=!0}}]);