"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[756],{3905:function(t,e,a){a.d(e,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},l=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),c=p(a),u=r,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(k,s(s({ref:e},l),{},{components:a})):n.createElement(k,s({ref:e},l))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47819:function(t,e,a){a.r(e),a.d(e,{assets:function(){return l},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),s=["components"],i={title:"M\xeddias",description:"Tudo o que voc\xea precisa saber sobre os Ativos",tags:["m\xeddias"]},d=void 0,p={unversionedId:"core-concepts/assets",id:"version-latest/core-concepts/assets",title:"M\xeddias",description:"Tudo o que voc\xea precisa saber sobre os Ativos",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/core-concepts/assets.md",sourceDirName:"core-concepts",slug:"/core-concepts/assets",permalink:"/pt-BR/docs/core-concepts/assets",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/assets.md",tags:[{label:"m\xeddias",permalink:"/pt-BR/docs/tags/midias"}],version:"latest",frontMatter:{title:"M\xeddias",description:"Tudo o que voc\xea precisa saber sobre os Ativos",tags:["m\xeddias"]},sidebar:"version-latest/main",previous:{title:"Dados persistentes",permalink:"/pt-BR/docs/core-concepts/scripting/persistent-data"},next:{title:"M\xf3dulos",permalink:"/pt-BR/docs/core-concepts/modules"}},l={},m=[{value:"Estrutura da pasta",id:"estrutura-da-pasta",level:2},{value:"Configura\xe7\xe3o do pacote de m\xeddias",id:"configura\xe7\xe3o-do-pacote-de-m\xeddias",level:2},{value:"Configura\xe7\xf5es Detalhadas",id:"configura\xe7\xf5es-detalhadas",level:3},{value:"Conte\xfados de refer\xeancia no Scripting",id:"conte\xfados-de-refer\xeancia-no-scripting",level:2},{value:"Tipos de Ativos",id:"tipos-de-ativos",level:2},{value:"nanos Pacote de Ativos Padr\xe3o do Mundo",id:"nanos-pacote-de-ativos-padr\xe3o-do-mundo",level:2}],c={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tudo o que voc\xea precisa saber sobre os Ativos"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ativos")," em nanos mundo s\xe3o todos objetos ou conte\xfados que v\xeam do Unreal Engine, ou seja, ",(0,o.kt)("em",{parentName:"p"},"Mapas"),", ",(0,o.kt)("em",{parentName:"p"},"StaticMeshes"),", ",(0,o.kt)("em",{parentName:"p"},"SkeletalMeshes"),", ",(0,o.kt)("em",{parentName:"p"},"Sons"),", ",(0,o.kt)("em",{parentName:"p"},"part\xedculas"),", etc s\xe3o todos ",(0,o.kt)("strong",{parentName:"p"},"Ativos"),"."),(0,o.kt)("p",null,"Para usar Ativos Personalizados em seus servidores, voc\xea deve ter ou criar um ",(0,o.kt)("strong",{parentName:"p"},"Pacote de Ativos"),". Pacotes de ativos s\xe3o um conjunto de ativos que foram exportados juntos do Unreal."),(0,o.kt)("h2",{id:"estrutura-da-pasta"},"Estrutura da pasta"),(0,o.kt)("p",null,"Todos os Pacotes de Ativos est\xe3o abaixo da pasta ",(0,o.kt)("inlineCode",{parentName:"p"},"Servidor/Ativos/"),". Cada pacote de ativos \xe9 uma pasta sob isso."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Nota:")," Pacotes de ativos baixados quando se conectar aos servidores ser\xe3o armazenados na pasta ",(0,o.kt)("inlineCode",{parentName:"p"},"Servidor/Ativos/")," tamb\xe9m!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Server Folder"',title:'"Server','Folder"':!0},"NanosWorldServer.exe\nPackages/\n\u251c\u2500\u2500 my-asset-pack-01/\n\u2502   \u251c\u2500\u2500 MyAsset_01.uasset\n\u2502   \u251c\u2500\u2500 MyAsset_02.uasset\n\u2502   \u251c\u2500\u2500 MyBigMap.umap\n\u2502   \u2502    ...\n\u2502   \u2514\u2500\u2500 Assets.toml\n\u251c\u2500\u2500 awesome-weapons/\n\u2502   \u251c\u2500\u2500 BigFuckingGun.uasset\n\u2502   \u2502   ...\n\u2502   \u2514\u2500\u2500 Assets.toml\nAssets/\nConfig.toml\n")),(0,o.kt)("h2",{id:"configura\xe7\xe3o-do-pacote-de-m\xeddias"},"Configura\xe7\xe3o do pacote de m\xeddias"),(0,o.kt)("p",null,"Os Pacotes de ativos t\xeam um arquivo de configura\xe7\xe3o na raiz da pasta Pacote de Ativos, chamado ",(0,o.kt)("inlineCode",{parentName:"p"},"de Ativos. oml"),", neste arquivo podemos configurar todas as configura\xe7\xf5es pertinentes relacionadas com o Pacote de Ativos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/Assets.toml\n")),(0,o.kt)("h3",{id:"configura\xe7\xf5es-detalhadas"},"Configura\xe7\xf5es Detalhadas"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Configura\xe7\xe3o"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Nome"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Nome amig\xe1vel do Pacote de Ativos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"autor"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Autor","(","s) do Pacote de Ativos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Vers\xe3o"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Vers\xe3o do Pacote de Ativos - por favor, consulte a ",(0,o.kt)("a",{parentName:"td",href:"https://semver.org/"},"SemVer"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Imagem"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"URL da imagem a ser exibida no Cofre")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"pasta_irreal"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Nome da pasta raiz do Projeto Unreal que exportou este Atributo. Isto \xe9 importante para que os ativos possam manter as refer\xeancias relativas corretas.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"assets.maps"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lista de mapas neste pacote de ativos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"assets.static_meshes"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lista de malhas est\xe1ticas neste pacote de ativos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"assets.skeletal_meshes"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lista de Malhas Esquel\xe9ticas neste Pacote de Conte\xfados")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"assets.sons"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lista de sons deste Pacote de Conte\xfados")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"ativos.anima\xe7\xf5es"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lista de Anima\xe7\xf5es neste Pacote de Conte\xfados")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"assets.particles"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"List of Particles in this Asset Pack")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"assets.materials"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"List of Materials in this Asset Pack")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"assets.blueprints"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"List of Blueprints in this Asset Pack")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"ativos.outros"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lista de outros Ativos neste Pacote de Ativos")))),(0,o.kt)("h2",{id:"conte\xfados-de-refer\xeancia-no-scripting"},"Conte\xfados de refer\xeancia no Scripting"),(0,o.kt)("p",null,"Para ser capaz de usar os Assets atrav\xe9s do scripting, voc\xea primeiro ter\xe1 que garantir que o Pacote de Ativos \xe9 carregado, um Pacote de Ativos \xe9 carregado se:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set the Map to be loaded (this will make it's Asset Pack to be loaded automatically)"),(0,o.kt)("li",{parentName:"ol"},"Manualmente definido em ",(0,o.kt)("inlineCode",{parentName:"li"},"Server.toml")," os ",(0,o.kt)("inlineCode",{parentName:"li"},"assets")," para carregar"),(0,o.kt)("li",{parentName:"ol"},"Definido manualmente em qualquer pacote carregado, no ",(0,o.kt)("inlineCode",{parentName:"li"},"Package.toml")," os ",(0,o.kt)("inlineCode",{parentName:"li"},"asset_requirements"))),(0,o.kt)("p",null,"With that, you can refer to it's assets using the following pattern:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"ASSET_PACK_PATH::ASSET_KEY"')),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"my-asset-pack-01::SM_Cube"')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"ASSET_PACK_PATH")," is the Asset Pack folder name and ",(0,o.kt)("inlineCode",{parentName:"p"},"ASSET_KEY")," is the key defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets.toml"),".")),(0,o.kt)("h2",{id:"tipos-de-ativos"},"Tipos de Ativos"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Mapear")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Um Mapa de Motor/N\xedvel Unreal")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Malha Est\xe1tica")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Malhas est\xe1ticas irreais podem ser usadas para carregar malhas para Props e StaticMeshes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Malha Esquel\xe9tica")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Malhas Esquel\xe9ticas Inreais podem ser usadas para carregar malhas de Caracteres e Ve\xedculos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Sound")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Sons n\xe3o reais para carregar sons")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Particle")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unreal Particles can be used for settings in several entities, including Particle Class itself")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Animation")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Anima\xe7\xf5es irreais podem ser usadas para configura\xe7\xf5es de Personagem e Armas")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Material")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unreal Materials can be used for customizing meshes surfaces and used as Post Process")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Blueprint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unreal Actor Blueprints can be used for spawning Blueprint entities")))),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some methods require some specific Type of Assets to load, attempting to load an invalid or wrong type will cause an Error. Ex.: ",(0,o.kt)("inlineCode",{parentName:"p"},"Character:SetMesh()")," requer um ativo do tipo ",(0,o.kt)("inlineCode",{parentName:"p"},"Esquel\xe9tico Malha"),".")),(0,o.kt)("h2",{id:"nanos-pacote-de-ativos-padr\xe3o-do-mundo"},"nanos Pacote de Ativos Padr\xe3o do Mundo"),(0,o.kt)("p",null,"nanos mundo fornece um Pacote de Ativos padr\xe3o que j\xe1 est\xe1 inclu\xeddo no jogo base. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/pt-BR/docs/assets-modding/default-asset-pack/"},"nanos world Default Asset Pack")," for more information."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To create your own Asset Pack, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/pt-BR/docs/assets-modding/creating-assets/importing-assets"},"Importing Assets"))))}u.isMDXComponent=!0}}]);