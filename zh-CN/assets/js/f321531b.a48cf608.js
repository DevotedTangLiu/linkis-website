"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[43531],{3905:(e,n,r)=>{r.d(n,{Zo:()=>g,kt:()=>d});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},g=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},E=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),p=s(r),E=a,d=p["".concat(l,".").concat(E)]||p[E]||u[E]||i;return r?t.createElement(d,o(o({ref:n},g),{},{components:r})):t.createElement(d,o({ref:n},g))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=E;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}E.displayName="MDXCreateElement"},3714:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const i={title:"AppManager \u67b6\u6784",sidebar_position:1},o=void 0,c={unversionedId:"architecture/feature/computation-governance-services/linkis-manager/app-manager",id:"version-1.3.1/architecture/feature/computation-governance-services/linkis-manager/app-manager",title:"AppManager \u67b6\u6784",description:"\u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/architecture/feature/computation-governance-services/linkis-manager/app-manager.md",sourceDirName:"architecture/feature/computation-governance-services/linkis-manager",slug:"/architecture/feature/computation-governance-services/linkis-manager/app-manager",permalink:"/zh-CN/docs/1.3.1/architecture/feature/computation-governance-services/linkis-manager/app-manager",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/architecture/feature/computation-governance-services/linkis-manager/app-manager.md",tags:[],version:"1.3.1",sidebarPosition:1,frontMatter:{title:"AppManager \u67b6\u6784",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5165\u53e3\u670d\u52a1 Entrance \u67b6\u6784",permalink:"/zh-CN/docs/1.3.1/architecture/feature/computation-governance-services/entrance"},next:{title:"ResourceManager \u67b6\u6784",permalink:"/zh-CN/docs/1.3.1/architecture/feature/computation-governance-services/linkis-manager/resource-manager"}},l={},s=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",level:2},{value:"\u67b6\u6784\u8bf4\u660e\uff1a",id:"\u67b6\u6784\u8bf4\u660e",level:2}],g={toc:s},p="wrapper";function u(e){let{components:n,...i}=e;return(0,a.kt)(p,(0,t.Z)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,"\u9488\u5bf9\u65e7\u7248\u672cLinkis\u7684Entrance\u6a21\u5757\u8d1f\u8d23\u592a\u591a\u7684\u804c\u8d23\uff0c\u5bf9Engine\u7684\u7ba1\u7406\u80fd\u529b\u8f83\u5f31\uff0c\u4e14\u4e0d\u6613\u4e8e\u540e\u7eed\u7684\u6269\u5c55\uff0c\u65b0\u62bd\u51fa\u4e86AppManager\u6a21\u5757\uff0c\u5b8c\u6210\n\u4ee5\u4e0b\u804c\u8d23\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u65b0\u589eAM\u6a21\u5757\u5c06Entrance\u4e4b\u524d\u505a\u7684\u7ba1\u7406Engine\u7684\u529f\u80fd\u79fb\u52a8\u5230AM\u6a21\u5757"),(0,a.kt)("li",{parentName:"ol"},"AM\u9700\u8981\u652f\u6301\u64cd\u4f5cEngine\uff0c\u5305\u62ec\uff1a\u65b0\u589e\u3001\u590d\u7528\u3001\u56de\u6536\u3001\u9884\u70ed\u3001\u5207\u6362\u7b49\u529f\u80fd"),(0,a.kt)("li",{parentName:"ol"},"\u9700\u8981\u5bf9\u63a5Manager\u6a21\u5757\u5bf9\u5916\u63d0\u4f9bEngine\u7684\u7ba1\u7406\u529f\u80fd\uff1a\u5305\u62ecEngine\u72b6\u6001\u7ef4\u62a4\u3001\u5f15\u64ce\u5217\u8868\u7ef4\u62a4\u3001\u5f15\u64ce\u4fe1\u606f\u7b49"),(0,a.kt)("li",{parentName:"ol"},"AM\u9700\u8981\u7ba1\u7406EM\u670d\u52a1\uff0c\u9700\u8981\u5b8c\u6210EM\u7684\u6ce8\u518c\u5e76\u5c06\u8d44\u6e90\u6ce8\u518c\u8f6c\u53d1\u7ed9RM\u8fdb\u884cEM\u7684\u8d44\u6e90\u6ce8\u518c"),(0,a.kt)("li",{parentName:"ol"},"AM\u9700\u8981\u5bf9\u63a5Label\u6a21\u5757\uff0c\u5305\u62ecEM/Engine\u7684\u589e\u5220\u9700\u8981\u901a\u77e5\u6807\u7b7e\u7ba1\u7406\u5668\u8fdb\u884c\u6807\u7b7e\u66f4\u65b0"),(0,a.kt)("li",{parentName:"ol"},"AM\u53e6\u5916\u9700\u8981\u5bf9\u63a5\u6807\u7b7e\u6a21\u5757\u8fdb\u884c\u6807\u7b7e\u89e3\u6790\uff0c\u5e76\u9700\u8981\u901a\u8fc7\u4e00\u7cfb\u5217\u6807\u7b7e\u83b7\u53d6\u4e00\u4e9b\u5217\u6253\u597d\u5206\u7684serverInstance\u5217\u8868\uff08EM\u548cEngine\u600e\u4e48\u533a\u5206\uff0c1\u3001\u6807\u7b7e\u5b8c\u5168\u4e0d\u4e00\u6837\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u9700\u8981\u5bf9\u5916\u63d0\u4f9b\u57fa\u7840\u63a5\u53e3\uff1a\u5305\u62ec\u5f15\u64ce\u548c\u5f15\u64ce\u7ba1\u7406\u5668\u7684\u589e\u5220\u6539\uff0c\u63d0\u4f9bmetric\u67e5\u8be2\u7b49")),(0,a.kt)("h2",{id:"\u67b6\u6784\u56fe"},"\u67b6\u6784\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(78507).Z,width:"799",height:"614"})),(0,a.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff1aAM\u5728LinkisMaster\u4e2d\u5c5e\u4e8eAppManager\u6a21\u5757\uff0c\u4f5c\u4e3a\u4e00\u4e2aService\u63d0\u4f9b\u670d\u52a1"),(0,a.kt)("p",null,"\u65b0\u5f15\u64ce\u7533\u8bf7\u6d41\u7a0b\u56fe\uff1a\n",(0,a.kt)("img",{src:r(2651).Z,width:"1286",height:"768"})),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u5f15\u64ce\u751f\u547d\u5468\u671f\u6d41\u7a0b\u56fe\u53ef\u77e5\uff0cEntrance\u5df2\u7ecf\u4e0d\u5728\u505aEngine\u7684\u7ba1\u7406\u5de5\u4f5c\uff0cengine\u7684\u542f\u52a8\u548c\u7ba1\u7406\u90fd\u7531AM\u63a7\u5236\u3002"),(0,a.kt)("h2",{id:"\u67b6\u6784\u8bf4\u660e"},"\u67b6\u6784\u8bf4\u660e\uff1a"),(0,a.kt)("p",null,"AppManager\u4e3b\u8981\u5305\u542b\u4e86\u5f15\u64ce\u670d\u52a1\u548cEM\u670d\u52a1\uff1a\n\u5f15\u64ce\u670d\u52a1\u5305\u542b\u4e86\u6240\u6709\u548c\u5f15\u64ceEngineConn\u76f8\u5173\u7684\u64cd\u4f5c\uff0c\u5982\u5f15\u64ce\u521b\u5efa\u3001\u5f15\u64ce\u590d\u7528\u3001\u5f15\u64ce\u5207\u6362\u3001\u5f15\u64ce\u56de\u6536\u3001\u5f15\u64ce\u505c\u6b62\u3001\u5f15\u64ce\u9500\u6bc1\u7b49\u3002\nEM\u670d\u52a1\u8d1f\u8d23\u6240\u6709EngineConnManager\u7684\u4fe1\u606f\u7ba1\u7406\uff0c\u53ef\u4ee5\u5728\u7ebf\u4e0a\u5bf9ECM\u8fdb\u884c\u670d\u52a1\u7ba1\u7406\uff0c\u5305\u62ec\u6807\u7b7e\u4fee\u6539\uff0c\u6682\u505cECM\u670d\u52a1\uff0c\u83b7\u53d6ECM\u5b9e\u4f8b\u4fe1\u606f\uff0c\u83b7\u53d6ECM\u8fd0\u884c\u7684\u5f15\u64ce\u4fe1\u606f\uff0ckill\u6389ECM\u64cd\u4f5c\uff0c\u8fd8\u53ef\u4ee5\u6839\u636eEM Node\u7684\u4fe1\u606f\u67e5\u8be2\u6240\u6709\u7684EngineNode,\u4e5f\u652f\u6301\u6309\u7528\u6237\u67e5\u627e\uff0c\u4fdd\u5b58\u4e86EM Node\u7684\u8d1f\u8f7d\u4fe1\u606f\u3001\u8282\u70b9\u5065\u5eb7\u4fe1\u606f\u3001\u8d44\u6e90\u4f7f\u7528\u4fe1\u606f\u7b49\u3002\n\u65b0\u7684EngineConnManager\u548cEngineConn\u90fd\u652f\u6301\u6807\u7b7e\u7ba1\u7406\uff0c\u5f15\u64ce\u7684\u7c7b\u578b\u4e5f\u589e\u52a0\u4e86\u79bb\u7ebf\u3001\u6d41\u5f0f\u3001\u4ea4\u4e92\u5f0f\u652f\u6301\u3002"),(0,a.kt)("p",null,"\u5f15\u64ce\u521b\u5efa\uff1a\u4e13\u95e8\u8d1f\u8d23LinkisManager\u670d\u52a1\u7684\u65b0\u5efa\u5f15\u64ce\u529f\u80fd\uff0c\u5f15\u64ce\u542f\u52a8\u6a21\u5757\u5b8c\u5168\u8d1f\u8d23\u4e00\u4e2a\u65b0\u5f15\u64ce\u7684\u521b\u5efa\uff0c\u5305\u62ec\u83b7\u53d6ECM\u6807\u7b7e\u96c6\u5408\u3001\u8d44\u6e90\u7533\u8bf7\u3001\u83b7\u5f97\u5f15\u64ce\u542f\u52a8\u547d\u4ee4\uff0c\u901a\u77e5ECM\u65b0\u5efa\u5f15\u64ce\uff0c\u66f4\u65b0\u5f15\u64ce\u5217\u8868\u7b49\u3002\nCreateEngienRequest->RPC/Rest -> MasterEventHandler ->CreateEngineService ->\n->LabelContext/EnginePlugin/RMResourcevice->\uff08RcycleEngineService\uff09EngineNodeManager->EMNodeManager->sender.ask(EngineLaunchRequest)->EngineManager\u670d\u52a1->EngineNodeManager->EngineLocker->Engine->EngineNodeManager->EngineFactory=",">","EngineService=",">","ServerInstance\n\u5728\u521b\u5efa\u5f15\u64ce\u662f\u5b58\u5728\u548cRM\u4ea4\u4e92\u7684\u90e8\u5206\uff0cEnginePlugin\u5e94\u8be5\u9700\u8981\u901a\u8fc7Lables\u8fd4\u56de\u5177\u4f53\u7684\u8d44\u6e90\u7c7b\u578b\uff0c\u7136\u540eAM\u5411RM\u53d1\u9001\u8d44\u6e90\u8bf7\u6c42"),(0,a.kt)("p",null,"\u5f15\u64ce\u590d\u7528\uff1a\u4e3a\u4e86\u51cf\u5c11\u5f15\u64ce\u542f\u52a8\u6240\u8017\u8d39\u7684\u65f6\u95f4\u548c\u8d44\u6e90\uff0c\u5f15\u64ce\u4f7f\u7528\u5fc5\u987b\u4f18\u5148\u8003\u8651\u590d\u7528\u539f\u5219\uff0c\u590d\u7528\u4e00\u822c\u662f\u6307\u590d\u7528\u7528\u6237\u5df2\u7ecf\u521b\u5efa\u597d\u7684\u5f15\u64ce\uff0c\u5f15\u64ce\u590d\u7528\u6a21\u5757\u8d1f\u8d23\u63d0\u4f9b\u53ef\u590d\u7528\u5f15\u64ce\u96c6\u5408\uff0c\u9009\u4e3e\u5e76\u9501\u5b9a\u5f15\u64ce\u540e\u5f00\u59cb\u4f7f\u7528\uff0c\u6216\u8005\u8fd4\u56de\u6ca1\u6709\u53ef\u4ee5\u590d\u7528\u7684\u5f15\u64ce\u3002\nReuseEngienRequest->RPC/Rest -> MasterEventHandler ->ReuseEngineService ->abelContext->EngineNodeManager->EngineSelector->EngineLocker->Engine->EngineNodeManager->EngineReuser->EngineService=",">","ServerInstance"),(0,a.kt)("p",null,"\u5f15\u64ce\u5207\u6362\uff1a\u4e3b\u8981\u662f\u6307\u5bf9\u5df2\u6709\u5f15\u64ce\u8fdb\u884c\u6807\u7b7e\u5207\u6362\uff0c\u4f8b\u5982\u521b\u5efa\u5f15\u64ce\u7684\u65f6\u5019\u662f\u7531Creator1\u521b\u5efa\u7684\uff0c\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u5f15\u64ce\u5207\u6362\u6539\u6210Creator2\u3002\u8fd9\u4e2a\u65f6\u5019\u5c31\u53ef\u4ee5\u5141\u8bb8\u5f53\u524d\u5f15\u64ce\u63a5\u6536\u6807\u7b7e\u4e3aCreator2\u7684\u4efb\u52a1\u4e86\u3002\nSwitchEngienRequest->RPC/Rest -> MasterEventHandler ->SwitchEngineService ->LabelContext/EnginePlugin/RMResourcevice->EngineNodeManager->EngineLocker->Engine->EngineNodeManager->EngineReuser->EngineService=",">","ServerInstance"),(0,a.kt)("p",null,"\u5f15\u64ce\u7ba1\u7406\u5668\uff1a\u5f15\u64ce\u7ba1\u7406\u8d1f\u8d23\u7ba1\u7406\u6240\u6709\u5f15\u64ce\u7684\u57fa\u672c\u4fe1\u606f\u3001\u5143\u6570\u636e\u4fe1\u606f"))}u.isMDXComponent=!0},2651:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/AppManager-02-b50514be23bb3f9061ce4b5972eeed51.png"},78507:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/AppManager-03-b3e8fc5e41d7bdca31d42da47ccacbcd.png"}}]);