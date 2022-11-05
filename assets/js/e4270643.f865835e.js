"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8682],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=i,k=u["".concat(o,".").concat(g)]||u[g]||p[g]||l;return t?a.createElement(k,r(r({ref:n},d),{},{components:t})):a.createElement(k,r({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24365:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=t(87462),i=(t(67294),t(3905));const l={title:"ElasticSearch Engine",sidebar_position:11},r=void 0,s={unversionedId:"engine-usage/elasticsearch",id:"version-1.3.0/engine-usage/elasticsearch",isDocsHomePage:!1,title:"ElasticSearch Engine",description:"This article mainly introduces the configuration, deployment and use of ElasticSearch EngineConn in Linkis1.0.",source:"@site/versioned_docs/version-1.3.0/engine-usage/elasticsearch.md",sourceDirName:"engine-usage",slug:"/engine-usage/elasticsearch",permalink:"/docs/latest/engine-usage/elasticsearch",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.3.0/engine-usage/elasticsearch.md",tags:[],version:"1.3.0",sidebarPosition:11,frontMatter:{title:"ElasticSearch Engine",sidebar_position:11},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"Pipeline Engine",permalink:"/docs/latest/engine-usage/pipeline"},next:{title:"Presto Engine",permalink:"/docs/latest/engine-usage/presto"}},o=[{value:"1. Environment configuration before using the ElasticSearch EngineConn",id:"1-environment-configuration-before-using-the-elasticsearch-engineconn",children:[]},{value:"2. ElasticSearch engineConn configuration and deployment",id:"2-elasticsearch-engineconn-configuration-and-deployment",children:[{value:"2.1 ElasticSearch version selection and compilation",id:"21-elasticsearch-version-selection-and-compilation",children:[]},{value:"2.2 ElasticSearch EngineConn deployment and loading",id:"22-elasticsearch-engineconn-deployment-and-loading",children:[]},{value:"2.3 ElasticSearch EngineConn Labels",id:"23-elasticsearch-engineconn-labels",children:[]},{value:"2.4 ElasticSearch EngineConn configurations",id:"24-elasticsearch-engineconn-configurations",children:[]}]},{value:"3. The use of ElasticSearch EngineConn",id:"3-the-use-of-elasticsearch-engineconn",children:[{value:"3.1 Ready to operate",id:"31-ready-to-operate",children:[]},{value:"3.2 How to use Linkis SDK",id:"32-how-to-use-linkis-sdk",children:[]},{value:"3.2 How to use Linkis-cli",id:"32-how-to-use-linkis-cli",children:[]}]},{value:"4. ElasticSearch EngineConn user settings",id:"4-elasticsearch-engineconn-user-settings",children:[]}],c={toc:o};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article mainly introduces the configuration, deployment and use of ElasticSearch EngineConn in Linkis1.0."),(0,i.kt)("h2",{id:"1-environment-configuration-before-using-the-elasticsearch-engineconn"},"1. Environment configuration before using the ElasticSearch EngineConn"),(0,i.kt)("p",null,"If you want to use the ElasticSearch EngineConn on your server, you need to prepare the ElasticSearch connection information, such as the connection address, user name and password of the ElasticSearch service, etc."),(0,i.kt)("h2",{id:"2-elasticsearch-engineconn-configuration-and-deployment"},"2. ElasticSearch engineConn configuration and deployment"),(0,i.kt)("h3",{id:"21-elasticsearch-version-selection-and-compilation"},"2.1 ElasticSearch version selection and compilation"),(0,i.kt)("p",null,"Note: The Linkis project needs to be fully compiled before ElasticSearch EngineConn is built."),(0,i.kt)("p",null,"The published installation and deployment packages do not contain the engine plugin by default."),(0,i.kt)("p",null,"You can click ",(0,i.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis engine installation guide"),"  to deployment installation, or according to the following process, Manual compilation and deployment"),(0,i.kt)("p",null,"Compile ElasticSearch engine separately"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"${linkis_code_dir}linkis-engineconn-plugins/elasticsearch/\nmvn clean install\n")),(0,i.kt)("h3",{id:"22-elasticsearch-engineconn-deployment-and-loading"},"2.2 ElasticSearch EngineConn deployment and loading"),(0,i.kt)("p",null,"Upload the engine package compiled in Step 2.1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-engineconn-pluginsjdbc/target/out/elasticsearch\n")),(0,i.kt)("p",null,"to the engine directory on the server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,i.kt)("h3",{id:"23-elasticsearch-engineconn-labels"},"2.3 ElasticSearch EngineConn Labels"),(0,i.kt)("p",null,"Linkis1.x works with tags, so you need to insert data into our database as shown below."),(0,i.kt)("p",null,"The configuration of the management console is managed by engine labels. If a new engine needs to be configured, you need to modify the metadata of the corresponding table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key:  Insert the key and default values for the engine's configuration parameters\nlinkis_cg_manager_label\uff1aInsert engine label such as\uff1aelasticsearch-7.6.2\nlinkis_ps_configuration_category\uff1a Insert the directory association of the engine\nlinkis_ps_configuration_config_value\uff1a Insert the configuration that the engine needs to show\nlinkis_ps_configuration_key_engine_relation:Association between configuration items and engines\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @ENGINE_LABEL=\"elasticsearch-7.6.2\";\nSET @ENGINE_IDE=CONCAT('*-IDE,',@ENGINE_LABEL);\nSET @ENGINE_NAME=\"elasticsearch\";\n\n-- add es engine to IDE\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @ENGINE_IDE, 'OPTIONAL', 2, now(), now());\nselect @label_id := id from `linkis_cg_manager_label` where label_value = @ENGINE_IDE;\ninsert into `linkis_ps_configuration_category` (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- insert configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.cluster', '\u4f8b\u5982:http://127.0.0.1:9200', '\u8fde\u63a5\u5730\u5740', 'http://127.0.0.1:9200', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.datasource', '\u8fde\u63a5\u522b\u540d', '\u8fde\u63a5\u522b\u540d', 'hadoop', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.username', 'username', 'ES\u96c6\u7fa4\u7528\u6237\u540d', '\u65e0', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.password', 'password', 'ES\u96c6\u7fa4\u5bc6\u7801', '\u65e0', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.auth.cache', '\u5ba2\u6237\u7aef\u662f\u5426\u7f13\u5b58\u8ba4\u8bc1', '\u5ba2\u6237\u7aef\u662f\u5426\u7f13\u5b58\u8ba4\u8bc1', 'false', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.sniffer.enable', '\u5ba2\u6237\u7aef\u662f\u5426\u5f00\u542f sniffer', '\u5ba2\u6237\u7aef\u662f\u5426\u5f00\u542f sniffer', 'false', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.http.method', '\u8c03\u7528\u65b9\u5f0f', 'HTTP\u8bf7\u6c42\u65b9\u5f0f', 'GET', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.http.endpoint', '/_search', 'JSON \u811a\u672c\u8c03\u7528\u7684 Endpoint', '/_search', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.sql.endpoint', '/_sql', 'SQL \u811a\u672c\u8c03\u7528\u7684 Endpoint', '/_sql', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.sql.format', 'SQL \u811a\u672c\u8c03\u7528\u7684\u6a21\u677f\uff0c%s \u66ff\u6362\u6210 SQL \u4f5c\u4e3a\u8bf7\u6c42\u4f53\u8bf7\u6c42Es \u96c6\u7fa4', '\u8bf7\u6c42\u4f53', '{\"query\":\"%s\"}', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.headers.*', '\u5ba2\u6237\u7aef Headers \u914d\u7f6e', '\u5ba2\u6237\u7aef Headers \u914d\u7f6e', '\u65e0', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.engineconn.concurrent.limit', '\u5f15\u64ce\u6700\u5927\u5e76\u53d1', '\u5f15\u64ce\u6700\u5927\u5e76\u53d1', '100', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\n\n\n-- elasticsearch engine -*\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as config_key_id, label.id AS engine_type_label_id FROM `linkis_ps_configuration_config_key` config\nINNER JOIN `linkis_cg_manager_label` label ON config.engine_conn_type = @ENGINE_NAME and label_value = @ENGINE_IDE);\n\n-- elasticsearch engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select relation.config_key_id AS config_key_id, '' AS config_value, relation.engine_type_label_id AS config_label_id FROM `linkis_ps_configuration_key_engine_relation` relation\nINNER JOIN `linkis_cg_manager_label` label ON relation.engine_type_label_id = label.id AND label.label_value = @ENGINE_IDE);\n\n")),(0,i.kt)("h3",{id:"24-elasticsearch-engineconn-configurations"},"2.4 ElasticSearch EngineConn configurations"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"configurations"),(0,i.kt)("th",{parentName:"tr",align:null},"default"),(0,i.kt)("th",{parentName:"tr",align:null},"is necessary"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.es.cluster"),(0,i.kt)("td",{parentName:"tr",align:null},"127.0.0.1:9200"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"ElasticSearch cluster\uff0cseparate multiple nodes using commas")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.es.datasource"),(0,i.kt)("td",{parentName:"tr",align:null},"hadoop"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"ElasticSearch datasource")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.es.username"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"ElasticSearch cluster username")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.es.password"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"ElasticSearch cluster password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.es.auth.cache"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the client is cache authenticated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.es.sniffer.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the sniffer is enabled on the client")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.es.http.method"),(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Request methods")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.es.http.endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"/_search"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"the Endpoint in JSON Script")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.es.sql.endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"/_sql"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"the Endpoint in SQL  Script")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.es.sql.format"),(0,i.kt)("td",{parentName:"tr",align:null},'{"query":"%s"}'),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"the template of SQL script call , %s replaced with SQL as the body of the request request ElasticSearch cluster")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.es.headers.*"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Client Headers configuration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.engineconn.concurrent.limit"),(0,i.kt)("td",{parentName:"tr",align:null},"100"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum engine concurrency of ElasticSearch cluster")))),(0,i.kt)("h2",{id:"3-the-use-of-elasticsearch-engineconn"},"3. The use of ElasticSearch EngineConn"),(0,i.kt)("h3",{id:"31-ready-to-operate"},"3.1 Ready to operate"),(0,i.kt)("p",null,"You need to configure ElasticSearch connection information, including connection address information and user name and password (if needed)."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/22620332/182787195-8051bf25-1e1e-47e5-ad88-4896278857f2.png",alt:"ElasticSearch"}),"  "),(0,i.kt)("p",null,"Figure 3-1 ElasticSearch Configuration information"),(0,i.kt)("p",null,"You can also specify in the RuntimeMap of the submitted task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"linkis.es.cluster\nlinkis.es.datasource\nlinkis.es.username               \nlinkis.es.password\n")),(0,i.kt)("h3",{id:"32-how-to-use-linkis-sdk"},"3.2 How to use Linkis SDK"),(0,i.kt)("p",null,"Linkis provides a client method to call ElasticSearch tasks. The call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/user-guide/linkiscli-manual"},"JAVA SDK Manual"),"."),(0,i.kt)("p",null,"For the ElasticSearch task, you only need to change the EngineConnType and CodeType parameters in the Demo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "elasticsearch-7.6.2"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "elasticsearch"); // required codeType\n')),(0,i.kt)("h3",{id:"32-how-to-use-linkis-cli"},"3.2 How to use Linkis-cli"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"-codeType parameter description")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"essql\uff1aExecute ES engine tasks through SQL scripts"),(0,i.kt)("li",{parentName:"ul"},"esjson\uff1aExecute ES engine tasks through JSON scripts")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Using the sample")),(0,i.kt)("p",null,"After Linkis 1.0, you can submit tasks through cli. We only need to specify the corresponding EngineConn and CodeType tag types. The use of ElasticSearch is as follows."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example using mode essql")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note\uff1a")," To use the SQL script, you must install the SQL plugin for ElasticSearch service\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NLPchina/elasticsearch-sql#elasticsearch-762"},"https://github.com/NLPchina/elasticsearch-sql#elasticsearch-762")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},' sh ./bin/linkis-cli -submitUser hadoop -engineType elasticsearch-7.6.2 -codeType essql -code \'{"sql": "select * from kibana_sample_data_ecommerce limit 10\' -runtimeMap linkis.es.http.method=GET -runtimeMap linkis.es.http.endpoint=/_sql -runtimeMap linkis.es.datasource=hadoop  -runtimeMap linkis.es.cluster=127.0.0.1:9200\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example using mode esjson")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -submitUser hadoop -engineType elasticsearch-7.6.2 -codeType esjson -code \'{"query": {"match": {"order_id": "584677"}}}\' -runtimeMap linkis.es.http.method=GET -runtimeMap linkis.es.http.endpoint=/kibana_sample_data_ecommerce/_search -runtimeMap linkis.es.datasource=hadoop  -runtimeMap linkis.es.cluster=127.0.0.1:9200 \n')),(0,i.kt)("p",null,"Specific use can refer to\uff1a ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,i.kt)("h2",{id:"4-elasticsearch-engineconn-user-settings"},"4. ElasticSearch EngineConn user settings"),(0,i.kt)("p",null,"ElasticSearch user settings are mainly JDBC connection information, but it is recommended that users encrypt and manage this password and other information."))}d.isMDXComponent=!0}}]);