"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[924],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(a),k=r,u=c["".concat(s,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(u,i(i({ref:e},d),{},{components:a})):n.createElement(u,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},87469:function(t,e,a){a.d(e,{PZ:function(){return h},SM:function(){return o},Ut:function(){return f},YS:function(){return i},Yb:function(){return c},aj:function(){return g},p2:function(){return b},rt:function(){return N}});a(83117),a(80102),a(67294);var n=a(3905),r=a(80143),l=function(){return(0,r.zu)().path},i=function(t){var e=t.title,a=t.description,r=t.href,i=t.image_src;return(0,n.kt)("a",{class:"card-link",href:r.startsWith("http")?r:l()+"/"+r},(0,n.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,e),(0,n.kt)("p",null,a))},o=function(t){var e=t.children,a=t.href;return(0,n.kt)("a",{class:"reference-link",href:a.startsWith("http")?a:l()+"/"+a},e,(0,n.kt)("span",null,a))},s=function(t,e){return(0,n.kt)("a",{class:"authority-availability",href:l()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,n.kt)("img",{src:t,title:e}))},p=function(t){return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},d=function(t,e){return(0,n.kt)("a",{href:l()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},m=function(t,e){return(0,n.kt)("a",{href:l()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},c=function(t){var e=t.children;return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},k=function(t){return(0,n.kt)("a",{href:l()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},u=function(t){return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},g={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},N={Number:function(){return p("number")},String:function(){return p("string")},Boolean:function(){return p("boolean")},Table:function(){return p("table")},Iterator:function(){return p("iterator")},Any:function(){return p("any")},Function:function(){return p("function")},Nil:function(){return p("nil")}},f={Vector:function(){return d("Vector")},Rotator:function(){return d("Rotator")},Color:function(){return d("Color")},Quat:function(){return d("Quat","quaternion")},Vector2D:function(){return d("Vector2D","vectortwod")}},h={Actor:function(){return m("Actor","base-classes/actor")},Paintable:function(){return m("Paintable","base-classes/paintable")},Pickable:function(){return m("Pickable","base-classes/pickable")},Billboard:function(){return m("Billboard")},Blueprint:function(){return m("Blueprint")},Canvas:function(){return m("Canvas")},Cable:function(){return m("Cable")},Character:function(){return m("Character")},Database:function(){return m("Database")},File:function(){return m("File")},Grenade:function(){return m("Grenade")},Melee:function(){return m("Melee")},Light:function(){return m("Light")},Particle:function(){return m("Particle")},Player:function(){return m("Player")},Prop:function(){return m("Prop")},Sound:function(){return m("Sound")},SceneCapture:function(){return m("SceneCapture","scene-capture")},StaticMesh:function(){return m("StaticMesh","static-mesh")},TextRender:function(){return m("TextRender","text-render")},Trigger:function(){return m("Trigger")},Vehicle:function(){return m("Vehicle")},Weapon:function(){return m("Weapon")},WebUI:function(){return m("WebUI")}},b={StaticMesh:function(){return k("StaticMesh Asset")},SkeletalMesh:function(){return k("SkeletalMesh Asset")},Animation:function(){return k("Animation Asset")},Particle:function(){return k("Particle Asset")},Material:function(){return k("Material Asset")},Map:function(){return k("Map Asset")},Blueprint:function(){return k("Blueprint Asset")},Sound:function(){return u("Sound Asset or Special Path")},Image:function(){return u("Image Special Path")},HTML:function(){return u("HTML Special Path")}}},72612:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(87469),o=["components"],s={title:"\ud83d\udcbe Database",description:"The Database entity provides programmers a way to access SQL databases easily through scripting.",sidebar_position:0,tags:["class"]},p=void 0,d={unversionedId:"scripting-reference/classes/database",id:"scripting-reference/classes/database",title:"\ud83d\udcbe Database",description:"The Database entity provides programmers a way to access SQL databases easily through scripting.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/scripting-reference/classes/database.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/database",permalink:"/de/docs/next/scripting-reference/classes/database",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/database.mdx",tags:[{label:"class",permalink:"/de/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udcbe Database",description:"The Database entity provides programmers a way to access SQL databases easily through scripting.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83e\uddd1 Character",permalink:"/de/docs/next/scripting-reference/classes/character"},next:{title:"\ud83d\udd8c\ufe0f Decal",permalink:"/de/docs/next/scripting-reference/classes/decal"}},m={},c=[{value:"Example",id:"example",level:2},{value:"Constructor Parameters",id:"constructor-parameters",level:2},{value:"Functions",id:"functions",level:2},{value:"<code>Close</code>",id:"close",level:3},{value:"<code>Execute</code>",id:"execute",level:3},{value:"<code>ExecuteSync</code>",id:"executesync",level:3},{value:"<code>Select</code>",id:"select",level:3},{value:"<code>SelectedSync</code>",id:"selectedsync",level:3},{value:"Connection String",id:"connection-string",level:2},{value:"SQLite",id:"sqlite",level:3},{value:"MySQL",id:"mysql",level:3},{value:"PostgreSQL",id:"postgresql",level:3}],k={toc:c};function u(t){var e=t.components,s=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Database entity provides programmers a way to access SQL databases easily through scripting."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(43376).Z,width:"800",height:"300"})),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\ud83d\udfe6 ",(0,l.kt)("strong",{parentName:"p"},"Authority:")," This class can only be spawned on ",(0,l.kt)("a",{parentName:"p",href:"/de/docs/next/core-concepts/scripting/authority-concepts"},"Server"),".")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Currently nanos world supports ",(0,l.kt)("inlineCode",{parentName:"p"},"SQLite"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MySQL")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," out of the box.")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- Creates a SQLite connection, using a local file called 'database_filename.db'\nlocal sqlite_db = Database(DatabaseEngine.SQLite, \"db=database_filename.db timeout=2\")\n\n-- Creates a table\nsqlite_db:Execute([[\n    CREATE TABLE IF NOT EXISTS test (\n        id INTEGER,\n        name VARCHAR(100)\n    )\n]])\n\n-- Executes a Query\nsqlite_db:Execute(\"INSERT INTO test VALUES (1, 'amazing')\", function(affected_rows)\n    Package.Log(\"Affected Rows: \" .. tostring(affected_rows))\n    -- Will output: 1\nend)\n\n-- Selects the data\nsqlite_db:Select(\"SELECT * FROM test\", function(rows)\n    Package.Log(NanosUtils.Dump(rows))\n    -- Will output a table with all data from 'test'\nend)\n\n-- Selects the data with filter\nsqlite_db:Select(\"SELECT * FROM test WHERE name = :0\", function(rows)\n    Package.Log(NanosUtils.Dump(rows))\n    -- Will output a table with all data from 'test' where name matches 'amazing'\nend, 'amazing')\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"All requests are thread safe! \ud83e\udd73")),(0,l.kt)("h2",{id:"constructor-parameters"},"Constructor Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Yb,{mdxType:"Enums"},"DatabaseEngine")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"database_engine"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Database Engine")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"connection_string"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"database#connection-string"},"Connection String")," used to create and connect to the database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"pool_size"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Size of the connection pool when calling several queries simultaneously")))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Returns")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Beschreibung")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"database#close"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Close")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Closes the Database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"database#execute"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Execute")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Execute a query asyncronously")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"database#executesync"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"ExecuteSync")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Execute a query syncronously")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"database#select"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Select")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Execute a select query asyncronously")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"database#selectsync"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"SelectSync")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Execute a select query syncronously")))),(0,l.kt)("h3",{id:"close"},(0,l.kt)("inlineCode",{parentName:"h3"},"Close")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Closes the Database")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_database:Close()\n")),(0,l.kt)("h3",{id:"execute"},(0,l.kt)("inlineCode",{parentName:"h3"},"Execute")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Execute a query asyncronously"),(0,l.kt)("p",{parentName:"blockquote"},"Callback will be in the format (rows_affected)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_database:Execute(query, function(rows_affected)\n    -- Do Something...\nend, parameters...)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"query"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Query to execute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Function,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"callback"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"nil")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Callback to call when finishes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Any,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"parameters..."))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"nil")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sequence of parameters to escape into the Query")))),(0,l.kt)("h3",{id:"executesync"},(0,l.kt)("inlineCode",{parentName:"h3"},"ExecuteSync")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Execute a query syncronously"),(0,l.kt)("p",{parentName:"blockquote"},"Returns a ",(0,l.kt)(i.rt.Number,null)," of ",(0,l.kt)("inlineCode",{parentName:"p"},"affected_rows"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local affected_rows = my_database:ExecuteSync(query, parameters...)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"query"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Query to execute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Any,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"parameters..."))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"nil")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sequence of parameters to escape into the Query")))),(0,l.kt)("h3",{id:"select"},(0,l.kt)("inlineCode",{parentName:"h3"},"Select")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Execute a select query asyncronously"),(0,l.kt)("p",{parentName:"blockquote"},"Callback will be in the format (rows)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_database:Select(query, function(rows)\n    -- Do something\nend, parameters...)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"query"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Query to select")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Function,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"callback"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"nil")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Callback to call when finishes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Any,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"parameters..."))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"nil")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sequence of parameters to escape into the Query")))),(0,l.kt)("h3",{id:"selectedsync"},(0,l.kt)("inlineCode",{parentName:"h3"},"SelectedSync")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Selects a query syncronously"),(0,l.kt)("p",{parentName:"blockquote"},"Returns a ",(0,l.kt)(i.rt.Table,null)," of ",(0,l.kt)(i.rt.Table,null),"s contains the rows fetched")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local rows = my_database:SelectedSync(query, parameters...)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"query"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Query to select")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Any,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"parameters..."))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"nil")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sequence of parameters to escape into the Query")))),(0,l.kt)("h2",{id:"connection-string"},"Connection String"),(0,l.kt)("p",null,"Each ",(0,l.kt)("strong",{parentName:"p"},"Database Engine")," has it's own parameters which can be used on the ",(0,l.kt)("inlineCode",{parentName:"p"},"connection_string")," constructor. Those parameters are defined and backend-dependent by the Engine, being passed directly to the Backend when creating the connection."),(0,l.kt)("p",null,"They should be set in the following format: ",(0,l.kt)("inlineCode",{parentName:"p"},'"param1=value1 param2=value2 param3=value3"'),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Usually you don't need to explicitly define all (or most) of the parameters described here, just use the ones you make sure are useful for your needs. Some of them are described by the libraries but aren't 100% tested in nanos world.")),(0,l.kt)("h3",{id:"sqlite"},"SQLite"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"There is a special ",(0,l.kt)("strong",{parentName:"p"},"connection_string")," for SQLite: ",(0,l.kt)("inlineCode",{parentName:"p"},":memory:"),". This will create a database in the memory which is destroyed when the server closes.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"db/dbname"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The database name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"timeout"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"set sqlite busy timeout (in seconds) (",(0,l.kt)("a",{parentName:"td",href:"http://www.sqlite.org/c3ref/busy_timeout.html"},"link"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"readonly"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"open database in read-only mode instead of the default read-write (note that the database file must already exist in this case, see the ",(0,l.kt)("a",{parentName:"td",href:"https://www.sqlite.org/c3ref/open.html"},"documentation"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"synchronous"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"set the pragma synchronous flag (",(0,l.kt)("a",{parentName:"td",href:"http://www.sqlite.org/pragma.html#pragma_synchronous"},"link"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"shared_cache"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"should be true (",(0,l.kt)("a",{parentName:"td",href:"http://www.sqlite.org/c3ref/enable_shared_cache.html"},"link"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"vfs"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"set the SQLite VFS used to as OS interface. The VFS should be registered before opening the connection, see the ",(0,l.kt)("a",{parentName:"td",href:"https://www.sqlite.org/vfs.html"},"documentation"))))),(0,l.kt)("h3",{id:"mysql"},"MySQL"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"db/dbname"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The database name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"user"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"User name to connect as")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"password/pass"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Password to be used if the server demands password authentication")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"host"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Name of host to connect to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"port"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Port number to connect to at the server host")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"unix_socket"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"sslca"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"sslcert"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"local_infile"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"should be ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," means ",(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_OPT_LOCAL_INFILE")," will be set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"charset"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"reconnect"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"if set to ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),", will attempt to reconnect on connection loss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"connect_timeout"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"should be positive integer value that means seconds corresponding to ",(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_OPT_CONNECT_TIMEOUT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"read_timeout"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"should be positive integer value that means seconds corresponding to ",(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_OPT_READ_TIMEOUT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"write_timeout"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"should be positive integer value that means seconds corresponding to ",(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_OPT_WRITE_TIMEOUT"))))),(0,l.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,l.kt)("p",null,"More parameters and complete information can be found at the ",(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/8.3/libpq-connect.html"},"PostgreSQL Official Documentation"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"host"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Name of host to connect to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"hostaddr"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Numeric IP address of host to connect to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"port"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Port number to connect to at the server host")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"user"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"same as OS user name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"User name to connect as")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"dbname"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"same as user name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The database name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"passwort"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Password to be used if the server demands password authentication")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"connect_timeout"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Maximum wait for connection, in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Command-line options to be sent to the server")))))}u.isMDXComponent=!0},43376:function(t,e,a){e.Z=a.p+"assets/images/db-f39b634ae0b38ffb62382f05a1ad38bb.png"}}]);