"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7737],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(34334),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(83117),a=n(67294),i=n(34334),o=n(72389),l=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,h=e.groupId,g=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),C=w.tabGroupChoices,S=w.setTabGroupChoices,P=(0,a.useState)(b),N=P[0],x=P[1],T=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var D=C[h];null!=D&&D!==N&&k.some((function(e){return e.value===D}))&&x(D)}var O=function(e){var t=e.currentTarget,n=T.indexOf(t),r=k[n].value;r!==N&&(j(t),x(r),null!=h&&S(h,String(r)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;n=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var i,o=T.indexOf(e.currentTarget)-1;n=null!=(i=T[o])?i:T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:O,onClick:O},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},87469:function(e,t,n){n.d(t,{PZ:function(){return k},SM:function(){return l},Ut:function(){return v},YS:function(){return o},Yb:function(){return d},aj:function(){return h},p2:function(){return y},rt:function(){return g}});n(83117),n(80102),n(67294);var r=n(3905),a=n(80143),i=function(){return(0,a.zu)().path},o=function(e){var t=e.title,n=e.description,a=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:i()+"/"+a},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},l=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},t,(0,r.kt)("span",null,n))},s=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},c=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},m=function(e){return(0,r.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},f=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},h={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},g={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},v={Vector:function(){return c("Vector")},Rotator:function(){return c("Rotator")},Color:function(){return c("Color")},Quat:function(){return c("Quat","quaternion")},Vector2D:function(){return c("Vector2D","vectortwod")}},k={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Billboard:function(){return p("Billboard")},Blueprint:function(){return p("Blueprint")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},Database:function(){return p("Database")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},y={StaticMesh:function(){return m("StaticMesh Asset")},SkeletalMesh:function(){return m("SkeletalMesh Asset")},Animation:function(){return m("Animation Asset")},Particle:function(){return m("Particle Asset")},Material:function(){return m("Material Asset")},Map:function(){return m("Map Asset")},Blueprint:function(){return m("Blueprint Asset")},Sound:function(){return f("Sound Asset or Special Path")},Image:function(){return f("Image Special Path")},HTML:function(){return f("HTML Special Path")}}},36305:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(65488),l=n(85162),s=n(87469),u=["components"],c={title:"D\xe9marrage rapide",description:"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!",sidebar_position:1,tags:["scripting"]},p=void 0,d={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",title:"D\xe9marrage rapide",description:"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/quick-start.mdx",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/fr/docs/next/getting-started/quick-start",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/quick-start.mdx",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",sidebarPosition:1,frontMatter:{title:"D\xe9marrage rapide",description:"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!",sidebar_position:1,tags:["scripting"]},sidebar:"main",previous:{title:"\ud83e\udd1d Contribuer \xe0 la documentation",permalink:"/fr/docs/next/contributing-to-the-docs"},next:{title:"\ud83d\udcd1 Liste compl\xe8te des Tutoriels",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/"}},m={},f=[{value:"\xc9tape 1 : T\xe9l\xe9charger le serveur",id:"\xe9tape-1--t\xe9l\xe9charger-le-serveur",level:2},{value:"\xc9tape 2 : Cr\xe9er un package basique",id:"\xe9tape-2--cr\xe9er-un-package-basique",level:2},{value:"\xc9tape 3 : Ajout de fonctionnalit\xe9s de script",id:"\xe9tape-3--ajout-de-fonctionnalit\xe9s-de-script",level:2},{value:"Step 4: Starting the server",id:"step-4-starting-the-server",level:2},{value:"\xc9tape 4 : Rejoignez votre serveur",id:"\xe9tape-4--rejoignez-votre-serveur",level:2},{value:"Extra Step: Spawning Characters",id:"extra-step-spawning-characters",level:2},{value:"Spawning a Character for the Player",id:"spawning-a-character-for-the-player",level:3},{value:"Destroying the Character when the Player leaves the Server",id:"destroying-the-character-when-the-player-leaves-the-server",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"\xc9tape suivante recommand\xe9e",id:"\xe9tape-suivante-recommand\xe9e",level:4}],h={toc:f};function g(e){var t=e.components,c=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"D\xe9marrez votre serveur et votre premier Paquet en moins de 10 minutes!"),(0,i.kt)("h2",{id:"\xe9tape-1--t\xe9l\xe9charger-le-serveur"},"\xc9tape 1 : T\xe9l\xe9charger le serveur"),(0,i.kt)("p",null,"Vous avez ",(0,i.kt)("strong",{parentName:"p"},"trois")," options pour t\xe9l\xe9charger le serveur nanos world :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Utilisez l'executable (",(0,i.kt)("em",{parentName:"li"},".exe"),") d\xe9j\xe0 situ\xe9 \xe0 ",(0,i.kt)("inlineCode",{parentName:"li"},"nanos-world/Server/NanosWorldServer.exe")," (si vous avez t\xe9l\xe9charg\xe9 le jeu de base)."),(0,i.kt)("li",{parentName:"ol"},"Use SteamCMD to ",(0,i.kt)("a",{parentName:"li",href:"/fr/docs/next/core-concepts/server-manual/server-installation"},"download nanos world\u2122 Dedicated Server"),"."),(0,i.kt)("li",{parentName:"ol"},"Or Download ",(0,i.kt)("strong",{parentName:"li"},"nanos world\u2122 Dedicated Server")," tool from Steam Client.")),(0,i.kt)("h2",{id:"\xe9tape-2--cr\xe9er-un-package-basique"},"\xc9tape 2 : Cr\xe9er un package basique"),(0,i.kt)("p",null,"After downloading the server, let's create a basic Package. We will use the handy CLI tool to speed up the proccess:"),(0,i.kt)("p",null,"For that, open a terminal in your server folder and run the following command:"),(0,i.kt)(o.Z,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"cmd",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli add package my-awesome-package\n"))),(0,i.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.sh --cli add package my-awesome-package\n")))),(0,i.kt)("p",null,"After that, you will end up with a new folder inside ",(0,i.kt)("inlineCode",{parentName:"p"},"Packages/")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"my-awesome-package/"),". Inside that there will be 3 other folders: ",(0,i.kt)("inlineCode",{parentName:"p"},"Server/"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Client/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Shared/"),", and a config file ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.toml"),"."),(0,i.kt)("h2",{id:"\xe9tape-3--ajout-de-fonctionnalit\xe9s-de-script"},"\xc9tape 3 : Ajout de fonctionnalit\xe9s de script"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"my-awesome-package/Server/Index.lua")," in your preferred editor (we recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"VSCode"),"), and let's edit our first script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Packages/my-awesome-package/Server/Index.lua"',title:'"Packages/my-awesome-package/Server/Index.lua"'},'-- Affichons un message dans la console\nPackage.Log("Chargement de quelques Props =D")\n\n-- Faisons appara\xeetre quelques Props\nprop_table = Prop(Vector(200, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenTable")\nprop_chair = Prop(Vector(400, 200, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenChair")\nprop_tire = Prop(Vector(600, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_TireLarge")\n')),(0,i.kt)("h2",{id:"step-4-starting-the-server"},"Step 4: Starting the server"),(0,i.kt)("p",null,"Now let's start the server with the package you just created! For that, simply double click or launch the server from the terminal:"),(0,i.kt)(o.Z,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"cmd",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe\n"))),(0,i.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.sh\n")))),(0,i.kt)("p",null,"After starting it, your console will display something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[display]  nanos world (C) Copyright nanos. All Rights Reserved.\n[display]  Starting Server at Port: 7777. Version: 0.0.0. Map: 'nanos-world::TestingMap'.\n[display]  Loading Package 'my-awesome-package'...\n[script]   Loading some Props =D\n[display]  Package 'my-awesome-package' loaded.\n[display]  Loading Package 'map-package'...\n[display]  Package 'map-package' loaded.\n")),(0,i.kt)("p",null,'You can see it loaded your package and outputted the text "Loading some Props =D" on it.'),(0,i.kt)("h2",{id:"\xe9tape-4--rejoignez-votre-serveur"},"\xc9tape 4 : Rejoignez votre serveur"),(0,i.kt)("p",null,"Now let's see the results in-game! Open nanos world and connect to localhost at ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:7777"),"."),(0,i.kt)("p",null,"After connecting, you will be a flying pawn and will be able to see the props spawned! \ud83d\ude01"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15137).Z,width:"1917",height:"1037"})),(0,i.kt)("h2",{id:"extra-step-spawning-characters"},"Extra Step: Spawning Characters"),(0,i.kt)("h3",{id:"spawning-a-character-for-the-player"},"Spawning a Character for the Player"),(0,i.kt)("p",null,"You may have noticed you are just a wandering soul flying around, let's give you some flesh! For that, we will need to interact with some ",(0,i.kt)("strong",{parentName:"p"},"Events"),"."),(0,i.kt)("p",null,"Ajoutons du code dans votre ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.lua"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- Function to spawn a Character to a player\nfunction SpawnCharacter(player)\n    -- Spawns a Character at position 0, 0, 0 with default\'s constructor parameters\n    local new_character = Character(Vector(0, 0, 0))\n\n    -- Possess the new Character\n    player:Possess(new_character)\nend\n\n-- Subscribes to an Event which is triggered when Players join the server (i.e. Spawn)\nPlayer.Subscribe("Spawn", SpawnCharacter)\n\n-- Iterates for all already connected players and give them a Character as well\n-- This will make sure you also get a Character when you reload the package\nfor k, player in pairs(Player.GetAll()) do\n    SpawnCharacter(player)\nend\n')),(0,i.kt)("p",null,"Pour appliquer vos modifications, ex\xe9cutez la commande dans la console du serveur : ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),". This will also live reload the packages and apply the changes immediatelly."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(32760).Z,width:"1919",height:"1040"})),(0,i.kt)("h3",{id:"destroying-the-character-when-the-player-leaves-the-server"},"Destroying the Character when the Player leaves the Server"),(0,i.kt)("p",null,"Notez que les personnages ne sont pas automatiquement d\xe9truits si le joueur se d\xe9connecte. For that, we will need to Subscribe for when the Player leaves the server (",(0,i.kt)("inlineCode",{parentName:"p"},"Destroy")," event) and manually destroying the Character."),(0,i.kt)("p",null,"Append this code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="my-package/Server/Index.lua"',title:'"my-package/Server/Index.lua"'},'-- When Player leaves the server, destroy it\'s Character\nPlayer.Subscribe("Destroy", function(player)\n    local character = player:GetControlledCharacter()\n    if (character) then\n        character:Destroy()\n    end\nend)\n')),(0,i.kt)("p",null,"Pour appliquer vos modifications, ex\xe9cutez la commande dans la console du serveur : ",(0,i.kt)("inlineCode",{parentName:"p"},"package reload all"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("admonition",{title:"F\xe9licitations ! Vous avez termin\xe9 votre premier script basique et appris:",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Comment installer votre serveur"),(0,i.kt)("li",{parentName:"ul"},"Comment configurer un package simple"),(0,i.kt)("li",{parentName:"ul"},"Basic interaction with entity Events"),(0,i.kt)("li",{parentName:"ul"},"Faire appara\xeetre des Props"),(0,i.kt)("li",{parentName:"ul"},"Apparition & Destruction des personnages"))),(0,i.kt)("h4",{id:"\xe9tape-suivante-recommand\xe9e"},"\xc9tape suivante recommand\xe9e"),(0,i.kt)(s.SM,{href:"core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"Guide des classes"))}g.isMDXComponent=!0},15137:function(e,t,n){t.Z=n.p+"assets/images/quick-start-01-d39ffd8db99ec85a30e86d3850a52e39.jpg"},32760:function(e,t,n){t.Z=n.p+"assets/images/quick-start-02-435ca7f0b250f71d862f710dc00b6e13.jpg"}}]);