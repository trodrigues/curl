var m=!0;
(function(y,E,h){var I,J;function n(a,b){return 0==V.call(a).indexOf("[object "+b)}function W(a){function b(b){if(b in a)return b="."!=a[b].charAt(0)?(!a.path||z(a.path)?a.path:a.path+"/")+a[b]:r(a[b],a.path),s(b)}n(a,"String")&&(a=s(a),a={name:a,path:a,main:I,lib:J});a.path=a.path||"";a.h=b("lib");a.i=b("main");return a}function K(a){var b,d,c,e=[];t=a.baseUrl||"";if(a.debug)A=m,k.cache=i,k.cfg=a,k.undefine=function(a){delete i[a]};var f=a.paths;for(b in f)d=s(b.replace("!","!/")),c=u[d]={path:s(f[b])},
c.f=(c.path.match(L)||[]).length,e.push(d);f=a.packages;for(b in f)d=s(f[b].name||b),c=u[d]=W(f[b]),c.f=(c.path.match(L)||[]).length,e.push(d);M=RegExp("^("+e.sort(function(a,b){return u[a].f<u[b].f}).join("|").replace(/\//g,"\\/")+")(?=\\/|$)");o=a.pluginPath||o}function X(){}function B(a){function b(a,b){return N(a,b?function(){b.apply(p,arguments)}:X,e)}function d(a){return C(v(r(a,c)),t)}var c=a.substr(0,a.lastIndexOf("/")),e={baseName:c},f={};e.d={exports:f,module:{id:r(a,c),uri:d(a),exports:f}};
A&&(b.curl=k);e.e=e.d.require=b;b.toUrl=d;return e}function G(){}function Y(a){G.prototype=a;a=new G;G.prototype=p;return a}function H(){function a(a,b){f.push([a,b])}function b(a){c(m,a)}function d(a){c(!1,a)}function c(c,e){a=c?function(a){a&&a(e)}:function(a,b){b&&b(e)};b=d=function(){throw Error("Promise already completed.");};for(var g,i=0;g=f[i++];)(g=g[c?0:1])&&g(e)}var e=this,f=[];this.c=function(b,c){a(b,c)};this.b=function(a){e.l=a;b(a)};this.a=function(a){e.n=a;d(a)}}function q(a){H.apply(this);
this.name=a}function z(a){return"/"==a.charAt(a.length-1)}function s(a){return z(a)?a.substr(0,a.length-1):a}function v(a,b){function d(a){e=a.replace(M,function(b){c=u[b]||{};f=m;return c.i&&b==a?c.i:c.h?c.h:c.path||""})}var c,e,f;O.test(a)||(b&&d(b+"!/"+a),f||d(a));return e}function C(a,b,d){return(b&&!O.test(a)?(!b||z(b)?b:b+"/")+a:a)+(d&&!Z.test(a)?".js":"")}function $(a,b,d){var c=E.createElement("script");c.type="text/javascript";c.onload=c[P]=function(d){d=d||y.event;if("load"===d.type||aa[this.readyState])delete D[a.name],
this.onload=this[P]=this.onerror=null,b(c)};c.onerror=function(){d(Error("Syntax error or http error: "+a.url))};c.charset=a.charset||"utf-8";c.async=m;c.src=a.url;D[a.name]=c;Q.insertBefore(c,Q.firstChild)}function ba(a){var b,d,c,e,f=a.length;c=a[f-1];e=n(c,"Function");2==f?n(a[0],"Array")?d=a[0]:b=a[0]:3==f&&(b=a[0],d=a[1]);!d&&e&&0<c.length&&(d=["require","exports","module"]);return{name:b,j:d||[],k:e?c:function(){return c}}}function R(a,b){A&&console&&console.log("curl: resolving",a.name);var d=
B(a.baseName||a.name);S(b.j,d,function(c){try{var e=b.k.apply(d.d.exports,c);e===p&&(e=d.d.exports);A&&console&&console.log("curl: defined",a.name,e.toString().substr(0,50).replace(/\n/," "))}catch(f){a.a(f)}a.b(e)},a.a)}function T(a){$(a,function(){var b=w;w=p;!1!==a.m&&(b?b.g?a.a(Error(b.g.replace("${url}",a.url))):R(a,b):a.a(Error("define() not found or duplicates found: "+a.url)))},a.a)}function r(a,b){return a.replace(ca,function(a,c,e){return(e?b.substr(0,b.lastIndexOf("/")):b)+"/"})}function da(a,
b){var d,c,e,f,j,F;c=a.indexOf("!");if(0<=c){e=a.substr(0,c);f=a.substr(c+1);var g=v(e);0>g.indexOf("/")&&(g=v((!o||z(o)?o:o+"/")+g));var l=i[e];if(!l)l=i[e]=new q(e),l.url=C(g,t,m),l.baseName=g,T(l);b=B(b.baseName);b.e.toUrl=function(a){a=v(a,e);return C(a,t)};F=Y(e&&h.plugins&&h.plugins[e]||h)||{};var k=function(a){return r(a,b.baseName)};j=new q(a);l.c(function(g){var h;f=a.substr(c+1);f="normalize"in g?g.normalize(f,k,F):k(f);d=e+"!"+f;h=i[d];if(!h){h=new q(d);f&&!g.dynamic&&(i[d]=h);var l=h.b;
l.resolve=l;l.reject=h.a;g.load(f,b.e,l,F)}h.c(j.b,j.a)},j.a)}else if(f=d=r(a,b.baseName),j=i[f],!j)j=i[f]=new q(f),j.url=C(v(f),t,m),T(j);return j}function S(a,b,d,c){for(var e=[],f=a.length,j=f,h=!1,g=0;g<j&&!h;g++)(function(a,g){g in b.d?(e[a]=b.d[g],f--):g?da(g,b).c(function(b){e[a]=b;0==--f&&(h=m,d(e))},function(a){h=m;c(a)}):f--})(g,a[g]);0==f&&!h&&d(e)}function N(a,b,d){if(n(a,"String")){d=(d=i[a])&&d.l;if(d===p)throw Error("Module is not already resolved: "+a);return d}S(a,d,function(a){b.b?
b.b(a):b.apply(null,a)},function(a){if(b.a)b.a(a);else throw a;})}function k(){var a=ea.call(arguments),b,d;n(a[0],"Object")&&(h=a.shift(),K(h));b=[].concat(a[0]);a=a[1];d=B("");var c=new H,e={};e.then=function(a,b){c.c(function(b){a&&a.apply(null,b)},function(a){if(b)b(a);else throw a;});return e};e.next=function(a,b){var h=c;c=new H;h.c(function(){d.e(a,c,d)},function(a){c.a(a)});b&&c.c(function(a){b.apply(this,a)});return e};a&&e.then(a);N(b,c,d);return e}function U(){var a=ba(arguments),b=a.name;
if(null==b)if(w!==p)w={g:"Multiple anonymous defines found in ${url}."};else{var d;if(!n(y.opera,"Opera"))for(var c in D)if("interactive"==D[c].readyState){d=c;break}if(!(b=d))w=a}if(null!=b)(d=i[b])||(d=i[b]=new q(b)),d.m=!1,"resolved"in d||R(d,a,B(b))}var Q=E.head||E.getElementsByTagName("head")[0],t,o="curl/plugin",u={},i={},w,D={},V={}.toString,p,ea=[].slice,O=/^\/|^\w+:\/\//,ca=/^(\.)(\.)?(\/|$)/,L=/\//,Z=/\?/,M,aa={loaded:1,interactive:1,complete:1},P="onreadystatechange";I="./lib/main";J="./lib";
var A;n(h,"Function")||K(h);var x;x=h.apiName||"curl";(h.apiContext||y)[x]=k;i[x]=new q(x);i[x].b(k);y.define=k.define=U;k.version="0.5.4";U.amd={plugins:m,jQuery:m}})(this,document,this.curl||{});
