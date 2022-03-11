"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4628],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,k=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61803:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={description:"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API"},d="Module",s={unversionedId:"core-concepts/modules",id:"version-latest/core-concepts/modules",title:"Module",description:"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/modules.md",sourceDirName:"core-concepts",slug:"/core-concepts/modules",permalink:"/de/docs/core-concepts/modules",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/modules.md",tags:[],version:"latest",frontMatter:{description:"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API"},sidebar:"version-latest/main",previous:{title:"Assets",permalink:"/de/docs/core-concepts/assets"},next:{title:"Server & Client Lebenszyklus",permalink:"/de/docs/core-concepts/server-and-client-lifecycle"}},u={},c=[{value:"Creating your own C module",id:"creating-your-own-c-module",level:2},{value:"First Steps",id:"first-steps",level:4},{value:"Understanding the example",id:"understanding-the-example",level:3},{value:"Compiling your C module",id:"compiling-your-c-module",level:3},{value:"Using your C module",id:"using-your-c-module",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"module"},"Module"),(0,i.kt)("p",null,"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API"),(0,i.kt)("p",null,"Module erlauben es Ihnen, die Funktionalit\xe4t der nanos world scripting API auf der Serverseite zu erweitern. Derzeit werden nur C-Module unterst\xfctzt."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Beachten Sie, dass dieser Teil der Skripting-API derzeit in Arbeit ist und sich jederzeit \xe4ndern kann."))),(0,i.kt)("h2",{id:"creating-your-own-c-module"},"Creating your own C module"),(0,i.kt)("p",null,"It is also possible to you create your own C/C++ module and call it's functions from nanos world."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is an advanced procedure so instabilities and even crashes may occur."))),(0,i.kt)("p",null,"To create your own module, fist make sure you have ",(0,i.kt)("strong",{parentName:"p"},"Visual Studio")," installed with ",(0,i.kt)("strong",{parentName:"p"},"Desktop development with C++")," (and ",(0,i.kt)("strong",{parentName:"p"},"CMake"),") or any other C compiler on Linux."),(0,i.kt)("h4",{id:"first-steps"},"First Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Then, clone our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/module-example"},"example module")," in your computer to get start with it."),(0,i.kt)("li",{parentName:"ol"},"After cloning, you will need to download it's submodules with ",(0,i.kt)("inlineCode",{parentName:"li"},"git submodule update --init --recursive")," - this will download the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nanos-world/module-sdk/"},"module-sdk")," as a git submodule into deps/ folder automatically.")),(0,i.kt)("h3",{id:"understanding-the-example"},"Understanding the example"),(0,i.kt)("p",null,"The important file is under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/example.cpp"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"reference",reference:!0},"https://github.com/nanos-world-modules/module-example/blob/main/src/example.cpp\n")),(0,i.kt)("h3",{id:"compiling-your-c-module"},"Compiling your C module"),(0,i.kt)("p",null,"To compile the example, follow the steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a folder called ",(0,i.kt)("inlineCode",{parentName:"li"},"build/"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"mkdir build"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter the build folder: ",(0,i.kt)("inlineCode",{parentName:"li"},"cd build"),"."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"cmake .."),"."),(0,i.kt)("li",{parentName:"ol"},"Build it with ",(0,i.kt)("inlineCode",{parentName:"li"},"cmake --build . --config Release"))),(0,i.kt)("p",null,"And now you will have the dlls/libs in ",(0,i.kt)("inlineCode",{parentName:"p"},"build/Release")," folder."),(0,i.kt)("h3",{id:"using-your-c-module"},"Using your C module"),(0,i.kt)("p",null,"Now copy the ",(0,i.kt)("inlineCode",{parentName:"p"},".dll")," file into your nanos world ",(0,i.kt)("inlineCode",{parentName:"p"},"Server/Modules")," folder."),(0,i.kt)("p",null,"And in your Package, you can load and use it like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Loads the module 'example'\nlocal example = require('example')\n\n-- Calls the module function 'test'\n-- Will print 'Hello World' on console\nPackage.Log(example.test())\n")))}m.isMDXComponent=!0}}]);