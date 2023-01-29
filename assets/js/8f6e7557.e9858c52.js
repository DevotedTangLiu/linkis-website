"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[12463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,u=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Programming Specification",sidebar_position:1},r=void 0,l={unversionedId:"development/development-specification/programming-specification",id:"version-1.3.1/development/development-specification/programming-specification",title:"Programming Specification",description:"1. Naming Convention",source:"@site/versioned_docs/version-1.3.1/development/development-specification/programming-specification.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/programming-specification",permalink:"/docs/latest/development/development-specification/programming-specification",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/development/development-specification/programming-specification.md",tags:[],version:"1.3.1",sidebarPosition:1,frontMatter:{title:"Programming Specification",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"License Notes",permalink:"/docs/latest/development/development-specification/license"},next:{title:"Commit Message Notice",permalink:"/docs/latest/development/development-specification/commit-message"}},s={},c=[{value:"1. Naming Convention",id:"1-naming-convention",level:2},{value:"2. Annotation Protocol",id:"2-annotation-protocol",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-naming-convention"},"1. Naming Convention"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"[",(0,i.kt)("strong",{parentName:"li"},"Mandatory"),"]"," Do not use Chinese pinyin and unintelligible abbreviations"),(0,i.kt)("li",{parentName:"ol"},"For basic Java naming conventions, please refer to ",(0,i.kt)("a",{parentName:"li",href:"https://alibaba.github.io/Alibaba-Java-Coding-Guidelines/#naming-conventions"},"naming-conventions")),(0,i.kt)("li",{parentName:"ol"},"[Constraints]"," There is a scalastyle style configuration file in linkis, if it does not conform to the specification, you need to rename it according to the scalastyle style"),(0,i.kt)("li",{parentName:"ol"},"[",(0,i.kt)("strong",{parentName:"li"},"Mandatory"),"]"," Configuration files, startup file, process name, configuration keys,etc. also need to comply with naming conventions, which are as follows:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Classification"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Style"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Specifications"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Examples"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Configuration file"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Separated by lowercase'-'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"linkis-classification level (ps/cg/mg)-service name.propertis"),(0,i.kt)("td",{parentName:"tr",align:"left"},"linkis-cg-linkismanager.properties")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Start-stop script"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Separated by lowercase'-'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"linkis-classification level-service name"),(0,i.kt)("td",{parentName:"tr",align:"left"},"linkis-cg-linkismanager")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Module directory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Separated by lowercase'-'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The module directory must be below the corresponding classification level, and the module name is a subdirectory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"linkis-public-enhancements/linkis-bml")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Process naming"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Camel case naming"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Start with Linkis and end with service name"),(0,i.kt)("td",{parentName:"tr",align:"left"},"LinkisBMLApplication")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Configuration Key Naming"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Separated by lowercase'.'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"linkis+module name+keyName"),(0,i.kt)("td",{parentName:"tr",align:"left"},"linkis.bml.hdfs.prefix")))),(0,i.kt)("h2",{id:"2-annotation-protocol"},"2. Annotation Protocol"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"[",(0,i.kt)("strong",{parentName:"li"},"Mandatory"),"]"," The class, class attribute, interface method must be commented, and the comment must use the Javadoc specification, using the format of ",(0,i.kt)("inlineCode",{parentName:"li"},"/**content*/")),(0,i.kt)("li",{parentName:"ol"},"[",(0,i.kt)("strong",{parentName:"li"},"Mandatory"),"]"," All abstract methods (including methods in interfaces) must be annotated with Javadoc. In addition to return values, parameters, and exception descriptions, they must also indicate what the method does and what functions it implements"),(0,i.kt)("li",{parentName:"ol"},"[",(0,i.kt)("strong",{parentName:"li"},"Mandatory"),"]"," All abstract methods (including methods in interfaces) must be annotated with Javadoc, indicating what the method does and does in addition to return values, parameters, and exception descriptions.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"[",(0,i.kt)("strong",{parentName:"li"},"Mandatory"),"]"," method inside a single line comment, a separate line above the comment statement, use // comment. Multi-line comments inside methods use /* */ comments, aligned with code.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\n// Store the reflection relation between parameter variable like 'T' and type like\n\nMap&lt; String, Type&gt;  typeVariableReflect = new HashMap&lt; &gt; (a);\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"[",(0,i.kt)("strong",{parentName:"li"},"Mandatory"),"]"," All enumeration type fields must have a comment stating the purpose of each data item.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * to monitor node status info\n */\npublic enum NodeHealthy {\n\n  /**\n   * healthy status\n   */\n  Healthy,\n  \n  /**\n   * EM identifies itself as UnHealthy or\n   * The manager marks it as abnormal in the status of UnHealthy processing engine.\n   * The manager requests all engines to withdraw forcibly (engine suicide).\n   */\n  UnHealthy,\n\n  /**\n   * The engine is in the alarm state, but can accept tasks\n   */\n  WARN,\n\n  /**\n   * The stock is available and can accept tasks. When the EM status is not reported for the last n heartbeats,\n   * the Engine that has been started is still normal and can accept tasks\n   */\n  StockAvailable,\n\n  /**\n   * The stock is not available. Tasks cannot be accepted\n   */\n  StockUnavailable;\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[Recommendation]"," At the same time of code modification, comments should also be modified, especially parameters, return values, exceptions, core logic, etc.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[Recommendation]"," Delete any unused fields, methods, and inner classes from the class; Remove any unused parameter declarations and internal variables from the method.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Carefully comment out code. Specify above, rather than simply commenting it out. If no, delete it. There are two possibilities for the code to be commented out: 1) The code logic will be restored later. 2) Never use it. The former without the comment information, it is difficult to know the annotation motivation. The latter suggestion IS deleted directly CAN, if NEED to consult historical code, log in code WAREHOUSE can."))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'     public static final CommonVars<String> TUNING_CLASS =\n      CommonVars.apply(\n          "wds.linkis.cs.ha.class", "org.apache.linkis.cs.highavailable.DefaultContextHAManager");\n        // The following comment code should be removed\n        // public static final CommonVars<String> TUNING_CLASS =\n        // CommonVars.apply("wds.linkis.cs.ha.class","org.apache.linkis.cs.persistence.ProxyMethodA");\n')),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"[Reference]"," for annotation requirements: first, can accurately reflect the design ideas and code logic; Second, be able to describe the business meaning, so that other programmers can quickly understand the information behind the code. A large piece of code with no comments at all is like a book to the reader. The comments are for the reader, even after a long time, they can clearly understand the thinking at that time. The comments are also for the successor to see, so that he can quickly take over his work.")))}p.isMDXComponent=!0}}]);