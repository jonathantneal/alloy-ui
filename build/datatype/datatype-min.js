/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: nightly
*/
YUI.add("datatype-number-parse",function(b){var a=b.Lang;b.mix(b.namespace("DataType.Number"),{parse:function(d){var c=(d===null)?d:+d;if(a.isNumber(c)){return c;}else{return null;}}});b.namespace("Parsers").number=b.DataType.Number.parse;},"3.2.0",{requires:["yui-base"]});YUI.add("datatype-number-format",function(b){var a=b.Lang;b.mix(b.namespace("DataType.Number"),{format:function(j,e){if(a.isNumber(j)){e=e||{};var d=(j<0),f=j+"",n=e.decimalPlaces,c=e.decimalSeparator||".",m=e.thousandsSeparator,l,g,k,h;if(a.isNumber(n)&&(n>=0)&&(n<=20)){f=j.toFixed(n);}if(c!=="."){f=f.replace(".",c);}if(m){l=f.lastIndexOf(c);l=(l>-1)?l:f.length;g=f.substring(l);for(k=0,h=l;h>0;h--){if((k%3===0)&&(h!==l)&&(!d||(h>1))){g=m+g;}g=f.charAt(h-1)+g;k++;}f=g;}f=(e.prefix)?e.prefix+f:f;f=(e.suffix)?f+e.suffix:f;return f;}else{return(a.isValue(j)&&j.toString)?j.toString():"";}}});},"3.2.0",{requires:["yui-base"]});YUI.add("datatype-number",function(a){},"3.2.0",{use:["datatype-number-parse","datatype-number-format"]});YUI.add("datatype-date-parse",function(b){var a=b.Lang;b.mix(b.namespace("DataType.Date"),{parse:function(d){var c=null;if(!(a.isDate(d))){c=new Date(d);}else{return c;}if(a.isDate(c)&&(c!="Invalid Date")&&!isNaN(c)){return c;}else{return null;}}});b.namespace("Parsers").date=b.DataType.Date.parse;},"3.2.0",{requires:["yui-base"]});YUI.add("datatype-date-format",function(d){var a=function(e,g,f){if(typeof f==="undefined"){f=10;}g=g.toString();for(;parseInt(e,10)<f&&f>1;f/=10){e=g+e;}return e.toString();};var c={formats:{a:function(f,e){return e.a[f.getDay()];},A:function(f,e){return e.A[f.getDay()];},b:function(f,e){return e.b[f.getMonth()];},B:function(f,e){return e.B[f.getMonth()];},C:function(e){return a(parseInt(e.getFullYear()/100,10),0);},d:["getDate","0"],e:["getDate"," "],g:function(e){return a(parseInt(c.formats.G(e)%100,10),0);},G:function(g){var h=g.getFullYear();var f=parseInt(c.formats.V(g),10);var e=parseInt(c.formats.W(g),10);if(e>f){h++;}else{if(e===0&&f>=52){h--;}}return h;},H:["getHours","0"],I:function(f){var e=f.getHours()%12;return a(e===0?12:e,0);},j:function(i){var h=new Date(""+i.getFullYear()+"/1/1 GMT");var f=new Date(""+i.getFullYear()+"/"+(i.getMonth()+1)+"/"+i.getDate()+" GMT");var e=f-h;var g=parseInt(e/60000/60/24,10)+1;return a(g,0,100);},k:["getHours"," "],l:function(f){var e=f.getHours()%12;return a(e===0?12:e," ");},m:function(e){return a(e.getMonth()+1,0);},M:["getMinutes","0"],p:function(f,e){return e.p[f.getHours()>=12?1:0];},P:function(f,e){return e.P[f.getHours()>=12?1:0];},s:function(f,e){return parseInt(f.getTime()/1000,10);},S:["getSeconds","0"],u:function(e){var f=e.getDay();return f===0?7:f;},U:function(h){var e=parseInt(c.formats.j(h),10);var g=6-h.getDay();var f=parseInt((e+g)/7,10);return a(f,0);},V:function(h){var g=parseInt(c.formats.W(h),10);var e=(new Date(""+h.getFullYear()+"/1/1")).getDay();var f=g+(e>4||e<=1?0:1);if(f===53&&(new Date(""+h.getFullYear()+"/12/31")).getDay()<4){f=1;}else{if(f===0){f=c.formats.V(new Date(""+(h.getFullYear()-1)+"/12/31"));}}return a(f,0);},w:"getDay",W:function(h){var e=parseInt(c.formats.j(h),10);var g=7-c.formats.u(h);var f=parseInt((e+g)/7,10);return a(f,0,10);},y:function(e){return a(e.getFullYear()%100,0);},Y:"getFullYear",z:function(g){var f=g.getTimezoneOffset();var e=a(parseInt(Math.abs(f/60),10),0);var h=a(Math.abs(f%60),0);return(f>0?"-":"+")+e+h;},Z:function(e){var f=e.toString().replace(/^.*:\d\d( GMT[+-]\d+)? \(?([A-Za-z ]+)\)?\d*$/,"$2").replace(/[a-z ]/g,"");if(f.length>4){f=c.formats.z(e);}return f;},"%":function(e){return"%";}},aggregates:{c:"locale",D:"%m/%d/%y",F:"%Y-%m-%d",h:"%b",n:"\n",r:"%I:%M:%S %p",R:"%H:%M",t:"\t",T:"%H:%M:%S",x:"locale",X:"locale"},format:function(o,j){j=j||{};if(!d.Lang.isDate(o)){return d.Lang.isValue(o)?o:"";}var n,e,i,g,m;n=j.format||d.config.dateFormat||"%Y-%m-%d";i=d.Lang.isUndefined(d.config.lang)&&(d.Lang.isValue(j.locale)||d.Lang.isValue(d.config.locale));if(i){g=j.locale||d.config.locale;m=d.DataType.Date.Locale;g=g.replace(/_/g,"-");if(!m[g]){var h=g.replace(/-[a-zA-Z]+$/,"");if(h in m){g=h;}else{if(d.config.locale in m){g=d.config.locale;}else{g="en";}}}e=m[g];}else{e=d.Intl.get("datatype-date-format");}var k=function(q,p){if(i&&p==="r"){return e[p];}var r=c.aggregates[p];return(r==="locale"?e[p]:r);};var f=function(q,p){var r=c.formats[p];switch(d.Lang.type(r)){case"string":return o[r]();case"function":return r.call(o,o,e);case"array":if(d.Lang.type(r[0])==="string"){return a(o[r[0]](),r[1]);}default:return p;}};while(n.match(/%[cDFhnrRtTxX]/)){n=n.replace(/%([cDFhnrRtTxX])/g,k);}var l=n.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g,f);k=f=undefined;return l;}};d.mix(d.namespace("DataType.Date"),c);var b={a:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],B:["January","February","March","April","May","June","July","August","September","October","November","December"],c:"%a %d %b %Y %T %Z",p:["AM","PM"],P:["am","pm"],r:"%I:%M:%S %p",x:"%d/%m/%y",X:"%T"};d.namespace("DataType.Date.Locale");d.DataType.Date.Locale["en"]=b;d.DataType.Date.Locale["en-US"]=d.merge(b,{c:"%a %d %b %Y %I:%M:%S %p %Z",x:"%m/%d/%Y",X:"%I:%M:%S %p"});d.DataType.Date.Locale["en-GB"]=d.merge(b,{r:"%l:%M:%S %P %Z"});d.DataType.Date.Locale["en-AU"]=d.merge(b);},"3.2.0",{requires:["yui-base"],lang:["ar","ar-JO","ca","ca-ES","da","da-DK","de","de-AT","de-DE","el","el-GR","en","en-AU","en-CA","en-GB","en-IE","en-IN","en-JO","en-MY","en-NZ","en-PH","en-SG","en-US","es","es-AR","es-BO","es-CL","es-CO","es-EC","es-ES","es-MX","es-PE","es-PY","es-US","es-UY","es-VE","fi","fi-FI","fr","fr-BE","fr-CA","fr-FR","hi","hi-IN","id","id-ID","it","it-IT","ja","ja-JP","ko","ko-KR","ms","ms-MY","nb","nb-NO","nl","nl-BE","nl-NL","pl","pl-PL","pt","pt-BR","ro","ro-RO","ru","ru-RU","sv","sv-SE","th","th-TH","tr","tr-TR","vi","vi-VN","zh-Hans","zh-Hans-CN","zh-Hant","zh-Hant-HK","zh-Hant-TW"]});
YUI.add("datatype-date",function(a){},"3.2.0",{use:["datatype-date-parse","datatype-date-format"]});YUI.add("datatype-xml-parse",function(b){var a=b.Lang;b.mix(b.namespace("DataType.XML"),{parse:function(f){var d=null;if(a.isString(f)){try{if(!a.isUndefined(ActiveXObject)){d=new ActiveXObject("Microsoft.XMLDOM");d.async=false;d.loadXML(f);}}catch(c){try{if(!a.isUndefined(DOMParser)){d=new DOMParser().parseFromString(f,"text/xml");}}catch(g){}}}if((a.isNull(d))||(a.isNull(d.documentElement))||(d.documentElement.nodeName==="parsererror")){}return d;}});b.namespace("Parsers").xml=b.DataType.XML.parse;},"3.2.0",{requires:["yui-base"]});YUI.add("datatype-xml-format",function(b){var a=b.Lang;b.mix(b.namespace("DataType.XML"),{format:function(c){try{if(!a.isUndefined(XMLSerializer)){return(new XMLSerializer()).serializeToString(c);}}catch(d){if(c&&c.xml){return c.xml;}else{return(a.isValue(c)&&c.toString)?c.toString():"";}}}});},"3.2.0",{requires:["yui-base"]});YUI.add("datatype-xml",function(a){},"3.2.0",{use:["datatype-xml-parse","datatype-xml-format"]});YUI.add("datatype",function(a){},"3.2.0",{use:["datatype-number","datatype-date","datatype-xml"]});