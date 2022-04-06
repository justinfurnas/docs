"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8681],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=s,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),i=["components"],o={title:"Importer des assets personnalis\xe9s",description:"Apprenez \xe0 cr\xe9er et \xe0 importer des ressources personnalis\xe9es dans nanos world",sidebar_position:1,tags:["assets"],keywords:["assets","ADK","import","unreal"]},l=void 0,d={unversionedId:"assets-modding/creating-assets/importing-assets",id:"assets-modding/creating-assets/importing-assets",title:"Importer des assets personnalis\xe9s",description:"Apprenez \xe0 cr\xe9er et \xe0 importer des ressources personnalis\xe9es dans nanos world",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/assets-modding/creating-assets/importing-assets.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/importing-assets",permalink:"/fr/docs/next/assets-modding/creating-assets/importing-assets",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/importing-assets.md",tags:[{label:"assets",permalink:"/fr/docs/next/tags/assets"}],version:"current",sidebarPosition:1,frontMatter:{title:"Importer des assets personnalis\xe9s",description:"Apprenez \xe0 cr\xe9er et \xe0 importer des ressources personnalis\xe9es dans nanos world",sidebar_position:1,tags:["assets"],keywords:["assets","ADK","import","unreal"]},sidebar:"main",previous:{title:"Enums",permalink:"/fr/docs/next/scripting-reference/glossary/enums"},next:{title:"Kit de D\xe9veloppement des Assets",permalink:"/fr/docs/next/assets-modding/creating-assets/adk-assets-development-kit"}},p={},m=[{value:"Installer Unreal Engine 4",id:"installer-unreal-engine-4",level:2},{value:"1. T\xe9l\xe9charger et installer Epic Games Launcher",id:"1-t\xe9l\xe9charger-et-installer-epic-games-launcher",level:4},{value:"2. Installer Unreal Engine \xe0 partir du launcher d&#39;Epic Games",id:"2-installer-unreal-engine-\xe0-partir-du-launcher-depic-games",level:4},{value:"Directives pour l&#39;exportation d&#39;assets depuis Unreal",id:"directives-pour-lexportation-dassets-depuis-unreal",level:2},{value:"Conseils suppl\xe9mentaires",id:"conseils-suppl\xe9mentaires",level:2},{value:"Conventions de d\xe9nomination des assets recommand\xe9es",id:"conventions-de-d\xe9nomination-des-assets-recommand\xe9es",level:3},{value:"Assets Thumbnails",id:"assets-thumbnails",level:3},{value:"Exportation de vos assets",id:"exportation-de-vos-assets",level:2},{value:"R\xe9flexions apr\xe8s l&#39;exportation",id:"r\xe9flexions-apr\xe8s-lexportation",level:3}],c={toc:m};function u(e){var t=e.components,o=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Actuellement, tout notre workflow pour l'exportation de contenu passe par Unreal Engine, car les assets doivent \xeatre export\xe9s et pr\xeat de la bonne mani\xe8re avant d'\xeatre accessibles par le jeu. Cette page donnera une vue d'ensemble et contiendra des informations fondamentales qui pourront \xeatre consult\xe9es \xe0 tout moment pendant la cr\xe9ation des assets."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Avant de continuer, assurez-vous de lire l'article ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/next/core-concepts/assets"},"Assets")," !"))),(0,r.kt)("h2",{id:"installer-unreal-engine-4"},"Installer Unreal Engine 4"),(0,r.kt)("p",null,"La premi\xe8re \xe9tape pour cr\xe9er vos propres assets, est de t\xe9l\xe9charger et d'installer Unreal Engine."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Petit \xe0 petit, nous sommes en mesure de permettre le chargement de certains assets sans avoir besoin de les exporter dans Unreal, comme les ",(0,r.kt)("strong",{parentName:"p"},"Textures")," et bient\xf4t\u2122 les ",(0,r.kt)("strong",{parentName:"p"},"Sons"),"."))),(0,r.kt)("h4",{id:"1-t\xe9l\xe9charger-et-installer-epic-games-launcher"},"1. T\xe9l\xe9charger et installer ",(0,r.kt)("a",{parentName:"h4",href:"https://www.unrealengine.com/en-US/download/ue_non_games"},"Epic Games Launcher")),(0,r.kt)("p",null,"Suivez les \xe9tapes pour accepter les conditions d'Unreal Engine"),(0,r.kt)("h4",{id:"2-installer-unreal-engine-\xe0-partir-du-launcher-depic-games"},"2. Installer Unreal Engine \xe0 partir du launcher d'Epic Games"),(0,r.kt)("p",null,"La version d'Unreal de Nanos World est : ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"4.26.2"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Acc\xe9dez \xe0 l'onglet ",(0,r.kt)("strong",{parentName:"li"},"Unreal Engine")),(0,r.kt)("li",{parentName:"ol"},"Ouvrir ",(0,r.kt)("strong",{parentName:"li"},"Biblioth\xe8que")),(0,r.kt)("li",{parentName:"ol"},"Appuyez ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"+"))," et s\xe9lectionner la version correcte d'",(0,r.kt)("strong",{parentName:"li"},"Unreal Engine")),(0,r.kt)("li",{parentName:"ol"},"Avant de l'installer, s\xe9lectionnez ",(0,r.kt)("strong",{parentName:"li"},"Options")," dans le menu d\xe9roulant et d\xe9s\xe9lectionnez tous les \xe9l\xe9ments (ou au moins tous ceux de ",(0,r.kt)("strong",{parentName:"li"},"Plateformes cibles"),") qui ne sont pas n\xe9cessaires")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Selecting Options in the Dropdown",src:n(14637).Z,width:"492",height:"315"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deselecting all options",src:n(87130).Z,width:"658",height:"512"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Veuillez vous r\xe9f\xe9rer \xe0 la ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/GettingStarted"},"documentation officielle d'Unreal")," pour plus d'informations et de tutoriels. Pour le bien de cet article, nous ne couvrirons pas trop de d\xe9tails sur les particularit\xe9s d'Unreal."))),(0,r.kt)("h2",{id:"directives-pour-lexportation-dassets-depuis-unreal"},"Directives pour l'exportation d'assets depuis Unreal"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cr\xe9ez toujours un ",(0,r.kt)("strong",{parentName:"li"},"Dossier racine")," avec le nom de votre pack (par exemple ",(0,r.kt)("inlineCode",{parentName:"li"},"/Content/My_Weapon_Pack/"),")"," et mettez tout le contenu que vous utilisez \xe0 l'int\xe9rieur (vous pouvez aussi cr\xe9er des sous-dossiers)"),(0,r.kt)("li",{parentName:"ol"},"N'utilisez pas le ",(0,r.kt)("strong",{parentName:"li"},"contenu du moteur")," (c'est-\xe0-dire mat\xe9riaux ou Meshes du moteur). Si vous souhaitez les utiliser, nous vous recommandons de les copier dans votre dossier Content/Your_Pack, sinon ils risquent de ne pas \xeatre export\xe9s correctement")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Il y a du ",(0,r.kt)("strong",{parentName:"p"},"contenu du moteur")," qu'il est permis d'utiliser, mais uniquement \xe0 partir des dossiers suivants ",(0,r.kt)("em",{parentName:"p"},"(ceux-ci sont d\xe9j\xe0 inclus par le jeu de base et peuvent \xeatre utilis\xe9s en toute s\xe9curit\xe9)")," :"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/Engine/Functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/Engine/BasicShapes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/Engine/ArtTools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/Engine/EngineMaterials"))))),(0,r.kt)("h2",{id:"conseils-suppl\xe9mentaires"},"Conseils suppl\xe9mentaires"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Utilisez un mod\xe8le de nom appropri\xe9 pour vos assets"),(0,r.kt)("li",{parentName:"ol"},"Utilisez des assets de petite taille et configurez correctement la compression des textures (les gros fichiers sont mauvais pour la bande passante du r\xe9seau). Nous recommandons une taille maximale de 2048x2048 pour les textures, car elles p\xe8seront 5 Mo chacune")),(0,r.kt)("h3",{id:"conventions-de-d\xe9nomination-des-assets-recommand\xe9es"},"Conventions de d\xe9nomination des assets recommand\xe9es"),(0,r.kt)("p",null,"Nous vous recommandons vivement et vous encourageons \xe0 suivre les ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Allar/ue4-style-guide#1-asset-naming-conventions-"},"conventions de d\xe9nomination des assets d'Allar"),". Nous avons r\xe9sum\xe9 ici les plus courantes :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Type d'assets")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Pr\xe9fixe")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Suffixe")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Skeletal Mesh"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SK_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Static Mesh"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SM_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Physical Asset"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PHYS_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Material"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"M_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Material Instance"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MI_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Animation"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Animation Montage"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Particle"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"P_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Sound Wave"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Sound Cue"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A_")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_Cue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Texture"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T_")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_?")," ","(","voir ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/Allar/ue4-style-guide#anc-textures"},"Textures"),")")))),(0,r.kt)("h3",{id:"assets-thumbnails"},"Assets Thumbnails"),(0,r.kt)("p",null,"It is a good practice to include thumbnails of your assets into a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"Thumbnails/")," in the root of your Asset Pack. This is a convention as the ",(0,r.kt)("strong",{parentName:"p"},"Sandbox")," game-mode reads from it to display on Spawn Menu."),(0,r.kt)("h2",{id:"exportation-de-vos-assets"},"Exportation de vos assets"),(0,r.kt)("p",null,"Apr\xe8s avoir cr\xe9\xe9 vos assets, les exporter depuis Unreal Engine revient \xe0 emballer un jeu."),(0,r.kt)("p",null,"For that, select ",(0,r.kt)("strong",{parentName:"p"},"File \u27a1 Package Project \u27a1 Windows ","(","64-bit",")")," and select a folder to save."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(39008).Z,width:"1919",height:"1038"})),(0,r.kt)("p",null,"Cela lancera le processus d'exportation et d'emballage, qui peut prendre un certain temps selon que les assets ont d\xe9j\xe0 \xe9t\xe9 charg\xe9s ou non. En g\xe9n\xe9ral, elle est plus longue la premi\xe8re fois."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(19687).Z,width:"555",height:"79"})),(0,r.kt)("p",null,"Apr\xe8s avoir termin\xe9, vous pouvez vous retrouver avec un dossier comme celui-ci :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(92744).Z,width:"653",height:"160"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Remarquez que vous obtenez un ",(0,r.kt)("inlineCode",{parentName:"p"},"*.exe")," qui est en fait le \"Jeu\" que vous venez de cr\xe9er ! Mais nous ne l'utiliserons pas, nous voulons seulement les assets qu'il a g\xe9n\xe9r\xe9s."))),(0,r.kt)("p",null,"After packaging your project, we will manually copy the exported folder from it, the one we are looking for probably will be located at a ",(0,r.kt)("inlineCode",{parentName:"p"},"Content/")," inside the main folder beside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Engine/")," ","(","this folder name may vary if you are using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/assets-modding/creating-assets/adk-assets-development-kit"},"ADK")," or not",")","."),(0,r.kt)("p",null,"Dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"Content/")," vous allez pouvoir localiser le dossier que vous avez cr\xe9\xe9 (",(0,r.kt)("inlineCode",{parentName:"p"},"MyAssetPack/"),"). This is the folder we will copy which will become our ",(0,r.kt)("a",{parentName:"p",href:"/docs/core-concepts/assets"},"Asset Pack"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Maintenant, copiez-le dans votre dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"Server/Assets/"),", cr\xe9ez et configurez votre ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.toml")," et vous avez termin\xe9 !"))),(0,r.kt)("h3",{id:"r\xe9flexions-apr\xe8s-lexportation"},"R\xe9flexions apr\xe8s l'exportation"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"N'oubliez pas de configurer dans votre ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.toml")," le nom du dossier Unreal (le nom du dossier que vous venez de copier) dans le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"unreal_folder")," ! Apr\xe8s cela, vous \xeates autoris\xe9 \xe0 renommer le dossier Asset Pack !"))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ne renommez ou ne supprimez jamais un fichier/dossier dans le dossier final de votre Asset Pack ! Cela brisera toutes les r\xe9f\xe9rences utilis\xe9es par vos assets."))))}u.isMDXComponent=!0},14637:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-01-6b2776a4d18cdaad1944c21b3b18b011.jpg"},87130:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-02-cd76b92f1dd5e4c11951b7ad0b7864ea.jpg"},39008:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-03-418d44df119162f5f538805c94ff26c1.jpg"},19687:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-04-e53113676ea092c532282b5d3c06a2b3.jpg"},92744:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-05-52e160ea3f6dd7630fc9f6be5c40f775.jpg"}}]);