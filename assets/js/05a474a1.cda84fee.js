"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[94073],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=o(n),c=r,k=s["".concat(u,".").concat(c)]||s[c]||d[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94237:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return m},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={title:"Version overview",sidebar_position:.1},u=void 0,o={unversionedId:"release",id:"release",isDocsHomePage:!1,title:"Version overview",description:"- ElasticSearch Engine usage introduction",source:"@site/docs/release.md",sourceDirName:".",slug:"/release",permalink:"/docs/1.2.0/release",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/release.md",tags:[],version:"current",sidebarPosition:.1,frontMatter:{title:"Version overview",sidebar_position:.1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/1.2.0/introduction"},next:{title:"Quick Deployment",permalink:"/docs/1.2.0/deployment/quick-deploy"}},m=[{value:"Configuration Item",id:"configuration-item",children:[]},{value:"DB Table Changes",id:"db-table-changes",children:[]}],d={toc:m};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.2.0/engine-usage/elasticsearch"},"ElasticSearch Engine usage introduction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.2.0/engine-usage/presto"},"Presto Engine usage introduction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.2.0/deployment/involve-prometheus-into-linkis"},"Enable Prometheus monitoring")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.2.0/architecture/commons/variable"},"Custom Variable Design & Built-in Variables")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.2.0/architecture/computation-governance-services/engine/engine-conn-history"},"EngineConn History Information Recording Features")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.2.0/architecture/computation-governance-services/engine/engine-conn-metrics"},"EngineConn Metrics reporting feature")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.2.0/architecture/public-enhancement-services/context-service/content-service-cleanup"},"ContextService cleanup interface features")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/download/release-notes-1.1.3"},"Release-Notes"))),(0,l.kt)("h2",{id:"configuration-item"},"Configuration Item"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"module name (service name)"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eureka(application-eureka.yml)"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"management.endpoints.web.exposure.include"),(0,l.kt)("td",{parentName:"tr",align:null},"refresh,info,health,metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"The endpoint exposure range for Spring Boot Actuator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eureka(application-eureka.yml)"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"eureka.instance.metadata-map:.prometheus.path"),(0,l.kt)("td",{parentName:"tr",align:null},"${prometheus.path:/actuator/prometheus}"),(0,l.kt)("td",{parentName:"tr",align:null},"Prometheus monitoring endpoint for microservices registered in Eureka metadata")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common(application-linkis.yml)"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"eureka.instance.metadata-map:.prometheus.path"),(0,l.kt)("td",{parentName:"tr",align:null},"${prometheus.path:${prometheus.endpoint}}"),(0,l.kt)("td",{parentName:"tr",align:null},"ditto")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.prometheus.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.user.restful.uri.pass.auth"),(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/actuator/prometheus"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify"),(0,l.kt)("td",{parentName:"tr",align:null},"spring.spring.cloud.config.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-es"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.cluster"),(0,l.kt)("td",{parentName:"tr",align:null},"127.0.0.1:9200"),(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch cluster\uff0cSeparate multiple nodes using commas")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-es"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.username"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch cluster username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-es"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.password"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch cluster password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-es"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.auth.cache"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the client is cache authenticated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-es"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.sniffer.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether Sniffer is enabled on the client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-es"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.http.method"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"request method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-es"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.http.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"/_search"),(0,l.kt)("td",{parentName:"tr",align:null},"the Endpoint in JSON Script")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-es"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.sql.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"/_sql"),(0,l.kt)("td",{parentName:"tr",align:null},"the Endpoint in SQL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-es"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.sql.format"),(0,l.kt)("td",{parentName:"tr",align:null},'{"query":"%s"}'),(0,l.kt)("td",{parentName:"tr",align:null},"the template of SQL script call , %s replaced with SQL as the body of the request request ElasticSearch cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-es"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.headers.*"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Client Headers configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-es"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis.engineconn.concurrent.limit"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum engine concurrency of ElasticSearch cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-presto"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.url"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:8080"},"http://127.0.0.1:8080")),(0,l.kt)("td",{parentName:"tr",align:null},"Presto cluster connection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-presto"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.username"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"Presto cluster username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-presto"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.password"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Presto cluster password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-presto"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.catalog"),(0,l.kt)("td",{parentName:"tr",align:null},"system"),(0,l.kt)("td",{parentName:"tr",align:null},"Catalog for queries")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-presto"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.schema"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Query Schema")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-presto"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.source"),(0,l.kt)("td",{parentName:"tr",align:null},"global"),(0,l.kt)("td",{parentName:"tr",align:null},"source used by the query")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-presto"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"presto.session.query_max_total_memory"),(0,l.kt)("td",{parentName:"tr",align:null},"8GB"),(0,l.kt)("td",{parentName:"tr",align:null},"query uses maximum memory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-presto"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.http.connectTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"Presto client connect timeout (unit: seconds)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-presto"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.http.readTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"Presto client read timeout (unit: seconds)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-presto"),(0,l.kt)("td",{parentName:"tr",align:null},"New"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.engineconn.concurrent.limit"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of concurrent Presto engines")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-jdbc"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.jdbc.connect.url"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://127.0.0.1:3306/test"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc conn url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-jdbc"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.jdbc.driver"),(0,l.kt)("td",{parentName:"tr",align:null},"com.mysql.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc conn driver")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-jdbc"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.jdbc.username"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc conn username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ec-jdbc"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify"),(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.jdbc.password"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc conn password")))),(0,l.kt)("h2",{id:"db-table-changes"},"DB Table Changes"),(0,l.kt)("p",null,"For details, see the upgrade schema",(0,l.kt)("inlineCode",{parentName:"p"},"db/upgrade/1.2.0_schema")," file in the corresponding branch of the code repository (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis"},"https://github.com/apache/incubator-linkis"),")."))}s.isMDXComponent=!0}}]);