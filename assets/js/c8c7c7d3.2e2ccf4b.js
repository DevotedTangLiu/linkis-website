"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7439],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=i.createContext({}),p=function(e){var t=i.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(a),h=n,m=k["".concat(u,".").concat(h)]||k[h]||o[h]||r;return a?i.createElement(m,l(l({ref:t},c),{},{components:a})):i.createElement(m,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=k;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}k.displayName="MDXCreateElement"},78421:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),l=["components"],s={title:"Release Notes 1.1.1-RC1",sidebar_position:.2},u=void 0,p={unversionedId:"release-notes-1.1.1",id:"release-notes-1.1.1",isDocsHomePage:!1,title:"Release Notes 1.1.1-RC1",description:"Apache Linkis(incubating) 1.1.1 \u5305\u62ec\u6240\u6709 Project Linkis-1.1.1\u3002",source:"@site/docs/release-notes-1.1.1.md",sourceDirName:".",slug:"/release-notes-1.1.1",permalink:"/docs/1.1.1/release-notes-1.1.1",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/release-notes-1.1.1.md",tags:[],version:"current",sidebarPosition:.2,frontMatter:{title:"Release Notes 1.1.1-RC1",sidebar_position:.2},sidebar:"tutorialSidebar",previous:{title:"Version Overview",permalink:"/docs/1.1.1/release"},next:{title:"Quick Deployment",permalink:"/docs/1.1.1/deployment/quick_deploy"}},c=[{value:"\u65b0\u7279\u6027",id:"\u65b0\u7279\u6027",children:[]},{value:"\u589e\u5f3a\u70b9",id:"\u589e\u5f3a\u70b9",children:[]},{value:"\u4fee\u590d\u529f\u80fd",id:"\u4fee\u590d\u529f\u80fd",children:[]},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",children:[]}],o={toc:c};function k(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Linkis(incubating) 1.1.1 \u5305\u62ec\u6240\u6709 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/projects/18"},"Project Linkis-1.1.1"),"\u3002"),(0,r.kt)("p",null,"\u672c\u6b21\u53d1\u5e03\u4e3b\u8981\u652f\u6301UDF\u591a\u7248\u672c\u63a7\u5236\u3001UDF\u5b58\u50a8\u5230BML\u7684\u529f\u80fd\u7279\u6027\uff1b\u63d0\u4ea4\u4efb\u52a1\u652f\u6301Yarn\u961f\u5217\u8d44\u6e90\u4f7f\u7528\u7edf\u8ba1\u91c7\u96c6\u548c\u67e5\u770b\uff1b\u65b0\u589e\u5bf9\u6570\u636e\u865a\u62df\u5316\u5f15\u64ceOpenLooKeng\u7684\u652f\u6301\uff1b\u4fee\u590d\u793e\u533a\u53cd\u9988\u7684\u5df2\u77e5bug\u3002"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e86\u4ee5\u4e0b\u4e3b\u8981\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4ee3\u7406\u7528\u6237\u6a21\u5f0f\uff0cA\u7528\u6237\u53ef\u4ee5\u4ee3\u7406\u7ed9B\u7528\u6237\u6267\u884c\u4efb\u52a1,\u4e00\u4e2a\u4ee3\u7406\u7528\u6237\u53ef\u4ee5\u4ee3\u7406\u591a\u4e2a\u7528\u6237"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301UDF\u591a\u7248\u672c\u63a7\u5236\u548cUDF\u5b58\u50a8\u5230BML\u7684\u529f\u80fd\u7279\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u4efb\u52a1\u652f\u6301Yarn\u961f\u5217\u8d44\u6e90\u4f7f\u7528\u7edf\u8ba1\u6570\u636e\u7684\u91c7\u96c6\u548c\u7ba1\u7406\u53f0\u9875\u9762\u53ef\u89c6\u5316\u67e5\u770b"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e\u5bf9\u6570\u636e\u865a\u62df\u5316\u5f15\u64ceOpenLooKeng\u7684\u652f\u6301")),(0,r.kt)("p",null,"\u7f29\u5199\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EC: Engineconn"),(0,r.kt)("li",{parentName:"ul"},"ECM: EngineConnManager"),(0,r.kt)("li",{parentName:"ul"},"ECP: EngineConnPlugin"),(0,r.kt)("li",{parentName:"ul"},"DMS: Data Source Manager Service"),(0,r.kt)("li",{parentName:"ul"},"MDS: MetaData Manager Service"),(0,r.kt)("li",{parentName:"ul"},"PES:Public Enhancement Services"),(0,r.kt)("li",{parentName:"ul"},"LM:  Linkis Manager")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u65b0\u7279\u6027"},"\u65b0\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Gateway&Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1608"},"[Linkis-1608]")," \u652f\u6301\u4ee3\u7406\u7528\u6237\u6a21\u5f0f\uff0cA\u7528\u6237\u53ef\u4ee5\u4ee3\u7406\u7ed9B\u7528\u6237\u6267\u884c\u4efb\u52a1\uff0c\u67e5\u8be2B\u7528\u6237\u7684\u76f8\u5173\u6570\u636e\uff0c\u4e00\u4e2a\u4ee3\u7406\u7528\u6237\u53ef\u4ee5\u4ee3\u7406\u591a\u4e2a\u7528\u6237"),(0,r.kt)("li",{parentName:"ul"},"[","LM-ResourceManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1616"},"[Linkis-1616]")," YARN ResourceManager\u7684\u8d44\u6e90\u5730\u5740\u914d\u7f6e\u652f\u6301\u9ad8\u53ef\u7528\u591a\u5730\u5740\u914d\u7f6e\uff0c\u5f53\u524dYARN ResourceManager\u8f6c\u6362\u72b6\u6001\u6216\u8005\u505c\u6b62\u65f6\uff0c\u5c06\u4f1a\u4ece\u9ad8\u53ef\u7528\u5730\u5740\u5217\u8868\u4e2d\u89e3\u6790\u51fa\u4e3b\u8282\u70b9\u7ee7\u7eed\u63d0\u4f9b\u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},"[","EC-OpenLooKeng]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1639"},"[Linkis-1639]")," \u65b0\u589e\u5bf9\u6570\u636e\u865a\u62df\u5316\u5f15\u64ceOpenLooKeng\u7684\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"[","PES-Udf]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1534"},"[Linkis-1534]")," \u652f\u6301UDF\u591a\u7248\u672c\u63a7\u5236\u548cUDF\u5b58\u50a8\u5230BML\uff0c\u63d0\u4ea4\u4efb\u52a1\u652f\u6301Yarn\u961f\u5217\u8d44\u6e90\u4f7f\u7528\u7edf\u8ba1\u6570\u636e\u7684\u91c7\u96c6\u548c\u7ba1\u7406\u53f0\u9875\u9762\u53ef\u89c6\u5316\u67e5\u770b"),(0,r.kt)("li",{parentName:"ul"},"[","Client]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1718"},"[Linkis-1718]")," Linkis-cli\u5ba2\u6237\u7aef\u652f\u6301\u63d0\u4ea4Once\u7c7b\u578b\u7684\u4efb\u52a1\uff0c\u5f15\u64ce\u8fdb\u7a0b\u542f\u52a8\u540e\u53ea\u8fd0\u884c\u4e00\u6b21\u4efb\u52a1\uff0c\u4efb\u52a1\u7ed3\u675f\u540e\u81ea\u52a8\u9500\u6bc1"),(0,r.kt)("li",{parentName:"ul"},"[","ECP]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1758"},"[Linkis-1758]")," \u65b0\u589e\u5f15\u64ce\u7269\u6599\u5237\u65b0\u63a5\u53e3\uff0c\u652f\u6301\u901a\u8fc7http\u63a5\u53e3\u8c03\u7528\u65b9\u5f0f\u5237\u65b0\u5f15\u64ce\u7269\u6599\u8d44\u6e90")),(0,r.kt)("h2",{id:"\u589e\u5f3a\u70b9"},"\u589e\u5f3a\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1642"},"[Linkis-1642]")," \u4f18\u5316excel\u5bfc\u51fa\u63a5\u53e3resultsetToExcel:\u652f\u6301\u4f20\u9012\u4e0b\u8f7d\u6570\u636e\u7684\u884c\u6570"),(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1733"},"[Linkis-1733]")," \u6dfb\u52a0\u652f\u6301\u66f4\u591a\u4e0erun_date\u76f8\u5173\u7684\u9ed8\u8ba4\u65f6\u95f4\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1794"},"[Linkis-1794]")," \u6dfb\u52a0\u5199\u5165\u9650\u5236\u7ed3\u679c\u96c6\u5355\u884c\u7684\u6570\u636e\u5927\u5c0f\uff0c\u4f18\u5316\u5927\u7ed3\u679c\u96c6\u4f1a\u5bfc\u81f4\u7684OOM\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","DMS-Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1757"},"[Linkis-1757]")," \u652f\u6301\u914d\u7f6eHive\u7684\u5143\u6570\u636e\u7ba1\u7406\u5458\uff0c\u7ba1\u7406\u5458\u901a\u8fc7\u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6hive\u7684\u6240\u6709\u5e93\u8868\u7684\u5143\u6570\u636e\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"[","Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1799"},"[Linkis-1799]")," \u4f18\u5316\u670d\u52a1\u65e5\u5fd7\u7684\u5206\u5272:\u5c06\u65e5\u5fd7\u5386\u53f2\u5207\u5206\u65f6\u95f4\u4ece\u4e00\u5929\u8c03\u6574\u4e3a\u4e00\u5c0f\u65f6"),(0,r.kt)("li",{parentName:"ul"},"[","Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1921"},"[Linkis-1921]"),"  \u4f18\u5316Jackson\u7684\u4f9d\u8d56\u7ba1\u7406\u65b9\u5f0f:\u901a\u8fc7jackson-bom\u7edf\u4e00\u7ba1\u7406jackson\u4f9d\u8d56\uff0c\u5e76\u5347\u7ea7\u81f32.11.4\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"[","ECM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1779"},"[Linkis-1779]")," \u4f18\u5316ECM\u5b9e\u4f8b\u7684\u72b6\u6001\u76d1\u63a7\u903b\u8f91\uff0c\u589e\u52a0\u5fc3\u8df3\u4e0a\u62a5\u65f6\u95f4\u7684\u5224\u65ad\uff0c\u4fee\u590d\u53ef\u80fd\u56e0\u4e3aEureka\u7684\u6027\u80fd\u95ee\u9898\u5bfc\u81f4\u9519\u8bef\u5224\u65ad\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","ECM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1930"},"[Linkis-1930]")," \u4f18\u5316\u8d44\u6e90\u68c0\u67e5\u65f6\u672a\u68c0\u67e5ECM\u8d44\u6e90\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","Web]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1596"},"[Linkis-1596]")," \u4f18\u5316\u7ba1\u7406\u53f0\u4efb\u52a1\u65e5\u5fd7\u67e5\u770b\u7684\u63a5\u53e3\u4f7f\u7528\uff0c\u4fee\u590d\u5bf9\u4e8e\u8fd0\u884c\u4e2d\u7684job\uff0c\u65e5\u5fd7\u65e0\u6cd5\u53ca\u65f6\u5237\u65b0\u663e\u793a\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","Web]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1650"},"[Linkis-1650]")," linkis\u7ba1\u7406\u53f0-\u5168\u5c40\u5386\u53f2\u9875\u9762,\u652f\u6301\u901a\u8fc7\u521b\u5efa\u8005\u4fe1\u606f\u641c\u7d22\u8fc7\u6ee4\u5386\u53f2\u4efb\u52a1\u6570\u636e")),(0,r.kt)("h2",{id:"\u4fee\u590d\u529f\u80fd"},"\u4fee\u590d\u529f\u80fd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1623"},"[Linkis-1623]"),"  \u4fee\u590dLogPath\u548cResultSetPath\u9519\u8bef\u7684\u5c06submitUser\u4f7f\u7528\u4e3aexecuteUser"),(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1640"},"[Linkis-1640]"),"  \u4fee\u590dLogReader\u4f7f\u7528\u5355\u4f8bInputStream\uff0c\u5b58\u5728\u65e5\u5fd7\u4e22\u5931\uff0c\u65e0\u6cd5\u8bfb\u53d6\u6700\u65b0\u7684\u6301\u4e45\u5316\u65e5\u5fd7\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2009"},"[Linkis-2009]")," \u4fee\u590dEntrance \u670d\u52a1\u5b58\u5728\u7684\u7ebf\u7a0b\u8d44\u6e90\u672a\u5173\u95ed\u5bfc\u81f4\u7684\u5185\u5b58\u6cc4\u6f0f\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1901"},"[Linkis-1901]")," \u5c06EntranceFactory\u4e2d\u7684\u7f13\u5b58\u66ff\u6362\u4e3aGuava Cache\uff0c\u4fee\u590d\u7528\u6237\u4fee\u6539\u4e86\u5e76\u53d1\u53c2\u6570\u540e\u65e0\u6cd5\u751f\u6548\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1986"},"[Linkis-1986]")," \u4fee\u590dEntrance\u5b9e\u65f6\u65e5\u5fd7\u83b7\u53d6\u884c\u6570\u5f02\u5e38\uff0c\u5bfc\u81f4\u83b7\u53d6\u7684\u65e5\u5fd7\u91cd\u590d\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","ECM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1714"},"[Linkis-1714]"),' \u901a\u8fc7\u51cf\u5c11EC Java\u9ed8\u8ba4\u5185\u5b58\u5927\u5c0f\u4ee5\u53ca\u6dfb\u52a0EC\u5e94\u7528\u7a0b\u5e8f\u7684\u91cd\u8bd5\u65e5\u5fd7\uff0c\u4f18\u5316EC\u51fa\u73b0\u7684"Cannot allocate memory"\u7684\u5f02\u5e38\u95ee\u9898 '),(0,r.kt)("li",{parentName:"ul"},"[","ECM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1806"},"[Linkis-1806]")," \u4f18\u5316EC\u7684\u751f\u547d\u5468\u671f\u5904\u7406\u903b\u8f91\uff0c\u5f53ECM \u542f\u52a8EC\u56e0\u4e3a\u961f\u5217\u8d44\u6e90\u4e0d\u8db3\u8d85\u65f6\u7b49\u539f\u56e0\u5bfc\u81f4\u72b6\u6001\u4e3aFailed\u65f6\u5019\uff0c\u5c06EC\u8fdb\u7a0bkill\u6389"),(0,r.kt)("li",{parentName:"ul"},"[","Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1721"},"[Linkis-1721]"),"   \u4fee\u590dKerberos\u8ba4\u8bc1\u5931\u8d25\u65f6, hdfsFileSystem\u672a\u8fdb\u884c\u5237\u65b0\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","PES-UDF]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1728"},"[Linkis-1728]"),"  \u4f18\u5316/api/rest_j/v1/udf/all\u7684API\u63a5\u53e3\u5076\u53d1\u7684\u67e5\u8be2\u8017\u65f6\u9ad8\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","PES-Config]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1859"},"[Linkis-1859]")," \u4fee\u590d\u7ba1\u7406\u53f0\u53c2\u6570\u914d\u7f6esaveFullTree\u63a5\u53e3\uff0c\u4e3b\u952e\u91cd\u590d\u5f02\u5e38\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","Clinet]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1739"},"[Linkis-1739]")," \u4fee\u590dujes-client\u7684\u8bf7\u6c42\u4e2d\uff0c\u5b58\u5728\u7684\u53c2\u6570\u62fc\u5199\u9519\u8bef\u5bfc\u81f4\u53c2\u6570\u4f20\u9012\u5931\u8d25\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","Client]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1783"},"[Linkis-1783]")," \u4fee\u590d\u4efb\u52a1\u521b\u5efa\u4ebacreator\u53c2\u6570\u9ed8\u8ba4\u914d\u7f6e\u4e0d\u751f\u6548\u7684\u95ee\u9898 "),(0,r.kt)("li",{parentName:"ul"},"[","Client]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1821"},"[Linkis-1821]"),"  \u4fee\u590dujes-client \u8bf7\u6c42\u5b9e\u4f53\u7c7bGetTableStatisticInfoAction\u53c2\u6570\u7f3a\u5931\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","EC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1765"},"[Linkis-1765]")," \u4fee\u590dEC \u5728\u4efb\u52a1\u8fd0\u884c\u65f6\u89e6\u53d1tryShutdown\u5b58\u5728\u7684\u963b\u585e\u5361\u4f4f\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","LM-AppManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1814"},"[Linkis-1814]")," \u4fee\u590dEngineRestfulApi\u7684createEngineConn\u63a5\u53e3\u8fd4\u56deresponse\u4fe1\u606f\u6709\u8bef\uff0c\u5bfc\u81f4\u5ba2\u6237\u7aef\u8c03\u7528\u51fa\u73b0NPE\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"[","Web]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1972"},"[Linkis-1972]")," \u79fb\u9664\u7ba1\u7406\u53f0\u5386\u53f2\u539f\u56e0\u9057\u7559\u4f46\u672a\u4f7f\u7528\u7684dss\u76f8\u5173\u63a5\u53e3\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"[","EC-Spark]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1729"},"[Linkis-1729]")," \u6dfb\u52a0SparkPreExecutionHook\u51fd\u6570\uff0c\u517c\u5bb9Linkis\u4e4b\u524d\u7684\u8001\u5305\u540d\uff08com.webank.wedatasphere.linkis\uff09"),(0,r.kt)("li",{parentName:"ul"},"[","EC-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1851"},"[Linkis-1851]")," \u4fee\u590djdbc\u5f15\u64ce\uff0c\u4e00\u6b21\u4efb\u52a1\u6267\u884c\u4e2d\u5b58\u5728\u591a\u6761sql\u8bed\u53e5\u65f6\u65e0\u6cd5\u6b63\u5e38\u6267\u884c\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","EC-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1851"},"[Linkis-1961]")," \u4fee\u590djdbc\u5f15\u64ce\u542f\u52a8\u56e0SLF4J\u4f9d\u8d56\u95ee\u9898\u5bfc\u81f4\u65e5\u5fd7\u65e0\u6cd5\u6b63\u5e38\u6253\u5370\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","Gateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1898"},"[Linkis-1898]"),"  \u4fee\u590dGatewaySSOUtils\u7528\u6237\u6210\u529f\u767b\u5f55\u751f\u6210cookie\u65f6\uff0c\u65e0\u6cd5\u8bbe\u7f6e\u521d\u59cb\u57df\u540d\u7684\u95ee\u9898")),(0,r.kt)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,r.kt)("p",null,"Apache Linkis(incubating) 1.1.1\u7684\u53d1\u5e03\u79bb\u4e0d\u5f00Linkis\u793e\u533a\u7684\u8d21\u732e\u8005,\u611f\u8c22\u6240\u6709\u7684\u793e\u533a\u8d21\u732e\u8005\uff0c\u5305\u62ec\u4f46\u4e0d\u4ec5\u9650\u4e8e\u4ee5\u4e0bContributors: AbnerHung\u3001Alexkun\u3001barry8023\u3001CCweixiao \u3001Davidhua1996\u3001Fuu3214\u3001Liveipool\u3001casionone\u3001demonray\u3001husofskyzy\u3001jackxu2011 \u3001legendtkl\u3001lizheng920625\u3001maidangdang44\u3001peacewong\u3001seedscoder"))}k.isMDXComponent=!0}}]);