"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8238],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?s.createElement(v,o(o({ref:n},d),{},{components:t})):s.createElement(v,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},57427:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var s=t(83117),r=t(80102),a=(t(67294),t(3905)),o=["components"],i={title:"Events Guide",description:"Tout ce que vous devez savoir sur les \xc9v\xe8nements",sidebar_position:1,tags:["scripting"]},c=void 0,l={unversionedId:"core-concepts/scripting/events-guide",id:"core-concepts/scripting/events-guide",title:"Events Guide",description:"Tout ce que vous devez savoir sur les \xc9v\xe8nements",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/scripting/events-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/events-guide",permalink:"/fr/docs/next/core-concepts/scripting/events-guide",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/events-guide.md",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",sidebarPosition:1,frontMatter:{title:"Events Guide",description:"Tout ce que vous devez savoir sur les \xc9v\xe8nements",sidebar_position:1,tags:["scripting"]},sidebar:"main",previous:{title:"Guide des classes",permalink:"/fr/docs/next/core-concepts/scripting/classes-guide"},next:{title:"Authority Concepts",permalink:"/fr/docs/next/core-concepts/scripting/authority-concepts"}},d={},u=[{value:"\xc9v\xe8nements de classe",id:"\xe9v\xe8nements-de-classe",level:2},{value:"S&#39;abonner \xe0 des \xc9v\xe8nements de classe",id:"sabonner-\xe0-des-\xe9v\xe8nements-de-classe",level:3},{value:"Se d\xe9sabonner des \xc9v\xe8nements de classe",id:"se-d\xe9sabonner-des-\xe9v\xe8nements-de-classe",level:3},{value:"Se d\xe9sabonner de tous les \xe9v\xe8nements de classe",id:"se-d\xe9sabonner-de-tous-les-\xe9v\xe8nements-de-classe",level:4},{value:"Se d\xe9sabonner d&#39;un \xe9v\xe8nement de classe sp\xe9cifique",id:"se-d\xe9sabonner-dun-\xe9v\xe8nement-de-classe-sp\xe9cifique",level:4},{value:"\xc9v\xe8nements d&#39;entit\xe9",id:"\xe9v\xe8nements-dentit\xe9",level:2},{value:"S&#39;abonner \xe0 des \xc9v\xe8nements d&#39;entit\xe9",id:"sabonner-\xe0-des-\xe9v\xe8nements-dentit\xe9",level:3},{value:"Se d\xe9sabonner des \xc9v\xe8nements d&#39;entit\xe9",id:"se-d\xe9sabonner-des-\xe9v\xe8nements-dentit\xe9",level:3},{value:"Se d\xe9sabonner de tous les \xc9v\xe8nements d&#39;entit\xe9",id:"se-d\xe9sabonner-de-tous-les-\xe9v\xe8nements-dentit\xe9",level:4},{value:"Se d\xe9sabonner d&#39;un \xe9v\xe8nement d&#39;entit\xe9 sp\xe9cifique",id:"se-d\xe9sabonner-dun-\xe9v\xe8nement-dentit\xe9-sp\xe9cifique",level:4},{value:"\xc9v\xe9nements personnalis\xe9s",id:"\xe9v\xe9nements-personnalis\xe9s",level:2}],p={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tout ce que vous devez savoir sur les \xc9v\xe8nements."),(0,a.kt)("h2",{id:"\xe9v\xe8nements-de-classe"},"\xc9v\xe8nements de classe"),(0,a.kt)("p",null,"Dans nanos world, toutes les actions effectu\xe9es par des joueurs ou des entit\xe9s peuvent \xeatre obtenues gr\xe2ce \xe0 des ",(0,a.kt)("strong",{parentName:"p"},"\xe9v\xe8nements"),"."),(0,a.kt)("p",null,"L'\xe9v\xe8nement le plus basique pour donner un exemple est ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Spawn")),". Chaque fois o\xf9 une entit\xe9 appara\xeet, l'\xe9v\xe8nement ",(0,a.kt)("inlineCode",{parentName:"p"},"Spawn")," est d\xe9clench\xe9."),(0,a.kt)("h3",{id:"sabonner-\xe0-des-\xe9v\xe8nements-de-classe"},"S'abonner \xe0 des \xc9v\xe8nements de classe"),(0,a.kt)("p",null,"S'abonner \xe0 des \xe9v\xe8nements de classe est tr\xe8s simple, pour cela il faut utiliser la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscribe"),". Disons que nous voulons savoir quand un joueur a rejoint le serveur :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'Player.Subscribe("Spawn", function(player)\n    Package.Log(player:GetName() .. " a rejoint!")\nend)\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Most events are triggered on both Client and Server sides, only a few rare exceptions which will be elicited by the ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/next/core-concepts/scripting/authority-concepts#methods-and-events-availability"},"Availability"),".")),(0,a.kt)("h3",{id:"se-d\xe9sabonner-des-\xe9v\xe8nements-de-classe"},"Se d\xe9sabonner des \xc9v\xe8nements de classe"),(0,a.kt)("p",null,"Actuellement, il y a deux fa\xe7ons de se d\xe9sabonner d'\xe9v\xe8nements :"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Note :")," Se d\xe9sabonner d'\xe9v\xe8nements affectera ",(0,a.kt)("strong",{parentName:"p"},"toujours")," seulement le Package que vous utilisez.")),(0,a.kt)("h4",{id:"se-d\xe9sabonner-de-tous-les-\xe9v\xe8nements-de-classe"},"Se d\xe9sabonner de tous les \xe9v\xe8nements de classe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- Ceci affectera tous les \xe9v\xe8nements "Spawn" de joueur dans le package actuel\nPlayer.Unsubscribe("Spawn")\n')),(0,a.kt)("h4",{id:"se-d\xe9sabonner-dun-\xe9v\xe8nement-de-classe-sp\xe9cifique"},"Se d\xe9sabonner d'un \xe9v\xe8nement de classe sp\xe9cifique"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- D\xe9claration de la m\xe9thode de callback au pr\xe9alable\nfunction OnSpawnPlayer(player)\n    Package.Log(player:GetName() .. " a rejoint!")\nend\n\n-- Abonnement \xe0 l\'\xe9v\xe8nement, en pr\xe9cisant la m\xe9thode de callback\nPlayer.Subscribe("Spawn", OnSpawnPlayer)\n\n-- Abonnement au m\xeame \xe9v\xe8nement, une seconnde fois\nPlayer.Subscribe("Spawn", function(player)\n    Package.Log(player:GetName() .. " a encore rejoint!")\nend)\n\n-- D\xe9sabonnement de la premi\xe8re m\xe9thode de callback seulement\nPlayer.Unsubscribe("Spawn", OnSpawnPlayer)\n\n-- Cela d\xe9clenchera toujours "joueur a encore rejoint!" mais ne d\xe9clenchera plus\n-- "joueur a rejoint!"\n')),(0,a.kt)("h2",{id:"\xe9v\xe8nements-dentit\xe9"},"\xc9v\xe8nements d'entit\xe9"),(0,a.kt)("p",null,"Dans nanos world, il est possible de s'abonner \xe0 des \xe9v\xe8nements pour des Entit\xe9s sp\xe9cifiques \xe9galement, par cons\xe9quent la m\xe9thode de callback sera appel\xe9e si cette entit\xe9 sp\xe9cifique a d\xe9clench\xe9 l'\xe9v\xe8nement."),(0,a.kt)("h3",{id:"sabonner-\xe0-des-\xe9v\xe8nements-dentit\xe9"},"S'abonner \xe0 des \xc9v\xe8nements d'entit\xe9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- Faire appara\xeetre un personnage\nlocal my_character = Character()\n\nmy_character:Subscribe("EnterVehicle", function(self, vehicle)\n    -- my_character est entr\xe9 dans le v\xe9hicule\nend)\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\xc0 savoir qu'une fois l'entit\xe9 d\xe9truite, tous les \xe9v\xe8nements enregistr\xe9s pour celle-ci seront automatiquement retir\xe9s !")),(0,a.kt)("h3",{id:"se-d\xe9sabonner-des-\xe9v\xe8nements-dentit\xe9"},"Se d\xe9sabonner des \xc9v\xe8nements d'entit\xe9"),(0,a.kt)("p",null,"Actuellement, il y a deux fa\xe7ons de se d\xe9sabonner d'\xe9v\xe8nements :"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Note :")," Se d\xe9sabonner d'\xe9v\xe8nements affectera ",(0,a.kt)("strong",{parentName:"p"},"toujours")," seulement le Package que vous utilisez.")),(0,a.kt)("h4",{id:"se-d\xe9sabonner-de-tous-les-\xe9v\xe8nements-dentit\xe9"},"Se d\xe9sabonner de tous les \xc9v\xe8nements d'entit\xe9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- Cela va retirer tous les \xe9v\xe8nements "EnterVehicle" de ce personnage sp\xe9cifique\n-- enregistr\xe9s dans ce Package\nmy_character:Unsubscribe("EnterVehicle")\n')),(0,a.kt)("h4",{id:"se-d\xe9sabonner-dun-\xe9v\xe8nement-dentit\xe9-sp\xe9cifique"},"Se d\xe9sabonner d'un \xe9v\xe8nement d'entit\xe9 sp\xe9cifique"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- D\xe9claration de la m\xe9thode de callback au pr\xe9alable\nfunction OnCharacterEnteredVehicle(character, vehicle)\n    -- Le personnage est entr\xe9 dans le v\xe9hicule !\nend\n\n-- Abonnement \xe0 l\'\xe9v\xe8nement, en pr\xe9cisant la m\xe9thode de callback\nmy_character:Subscribe("EnterVehicle", OnCharacterEnteredVehicle)\n\n-- Abonnement au m\xeame \xe9v\xe8nement, une seconde fois\nmy_character:Subscribe("EnterVehicle", function(character, vehicle)\n    -- Le personnage est encore entr\xe9 dans le v\xe9hicule !\nend)\n\n-- D\xe9sabonnement de la premi\xe8re m\xe9thode de callback seulement\nmy_character:Unsubscribe("EnterVehicle", OnCharacterEnteredVehicle)\n')),(0,a.kt)("h2",{id:"\xe9v\xe9nements-personnalis\xe9s"},"\xc9v\xe9nements personnalis\xe9s"),(0,a.kt)("p",null,"Dans nanos world, il est possible de d\xe9finir et d'appeler des \xc9v\xe8nements personnalis\xe9s. For that, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/next/scripting-reference/static-classes/events"},"Events")," Static Class:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Les \xc9v\xe8nements personnalis\xe9s seront touujours appel\xe9s et d\xe9clench\xe9s dans tous les Packages.")))}m.isMDXComponent=!0}}]);