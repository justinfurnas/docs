"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6999],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40177:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={title:"Game Panels",description:"How to setup your nanos world server using a Game Panel",sidebar_position:4,tags:["hosting"]},s=void 0,c={unversionedId:"core-concepts/server-manual/game-panels",id:"core-concepts/server-manual/game-panels",title:"Game Panels",description:"How to setup your nanos world server using a Game Panel",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/server-manual/game-panels.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/game-panels",permalink:"/de/docs/next/core-concepts/server-manual/game-panels",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/server-manual/game-panels.md",tags:[{label:"hosting",permalink:"/de/docs/next/tags/hosting"}],version:"current",sidebarPosition:4,frontMatter:{title:"Game Panels",description:"How to setup your nanos world server using a Game Panel",sidebar_position:4,tags:["hosting"]},sidebar:"main",previous:{title:"Kommandozeilenschnittstelle",permalink:"/de/docs/next/core-concepts/server-manual/nanos-world-cli"},next:{title:"Paketleitfaden",permalink:"/de/docs/next/core-concepts/packages/packages-guide"}},p={},d=[{value:"Pterodactyl Installation",id:"pterodactyl-installation",level:2},{value:"Installing the <code>egg</code>",id:"installing-the-egg",level:3},{value:"AMP Installation",id:"amp-installation",level:2},{value:"Installing the template",id:"installing-the-template",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How to setup your nanos world server using a Game Panel!"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The use of Game Panels is not officially supported and currently maintained by the community! The following steps are WIP and may change at any time! Please check the following GitHub repositories for updated information!"))),(0,i.kt)("p",null,"Currently nanos world is supported on 2 games panel: ",(0,i.kt)("a",{parentName:"p",href:"https://pterodactyl.io"},"https://pterodactyl.io")," and ",(0,i.kt)("a",{parentName:"p",href:"https://cubecoders.com/AMP"},"https://cubecoders.com/AMP"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Installation files are open source at Falaxir GitHub: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Falaxir/nanos-world_yolks-game-panels"},"https://github.com/Falaxir/nanos-world_yolks-game-panels"),"."))),(0,i.kt)("h2",{id:"pterodactyl-installation"},"Pterodactyl Installation"),(0,i.kt)("p",null,"The installation of this panel can be complex depending on the type of your infrastructure. This panel is only compatible on Linux and the server must have a docker compatible system (OpenVZ is not compatible)."),(0,i.kt)("p",null,"If you haven't installed the panel yet, we recommend using the unofficial installer available here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vilhelmprytz/pterodactyl-installer"},"https://github.com/vilhelmprytz/pterodactyl-installer"),"."),(0,i.kt)("h3",{id:"installing-the-egg"},"Installing the ",(0,i.kt)("inlineCode",{parentName:"h3"},"egg")),(0,i.kt)("p",null,"Once the panel is installed, download the file ",(0,i.kt)("inlineCode",{parentName:"p"},"egg-nanos-world-server.json")," located inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"pterodactyl-egg")," folder on GitHub."),(0,i.kt)("p",null,"Then, go to your panel on the category ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVICE MANAGEMENT")," and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"NESTS"),"."),(0,i.kt)("p",null,"You will need to create a new Nest by pressing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create New")," button."),(0,i.kt)("p",null,"After the nest is created, go back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"NESTS")," and click on the button ",(0,i.kt)("inlineCode",{parentName:"p"},"Import EGG"),", select the .json file you downloaded earlier and on the dropdown menu, select the nest you created earlier."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Finished! You can now create a nanos world server as usual inside the panel!"))),(0,i.kt)("h2",{id:"amp-installation"},"AMP Installation"),(0,i.kt)("p",null,"The installation of this panel is the easiest, you can go to ",(0,i.kt)("a",{parentName:"p",href:"https://cubecoders.com/AMPInstall"},"https://cubecoders.com/AMPInstall")," and follow the instruction to install the panel."),(0,i.kt)("p",null,"It works even with OpenVZ virtualization and windows!"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This panel requires a license that can be bought at ",(0,i.kt)("a",{parentName:"p",href:"https://cubecoders.com/AMP"},"https://cubecoders.com/AMP"),". Your main ADS instance (ADS01) can have a different name."))),(0,i.kt)("h3",{id:"installing-the-template"},"Installing the template"),(0,i.kt)("p",null,"Once the panel is installed, shutdown the ADS instance, you can do it on Linux by typing this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ampinstmgr -q ADS01\n")),(0,i.kt)("p",null,"After, go to your server files inside the folder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/home/amp/.ampdata/instances/ADS01/Plugins/ADSModile/GenericTemplates\n")),(0,i.kt)("p",null,"Then download the files on GitHub inside the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"amp-generic")," and put them on your server inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"GenericTemplates")," folder."),(0,i.kt)("p",null,"You can start the panel again by typing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ampinstmgr -s ADS01\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Finished! You can now create a nanos world server as usual inside the panel!"))))}u.isMDXComponent=!0}}]);