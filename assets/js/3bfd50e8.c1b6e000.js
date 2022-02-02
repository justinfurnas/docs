"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[878],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54601:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={description:"How to use Traces & Raycasting to gather world information in runtime",sidebar_position:7,tags:["scripting"]},s="Traces & Raycasting",l={unversionedId:"core-concepts/scripting/traces-and-raycasting",id:"core-concepts/scripting/traces-and-raycasting",title:"Traces & Raycasting",description:"How to use Traces & Raycasting to gather world information in runtime",source:"@site/docs/core-concepts/scripting/traces-and-raycasting.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/traces-and-raycasting",permalink:"/docs/next/core-concepts/scripting/traces-and-raycasting",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/traces-and-raycasting.md",tags:[{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1643800648,formattedLastUpdatedAt:"2/2/2022",sidebarPosition:7,frontMatter:{description:"How to use Traces & Raycasting to gather world information in runtime",sidebar_position:7,tags:["scripting"]},sidebar:"main",previous:{title:"Artificial Intelligence",permalink:"/docs/next/core-concepts/scripting/artificial-intelligence"},next:{title:"Extending Classes",permalink:"/docs/next/core-concepts/scripting/extending-classes"}},p=[],d={toc:p};function u(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"traces--raycasting"},"Traces & Raycasting"),(0,i.kt)("p",null," How to use Traces & Raycasting to gather world information in runtime."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Traces")," offer a method for reaching out in your maps and getting feedback on what is present along a line segment. You use them by providing two end points ","(","a start and end location",")"," and the physics system \u201ctraces\u201d a line segment between those points, reporting any Actors that it hits. Traces are essentially the same as ",(0,i.kt)("strong",{parentName:"p"},"Raycasts")," or ",(0,i.kt)("strong",{parentName:"p"},"Raytraces")," in other software packages. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(39825).Z,width:"1152",height:"435"})),(0,i.kt)("p",null,"The following example will show you how to get what and where the player is looking at."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Traces at each 100ms\nTimer.SetInterval(function()\n    -- Gets the middle of the screen\n    local viewport_2D_center = Client.GetViewportSize() / 2\n\n    -- Deprojects to get the 3D Location for the middle of the screen\n    local viewport_3D = Client.DeprojectScreenToWorld(viewport_2D_center)\n\n    -- Makes a trace with the 3D Location and it\'s direction multiplied by 5000\n    -- Meaning it will trace 5000 units in that direction\n    local trace_max_distance = 5000\n\n    local start_location = viewport_3D.Position\n    local end_location = viewport_3D.Position + viewport_3D.Direction * trace_max_distance\n\n    -- Last parameter as true means it will draw a Debug Line in the traced segment\n    local trace_result = Client.Trace(start_location, end_location, CollisionChannel.WorldStatic | CollisionChannel.PhysicsBody, false, true, false, {}, true)\n\n    -- If hit something draws a Debug Point at the location\n    if (trace_result.Success) then\n\n        -- Makes the point Red or Green if hit an Actor\n        local color = Color(1, 0, 0) -- Red\n\n        if (trace_result.Entity) then\n            color = Color(0, 1, 0) -- Green\n\n            -- Here you can check which actor you hit like\n            -- if (trace_result.Entity:GetType() == "Character") then ...\n        end\n\n        -- Draws a Debug Point at the Hit location for 5 seconds with size 10\n        Client.DrawDebugPoint(trace_result.Location, color, 5, 10)\n    end\nend, 100)\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As you could see, we can pass bit-wise operators to Trace for more than one ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/scripting-reference/glossary/enums#collisionchannel"},"CollisionChannel")," at once! Use ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," between the ",(0,i.kt)("strong",{parentName:"p"},"CollisionChannels")," to achieve that."))))}u.isMDXComponent=!0},39825:function(e,t,n){t.Z=n.p+"assets/images/traces-raycasting-9efb35a67eb78f33062bb0a4a88372e7.jpg"}}]);