"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2092],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Weapon Scope",description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",tags:["tutorial-example","scripting","assets"]},c=void 0,l={unversionedId:"getting-started/tutorials-and-examples/weapon-scope",id:"getting-started/tutorials-and-examples/weapon-scope",title:"Weapon Scope",description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/tutorials-and-examples/weapon-scope.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/weapon-scope",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/weapon-scope",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/weapon-scope.md",tags:[{label:"tutorial-example",permalink:"/fr/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/fr/docs/next/tags/scripting"},{label:"assets",permalink:"/fr/docs/next/tags/assets"}],version:"current",frontMatter:{title:"Weapon Scope",description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",tags:["tutorial-example","scripting","assets"]},sidebar:"main",previous:{title:"Weapon Flashlight",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/weapon-flashlight"},next:{title:"X-Ray & Highlight",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/x-ray-and-highlight"}},p={},u=[{value:"Some Static Mesh assets which can be used as scope:",id:"some-static-mesh-assets-which-can-be-used-as-scope",level:2}],d={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(21832).Z,width:"1918",height:"1022"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawning the AK47\nlocal my_ak47 = NanosWorldWeapons.AK47(Vector(1035, 154, 300), Rotator())\n\n-- Adds a StaticMesh Attached with a RedDot mesh into AK47 on sight_socket bone from AK47 model. As our AK47 model already\n-- have a bone named sight_socket at the right location, we can just attach to it, otherwise we would\n-- need to set it\'s Attach Location to where the RedDot fits and using bone name as empty ""\nmy_ak47:AddStaticMeshAttached("sight", "nanos-world::SM_T4_Sight", "sight_socket")\n\n-- Makes the FOV multiplier reduces by 0.35x when ADS (aiming)\nmy_ak47.SightFOVMultiplier = 0.35\n\n-- Sets the ADS transform offset to fit the RedDot center position,\n-- each weapon will need a different offset to fit it\'s sight. AK47 + RedDot best fit is Z = -15.9\nmy_ak47:SetSightTransform(Vector(0, 0, -15.9), Rotator(0, 0, 0))\n')),(0,o.kt)("h2",{id:"some-static-mesh-assets-which-can-be-used-as-scope"},"Some Static Mesh assets which can be used as scope:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_T4_Sight")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Vertgrip")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Suppressor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Scope_25x56_X"))))}m.isMDXComponent=!0},21832:function(e,t,n){t.Z=n.p+"assets/images/weapon-scope-c9a5f4bf7da95c8967629ec56db2cca9.jpg"}}]);