"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[878],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54601:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={title:"Traces & Raycasting",description:"How to use Traces & Raycasting to gather world information in runtime",sidebar_position:7,tags:["scripting"]},s=void 0,l={unversionedId:"core-concepts/scripting/traces-and-raycasting",id:"core-concepts/scripting/traces-and-raycasting",title:"Traces & Raycasting",description:"How to use Traces & Raycasting to gather world information in runtime",source:"@site/docs/core-concepts/scripting/traces-and-raycasting.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/traces-and-raycasting",permalink:"/docs/next/core-concepts/scripting/traces-and-raycasting",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/traces-and-raycasting.md",tags:[{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1652113101,formattedLastUpdatedAt:"May 9, 2022",sidebarPosition:7,frontMatter:{title:"Traces & Raycasting",description:"How to use Traces & Raycasting to gather world information in runtime",sidebar_position:7,tags:["scripting"]},sidebar:"main",previous:{title:"Artificial Intelligence",permalink:"/docs/next/core-concepts/scripting/artificial-intelligence"},next:{title:"Extending Classes",permalink:"/docs/next/core-concepts/scripting/extending-classes"}},p={},u=[],d={toc:u};function g(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to use Traces & Raycasting to gather world information in runtime."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Traces")," offer a method for reaching out in your maps and getting feedback on what is present along a line segment. You use them by providing two end points ","(","a start and end location",")"," and the physics system \u201ctraces\u201d a line segment between those points, reporting any Actors that it hits. Traces are essentially the same as ",(0,o.kt)("strong",{parentName:"p"},"Raycasts")," or ",(0,o.kt)("strong",{parentName:"p"},"Raytraces")," in other software packages. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(78213).Z,width:"1152",height:"435"})),(0,o.kt)("p",null,"The following example will show you how to get what and where the player is looking at."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Traces at each 100ms\nTimer.SetInterval(function()\n    -- Gets the middle of the screen\n    local viewport_2D_center = Client.GetViewportSize() / 2\n\n    -- Deprojects to get the 3D Location for the middle of the screen\n    local viewport_3D = Client.DeprojectScreenToWorld(viewport_2D_center)\n\n    -- Makes a trace with the 3D Location and it\'s direction multiplied by 5000\n    -- Meaning it will trace 5000 units in that direction\n    local trace_max_distance = 5000\n\n    local start_location = viewport_3D.Position\n    local end_location = viewport_3D.Position + viewport_3D.Direction * trace_max_distance\n\n    -- Last parameter as true means it will draw a Debug Line in the traced segment\n    local trace_result = Client.Trace(start_location, end_location, CollisionChannel.WorldStatic | CollisionChannel.PhysicsBody, false, true, false, {}, true)\n\n    -- If hit something draws a Debug Point at the location\n    if (trace_result.Success) then\n\n        -- Makes the point Red or Green if hit an Actor\n        local color = Color(1, 0, 0) -- Red\n\n        if (trace_result.Entity) then\n            color = Color(0, 1, 0) -- Green\n\n            -- Here you can check which actor you hit like\n            -- if (trace_result.Entity:GetType() == "Character") then ...\n        end\n\n        -- Draws a Debug Point at the Hit location for 5 seconds with size 10\n        Client.DrawDebugPoint(trace_result.Location, color, 5, 10)\n    end\nend, 100)\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"As you could see, we can pass bit-wise operators to Trace for more than one ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/scripting-reference/glossary/enums#collisionchannel"},"CollisionChannel")," at once! Use ",(0,o.kt)("inlineCode",{parentName:"p"},"|")," between the ",(0,o.kt)("strong",{parentName:"p"},"CollisionChannels")," to achieve that.")))}g.isMDXComponent=!0},78213:function(e,t,n){t.Z=n.p+"assets/images/traces-raycasting-9efb35a67eb78f33062bb0a4a88372e7.jpg"}}]);