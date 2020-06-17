module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t){e.exports=require("path")},function(e,t,r){"use strict";var n;try{n=r(6)}catch(e){n=null}var o=r(2);function i(){return a("app")}function s(){var e=i();return e?"name"in e?e.name:e.getName():null}function a(e){return n?n[e]?n[e]:n.remote?n.remote[e]:null:null}function c(){return"browser"===process.type&&n&&n.ipcMain?n.ipcMain:"renderer"===process.type&&n&&n.ipcRenderer?n.ipcRenderer:null}function u(){var e=i();return e?"version"in e?e.version:e.getVersion():null}function l(){var e=o.type().replace("_"," "),t=o.release();return"Darwin"===e&&(e="macOS",t="10."+(Number(o.release().split(".")[0])-4)),e+" "+t}e.exports={getName:s,getPath:function(e){var t=i();if(!t)return null;try{return t.getPath(e)}catch(e){return null}},getVersion:u,getVersions:function(){return{app:s()+" "+u(),electron:"Electron "+process.versions.electron,os:l()}},isDev:function(){var e=i();return!!e&&(!e.isPackaged||"1"===process.env.ELECTRON_IS_DEV)},isElectron:function(){return"browser"===process.type||"renderer"===process.type},isIpcChannelListened:function(e){var t=c();return!!t&&t.listenerCount(e)>0},loadRemoteModule:function(e){if("browser"===process.type)i().on("web-contents-created",(function(t,r){var n=r.executeJavaScript('try {require("'+e+'")} catch(e){}; void 0;');n&&"function"==typeof n.catch&&n.catch((function(){}))}));else if("renderer"===process.type)try{(function(){if(n&&n.remote)return n.remote;return null})().require(e)}catch(e){}},onIpc:function(e,t){var r=c();r&&r.on(e,t)},openUrl:function(e,t){t=t||console.error;var r=a("shell");if(!r)return;r.openExternal(e).catch(t)},sendIpc:function(e,t){"browser"===process.type?function(e,t){if(!n||!n.BrowserWindow)return;n.BrowserWindow.getAllWindows().forEach((function(r){r.webContents&&r.webContents.send(e,t)}))}(e,t):"renderer"===process.type&&function(e,t){var r=c();r&&r.send(e,t)}(e,t)},showErrorBox:function(e,t){var r=a("dialog");if(!r)return;r.showErrorBox(e,t)}}},function(e,t){e.exports=require("os")},function(e,t,r){"use strict";function n(e,t,r){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o(e[n],t,r)}function o(e,t,r){"function"==typeof e&&!1!==e.level&&i(r.levels,e.level,t.level)&&(t=function(e,t,r){if(!e||!e.length)return r;for(var n=0;n<e.length&&(r=e[n](r,t));n++);return r}(r.hooks,e,t))&&e(t)}function i(e,t,r){var n=e.indexOf(t),o=e.indexOf(r);return-1===o||-1===n||o<=n}e.exports={compareLevels:i,log:function(e,t){var r=e.transports,o={data:Array.prototype.slice.call(arguments,2),date:new Date,level:t.level,scope:t.scope?t.scope.toJSON():null,variables:e.variables};n(r,o,e)},runTransport:o,runTransports:n}},function(e,t,r){"use strict";var n=r(15),o=r(16),i=r(17);function s(e,t,r){return t.reduce((function(t,r){return"function"==typeof r?r(t,e):t}),r||e.data)}e.exports={applyAnsiStyles:o.applyAnsiStyles,concatFirstStringElements:i.concatFirstStringElements,customFormatterFactory:function(e,t,r){if("string"==typeof e)return function(n,o){return s(o,[i.templateVariables,i.templateScopeFactory(r),i.templateDate,i.templateText,t&&i.concatFirstStringElements],[e].concat(n))};if("function"==typeof e)return function(t,r){var n=Object.assign({},r,{data:t}),o=e(n,t);return[].concat(o)};return function(e){return[].concat(e)}},maxDepthFactory:n.maxDepthFactory,removeStyles:o.removeStyles,toJSON:n.toJSON,toString:n.toString,transform:s}},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("electron")},function(e,t){e.exports=require("fs")},function(e,t,r){e.exports=function(e){function t(e){let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r),t|=0;return n.colors[Math.abs(t)%n.colors.length]}function n(e){let r;function s(...e){if(!s.enabled)return;const t=s,o=Number(new Date),i=o-(r||o);t.diff=i,t.prev=r,t.curr=o,r=o,e[0]=n.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(r,o)=>{if("%%"===r)return r;a++;const i=n.formatters[o];if("function"==typeof i){const n=e[a];r=i.call(t,n),e.splice(a,1),a--}return r}),n.formatArgs.call(t,e);(t.log||n.log).apply(t,e)}return s.namespace=e,s.enabled=n.enabled(e),s.useColors=n.useColors(),s.color=t(e),s.destroy=o,s.extend=i,"function"==typeof n.init&&n.init(s),n.instances.push(s),s}function o(){const e=n.instances.indexOf(this);return-1!==e&&(n.instances.splice(e,1),!0)}function i(e,t){const r=n(this.namespace+(void 0===t?":":t)+e);return r.log=this.log,r}function s(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return n.debug=n,n.default=n,n.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},n.disable=function(){const e=[...n.names.map(s),...n.skips.map(s).map(e=>"-"+e)].join(",");return n.enable(""),e},n.enable=function(e){let t;n.save(e),n.names=[],n.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(t=0;t<o;t++)r[t]&&("-"===(e=r[t].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")));for(t=0;t<n.instances.length;t++){const e=n.instances[t];e.enabled=n.enabled(e.namespace)}},n.enabled=function(e){if("*"===e[e.length-1])return!0;let t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=r(32),Object.keys(e).forEach(t=>{n[t]=e[t]}),n.instances=[],n.names=[],n.skips=[],n.formatters={},n.selectColor=t,n.enable(n.load()),n}},function(e,t,r){var n,o=r(6),i=o.app,s=o.BrowserWindow,a=r(10).create("main");console.log=a.log,r(28)&&i.quit(),i.on("ready",(function(e){e.preventDefault(),(n=new s({width:1280,height:960,webPreferences:{nodeIntegration:!1,webSecurity:!1,contextIsolation:!0,enableRemoteModule:!1,preload:require("path").resolve(__dirname,"../renderer","main_window","preload.js")}})).loadURL("file://"+require("path").resolve(__dirname,"..","renderer","main_window","index.html")),n.webContents.openDevTools(),n.on("closed",(function(){a.info("%c Closing. %c The application","color: red","color: green"),n=null}))})),i.on("window-all-closed",(function(){"darwin"!==process.platform&&i.quit()})),i.on("activate",(function(){0===s.getAllWindows().length&&(n=new s({width:1280,height:960})).loadURL("file://"+require("path").resolve(__dirname,"..","renderer","main_window","index.html"))})),i.on("window-all-closed",(function(){"darwin"!==process.platform&&i.quit()}))},function(e,t,r){"use strict";var n=r(11),o=r(1),i=r(3).log,s=r(13),a=r(14),c=r(18),u=r(23),l=r(24);e.exports=function e(t){var r={catchErrors:function(e){var t=Object.assign({},{log:r.error,showDialog:"browser"===process.type},e||{});n(t)},create:e,functions:{},hooks:[],isDev:o.isDev(),levels:[],logId:t,variables:{processType:process.type}};return r.scope=s(r),r.transports={console:a(r),file:c(r),remote:l(r),ipc:u(r)},Object.defineProperty(r.levels,"add",{enumerable:!1,value:function(e,t){t=void 0===t?r.levels.length:t,r.levels.splice(t,0,e),r[e]=i.bind(null,r,{level:e}),r.functions[e]=r[e]}}),["error","warn","info","verbose","debug","silly"].forEach((function(e){r.levels.add(e)})),r.log=i.bind(null,r,{level:"info"}),r.functions.log=r.log,r}("default"),e.exports.default=e.exports},function(e,t,r){"use strict";var n=r(1),o=r(12),i=!1;e.exports=function(e){return i||(i=!0,"renderer"===process.type?(window.addEventListener("error",s),window.addEventListener("unhandledrejection",a)):(process.on("uncaughtException",t),process.on("unhandledRejection",r))),{stop:c};function t(t){try{if("function"==typeof e.onError){var r=n.getVersions();if(!1===e.onError(t,r,u))return}if(e.log(t),e.showDialog&&t.name.indexOf("UnhandledRejection")<0){var o=process.type||"main";n.showErrorBox("A JavaScript error occurred in the "+o+" process",t.stack)}}catch(e){console.error(t)}}function r(e){if(e instanceof Error){var r="UnhandledRejection "+e.name,n=Object.getPrototypeOf(e),o=Object.getOwnPropertyDescriptor(n,"name");return o&&o.writable||(e=new Error(e.message)),e.name=r,void t(e)}var i=new Error(JSON.stringify(e));i.name="UnhandledRejection",t(i)}function s(e){e.preventDefault(),t(e.error)}function a(e){e.preventDefault(),r(e.reason)}function c(){i=!1,"renderer"===process.type?(window.removeEventListener("error",s),window.removeEventListener("unhandledrejection",a)):(process.removeListener("uncaughtException",t),process.removeListener("unhandledRejection",r))}function u(t,r){var i=t+"?"+o.stringify(r);n.openUrl(i,e.log)}}},function(e,t){e.exports=require("querystring")},function(e,t,r){"use strict";var n=r(3).log;e.exports=function(e){return t.labelPadding=!0,t.defaultLabel="",t.maxLabelLength=0,t.getOptions=function(){return{defaultLabel:t.defaultLabel,labelLength:r()}},t;function t(r){var o={label:r,toJSON:function(){return{label:this.label}}};return e.levels.forEach((function(t){o[t]=n.bind(null,e,{level:t,scope:o})})),o.log=o.info,t.maxLabelLength=Math.max(t.maxLabelLength,r.length),o}function r(){return!0===t.labelPadding?t.maxLabelLength:!1===t.labelPadding?0:"number"==typeof t.labelPadding?t.labelPadding:0}}},function(e,t,r){"use strict";var n=r(4),o={context:console,error:console.error,warn:console.warn,info:console.info,verbose:console.verbose,debug:console.debug,silly:console.silly,log:console.log};e.exports=function(e){return t.level="silly",t.useStyles=process.env.FORCE_STYLES,t.format=i[process.type]||i.browser,t;function t(r){var n,i,c,u=e.scope.getOptions();n="renderer"===process.type||"worker"===process.type?s(r,t,u):a(r,t,u),i=r.level,c=n,o[i]?o[i].apply(o.context,c):o.log.apply(o.context,c)}},e.exports.transformRenderer=s,e.exports.transformMain=a;var i={browser:"%c{h}:{i}:{s}.{ms}{scope}%c "+("win32"===process.platform?">":"›")+" {text}",renderer:"{h}:{i}:{s}.{ms}{scope} › {text}",worker:"{h}:{i}:{s}.{ms}{scope} › {text}"};function s(e,t,r){return n.transform(e,[n.customFormatterFactory(t.format,!0,r)])}function a(e,t,r){var o,s=function(e,t){if(!0===e||!1===e)return e;var r="error"===t||"warn"===t?process.stderr:process.stdout;return r&&r.isTTY}(t.useStyles,e.level);return n.transform(e,[(o=t.format,function(e,t){return o!==i.browser?e:["color:"+c(t.level),"color:unset"].concat(e)}),n.customFormatterFactory(t.format,!1,r),s?n.applyAnsiStyles:n.removeStyles,n.concatFirstStringElements,n.maxDepthFactory(4),n.toJSON])}function c(e){switch(e){case"error":return"red";case"warn":return"yellow";case"info":return"cyan";default:return"unset"}}},function(e,t,r){"use strict";var n=r(5);function o(){var e=function(){if("undefined"!=typeof WeakSet)return new WeakSet;var e=[];return this.add=function(t){e.push(t)},this.has=function(t){return-1!==e.indexOf(t)},this}();return function(t,r){if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return i(t,r)}}function i(e,t){return t instanceof Error?t.stack:t?"function"==typeof t.toJSON?t.toJSON():"function"==typeof t?"[function] "+t.toString():t:t}e.exports={maxDepthFactory:function(e){return e=e||6,function(t){return function e(t,r){if(!t)return t;if(r<1)return t.map?"[array]":"object"==typeof t?"[object]":t;if("function"==typeof t.map)return t.map((function(t){return e(t,r-1)}));if("object"!=typeof t)return t;if(t&&"function"==typeof t.toISOString)return t;if(null===t)return null;if(t instanceof Error)return t;var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=e(t[o],r-1));return n}(t,e)}},serialize:i,toJSON:function(e){return JSON.parse(JSON.stringify(e,o()))},toString:function(e){var t=e.map((function(e){if(void 0!==e)return JSON.parse(JSON.stringify(e,o(),"  "))}));return n.format.apply(n,t)}}},function(e,t,r){"use strict";e.exports={applyAnsiStyles:function(e){return s(e,o,i)},removeStyles:function(e){return s(e,(function(){return""}))},transformStyles:s};var n={unset:"[0m",black:"[30m",red:"[31m",green:"[32m",yellow:"[33m",blue:"[34m",magenta:"[35m",cyan:"[36m",white:"[37m"};function o(e){var t=e.replace(/color:\s*(\w+).*/,"$1").toLowerCase();return n[t]||""}function i(e){return e+n.unset}function s(e,t,r){var n={};return e.reduce((function(e,o,i,s){if(n[i])return e;if("string"==typeof o){var a=i,c=!1;o=o.replace(/%[1cdfiOos]/g,(function(e){if(a+=1,"%c"!==e)return e;var r=s[a];return"string"==typeof r?(n[a]=!0,c=!0,t(r,o)):e})),c&&r&&(o=r(o))}return e.push(o),e}),[])}},function(e,t,r){"use strict";function n(e,t){return e.replace("{y}",String(t.getFullYear())).replace("{m}",i(t.getMonth()+1)).replace("{d}",i(t.getDate())).replace("{h}",i(t.getHours())).replace("{i}",i(t.getMinutes())).replace("{s}",i(t.getSeconds())).replace("{ms}",i(t.getMilliseconds(),3)).replace("{z}",o(t.getTimezoneOffset())).replace("{iso}",t.toISOString())}function o(e){var t=Math.abs(e);return(e>=0?"-":"+")+i(Math.floor(t/60))+":"+i(t%60)}function i(e,t){return t=t||2,(new Array(t+1).join("0")+e).substr(-t,t)}function s(e,t){return t=Math.max(t,e.length),(e+Array(t+1).join(" ")).substring(0,t)}e.exports={concatFirstStringElements:function(e){if("string"!=typeof e[0]||"string"!=typeof e[1])return e;if(e[0].match(/%[1cdfiOos]/))return e;return e[1]=e[0]+" "+e[1],e.shift(),e},formatDate:n,formatTimeZone:o,pad:i,padString:s,templateDate:function(e,t){var r=e[0];if("string"!=typeof r)return e;return e[0]=n(r,t.date),e},templateVariables:function(e,t){var r=e[0],n=t.variables;if("string"!=typeof r||!t.variables)return e;for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r=r.replace("{"+o+"}",n[o]));return r=r.replace("{level}",t.level),e[0]=r,e},templateScopeFactory:function(e){var t=(e=e||{}).labelLength||0;return function(r,n){var o,i=r[0],a=n.scope&&n.scope.label;return a||(a=e.defaultLabel),o=""===a?t>0?s("",t+3):"":"string"==typeof a?s(" ("+a+")",t+3):"",r[0]=i.replace("{scope}",o),r}},templateText:function(e){var t=e[0];if("string"!=typeof t)return e;if(t.lastIndexOf("{text}")===t.length-6)return e[0]=t.replace(/\s?{text}/,""),""===e[0]&&e.shift(),e;var r=t.split("{text}"),n=[];""!==r[0]&&n.push(r[0]);n=n.concat(e.slice(1)),""!==r[1]&&n.push(r[1]);return n}}},function(e,t,r){"use strict";var n=r(7),o=r(0),i=r(5),s=r(4),a=r(19).FileRegistry,c=r(21);e.exports=function(e,t){var r=c.getPathVariables(process.platform),a=t||u;a.listenerCount("error")<1&&a.on("error",(function(e,t){p("Can't write to "+t,e)}));return l.archiveLog=function(e){var t=e.toString(),r=o.parse(t);try{n.renameSync(t,o.join(r.dir,r.name+".old"+r.ext))}catch(t){p("Could not rotate log",t);var i=Math.round(l.maxSize/4);e.crop(Math.min(i,262144))}},l.fileName=function(){switch(process.type){case"renderer":return"renderer.log";case"worker":return"worker.log";default:return"main.log"}}(),l.format="[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}",l.getFile=f,l.level="silly",l.maxSize=1048576,l.resolvePath=function(e){return o.join(e.libraryDefaultDir,e.fileName)},l.sync=!0,l.writeOptions={flag:"a",mode:438,encoding:"utf8"},function(){var e=" is deprecated and will be removed in v5.",t=" property"+e;function r(){return f().path}Object.defineProperties(l,{bytesWritten:{get:i.deprecate((function(){return f().bytesWritten}),"bytesWritten"+t)},file:{get:i.deprecate(r,"file"+t),set:i.deprecate((function(e){l.resolvePath=function(){return e}}),"file"+t)},fileSize:{get:i.deprecate((function(){return f().size}),"file"+t)}}),l.clear=i.deprecate((function(){f().clear()}),"clear()"+e),l.findLogPath=i.deprecate(r,"findLogPath()"+e),l.init=i.deprecate((function(){}),"init()"+e)}(),l;function l(t){var r=f(t);l.maxSize>0&&r.size>l.maxSize&&(l.archiveLog(r),r.reset());var n=e.scope.getOptions(),o=s.transform(t,[s.removeStyles,s.customFormatterFactory(l.format,!1,n),s.concatFirstStringElements,s.maxDepthFactory(),s.toString]);r.writeLine(o)}function p(t,r){var n=["electron-log.transports.file: "+t];r&&n.push(r),e.transports.console({data:n,date:new Date,level:"warn"})}function f(e){var t=Object.assign({},r,{fileName:l.fileName}),n=l.resolvePath(t,e);return a.provide(n,l.writeOptions,!l.sync)}};var u=new a},function(e,t,r){"use strict";var n=r(20),o=r(7),i=r(2),s=r(0),a=r(5);function c(e,t,r){n.call(this),this.path=e,this.initialSize=void 0,this.bytesWritten=0,this.writeAsync=Boolean(r),this.asyncWriteQueue=[],this.writeOptions=t||{flag:"a",mode:438,encoding:"utf8"},Object.defineProperty(this,"size",{get:this.getSize.bind(this)})}function u(e){c.call(this,e)}function l(){n.call(this),this.store={},this.emitError=this.emitError.bind(this)}e.exports={File:c,FileRegistry:l,NullFile:u},a.inherits(c,n),c.prototype.clear=function(){try{return o.writeFileSync(this.path,"",{mode:this.writeOptions.mode,flag:"w"}),this.reset(),!0}catch(e){return"ENOENT"===e.code||(this.emit("error",e,this),!1)}},c.prototype.crop=function(e){try{var t=(r=this.path,n=e||4096,s=Buffer.alloc(n),a=o.statSync(r),c=Math.min(a.size,n),u=Math.max(0,a.size-n),l=o.openSync(r,"r"),p=o.readSync(l,s,0,c,u),o.closeSync(l),s.toString("utf8",0,p));this.clear(),this.writeLine("[log cropped]"+i.EOL+t)}catch(e){this.emit("error",new Error("Couldn't crop file "+this.path+". "+e.message),this)}var r,n,s,a,c,u,l,p},c.prototype.toString=function(){return this.path},c.prototype.reset=function(){this.initialSize=void 0,this.bytesWritten=0},c.prototype.writeLine=function(e){if(e+=i.EOL,this.writeAsync)return this.asyncWriteQueue.push(e),void this.nextAsyncWrite();try{o.writeFileSync(this.path,e,this.writeOptions),this.increaseBytesWrittenCounter(e)}catch(e){this.emit("error",new Error("Couldn't write to "+this.path+". "+e.message),this)}},c.prototype.getSize=function(){if(void 0===this.initialSize)try{var e=o.statSync(this.path);this.initialSize=e.size}catch(e){this.initialSize=0}return this.initialSize+this.bytesWritten},c.prototype.isNull=function(){return!1},c.prototype.increaseBytesWrittenCounter=function(e){this.bytesWritten+=Buffer.byteLength(e,this.writeOptions.encoding)},c.prototype.nextAsyncWrite=function(){var e=this;if(!(this.asyncWriteQueue.length<1)){var t=this.asyncWriteQueue.shift();o.writeFile(this.path,t,this.writeOptions,(function(r){r?e.emit("error",new Error("Couldn't write to "+e.path+". "+r.message),this):e.increaseBytesWrittenCounter(t),e.nextAsyncWrite()}))}},a.inherits(u,c),u.prototype.clear=function(){},u.prototype.crop=function(){},u.prototype.writeLine=function(){},u.prototype.getSize=function(){return 0},u.prototype.isNull=function(){return!0},a.inherits(l,n),l.prototype.provide=function(e,t,r){var n;try{if(e=s.resolve(e),this.store[e])return this.store[e];n=this.createFile(e,t,Boolean(r))}catch(t){n=new u(e),this.emitError(t,n)}return n.on("error",this.emitError),this.store[e]=n,n},l.prototype.createFile=function(e,t,r){return this.testFileWriting(e),new c(e,t,r)},l.prototype.emitError=function(e,t){this.emit("error",e,t)},l.prototype.testFileWriting=function(e){!function e(t){if(function(e){if(!process.versions)return!1;return Number(process.version.match(/^v(\d+\.\d+)/)[1].replace(/\.(\d)$/,".0$1"))>=e}(10.12))return o.mkdirSync(t,{recursive:!0}),!0;try{return o.mkdirSync(t),!0}catch(r){if("ENOENT"===r.code)return e(s.dirname(t))&&e(t);try{if(o.statSync(t).isDirectory())return!0;throw r}catch(e){throw e}}}(s.dirname(e)),o.writeFileSync(e,"",{flag:"a"})}},function(e,t){e.exports=require("events")},function(e,t,r){"use strict";var n=r(2),o=r(0),i=r(1),s=r(22);function a(e){var t=i.getPath("appData");if(t)return t;var r=c();switch(e){case"darwin":return o.join(r,"Library/Application Support");case"win32":return process.env.APPDATA||o.join(r,"AppData/Roaming");default:return process.env.XDG_CONFIG_HOME||o.join(r,".config")}}function c(){return n.homedir?n.homedir():process.env.HOME}function u(e,t){return"darwin"===e?o.join(c(),"Library/Logs",t):o.join(f(e,t),"logs")}function l(e){return"darwin"===e?o.join(c(),"Library/Logs","{appName}"):o.join(a(e),"{appName}","logs")}function p(){var e=i.getName()||"",t=i.getVersion();if("electron"===e.toLowerCase()&&(e="",t=""),e&&t)return{name:e,version:t};var r=s.readPackageJson();return e||(e=r.name),t||(t=r.version),{name:e,version:t}}function f(e,t){return i.getName()!==t?o.join(a(e),t):i.getPath("userData")||o.join(a(e),t)}e.exports={getAppData:a,getLibraryDefaultDir:u,getLibraryTemplate:l,getNameAndVersion:p,getPathVariables:function(e){var t=p(),r=t.name,o=t.version;return{appData:a(e),appName:r,appVersion:o,electronDefaultDir:i.getPath("logs"),home:c(),libraryDefaultDir:u(e,r),libraryTemplate:l(e),temp:i.getPath("temp")||n.tmpdir(),userData:f(e,r)}},getUserData:f}},function(e,t,r){"use strict";var n=r(7),o=r(0);function i(e){try{var t=s("package.json",e=o.join.apply(o,arguments));if(!t)return null;var r=JSON.parse(n.readFileSync(t,"utf8")),i=r.productName||r.name;if(!i||"electron"===i.toLowerCase())return null;if(r.productName||r.name)return{name:i,version:r.version}}catch(e){return null}}function s(e,t){for(var r=t;;){var i=o.parse(r),s=i.root,a=i.dir;if(n.existsSync(o.join(r,e)))return o.resolve(o.join(r,e));if(r===s)return null;r=a}}e.exports={readPackageJson:function(){return i(r.c[r.s]&&r.c[r.s].filename)||i(process.resourcesPath,"app.asar")||i(process.cwd())||{name:null,version:null}},tryReadJsonAt:i}},function(e,t,r){"use strict";var n=r(4),o=r(1),i=r(3);e.exports=function(e){if(t.eventId="__ELECTRON_LOG_IPC_"+e.logId+"__",t.level=!!e.isDev&&"silly",o.isIpcChannelListened(t.eventId))return function(){};return o.onIpc(t.eventId,(function(t,r){r.date=new Date(r.date),i.runTransport(e.transports.console,r,e)})),o.loadRemoteModule("electron-log"),o.isElectron()?t:null;function t(e){var r=Object.assign({},e,{data:n.transform(e,[n.toJSON,n.maxDepthFactory(3)])});o.sendIpc(t.eventId,r)}}},function(e,t,r){"use strict";var n=r(25),o=r(26),i=r(27),s=r(3),a=r(4);e.exports=function(e){return t.client={name:"electron-application"},t.depth=6,t.level=!1,t.requestOptions={},t.url=null,t.transformBody=function(e){return JSON.stringify(e)},t;function t(r){if(t.url){var c=t.transformBody({client:t.client,data:a.transform(r,[a.removeStyles,a.toJSON,a.maxDepthFactory(t.depth+1)]),date:r.date.getTime(),level:r.level,variables:r.variables});(function(e,t,r){var s=i.parse(e),a="https:"===s.protocol?o:n,c={hostname:s.hostname,port:s.port,path:s.path,method:"POST",headers:{"Content-Length":r.length,"Content-Type":"application/json"}};Object.assign(c,t);var u=a.request(c);return u.write(r),u.end(),u})(t.url,t.requestOptions,c).on("error",(function(r){var n={data:["electron-log.transports.remote: cannot send HTTP request to "+t.url,r],date:new Date,level:"warn"},o=[e.transports.console,e.transports.ipc,e.transports.file];s.runTransports(o,n,e)}))}}}},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("https")},function(e,t){e.exports=require("url")},function(e,t,r){var n=r(0),o=r(29).spawn,i=r(30)("electron-squirrel-startup"),s=r(6).app,a=function(e,t){var r=n.resolve(n.dirname(process.execPath),"..","Update.exe");i("Spawning `%s` with args `%s`",r,e),o(r,e,{detached:!0}).on("close",t)};e.exports=function(){if("win32"===process.platform){var e=process.argv[1];i("processing squirrel command `%s`",e);var t=n.basename(process.execPath);if("--squirrel-install"===e||"--squirrel-updated"===e)return a(["--createShortcut="+t],s.quit),!0;if("--squirrel-uninstall"===e)return a(["--removeShortcut="+t],s.quit),!0;if("--squirrel-obsolete"===e)return s.quit(),!0}return!1}()},function(e,t){e.exports=require("child_process")},function(e,t,r){"undefined"==typeof process||"renderer"===process.type||!0===process.browser||process.__nwjs?e.exports=r(31):e.exports=r(33)},function(e,t,r){t.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;t.splice(1,0,r,"color: inherit");let n=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(n++,"%c"===e&&(o=n))}),t.splice(o,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=r(8)(t);const{formatters:n}=e.exports;n.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},function(e,t){var r=1e3,n=6e4,o=60*n,i=24*o;function s(e,t,r,n){var o=t>=1.5*r;return Math.round(e/r)+" "+n+(o?"s":"")}e.exports=function(e,t){t=t||{};var a=typeof e;if("string"===a&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var s=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*s;case"weeks":case"week":case"w":return 6048e5*s;case"days":case"day":case"d":return s*i;case"hours":case"hour":case"hrs":case"hr":case"h":return s*o;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===a&&isFinite(e))return t.long?function(e){var t=Math.abs(e);if(t>=i)return s(e,t,i,"day");if(t>=o)return s(e,t,o,"hour");if(t>=n)return s(e,t,n,"minute");if(t>=r)return s(e,t,r,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=i)return Math.round(e/i)+"d";if(t>=o)return Math.round(e/o)+"h";if(t>=n)return Math.round(e/n)+"m";if(t>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,r){const n=r(34),o=r(5);t.init=function(e){e.inspectOpts={};const r=Object.keys(t.inspectOpts);for(let n=0;n<r.length;n++)e.inspectOpts[r[n]]=t.inspectOpts[r[n]]},t.log=function(...e){return process.stderr.write(o.format(...e)+"\n")},t.formatArgs=function(r){const{namespace:n,useColors:o}=this;if(o){const t=this.color,o="[3"+(t<8?t:"8;5;"+t),i=`  ${o};1m${n} [0m`;r[0]=i+r[0].split("\n").join("\n"+i),r.push(o+"m+"+e.exports.humanize(this.diff)+"[0m")}else r[0]=function(){if(t.inspectOpts.hideDate)return"";return(new Date).toISOString()+" "}()+n+" "+r[0]},t.save=function(e){e?process.env.DEBUG=e:delete process.env.DEBUG},t.load=function(){return process.env.DEBUG},t.useColors=function(){return"colors"in t.inspectOpts?Boolean(t.inspectOpts.colors):n.isatty(process.stderr.fd)},t.colors=[6,2,3,4,5,1];try{const e=r(35);e&&(e.stderr||e).level>=2&&(t.colors=[20,21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,128,129,134,135,148,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206,207,208,209,214,215,220,221])}catch(e){}t.inspectOpts=Object.keys(process.env).filter(e=>/^debug_/i.test(e)).reduce((e,t)=>{const r=t.substring(6).toLowerCase().replace(/_([a-z])/g,(e,t)=>t.toUpperCase());let n=process.env[t];return n=!!/^(yes|on|true|enabled)$/i.test(n)||!/^(no|off|false|disabled)$/i.test(n)&&("null"===n?null:Number(n)),e[r]=n,e},{}),e.exports=r(8)(t);const{formatters:i}=e.exports;i.o=function(e){return this.inspectOpts.colors=this.useColors,o.inspect(e,this.inspectOpts).replace(/\s*\n\s*/g," ")},i.O=function(e){return this.inspectOpts.colors=this.useColors,o.inspect(e,this.inspectOpts)}},function(e,t){e.exports=require("tty")},function(e,t,r){"use strict";const n=r(2),o=r(36),{env:i}=process;let s;function a(e){return function(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}(function(e){if(0===s)return 0;if(o("color=16m")||o("color=full")||o("color=truecolor"))return 3;if(o("color=256"))return 2;if(e&&!e.isTTY&&void 0===s)return 0;const t=s||0;if("dumb"===i.TERM)return t;if("win32"===process.platform){const e=n.release().split(".");return Number(process.versions.node.split(".")[0])>=8&&Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in i)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(e=>e in i)||"codeship"===i.CI_NAME?1:t;if("TEAMCITY_VERSION"in i)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(i.TEAMCITY_VERSION)?1:0;if("truecolor"===i.COLORTERM)return 3;if("TERM_PROGRAM"in i){const e=parseInt((i.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(i.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(i.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(i.TERM)||"COLORTERM"in i?1:t}(e))}o("no-color")||o("no-colors")||o("color=false")||o("color=never")?s=0:(o("color")||o("colors")||o("color=true")||o("color=always"))&&(s=1),"FORCE_COLOR"in i&&(s=!0===i.FORCE_COLOR||"true"===i.FORCE_COLOR?1:!1===i.FORCE_COLOR||"false"===i.FORCE_COLOR?0:0===i.FORCE_COLOR.length?1:Math.min(parseInt(i.FORCE_COLOR,10),3)),e.exports={supportsColor:a,stdout:a(process.stdout),stderr:a(process.stderr)}},function(e,t,r){"use strict";e.exports=(e,t)=>{t=t||process.argv;const r=e.startsWith("-")?"":1===e.length?"-":"--",n=t.indexOf(r+e),o=t.indexOf("--");return-1!==n&&(-1===o||n<o)}}]);
//# sourceMappingURL=index.js.map