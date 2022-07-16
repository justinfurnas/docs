"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2854],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24150:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Interagir avec le Soleil",description:"How to integrate and communicate with the Sun and Light",tags:["scripting"]},p=void 0,d={unversionedId:"core-concepts/scripting/interacting-with-the-sun",id:"version-latest/core-concepts/scripting/interacting-with-the-sun",title:"Interagir avec le Soleil",description:"How to integrate and communicate with the Sun and Light",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/interacting-with-the-sun.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/interacting-with-the-sun",permalink:"/fr/docs/core-concepts/scripting/interacting-with-the-sun",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/interacting-with-the-sun.md",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",frontMatter:{title:"Interagir avec le Soleil",description:"How to integrate and communicate with the Sun and Light",tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Int\xe9gration de Discord",permalink:"/fr/docs/core-concepts/scripting/discord-integration"},next:{title:"Donn\xe9es persistantes",permalink:"/fr/docs/core-concepts/scripting/persistent-data"}},s={},c=[{value:"Spawning the Default Sun",id:"spawning-the-default-sun",level:2},{value:"Interagir avec le Soleil",id:"interagir-avec-le-soleil",level:2},{value:"Weather",id:"weather",level:3},{value:"Weather Types",id:"weather-types",level:3}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How to integrate and communicate with the Sun and Light."),(0,i.kt)("p",null,"In nanos world, we allow the greatest possible customization to be made on your servers and packages. And to make it even easier, we've included some built-in functions in the game which helps integrating and customizing your Servers."),(0,i.kt)("p",null,"A very important concept in nanos world is the ",(0,i.kt)("strong",{parentName:"p"},"Sun"),". We provide some methods on ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/static-classes/world"},"World")," class which allows the scripters to, in few lines of codes, modify the current ",(0,i.kt)("strong",{parentName:"p"},"Time of Day"),", ",(0,i.kt)("strong",{parentName:"p"},"Sun Speed"),", ",(0,i.kt)("strong",{parentName:"p"},"Environment Colors")," and even change the ",(0,i.kt)("strong",{parentName:"p"},"Weather")," and ",(0,i.kt)("strong",{parentName:"p"},"Fog"),"."),(0,i.kt)("p",null,"For the methods of interaction with the Sun exposed in the ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/static-classes/world"},"World")," to work, it is necessary that your Map is loaded with a sun that our API can identify it, and for that to be possible, we created the method ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SpawnDefaultSun()"),"."),(0,i.kt)("h2",{id:"spawning-the-default-sun"},"Spawning the Default Sun"),(0,i.kt)("p",null,"Once you run the method ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SpawnDefaultSun()"),", the game will destroy all ","(","Unreal",")"," Actors with the tag ",(0,i.kt)("inlineCode",{parentName:"p"},"Sun")," and will spawn a brand new Actor which contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"Directional Light"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Sky Light"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Fog"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Clouds")," and some others components which you will be able to control with ",(0,i.kt)("strong",{parentName:"p"},"World")," methods."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Because of that it is important to set all your ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/assets-modding/creating-assets/maps-and-levels/importing-maps#rules-for-creating-a-map-level-for-nanos-world"},"Actors with ",(0,i.kt)("inlineCode",{parentName:"a"},"Sun")," tag when creating Maps"),"!")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Sometimes if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"SpawnDefaultSun()")," in some maps, you may notice you will end up with ",(0,i.kt)("strong",{parentName:"p"},"two")," Directional or Sky Lights, this means the Map wasn't configured with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sun")," tags.")),(0,i.kt)("h2",{id:"interagir-avec-le-soleil"},"Interagir avec le Soleil"),(0,i.kt)("p",null,"It is possible to change Several aspects and settings from the Sun."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"All methods available for customizing the Sun are listed in ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/static-classes/world"},"World")," Static Class page.")),(0,i.kt)("p",null,"Some examples of methods are ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SetTime(hours, minutes)")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SetFogDensity(density)")," which will change the current Time and the Fog, respectively."),(0,i.kt)("h3",{id:"weather"},"Weather"),(0,i.kt)("p",null,"We provide some basic methods to change the Weather of the World. You can use the method ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SetWeather()")," to select from a predefined selection of Weathers, or create your own Weather using all the methods the ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/static-classes/world"},"World")," provides."),(0,i.kt)("h3",{id:"weather-types"},"Weather Types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Weather Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sun Intensity"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Fog Second Density"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Fog Height Falloff"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sun Light Color"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sky Rayleigh Scattering"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sun Temp. Multi."),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sky Light Intensity"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Wind"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Clear")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"150")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.005")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(1.0, 0.9, 0.8)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0.17, 0.41, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.25"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Rain")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.025")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.03")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0.82, 0.9, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0.73, 0.8, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.3")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Cloudy")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.01")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(1.0, 0.9, 0.8)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0.73, 0.8, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.25")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Thunder-storm")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.5")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.025")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0.82, 0.9, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0.73, 0.8, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.25")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"3.0"))))))}u.isMDXComponent=!0}}]);