"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4628],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61803:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return c}});var r=n(83117),o=n(80102),l=(n(67294),n(3905)),i=["components"],a={title:"Module",description:"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API"},u=void 0,d={unversionedId:"core-concepts/modules",id:"version-latest/core-concepts/modules",title:"Module",description:"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/modules.md",sourceDirName:"core-concepts",slug:"/core-concepts/modules",permalink:"/de/docs/core-concepts/modules",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/modules.md",tags:[],version:"latest",frontMatter:{title:"Module",description:"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API"},sidebar:"version-latest/main",previous:{title:"Assets",permalink:"/de/docs/core-concepts/assets"},next:{title:"Server & Client Lebenszyklus",permalink:"/de/docs/core-concepts/server-and-client-lifecycle"}},s={},c=[{value:"Creating your own C module",id:"creating-your-own-c-module",level:2},{value:"First Steps",id:"first-steps",level:4},{value:"Understanding the example",id:"understanding-the-example",level:3},{value:"Compiling your C module",id:"compiling-your-c-module",level:3},{value:"Using your C module",id:"using-your-c-module",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API"),(0,l.kt)("p",null,"Module erlauben es Ihnen, die Funktionalit\xe4t der nanos world scripting API auf der Serverseite zu erweitern. Derzeit werden nur C-Module unterst\xfctzt."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Beachten Sie, dass dieser Teil der Skripting-API derzeit in Arbeit ist und sich jederzeit \xe4ndern kann.")),(0,l.kt)("h2",{id:"creating-your-own-c-module"},"Creating your own C module"),(0,l.kt)("p",null,"It is also possible to you create your own C/C++ module and call it's functions from nanos world."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This is an advanced procedure so instabilities and even crashes may occur.")),(0,l.kt)("p",null,"To create your own module, fist make sure you have ",(0,l.kt)("strong",{parentName:"p"},"Visual Studio")," installed with ",(0,l.kt)("strong",{parentName:"p"},"Desktop development with C++")," (and ",(0,l.kt)("strong",{parentName:"p"},"CMake"),") or any other C compiler on Linux."),(0,l.kt)("h4",{id:"first-steps"},"First Steps"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Then, clone our ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/module-example"},"example module")," in your computer to get start with it."),(0,l.kt)("li",{parentName:"ol"},"After cloning, you will need to download it's submodules with ",(0,l.kt)("inlineCode",{parentName:"li"},"git submodule update --init --recursive")," - this will download the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nanos-world/module-sdk/"},"module-sdk")," as a git submodule into deps/ folder automatically.")),(0,l.kt)("h3",{id:"understanding-the-example"},"Understanding the example"),(0,l.kt)("p",null,"The important file is under ",(0,l.kt)("inlineCode",{parentName:"p"},"src/example.cpp"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"reference",reference:!0},"https://github.com/nanos-world-modules/module-example/blob/main/src/example.cpp\n")),(0,l.kt)("h3",{id:"compiling-your-c-module"},"Compiling your C module"),(0,l.kt)("p",null,"To compile the example, follow the steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a folder called ",(0,l.kt)("inlineCode",{parentName:"li"},"build/"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"mkdir build"),"."),(0,l.kt)("li",{parentName:"ol"},"Enter the build folder: ",(0,l.kt)("inlineCode",{parentName:"li"},"cd build"),"."),(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"cmake .."),"."),(0,l.kt)("li",{parentName:"ol"},"Build it with ",(0,l.kt)("inlineCode",{parentName:"li"},"cmake --build . --config Release"))),(0,l.kt)("p",null,"And now you will have the dlls/libs in ",(0,l.kt)("inlineCode",{parentName:"p"},"build/Release")," folder."),(0,l.kt)("h3",{id:"using-your-c-module"},"Using your C module"),(0,l.kt)("p",null,"Now copy the ",(0,l.kt)("inlineCode",{parentName:"p"},".dll")," file into your nanos world ",(0,l.kt)("inlineCode",{parentName:"p"},"Server/Modules")," folder."),(0,l.kt)("p",null,"And in your Package, you can load and use it like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- Loads the module 'example'\nlocal example = require('example')\n\n-- Calls the module function 'test'\n-- Will print 'Hello World' on console\nPackage.Log(example.test())\n")))}m.isMDXComponent=!0}}]);