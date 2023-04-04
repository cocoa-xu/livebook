"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31],{46500:(t,e,n)=>{n.d(e,{Z:()=>a});var i=n(75971),s=n(91767);const r=t=>(t=>{const{r:e,g:n,b:r}=s.Z.parse(t),a=.2126*i.Z.channel.toLinear(e)+.7152*i.Z.channel.toLinear(n)+.0722*i.Z.channel.toLinear(r);return i.Z.lang.round(a)})(t)>=.5,a=t=>!r(t)},31:(t,e,n)=>{n.r(e),n.d(e,{diagram:()=>H});var i=n(85408),s=n(40317),r=n(74309),a=n(8046),c=n(48003),o=n(46500),l=n(12281),h=n(7201),d=(n(17967),n(27856),n(27484),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,2],n=[1,5],i=[6,9,11,17,18,20,22,23,26,27,28],s=[1,15],r=[1,16],a=[1,17],c=[1,18],o=[1,19],l=[1,23],h=[1,24],d=[1,27],u=[4,6,9,11,17,18,20,22,23,26,27,28],p={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,n,i,s,r,a){var c=r.length-1;switch(s){case 1:return r[c-1];case 3:case 7:case 8:this.$=[];break;case 4:r[c-1].push(r[c]),this.$=r[c-1];break;case 5:case 6:this.$=r[c];break;case 11:i.getCommonDb().setDiagramTitle(r[c].substr(6)),this.$=r[c].substr(6);break;case 12:this.$=r[c].trim(),i.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=r[c].trim(),i.getCommonDb().setAccDescription(this.$);break;case 15:i.addSection(r[c].substr(8)),this.$=r[c].substr(8);break;case 19:i.addTask(r[c],0,""),this.$=r[c];break;case 20:i.addEvent(r[c].substr(2)),this.$=r[c];break;case 21:i.parseDirective("%%{","open_directive");break;case 22:i.parseDirective(r[c],"type_directive");break;case 23:r[c]=r[c].trim().replace(/'/g,'"'),i.parseDirective(r[c],"arg_directive");break;case 24:i.parseDirective("}%%","close_directive","timeline")}},table:[{3:1,4:e,7:3,12:4,28:n},{1:[3]},t(i,[2,3],{5:6}),{3:7,4:e,7:3,12:4,28:n},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:s,18:r,20:a,22:c,23:o,24:20,25:21,26:l,27:h,28:n},{1:[2,2]},{14:25,15:[1,26],31:d},t([15,31],[2,22]),t(i,[2,8],{1:[2,1]}),t(i,[2,4]),{7:22,10:28,12:4,17:s,18:r,20:a,22:c,23:o,24:20,25:21,26:l,27:h,28:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,11]),{19:[1,29]},{21:[1,30]},t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},t(i,[2,5]),t(i,[2,12]),t(i,[2,13]),t(u,[2,9]),{14:34,31:d},{31:[2,23]},{11:[1,35]},t(u,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],s=[null],r=[],a=this.table,c="",o=0,l=0,h=2,d=1,u=r.slice.call(arguments,1),p=Object.create(this.lexer),g={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(g.yy[y]=this.yy[y]);p.setInput(t,g.yy),g.yy.lexer=p,g.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var f=p.yylloc;r.push(f);var m=p.options&&p.options.ranges;function _(){var t;return"number"!=typeof(t=i.pop()||p.lex()||d)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof g.yy.parseError?this.parseError=g.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var b,v,k,x,S,w,$,E,I={};;){if(v=n[n.length-1],this.defaultActions[v]?k=this.defaultActions[v]:(null==b&&(b=_()),k=a[v]&&a[v][b]),void 0===k||!k.length||!k[0]){var T="";for(S in E=[],a[v])this.terminals_[S]&&S>h&&E.push("'"+this.terminals_[S]+"'");T=p.showPosition?"Parse error on line "+(o+1)+":\n"+p.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(o+1)+": Unexpected "+(b==d?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(T,{text:p.match,token:this.terminals_[b]||b,line:p.yylineno,loc:f,expected:E})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+b);switch(k[0]){case 1:n.push(b),s.push(p.yytext),r.push(p.yylloc),n.push(k[1]),b=null,l=p.yyleng,c=p.yytext,o=p.yylineno,f=p.yylloc;break;case 2:if(w=this.productions_[k[1]][1],I.$=s[s.length-w],I._$={first_line:r[r.length-(w||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(w||1)].first_column,last_column:r[r.length-1].last_column},m&&(I._$.range=[r[r.length-(w||1)].range[0],r[r.length-1].range[1]]),void 0!==(x=this.performAction.apply(I,[c,l,o,g.yy,k[1],s,r].concat(u))))return x;w&&(n=n.slice(0,-1*w*2),s=s.slice(0,-1*w),r=r.slice(0,-1*w)),n.push(this.productions_[k[1]][0]),s.push(I.$),r.push(I._$),$=a[n[n.length-2]][n[n.length-1]],n.push($);break;case 3:return!0}}return!0}},g={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:case 6:case 8:case 9:break;case 7:return 11;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}};function y(){this.yy={}}return p.lexer=g,y.prototype=p,p.Parser=y,new y}());d.parser=d;const u=d;let p="",g=0;const y=[],f=[],m=[],_=()=>s.c,b=(t,e,n)=>{(0,i.p)(globalThis,t,e,n)},v=function(){y.length=0,f.length=0,p="",m.length=0,(0,s.f)()},k=function(t){p=t,y.push(t)},x=function(){return y},S=function(){let t=I(),e=0;for(;!t&&e<100;)t=I(),e++;return f.push(...m),f},w=function(t,e,n){const i={id:g++,section:p,type:p,task:t,score:e||0,events:n?[n]:[]};m.push(i)},$=function(t){m.find((t=>t.id===g-1)).events.push(t)},E=function(t){const e={section:p,type:p,description:t,task:t,classes:[]};f.push(e)},I=function(){let t=!0;for(const[e,n]of m.entries())m[e].processed,t=t&&n.processed;return t},T={clear:v,getCommonDb:_,addSection:k,getSections:x,getTasks:S,addTask:w,addTaskOrg:E,addEvent:$,parseDirective:b},D=Object.freeze(Object.defineProperty({__proto__:null,addEvent:$,addSection:k,addTask:w,addTaskOrg:E,clear:v,default:T,getCommonDb:_,getSections:x,getTasks:S,parseDirective:b},Symbol.toStringTag,{value:"Module"}));function L(t,e){t.each((function(){var t,n=(0,r.Ys)(this),i=n.text().split(/(\s+|<br>)/).reverse(),s=[],a=n.attr("y"),c=parseFloat(n.attr("dy")),o=n.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",c+"em");for(let r=0;r<i.length;r++)t=i[i.length-1-r],s.push(t),o.text(s.join(" ").trim()),(o.node().getComputedTextLength()>e||"<br>"===t)&&(s.pop(),o.text(s.join(" ").trim()),s="<br>"===t?[""]:[t],o=n.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))}))}const C=function(t,e,n,i){const s=n%12-1,r=t.append("g");e.section=s,r.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+s);const a=r.append("g"),c=r.append("g"),o=c.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(L,e.width).node().getBBox(),l=i.fontSize&&i.fontSize.replace?i.fontSize.replace("px",""):i.fontSize;return e.height=o.height+1.1*l*.5+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,c.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),function(t,e,n){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d",`M0 ${e.height-5} v${10-e.height} q0,-5 5,-5 h${e.width-10} q5,0 5,5 v${e.height-5} H0 Z`),t.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)}(a,e,s),e},A=function(t,e,n){const i=t.append("g"),s=i.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(L,e.width).node().getBBox(),r=n.fontSize&&n.fontSize.replace?n.fontSize.replace("px",""):n.fontSize;return i.remove(),s.height+1.1*r*.5+e.padding},M=function(t,e,n,i,s,r,c,o,l,h,d){var u;for(const o of e){const e={descr:o.task,section:n,number:n,width:150,padding:20,maxHeight:r};a.l.debug("taskNode",e);const p=t.append("g").attr("class","taskWrapper"),g=C(p,e,n,c).height;if(a.l.debug("taskHeight after draw",g),p.attr("transform",`translate(${i}, ${s})`),r=Math.max(r,g),o.events){const e=t.append("g").attr("class","lineWrapper");let a=r;s+=100,a+=O(t,o.events,n,i,s,c),s-=100,e.append("line").attr("x1",i+95).attr("y1",s+r).attr("x2",i+95).attr("y2",s+r+(d?r:h)+l+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}i+=200,d&&!(null==(u=c.timeline)?void 0:u.disableMulticolor)&&n++}s-=10},O=function(t,e,n,i,s,r){let c=0;const o=s;s+=100;for(const o of e){const e={descr:o,section:n,number:n,width:150,padding:20,maxHeight:50};a.l.debug("eventNode",e);const l=t.append("g").attr("class","eventWrapper"),h=C(l,e,n,r).height;c+=h,l.attr("transform",`translate(${i}, ${s})`),s=s+10+h}return s=o,c},H={db:D,renderer:{setConf:()=>{},draw:function(t,e,n,i){var s,o,l,h;const d=(0,a.g)(),u=d.leftMargin??50;null==(o=(s=i.db).clear)||o.call(s),i.parser.parse(t+"\n"),a.l.debug("timeline",i.db);const p=d.securityLevel;let g;"sandbox"===p&&(g=(0,r.Ys)("#i"+e));const y=("sandbox"===p?(0,r.Ys)(g.nodes()[0].contentDocument.body):(0,r.Ys)("body")).select("#"+e);y.append("g");const f=i.db.getTasks(),m=i.db.getCommonDb().getDiagramTitle();a.l.debug("task",f),y.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z");const _=i.db.getSections();a.l.debug("sections",_);let b=0,v=0,k=0,x=0,S=50+u,w=50;x=50;let $=0,E=!0;_.forEach((function(t){const e=A(y,{number:$,descr:t,section:$,width:150,padding:20,maxHeight:b},d);a.l.debug("sectionHeight before draw",e),b=Math.max(b,e+20)}));let I=0,T=0;a.l.debug("tasks.length",f.length);for(const[t,e]of f.entries()){const n={number:t,descr:e,section:e.section,width:150,padding:20,maxHeight:v},i=A(y,n,d);a.l.debug("taskHeight before draw",i),v=Math.max(v,i+20),I=Math.max(I,e.events.length);let s=0;for(let t=0;t<e.events.length;t++){const n={descr:e.events[t],section:e.section,number:e.section,width:150,padding:20,maxHeight:50};s+=A(y,n,d)}T=Math.max(T,s)}a.l.debug("maxSectionHeight before draw",b),a.l.debug("maxTaskHeight before draw",v),_&&_.length>0?_.forEach((t=>{const e=f.filter((e=>e.section===t)),n={number:$,descr:t,section:$,width:200*Math.max(e.length,1)-50,padding:20,maxHeight:b};a.l.debug("sectionNode",n);const i=y.append("g"),s=C(i,n,$,d);a.l.debug("sectionNode output",s),i.attr("transform",`translate(${S}, 50)`),w+=b+50,e.length>0&&M(y,e,$,S,w,v,d,0,T,b,!1),S+=200*Math.max(e.length,1),w=50,$++})):(E=!1,M(y,f,$,S,w,v,d,0,T,b,!0));const D=y.node().getBBox();a.l.debug("bounds",D),m&&y.append("text").text(m).attr("x",D.width/2-u).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),k=E?b+v+150:v+100,y.append("g").attr("class","lineWrapper").append("line").attr("x1",u).attr("y1",k).attr("x2",D.width+3*u).attr("y2",k).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,c.s)(void 0,y,(null==(l=d.timeline)?void 0:l.padding)??50,(null==(h=d.timeline)?void 0:h.useMaxWidth)??!1)}},parser:u,styles:t=>`\n  .edge {\n    stroke-width: 3;\n  }\n  ${(t=>{let e="";for(let e=0;e<t.THEME_COLOR_LIMIT;e++)t["lineColor"+e]=t["lineColor"+e]||t["cScaleInv"+e],(0,o.Z)(t["lineColor"+e])?t["lineColor"+e]=(0,l.Z)(t["lineColor"+e],20):t["lineColor"+e]=(0,h.Z)(t["lineColor"+e],20);for(let n=0;n<t.THEME_COLOR_LIMIT;n++){const i=""+(17-3*n);e+=`\n    .section-${n-1} rect, .section-${n-1} path, .section-${n-1} circle, .section-${n-1} path  {\n      fill: ${t["cScale"+n]};\n    }\n    .section-${n-1} text {\n     fill: ${t["cScaleLabel"+n]};\n    }\n    .node-icon-${n-1} {\n      font-size: 40px;\n      color: ${t["cScaleLabel"+n]};\n    }\n    .section-edge-${n-1}{\n      stroke: ${t["cScale"+n]};\n    }\n    .edge-depth-${n-1}{\n      stroke-width: ${i};\n    }\n    .section-${n-1} line {\n      stroke: ${t["cScaleInv"+n]} ;\n      stroke-width: 3;\n    }\n\n    .lineWrapper line{\n      stroke: ${t["cScaleLabel"+n]} ;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n    `}return e})(t)}\n  .section-root rect, .section-root path, .section-root circle  {\n    fill: ${t.git0};\n  }\n  .section-root text {\n    fill: ${t.gitBranchLabel0};\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .eventWrapper  {\n   filter: brightness(120%);\n  }\n`}}}]);