"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3764],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return t?r.createElement(h,l(l({ref:n},u),{},{components:t})):r.createElement(h,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45843:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],o={description:"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API"},s="Module",d={unversionedId:"core-concepts/modules",id:"core-concepts/modules",title:"Module",description:"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/modules.md",sourceDirName:"core-concepts",slug:"/core-concepts/modules",permalink:"/de/docs/next/core-concepts/modules",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/modules.md",tags:[],version:"current",frontMatter:{description:"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API"},sidebar:"main",previous:{title:"Assets",permalink:"/de/docs/next/core-concepts/assets"},next:{title:"Server & Client Lebenszyklus",permalink:"/de/docs/next/core-concepts/server-and-client-lifecycle"}},u=[{value:"Liste der unterst\xfctzten Module",id:"liste-der-unterst\xfctzten-module",children:[{value:"LuaSQL-MySQL",id:"luasql-mysql",children:[{value:"Installation &amp; wird heruntergeladen",id:"installation--wird-heruntergeladen",children:[],level:4},{value:"Verwendungsbeispiel",id:"verwendungsbeispiel",children:[],level:4}],level:3}],level:2},{value:"Creating your own C module",id:"creating-your-own-c-module",children:[{value:"First Steps",id:"first-steps",children:[],level:4},{value:"Understanding the example",id:"understanding-the-example",children:[],level:3},{value:"Compiling your C module",id:"compiling-your-c-module",children:[],level:3},{value:"Using your C module",id:"using-your-c-module",children:[],level:3}],level:2}],c={toc:u};function p(e){var n=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"module"},"Module"),(0,i.kt)("p",null,"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API"),(0,i.kt)("p",null,"Module erlauben es Ihnen, die Funktionalit\xe4t der nanos world scripting API auf der Serverseite zu erweitern. Derzeit werden nur C-Module unterst\xfctzt."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Beachten Sie, dass dieser Teil der Skripting-API derzeit in Arbeit ist und sich jederzeit \xe4ndern kann."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Eine Anleitung zum Erstellen Ihres eigenen Moduls folgt ","(","soonTM",")","."))),(0,i.kt)("h2",{id:"liste-der-unterst\xfctzten-module"},"Liste der unterst\xfctzten Module"),(0,i.kt)("h3",{id:"luasql-mysql"},"LuaSQL-MySQL"),(0,i.kt)("p",null,"LuaSQL-MySQL ist eine einfache Schnittstelle zur Kommunikation mit einem MySQL- oder MariaDB-Server. Wir stellen eine bereits vorkompilierte Version dieses Moduls zur Verf\xfcgung, die bereits verwendet werden kann."),(0,i.kt)("p",null,"Documentation of LuaSQL: ",(0,i.kt)("a",{parentName:"p",href:"http://keplerproject.github.io/luasql/"},"http://keplerproject.github.io/luasql/")),(0,i.kt)("h4",{id:"installation--wird-heruntergeladen"},"Installation & wird heruntergeladen"),(0,i.kt)("p",null,"Laden Sie Ihre Plattform-Bibliothek herunter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/luasql-mysql/releases/latest/download/mysql_windows.zip"},"mysql_windows.zip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/luasql-mysql/releases/latest/download/mysql_linux.zip"},"mysql_linux.zip"))),(0,i.kt)("p",null,"Entpacken Sie es in Ihren ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerRoot/Module/")," Ordner:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(378).Z,width:"708",height:"192"})),(0,i.kt)("h4",{id:"verwendungsbeispiel"},"Verwendungsbeispiel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local luasql = require("luasql.mysql")\nlocal mysql = luasql. ysql()\nlocal connection = mysql:connect("database", "username", "password", "localhost", 3306)\n\nif not connection or not connection:ping() then\n    Package. og("Verbindung fehlgeschlagen")\nelse\n    connection:execute([[\n        CREATE TABLE hello_world(\n            message varchar(50)\n        );\n    ]])\n\n    Verbindung:execute(string. ormat([[\n        INSERT INTO hello_world VALUES (\'%s\');\n    ]], connection:escape("Hallo nanos. orld")))\n    -- (Du solltest immer Escapes f\xfcr Benutzereingaben verwenden, um eine SQL-Injektion zu verhindern!)\n\n    local cursor = connection:execute("SELECT * FROM hello_world")\n    local row = cursor:fetch({}, "a")\n\n    Package.Log("Message: " .. tostring(row.message))\n    -- Ausgabe: "[Script]   Nachricht: Hallo nanos.world" an der Konsole\nenden\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Tipp:")," Alle Abfrageparameter immer mit ",(0,i.kt)("inlineCode",{parentName:"p"},":escape")," Funktion maskieren!"))),(0,i.kt)("h2",{id:"creating-your-own-c-module"},"Creating your own C module"),(0,i.kt)("p",null,"It is also possible to you create your own C/C++ module and call it's functions from nanos world."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is an advanced procedure so instabilities and even crashes may occur."))),(0,i.kt)("p",null,"To create your own module, fist make sure you have ",(0,i.kt)("strong",{parentName:"p"},"Visual Studio")," installed with ",(0,i.kt)("strong",{parentName:"p"},"Desktop development with C++")," (and ",(0,i.kt)("strong",{parentName:"p"},"CMake"),") or any other C compiler on Linux."),(0,i.kt)("h4",{id:"first-steps"},"First Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Then, clone our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/module-example"},"example module")," in your computer to get start with it."),(0,i.kt)("li",{parentName:"ol"},"After cloning, you will need to download it's submodules with ",(0,i.kt)("inlineCode",{parentName:"li"},"git submodule update --init --recursive")," - this will download the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nanos-world/module-sdk/"},"module-sdk")," as a git submodule into deps/ folder automatically.")),(0,i.kt)("h3",{id:"understanding-the-example"},"Understanding the example"),(0,i.kt)("p",null,"The important file is under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/example.cpp"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"reference",reference:!0},"https://github.com/nanos-world-modules/module-example/blob/main/src/example.cpp\n")),(0,i.kt)("h3",{id:"compiling-your-c-module"},"Compiling your C module"),(0,i.kt)("p",null,"To compile the example, follow the steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a folder called ",(0,i.kt)("inlineCode",{parentName:"li"},"build/"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"mkdir build"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter the build folder: ",(0,i.kt)("inlineCode",{parentName:"li"},"cd build"),"."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"cmake .."),"."),(0,i.kt)("li",{parentName:"ol"},"Build it with ",(0,i.kt)("inlineCode",{parentName:"li"},"cmake --build . --config Release"))),(0,i.kt)("p",null,"And now you will have the dlls/libs in ",(0,i.kt)("inlineCode",{parentName:"p"},"build/Release")," folder."),(0,i.kt)("h3",{id:"using-your-c-module"},"Using your C module"),(0,i.kt)("p",null,"Now copy the ",(0,i.kt)("inlineCode",{parentName:"p"},".dll")," file into your nanos world ",(0,i.kt)("inlineCode",{parentName:"p"},"Server/Modules")," folder."),(0,i.kt)("p",null,"And in your Package, you can load and use it like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Loads the module 'example'\nlocal example = require('example')\n\n-- Calls the module function 'test'\n-- Will print 'Hello World' on console\nPackage.Log(example.test())\n")))}p.isMDXComponent=!0},378:function(e,n,t){n.Z=t.p+"assets/images/modules-a25effa36422cdf3462df383e35e4b9f.jpg"}}]);