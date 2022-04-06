"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7711],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50279:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],i={},l=void 0,c={unversionedId:"assets-modding/creating-assets/maps-and-levels/water",id:"assets-modding/creating-assets/maps-and-levels/water",title:"water",description:"- - -",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/assets-modding/creating-assets/maps-and-levels/water.md",sourceDirName:"assets-modding/creating-assets/maps-and-levels",slug:"/assets-modding/creating-assets/maps-and-levels/water",permalink:"/de/docs/next/assets-modding/creating-assets/maps-and-levels/water",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/maps-and-levels/water.md",tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"Map Script and Configuration",permalink:"/de/docs/next/assets-modding/creating-assets/maps-and-levels/map-script-and-data"},next:{title:"nanos world Asset Pack List",permalink:"/de/docs/next/assets-modding/default-asset-pack/"}},d={},p=[{value:"How Objects react to Water",id:"how-objects-react-to-water",level:2},{value:"Props &amp; Pickables",id:"props--pickables",level:3},{value:"Vehicles",id:"vehicles",level:3},{value:"Character",id:"character",level:3}],u={toc:p};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("hr",null),(0,s.kt)("p",null,"title: Water description: How to add Unreal Water in your Level and seamlessly integrate it with nanos world tags: ","[assets, water]"," keywords: ","[map, level, water, unreal, physics]"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"How to add Unreal Water in your Level and seamlessly integrate it with nanos world"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(18724).Z,width:"1367",height:"767"})),(0,s.kt)("p",null,"Since Unreal Engine 4.26, it is possible to use an amazing and beautiful ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/Water/"},"Water System")," in your Maps. And nanos world managed to integrate this system seamlessly in our game."),(0,s.kt)("p",null,"Any ",(0,s.kt)("strong",{parentName:"p"},"Prop"),", ",(0,s.kt)("strong",{parentName:"p"},"Character"),", ",(0,s.kt)("strong",{parentName:"p"},"Vehicle"),", or even ",(0,s.kt)("strong",{parentName:"p"},"Pickables")," will react procedurally to this Water System, no additional tweaks are necessary, you can just drag-n-drop your Water Actors into your Level and it works!"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Using the new Water Plugin from Unreal requires you enabling it in your ADK Project, and also requires you have installed Visual Studio and all usual .NET dependencies for compiling it."))),(0,s.kt)("p",null,"In ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/Water/"},"Unreal Engine Documentation")," you can find dozens of guides and tutorials on how to use it, and don't worry, everything will work once you import it into nanos world!"),(0,s.kt)("h2",{id:"how-objects-react-to-water"},"How Objects react to Water"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(90841).Z,width:"1157",height:"655"})),(0,s.kt)("p",null,"Unreal Water has the concept of Buoyance Spheres, each sphere represents a Buoyance element which will make the object float."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"We still want to expose ways of you customizing and controlling the Buoyance Spheres through scripting!"))),(0,s.kt)("h3",{id:"props--pickables"},"Props & Pickables"),(0,s.kt)("p",null,"Props and Pickables are the most straightforward objects, they will automatically get ",(0,s.kt)("strong",{parentName:"p"},"one")," Buoyance Sphere at the same size of their Meshes."),(0,s.kt)("h3",{id:"vehicles"},"Vehicles"),(0,s.kt)("p",null,"Vehicles will automatically get ",(0,s.kt)("strong",{parentName:"p"},"four")," Buoyance Spheres, positioned around each Wheel, which will make Vehicles float and do not turn that easily."),(0,s.kt)("h3",{id:"character"},"Character"),(0,s.kt)("p",null,"Characters use a more complex system, integrated with Swimming states and animations. It uses ",(0,s.kt)("strong",{parentName:"p"},"one")," Buoyance Sphere as well, slightly translated to make the swimming animation transitions work perfectly."))}m.isMDXComponent=!0},90841:function(e,t,n){t.Z=n.p+"assets/images/water-boat-5a9c2e08841c23f153b5a2590f619e63.jpg"},18724:function(e,t,n){t.Z=n.p+"assets/images/water-6dd47e5a60534aed5c1182330f691159.jpg"}}]);