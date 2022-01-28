"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9295],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||l[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return i},SM:function(){return s},Yb:function(){return p},aj:function(){return f},rt:function(){return g},Ut:function(){return v},PZ:function(){return k},p2:function(){return b}});n(87462),n(63366),n(67294);var r=n(3905),o=n(80907),a=function(){return(0,o.zu)().path},i=function(e){var t=e.title,n=e.description,o=e.href,i=e.image_src;return(0,r.kt)("a",{class:"card-link",href:o.startsWith("http")?o:a()+"/"+o},(0,r.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},s=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:a()+"/"+n},t,(0,r.kt)("span",null,n))},c=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},d=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},u=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},l=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},p=function(e){var t=e.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},m=function(e){return(0,r.kt)("a",{href:a()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},h=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},f={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},g={Number:function(){return d("number")},String:function(){return d("string")},Boolean:function(){return d("boolean")},Table:function(){return d("table")},Iterator:function(){return d("iterator")},Any:function(){return d("any")},Function:function(){return d("function")},Nil:function(){return d("nil")}},v={Vector:function(){return u("Vector")},Rotator:function(){return u("Rotator")},Color:function(){return u("Color")},Quat:function(){return u("Quat","quaternion")},Vector2D:function(){return u("Vector2D","vectortwod")}},k={Actor:function(){return l("Actor","base-classes/actor")},Paintable:function(){return l("Paintable","base-classes/paintable")},Pickable:function(){return l("Pickable","base-classes/pickable")},Canvas:function(){return l("Canvas")},Cable:function(){return l("Cable")},Character:function(){return l("Character")},File:function(){return l("File")},Grenade:function(){return l("Grenade")},Melee:function(){return l("Melee")},Light:function(){return l("Light")},Particle:function(){return l("Particle")},Player:function(){return l("Player")},Prop:function(){return l("Prop")},Sound:function(){return l("Sound")},SceneCapture:function(){return l("SceneCapture","scene-capture")},StaticMesh:function(){return l("StaticMesh","static-mesh")},TextRender:function(){return l("TextRender","text-render")},Trigger:function(){return l("Trigger")},Vehicle:function(){return l("Vehicle")},Weapon:function(){return l("Weapon")},WebUI:function(){return l("WebUI")}},b={StaticMesh:function(){return m("StaticMesh Asset")},SkeletalMesh:function(){return m("SkeletalMesh Asset")},Animation:function(){return m("Animation Asset")},Particle:function(){return m("Particle Asset")},Material:function(){return m("Material Asset")},Map:function(){return m("Map Asset")},Sound:function(){return h("Sound Asset or Special Path")},Image:function(){return h("Image Special Path")},HTML:function(){return h("HTML Special Path")}}},93849:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(87469),s=["components"],c={description:"Tudo o que voc\xea precisa saber sobre os conceitos de Autoridade & Autoridade de Rede.",sidebar_position:2,tags:["script"]},d="Conceitos de Autoridade",u={unversionedId:"core-concepts/scripting/authority-concepts",id:"version-latest/core-concepts/scripting/authority-concepts",title:"Conceitos de Autoridade",description:"Tudo o que voc\xea precisa saber sobre os conceitos de Autoridade & Autoridade de Rede.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/authority-concepts.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/authority-concepts",permalink:"/pt-BR/docs/core-concepts/scripting/authority-concepts",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/authority-concepts.mdx",tags:[{label:"script",permalink:"/pt-BR/docs/tags/script"}],version:"latest",sidebarPosition:2,frontMatter:{description:"Tudo o que voc\xea precisa saber sobre os conceitos de Autoridade & Autoridade de Rede.",sidebar_position:2,tags:["script"]},sidebar:"version-latest/main",previous:{title:"Events Guide",permalink:"/pt-BR/docs/core-concepts/scripting/events-guide"},next:{title:"Comunica\xe7\xe3o de pacotes",permalink:"/pt-BR/docs/core-concepts/scripting/communicating-between-packages"}},l=[{value:"Autoridade",id:"autoridade",children:[{value:"Methods and Events Availability",id:"methods-and-events-availability",children:[{value:"<AuthorityType.ServerOnly /><strong><code>Lado do servidor</code></strong>",id:"lado-do-servidor",children:[],level:4},{value:"<AuthorityType.ClientOnly /><strong><code>Lado do Cliente</code></strong>",id:"lado-do-cliente",children:[],level:4},{value:"<AuthorityType.AuthorityOnly /><strong><code>Lado de Autoridade</code></strong>",id:"lado-de-autoridade",children:[],level:4},{value:"<AuthorityType.Both /><strong><code>Both Sides</code></strong>",id:"both-sides",children:[],level:4}],level:3}],level:2},{value:"Autoridade de rede",id:"autoridade-de-rede",children:[{value:"Sobrescrevendo a autoridade de rede atual",id:"sobrescrevendo-a-autoridade-de-rede-atual",children:[{value:"Exemplos de a\xe7\xf5es que s\xe3o executadas somente pela Autoridade de Rede desse Actor",id:"exemplos-de-a\xe7\xf5es-que-s\xe3o-executadas-somente-pela-autoridade-de-rede-desse-actor",children:[],level:4}],level:3}],level:2}],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"conceitos-de-autoridade"},"Conceitos de Autoridade"),(0,a.kt)("p",null,"Tudo o que voc\xea precisa saber sobre os conceitos de Autoridade & Autoridade de Rede."),(0,a.kt)("h2",{id:"autoridade"},"Autoridade"),(0,a.kt)("p",null,"Algumas Classes s\xf3 podem ser geradas no servidor, outras s\xf3 podem ser geradas no Cliente, e h\xe1 alguns que podem ser gerados no Servidor ou Cliente. O lado que a Classe \xe9 gerada \xe9 chamado de ",(0,a.kt)("strong",{parentName:"p"},"Autoridade"),"."),(0,a.kt)("h3",{id:"methods-and-events-availability"},"Methods and Events Availability"),(0,a.kt)("p",null,"Alguns m\xe9todos e eventos na API s\xf3 est\xe3o dispon\xedveis em um lado espec\xedfico ","(","Cliente ou Servidor",")",", outros est\xe3o dispon\xedveis apenas no lado que gerou o lado de autoridade",")",":"),(0,a.kt)("h4",{id:"lado-do-servidor"},(0,a.kt)(i.aj.ServerOnly,null),(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Lado do servidor"))),(0,a.kt)("p",null,"M\xe9todo ou eventos que s\xf3 podem ser chamados pelo lado do ",(0,a.kt)("strong",{parentName:"p"},"servidor"),"."),(0,a.kt)("h4",{id:"lado-do-cliente"},(0,a.kt)(i.aj.ClientOnly,null),(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Lado do Cliente"))),(0,a.kt)("p",null,"M\xe9todos ou eventos que s\xf3 podem ser chamados no lado do ",(0,a.kt)("strong",{parentName:"p"},"Cliente"),"."),(0,a.kt)("h4",{id:"lado-de-autoridade"},(0,a.kt)(i.aj.AuthorityOnly,null),(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Lado de Autoridade"))),(0,a.kt)("p",null,"M\xe9todos ou eventos que s\xf3 podem ser chamados pelo lado que o geraram."),(0,a.kt)("h4",{id:"both-sides"},(0,a.kt)(i.aj.Both,null),(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Both Sides"))),(0,a.kt)("p",null,"Methods or Events which can only be called in any side."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Todas as entidades criadas no ",(0,a.kt)("strong",{parentName:"p"},"Servidor")," ser\xe3o automaticamente sincronizadas no ",(0,a.kt)("strong",{parentName:"p"},"Cliente"),". E.e. voc\xea pode acessar os m\xe9todos e obter todos os dados dele sem precisar sincroniz\xe1-los manualmente."),(0,a.kt)("p",{parentName:"div"},"Da mesma forma, entidades criadas no ",(0,a.kt)("strong",{parentName:"p"},"Cliente")," s\xf3 existir\xe3o para esse cliente, tentando enviar essas entidades para o servidor ir\xe1 causar erros."))),(0,a.kt)("h2",{id:"autoridade-de-rede"},"Autoridade de rede"),(0,a.kt)("p",null,"Outro conceito importante no mundo nanos \xe9 a ",(0,a.kt)("strong",{parentName:"p"},"Autoridade de Rede"),". We have a ",(0,a.kt)("em",{parentName:"p"},'"distributed network authority"')," concept, which means the work of calculating physics and AI (for example) are automatically assigned and distributed to the clients. In general, if an ",(0,a.kt)("a",{parentName:"p",href:"/pt-BR/docs/scripting-reference/classes/base-classes/actor"},"Actor")," is near an in-game Character, it's physics will be calculated by that player's device. O jogador que \xe9 respons\xe1vel por calcular e compartilhar os resultados \xe9 chamado de ",(0,a.kt)("strong",{parentName:"p"},"Autoridade de Rede"),"."),(0,a.kt)("p",null,"O jogador atribu\xeddo \xe9 automaticamente calculado pelo servidor e leva em considera\xe7\xe3o algumas coisas, este c\xe1lculo s\xf3 \xe9 feito se o jogador estiver possuindo um caractere:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A dist\xe2ncia **** do personagem ao objeto"),(0,a.kt)("li",{parentName:"ul"},"If the Character is ",(0,a.kt)("strong",{parentName:"li"},"grabbing")," a ",(0,a.kt)(i.PZ.Prop,null)),(0,a.kt)("li",{parentName:"ul"},"If the Character is ",(0,a.kt)("strong",{parentName:"li"},"handling")," a ",(0,a.kt)("a",{parentName:"li",href:"/pt-BR/docs/scripting-reference/classes/base-classes/pickable"},"Pickable")),(0,a.kt)("li",{parentName:"ul"},"Se o personagem \xe9 ",(0,a.kt)("strong",{parentName:"li"},"dirigindo")," um ve\xedculo"),(0,a.kt)("li",{parentName:"ul"},"Se o Personagem apenas ",(0,a.kt)("strong",{parentName:"li"},"tirou")," algo")),(0,a.kt)("p",null,"Em todos estes casos, o Jogador ser\xe1 automaticamente atribu\xeddo para ser a ",(0,a.kt)("strong",{parentName:"p"},"Autoridade de Rede")," desse objeto."),(0,a.kt)("h3",{id:"sobrescrevendo-a-autoridade-de-rede-atual"},"Sobrescrevendo a autoridade de rede atual"),(0,a.kt)("p",null,"\xc9 poss\xedvel substituir a atual Autoridade de Rede de uma entidade espec\xedfica usando o m\xe9todo ",(0,a.kt)("inlineCode",{parentName:"p"},":SetNetworkAuthority()"),"."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Nota:")," Alguns atores n\xe3o s\xe3o ",(0,a.kt)("strong",{parentName:"p"},"a rede distribu\xedda"),". Isso significa que eles n\xe3o ser\xe3o atribu\xeddos automaticamente nem ser\xe3o capazes de fazer com que sua Autoridade de Rede mude. Voc\xea pode verificar se uma entidade est\xe1 na Rede Distribu\xedda com o m\xe9todo ",(0,a.kt)("inlineCode",{parentName:"p"},":IsNetworkDistributed()"),"."))),(0,a.kt)("h4",{id:"exemplos-de-a\xe7\xf5es-que-s\xe3o-executadas-somente-pela-autoridade-de-rede-desse-actor"},"Exemplos de a\xe7\xf5es que s\xe3o executadas somente pela Autoridade de Rede desse Actor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"F\xedsica de Objetos sincronizados (incluindo ao chamar ",(0,a.kt)("inlineCode",{parentName:"li"},":SetForce()"),")."),(0,a.kt)("li",{parentName:"ul"},"NPCs walking with ",(0,a.kt)("inlineCode",{parentName:"li"},":MoveTo()")," or ",(0,a.kt)("inlineCode",{parentName:"li"},":Follow()"),".")))}m.isMDXComponent=!0}}]);