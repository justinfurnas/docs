"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7711],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50279:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),s=["components"],i={},l=void 0,c={unversionedId:"assets-modding/creating-assets/maps-and-levels/water",id:"assets-modding/creating-assets/maps-and-levels/water",title:"water",description:"- - -",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/assets-modding/creating-assets/maps-and-levels/water.md",sourceDirName:"assets-modding/creating-assets/maps-and-levels",slug:"/assets-modding/creating-assets/maps-and-levels/water",permalink:"/de/docs/next/assets-modding/creating-assets/maps-and-levels/water",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/maps-and-levels/water.md",tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"Map Script and Configuration",permalink:"/de/docs/next/assets-modding/creating-assets/maps-and-levels/map-script-and-data"},next:{title:"nanos world Asset Pack List",permalink:"/de/docs/next/assets-modding/default-asset-pack/"}},u={},p=[{value:"How Objects react to Water",id:"how-objects-react-to-water",level:2},{value:"Props &amp; Pickables",id:"props--pickables",level:3},{value:"Vehicles",id:"vehicles",level:3},{value:"Character",id:"character",level:3}],d={toc:p};function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"title: Water description: How to add Unreal Water in your Level and seamlessly integrate it with nanos world tags: ","[assets, water]"," keywords: ","[map, level, water, unreal, physics]"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"How to add Unreal Water in your Level and seamlessly integrate it with nanos world"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(18724).Z,width:"1367",height:"767"})),(0,o.kt)("p",null,"Since Unreal Engine 4.26, it is possible to use an amazing and beautiful ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/Water/"},"Water System")," in your Maps. And nanos world managed to integrate this system seamlessly in our game."),(0,o.kt)("p",null,"Any ",(0,o.kt)("strong",{parentName:"p"},"Prop"),", ",(0,o.kt)("strong",{parentName:"p"},"Character"),", ",(0,o.kt)("strong",{parentName:"p"},"Vehicle"),", or even ",(0,o.kt)("strong",{parentName:"p"},"Pickables")," will react procedurally to this Water System, no additional tweaks are necessary, you can just drag-n-drop your Water Actors into your Level and it works!"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Using the new Water Plugin from Unreal requires you enabling it in your ADK Project, and also requires you have installed Visual Studio and all usual .NET dependencies for compiling it.")),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/Water/"},"Unreal Engine Documentation")," you can find dozens of guides and tutorials on how to use it, and don't worry, everything will work once you import it into nanos world!"),(0,o.kt)("h2",{id:"how-objects-react-to-water"},"How Objects react to Water"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(90841).Z,width:"1157",height:"655"})),(0,o.kt)("p",null,"Unreal Water has the concept of Buoyance Spheres, each sphere represents a Buoyance element which will make the object float."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We still want to expose ways of you customizing and controlling the Buoyance Spheres through scripting!")),(0,o.kt)("h3",{id:"props--pickables"},"Props & Pickables"),(0,o.kt)("p",null,"Props and Pickables are the most straightforward objects, they will automatically get ",(0,o.kt)("strong",{parentName:"p"},"one")," Buoyance Sphere at the same size of their Meshes."),(0,o.kt)("h3",{id:"vehicles"},"Vehicles"),(0,o.kt)("p",null,"Vehicles will automatically get ",(0,o.kt)("strong",{parentName:"p"},"four")," Buoyance Spheres, positioned around each Wheel, which will make Vehicles float and do not turn that easily."),(0,o.kt)("h3",{id:"character"},"Character"),(0,o.kt)("p",null,"Characters use a more complex system, integrated with Swimming states and animations. It uses ",(0,o.kt)("strong",{parentName:"p"},"one")," Buoyance Sphere as well, slightly translated to make the swimming animation transitions work perfectly."))}m.isMDXComponent=!0},90841:function(e,t,n){t.Z=n.p+"assets/images/water-boat-5a9c2e08841c23f153b5a2590f619e63.jpg"},18724:function(e,t,n){t.Z=n.p+"assets/images/water-6dd47e5a60534aed5c1182330f691159.jpg"}}]);