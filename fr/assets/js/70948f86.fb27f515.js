"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9772],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return o},SM:function(){return a},Yb:function(){return d},aj:function(){return v},rt:function(){return h},Ut:function(){return g},PZ:function(){return b},p2:function(){return k}});n(87462),n(63366),n(67294);var r=n(3905),i=n(65551),s=function(){return(0,i.useActiveVersion)().path},o=function(e){var t=e.title,n=e.description,i=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:s()+"/"+i},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},a=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:s()+"/"+n},t,(0,r.kt)("span",null,n))},u=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:s()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},c=function(e){return(0,r.kt)("a",{href:s()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:s()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:s()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:s()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},f=function(e){return(0,r.kt)("a",{href:s()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},m=function(e){return(0,r.kt)("a",{href:s()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},v={AuthorityOnly:function(){return u("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return u("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return u("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return u("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},g={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},b={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},k={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},10309:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),o=n(87469),a=["components"],u={description:"Comment devenir un testeur",sidebar_position:.1},c="\ud83e\uddea Inscrivez-vous au alpha test",l={unversionedId:"signing-up-alpha",id:"signing-up-alpha",title:"\ud83e\uddea Inscrivez-vous au alpha test",description:"Comment devenir un testeur",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/signing-up-alpha.mdx",sourceDirName:".",slug:"/signing-up-alpha",permalink:"/fr/docs/next/signing-up-alpha",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/signing-up-alpha.mdx",tags:[],version:"current",sidebarPosition:.1,frontMatter:{description:"Comment devenir un testeur",sidebar_position:.1},sidebar:"main",previous:{title:"\ud83d\udc4b Bienvenue",permalink:"/fr/docs/next/"},next:{title:"\ud83d\udee3\ufe0f Roadmap",permalink:"/fr/docs/next/roadmap"}},p=[{value:"Qui peut devenir testeur ?",id:"qui-peut-devenir-testeur-",children:[],level:2},{value:"Comment puis-je savoir si j&#39;ai \xe9t\xe9 s\xe9lectionn\xe9 ?",id:"comment-puis-je-savoir-si-jai-\xe9t\xe9-s\xe9lectionn\xe9-",children:[],level:2},{value:"Est-ce que je garderai le jeu apr\xe8s la fin de la phase d&#39;essai ?",id:"est-ce-que-je-garderai-le-jeu-apr\xe8s-la-fin-de-la-phase-dessai-",children:[],level:2},{value:"S&#39;inscrire pour devenir un testeur",id:"sinscrire-pour-devenir-un-testeur",children:[],level:2}],d={toc:p};function f(e){var t=e.components,u=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-inscrivez-vous-au-alpha-test"},"\ud83e\uddea Inscrivez-vous au alpha test"),(0,s.kt)("p",null,"Comment s'inscrire pour devenir testeur."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(14659).Z,width:"750",height:"427"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Nous vous voulons !")," nanos world est en plein d\xe9veloppement depuis 2 ans ! Et est enfin atteint l'Alpha ! Cela signifie que beaucoup de choses sont d\xe9j\xe0 faites et qu'il est temps de tester les limites !"),(0,s.kt)("p",null,"Nous adorons nos testeurs ! Nous consid\xe9rons les testeurs comme un \xe9l\xe9ment fondamental de nanos world. La plupart de nos fonctionnalit\xe9s et corrections de bugs sont \xe9labor\xe9es gr\xe2ce \xe0 vos commentaires ! Par cons\xe9quent, nous choisissons les testeurs avec soin !"),(0,s.kt)("h2",{id:"qui-peut-devenir-testeur-"},"Qui peut devenir testeur ?"),(0,s.kt)("p",null,"Tout le monde peut s'inscrire ! Nous recherchons des personnes enthousiastes \xe0 l'\xe9gard des jeux de type \"sandbox\" qui souhaitent nous aider ! Tous les avis comptent ! Nous donnons la pr\xe9f\xe9rence aux personnes int\xe9ress\xe9es par la cr\xe9ation de contenu, le d\xe9veloppement de scripts et le test de notre API ! Faites-nous part de votre int\xe9r\xeat ! Nous vous recommandons vivement de prendre contact avec nous dans notre ",(0,s.kt)("a",{parentName:"p",href:"https://discord.nanos.world"},"Discord")," ! Active community members will much likely get the access earlier! Be sure to introduce yourself so we can get to know each other \ud83d\ude04!"),(0,s.kt)("h2",{id:"comment-puis-je-savoir-si-jai-\xe9t\xe9-s\xe9lectionn\xe9-"},"Comment puis-je savoir si j'ai \xe9t\xe9 s\xe9lectionn\xe9 ?"),(0,s.kt)("p",null,"Une fois s\xe9lectionn\xe9, vous serez averti par e-mail ou par Discord (par ",(0,s.kt)("strong",{parentName:"p"},"SyedMuhammad"),") !"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Nous examinons chaque semaine les candidatures pour devenir testeur. Mais nous ne sommes pas toujours en mesure de r\xe9pondre aussi rapidement que possible. Toutes les inscriptions sont stock\xe9es et ne sont jamais jet\xe9es. Si vous \xeates un membre actif de la communaut\xe9, vous avez beaucoup plus de chances d'\xeatre prioritaire !"))),(0,s.kt)("h2",{id:"est-ce-que-je-garderai-le-jeu-apr\xe8s-la-fin-de-la-phase-dessai-"},"Est-ce que je garderai le jeu apr\xe8s la fin de la phase d'essai ?"),(0,s.kt)("p",null,"Nous voulons pouvoir rendre d'une mani\xe8re ou d'une autre la pareille aux testeurs qui ont activement contribu\xe9 \xe0 nanos world. Alors ",(0,s.kt)("strong",{parentName:"p"},"OUI"),", nous souhaitons donner des cl\xe9s aux testeurs m\xe9ritants apr\xe8s la fin de la phase de test !"),(0,s.kt)("h2",{id:"sinscrire-pour-devenir-un-testeur"},"S'inscrire pour devenir un testeur"),(0,s.kt)("p",null,"Si vous souhaitez rejoindre l'\xe9quipe officielle de testeurs, veuillez utiliser les formulaires suivants pour vous inscrire et avoir une chance de devenir testeur :"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Utilisez les formulaires pour nous dire pourquoi vous devriez devenir testeur et comment vous pouvez contribuer au d\xe9veloppement de nanos world ! N'h\xe9sitez pas \xe0 exprimer vos comp\xe9tences dans d'autres domaines o\xf9 vous avez des aptitudes et o\xf9 vous aimeriez contribuer d'autres mani\xe8res aussi !"))),(0,s.kt)(o.SM,{href:"https://tester.nanos.world",mdxType:"ReferenceLink"},"\ud83e\uddea Formulaires d'inscription des testeurs"))}f.isMDXComponent=!0},14659:function(e,t,n){t.Z=n.p+"assets/images/uncle-sam-d033425b97aa7fb6f98a9829a3748868.png"}}]);