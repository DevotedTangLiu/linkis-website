"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1362],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var u=2;u<s;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5619:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],r={title:"JAVA SDK Manual",sidebar_position:2},l=void 0,u={unversionedId:"user_guide/sdk_manual",id:"user_guide/sdk_manual",isDocsHomePage:!1,title:"JAVA SDK Manual",description:"Linkis provides a convenient interface for calling JAVA and SCALA. It can be used only by introducing the linkis-computation-client module. After 1.0, the method of submitting with Label is added. The following will introduce both ways that compatible with 0.X and newly added in 1.0.",source:"@site/docs/user_guide/sdk_manual.md",sourceDirName:"user_guide",slug:"/user_guide/sdk_manual",permalink:"/docs/1.0.3/user_guide/sdk_manual",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/user_guide/sdk_manual.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"JAVA SDK Manual",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to Use",permalink:"/docs/1.0.3/user_guide/how_to_use"},next:{title:"Linkis-Cli Manual",permalink:"/docs/1.0.3/user_guide/linkiscli_manual"}},c=[{value:"1. Introduce dependent modules",id:"1-introduce-dependent-modules",children:[]},{value:"2. Compatible with 0.X Execute method submission",id:"2-compatible-with-0x-execute-method-submission",children:[{value:"2.1 Java test code",id:"21-java-test-code",children:[]},{value:"3. Scala test code:",id:"3-scala-test-code",children:[]}]},{value:"3. Linkis1.0 new submit interface with Label support",id:"3-linkis10-new-submit-interface-with-label-support",children:[{value:"3.1 Java Test Class",id:"31-java-test-class",children:[]},{value:"3.2 Scala Test Class",id:"32-scala-test-class",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Linkis provides a convenient interface for calling JAVA and SCALA. It can be used only by introducing the linkis-computation-client module. After 1.0, the method of submitting with Label is added. The following will introduce both ways that compatible with 0.X and newly added in 1.0.")),(0,s.kt)("h2",{id:"1-introduce-dependent-modules"},"1. Introduce dependent modules"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<dependency>\n   <groupId>org.apache.linkis</groupId>\n   <artifactId>linkis-computation-client</artifactId>\n   <version>${linkis.version}</version>\n</dependency>\nSuch as:\n<dependency>\n   <groupId>org.apache.linkis</groupId>\n   <artifactId>linkis-computation-client</artifactId>\n   <version>1.0.0-RC1</version>\n</dependency>\n")),(0,s.kt)("h2",{id:"2-compatible-with-0x-execute-method-submission"},"2. Compatible with 0.X Execute method submission"),(0,s.kt)("h3",{id:"21-java-test-code"},"2.1 Java test code"),(0,s.kt)("p",null,"Create the Java test class UJESClientImplTestJ. Refer to the comments to understand the purposes of those interfaces:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.client.test;\n\nimport org.apache.linkis.common.utils.Utils;\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy;\nimport org.apache.linkis.httpclient.dws.authentication.TokenAuthenticationStrategy;\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfig;\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder;\nimport org.apache.linkis.ujes.client.UJESClient;\nimport org.apache.linkis.ujes.client.UJESClientImpl;\nimport org.apache.linkis.ujes.client.request.JobExecuteAction;\nimport org.apache.linkis.ujes.client.request.ResultSetAction;\nimport org.apache.linkis.ujes.client.response.JobExecuteResult;\nimport org.apache.linkis.ujes.client.response.JobInfoResult;\nimport org.apache.linkis.ujes.client.response.JobProgressResult;\nimport org.apache.commons.io.IOUtils;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.TimeUnit;\n\npublic class LinkisClientTest {\n\n    public static void main(String[] args){\n\n        String user = "hadoop";\n        String executeCode = "show databases;";\n\n        // 1. Configure DWSClientBuilder, get a DWSClientConfig through DWSClientBuilder\n        DWSClientConfig clientConfig = ((DWSClientConfigBuilder) (DWSClientConfigBuilder.newBuilder()\n                .addServerUrl("http://${ip}:${port}")  //Specify ServerUrl, the address of the linkis gateway, such as http://{ip}:{port}\n                .connectionTimeout(30000)   //connectionTimeOut Client connection timeout\n                .discoveryEnabled(false).discoveryFrequency(1, TimeUnit.MINUTES)  //Whether to enable registration discovery, if enabled, the newly launched Gateway will be automatically discovered\n                .loadbalancerEnabled(true)  // Whether to enable load balancing, if registration discovery is not enabled, load balancing is meaningless\n                .maxConnectionSize(5)   //Specify the maximum number of connections, that is, the maximum number of concurrent\n                .retryEnabled(false).readTimeout(30000)   //Execution failed, whether to allow retry\n                .setAuthenticationStrategy(new StaticAuthenticationStrategy())   //AuthenticationStrategy Linkis login authentication method\n                .setAuthTokenKey("${username}").setAuthTokenValue("${password}")))  //Authentication key, generally the user name; authentication value, generally the password corresponding to the user name\n                .setDWSVersion("v1").build();  //The version of the linkis backend protocol, the current version is v1\n\n        // 2. Obtain a UJESClient through DWSClientConfig\n        UJESClient client = new UJESClientImpl(clientConfig);\n\n        try {\n            // 3. Start code execution\n            System.out.println("user : " + user + ", code : [" + executeCode + "]");\n            Map<String, Object> startupMap = new HashMap<String, Object>();\n            startupMap.put("wds.linkis.yarnqueue", "default"); // A variety of startup parameters can be stored in startupMap, see linkis management console configuration\n            JobExecuteResult jobExecuteResult = client.execute(JobExecuteAction.builder()\n                    .setCreator("linkisClient-Test")  //creator\uff0cthe system name of the client requesting linkis, used for system-level isolation\n                    .addExecuteCode(executeCode)   //ExecutionCode Requested code\n                    .setEngineType((JobExecuteAction.EngineType) JobExecuteAction.EngineType$.MODULE$.HIVE()) // The execution engine type of the linkis that you want to request, such as Spark hive, etc.\n                    .setUser(user)   //User\uff0cRequesting users; used for user-level multi-tenant isolation\n                    .setStartupParams(startupMap)\n                    .build());\n            System.out.println("execId: " + jobExecuteResult.getExecID() + ", taskId: " + jobExecuteResult.taskID());\n\n            // 4. Get the execution status of the script\n            JobInfoResult jobInfoResult = client.getJobInfo(jobExecuteResult);\n            int sleepTimeMills = 1000;\n            while(!jobInfoResult.isCompleted()) {\n                // 5. Get the execution progress of the script\n                JobProgressResult progress = client.progress(jobExecuteResult);\n                Utils.sleepQuietly(sleepTimeMills);\n                jobInfoResult = client.getJobInfo(jobExecuteResult);\n            }\n\n            // 6. Get the job information of the script\n            JobInfoResult jobInfo = client.getJobInfo(jobExecuteResult);\n            // 7. Get a list of result sets (if the user submits multiple SQL at a time, multiple result sets will be generated)\n            String resultSet = jobInfo.getResultSetList(client)[0];\n            // 8. Get a specific result set through a result set information\n            Object fileContents = client.resultSet(ResultSetAction.builder().setPath(resultSet).setUser(jobExecuteResult.getUser()).build()).getFileContent();\n            System.out.println("fileContents: " + fileContents);\n\n        } catch (Exception e) {\n            e.printStackTrace();\n            IOUtils.closeQuietly(client);\n        }\n        IOUtils.closeQuietly(client);\n    }\n}\n')),(0,s.kt)("p",null,"Run the above code to interact with Linkis"),(0,s.kt)("h3",{id:"3-scala-test-code"},"3. Scala test code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'package org.apache.linkis.client.test\n\nimport java.util.concurrent.TimeUnit\n\nimport org.apache.linkis.common.utils.Utils\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport org.apache.linkis.ujes.client.UJESClient\nimport org.apache.linkis.ujes.client.request.JobExecuteAction.EngineType\nimport org.apache.linkis.ujes.client.request.{JobExecuteAction, ResultSetAction}\nimport org.apache.commons.io.IOUtils\n\nobject LinkisClientImplTest extends App {\n\n  var executeCode = "show databases;"\n  var user = "hadoop"\n\n  // 1. Configure DWSClientBuilder, get a DWSClientConfig through DWSClientBuilder\n  val clientConfig = DWSClientConfigBuilder.newBuilder()\n    .addServerUrl("http://${ip}:${port}") //Specify ServerUrl, the address of the Linkis server-side gateway, such as http://{ip}:{port}\n    .connectionTimeout(30000) //connectionTimeOut client connection timeout\n    .discoveryEnabled(false).discoveryFrequency(1, TimeUnit.MINUTES) //Whether to enable registration discovery, if enabled, the newly launched Gateway will be automatically discovered\n    .loadbalancerEnabled(true) // Whether to enable load balancing, if registration discovery is not enabled, load balancing is meaningless\n    .maxConnectionSize(5) //Specify the maximum number of connections, that is, the maximum number of concurrent\n    .retryEnabled(false).readTimeout(30000) //execution failed, whether to allow retry\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authentication method\n    .setAuthTokenKey("${username}").setAuthTokenValue("${password}") //Authentication key, generally the user name; authentication value, generally the password corresponding to the user name\n    .setDWSVersion("v1").build() //Linkis backend protocol version, the current version is v1\n\n  // 2. Get a UJESClient through DWSClientConfig\n  val client = UJESClient(clientConfig)\n  \n  try {\n    // 3. Start code execution\n    println("user: "+ user + ", code: [" + executeCode + "]")\n    val startupMap = new java.util.HashMap[String, Any]()\n    startupMap.put("wds.linkis.yarnqueue", "default") //Startup parameter configuration\n    val jobExecuteResult = client.execute(JobExecuteAction.builder()\n      .setCreator("LinkisClient-Test") //creator, requesting the system name of the Linkis client, used for system-level isolation\n      .addExecuteCode(executeCode) //ExecutionCode The code to be executed\n      .setEngineType(EngineType.SPARK) // The execution engine type of Linkis that you want to request, such as Spark hive, etc.\n      .setStartupParams(startupMap)\n      .setUser(user).build()) //User, request user; used for user-level multi-tenant isolation\n    println("execId: "+ jobExecuteResult.getExecID + ", taskId:" + jobExecuteResult.taskID)\n    \n    // 4. Get the execution status of the script\n    var jobInfoResult = client.getJobInfo(jobExecuteResult)\n    val sleepTimeMills: Int = 1000\n    while (!jobInfoResult.isCompleted) {\n      // 5. Get the execution progress of the script\n      val progress = client.progress(jobExecuteResult)\n      val progressInfo = if (progress.getProgressInfo != null) progress.getProgressInfo.toList else List.empty\n      println("progress: "+ progress.getProgress + ", progressInfo:" + progressInfo)\n      Utils.sleepQuietly(sleepTimeMills)\n      jobInfoResult = client.getJobInfo(jobExecuteResult)\n    }\n    if (!jobInfoResult.isSucceed) {\n      println("Failed to execute job: "+ jobInfoResult.getMessage)\n      throw new Exception(jobInfoResult.getMessage)\n    }\n\n    // 6. Get the job information of the script\n    val jobInfo = client.getJobInfo(jobExecuteResult)\n    // 7. Get the list of result sets (if the user submits multiple SQL at a time, multiple result sets will be generated)\n    val resultSetList = jobInfoResult.getResultSetList(client)\n    println("All result set list:")\n    resultSetList.foreach(println)\n    val oneResultSet = jobInfo.getResultSetList(client).head\n    // 8. Get a specific result set through a result set information\n    val fileContents = client.resultSet(ResultSetAction.builder().setPath(oneResultSet).setUser(jobExecuteResult.getUser).build()).getFileContent\n    println("First fileContents: ")\n    println(fileContents)\n  } catch {\n    case e: Exception => {\n      e.printStackTrace()\n    }\n  }\n  IOUtils.closeQuietly(client)\n}\n')),(0,s.kt)("h2",{id:"3-linkis10-new-submit-interface-with-label-support"},"3. Linkis1.0 new submit interface with Label support"),(0,s.kt)("p",null,"Linkis1.0 adds the client.submit method, which is used to adapt with the new task execution interface of 1.0, and supports the input of Label and other parameters"),(0,s.kt)("h3",{id:"31-java-test-class"},"3.1 Java Test Class"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.client.test;\n\nimport org.apache.linkis.common.utils.Utils;\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy;\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfig;\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder;\nimport org.apache.linkis.manager.label.constant.LabelKeyConstant;\nimport org.apache.linkis.protocol.constants.TaskConstant;\nimport org.apache.linkis.ujes.client.UJESClient;\nimport org.apache.linkis.ujes.client.UJESClientImpl;\nimport org.apache.linkis.ujes.client.request.JobSubmitAction;\nimport org.apache.linkis.ujes.client.request.ResultSetAction;\nimport org.apache.linkis.ujes.client.response.JobExecuteResult;\nimport org.apache.linkis.ujes.client.response.JobInfoResult;\nimport org.apache.linkis.ujes.client.response.JobProgressResult;\nimport org.apache.commons.io.IOUtils;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.TimeUnit;\n\npublic class JavaClientTest {\n\n    public static void main(String[] args){\n\n        String user = "hadoop";\n        String executeCode = "show tables";\n\n        // 1. Configure ClientBuilder and get ClientConfig\n        DWSClientConfig clientConfig = ((DWSClientConfigBuilder) (DWSClientConfigBuilder.newBuilder()\n                .addServerUrl("http://${ip}:${port}") //Specify ServerUrl, the address of the linkis server-side gateway, such as http://{ip}:{port}\n                .connectionTimeout(30000) //connectionTimeOut client connection timeout\n                .discoveryEnabled(false).discoveryFrequency(1, TimeUnit.MINUTES) //Whether to enable registration discovery, if enabled, the newly launched Gateway will be automatically discovered\n                .loadbalancerEnabled(true) // Whether to enable load balancing, if registration discovery is not enabled, load balancing is meaningless\n                .maxConnectionSize(5) //Specify the maximum number of connections, that is, the maximum number of concurrent\n                .retryEnabled(false).readTimeout(30000) //execution failed, whether to allow retry\n                .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authentication method\n                .setAuthTokenKey("${username}").setAuthTokenValue("${password}"))) //Authentication key, generally the user name; authentication value, generally the password corresponding to the user name\n                .setDWSVersion("v1").build(); //Linkis background protocol version, the current version is v1\n\n        // 2. Get a UJESClient through DWSClientConfig\n        UJESClient client = new UJESClientImpl(clientConfig);\n\n        try {\n            // 3. Start code execution\n            System.out.println("user: "+ user + ", code: [" + executeCode + "]");\n            Map<String, Object> startupMap = new HashMap<String, Object>();\n            // A variety of startup parameters can be stored in startupMap, see linkis management console configuration\n            startupMap.put("wds.linkis.yarnqueue", "q02");\n            //Specify Label\n            Map<String, Object> labels = new HashMap<String, Object>();\n            //Add the label that this execution depends on: EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel\n            labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "hive-1.2.1");\n            labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");\n            labels.put(LabelKeyConstant.ENGINE_RUN_TYPE_KEY, "hql");\n            //Specify source\n            Map<String, Object> source = new HashMap<String, Object>();\n            source.put(TaskConstant.SCRIPTPATH, "LinkisClient-test");\n            JobExecuteResult jobExecuteResult = client.submit( JobSubmitAction.builder()\n                    .addExecuteCode(executeCode)\n                    .setStartupParams(startupMap)\n                    .setUser(user)//Job submit user\n                    .addExecuteUser(user)//The actual execution user\n                    .setLabels(labels)\n                    .setSource(source)\n                    .build()\n            );\n            System.out.println("execId: "+ jobExecuteResult.getExecID() + ", taskId:" + jobExecuteResult.taskID());\n\n            // 4. Get the execution status of the script\n            JobInfoResult jobInfoResult = client.getJobInfo(jobExecuteResult);\n            int sleepTimeMills = 1000;\n            while(!jobInfoResult.isCompleted()) {\n                // 5. Get the execution progress of the script\n                JobProgressResult progress = client.progress(jobExecuteResult);\n                Utils.sleepQuietly(sleepTimeMills);\n                jobInfoResult = client.getJobInfo(jobExecuteResult);\n            }\n\n            // 6. Get the job information of the script\n            JobInfoResult jobInfo = client.getJobInfo(jobExecuteResult);\n            // 7. Get the list of result sets (if the user submits multiple SQL at a time, multiple result sets will be generated)\n            String resultSet = jobInfo.getResultSetList(client)[0];\n            // 8. Get a specific result set through a result set information\n            Object fileContents = client.resultSet(ResultSetAction.builder().setPath(resultSet).setUser(jobExecuteResult.getUser()).build()).getFileContent();\n            System.out.println("fileContents: "+ fileContents);\n\n        } catch (Exception e) {\n            e.printStackTrace();\n            IOUtils.closeQuietly(client);\n        }\n        IOUtils.closeQuietly(client);\n    }\n}\n\n')),(0,s.kt)("h3",{id:"32-scala-test-class"},"3.2 Scala Test Class"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'package org.apache.linkis.client.test\n\nimport java.util\nimport java.util.concurrent.TimeUnit\n\nimport org.apache.linkis.common.utils.Utils\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport org.apache.linkis.manager.label.constant.LabelKeyConstant\nimport org.apache.linkis.protocol.constants.TaskConstant\nimport org.apache.linkis.ujes.client.UJESClient\nimport org.apache.linkis.ujes.client.request.{JobSubmitAction, ResultSetAction}\nimport org.apache.commons.io.IOUtils\n\n\nobject ScalaClientTest {\n\n  def main(args: Array[String]): Unit = {\n    val executeCode = "show tables"\n    val user = "hadoop"\n\n    // 1. Configure DWSClientBuilder, get a DWSClientConfig through DWSClientBuilder\n    val clientConfig = DWSClientConfigBuilder.newBuilder()\n      .addServerUrl("http://${ip}:${port}") //Specify ServerUrl, the address of the Linkis server-side gateway, such as http://{ip}:{port}\n      .connectionTimeout(30000) //connectionTimeOut client connection timeout\n      .discoveryEnabled(false).discoveryFrequency(1, TimeUnit.MINUTES) //Whether to enable registration discovery, if enabled, the newly launched Gateway will be automatically discovered\n      .loadbalancerEnabled(true) // Whether to enable load balancing, if registration discovery is not enabled, load balancing is meaningless\n      .maxConnectionSize(5) //Specify the maximum number of connections, that is, the maximum number of concurrent\n      .retryEnabled(false).readTimeout(30000) //execution failed, whether to allow retry\n      .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authentication method\n      .setAuthTokenKey("${username}").setAuthTokenValue("${password}") //Authentication key, generally the user name; authentication value, generally the password corresponding to the user name\n      .setDWSVersion("v1").build() //Linkis backend protocol version, the current version is v1\n\n    // 2. Get a UJESClient through DWSClientConfig\n    val client = UJESClient(clientConfig)\n\n    try {\n      // 3. Start code execution\n      println("user: "+ user + ", code: [" + executeCode + "]")\n      val startupMap = new java.util.HashMap[String, Any]()\n      startupMap.put("wds.linkis.yarnqueue", "q02") //Startup parameter configuration\n      //Specify Label\n      val labels: util.Map[String, Any] = new util.HashMap[String, Any]\n      //Add the label that this execution depends on, such as engineLabel\n      labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "hive-1.2.1")\n      labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE")\n      labels.put(LabelKeyConstant.ENGINE_RUN_TYPE_KEY, "hql")\n      //Specify source\n      val source: util.Map[String, Any] = new util.HashMap[String, Any]\n      source.put(TaskConstant.SCRIPTPATH, "LinkisClient-test")\n      val jobExecuteResult = client.submit(JobSubmitAction.builder\n          .addExecuteCode(executeCode)\n          .setStartupParams(startupMap)\n          .setUser(user) //Job submit user\n          .addExecuteUser(user) //The actual execution user\n          .setLabels(labels)\n          .setSource(source)\n          .build) //User, requesting user; used for user-level multi-tenant isolation\n      println("execId: "+ jobExecuteResult.getExecID + ", taskId:" + jobExecuteResult.taskID)\n\n      // 4. Get the execution status of the script\n      var jobInfoResult = client.getJobInfo(jobExecuteResult)\n      val sleepTimeMills: Int = 1000\n      while (!jobInfoResult.isCompleted) {\n        // 5. Get the execution progress of the script\n        val progress = client.progress(jobExecuteResult)\n        val progressInfo = if (progress.getProgressInfo != null) progress.getProgressInfo.toList else List.empty\n        println("progress: "+ progress.getProgress + ", progressInfo:" + progressInfo)\n        Utils.sleepQuietly(sleepTimeMills)\n        jobInfoResult = client.getJobInfo(jobExecuteResult)\n      }\n      if (!jobInfoResult.isSucceed) {\n        println("Failed to execute job: "+ jobInfoResult.getMessage)\n        throw new Exception(jobInfoResult.getMessage)\n      }\n\n      // 6. Get the job information of the script\n      val jobInfo = client.getJobInfo(jobExecuteResult)\n      // 7. Get the list of result sets (if the user submits multiple SQL at a time, multiple result sets will be generated)\n      val resultSetList = jobInfoResult.getResultSetList(client)\n      println("All result set list:")\n      resultSetList.foreach(println)\n      val oneResultSet = jobInfo.getResultSetList(client).head\n      // 8. Get a specific result set through a result set information\n      val fileContents = client.resultSet(ResultSetAction.builder().setPath(oneResultSet).setUser(jobExecuteResult.getUser).build()).getFileContent\n      println("First fileContents: ")\n      println(fileContents)\n    } catch {\n      case e: Exception => {\n        e.printStackTrace()\n      }\n    }\n    IOUtils.closeQuietly(client)\n  }\n\n}\n\n')))}d.isMDXComponent=!0}}]);