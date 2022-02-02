"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[594],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{YS:function(){return o},SM:function(){return l},Yb:function(){return p},aj:function(){return k},rt:function(){return g},Ut:function(){return v},PZ:function(){return h},p2:function(){return N}});n(87462),n(63366),n(67294);var r=n(3905),i=n(65551),a=function(){return(0,i.useActiveVersion)().path},o=function(t){var e=t.title,n=t.description,i=t.href,o=t.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:a()+"/"+i},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,e),(0,r.kt)("p",null,n))},l=function(t){var e=t.children,n=t.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:a()+"/"+n},e,(0,r.kt)("span",null,n))},s=function(t,e){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:t,title:e}))},c=function(t){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},u=function(t,e){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},d=function(t,e){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},p=function(t){var e=t.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},f=function(t){return(0,r.kt)("a",{href:a()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},m=function(t){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},k={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},g={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},v={Vector:function(){return u("Vector")},Rotator:function(){return u("Rotator")},Color:function(){return u("Color")},Quat:function(){return u("Quat","quaternion")},Vector2D:function(){return u("Vector2D","vectortwod")}},h={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Canvas:function(){return d("Canvas")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Melee:function(){return d("Melee")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},SceneCapture:function(){return d("SceneCapture","scene-capture")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}},N={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},86861:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(87469),l=["components"],s={description:"Un vecteur est compos\xe9 de trois caract\xe9ristiques (X, Y, Z) avec une pr\xe9cision en virgule flottante.",tags:["classe-utilitaire"]},c="Vector",u={unversionedId:"scripting-reference/utility-classes/vector",id:"version-latest/scripting-reference/utility-classes/vector",title:"Vector",description:"Un vecteur est compos\xe9 de trois caract\xe9ristiques (X, Y, Z) avec une pr\xe9cision en virgule flottante.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/scripting-reference/utility-classes/vector.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/vector",permalink:"/fr/docs/scripting-reference/utility-classes/vector",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/utility-classes/vector.mdx",tags:[{label:"classe-utilitaire",permalink:"/fr/docs/tags/classe-utilitaire"}],version:"latest",frontMatter:{description:"Un vecteur est compos\xe9 de trois caract\xe9ristiques (X, Y, Z) avec une pr\xe9cision en virgule flottante.",tags:["classe-utilitaire"]},sidebar:"version-latest/main",previous:{title:"Rotator",permalink:"/fr/docs/scripting-reference/utility-classes/rotator"},next:{title:"Vector2D",permalink:"/fr/docs/scripting-reference/utility-classes/vectortwod"}},d=[{value:"\ud83d\udc4c Usage",id:"-usage",children:[],level:2},{value:"\ud83c\udf9a Propri\xe9t\xe9s",id:"-propri\xe9t\xe9s",children:[],level:2},{value:"\u23e9 Fonctions",id:"-fonctions",children:[],level:2}],p={toc:d};function f(t){var e=t.components,n=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vector"},"Vector"),(0,a.kt)("p",null,"Un vecteur est compos\xe9 de trois caract\xe9ristiques (X, Y, Z) avec une pr\xe9cision en virgule flottante."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This structure is Open Sourced at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". N'h\xe9sitez pas \xe0 proposer des demandes de fusion et \xe0 sugg\xe9rer des modifications !"))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Les vecteurs sont compress\xe9s en interne et automatiquement, ce qui r\xe9duit leur taille dans le r\xe9seau jusqu'\xe0 90 %. Des d\xe9tails int\xe9ressants :"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"Les param\xe8tres des vecteurs dans les m\xe9thodes des classes sont g\xe9n\xe9ralement compress\xe9s avec une pr\xe9cision de 1 d\xe9cimale (avec quelques exceptions o\xf9 nous avons besoin de plus de pr\xe9cision)."),(0,a.kt)("li",{parentName:"ul"},"Les vecteurs transmis dans les \xe9v\xe9nements distants sont compress\xe9s avec une pr\xe9cision de 2 d\xe9cimales. Si vous avez besoin de plus de pr\xe9cision, nous vous recommandons de les transmettre en tant que ",(0,a.kt)(o.rt.Number,null)," \xe0 la place.")))),(0,a.kt)("h2",{id:"-usage"},"\ud83d\udc4c Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local new_vector = Vector(1452.5, 512, 943.1)\n")),(0,a.kt)("h2",{id:"-propri\xe9t\xe9s"},"\ud83c\udf9a Propri\xe9t\xe9s"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Type")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Nom")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"X"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Coordonn\xe9e X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Y"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Coordonn\xe9e Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Z"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Coordonn\xe9e Z")))),(0,a.kt)("h2",{id:"-fonctions"},"\u23e9 Fonctions"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Note:")," cette structure supporte les op\xe9rations ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"^"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"=="),", et ",(0,a.kt)("inlineCode",{parentName:"p"},"tostring")))),(0,a.kt)("table",{"spaces-before":"0"},(0,a.kt)("tr",null,(0,a.kt)("th",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},"Valeur retourn\xe9e")),(0,a.kt)("th",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},"Nom")),(0,a.kt)("th",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},"Description"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Boolean,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"Equals(other, tolerance)"))),(0,a.kt)("td",{align:"left"},"V\xe9rifie l'\xe9galit\xe9 avec un autre vecteur, dans les limites d'erreur sp\xe9cifi\xe9es")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"Distance(other)"))),(0,a.kt)("td",{align:"left"},"Distance entre deux points")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"DistanceSquared(other)"))),(0,a.kt)("td",{align:"left"},"Distance au carr\xe9 entre deux points")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.Ut.Vector,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"GetUnsafeNormal()"))),(0,a.kt)("td",{align:"left"},"Calcule la version normalis\xe9e du vecteur sans v\xe9rifier si la longueur est nulle")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.Ut.Vector,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"GetSafeNormal()"))),(0,a.kt)("td",{align:"left"},"Obtient une copie normalis\xe9e du vecteur, en v\xe9rifiant qu'il est possible de le faire en fonction de la longueur")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Boolean,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"IsNearlyZero(tolerance)"))),(0,a.kt)("td",{align:"left"},"V\xe9rifie si le vecteur est proche de z\xe9ro dans une tol\xe9rance sp\xe9cifi\xe9e")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Boolean,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"IsZero()"))),(0,a.kt)("td",{align:"left"},"V\xe9rifie si tous les composants du vecteur sont exactement \xe9gales \xe0 z\xe9ro")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Boolean,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"Normalize()"))),(0,a.kt)("td",{align:"left"},"Normalise ce vecteur s'il est plus grand qu'une tol\xe9rance donn\xe9e. Le laisse inchang\xe9 si ce n'est pas le cas")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"Size()"))),(0,a.kt)("td",{align:"left"},"Obtient la longueur (magnitude) de ce vecteur")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"SizeSquared()"))),(0,a.kt)("td",{align:"left"},"Obtenir la longueur au carr\xe9 de ce vecteur")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.Ut.Rotator,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"Rotation()"))),(0,a.kt)("td",{align:"left"},"Retourne l'orientation correspondant \xe0 la direction dans laquelle le vecteur pointe"))))}f.isMDXComponent=!0}}]);