"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9840],{3905:function(n,t,e){e.d(t,{Zo:function(){return c},kt:function(){return y}});var r=e(7294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var p=r.createContext({}),u=function(n){var t=r.useContext(p),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},c=function(n){var t=u(n.components);return r.createElement(p.Provider,{value:t},n.children)},h={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(n,t){var e=n.components,i=n.mdxType,o=n.originalType,p=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),s=u(e),y=i,d=s["".concat(p,".").concat(y)]||s[y]||h[y]||o;return e?r.createElement(d,a(a({ref:t},c),{},{components:e})):r.createElement(d,a({ref:t},c))}));function y(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var o=e.length,a=new Array(o);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=n,l.mdxType="string"==typeof n?n:i,a[1]=l;for(var u=2;u<o;u++)a[u]=e[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}s.displayName="MDXCreateElement"},9818:function(n,t,e){e.r(t),e.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=e(7462),i=e(3366),o=(e(7294),e(3905)),a=["components"],l={title:"Python \u5f15\u64ce",sidebar_position:5},p=void 0,u={unversionedId:"engine_usage/python",id:"engine_usage/python",isDocsHomePage:!1,title:"Python \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.0\u4e2d\uff0cPython\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine_usage/python.md",sourceDirName:"engine_usage",slug:"/engine_usage/python",permalink:"/zh-CN/docs/1.0.3/engine_usage/python",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine_usage/python.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Python \u5f15\u64ce",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Hive \u5f15\u64ce",permalink:"/zh-CN/docs/1.0.3/engine_usage/hive"},next:{title:"Shell \u5f15\u64ce",permalink:"/zh-CN/docs/1.0.3/engine_usage/shell"}},c=[{value:"1.Spark\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",id:"1spark\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",children:[]},{value:"2.Python\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",id:"2python\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",children:[{value:"2.1 Python\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-python\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",children:[]},{value:"2.2 python engineConn\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-python-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]},{value:"2.3 python\u5f15\u64ce\u7684\u6807\u7b7e",id:"23-python\u5f15\u64ce\u7684\u6807\u7b7e",children:[]}]},{value:"3.Python\u5f15\u64ce\u7684\u4f7f\u7528",id:"3python\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"\u51c6\u5907\u64cd\u4f5c",id:"\u51c6\u5907\u64cd\u4f5c",children:[]},{value:"3.1 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",id:"31-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"3.2\u5de5\u4f5c\u6d41\u7684\u4f7f\u7528\u65b9\u5f0f",id:"32\u5de5\u4f5c\u6d41\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"3.3 Linkis Client\u7684\u4f7f\u7528\u65b9\u5f0f",id:"33-linkis-client\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]}]},{value:"4.Python\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",id:"4python\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",children:[]}],h={toc:c};function s(n){var t=n.components,l=(0,i.Z)(n,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.0\u4e2d\uff0cPython\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"1spark\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"},"1.Spark\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528python\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u7528\u6237\u7684PATH\u4e2d\u662f\u6709python\u7684\u6267\u884c\u76ee\u5f55\u548c\u6267\u884c\u6743\u9650\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,o.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"python"),(0,o.kt)("td",{parentName:"tr",align:null},"python\u6267\u884c\u73af\u5883"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5efa\u8bae\u4f7f\u7528anaconda\u7684python\u6267\u884c\u5668")))),(0,o.kt)("p",null,"\u88681-1 \u73af\u5883\u914d\u7f6e\u6e05\u5355"),(0,o.kt)("h2",{id:"2python\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"},"2.Python\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"),(0,o.kt)("h3",{id:"21-python\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 Python\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,o.kt)("p",null,"Python\u662f\u652f\u6301python2 \u548c\npython3\u7684\uff0c\u60a8\u53ef\u4ee5\u7b80\u5355\u66f4\u6539\u914d\u7f6e\u5c31\u53ef\u4ee5\u5b8c\u6210Python\u7248\u672c\u7684\u5207\u6362\uff0c\u4e0d\u9700\u8981\u91cd\u65b0\u7f16\u8bd1python\u7684\u5f15\u64ce\u7248\u672c\u3002"),(0,o.kt)("h3",{id:"22-python-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 python engineConn\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,o.kt)("p",null,"\u6b64\u5904\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684\u52a0\u8f7d\u65b9\u5f0f\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\u3002"),(0,o.kt)("h3",{id:"23-python\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 python\u5f15\u64ce\u7684\u6807\u7b7e"),(0,o.kt)("p",null,"\u6b64\u5904\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684dml.sql\u8fdb\u884c\u63d2\u5165\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"3python\u5f15\u64ce\u7684\u4f7f\u7528"},"3.Python\u5f15\u64ce\u7684\u4f7f\u7528"),(0,o.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c"},"\u51c6\u5907\u64cd\u4f5c"),(0,o.kt)("p",null,"\u5728linkis\u4e0a\u63d0\u4ea4python\u4e4b\u524d\uff0c\u60a8\u53ea\u9700\u8981\u4fdd\u8bc1\u60a8\u7684\u7528\u6237\u7684\\$PATH\u4e2d\u6709python\u7684\u8def\u5f84\u5373\u53ef\u3002"),(0,o.kt)("h3",{id:"31-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.1 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("p",null,"Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165Scriptis\uff0c\u53f3\u952e\u76ee\u5f55\u7136\u540e\u65b0\u5efapython\u811a\u672c\u5e76\u7f16\u5199python\u4ee3\u7801\u5e76\u70b9\u51fb\u6267\u884c\u3002"),(0,o.kt)("p",null,"python\u7684\u6267\u884c\u903b\u8f91\u662f\u901a\u8fc7 Py4j\u7684\u65b9\u5f0f\uff0c\u542f\u52a8\u4e00\u4e2a\u7684python\n\u7684gateway\uff0c\u7136\u540ePython\u5f15\u64ce\u5c06\u4ee3\u7801\u63d0\u4ea4\u5230python\u7684\u6267\u884c\u5668\u8fdb\u884c\u6267\u884c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:e(2209).Z})),(0,o.kt)("p",null,"\u56fe3-1 python\u7684\u6267\u884c\u6548\u679c\u622a\u56fe"),(0,o.kt)("h3",{id:"32\u5de5\u4f5c\u6d41\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.2\u5de5\u4f5c\u6d41\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("p",null,"DSS\u5de5\u4f5c\u6d41\u4e5f\u6709python\u7684\u8282\u70b9\uff0c\u60a8\u53ef\u4ee5\u62d6\u5165\u5de5\u4f5c\u6d41\u8282\u70b9\uff0c\u7136\u540e\u53cc\u51fb\u8fdb\u5165\u7136\u540e\u8fdb\u884c\u7f16\u8f91\u4ee3\u7801\uff0c\u7136\u540e\u4ee5\u5de5\u4f5c\u6d41\u7684\u5f62\u5f0f\u8fdb\u884c\u6267\u884c\u3002"),(0,o.kt)("h3",{id:"33-linkis-client\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.3 Linkis Client\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("p",null,"Linkis\u4e5f\u63d0\u4f9b\u4e86client\u7684\u65b9\u5f0f\u8fdb\u884c\u8c03\u7528spark\u7684\u4efb\u52a1\uff0c\u8c03\u7528\u7684\u65b9\u5f0f\u662f\u901a\u8fc7LinkisClient\u63d0\u4f9b\u7684SDK\u7684\u65b9\u5f0f\u3002\u6211\u4eec\u63d0\u4f9b\u4e86java\u548cscala\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u8c03\u7528\uff0c\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/wiki/Linkis1.0%E7%94%A8%E6%88%B7%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3"},"https://github.com/apache/incubator-linkis/wiki/Linkis1.0%E7%94%A8%E6%88%B7%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3"),"\u3002"),(0,o.kt)("h2",{id:"4python\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"},"4.Python\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"),(0,o.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u5f15\u64ce\u914d\u7f6e\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u8bbe\u7f6e\uff0c\u6bd4\u5982python\u7684\u7248\u672c\u548c\u4ee5\u53capython\u9700\u8981\u52a0\u8f7d\u7684\u4e00\u4e9bmodule\u7b49\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:e(8047).Z})),(0,o.kt)("p",null,"\u56fe4-1 python\u7684\u7528\u6237\u81ea\u5b9a\u4e49\u914d\u7f6e\u7ba1\u7406\u53f0"))}s.isMDXComponent=!0},8047:function(n,t,e){t.Z=e.p+"assets/images/jdbc-conf-8b6a6f3e7f99d606479f9556539f4251.png"},2209:function(n,t,e){t.Z=e.p+"assets/images/python-run-a442d0ab5e119eab2e0aebe935975dac.png"}}]);