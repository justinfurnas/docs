"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8166],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},24256:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=["components"],i={title:"Store",description:"Vault & Store: share your content with others!",image:"/img/docs/store.jpg"},l=void 0,u={unversionedId:"vault-and-store/store",id:"vault-and-store/store",title:"Store",description:"Vault & Store: share your content with others!",source:"@site/docs/vault-and-store/store.md",sourceDirName:"vault-and-store",slug:"/vault-and-store/store",permalink:"/docs/next/vault-and-store/store",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/vault-and-store/store.md",tags:[],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1649242488,formattedLastUpdatedAt:"4/6/2022",frontMatter:{title:"Store",description:"Vault & Store: share your content with others!",image:"/img/docs/store.jpg"},sidebar:"main",previous:{title:"Default Weapons",permalink:"/docs/next/assets-modding/default-asset-pack/default-weapons"},next:{title:"Vault",permalink:"/docs/next/vault-and-store/vault"}},p={},d=[{value:"About the Store",id:"about-the-store",level:2},{value:"Server Authorization Token",id:"server-authorization-token",level:2},{value:"Generating a new Token",id:"generating-a-new-token",level:3},{value:"Teams",id:"teams",level:2},{value:"Releases &amp; Versions",id:"releases--versions",level:2},{value:"Uploading new Resources",id:"uploading-new-resources",level:2},{value:"Guidelines",id:"guidelines",level:3},{value:"Categories &amp; Tags",id:"categories--tags",level:3},{value:"Store API",id:"store-api",level:2},{value:"Automate GitHub Releases",id:"automate-github-releases",level:2}],c={toc:d};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"nanos world ",(0,r.kt)("a",{parentName:"p",href:"https://store.nanos.world"},(0,r.kt)("strong",{parentName:"a"},"Store"))," is the platform on which you are invited to share your ",(0,r.kt)("strong",{parentName:"p"},"Game-Modes"),", ",(0,r.kt)("strong",{parentName:"p"},"Packages")," and ",(0,r.kt)("strong",{parentName:"p"},"Assets")," with the nanos world community!"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(84756).Z,width:"1306",height:"656"})),(0,r.kt)("h2",{id:"about-the-store"},"About the Store"),(0,r.kt)("p",null,"In the Store, you can upload your Assets, Packages, release new versions, create Teams and much more! It is 100% integrated with ",(0,r.kt)("a",{parentName:"p",href:"vault"},"Vault")," and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/server-manual/nanos-world-cli"},"CLI"),"!"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Store and the Vault are still under development. We are launching small usable pieces of it to build and improve it with you!"))),(0,r.kt)("h2",{id:"server-authorization-token"},"Server Authorization Token"),(0,r.kt)("p",null,"In order to be able to use the CLI, now you must provide an ",(0,r.kt)("strong",{parentName:"p"},"Authorization Token")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Config.toml")," or passing with ",(0,r.kt)("inlineCode",{parentName:"p"},"--token")," command line."),(0,r.kt)("p",null,"This token is used to authenticate your user and the rights to download the Assets/Packages."),(0,r.kt)("h3",{id:"generating-a-new-token"},"Generating a new Token"),(0,r.kt)("p",null,"To generate a new token, go to the Store, under your ",(0,r.kt)("strong",{parentName:"p"},"Profile Name"),", then on ",(0,r.kt)("strong",{parentName:"p"},"Settings"),", or click on ",(0,r.kt)("a",{parentName:"p",href:"https://store.nanos.world/settings/tokens/"},"this link"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(55618).Z,width:"1272",height:"385"})),(0,r.kt)("p",null,"In that page, you can manage your active tokens and create new ones."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(43366).Z,width:"1272",height:"282"})),(0,r.kt)("p",null,"When creating a new one, you can specify a label (only you will see it) and an expiration time. The maximum time is 2 years."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(23772).Z,width:"1241",height:"383"})),(0,r.kt)("p",null,"Once you create it, copy the token as save it, you won't be able to restore it if you lose it."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(66653).Z,width:"1215",height:"113"})),(0,r.kt)("p",null,"And you are done! Now just copy and paste your token into your ",(0,r.kt)("inlineCode",{parentName:"p"},"Config.toml")," and you are authenticated to run CLI commands!"),(0,r.kt)("h2",{id:"teams"},"Teams"),(0,r.kt)("p",null,'Teams are group of users and are the "holders" of the Resources (Assets/Packages) in the Store.'),(0,r.kt)("p",null,"Currently they can only be created during the Upload of a new Resource."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(60703).Z,width:"1271",height:"401"})),(0,r.kt)("p",null,"Once created, they can be modified under your Profile/Teams tab or at ",(0,r.kt)("a",{parentName:"p",href:"https://store.nanos.world/teams/"},"this link"),". You can add more members, check all uploaded resources and edit it's information."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(45475).Z,width:"1294",height:"426"})),(0,r.kt)("h2",{id:"releases--versions"},"Releases & Versions"),(0,r.kt)("p",null,"nanos world Store counts on a Release/Version system, which you can upload new versions of your Resource. You can upload versions as Private, Beta, Alpha and Stable and also add a Changelog to it."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(38112).Z,width:"1296",height:"664"})),(0,r.kt)("h2",{id:"uploading-new-resources"},"Uploading new Resources"),(0,r.kt)("p",null,"Uploading a ",(0,r.kt)("a",{parentName:"p",href:"https://store.nanos.world/packages/create/"},"Package")," or an ",(0,r.kt)("a",{parentName:"p",href:"https://store.nanos.world/assets/create/"},"Asset Pack")," through the UI is very straight. In the upload page, you can define the ",(0,r.kt)("strong",{parentName:"p"},"Package Name")," (must be unique, following the correct pattern - this is the folder name), the ",(0,r.kt)("strong",{parentName:"p"},"Team"),", ",(0,r.kt)("strong",{parentName:"p"},"Title"),", and customize the ",(0,r.kt)("strong",{parentName:"p"},"Descriptions"),"!"),(0,r.kt)("p",null,"You must upload a ",(0,r.kt)("strong",{parentName:"p"},".zip")," file with all content your or Package or Asset Pack, as it follows:"),(0,r.kt)("h3",{id:"guidelines"},"Guidelines"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remember to delete the hidden ",(0,r.kt)("inlineCode",{parentName:"li"},".cache")," files if you have them in your Package and Assets folders!"),(0,r.kt)("li",{parentName:"ol"},"Set the correct ",(0,r.kt)("strong",{parentName:"li"},"version")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Package.toml")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Assets.toml"),"!"),(0,r.kt)("li",{parentName:"ol"},"Your ",(0,r.kt)("inlineCode",{parentName:"li"},".zip")," must contain the file ",(0,r.kt)("inlineCode",{parentName:"li"},"Package.toml")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Assets.toml")," in the root of it.")),(0,r.kt)("h3",{id:"categories--tags"},"Categories & Tags"),(0,r.kt)("p",null,"During the creation of your Resource, you can set the Categories and Tags to customize it."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Tags")," are used mainly for categorization and (",(0,r.kt)("em",{parentName:"p"},"soon"),") searches. And the ",(0,r.kt)("strong",{parentName:"p"},"Categories")," are used differently depending if it's a Package or an Asset Pack:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Package"),": Categories are used as the type of the Package (game-mode, script, loading-screen)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Asset Pack"),": Categories are used just like a more specific Tag.")),(0,r.kt)("h2",{id:"store-api"},"Store API"),(0,r.kt)("p",null,"You can download, upload and edit your resources through HTTPS requests, check it the Swagger documentation at ",(0,r.kt)("a",{parentName:"p",href:"https://api.nanos.world/store/docs"},"https://api.nanos.world/store/docs"),". More tutorials coming soon\u2122."),(0,r.kt)("h2",{id:"automate-github-releases"},"Automate GitHub Releases"),(0,r.kt)("p",null,"If your Package or Asset Pack is uploaded to the GitHub, you can make use of our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/nanos-store-action"},"Official Action")," to automate the upload of new releases!"),(0,r.kt)("p",null,"For that, first create a ",(0,r.kt)("inlineCode",{parentName:"p"},".yml")," file inside your repository at ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/"),". E.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},"./github/workflows/nanos-world-store.yml")," with the content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: nanos world Store Publish\n\non:\n  release:\n    types: [published]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    name: Publish package\n    steps:\n      - uses: actions/checkout@v2\n      - name: Nanos Store Action\n        uses: nanos-world/nanos-store-action@v1.0\n        with:\n          # folder which contains the asset/package - if it's on root, leave it blank\n          folder: ''\n          # name of the asset/package\n          name: 'name-of-the-package-or-asset'\n          # changelog of the release - can be edited on the store before it gets published\n          changelog: 'built through actions'\n          # API token - generate at https://store.nanos.world/settings/tokens/ and set under Settings -> Secrets -> Actions with name STORE_SECRET\n          token: ${{ secrets.STORE_SECRET }}\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"folder")," must be filled if in your repository the Package/Assets.toml is located inside a subfolder."),(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," should be set to your Package or Asset Pack folder name."),(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"changelog")," can be left with a default value for now as it's a required field."),(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," should be generated at ",(0,r.kt)("a",{parentName:"p",href:"https://store.nanos.world/settings/tokens/"},"https://store.nanos.world/settings/tokens/")," and set under your ",(0,r.kt)("em",{parentName:"p"},"GitHub Settings -> Secrets -> Actions")," with name ",(0,r.kt)("inlineCode",{parentName:"p"},"STORE_SECRET"),"."))),(0,r.kt)("p",null,"Then, on every ",(0,r.kt)("strong",{parentName:"p"},"release")," on your GitHub, it will trigger and publish the new version as ",(0,r.kt)("strong",{parentName:"p"},"draft"),"."),(0,r.kt)("p",null,"So after that, go to your Releases page of your resource: ",(0,r.kt)("a",{parentName:"p",href:"https://store.nanos.world/"},"https://store.nanos.world/"),", edit the changelog and publish it."))}m.isMDXComponent=!0},55618:function(e,t,a){t.Z=a.p+"assets/images/store-02-733381a18960394d3fa0e95b66c9cb84.jpg"},43366:function(e,t,a){t.Z=a.p+"assets/images/store-03-220056d97356f70b81d9e4efab34caff.jpg"},23772:function(e,t,a){t.Z=a.p+"assets/images/store-04-522d4ca469e32f73a233bac1095570a0.jpg"},66653:function(e,t,a){t.Z=a.p+"assets/images/store-05-e5b560afb464d2b526e8725e40d4c211.jpg"},60703:function(e,t,a){t.Z=a.p+"assets/images/store-06-76e97a92c398213d649ebf78c6a72e13.jpg"},45475:function(e,t,a){t.Z=a.p+"assets/images/store-07-90dd9fec3d7a5d1a1a7540bcc7e6937a.jpg"},38112:function(e,t,a){t.Z=a.p+"assets/images/store-08-ef7f88d65138cac0c903686ffddce724.jpg"},84756:function(e,t,a){t.Z=a.p+"assets/images/store-ac7b82b1c352ecc11e4acc86a5cb7b79.jpg"}}]);