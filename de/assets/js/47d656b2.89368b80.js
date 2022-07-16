"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3872],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(t),p=i,m=g["".concat(o,".").concat(p)]||g[p]||d[p]||s;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},66740:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=t(83117),i=t(80102),s=(t(67294),t(3905)),a=["components"],l={title:"Events Guide",description:"Alles was Sie \xfcber Ereignisse wissen m\xfcssen",sidebar_position:1,tags:["scripting"]},o=void 0,c={unversionedId:"core-concepts/scripting/events-guide",id:"core-concepts/scripting/events-guide",title:"Events Guide",description:"Alles was Sie \xfcber Ereignisse wissen m\xfcssen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/scripting/events-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/events-guide",permalink:"/de/docs/next/core-concepts/scripting/events-guide",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/events-guide.md",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",sidebarPosition:1,frontMatter:{title:"Events Guide",description:"Alles was Sie \xfcber Ereignisse wissen m\xfcssen",sidebar_position:1,tags:["scripting"]},sidebar:"main",previous:{title:"Classes Guide",permalink:"/de/docs/next/core-concepts/scripting/classes-guide"},next:{title:"Beh\xf6rdenkonzepte",permalink:"/de/docs/next/core-concepts/scripting/authority-concepts"}},u={},d=[{value:"Klassenereignisse",id:"klassenereignisse",level:2},{value:"Abonnieren f\xfcr Klassenereignisse",id:"abonnieren-f\xfcr-klassenereignisse",level:3},{value:"Abmeldung von Klassenereignissen",id:"abmeldung-von-klassenereignissen",level:3},{value:"Abmeldung von allen Events",id:"abmeldung-von-allen-events",level:4},{value:"Abmeldung eines bestimmten Ereignis-R\xfcckrufs",id:"abmeldung-eines-bestimmten-ereignis-r\xfcckrufs",level:4},{value:"Entit\xe4ts-Ereignisse",id:"entit\xe4ts-ereignisse",level:2},{value:"Abonnieren f\xfcr Entit\xe4ts-Events",id:"abonnieren-f\xfcr-entit\xe4ts-events",level:3},{value:"Entit\xe4ts-Events abbestellen",id:"entit\xe4ts-events-abbestellen",level:3},{value:"Abmeldung von allen Entit\xe4ts-Events",id:"abmeldung-von-allen-entit\xe4ts-events",level:4},{value:"Abmeldung von einem bestimmten Entity Event Callback",id:"abmeldung-von-einem-bestimmten-entity-event-callback",level:4},{value:"Eigene Ereignisse",id:"eigene-ereignisse",level:2}],g={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Alles was Sie \xfcber Veranstaltungen wissen m\xfcssen."),(0,s.kt)("h2",{id:"klassenereignisse"},"Klassenereignisse"),(0,s.kt)("p",null,"In der Nano-Welt k\xf6nnen alle Aktionen von Spielern oder Entit\xe4ten durch ",(0,s.kt)("strong",{parentName:"p"},"Ereignisse")," erreicht werden."),(0,s.kt)("p",null,"Das grundlegendste Ereignis, um ein Beispiel zu bringen, ist der ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Spawn")),". Jedes Mal, wenn eine Entit\xe4t erzeugt wird, wird das Ereignis ",(0,s.kt)("inlineCode",{parentName:"p"},"Spawn")," ausgel\xf6st."),(0,s.kt)("h3",{id:"abonnieren-f\xfcr-klassenereignisse"},"Abonnieren f\xfcr Klassenereignisse"),(0,s.kt)("p",null,"Die Anmeldung f\xfcr Veranstaltungen ist sehr einfach und unkompliziert mit der Methode ",(0,s.kt)("inlineCode",{parentName:"p"},"Abonnieren"),", sagen wir, wir wollen wissen, wo ein Spieler dem Server beigetreten ist:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'Player.Subscribe("Spawn", function(player)\n    Package.Log(player:GetName() .. " ist beigetreten!")\nend)\n')),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Most events are triggered on both Client and Server sides, only a few rare exceptions which will be elicited by the ",(0,s.kt)("a",{parentName:"p",href:"/de/docs/next/core-concepts/scripting/authority-concepts#methods-and-events-availability"},"Availability"),".")),(0,s.kt)("h3",{id:"abmeldung-von-klassenereignissen"},"Abmeldung von Klassenereignissen"),(0,s.kt)("p",null,"Momentan gibt es zwei M\xf6glichkeiten, um sich von Veranstaltungen abzumelden:"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"Hinweis:")," Die Abbestellung von Events ",(0,s.kt)("strong",{parentName:"p"},"wird immer")," nur von Veranstaltungen entfernen, die in dem Paket, das Sie gerade registriert haben, registriert wurden.")),(0,s.kt)("h4",{id:"abmeldung-von-allen-events"},"Abmeldung von allen Events"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- Dies wird die Registrierung von allen "Spawn"-Events des Spielers entfernen, die in diesem Paket registriert sind\nPlayer.Abmelden ("Spawn")\n')),(0,s.kt)("h4",{id:"abmeldung-eines-bestimmten-ereignis-r\xfcckrufs"},"Abmeldung eines bestimmten Ereignis-R\xfcckrufs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- Deklariert den R\xfcckruf vorher\nFunktion OnSpawnPlayer(player)\n    Package.Log(player:GetName() .. " ist beigetreten!")\nEnde\n\n-- Abonniert das Event und \xfcbertr\xe4gt den Callback\nPlayer.Subscribe("Spawn", OnSpawnPlayer)\n\n-- Abonniert das gleiche Event zweimal\nSpieler. ubscribe("Spawn", function(player)\n    Package.Log(player:GetName() .. " ist wieder beigetreten!")\nend)\n\n-- Abbestellt nur den ersten Callback\nPlayer. nsubscribe("Spawn", OnSpawnPlayer)\n\n-- Dies l\xf6st weiterhin "Spieler ist wieder beigetreten" aus, l\xf6st aber nicht mehr\n-- "Spieler hat beigetreten"\n')),(0,s.kt)("h2",{id:"entit\xe4ts-ereignisse"},"Entit\xe4ts-Ereignisse"),(0,s.kt)("p",null,"In nanos Welt ist es m\xf6glich, sich auch f\xfcr Veranstaltungen auf bestimmten Entit\xe4ten zu registrieren auf diese Weise wird der Callback nur ausgel\xf6st, wenn die bestimmte Entit\xe4t der Grund f\xfcr das Ereignis ist."),(0,s.kt)("h3",{id:"abonnieren-f\xfcr-entit\xe4ts-events"},"Abonnieren f\xfcr Entit\xe4ts-Events"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- Spawnt einen Charakter\nlokales my_character = Character()\n\nmy_character:Subscribe("EnterVehicle", funktion(Selbst, Fahrzeug)\n    -- Mein Zeichen eingegebenes Fahrzeug\nEnde)\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Beachten Sie, dass, sobald die Entit\xe4t zerst\xf6rt ist, alle registrierten Ereignisse automatisch nicht registriert werden!")),(0,s.kt)("h3",{id:"entit\xe4ts-events-abbestellen"},"Entit\xe4ts-Events abbestellen"),(0,s.kt)("p",null,"Momentan gibt es zwei M\xf6glichkeiten, um sich von Veranstaltungen abzumelden:"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"Hinweis:")," Die Abbestellung von Events ",(0,s.kt)("strong",{parentName:"p"},"wird immer")," nur von Veranstaltungen entfernen, die in dem Paket, das Sie gerade registriert haben, registriert wurden.")),(0,s.kt)("h4",{id:"abmeldung-von-allen-entit\xe4ts-events"},"Abmeldung von allen Entit\xe4ts-Events"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- Dies wird die Registrierung von allen "EnterVehicle" Ereignissen dieses bestimmten Charakters\n-- registriert in diesem Paket\nmy_character:Unsubscribe("EnterVehicle")\n')),(0,s.kt)("h4",{id:"abmeldung-von-einem-bestimmten-entity-event-callback"},"Abmeldung von einem bestimmten Entity Event Callback"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- Deklariert den R\xfcckruf vorher\nFunktion OnCharacterEnteredVehicle(Charakter, Fahrzeug)\n    -- Eingegebene Fahrzeuge!\nEnde\n\n-- Abonniert das Event und \xfcbergeben den Callback\nmy_character:Subscribe("EnterVehicle", OnCharacterEnteredVehicle)\n\n-- Abonniert das gleiche Ereignis zweimal\nmy_character:Subscribe("EnterVehicle", Funktion (Zeichen, Fahrzeug)\n    -- Fahrzeug erneut eingegeben!\nend)\n\n-- Abbestellt nur den ersten R\xfcckruf\nmy_character:Abmelden ("EnterVehicle", OnCharacterEnteredVehicle)\n')),(0,s.kt)("h2",{id:"eigene-ereignisse"},"Eigene Ereignisse"),(0,s.kt)("p",null,"In der nanos-Welt ist es m\xf6glich, benutzerdefinierte Ereignisse zu definieren und aufzurufen. For that, please refer to ",(0,s.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/static-classes/events"},"Events")," Static Class:"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Benutzerdefinierte Ereignisse werden immer in allen Paketen aufgerufen und ausgel\xf6st.")))}p.isMDXComponent=!0}}]);