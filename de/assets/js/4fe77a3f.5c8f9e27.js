"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2745],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60962:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={slug:"weapons-improvements",title:"Weapons Improvements",authors:"gtnardy",tags:["updates"]},l=void 0,p={permalink:"/de/blog/weapons-improvements",editUrl:"https://github.com/nanos-world/docs/edit/master/blog/2021-10-06-weapons-improvements.md",source:"@site/i18n/de/docusaurus-plugin-content-blog/2021-10-06-weapons-improvements.md",title:"Weapons Improvements",description:"One of our main focus for nanos world is having fun, and we believe that the small details are the big support for the experience to be complete. In the past weeks, we've been working on improving and adding small features to common actions such as firing, picking up objects and even how you perceive them happening. Here's the highlights!",date:"2021-10-06T00:00:00.000Z",formattedDate:"6. Oktober 2021",tags:[{label:"updates",permalink:"/de/blog/tags/updates"}],readingTime:2.065,truncated:!1,authors:[{name:"Gabriel T. Nardy",title:"nanos world developer (SyedMuhammad)",url:"https://twitter.com/gtnardy",imageURL:"/img/blog/gtnardy.jpg",key:"gtnardy"}],frontMatter:{slug:"weapons-improvements",title:"Weapons Improvements",authors:"gtnardy",tags:["updates"]},prevItem:{title:"October: Alpha released!",permalink:"/de/blog/alpha-released"},nextItem:{title:"September: Sandbox Improvements",permalink:"/de/blog/sandbox-improvements"}},c={authorsImageUrls:[void 0]},u=[{value:"New Weapon Animations",id:"new-weapon-animations",level:2},{value:"New effects for Bullet Shells",id:"new-effects-for-bullet-shells",level:2},{value:"SFX when Picking Up objects",id:"sfx-when-picking-up-objects",level:2},{value:"Scopes",id:"scopes",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of our main focus for nanos world is having fun, and we believe that the small details are the big support for the experience to be complete. In the past weeks, we've been working on improving and adding small features to common actions such as firing, picking up objects and even how you perceive them happening. Here's the highlights!"),(0,a.kt)("h2",{id:"new-weapon-animations"},"New Weapon Animations"),(0,a.kt)("p",null,"Since the beginning, our weapons were stiff when shooting giving an impression of rigidity and lack of fluidity. With the simple improvement of adding firing animations to that, look how it looks better:"),(0,a.kt)("video",{controls:"true",allowfullscreen:"true"},(0,a.kt)("source",{src:"/videos/blog/weapons-improvements/m1911.mp4",type:"video/mp4"})),(0,a.kt)("video",{controls:"true",allowfullscreen:"true"},(0,a.kt)("source",{src:"/videos/blog/weapons-improvements/makarov.mp4",type:"video/mp4"})),(0,a.kt)("h2",{id:"new-effects-for-bullet-shells"},"New effects for Bullet Shells"),(0,a.kt)("p",null,"Besides new animations, we added a subtle detail: ",(0,a.kt)("strong",{parentName:"p"},"Bullet Shells Drop SFX"),". And not that simple! The sound is precisely played in the location and moment the shells hit the ground or any surface, listen:"),(0,a.kt)("video",{controls:"true",allowfullscreen:"true"},(0,a.kt)("source",{src:"/videos/blog/weapons-improvements/bullet-shell-drop.mp4",type:"video/mp4"})),(0,a.kt)("p",null,"Check out a complete before and after comparison of some of the weapons, you can notice all the improvements in detail!"),(0,a.kt)("iframe",{width:"620",height:"347",src:"https://www.youtube-nocookie.com/embed/ln4AUntcyLM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Note that nanos world weapons animations and aiming are completely generated procedurally, that means when you are in First Person, the weapon sight location is calculated dynamically to be positioned right in the middle of your eyes, in a true first person mode."),(0,a.kt)("h2",{id:"sfx-when-picking-up-objects"},"SFX when Picking Up objects"),(0,a.kt)("p",null,"A subtle sound detail added when you grab and drop a Weapon, and also now the object is slightly thrown to forward:"),(0,a.kt)("video",{controls:"true",allowfullscreen:"true"},(0,a.kt)("source",{src:"/videos/blog/weapons-improvements/picking-up.mp4",type:"video/mp4"})),(0,a.kt)("h2",{id:"scopes"},"Scopes"),(0,a.kt)("p",null,"Is is really easy to add attachable objects in any Weapon, for example attaching a AWP Scope, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"SM_Scope_25x56")," mesh for that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- Spawns a AWP Weapon\nlocal weapon = Weapon(location or Vector(), rotation or Rotator(), "nanos-world::SK_AWP")\n\n-- Attaches a Scope mesh, with configured offset to be perfectly aligned\nweapon:AddStaticMeshAttached("sight", "nanos-world::SM_Scope_25x56", "", Vector(20, 0, 11))\n\n-- Adjusts Sight Location to put the Sniper at exact location where the scope center will be when ADS\nweapon:SetSightTransform(Vector(-15, 0, -4.6), Rotator(0, 0, 0))\n')),(0,a.kt)("video",{controls:"true",allowfullscreen:"true"},(0,a.kt)("source",{src:"/videos/blog/weapons-improvements/sniper-scope.mp4",type:"video/mp4"})),(0,a.kt)("p",null,"This is completely procedural, it also uses the 3D Mesh scope materials!"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can also check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-weapons"},"Official Weapons Package"),", and see how a RedDot has been added to a P90!"))),(0,a.kt)("p",null,"That's it! Thank you all!"))}m.isMDXComponent=!0}}]);