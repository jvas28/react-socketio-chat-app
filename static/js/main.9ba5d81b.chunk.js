(window["webpackJsonpreact-socket-io-chat"]=window["webpackJsonpreact-socket-io-chat"]||[]).push([[0],{112:function(e,t,a){e.exports=a(156)},147:function(e,t){},153:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=a(215),i=a(212),s=a(96),u=a.n(s),m=a(99),d=a(93),p=a(222),g=a(221),f=a(216),h=a(51),b=a(31),v=a(25),E=a(52),y=a(2),O=a(15),j=a(12);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach(function(t){Object(j.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var x={auth:{authenticated:!1,user:null},messages:[]},D=0,C={AUTHENTICATE:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,a=t.username;return k({},e,{auth:{user:a,authenticated:!0}})},ADD_MESSAGE:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return k({},e,{messages:[].concat(Object(O.a)(e.messages),[{type:"message",data:t}])})},ADD_COMMAND:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return D+=1,k({},e,{messages:[].concat(Object(O.a)(e.messages),[{type:"command",data:k({},t,{key:D})}])})}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=Object(y.a)(t,["type"]),r=C[a]||null;return r?r(e,n):e},P=Object(E.b)(S),N=a(92),A=a.n(N),T=a(209),M=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o={type:e};return a.forEach(function(e,t){o[a[t]]=n[t]}),o}},W={authenticate:M("AUTHENTICATE","username","password"),addMessage:M("ADD_MESSAGE","author","message"),addCommand:M("ADD_COMMAND","author","command")},I=a(20),z=a(200),B=a(158),J=a(223),L=a(198),R=a(199),U=Object(d.a)(function(){return{box:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%",minWidth:300,marginBottom:10,alignSelf:"end"},input:{marginLeft:8,flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}),_=function(e){var t=U(),a=Object(n.useState)(""),o=Object(I.a)(a,2),c=o[0],l=o[1],i=c.length;return r.a.createElement(B.a,{className:t.box},r.a.createElement(J.a,{className:t.input,placeholder:"Write a message",inputProps:{"aria-label":"search google maps"},value:c,onChange:function(e){var t=e.target.value;return l(t)}}),r.a.createElement(L.a,{className:t.divider,orientation:"vertical"}),r.a.createElement(R.a,{onClick:function(){e.onSendMessage(c),l("")},color:"primary","aria-label":"directions",disabled:!i},r.a.createElement(z.a,null,"send")))},q=a(208),G=a(202),H=a(207),Y=a(205),F=a(206),Q=a(203),V=a(204),X=a(201),Z=a(220),$=a(41),K=a(218);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach(function(t){Object(j.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ae=Object(d.a)({card:{maxWidth:"100%"}}),ne={date:function(e){var t={0:"Sunday",1:"Monday",2:"Thuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},a=Object(n.useState)(),o=Object(I.a)(a,2),c=o[0],l=o[1],i=e.data,s=[],u=new Date(i);u.setDate(u.getDate()-1);for(var m=0;m<4;m+=1){u.setDate(u.getDate()+1);var d=u.getDay(),p=t[d];d>0&&d<6?s.push({n:d,name:p,date:te({},u)}):m-=0===d?1:2}return r.a.createElement(K.a,{component:"fieldset",mb:3,borderColor:"transparent"},!c&&r.a.createElement($.a,{component:"legend"},"Please choose a date: "),s.map(function(e){var t=e.name,a=e.n;return r.a.createElement(X.a,{key:a,color:c===a?"primary":"default",variant:"outlined",disabled:!!c&&c!==a,onClick:function(){l(a)}},t)}),c&&r.a.createElement($.a,{component:"legend"},"Thanks for selecting a date. "))},map:function(e){var t=e.data,a=t.lat,n=t.lng,o=window.innerWidth-40;return r.a.createElement(K.a,{component:"fieldset",mb:3,borderColor:"transparent"},r.a.createElement("img",{alt:"map",style:{width:"100%",height:"300px"},src:"https://maps.googleapis.com/maps/api/staticmap?center=".concat(a,",").concat(n,"&zoom=13&size=").concat(o,"x300&key=").concat("AIzaSyDPQa9zNJBs66eJgeZrd3sbRDXzGwoUELs","&markers=").concat(a,",").concat(n)}))},rate:function(){var e=Object(n.useState)(0),t=Object(I.a)(e,2),a=t[0],o=t[1];return r.a.createElement(K.a,{component:"fieldset",mb:3,borderColor:"transparent"},0===a&&r.a.createElement($.a,{component:"legend"},"Please, rate our service: "),r.a.createElement(Z.a,{name:"simple-controlled",value:a,readOnly:a>0,onChange:function(e,t){0===a&&o(t)}}),a>0&&r.a.createElement($.a,{component:"legend"},"Thanks for rating!"))},complete:function(){var e=Object(n.useState)(null),t=Object(I.a)(e,2),a=t[0],o=t[1];return r.a.createElement(K.a,{component:"fieldset",mb:3,borderColor:"transparent"},r.a.createElement($.a,{component:"legend"},"Is your requirement complete? "),r.a.createElement(X.a,{color:!0===a?"primary":"default",disabled:!0!==a&&null!==a,variant:"outlined",onClick:function(){return null===a?o(!0):function(){return null}}},"Yes"),r.a.createElement(X.a,{color:!1===a?"primary":"default",disabled:!1!==a&&null!==a,variant:"outlined",onClick:function(){return null===a?o(!1):function(){return null}}},"No"))}},re=function(e){var t=e.data,a=e.type,n=ne[a]||null,o=ae();return r.a.createElement(G.a,null,r.a.createElement(Q.a,{className:o.card},r.a.createElement(V.a,null,r.a.createElement(n,{data:t}))))},oe=Object(d.a)(function(){return{list:{width:"100%",maxHeight:"calc(100vh - 60px)",overflowY:"scroll"},item:{borderRadius:"10px",margin:"10px 0"},mine:{background:"#00ecb15c"}}}),ce=function(e){var t=e.user,a=e.author,n=e.message,o=e.itemClass;return r.a.createElement(G.a,{key:t+n,className:o.join(" ")},r.a.createElement(Y.a,null,r.a.createElement(F.a,null,a[0])),r.a.createElement(H.a,{primary:a,secondary:n}))},le=function(e){var t=e.messages,a=e.user,n=oe();return r.a.createElement(q.a,{className:n.list},t.map(function(e){var t=e.type,o=e.data;if("message"===t){var c=o.author,l=o.message,i=[n.item];return c===a&&i.push(n.mine),r.a.createElement(ce,{key:a+l,user:a,author:c,message:l,itemClass:i})}if("command"===t){var s=o.author,u=o.command,m=u.type,d=u.data,p=o.key;return r.a.createElement(re,{key:p,type:m,data:d,author:s})}return null}))},ie=null,se=Object(d.a)(function(){return{root:{bottom:0,width:"100vw",height:"100vh",display:"flex",flexDirection:"column-reverse"}}}),ue=function(){var e=Object(v.c)(function(e){return e.auth.authenticated}),t=Object(v.c)(function(e){return e.auth.user}),a=Object(v.c)(function(e){return e.messages}),o=Object(v.b)(),c=se();return Object(n.useEffect)(function(){ie||((ie=A()("https://demo-chat-server.on.ag/")).on("message",function(e){var t=e.author,a=e.message;o(W.addMessage(t,a))}),ie.on("command",function(e){var t=e.author,a=e.command;o(W.addCommand(t,a))}),setInterval(function(){ie.emit("command",{})},2e4))}),r.a.createElement(T.a,{className:c.root},!e&&r.a.createElement(b.a,{to:"/login"}),r.a.createElement(_,{onSendMessage:function(e){ie.emit("message",{author:t,message:e}),o(W.addMessage(t,e))}}),r.a.createElement(le,{messages:a,user:t}))},me=a(95),de=a.n(me),pe=a(217),ge=a(213),fe=a(214),he=a(219),be=a(210),ve=a(211);function Ee(){return r.a.createElement($.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(be.a,{href:"https://github.com/jvas28"},"Julio Vasconez"),(new Date).getFullYear())}var ye=Object(d.a)(function(e){return{box:{width:"90%",maxWidth:"500px",background:"rgba(56, 56, 56, 0.72)",margin:"0 auto"},avatar:{width:"80px",height:"80px",margin:"10px auto",background:"transparent"},icon:{fontSize:"3rem",color:"white"},form:{padding:"0 10px"},header:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},title:{marginTop:"35px",fontWeight:700,fontSize:20,color:"white"},buttonProgress:{color:ve.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},wrapper:{margin:e.spacing(1),position:"relative"}}}),Oe=function(){var e=Object(v.c)(function(e){return e.auth.authenticated}),t=Object(n.useState)(""),a=Object(I.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),s=Object(I.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(!1),p=Object(I.a)(d,2),g=p[0],f=p[1],h=Object(v.b)(),E=ye(),y=o.length>0&&u.length>0&&!g;return r.a.createElement(B.a,{className:E.box},r.a.createElement(i.a,{container:!0,className:E.header},r.a.createElement(de.a,{className:E.icon}),r.a.createElement($.a,{variant:"h4",className:E.title,color:"textSecondary",gutterBottom:!0},"Let's chat!")),e&&r.a.createElement(b.a,{to:"/chat"}),r.a.createElement(L.a,null),r.a.createElement("div",{className:E.form},r.a.createElement(pe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",value:o,onChange:function(e){var t=e.target.value;return c(t)},autoComplete:"email"}),r.a.createElement(pe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",value:u,onChange:function(e){var t=e.target.value;return m(t)},id:"password",autoComplete:"new-password"}),r.a.createElement(ge.a,{control:r.a.createElement(he.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement("div",{className:E.wrapper},r.a.createElement(X.a,{type:"submit",fullWidth:!0,variant:"contained",onClick:function(){f(!0),setTimeout(function(){h(W.authenticate(o,u))},1e3)},disabled:!y,color:"primary",className:E.buttonClassname},"Sign In"),g&&r.a.createElement(fe.a,{size:24,className:E.buttonProgress})),r.a.createElement(K.a,{mt:5},r.a.createElement(Ee,null))))},je=(a(153),Object(m.a)({palette:{type:"dark",primary:u.a}})),we=Object(d.a)(function(){return{root:{height:"100vh",backgroundImage:"url(/res/img/bg-lights.jpeg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}});var ke=function(){var e=we();return r.a.createElement(p.a,{theme:je},r.a.createElement(l.a,null),r.a.createElement(i.a,{container:!0,component:"main",className:e.root},r.a.createElement(v.a,{store:P},r.a.createElement(h.a,null,r.a.createElement(b.b,{render:function(e){var t=e.location;return r.a.createElement(g.a,null,r.a.createElement(f.a,{key:t.key,classNames:"fade",timeout:300},r.a.createElement(b.d,{location:t},r.a.createElement(b.b,{exact:!0,path:"/login",component:Oe}),r.a.createElement(b.b,{exact:!0,path:"/chat",component:ue}),r.a.createElement(b.b,{render:function(){return r.a.createElement(b.a,{to:"/login"})}}))))}})))))};a(155),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[112,1,2]]]);
//# sourceMappingURL=main.9ba5d81b.chunk.js.map