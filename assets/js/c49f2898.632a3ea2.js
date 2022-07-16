"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4622],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=i,u=h["".concat(c,".").concat(m)]||h[m]||p[m]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={title:"Basic HUD (HTML)",description:"How to add a basic HUD using HTML + JavaScript + CSS to display the character\u2019s Health and Ammo based on CS:GO HUD",tags:["tutorial-example","scripting","ui"]},c=void 0,s={unversionedId:"getting-started/tutorials-and-examples/basic-hud-html",id:"version-latest/getting-started/tutorials-and-examples/basic-hud-html",title:"Basic HUD (HTML)",description:"How to add a basic HUD using HTML + JavaScript + CSS to display the character\u2019s Health and Ammo based on CS:GO HUD",source:"@site/versioned_docs/version-latest/getting-started/tutorials-and-examples/basic-hud-html.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/basic-hud-html",permalink:"/docs/getting-started/tutorials-and-examples/basic-hud-html",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/getting-started/tutorials-and-examples/basic-hud-html.md",tags:[{label:"tutorial-example",permalink:"/docs/tags/tutorial-example"},{label:"scripting",permalink:"/docs/tags/scripting"},{label:"ui",permalink:"/docs/tags/ui"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1649243394,formattedLastUpdatedAt:"Apr 6, 2022",frontMatter:{title:"Basic HUD (HTML)",description:"How to add a basic HUD using HTML + JavaScript + CSS to display the character\u2019s Health and Ammo based on CS:GO HUD",tags:["tutorial-example","scripting","ui"]},sidebar:"version-latest/main",previous:{title:"Basic HUD (Canvas)",permalink:"/docs/getting-started/tutorials-and-examples/basic-hud-canvas"},next:{title:"Chat Colors",permalink:"/docs/getting-started/tutorials-and-examples/chat-colors"}},d={},p=[{value:"Creating the UI",id:"creating-the-ui",level:2},{value:"Adding Events and Callbacks to communicate with your Package",id:"adding-events-and-callbacks-to-communicate-with-your-package",level:2}],h={toc:p};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How to add a basic HUD using HTML + JavaScript + CSS to display the character\u2019s Health and Ammo based on CS:GO HUD."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The following example is deprecated and you can find an updated HTML UI in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox"},"Sandbox Official Repository"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(50075).Z,width:"1919",height:"1013"})),(0,r.kt)("h2",{id:"creating-the-ui"},"Creating the UI"),(0,r.kt)("p",null,"Inside your Package\u2019s Client folder, create a new folder ","(","optional",")"," called ",(0,r.kt)("inlineCode",{parentName:"p"},"UI/")," to separate the UI files from the Scripting ","(","lua",")"," files: "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6500).Z,width:"649",height:"134"})),(0,r.kt)("p",null,"Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"UI/")," let\u2019s create the following files: ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"style.cs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In this UI we will be using ",(0,r.kt)("a",{parentName:"p",href:"https://jquery.com/"},"JQuery"),", please download ",(0,r.kt)("a",{parentName:"p",href:"https://code.jquery.com/jquery-3.5.1.min.js"},"the latest version")," and place it inside ",(0,r.kt)("inlineCode",{parentName:"p"},"UI/")," folder. ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(10336).Z,width:"627",height:"148"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Client/UI/index.html"',title:'"Client/UI/index.html"'},'<html>\n    <head>\n        \x3c!-- Includes all files we created (JS, JQuery and CSS) --\x3e\n        <script src="jquery-3.5.1.min.js"><\/script>\n        <script src="index.js"><\/script>\n        <link rel="stylesheet" href="style.css">\n    </head>\n    <body>\n        \x3c!-- Health container (black background) --\x3e\n        <div id="health_container">\n            <img src="health.png">\n            <span id="health_current">100</span> \x3c!-- Health value --\x3e\n        </div>\n\n        \x3c!-- Weapon Ammo container (black background) --\x3e\n        <div id="weapon_ammo_container">\n            <span id="weapon_ammo_clip">30</span> \x3c!-- Ammo Clip value --\x3e\n            <span id="weapon_ammo_bag">/ 1000</span> \x3c!-- Ammo Bag value --\x3e\n        </div>\n    </body>\n</html>\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you noticed we are using an image ",(0,r.kt)("inlineCode",{parentName:"p"},"health.png"),", you can download it here ",(0,r.kt)("a",{parentName:"p",href:"https://i.imgur.com/0BmQJVZ.png"},"https://i.imgur.com/0BmQJVZ.png")," and place it inside ",(0,r.kt)("inlineCode",{parentName:"p"},"UI/")," as well.")),(0,r.kt)("p",null,"Now let\u2019s add the style to it, for that, edit your ",(0,r.kt)("inlineCode",{parentName:"p"},"style.css")," and add the following ",(0,r.kt)("inlineCode",{parentName:"p"},"CSS")," code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Client/UI/style.css"',title:'"Client/UI/style.css"'},"body {\n    font-family: Tahoma, sans-serif;\n    font-size: 14px;\n    margin: 0px;\n    padding: 0px;\n    margin-bottom: 20px;\n}\n\n#weapon_ammo_container {\n    display: none;\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    width: 200px;\n    height: 50px;\n    background-image: linear-gradient(to right, #00000000, #00000080);\n    text-align: right;\n    line-height: 47px;\n}\n\n#weapon_ammo_bag {\n    color: #ededed;\n    font-weight: bold;\n    font-size: 16px;\n    margin-right: 30px;\n    position: relative;\n    top: -4px;\n}\n\n#weapon_ammo_clip {\n    color: white;\n    font-weight: bold;\n    font-size: 32px;\n}\n\n#health_container {\n    position: absolute;\n    bottom: 0px;\n    width: 200px;\n    height: 50px;\n    background-image: linear-gradient(to left, #00000000, #00000080);\n}\n\n#health_container img {\n    height: 23px;\n    margin: 13px;\n}\n\n#health_current {\n    color: white;\n    font-size: 32px;\n    font-weight: bold;\n    position: absolute;\n    margin-top: 4px;\n}\n")),(0,r.kt)("p",null,"Finally, in your Package\u2019s Index.lua, let\u2019s spawn the WebUI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Spawns a WebUI with the HTML file you just created\nmain_hud = WebUI("Main HUD", "file:///UI/index.html")\n')),(0,r.kt)("p",null,"Result:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(85889).Z,width:"1919",height:"1013"})),(0,r.kt)("p",null,"This is just static texts! Let\u2019s now make it dynamic and display actual values!"),(0,r.kt)("h2",{id:"adding-events-and-callbacks-to-communicate-with-your-package"},"Adding Events and Callbacks to communicate with your Package"),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),", add the following JavaScript code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Client/UI/index.js"',title:'"Client/UI/index.js"'},'// Register for UpdateWeaponAmmo custom event (from Lua)\nEvents.Subscribe("UpdateWeaponAmmo", function(enable, clip, bag) {\n    if (enable)\n        $("#weapon_ammo_container").show();\n    else\n        $("#weapon_ammo_container").hide();\n\n    // Using JQuery, overrides the HTML content of these SPANs with the new Ammo values\n    $("#weapon_ammo_clip").html(clip);\n    $("#weapon_ammo_bag").html("/ " + bag);\n});\n\n// Register for UpdateHealth custom event (from Lua)\nEvents.Subscribe("UpdateHealth", function(health) {\n    // Using JQuery, overrides the HTML content of the SPAN with the new health value\n    $("#health_current").html(health);\n\n    // Bonus: make the background red when health below 25\n    if (health <= 25)\n        $("#health_container").css("background-image", "linear-gradient(to left, #0000, #d00c)");\n    else\n        $("#health_container").css("background-image", "linear-gradient(to left, #00000000, #00000080)");\n});\n')),(0,r.kt)("p",null,"Now that our UI is done, let\u2019s finish our Lua code to handle that whole thing!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Spawns a WebUI with the HTML file you just created\nmain_hud = WebUI("Main HUD", "file:///UI/index.html")\n\n\n-- When LocalPlayer spawns, sets an event on it to trigger when we possesses a new character, to store the local controlled character locally. This event is only called once, see Package:Subscribe("Load") to load it when reloading a package\nClient.Subscribe("SpawnLocalPlayer", function(local_player)\n    local_player:Subscribe("Possess", function(player, character)\n        UpdateLocalCharacter(character)\n    end)\nend)\n\n-- When package loads, verify if LocalPlayer already exists (eg. when reloading the package), then try to get and store it\'s controlled character\nPackage.Subscribe("Load", function()\n    local local_player = Client.GetLocalPlayer()\n    if (local_player ~= nil) then\n        UpdateLocalCharacter(local_player:GetControlledCharacter())\n    end\nend)\n\n-- Function to set all needed events on local character (to update the UI when it takes damage or dies)\nfunction UpdateLocalCharacter(character)\n    -- Verifies if character is not nil (eg. when GetControllerCharacter() doesn\'t return a character)\n    if (character == nil) then return end\n\n    -- Updates the UI with the current character\'s health\n    UpdateHealth(character:GetHealth())\n\n    -- Sets on character an event to update the health\'s UI after it takes damage\n    character:Subscribe("TakeDamage", function(charac, damage, type, bone, from_direction, instigator, causer)\n        UpdateHealth(math.max(charac:GetHealth() - damage, 0))\n    end)\n\n    -- Sets on character an event to update the health\'s UI after it dies\n    character:Subscribe("Death", function(charac)\n        UpdateHealth(0)\n    end)\n\n    -- Try to get if the character is holding any weapon\n    local current_picked_item = character:GetPicked()\n\n    -- If so, update the UI\n    if (current_picked_item and current_picked_item:GetType() == "Weapon") then\n        UpdateAmmo(true, current_picked_item:GetAmmoClip(), current_picked_item:GetAmmoBag())\n    end\n\n    -- Sets on character an event to update his grabbing weapon (to show ammo on UI)\n    character:Subscribe("PickUp", function(charac, object)\n        if (object:GetType() == "Weapon") then\n            UpdateAmmo(true, object:GetAmmoClip(), object:GetAmmoBag())\n        end\n    end)\n\n    -- Sets on character an event to remove the ammo ui when he drops it\'s weapon\n    character:Subscribe("Drop", function(charac, object)\n        UpdateAmmo(false)\n    end)\n\n    -- Sets on character an event to update the UI when he fires\n    character:Subscribe("Fire", function(charac, weapon)\n        UpdateAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())\n    end)\n\n    -- Sets on character an event to update the UI when he reloads the weapon\n    character:Subscribe("Reload", function(charac, weapon, ammo_to_reload)\n        UpdateAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())\n    end)\nend\n\n-- Function to update the Ammo\'s UI\nfunction UpdateAmmo(enable_ui, ammo, ammo_bag)\n    main_hud:CallEvent("UpdateWeaponAmmo", {enable_ui, ammo, ammo_bag})\nend\n\n-- Function to update the Health\'s UI\nfunction UpdateHealth(health)\n    main_hud:CallEvent("UpdateHealth", {health})\nend\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"That's it! Feel free to use it in your Packages!")))}m.isMDXComponent=!0},50075:function(e,t,n){t.Z=n.p+"assets/images/html-01-bc36e8fb7a7c75f2069dad29f6fe2783.jpg"},6500:function(e,t,n){t.Z=n.p+"assets/images/html-02-d72feef5155d74bdb28d772b09017ddf.jpg"},10336:function(e,t,n){t.Z=n.p+"assets/images/html-03-f42e492095c9800e56837f7af63b7292.jpg"},85889:function(e,t,n){t.Z=n.p+"assets/images/html-04-e8fd8416c4576262e469a1463f77b08b.jpg"}}]);