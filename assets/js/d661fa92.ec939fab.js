"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[40239],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return t?a.createElement(d,o(o({ref:n},m),{},{components:t})):a.createElement(d,o({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},29707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"Involve Prometheus",sidebar_position:5.1},o=void 0,s={unversionedId:"deployment/integrated/involve-prometheus",id:"version-1.3.2/deployment/integrated/involve-prometheus",title:"Involve Prometheus",description:"This article describes how to enable Prometheus to monitor all running Linkis services.",source:"@site/versioned_docs/version-1.3.2/deployment/integrated/involve-prometheus.md",sourceDirName:"deployment/integrated",slug:"/deployment/integrated/involve-prometheus",permalink:"/docs/latest/deployment/integrated/involve-prometheus",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.2/deployment/integrated/involve-prometheus.md",tags:[],version:"1.3.2",sidebarPosition:5.1,frontMatter:{title:"Involve Prometheus",sidebar_position:5.1},sidebar:"tutorialSidebar",previous:{title:"Involve SkyWaling",permalink:"/docs/latest/deployment/integrated/involve-skywalking"},next:{title:"Involve Knife4j",permalink:"/docs/latest/deployment/integrated/involve-knife4j"}},l={},p=[{value:"1. Introduction to Prometheus",id:"1-introduction-to-prometheus",level:2},{value:"1.1 What is Prometheus",id:"11-what-is-prometheus",level:3},{value:"1.2 Prometheus Architecture",id:"12-prometheus-architecture",level:3},{value:"2. How to Enable Prometheus",id:"2-how-to-enable-prometheus",level:2},{value:"2.1 Enable Prometheus when installing Linkis",id:"21-enable-prometheus-when-installing-linkis",level:3},{value:"2.2 Enable Prometheus after installation",id:"22-enable-prometheus-after-installation",level:3},{value:"2.3 Start Linkis",id:"23-start-linkis",level:3},{value:"3. Demo for Deploying the Prometheus, Alertmanager and Grafana",id:"3-demo-for-deploying-the-prometheus-alertmanager-and-grafana",level:2},{value:"4. Result display",id:"4-result-display",level:2}],m={toc:p},u="wrapper";function c(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,a.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article describes how to enable Prometheus to monitor all running Linkis services."),(0,r.kt)("h2",{id:"1-introduction-to-prometheus"},"1. Introduction to Prometheus"),(0,r.kt)("h3",{id:"11-what-is-prometheus"},"1.1 What is Prometheus"),(0,r.kt)("p",null,"Prometheus, a Cloud Native Computing Foundation project, is a systems and service monitoring system. It collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts when specified conditions are observed."),(0,r.kt)("p",null,"In the context of microservice, it provides the service discovery feature, enabling to find targets dynamically from service register center, like Eureka, Consul, etc, and pull the metrics from API endpoint over http protocol."),(0,r.kt)("h3",{id:"12-prometheus-architecture"},"1.2 Prometheus Architecture"),(0,r.kt)("p",null,"This diagram illustrates the architecture of Prometheus and some of its ecosystem components:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://prometheus.io/assets/architecture.png",alt:null})),(0,r.kt)("p",null,"Prometheus scrapes metrics from instrumented jobs, either directly or via an intermediary push gateway for short-lived jobs. It stores all scraped samples locally and runs rules over this data to either aggregate and record new time series from existing data or generate alerts. Grafana or other API consumers can be used to visualize the collected data."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(7296).Z,width:"1321",height:"688"})),(0,r.kt)("p",null,"In the context of Linkis, we will use Eureka (Service Discover)SD in Prometheus to retrieve scrape targets using the Eureka REST API. And Prometheus will periodically check the REST endpoint and create a target for every app instance."),(0,r.kt)("h2",{id:"2-how-to-enable-prometheus"},"2. How to Enable Prometheus"),(0,r.kt)("h3",{id:"21-enable-prometheus-when-installing-linkis"},"2.1 Enable Prometheus when installing Linkis"),(0,r.kt)("p",null,"Modify the configuration item ",(0,r.kt)("inlineCode",{parentName:"p"},"PROMETHEUS_ENABLE")," in linkis-env.sh of Linkis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export PROMETHEUS_ENABLE=true\n")),(0,r.kt)("p",null,"After running the ",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh"),", it's expected to see the configuration related to ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," is appended inside the following files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## application-linkis.yml  ##\n\neureka:\n  instance:\n    metadata-map:\n      prometheus.path: ${prometheus.path:${prometheus.endpoint}}\n...\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: refresh,info,health,metrics,prometheus\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## application-eureka.yml  ##\n\neureka:\n  instance:\n    metadata-map:\n      prometheus.path: ${prometheus.path:/actuator/prometheus}\n...\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: refresh,info,health,metrics,prometheus\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## linkis.properties ##\n...\nwds.linkis.prometheus.enable=true\nwds.linkis.server.user.restful.uri.pass.auth=/api/rest_j/v1/actuator/prometheus,\n...\n")),(0,r.kt)("p",null,"Then inside each computation engine, like spark, flink or hive, it's needed to add the same configuration ",(0,r.kt)("strong",{parentName:"p"},"manually"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## linkis-engineconn.properties  ##\n...\nwds.linkis.prometheus.enable=true\nwds.linkis.server.user.restful.uri.pass.auth=/api/rest_j/v1/actuator/prometheus,\n...\n")),(0,r.kt)("h3",{id:"22-enable-prometheus-after-installation"},"2.2 Enable Prometheus after installation"),(0,r.kt)("p",null,"Modify",(0,r.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/application-linkis.yml"),", add ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," as exposed endpoints."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## application-linkis.yml  ##\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        #Add prometheus\n        include: refresh,info,health,metrics,prometheus\n")),(0,r.kt)("p",null,"Modify",(0,r.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/application-eureka.yml"),", add ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," as exposed endpoints."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## application-eureka.yml  ##\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        #Add prometheus\n        include: refresh,info,health,metrics,prometheus\n")),(0,r.kt)("p",null,"Modify",(0,r.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/linkis.properties"),", remove the comment ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," before ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.enable")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## linkis.properties ##\n...\nwds.linkis.prometheus.enable=true\n...\n")),(0,r.kt)("h3",{id:"23-start-linkis"},"2.3 Start Linkis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash linkis-start-all.sh\n")),(0,r.kt)("p",null,"After start the services, it's expected to access the prometheus endpoint of each microservice in the Linkis, for example, http://linkishost:9103/api/rest_j/v1/actuator/prometheus."),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The prometheus endpoint of gateway/eureka don't include the prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"api/rest_j/v1"),", and the complete endpoint will be http://linkishost:9001/actuator/prometheus")),(0,r.kt)("h2",{id:"3-demo-for-deploying-the-prometheus-alertmanager-and-grafana"},"3. Demo for Deploying the Prometheus, Alertmanager and Grafana"),(0,r.kt)("p",null,"Usually the monitoring setup for a cloud native application will be deployed on kubernetes with service discovery and high availability (e.g. using a kubernetes operator like Prometheus Operator). To quickly prototype dashboards and experiment with different metric type options (e.g. histogram vs gauge) you may need a similar setup locally. This sector explains how to setup locally a Prometheus/Alert Manager and Grafana monitoring stack with Docker Compose."),(0,r.kt)("p",null,"First, lets define a general component of the stack as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An Alert Manager container that exposes its UI at 9093 and read its configuration from alertmanager.conf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Prometheus container that exposes its UI at 9090 and read its configuration from prometheus.yml and its list of alert rules from alert_rules.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Grafana container that exposes its UI at 3000, with list of metrics sources defined in grafana_datasources.yml and configuration in grafana_config.ini")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The following docker-compose.yml file summaries the configuration of all those components:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'## docker-compose.yml ##\nversion: "3"\nnetworks:\n  default:\n    external: true\n    name: my-network\nservices:\n  prometheus:\n    image: prom/prometheus:latest\n    container_name: prometheus\n    volumes:\n      - ./config/prometheus.yml:/etc/prometheus/prometheus.yml\n      - ./config/alertrule.yml:/etc/prometheus/alertrule.yml\n      - ./prometheus/prometheus_data:/prometheus\n    command:\n      - \'--config.file=/etc/prometheus/prometheus.yml\'\n    ports:\n      - "9090:9090"\n\n  alertmanager:\n    image: prom/alertmanager:latest\n    container_name: alertmanager\n    volumes:\n      - ./config/alertmanager.yml:/etc/alertmanager/alertmanager.yml\n    ports:\n      - "9093:9093"\n\n  grafana:\n    image: grafana/grafana:latest\n    container_name: grafana\n    environment:\n      - GF_SECURITY_ADMIN_PASSWORD=123456\n      - GF_USERS_ALLOW_SIGN_UP=false\n    volumes:\n      - ./grafana/provisioning/dashboards:/etc/grafana/provisioning/dashboards\n      - ./grafana/provisioning/datasources:/etc/grafana/provisioning/datasources\n      - ./grafana/grafana_data:/var/lib/grafana\n    ports:\n      - "3000:3000"\n')),(0,r.kt)("p",null,"Second, to define some alerts based on metrics in Prometheus, you can group then into an alert_rules.yml, so you could validate those alerts are properly triggered in your local setup before configuring them in the production instance.\nAs an example, the following configration convers the usual metrics used to monitor Linkis services."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a. Down instance"),(0,r.kt)("li",{parentName:"ul"},"b. High Cpu for each JVM instance (>80%)"),(0,r.kt)("li",{parentName:"ul"},"c. High Heap memory for each JVM instance (>80%)"),(0,r.kt)("li",{parentName:"ul"},"d. High NonHeap memory for each JVM instance (>80%)"),(0,r.kt)("li",{parentName:"ul"},"e. High Waiting thread for each JVM instance (100)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'## alertrule.yml ##\ngroups:\n  - name: LinkisAlert\n    rules:\n      - alert: LinkisNodeDown\n        expr: last_over_time(up{job="linkis", application=~"LINKISI.*", application!="LINKIS-CG-ENGINECONN"}[1m])== 0\n        for: 15s\n        labels:\n          severity: critical\n          service: Linkis\n          instance: "{{ $labels.instance }}"\n        annotations:\n          summary: "instance: {{ $labels.instance }} down"\n          description: "Linkis instance(s) is/are down in last 1m"\n          value: "{{ $value }}"\n\n      - alert: LinkisNodeCpuHigh\n        expr: system_cpu_usage{job="linkis", application=~"LINKIS.*"} >= 0.8\n        for: 1m\n        labels:\n          severity: warning\n          service: Linkis\n          instance: "{{ $labels.instance }}"\n        annotations:\n          summary: "instance: {{ $labels.instance }} cpu overload"\n          description: "CPU usage is over 80% for over 1min"\n          value: "{{ $value }}"\n\n      - alert: LinkisNodeHeapMemoryHigh\n        expr: sum(jvm_memory_used_bytes{job="linkis", application=~"LINKIS.*", area="heap"}) by(instance) *100/sum(jvm_memory_max_bytes{job="linkis", application=~"LINKIS.*", area="heap"}) by(instance) >= 50\n        for: 1m\n        labels:\n          severity: warning\n          service: Linkis\n          instance: "{{ $labels.instance }}"\n        annotations:\n          summary: "instance: {{ $labels.instance }} memory(heap) overload"\n          description: "Memory usage(heap) is over 80% for over 1min"\n          value: "{{ $value }}"\n\n      - alert: LinkisNodeNonHeapMemoryHigh\n        expr: sum(jvm_memory_used_bytes{job="linkis", application=~"LINKIS.*", area="nonheap"}) by(instance) *100/sum(jvm_memory_max_bytes{job="linkis", application=~"LINKIS.*", area="nonheap"}) by(instance) >= 60\n        for: 1m\n        labels:\n          severity: warning\n          service: Linkis\n          instance: "{{ $labels.instance }}"\n        annotations:\n          summary: "instance: {{ $labels.instance }} memory(nonheap) overload"\n          description: "Memory usage(nonheap) is over 80% for over 1min"\n          value: "{{ $value }}"\n\n      - alert: LinkisWaitingThreadHigh\n        expr: jvm_threads_states_threads{job="linkis", application=~"LINKIS.*", state="waiting"} >= 100\n        for: 1m\n        labels:\n          severity: warning\n          service: Linkis\n          instance: "{{ $labels.instance }}"\n        annotations:\n          summary: "instance: {{ $labels.instance }} waiting threads is high"\n          description: "waiting threads is over 100 for over 1min"\n          value: "{{ $value }}"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Since once the service instance is shutdown, it will not be one of the target of Prometheus Eureka SD, and ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," metrics will not return any data after a short time. Thus we will collect if the ",(0,r.kt)("inlineCode",{parentName:"p"},"up=0")," in the last one minute to determine whether the service is alive or not. "),(0,r.kt)("p",null,"Third, and most importantly define Prometheus configuration in prometheus.yml file. This will defines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the global settings like scrapping interval and rules evaluation interval"),(0,r.kt)("li",{parentName:"ul"},"the connection information to reach AlertManager and the rules to be evaluated"),(0,r.kt)("li",{parentName:"ul"},"the connection information to application metrics endpoint.\nThis is an example configration file for Linkis:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## prometheus.yml ##\n# my global config\nglobal:\n  scrape_interval:     30s # By default, scrape targets every 15 seconds.\n  evaluation_interval: 30s # By default, scrape targets every 15 seconds.\nalerting:\n  alertmanagers:\n    - static_configs:\n        - targets: ['alertmanager:9093']\n# Load and evaluate rules in this file every 'evaluation_interval' seconds.\nrule_files:\n  - \"alertrule.yml\"\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  - job_name: 'prometheus'\n    static_configs:\n      - targets: ['localhost:9090']\n  - job_name: linkis\n    eureka_sd_configs:\n      # the endpoint of your eureka instance\n      - server: {{linkis-host}}:20303/eureka\n    relabel_configs:\n      - source_labels: [__meta_eureka_app_name]\n        target_label: application\n      - source_labels: [__meta_eureka_app_instance_metadata_prometheus_path]\n        action: replace\n        target_label: __metrics_path__\n        regex: (.+)\n")),(0,r.kt)("p",null,"Forth, the following configuration defines how alerts will be sent to external webhook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## alertmanager.yml ##\nglobal:\n  resolve_timeout: 5m\n\nroute:\n  receiver: 'webhook'\n  group_by: ['alertname']\n   \n  # How long to wait to buffer alerts of the same group before sending a notification initially.\n  group_wait: 1m\n  # How long to wait before sending an alert that has been added to a group for which there has already been a notification.\n  group_interval: 5m\n  # How long to wait before re-sending a given alert that has already been sent in a notification.\n  repeat_interval: 12h\n\nreceivers:\n- name: 'webhook'\n  webhook_configs:\n  - send_resolved: true\n    url: {{your-webhook-url}}\n\n")),(0,r.kt)("p",null,"Finally, after defining all the configuration file as well as the docker compose file we can start the monitoring stack with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up")),(0,r.kt)("h2",{id:"4-result-display"},"4. Result display"),(0,r.kt)("p",null,"On Prometheus page, it's expected to see all the Linkis service instances as shown below:\n",(0,r.kt)("img",{src:t(57553).Z,width:"2156",height:"1324"})),(0,r.kt)("p",null,"When the Grafana is accessible, you need to import the prometheus as datasource in Grafana, and import the dashboard template with id 11378, which is normally used for springboot service(2.1+).\nThen you can view one living dashboard of Linkis there."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(58522).Z,width:"1000",height:"540"})),(0,r.kt)("p",null,"You can also try to integrate the Prometheus alter manager with your own webhook, where you can see if the alter message is fired."))}c.isMDXComponent=!0},58522:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/grafana_screenshot-dbea39db333224610c66dcd0582ac709.jpg"},7296:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/prometheus_architecture-b8e59c4fd7626cf1ec1fb8dfc261d7e6.jpg"},57553:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/prometheus_screenshot-fbd3f3d69fff7a50160471e7e893c1ae.jpg"}}]);