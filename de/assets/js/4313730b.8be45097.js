"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[691],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69752:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],d={title:"Interacting with the Sun",description:"Wie man Sonne und Licht integriert und kommuniziert",tags:["scripting"]},l=void 0,p={unversionedId:"core-concepts/scripting/interacting-with-the-sun",id:"core-concepts/scripting/interacting-with-the-sun",title:"Interacting with the Sun",description:"Wie man Sonne und Licht integriert und kommuniziert",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/scripting/interacting-with-the-sun.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/interacting-with-the-sun",permalink:"/de/docs/next/core-concepts/scripting/interacting-with-the-sun",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/interacting-with-the-sun.md",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",frontMatter:{title:"Interacting with the Sun",description:"Wie man Sonne und Licht integriert und kommuniziert",tags:["scripting"]},sidebar:"main",previous:{title:"Discord Integration",permalink:"/de/docs/next/core-concepts/scripting/discord-integration"},next:{title:"Persistente Daten",permalink:"/de/docs/next/core-concepts/scripting/persistent-data"}},s={},m=[{value:"Spawnen der Standardsonne",id:"spawnen-der-standardsonne",level:2},{value:"Interacting with the Sun",id:"interacting-with-the-sun",level:2},{value:"Wetter",id:"wetter",level:3},{value:"Wetterarten",id:"wetterarten",level:3}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wie man sich integriert und mit der Sonne und dem Licht kommuniziert."),(0,i.kt)("p",null,"In der nanos Welt erlauben wir die gr\xf6\xdftm\xf6gliche Anpassung an Ihre Server und Pakete. Und um es noch einfacher zu machen, haben wir einige eingebaute Funktionen in das Spiel integriert, die bei der Integration und Anpassung Ihrer Server helfen."),(0,i.kt)("p",null,"Ein sehr wichtiges Konzept in der Nano-Welt ist die ",(0,i.kt)("strong",{parentName:"p"},"Sun"),". We provide some methods on ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/static-classes/world"},"World")," class which allows the scripters to, in few lines of codes, modify the current ",(0,i.kt)("strong",{parentName:"p"},"Time of Day"),", ",(0,i.kt)("strong",{parentName:"p"},"Sun Speed"),", ",(0,i.kt)("strong",{parentName:"p"},"Environment Colors")," and even change the ",(0,i.kt)("strong",{parentName:"p"},"Weather")," and ",(0,i.kt)("strong",{parentName:"p"},"Fog"),"."),(0,i.kt)("p",null,"For the methods of interaction with the Sun exposed in the ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/static-classes/world"},"World")," to work, it is necessary that your Map is loaded with a sun that our API can identify it, and for that to be possible, we created the method ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SpawnDefaultSun()"),"."),(0,i.kt)("h2",{id:"spawnen-der-standardsonne"},"Spawnen der Standardsonne"),(0,i.kt)("p",null,"Sobald du die Methode ",(0,i.kt)("inlineCode",{parentName:"p"},"Welt ausgef\xfchrt hast. pawnDefaultSun()"),", das Spiel zerst\xf6rt alle ","(","Unreal",")"," Akteure mit dem Tag ",(0,i.kt)("inlineCode",{parentName:"p"},"Sun")," und spawnt einen brandneuen Akteur, der ein ",(0,i.kt)("inlineCode",{parentName:"p"},"Directional Light"),"enth\xe4lt ",(0,i.kt)("inlineCode",{parentName:"p"},"Himmelslicht"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Nebel"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Clouds")," und einige andere Komponenten, die Sie mit ",(0,i.kt)("strong",{parentName:"p"},"Welt")," Methoden steuern k\xf6nnen."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Because of that it is important to set all your ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/next/assets-modding/creating-assets/maps-and-levels/importing-maps#rules-for-creating-a-map-level-for-nanos-world"},"Actors with ",(0,i.kt)("inlineCode",{parentName:"a"},"Sun")," tag when creating Maps"),"!")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Manchmal verwendet man ",(0,i.kt)("inlineCode",{parentName:"p"},"SpawnDefaultSun()")," in einigen Karten, du bemerkst, dass du am Ende mit ",(0,i.kt)("strong",{parentName:"p"},"zwei")," Richtungs- oder Himmelslichter kommst, das bedeutet, dass die Karte nicht mit den ",(0,i.kt)("inlineCode",{parentName:"p"},"Sun")," Tags konfiguriert wurde.")),(0,i.kt)("h2",{id:"interacting-with-the-sun"},"Interacting with the Sun"),(0,i.kt)("p",null,"Es ist m\xf6glich, mehrere Aspekte und Einstellungen von der Sonne zu \xe4ndern."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"All methods available for customizing the Sun are listed in ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/static-classes/world"},"World")," Static Class page.")),(0,i.kt)("p",null,"Einige Beispiele f\xfcr Methoden sind ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SetTime(Stunden, Minuten)")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SetFogDensity(Dichte)")," , was die aktuelle Zeit und den Nebel ver\xe4ndern wird."),(0,i.kt)("h3",{id:"wetter"},"Wetter"),(0,i.kt)("p",null,"Wir bieten einige grundlegende Methoden, um das Wetter der Welt zu \xe4ndern. You can use the method ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SetWeather()")," to select from a predefined selection of Weathers, or create your own Weather using all the methods the ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/static-classes/world"},"World")," provides."),(0,i.kt)("h3",{id:"wetterarten"},"Wetterarten"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Wetterart"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sonnenintensit\xe4t"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Zweite Nebeldichte"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nebelh\xf6he"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sonnenlicht Farbe"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sky Rayleigh Scattering"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sonnentempo. Mehrfach."),(0,i.kt)("th",{parentName:"tr",align:"left"},"Himmellicht-Intensit\xe4t"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Wind"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Leeren")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"150")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.005")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (1.0, 0.9, 0.8)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (0.17, 0.41, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.25"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Regen")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.025")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.03")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (0.82, 0.9, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (0.73, 0.8, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.3")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"bew\xf6lkt")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.01")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (1.0, 0.9, 0.8)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (0.73, 0.8, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.25")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Gewitter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.5")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.025")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (0.82, 0.9, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Farbe (0.73, 0.8, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.25")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"3.0"))))))}u.isMDXComponent=!0}}]);