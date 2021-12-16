"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1402],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},512:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Cluster Deployment",sidebar_position:2},s="Introduction to Distributed Deployment Scheme",m={unversionedId:"deployment/cluster_deployment",id:"version-1.0.2/deployment/cluster_deployment",isDocsHomePage:!1,title:"Cluster Deployment",description:"Linkis's stand-alone deployment is simple, but it cannot be used in a production environment, because too many processes on the same server will make the server too stressful. The choice of deployment plan is related to the company's user scale, user habits, and the number of simultaneous users of the cluster. Generally speaking, we will choose the deployment method based on the number of simultaneous users using Linkis and the user's preference for the execution engine.",source:"@site/versioned_docs/version-1.0.2/deployment/cluster_deployment.md",sourceDirName:"deployment",slug:"/deployment/cluster_deployment",permalink:"/docs/1.0.2/deployment/cluster_deployment",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/deployment/cluster_deployment.md",tags:[],version:"1.0.2",sidebarPosition:2,frontMatter:{title:"Cluster Deployment",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Quick Deployment",permalink:"/docs/1.0.2/deployment/quick_deploy"},next:{title:"EngineConnPlugin Installation",permalink:"/docs/1.0.2/deployment/engine_conn_plugin_installation"}},p=[{value:"1.Multi-node deployment method reference",id:"1multi-node-deployment-method-reference",children:[]},{value:"2.Linkis microservices distributed deployment configuration parameters",id:"2linkis-microservices-distributed-deployment-configuration-parameters",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction-to-distributed-deployment-scheme"},"Introduction to Distributed Deployment Scheme"),(0,l.kt)("p",null,"Linkis's stand-alone deployment is simple, but it cannot be used in a production environment, because too many processes on the same server will make the server too stressful. The choice of deployment plan is related to the company's user scale, user habits, and the number of simultaneous users of the cluster. Generally speaking, we will choose the deployment method based on the number of simultaneous users using Linkis and the user's preference for the execution engine."),(0,l.kt)("h2",{id:"1multi-node-deployment-method-reference"},"1.Multi-node deployment method reference"),(0,l.kt)("p",null,"Linkis1.0 still maintains the SpringCloud-based microservice architecture, in which each microservice supports multiple active deployment schemes. Of course, different microservices play different roles in the system. Some microservices are called frequently, and more It may be in a high load situation. *",(0,l.kt)("em",{parentName:"p"},"On the machine where EngineConnManager is installed, the memory load of the machine will be relatively high because the user's engine process will be started, and the load of other types of microservices on the machine will be relatively low.")," *For this kind of microservices, we recommend starting multiple distributed deployments. The total resources dynamically used by Linkis can be calculated as follows."),(0,l.kt)("p",null,"EngineConnManager Total resources used = total memory + total number of cores =\nNumber of people online at the same time ","*"," (All types of engines occupy memory) ","*","maximum concurrency per user + number of people online at the same time ","*","\n(total memory occupied by all types of engine conns) ","*","maximum concurrency per user"),(0,l.kt)("p",null,"For example, when only spark, hive, and python engines are used and the maximum concurrency of a single user is 1, 50 people are used at the same time, Spark's driver memory is 1G, and Hive\nClient memory 1G, python client 1G, each engine uses 1 core, then it is 50 ","*","(1+1+1)G ","*","\n1 + 50 ","*","(1+1+1) cores","*","1 = 150G memory + 150 CPU cores."),(0,l.kt)("p",null,"During distributed deployment, the memory occupied by the microservice itself can be calculated according to each 2G memory. In the case of a large number of users, it is recommended to increase the memory of ps-publicservice to 6G, and it is recommended to reserve 10G of memory as a buffer.\nThe following configuration assumes that ",(0,l.kt)("strong",{parentName:"p"},"each user starts two engines at the same time as an example"),". ",(0,l.kt)("strong",{parentName:"p"},"For a machine with 64G memory"),", the reference configuration is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"10-50 people online at the same time")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Server configuration recommended")," 4 servers, named S1, S2, S3, S4")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Service"),(0,l.kt)("th",{parentName:"tr",align:null},"Host name"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,l.kt)("td",{parentName:"tr",align:null},"S1, S2"),(0,l.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Other services"),(0,l.kt)("td",{parentName:"tr",align:null},"S3, S4"),(0,l.kt)("td",{parentName:"tr",align:null},"Eureka high availability deployment")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"50-100 people online at the same time")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 6 servers, named S1, S2, S3, S4, S5, S6")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Service"),(0,l.kt)("th",{parentName:"tr",align:null},"Host name"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,l.kt)("td",{parentName:"tr",align:null},"S1-S4"),(0,l.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Other services"),(0,l.kt)("td",{parentName:"tr",align:null},"S5, S6"),(0,l.kt)("td",{parentName:"tr",align:null},"Eureka high availability deployment")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The number of simultaneous users 100-300")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Recommended server configuration"),": 12 servers, named S1, S2...S12"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Service"),(0,l.kt)("th",{parentName:"tr",align:null},"Host name"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,l.kt)("td",{parentName:"tr",align:null},"S1-S10"),(0,l.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Other services"),(0,l.kt)("td",{parentName:"tr",align:null},"S11, S12"),(0,l.kt)("td",{parentName:"tr",align:null},"Eureka high availability deployment")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"300-500 people at the same time")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 20 servers, named S1, S2...S20")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Service"),(0,l.kt)("th",{parentName:"tr",align:null},"Host name"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,l.kt)("td",{parentName:"tr",align:null},"S1-S18"),(0,l.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Other services"),(0,l.kt)("td",{parentName:"tr",align:null},"S19, S20"),(0,l.kt)("td",{parentName:"tr",align:null},"Eureka high-availability deployment, some microservices can be expanded if the request volume is tens of thousands, and the current active-active deployment can support thousands of users in the industry")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"More than 500 users at the same time (estimated based on 800 people online at the same time)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 34 servers, named S1, S2...S34")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Service"),(0,l.kt)("th",{parentName:"tr",align:null},"Host name"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,l.kt)("td",{parentName:"tr",align:null},"S1-S32"),(0,l.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Other services"),(0,l.kt)("td",{parentName:"tr",align:null},"S33, S34"),(0,l.kt)("td",{parentName:"tr",align:null},"Eureka high-availability deployment, some microservices can be expanded if the request volume is tens of thousands, and the current active-active deployment can support thousands of users in the industry")))),(0,l.kt)("h2",{id:"2linkis-microservices-distributed-deployment-configuration-parameters"},"2.Linkis microservices distributed deployment configuration parameters"),(0,l.kt)("p",null,"In linkis1.0, we have optimized and integrated the startup parameters. Some important startup parameters of each microservice are loaded through the conf/linkis-env.sh file, such as the microservice IP, port, registry address, etc. The way to modify the parameters has changed a little. Take the active-active deployment of the machines ",(0,l.kt)("strong",{parentName:"p"},"server1 and server2")," as an example, in order to allow eureka to register with each other."),(0,l.kt)("p",null,"On the server1 machine, you need to change the value in ",(0,l.kt)("strong",{parentName:"p"},"conf/linkis-env.sh")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EUREKA_URL=http://$EUREKA_INSTALL_IP:$EUREKA_PORT/eureka/")),(0,l.kt)("p",null,"change into:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EUREKA_URL=http://$EUREKA_INSTALL_IP:$EUREKA_PORT/eureka/,http:/server2:port/eureka/")),(0,l.kt)("p",null,"In the same way, on the server2 machine, you need to change the value in ",(0,l.kt)("strong",{parentName:"p"},"conf/linkis-env.sh")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EUREKA_URL=http://$EUREKA_INSTALL_IP:$EUREKA_PORT/eureka/")),(0,l.kt)("p",null,"change into:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EUREKA_URL=http://$EUREKA_INSTALL_IP:$EUREKA_PORT/eureka/,http:/server1:port/eureka/")),(0,l.kt)("p",null,"After the modification, start the microservice, enter the eureka registration interface from the web side, you can see that the microservice has been successfully registered to eureka, and the DS\nReplicas will also display the replica nodes adjacent to the cluster."))}c.isMDXComponent=!0}}]);