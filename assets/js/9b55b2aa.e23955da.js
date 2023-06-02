"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[55604],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,k=c["".concat(o,".").concat(m)]||c[m]||h[m]||r;return a?i.createElement(k,s(s({ref:t},u),{},{components:a})):i.createElement(k,s({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const r={title:"Release Notes 1.1.1",sidebar_position:7},s=void 0,l={unversionedId:"release-notes-1.1.1",id:"release-notes-1.1.1",title:"Release Notes 1.1.1",description:"Apache Linkis 1.1.1 includes all of Project Linkis-1.1.1.",source:"@site/download/release-notes-1.1.1.md",sourceDirName:".",slug:"/release-notes-1.1.1",permalink:"/download/release-notes-1.1.1",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/download/release-notes-1.1.1.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Release Notes 1.1.1",sidebar_position:7},sidebar:"defaultSidebar",previous:{title:"Release Notes 1.1.2",permalink:"/download/release-notes-1.1.2"},next:{title:"Release Notes 1.1.0",permalink:"/download/release-notes-1.1.0"}},o={},p=[{value:"New Feature",id:"new-feature",level:2},{value:"Enhancement",id:"enhancement",level:2},{value:"Bugs Fix",id:"bugs-fix",level:2},{value:"Others",id:"others",level:2},{value:"Credits",id:"credits",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Apache Linkis 1.1.1 includes all of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis/projects/18"},"Project Linkis-1.1.1"),"."),(0,n.kt)("p",null,"This release mainly supports the functions of UDF multi-version control and UDF storage to BML; the submission task supports the collection and viewing of Yarn queue resource usage statistics; new support for the data virtualization engine openLooKeng; and known bugs reported by the community are fixed."),(0,n.kt)("p",null,"The following key features have been added:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support proxy user mode, user A can perform tasks on behalf of user B, one proxy user can proxy multiple users"),(0,n.kt)("li",{parentName:"ul"},"Support UDF multi-version control and UDF storage to BML features"),(0,n.kt)("li",{parentName:"ul"},"Submission of tasks supports the collection of Yarn queue resource usage statistics and the visual view of the management console page"),(0,n.kt)("li",{parentName:"ul"},"Added support for data virtualization engine openLooKeng")),(0,n.kt)("p",null,"abbreviation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"EC: Engineconn"),(0,n.kt)("li",{parentName:"ul"},"ECM: EngineConnManager"),(0,n.kt)("li",{parentName:"ul"},"ECP: EngineConnPlugin"),(0,n.kt)("li",{parentName:"ul"},"DMS: Data Source Manager Service"),(0,n.kt)("li",{parentName:"ul"},"MDS: MetaData Manager Service"),(0,n.kt)("li",{parentName:"ul"},"LM: Linkis Manager")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"new-feature"},"New Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[","Gateway&Entrance]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1608"},"[Linkis-1608]")," Support proxy user mode, user A can perform tasks on behalf of user B, query user B's Related data, a proxy user can proxy multiple users"),(0,n.kt)("li",{parentName:"ul"},"[","LM-ResourceManager]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1616"},"[Linkis-1616]")," The resource address configuration of YARN ResourceManager supports high-availability multi-address configuration, the current YARN ResourceManager conversion When the status or stop, the master node will be resolved from the high-availability address list to continue to provide services"),(0,n.kt)("li",{parentName:"ul"},"[","EC-openLooKeng]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1639"},"[Linkis-1639]")," Added support for data virtualization engine openLooKeng"),(0,n.kt)("li",{parentName:"ul"},"[","UDF]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1534"},"[Linkis-1534]")," Support UDF multi-version control and UDF storage to BML, submit tasks support Yarn queue resources Use statistics collection and management console page visualization"),(0,n.kt)("li",{parentName:"ul"},"[","Client]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1718"},"[Linkis-1718]")," The Linkis-cli client supports submitting Once type tasks, which will only run once after the engine process is started Task, automatically destroyed after the task is over"),(0,n.kt)("li",{parentName:"ul"},"[","ECP]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1758"},"[Linkis-1758]")," Add engine material refresh interface, support to refresh engine material resources through http interface call")),(0,n.kt)("h2",{id:"enhancement"},"Enhancement"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[","Gateway]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1430"},"[Linkis-1430]")," For the Token authentication method, the Token acquisition is adjusted from the configuration file to the database table"),(0,n.kt)("li",{parentName:"ul"},"[","Entrance]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1642"},"[Linkis-1642]")," Optimize the excel export interface resultsetToExcel: support passing the number of rows of downloaded data"),(0,n.kt)("li",{parentName:"ul"},"[","Entrance]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1733"},"[Linkis-1733]")," Add support for more default time variables related to run_date"),(0,n.kt)("li",{parentName:"ul"},"[","Entrance]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1794"},"[Linkis-1794]")," Add to limit the data size of a single row in the result set, and optimize the OOM problem caused by large result sets"),(0,n.kt)("li",{parentName:"ul"},"[","DMS-Common]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1757"},"[Linkis-1757]")," Support to configure Hive metadata administrator, administrators can obtain hive's metadata through the interface Metadata information for all library tables"),(0,n.kt)("li",{parentName:"ul"},"[","Common]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1799"},"[Linkis-1799]")," Optimize the segmentation of service logs: adjust the log history segmentation time from one day to one hour"),(0,n.kt)("li",{parentName:"ul"},"[","Common]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1921"},"[Linkis-1921]")," Optimize Jackson's dependency management: manage jackson dependencies uniformly through jackson-bom, and upgrade to Version 2.11.4"),(0,n.kt)("li",{parentName:"ul"},"[","ECM]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1779"},"[Linkis-1779]")," Optimize the status monitoring logic of ECM instances, and increase the judgment of heartbeat reporting time. The fix may be due to Eureka performance issues leading to misjudgment issues"),(0,n.kt)("li",{parentName:"ul"},"[","ECM]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1930"},"[Linkis-1930]")," ECM resource is not checked when optimizing resource check"),(0,n.kt)("li",{parentName:"ul"},"[","Web]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1596"},"[Linkis-1596]")," Optimize the use of the interface for viewing the task log of the management console, and fix the log cannot be used for the running job Timely refresh display issues"),(0,n.kt)("li",{parentName:"ul"},"[","Web]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1650"},"[Linkis-1650]")," linkis console - global history page, support to filter historical task data by creator information search")),(0,n.kt)("h2",{id:"bugs-fix"},"Bugs Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[","Entrance]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1623"},"[Linkis-1623]")," Fix LogPath and ResultSetPath incorrectly use submitUser as executeUser"),(0,n.kt)("li",{parentName:"ul"},"[","Entrance]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1640"},"[Linkis-1640]")," Fix LogReader using singleton InputStream, there is log loss, unable to read the latest persistent log The problem"),(0,n.kt)("li",{parentName:"ul"},"[","Entrance]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/2009"},"[Linkis-2009]")," Fix the problem of memory leak caused by not closing thread resources in Entrance service"),(0,n.kt)("li",{parentName:"ul"},"[","Entrance]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1901"},"[Linkis-1901]")," Replaced the cache in EntranceFactory with Guava Cache, fixed that the user modified the concurrency parameter and it could not take effect The problem"),(0,n.kt)("li",{parentName:"ul"},"[","Entrance]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1986"},"[Linkis-1986]")," Fix the abnormal number of lines obtained in the Entrance real-time log, resulting in the duplicated log obtained"),(0,n.kt)("li",{parentName:"ul"},"[","ECM]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1714"},"[Linkis-1714]"),' Optimize EC by reducing EC Java default memory size and adding retry log for EC application The abnormal problem of "Cannot allocate memory" appears'),(0,n.kt)("li",{parentName:"ul"},"[","ECM]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1806"},"[Linkis-1806]")," Optimize the life cycle processing logic of EC, when ECM starts EC due to insufficient queue resources and timeout When the status is Failed, kill the EC process"),(0,n.kt)("li",{parentName:"ul"},"[","Common]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1721"},"[Linkis-1721]")," Fixed the issue that hdfsFileSystem was not refreshed when Kerberos authentication failed"),(0,n.kt)("li",{parentName:"ul"},"[","UDF]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1728"},"[Linkis-1728]")," Optimize /api/rest_j/v1/udf/all API interface for occasional queries time consuming problem"),(0,n.kt)("li",{parentName:"ul"},"[","Config]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1859"},"[Linkis-1859]")," Fix the problem of abnormal primary key duplication in the console parameter configuration saveFullTree interface"),(0,n.kt)("li",{parentName:"ul"},"[","Clinet]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1739"},"[Linkis-1739]")," Fix the ujes-client request, the parameter spelling error caused the parameter transmission to fail"),(0,n.kt)("li",{parentName:"ul"},"[","Client]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1783"},"[Linkis-1783]")," Fix the problem that the default configuration of the task creator creator parameter does not take effect"),(0,n.kt)("li",{parentName:"ul"},"[","Client]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1821"},"[Linkis-1821]")," Fix ujes-client request entity class GetTableStatisticInfoAction parameter is missing"),(0,n.kt)("li",{parentName:"ul"},"[","EC]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1765"},"[Linkis-1765]")," Fix the blocking problem that EC triggers tryShutdown when the task is running"),(0,n.kt)("li",{parentName:"ul"},"[","LM-AppManager]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1814"},"[Linkis-1814]")," Fix the response information returned by the createEngineConn interface of EngineRestfulApi is incorrect, resulting in NPE in client calls The problem."),(0,n.kt)("li",{parentName:"ul"},"[","Web]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1972"},"[Linkis-1972]")," Remove the dss related interface code left but not used by the management console for historical reasons"),(0,n.kt)("li",{parentName:"ul"},"[","EC-Spark]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1729"},"[Linkis-1729]")," Add SparkPreExecutionHook function, compatible with the old package name before Linkis (com.webank.wedatasphere .linkis)"),(0,n.kt)("li",{parentName:"ul"},"[","EC-JDBC]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1851"},"[Linkis-1851]")," Fix the jdbc engine, the problem that there are multiple sql statements in one task execution cannot be executed normally"),(0,n.kt)("li",{parentName:"ul"},"[","EC-JDBC]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/1851"},"[Linkis-1961]")," Fix the problem that the log cannot be printed normally due to the SLF4J dependency problem when the jdbc engine starts"),(0,n.kt)("li",{parentName:"ul"},"[","Gateway]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1898"},"[Linkis-1898]")," Fix the problem that the initial domain name cannot be set when the GatewaySSOUtils user successfully logs in to generate a cookie")),(0,n.kt)("h2",{id:"others"},"Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[","License]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/2110"},"[Linkis-2110]")," Removed the binary file .mvn/wrapper/maven-wrapper.jar in the source code, and adjusted the LICENSE content related to .mvn/*"),(0,n.kt)("li",{parentName:"ul"},"[","License]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2113"},"[Linkis-2113]")," Upgrade py4j-0.10.7-src.zip to py4j-0.10.9.5-src.zip, update the license files of py4j-*.src and adjust it location, from linkis-engineconn-plugins/engineconn-plugins/python /src/main/py4j/LICENSE-py4j-0.10.7-src.txt moved to licenses/LICENSE-py4j-0.10.9.5-src.txt for easy viewing"),(0,n.kt)("li",{parentName:"ul"},"Fixed the issue of using Window's line endings format CTRL in the release source code of shell script:mvnw")),(0,n.kt)("h2",{id:"credits"},"Credits"),(0,n.kt)("p",null,"The release of Apache Linkis 1.1.1 is inseparable from the contributors of the Linkis community. Thanks to all the community contributors, including but not limited to the following Contributors: AbnerHung, Alexkun, barry8023, CCweixiao, Davidhua1996, Fuu3214, Liveipool, casinoone, demonray , husofskyzy, jackxu2011, legendtkl, lizheng920625, maidangdang44, peacewong, seedscoder"))}h.isMDXComponent=!0}}]);