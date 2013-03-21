/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.3
build: 3.7.3
*/
YUI.add("handlebars-compiler",function(e,t){
/*!
Handlebars.js - Copyright (C) 2011 Yehuda Katz
https://raw.github.com/wycats/handlebars.js/master/LICENSE
*/
;var n=e.Handlebars,r=function(){function n(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,statements:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,params:25,hash:26,param:27,STRING:28,INTEGER:29,BOOLEAN:30,hashSegments:31,hashSegment:32,ID:33,EQUALS:34,pathSegments:35,SEP:36,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"STRING",29:"INTEGER",30:"BOOLEAN",33:"ID",34:"EQUALS",36:"SEP"},productions_:[0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[25,2],[25,1],[27,1],[27,1],[27,1],[27,1],[26,1],[31,2],[31,1],[32,3],[32,3],[32,3],[32,3],[21,1],[35,3],[35,1]],performAction:function(t,n,r,i,s,o,u){var a=o.length-1;switch(s){case 1:return o[a-1];case 2:this.$=new i.ProgramNode(o[a-2],o[a]);break;case 3:this.$=new i.ProgramNode(o[a]);break;case 4:this.$=new i.ProgramNode([]);break;case 5:this.$=[o[a]];break;case 6:o[a-1].push(o[a]),this.$=o[a-1];break;case 7:this.$=new i.BlockNode(o[a-2],o[a-1].inverse,o[a-1],o[a]);break;case 8:this.$=new i.BlockNode(o[a-2],o[a-1],o[a-1].inverse,o[a]);break;case 9:this.$=o[a];break;case 10:this.$=o[a];break;case 11:this.$=new i.ContentNode(o[a]);break;case 12:this.$=new i.CommentNode(o[a]);break;case 13:this.$=new i.MustacheNode(o[a-1][0],o[a-1][1]);break;case 14:this.$=new i.MustacheNode(o[a-1][0],o[a-1][1]);break;case 15:this.$=o[a-1];break;case 16:this.$=new i.MustacheNode(o[a-1][0],o[a-1][1]);break;case 17:this.$=new i.MustacheNode(o[a-1][0],o[a-1][1],!0);break;case 18:this.$=new i.PartialNode(o[a-1]);break;case 19:this.$=new i.PartialNode(o[a-2],o[a-1]);break;case 20:break;case 21:this.$=[[o[a-2]].concat(o[a-1]),o[a]];break;case 22:this.$=[[o[a-1]].concat(o[a]),null];break;case 23:this.$=[[o[a-1]],o[a]];break;case 24:this.$=[[o[a]],null];break;case 25:o[a-1].push(o[a]),this.$=o[a-1];break;case 26:this.$=[o[a]];break;case 27:this.$=o[a];break;case 28:this.$=new i.StringNode(o[a]);break;case 29:this.$=new i.IntegerNode(o[a]);break;case 30:this.$=new i.BooleanNode(o[a]);break;case 31:this.$=new i.HashNode(o[a]);break;case 32:o[a-1].push(o[a]),this.$=o[a-1];break;case 33:this.$=[o[a]];break;case 34:this.$=[o[a-2],o[a]];break;case 35:this.$=[o[a-2],new i.StringNode(o[a])];break;case 36:this.$=[o[a-2],new i.IntegerNode(o[a])];break;case 37:this.$=[o[a-2],new i.BooleanNode(o[a])];break;case 38:this.$=new i.IdNode(o[a]);break;case 39:o[a-2].push(o[a]),this.$=o[a-2];break;case 40:this.$=[o[a]]}},table:[{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,33:[1,25],35:24},{17:26,21:23,33:[1,25],35:24},{17:27,21:23,33:[1,25],35:24},{17:28,21:23,33:[1,25],35:24},{21:29,33:[1,25],35:24},{1:[2,1]},{6:30,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,31],21:23,33:[1,25],35:24},{10:32,20:[1,33]},{10:34,20:[1,33]},{18:[1,35]},{18:[2,24],21:40,25:36,26:37,27:38,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,38],28:[2,38],29:[2,38],30:[2,38],33:[2,38],36:[1,46]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],36:[2,40]},{18:[1,47]},{18:[1,48]},{18:[1,49]},{18:[1,50],21:51,33:[1,25],35:24},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:52,33:[1,25],35:24},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:40,26:53,27:54,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,23]},{18:[2,26],28:[2,26],29:[2,26],30:[2,26],33:[2,26]},{18:[2,31],32:55,33:[1,56]},{18:[2,27],28:[2,27],29:[2,27],30:[2,27],33:[2,27]},{18:[2,28],28:[2,28],29:[2,28],30:[2,28],33:[2,28]},{18:[2,29],28:[2,29],29:[2,29],30:[2,29],33:[2,29]},{18:[2,30],28:[2,30],29:[2,30],30:[2,30],33:[2,30]},{18:[2,33],33:[2,33]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],34:[1,57],36:[2,40]},{33:[1,58]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,59]},{18:[1,60]},{18:[2,21]},{18:[2,25],28:[2,25],29:[2,25],30:[2,25],33:[2,25]},{18:[2,32],33:[2,32]},{34:[1,57]},{21:61,28:[1,62],29:[1,63],30
:[1,64],33:[1,25],35:24},{18:[2,39],28:[2,39],29:[2,39],30:[2,39],33:[2,39],36:[2,39]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,34],33:[2,34]},{18:[2,35],33:[2,35]},{18:[2,36],33:[2,36]},{18:[2,37],33:[2,37]}],defaultActions:{16:[2,1],37:[2,23],53:[2,21]},parseError:function(t,n){throw new Error(t)},parse:function(t){function d(e){r.length=r.length-2*e,i.length=i.length-e,s.length=s.length-e}function v(){var e;return e=n.lexer.lex()||1,typeof e!="number"&&(e=n.symbols_[e]||e),e}var n=this,r=[0],i=[null],s=[],o=this.table,u="",a=0,f=0,l=0,c=2,h=1;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var p=this.lexer.yylloc;s.push(p),typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);var m,g,y,b,w,E,S={},x,T,N,C;for(;;){y=r[r.length-1];if(this.defaultActions[y])b=this.defaultActions[y];else{if(m===null||typeof m=="undefined")m=v();b=o[y]&&o[y][m]}if(typeof b=="undefined"||!b.length||!b[0]){var k="";if(!l){C=[];for(x in o[y])this.terminals_[x]&&x>2&&C.push("'"+this.terminals_[x]+"'");this.lexer.showPosition?k="Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+C.join(", ")+", got '"+(this.terminals_[m]||m)+"'":k="Parse error on line "+(a+1)+": Unexpected "+(m==1?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(k,{text:this.lexer.match,token:this.terminals_[m]||m,line:this.lexer.yylineno,loc:p,expected:C})}if(l==3){if(m==h)throw new Error(k||"Parsing halted.");f=this.lexer.yyleng,u=this.lexer.yytext,a=this.lexer.yylineno,p=this.lexer.yylloc,m=v()}for(;;){if(c.toString()in o[y])break;if(y===0)throw new Error(k||"Parsing halted.");d(1),y=r[r.length-1]}g=m==2?null:m,m=c,y=r[r.length-1],b=o[y]&&o[y][c],l=3}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+y+", token: "+m);switch(b[0]){case 1:r.push(m),i.push(this.lexer.yytext),s.push(this.lexer.yylloc),r.push(b[1]),m=null,g?(m=g,g=null):(f=this.lexer.yyleng,u=this.lexer.yytext,a=this.lexer.yylineno,p=this.lexer.yylloc,l>0&&l--);break;case 2:T=this.productions_[b[1]][1],S.$=i[i.length-T],S._$={first_line:s[s.length-(T||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(T||1)].first_column,last_column:s[s.length-1].last_column},E=this.performAction.call(S,u,f,a,this.yy,b[1],i,s);if(typeof E!="undefined")return E;T&&(r=r.slice(0,-1*T*2),i=i.slice(0,-1*T),s=s.slice(0,-1*T)),r.push(this.productions_[b[1]][0]),i.push(S.$),s.push(S._$),N=o[r[r.length-2]][r[r.length-1]],r.push(N);break;case 3:return!0}}return!0}},t=function(){var e={EOF:1,parseError:function(t,n){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,n)},setInput:function(e){return this._input=e,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this},input:function(){var e=this._input[0];this.yytext+=e,this.yyleng++,this.match+=e,this.matched+=e;var t=e.match(/\n/);return t&&this.yylineno++,this._input=this._input.slice(1),e},unput:function(e){return this._input=e+this._input,this},more:function(){return this._more=!0,this},less:function(e){this._input=this.match.slice(e)+this._input},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=(new Array(e.length+1)).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,t,n,r,i,s;this._more||(this.yytext="",this.match="");var o=this._currentRules();for(var u=0;u<o.length;u++){n=this._input.match(this.rules[o[u]]);if(n&&(!t||n[0].length>t[0].length)){t=n,r=u;if(!this.options.flex)break}}if(t){s=t[0].match(/\n.*/g),s&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-1:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,o[r],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1);if(e)return e;return}return this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return typeof t!="undefined"?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)}};return e.options={},e.performAction=function(t,n,r,i){var s=i;switch(r){case 0:n.yytext.slice(-1)!=="\\"&&this.begin("mu"),n.yytext.slice(-1)==="\\"&&(n.yytext=n.yytext.substr(0,n.yyleng-1),this.begin("emu"));if(n.yytext)return 14;break;case 1:return 14;case 2:return this.popState(),14;case 3:return 24;case 4:return 16;case 5:return 20;case 6:return 19;case 7:return 19;case 8:return 23;case 9:return 23;case 10:return n.yytext=n.yytext.substr(3,n.yyleng-5),this.popState(),15;case 11:return 22;case 12:return 34;case 13:return 33;case 14:return 33;case 15:return 36;case 16:break;case 17:return this.popState(),18;case 18:return this.popState(),18;case 19
:return n.yytext=n.yytext.substr(1,n.yyleng-2).replace(/\\"/g,'"'),28;case 20:return 30;case 21:return 30;case 22:return 29;case 23:return 33;case 24:return n.yytext=n.yytext.substr(1,n.yyleng-2),33;case 25:return"INVALID";case 26:return 5}},e.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{)))/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[} ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:[0-9]+(?=[}\s]))/,/^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],e.conditions={mu:{rules:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],inclusive:!1},emu:{rules:[2],inclusive:!1},INITIAL:{rules:[0,1,26],inclusive:!0}},e}();return e.lexer=t,n.prototype=e,e.Parser=n,new n}();typeof require!="undefined"&&typeof exports!="undefined"&&(exports.parser=r,exports.Parser=r.Parser,exports.parse=function(){return r.parse.apply(r,arguments)},exports.main=function(t){if(!t[1])throw new Error("Usage: "+t[0]+" FILE");var n,r;return typeof process!="undefined"?n=require("fs").readFileSync(require("path").resolve(t[1]),"utf8"):n=require("file").path(require("file").cwd()).join(t[1]).read({charset:"utf-8"}),exports.parser.parse(n)},typeof module!="undefined"&&require.main===module&&exports.main(typeof process!="undefined"?process.argv.slice(1):require("system").args)),n.Parser=r,n.parse=function(e){return n.Parser.yy=n.AST,n.Parser.parse(e)},n.print=function(e){return(new n.PrintVisitor).accept(e)},n.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){}},n.log=function(e,t){n.logger.log(e,t)},function(){n.AST={},n.AST.ProgramNode=function(e,t){this.type="program",this.statements=e,t&&(this.inverse=new n.AST.ProgramNode(t))},n.AST.MustacheNode=function(e,t,n){this.type="mustache",this.escaped=!n,this.hash=t;var r=this.id=e[0],i=this.params=e.slice(1),s=this.eligibleHelper=r.isSimple;this.isHelper=s&&(i.length||t)},n.AST.PartialNode=function(e,t){this.type="partial",this.id=e,this.context=t};var e=function(e,t){if(e.original!==t.original)throw new n.Exception(e.original+" doesn't match "+t.original)};n.AST.BlockNode=function(t,n,r,i){e(t.id,i),this.type="block",this.mustache=t,this.program=n,this.inverse=r,this.inverse&&!this.program&&(this.isInverse=!0)},n.AST.ContentNode=function(e){this.type="content",this.string=e},n.AST.HashNode=function(e){this.type="hash",this.pairs=e},n.AST.IdNode=function(e){this.type="ID",this.original=e.join(".");var t=[],n=0;for(var r=0,i=e.length;r<i;r++){var s=e[r];s===".."?n++:s==="."||s==="this"?this.isScoped=!0:t.push(s)}this.parts=t,this.string=t.join("."),this.depth=n,this.isSimple=e.length===1&&!this.isScoped&&n===0},n.AST.StringNode=function(e){this.type="STRING",this.string=e},n.AST.IntegerNode=function(e){this.type="INTEGER",this.integer=e},n.AST.BooleanNode=function(e){this.type="BOOLEAN",this.bool=e},n.AST.CommentNode=function(e){this.type="comment",this.comment=e}}(),n.Compiler=function(){},n.JavaScriptCompiler=function(){},function(e,t){e.prototype={compiler:e,disassemble:function(){var e=this.opcodes,t,n=[],r,i;for(var s=0,o=e.length;s<o;s++){t=e[s];if(t.opcode==="DECLARE")n.push("DECLARE "+t.name+"="+t.value);else{r=[];for(var u=0;u<t.args.length;u++)i=t.args[u],typeof i=="string"&&(i='"'+i.replace("\n","\\n")+'"'),r.push(i);n.push(t.opcode+" "+r.join(" "))}}return n.join("\n")},guid:0,compile:function(e,t){this.children=[],this.depths={list:[]},this.options=t;var n=this.options.knownHelpers;this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0};if(n)for(var r in n)this.options.knownHelpers[r]=n[r];return this.program(e)},accept:function(e){return this[e.type](e)},program:function(e){var t=e.statements,n;this.opcodes=[];for(var r=0,i=t.length;r<i;r++)n=t[r],this[n.type](n);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(e,t){return e-t}),this},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options),n=this.guid++,r;this.usePartial=this.usePartial||t.usePartial,this.children[n]=t;for(var i=0,s=t.depths.list.length;i<s;i++){r=t.depths.list[i];if(r<2)continue;this.addDepth(r-1)}return n},block:function(e){var t=e.mustache,n=e.program,r=e.inverse;n&&(n=this.compileProgram(n)),r&&(r=this.compileProgram(r));var i=this.classifyMustache(t);i==="helper"?this.helperMustache(t,n,r):i==="simple"?(this.simpleMustache(t),this.opcode("pushProgram",n),this.opcode("pushProgram",r),this.opcode("pushLiteral","{}"),this.opcode("blockValue")):(this.ambiguousMustache(t,n,r),this.opcode("pushProgram",n),this.opcode("pushProgram",r),this.opcode("pushLiteral","{}"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(e){var t=e.pairs,n,r;this.opcode("push","{}");for(var i=0,s=t.length;i<s;i++)n=t[i],r=n[1],this.accept(r),this.opcode("assignToHash",n[0])},partial:function(e){var t=e.id;this.usePartial=!0,e.context?this.ID(e.context):this.opcode("push","depth0"),this.opcode("invokePartial",t.original),this.opcode("append")},content:function(e){this.opcode("appendContent",e.string)},mustache:function(e){var t=this.options,n=this.classifyMustache(e);n==="simple"?this.simpleMustache(e):n==="helper"?this.helperMustache(e):this.ambiguousMustache(e),e.escaped&&!t.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousMustache:function(e,t,n){var r=e.id,i=r.parts[0];this.opcode("getContext",r.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("invokeAmbiguous",i)},simpleMustache:function(e,t,n){var r=e.id;this.addDepth(r.depth),this.opcode("getContext",r.depth);if(r.parts.length){this.opcode("lookupOnContext",r.parts[0]);for(var i=1,s=r.parts.length;i<s;i++)this.opcode("lookup",r.parts[i])}else this.opcode("pushContext");this.opcode("resolvePossibleLambda")},helperMustache
:function(e,t,n){var r=this.setupFullMustacheParams(e,t,n),i=e.id.parts[0];if(this.options.knownHelpers[i])this.opcode("invokeKnownHelper",r.length,i);else{if(this.knownHelpersOnly)throw new Error("You specified knownHelpersOnly, but used the unknown helper "+i);this.opcode("invokeHelper",r.length,i)}},ID:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("lookupOnContext",e.parts[0]);for(var t=1,n=e.parts.length;t<n;t++)this.opcode("lookup",e.parts[t])},STRING:function(e){this.opcode("pushString",e.string)},INTEGER:function(e){this.opcode("pushLiteral",e.integer)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:[].slice.call(arguments,1)})},declare:function(e,t){this.opcodes.push({opcode:"DECLARE",name:e,value:t})},addDepth:function(e){if(e===0)return;this.depths[e]||(this.depths[e]=!0,this.depths.list.push(e))},classifyMustache:function(e){var t=e.isHelper,n=e.eligibleHelper,r=this.options;if(n&&!t){var i=e.id.parts[0];r.knownHelpers[i]?t=!0:r.knownHelpersOnly&&(n=!1)}return t?"helper":n?"ambiguous":"simple"},pushParams:function(e){var t=e.length,n;while(t--)n=e[t],this.options.stringParams?(n.depth&&this.addDepth(n.depth),this.opcode("getContext",n.depth||0),this.opcode("pushStringParam",n.string)):this[n.type](n)},setupMustacheParams:function(e){var t=e.params;return this.pushParams(t),e.hash?this.hash(e.hash):this.opcode("pushLiteral","{}"),t},setupFullMustacheParams:function(e,t,n){var r=e.params;return this.pushParams(r),this.opcode("pushProgram",t),this.opcode("pushProgram",n),e.hash?this.hash(e.hash):this.opcode("pushLiteral","{}"),r}};var r=function(e){this.value=e};t.prototype={nameLookup:function(e,n,r){return/^[0-9]+$/.test(n)?e+"["+n+"]":t.isValidJavaScriptVariableName(n)?e+"."+n:e+"['"+n+"']"},appendToBuffer:function(e){return this.environment.isSimple?"return "+e+";":"buffer += "+e+";"},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,t,r,i){this.environment=e,this.options=t||{},n.log(n.logger.DEBUG,this.environment.disassemble()+"\n\n"),this.name=this.environment.name,this.isChild=!!r,this.context=r||{programs:[],aliases:{}},this.preamble(),this.stackSlot=0,this.stackVars=[],this.registers={list:[]},this.compileStack=[],this.compileChildren(e,t);var s=e.opcodes,o;this.i=0;for(u=s.length;this.i<u;this.i++)o=s[this.i],o.opcode==="DECLARE"?this[o.name]=o.value:this[o.opcode].apply(this,o.args);return this.createFunctionContext(i)},nextOpcode:function(){var e=this.environment.opcodes,t=e[this.i+1];return e[this.i+1]},eat:function(e){this.i=this.i+1},preamble:function(){var e=[];if(!this.isChild){var t=this.namespace,n="helpers = helpers || "+t+".helpers;";this.environment.usePartial&&(n=n+" partials = partials || "+t+".partials;"),e.push(n)}else e.push("");this.environment.isSimple?e.push(""):e.push(", buffer = "+this.initializeBuffer()),this.lastContext=0,this.source=e},createFunctionContext:function(e){var t=this.stackVars.concat(this.registers.list);t.length>0&&(this.source[1]=this.source[1]+", "+t.join(", "));if(!this.isChild){var r=[];for(var i in this.context.aliases)this.source[1]=this.source[1]+", "+i+"="+this.context.aliases[i]}this.source[1]&&(this.source[1]="var "+this.source[1].substring(2)+";"),this.isChild||(this.source[1]+="\n"+this.context.programs.join("\n")+"\n"),this.environment.isSimple||this.source.push("return buffer;");var s=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];for(var o=0,u=this.environment.depths.list.length;o<u;o++)s.push("depth"+this.environment.depths.list[o]);if(e)return s.push(this.source.join("\n  ")),Function.apply(this,s);var a="function "+(this.name||"")+"("+s.join(",")+") {\n  "+this.source.join("\n  ")+"}";return n.log(n.logger.DEBUG,a+"\n\n"),a},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e),this.replaceStack(function(t){return e.splice(1,0,t),t+" = blockHelperMissing.call("+e.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);var t=this.topStack();e.splice(1,0,t),this.source.push("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){this.source.push(this.appendToBuffer(this.quotedString(e)))},append:function(){var e=this.popStack();this.source.push("if("+e+" || "+e+" === 0) { "+this.appendToBuffer(e)+" }"),this.environment.isSimple&&this.source.push("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){var e=this.nextOpcode(),t="";this.context.aliases.escapeExpression="this.escapeExpression",e&&e.opcode==="appendContent"&&(t=" + "+this.quotedString(e.args[0]),this.eat(e)),this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"+t))},getContext:function(e){this.lastContext!==e&&(this.lastContext=e)},lookupOnContext:function(e){this.pushStack(this.nameLookup("depth"+this.lastContext,e,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"',this.replaceStack(function(e){return"typeof "+e+" === functionType ? "+e+"() : "+e})},lookup:function(e){this.replaceStack(function(t){return t+" == null || "+t+" === false ? "+t+" : "+this.nameLookup(t,e,"context")})},pushStringParam:function(e){this.pushStackLiteral("depth"+this.lastContext),this.pushString(e)},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){this.pushStack(e)},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){e!=null?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},invokeHelper:function(e,t){this.context.aliases.helperMissing="helpers.helperMissing";var n=this.lastHelper=this.setupHelper(e,t);this.register("foundHelper"
,n.name),this.pushStack("foundHelper ? foundHelper.call("+n.callParams+") "+": helperMissing.call("+n.helperMissingParams+")")},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.pushStack(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(e){this.context.aliases.functionType='"function"',this.pushStackLiteral("{}");var t=this.setupHelper(0,e),n=this.lastHelper=this.nameLookup("helpers",e,"helper");this.register("foundHelper",n);var r=this.nameLookup("depth"+this.lastContext,e,"context"),i=this.nextStack();this.source.push("if (foundHelper) { "+i+" = foundHelper.call("+t.callParams+"); }"),this.source.push("else { "+i+" = "+r+"; "+i+" = typeof "+i+" === functionType ? "+i+"() : "+i+"; }")},invokePartial:function(e){var t=[this.nameLookup("partials",e,"partial"),"'"+e+"'",this.popStack(),"helpers","partials"];this.options.data&&t.push("data"),this.context.aliases.self="this",this.pushStack("self.invokePartial("+t.join(", ")+");")},assignToHash:function(e){var t=this.popStack(),n=this.topStack();this.source.push(n+"['"+e+"'] = "+t+";")},compiler:t,compileChildren:function(e,t){var n=e.children,r,i;for(var s=0,o=n.length;s<o;s++){r=n[s],i=new this.compiler,this.context.programs.push("");var u=this.context.programs.length;r.index=u,r.name="program"+u,this.context.programs[u]=i.compile(r,t,this.context)}},programExpression:function(e){this.context.aliases.self="this";if(e==null)return"self.noop";var t=this.environment.children[e],n=t.depths.list,r,i=[t.index,t.name,"data"];for(var s=0,o=n.length;s<o;s++)r=n[s],r===1?i.push("depth0"):i.push("depth"+(r-1));return n.length===0?"self.program("+i.join(", ")+")":(i.shift(),"self.programWithDepth("+i.join(", ")+")")},register:function(e,t){this.useRegister(e),this.source.push(e+" = "+t+";")},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},pushStackLiteral:function(e){return this.compileStack.push(new r(e)),e},pushStack:function(e){return this.source.push(this.incrStack()+" = "+e+";"),this.compileStack.push("stack"+this.stackSlot),"stack"+this.stackSlot},replaceStack:function(e){var t=e.call(this,this.topStack());return this.source.push(this.topStack()+" = "+t+";"),"stack"+this.stackSlot},nextStack:function(e){var t=this.incrStack();return this.compileStack.push("stack"+this.stackSlot),t},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),"stack"+this.stackSlot},popStack:function(){var e=this.compileStack.pop();return e instanceof r?e.value:(this.stackSlot--,e)},topStack:function(){var e=this.compileStack[this.compileStack.length-1];return e instanceof r?e.value:e},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'},setupHelper:function(e,t){var n=[];this.setupParams(e,n);var r=this.nameLookup("helpers",t,"helper");return{params:n,name:r,callParams:["depth0"].concat(n).join(", "),helperMissingParams:["depth0",this.quotedString(t)].concat(n).join(", ")}},setupParams:function(e,t){var n=[],r=[],i,s,o;n.push("hash:"+this.popStack()),s=this.popStack(),o=this.popStack();if(o||s)o||(this.context.aliases.self="this",o="self.noop"),s||(this.context.aliases.self="this",s="self.noop"),n.push("inverse:"+s),n.push("fn:"+o);for(var u=0;u<e;u++)i=this.popStack(),t.push(i),this.options.stringParams&&r.push(this.popStack());return this.options.stringParams&&n.push("contexts:["+r.join(",")+"]"),this.options.data&&n.push("data:data"),t.push("{"+n.join(",")+"}"),t.join(", ")}};var i="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),s=t.RESERVED_WORDS={};for(var o=0,u=i.length;o<u;o++)s[i[o]]=!0;t.isValidJavaScriptVariableName=function(e){return!t.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e)?!0:!1}}(n.Compiler,n.JavaScriptCompiler),n.precompile=function(e,t){t=t||{};var r=n.parse(e),i=(new n.Compiler).compile(r,t);return(new n.JavaScriptCompiler).compile(i,t)},n.compile=function(e,t){function i(){var r=n.parse(e),i=(new n.Compiler).compile(r,t),s=(new n.JavaScriptCompiler).compile(i,t,undefined,!0);return n.template(s)}t=t||{};var r;return function(e,t){return r||(r=i()),r.call(this,e,t)}};var i=["debug","info","warn","error"];n.logger.log=function(e,t){},n.render=function(e,t,r){return n.compile(e)(t,r)}},"3.7.3",{requires:["handlebars-base"]});
