"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7737],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),a=n(67294),i=n(72389),o=n(29548),u=n(86010),l="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,a.useState)(k),C=w[0],P=w[1],x=[],S=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=N[m];null!=j&&j!==C&&g.some((function(e){return e.value===j}))&&P(j)}var q=function(e){var t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==C&&(S(t),P(r),null!=m&&y(m,r))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},v)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:z,onFocus:q,onClick:q},i,{className:(0,u.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},87469:function(e,t,n){n.d(t,{YS:function(){return o},SM:function(){return u},Yb:function(){return d},aj:function(){return f},rt:function(){return g},Ut:function(){return h},PZ:function(){return k},p2:function(){return b}});n(87462),n(63366),n(67294);var r=n(3905),a=n(65551),i=function(){return(0,a.useActiveVersion)().path},o=function(e){var t=e.title,n=e.description,a=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:i()+"/"+a},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},u=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},t,(0,r.kt)("span",null,n))},l=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},s=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},c=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},m=function(e){return(0,r.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},v=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},f={AuthorityOnly:function(){return l("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return l("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return l("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return l("/img/scripting/both.png","both-sides - this can be called on any side!")}},g={Number:function(){return s("number")},String:function(){return s("string")},Boolean:function(){return s("boolean")},Table:function(){return s("table")},Iterator:function(){return s("iterator")},Any:function(){return s("any")},Function:function(){return s("function")},Nil:function(){return s("nil")}},h={Vector:function(){return c("Vector")},Rotator:function(){return c("Rotator")},Color:function(){return c("Color")},Quat:function(){return c("Quat","quaternion")},Vector2D:function(){return c("Vector2D","vectortwod")}},k={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},b={StaticMesh:function(){return m("StaticMesh Asset")},SkeletalMesh:function(){return m("SkeletalMesh Asset")},Animation:function(){return m("Animation Asset")},Particle:function(){return m("Particle Asset")},Material:function(){return m("Material Asset")},Map:function(){return m("Map Asset")},Sound:function(){return v("Sound Asset or Special Path")},Image:function(){return v("Image Special Path")},HTML:function(){return v("HTML Special Path")}}},36305:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=(n(9877),n(58215),n(87469)),u=["components"],l={description:"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!",sidebar_position:1,tags:["scripting"]},s="D\xe9marrage rapide",c={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",title:"D\xe9marrage rapide",description:"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/quick-start.mdx",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/fr/docs/next/getting-started/quick-start",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/quick-start.mdx",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",sidebarPosition:1,frontMatter:{description:"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!",sidebar_position:1,tags:["scripting"]},sidebar:"main",previous:{title:"\ud83e\udd1d Contribuer \xe0 la documentation",permalink:"/fr/docs/next/contributing-to-the-docs"},next:{title:"\ud83d\udcd1 Complete Tutorials List",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/"}},p=[{value:"\xc9tape 1 : T\xe9l\xe9charger le serveur",id:"\xe9tape-1--t\xe9l\xe9charger-le-serveur",children:[],level:2},{value:"\xc9tape 2 : Cr\xe9er un package basique",id:"\xe9tape-2--cr\xe9er-un-package-basique",children:[],level:2},{value:"\xc9tape 3 : Ajout de fonctionnalit\xe9s de script",id:"\xe9tape-3--ajout-de-fonctionnalit\xe9s-de-script",children:[],level:2},{value:"\xc9tape 4 : Rejoignez votre serveur",id:"\xe9tape-4--rejoignez-votre-serveur",children:[],level:2},{value:"\xc9tape facultative : Apparition d&#39;un personnage pour le joueur",id:"\xe9tape-facultative--apparition-dun-personnage-pour-le-joueur",children:[{value:"Finalisation : D\xe9truire le personnage lorsqu&#39;un joueur quitte le serveur",id:"finalisation--d\xe9truire-le-personnage-lorsquun-joueur-quitte-le-serveur",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[{value:"\xc9tape suivante recommand\xe9e",id:"\xe9tape-suivante-recommand\xe9e",children:[],level:4}],level:2}],d={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"d\xe9marrage-rapide"},"D\xe9marrage rapide"),(0,i.kt)("p",null,"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!"),(0,i.kt)("h2",{id:"\xe9tape-1--t\xe9l\xe9charger-le-serveur"},"\xc9tape 1 : T\xe9l\xe9charger le serveur"),(0,i.kt)("p",null,"Vous avez ",(0,i.kt)("strong",{parentName:"p"},"trois")," options pour t\xe9l\xe9charger le serveur nanos world :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Utilisez l'executable (",(0,i.kt)("em",{parentName:"li"},".exe"),") d\xe9j\xe0 situ\xe9 \xe0 ",(0,i.kt)("inlineCode",{parentName:"li"},"nanos-world/Server/NanosWorldServer.exe")," (si vous avez t\xe9l\xe9charg\xe9 le jeu de base)."),(0,i.kt)("li",{parentName:"ol"},"T\xe9l\xe9chargez l'outil ",(0,i.kt)("strong",{parentName:"li"},"nanos world Dedicated Server")," depuis le client Steam."),(0,i.kt)("li",{parentName:"ol"},"Ou utilisez SteamCMD pour ",(0,i.kt)("a",{parentName:"li",href:"/fr/docs/next/core-concepts/server-manual/server-installation"},"t\xe9l\xe9charger nanos world Dedicated Server"),".")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Le serveur est aussi simple qu'un seul fichier ex\xe9cutable ",(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorldServer.exe"),". Apr\xe8s l'avoir t\xe9l\xe9charg\xe9, ex\xe9cutez-le une fois pour g\xe9n\xe9rer les dossiers appropri\xe9s et initiaux ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Packages")," et le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.toml")," , gardez votre serveur ouvert pour suivre ce guide !"))),(0,i.kt)("h2",{id:"\xe9tape-2--cr\xe9er-un-package-basique"},"\xc9tape 2 : Cr\xe9er un package basique"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Cr\xe9ez un dossier dans ",(0,i.kt)("inlineCode",{parentName:"li"},"Packages/")," pour \xeatre votre Package, nommons-le ",(0,i.kt)("inlineCode",{parentName:"li"},"mon-package/"),"."),(0,i.kt)("li",{parentName:"ol"},"\xc0 l'int\xe9rieur de ",(0,i.kt)("inlineCode",{parentName:"li"},"mon-package/")," cr\xe9ez un dossier appel\xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"Serveur/")," et un fichier appel\xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"Index.lua")," dans ",(0,i.kt)("inlineCode",{parentName:"li"},"Serveur/"),"."),(0,i.kt)("li",{parentName:"ol"},"Dans la console de votre serveur, tapez ",(0,i.kt)("inlineCode",{parentName:"li"},"package load mon-package")," pour charger votre nouveau package et g\xe9n\xe9rer le fichier de configuration ",(0,i.kt)("inlineCode",{parentName:"li"},"Package.toml"),". Vous pouvez \xe9diter ce fichier avec une personnalisation appropri\xe9e plus tard.")),(0,i.kt)("h2",{id:"\xe9tape-3--ajout-de-fonctionnalit\xe9s-de-script"},"\xc9tape 3 : Ajout de fonctionnalit\xe9s de script"),(0,i.kt)("p",null,"Ouvrez le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.lua")," dans votre \xe9diteur ","(","nous vous recommandons d'utiliser ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"vscode"),")",", et \xe9ditons notre premier script :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Packages/my-package/Server/Index.lua"',title:'"Packages/my-package/Server/Index.lua"'},'-- Affichons un message dans la console\nPackage.Log("Chargement de quelques Props =D")\n\n-- Faisons appara\xeetre quelques Props\nprop_table = Prop(Vector(200, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenTable")\nprop_chair = Prop(Vector(400, 200, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenChair")\nprop_tire = Prop(Vector(600, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_TireLarge")\n')),(0,i.kt)("p",null,"Pour appliquer vos modifications, ex\xe9cutez la commande dans la console du serveur : ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("h2",{id:"\xe9tape-4--rejoignez-votre-serveur"},"\xc9tape 4 : Rejoignez votre serveur"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Si vous rejoignez votre serveur, vous pouvez d\xe9j\xe0 voir le r\xe9sultat \ud83d\ude01"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6778).Z,width:"1917",height:"1037"})),(0,i.kt)("h2",{id:"\xe9tape-facultative--apparition-dun-personnage-pour-le-joueur"},"\xc9tape facultative : Apparition d'un personnage pour le joueur"),(0,i.kt)("p",null,"Vous avez peut-\xeatre remarqu\xe9 que vous n\u2019\xeates qu\u2019une \xe2me errante qui vole, donnez vous de la chair ! Pour cela, nous devrons interagir avec certains Events."),(0,i.kt)("p",null,"Ajoutons du code dans votre ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.lua"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Appel\xe9 quand les joueurs rejoignent le serveur (exemple: Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Fait appara\xeetre un personnage \xe0 la position 0, 0, 0 avec les param\xe8tres du constructeur par d\xe9faut\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Poss\xe9der le nouveau personnage\n    new_player:Possess(new_character)\nend)\n')),(0,i.kt)("p",null,"Pour appliquer vos modifications, ex\xe9cutez la commande dans la console du serveur : ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Maintenant si vous rejoignez le serveur, vous allez appara\xeetre dans un personnage !"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(97083).Z,width:"1919",height:"1040"})),(0,i.kt)("h3",{id:"finalisation--d\xe9truire-le-personnage-lorsquun-joueur-quitte-le-serveur"},"Finalisation : D\xe9truire le personnage lorsqu'un joueur quitte le serveur"),(0,i.kt)("p",null,"Notez que les personnages ne sont pas automatiquement d\xe9truits si le joueur se d\xe9connecte. Pour cela, nous devrons nous abonner lorsque le Joueur quittera le serveur ","(",(0,i.kt)("inlineCode",{parentName:"p"},"Destroy"),")"," et d\xe9truire manuellement le Personnage :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Appel\xe9 quand les joueurs rejoignent le serveur (exemple: Spawn)\nPlayer.Subscribe("Spawn", function(new_player)\n    -- Fait appara\xeetre un personnage \xe0 la position 0, 0, 0 avec les param\xe8tres du constructeur par d\xe9faut\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Poss\xe9der le nouveau personnage\n    new_player:Possess(new_character)\nend)\n\n-- Quand le joueur quitte le serveur, d\xe9truire son personnage\nPlayer.Subscribe("Destroy", function(player)\n    local character = player:GetControlledCharacter()\n    if (character) then\n        character:Destroy()\n    end\nend)\n')),(0,i.kt)("p",null,"Pour appliquer vos modifications, ex\xe9cutez la commande dans la console du serveur : ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"F\xe9licitations ! Vous avez termin\xe9 votre premier script basique et appris:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Comment installer votre serveur"),(0,i.kt)("li",{parentName:"ul"},"Comment configurer un package simple"),(0,i.kt)("li",{parentName:"ul"},"Interaction basique avec les \xe9v\xe9nements d'entit\xe9"),(0,i.kt)("li",{parentName:"ul"},"Faire appara\xeetre des Props"),(0,i.kt)("li",{parentName:"ul"},"Apparition & Destruction des personnages")))),(0,i.kt)("h4",{id:"\xe9tape-suivante-recommand\xe9e"},"\xc9tape suivante recommand\xe9e"),(0,i.kt)(o.SM,{href:"core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"Guide des classes"))}m.isMDXComponent=!0},6778:function(e,t,n){t.Z=n.p+"assets/images/quick-start-01-d39ffd8db99ec85a30e86d3850a52e39.jpg"},97083:function(e,t,n){t.Z=n.p+"assets/images/quick-start-02-435ca7f0b250f71d862f710dc00b6e13.jpg"}}]);