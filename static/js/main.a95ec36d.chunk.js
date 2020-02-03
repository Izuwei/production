(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{103:function(e,t,a){e.exports=a(524)},108:function(e,t,a){},109:function(e,t,a){},523:function(e,t,a){},524:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(108),a(63)),i=a(13),s=a(60),m=(a(109),a(568)),u=a(5),d=a(92),p=a(567),h=a(570),b=a(573),f=a(575),g=a(571),E=a(49),v=a(572),O=a(87),x=a.n(O),j=a(574),k=a(576),y=a(577),C=a(578),S=a(91),N=a(569),w=a(613),z=a(61),T=Object(u.a)({paper:{border:"1px solid #212121"}})((function(e){return r.a.createElement(d.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),R=Object(u.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(p.a),I=Object(S.a)({palette:{primary:{main:z.a[900],light:z.a[200],dark:z.a[900]},type:"dark"}}),F=Object(m.a)((function(e){return{root:{flexGrow:1},appName:{marginLeft:e.spacing(10),flex:1},link:{textDecoration:"none",color:"inherit"}}}));function M(){var e=F(),t=r.a.useState(null),a=Object(i.a)(t,2),n=a[0],c=a[1];return r.a.createElement(N.a,{theme:I},r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{position:"static"},r.a.createElement(g.a,{variant:"dense"},r.a.createElement(E.a,{className:e.appName,variant:"h6",color:"inherit"},"React App"),r.a.createElement(w.a,{title:"Menu"},r.a.createElement(v.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(e){c(e.currentTarget)}},r.a.createElement(x.a,null))),r.a.createElement(T,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){c(null)}},r.a.createElement("a",{className:e.link,href:"https://github.com/Izuwei/production"},r.a.createElement(R,null,r.a.createElement(b.a,null,r.a.createElement(j.a,{fontSize:"small",className:e.itemIcon})),r.a.createElement(f.a,{primary:"Documentation"}))),r.a.createElement("a",{className:e.link,href:"https://github.com/Izuwei/production"},r.a.createElement(R,null,r.a.createElement(b.a,null,r.a.createElement(k.a,{fontSize:"small",className:e.itemIcon})),r.a.createElement(f.a,{primary:"Video"}))),r.a.createElement("a",{className:e.link,href:"https://github.com/Izuwei/production"},r.a.createElement(R,null,r.a.createElement(b.a,null,r.a.createElement(y.a,{fontSize:"small",className:e.itemIcon})),r.a.createElement(f.a,{primary:"GitHub"}))),r.a.createElement("a",{className:e.link,href:"https://github.com/Izuwei/production"},r.a.createElement(R,null,r.a.createElement(b.a,null,r.a.createElement(C.a,{fontSize:"small",className:e.itemIcon})),r.a.createElement(f.a,{primary:"Credits"}))))))))}var B=a(32),P=a(27),W=a(34),A=a(33),L=a(20),D=a(35),V=a(93),$=a(59),_=a.n($),G=(a(82),a(83),a(84),function(e){function t(e){var a;return Object(B.a)(this,t),(a=Object(W.a)(this,Object(A.a)(t).call(this,e))).state={},a.onChange=a.onChange.bind(Object(L.a)(a)),a.resize=a.resize.bind(Object(L.a)(a)),a.onSelectionChange=a.onSelectionChange.bind(Object(L.a)(a)),a}return Object(D.a)(t,e),Object(P.a)(t,[{key:"resize",value:function(){this.refs.aceIn.editor.resize()}},{key:"onChange",value:function(e){this.props.edit(e)}},{key:"onSelectionChange",value:function(e,t){var a=this.refs.aceIn.editor.getSelectedText();console.log(a)}},{key:"render",value:function(){return r.a.createElement(_.a,{theme:"idle_fingers",fontSize:"20px",onChange:this.onChange,onSelectionChange:this.onSelectionChange,ref:"aceIn",value:this.props.content,mode:"plain_text",name:"EditorIn",height:"100%",width:"100%",placeholder:"Insert your input here",showPrintMargin:!1,hScrollBarAlwaysVisible:!0,editorProps:{$blockScrolling:!0}})}}]),t}(n.Component)),H=function(e){function t(e){var a;return Object(B.a)(this,t),(a=Object(W.a)(this,Object(A.a)(t).call(this,e))).state={},a.resize=a.resize.bind(Object(L.a)(a)),a}return Object(D.a)(t,e),Object(P.a)(t,[{key:"resize",value:function(){this.refs.aceOut.editor.resize()}},{key:"render",value:function(){return r.a.createElement(_.a,{theme:"idle_fingers",fontSize:"20px",ref:"aceOut",value:this.props.content,name:"EditorOut",height:"100%",width:"100%",mode:"plain_text",readOnly:!0,placeholder:"Your output will be here",showPrintMargin:!1,hScrollBarAlwaysVisible:!0,editorProps:{$blockScrolling:!0}})}}]),t}(n.Component),J=(a(523),function(e){function t(e){var a;return Object(B.a)(this,t),(a=Object(W.a)(this,Object(A.a)(t).call(this,e))).state={},a.handleResize=a.handleResize.bind(Object(L.a)(a)),a}return Object(D.a)(t,e),Object(P.a)(t,[{key:"handleResize",value:function(){this.aceIn.resize(),this.aceOut.resize()}},{key:"render",value:function(){var e=this;return r.a.createElement(V.a,{className:"SplitEditor",split:"vertical",style:{height:"700px",position:"static"},minSize:200,maxSize:-200,defaultSize:"50%",onChange:function(){return e.handleResize()}},r.a.createElement(G,{ref:function(t){e.aceIn=t},content:this.props.editorContent,edit:this.props.editText}),r.a.createElement(H,{ref:function(t){e.aceOut=t},content:this.props.editorResult}))}}]),t}(n.Component)),Y=a(609),q=a(610),K=a(584),Q=a(579),U=a(585),X=a(586),Z=a(587),ee=a(588),te=a(589),ae=a(581),ne=a(94),re=a(608),ce=a(582),le=a(580),oe=a(583),ie=Object(S.a)({palette:{primary:{main:Q.a[800],light:Q.a[600],dark:Q.a[900]},secondary:{main:le.a[800],light:le.a[200],dark:le.a[900]},type:"dark"}}),se=function(e){function t(e){var a;return Object(B.a)(this,t),(a=Object(W.a)(this,Object(A.a)(t).call(this,e))).state={matchPattern:"",matchError:!1},a.handleMatch=a.handleMatch.bind(Object(L.a)(a)),a}return Object(D.a)(t,e),Object(P.a)(t,[{key:"handleMatch",value:function(){""===this.state.matchPattern?(this.setState({matchError:!0}),this.props.displaySnackbar("error","Error: Match pattern is empty!")):(this.setState({matchError:!1}),this.props.addTool({tool:"Match",pattern:this.state.matchPattern}),this.props.displaySnackbar("success","Success: Match added into the pipeline."),this.setState({matchPattern:""}))}}]),Object(P.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(N.a,{theme:ie},r.a.createElement(ae.a,{container:!0,spacing:2},r.a.createElement(ae.a,{item:!0,xs:12},r.a.createElement(ne.a,{className:t.paper},r.a.createElement(E.a,{variant:"h5",className:t.toolName},"Match"),r.a.createElement("div",{className:t.flexContent},r.a.createElement(re.a,{id:"match-pattern",label:"Pattern",value:this.state.matchPattern,onChange:function(t){return e.setState({matchPattern:t.target.value,matchError:!1})},error:!0===this.state.matchError,helperText:!0===this.state.matchError?"Pattern cannot be empty!":" ",className:t.textField}),r.a.createElement(ce.a,{color:"secondary",variant:"contained",className:t.button,onClick:function(){return e.handleMatch()},startIcon:r.a.createElement(oe.a,null)},"Add"))))))}}]),t}(n.Component),me=Object(u.a)((function(e){return{button:{margin:e.spacing(1)},paper:{padding:"10px",backgroundColor:"#333333",borderRadius:"0px"},textField:{flex:1},flexContent:{display:"flex",alignItems:"center"},toolName:{color:"#d9d9d9",fontWeight:"bold"}}}))(se),ue=Object(S.a)({palette:{primary:{main:Q.a[800],light:Q.a[600],dark:Q.a[900]},secondary:{main:le.a[800],light:le.a[200],dark:le.a[900]},type:"dark"}}),de=Object(m.a)((function(e){return{button:{margin:e.spacing(1)},paper:{padding:"10px",backgroundColor:"#333333",borderRadius:"0px"},textField:{flex:1,marginRight:"5px"},flexContent:{display:"flex",alignItems:"center"},toolName:{color:"#d9d9d9",fontWeight:"bold"}}}));function pe(e){var t=de(),a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(""),h=Object(i.a)(p,2),b=h[0],f=h[1],g=Object(n.useState)(!1),v=Object(i.a)(g,2),O=v[0],x=v[1];return r.a.createElement(N.a,{theme:ue},r.a.createElement(ae.a,{container:!0,spacing:2},r.a.createElement(ae.a,{item:!0,xs:12},r.a.createElement(ne.a,{className:t.paper},r.a.createElement(E.a,{variant:"h5",className:t.toolName},"Replace"),r.a.createElement("div",{className:t.flexContent},r.a.createElement(re.a,{id:"replace-find",label:"Find",value:l,onChange:function(e){return function(e){o(e.target.value),d(!1)}(e)},className:t.textField,error:!0===u,helperText:!0===u?"Field cannot be empty!":""}),r.a.createElement(re.a,{id:"replace-replace",label:"Replace",value:b,onChange:function(e){return function(e){f(e.target.value),x(!1)}(e)},className:t.textField,error:!0===O,helperText:!0===O?"Field cannot be empty!":""}),r.a.createElement(ce.a,{color:"secondary",variant:"contained",className:t.button,onClick:function(){return""===l&&d(!0),""===b&&x(!0),void(""!==l&&""!==b?(d(!1),x(!1),e.addTool({tool:"Replace",find:l,replace:b}),e.displaySnackbar("success","Success: Replace added into the pipeline."),o(""),f("")):e.displaySnackbar("error","Error: Fields cannot be empty!"))},startIcon:r.a.createElement(oe.a,null)},"Add"))))))}function he(e){var t=e.children,a=e.value,n=e.index,c=Object(s.a)(e,["children","value","index"]);return r.a.createElement(E.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},c),r.a.createElement(Y.a,{p:3},t))}function be(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var fe=Object(S.a)({palette:{primary:{main:Q.a[600],light:Q.a[300],dark:Q.a[900]},type:"dark"}}),ge=Object(m.a)((function(e){return{root:{flexGrow:1,marginTop:"20px",marginBottom:"20px",width:"95%",marginLeft:"auto",marginRight:"auto",backgroundColor:e.palette.background.paper,color:"white"}}}));function Ee(e){var t=ge(),a=r.a.useState(0),n=Object(i.a)(a,2),c=n[0],l=n[1];return r.a.createElement(N.a,{theme:fe},r.a.createElement("div",{className:t.root},r.a.createElement(h.a,{position:"static",color:"default"},r.a.createElement(q.a,{value:c,onChange:function(e,t){l(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"tabs",centered:!0},r.a.createElement(K.a,Object.assign({icon:r.a.createElement(U.a,null),label:"Reverse"},be(0))),r.a.createElement(K.a,Object.assign({icon:r.a.createElement(X.a,null),label:"Replace"},be(1))),r.a.createElement(K.a,Object.assign({icon:r.a.createElement(Z.a,null),label:"Rows"},be(2))),r.a.createElement(K.a,Object.assign({icon:r.a.createElement(ee.a,null),label:"Columns"},be(3))),r.a.createElement(K.a,Object.assign({icon:r.a.createElement(te.a,null),label:"Convert"},be(4))))),r.a.createElement(he,{theme:fe,value:c,index:0},"TBD"),r.a.createElement(he,{value:c,index:1},r.a.createElement(pe,{displaySnackbar:e.displaySnackbar,addTool:e.addTool})),r.a.createElement(he,{value:c,index:2},r.a.createElement(me,{displaySnackbar:e.displaySnackbar,addTool:e.addTool})),r.a.createElement(he,{value:c,index:3},"TBD"),r.a.createElement(he,{value:c,index:4},"TBD")))}var ve=a(607),Oe=a(614),xe=a(605),je=a(606),ke=a(601),ye=a(602),Ce=a(603),Se=a(604),Ne=a(595),we=a(4),ze=a(526),Te=a(566),Re=a(597),Ie=a(598),Fe=a(599),Me=a(592),Be=a(600),Pe=a(62),We=a(28),Ae=a(590),Le=a(612),De=a(591),Ve=a(593),$e=a(594),_e=a(596),Ge=Object(S.a)({palette:{primary:{main:Q.a[800],light:Q.a[600],dark:Q.a[900]},secondary:{main:le.a[800],light:le.a[200],dark:le.a[900]},type:"dark"}}),He=Object(m.a)((function(e){return{title:{borderBottom:"solid 1px grey",marginBottom:"15px",fontSize:"500px",paddingBottom:"8px",color:"#039be5"},titleIcon:{marginRight:"15px",color:"#039be5"},dialogActions:{paddingTop:"0px"},confirmIcon:{color:"#43a047"},closeIcon:{color:"red"}}}));var Je=function(e){var t=He(),a=Object(Ae.a)(Ge.breakpoints.down("xs")),c=Object(n.useState)(e.tool),l=Object(i.a)(c,2),o=l[0],s=l[1],m=Object(n.useState)([]),u=Object(i.a)(m,2),d=u[0],p=u[1],h=function(t){switch(t.tool){case"Match":(""!==o.pattern||(p(Object(We.a)({},d,{matchExpression:!0})),0))&&(e.updateTool(o),e.close());break;case"Replace":""===o.find&&p(Object(We.a)({},d,{replaceFind:!0})),""===o.replace&&p(Object(We.a)({},d,{replaceReplace:!0})),""!==o.find&&""!==o.replace&&(e.updateTool(o),e.close());break;default:return}};return r.a.createElement(N.a,{theme:Ge},r.a.createElement(Le.a,{open:e.open,onClose:e.close,fullScreen:a,fullWidth:!0,maxWidth:"md","aria-labelledby":"responsive-dialog-title"},r.a.createElement(De.a,{className:t.title,id:"responsive-dialog-title"},r.a.createElement(Me.a,{className:t.titleIcon,fontSize:"large"}),e.tool.tool),r.a.createElement(Ve.a,null,function(e){switch(e.tool){case"Match":return r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{id:"edit-match-expression",label:"Expression",value:o.pattern,onChange:function(e){return t=e.target.value,s(Object(We.a)({},o,{pattern:t})),void p([]);var t},error:!0===d.matchExpression,helperText:!0===d.matchExpression?"Expression cannot be empty!":" ",fullWidth:!0}));case"Replace":return r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{id:"edit-replace-find",label:"Find",value:o.find,onChange:function(e){return t=e.target.value,s(Object(We.a)({},o,{find:t})),void p(Object(We.a)({},d,{replaceFind:!1}));var t},error:!0===d.replaceFind,helperText:!0===d.matchExpression?"Field cannot be empty!":" ",fullWidth:!0}),r.a.createElement(re.a,{id:"edit-replace-replace",label:"Replace",value:o.replace,onChange:function(e){return t=e.target.value,s(Object(We.a)({},o,{replace:t})),void p(Object(We.a)({},d,{replaceReplace:!1}));var t},error:!0===d.replaceReplace,helperText:!0===d.matchExpression?"Field cannot be empty!":" ",fullWidth:!0}));default:return}}(e.tool)),r.a.createElement($e.a,{className:t.dialogActions},r.a.createElement(w.a,{className:t.tooltip,title:"Close"},r.a.createElement(v.a,{className:t.closeIcon,onClick:function(){return e.close()}},r.a.createElement(Ne.a,{fontSize:"large"}))),r.a.createElement(w.a,{title:"Confirm"},r.a.createElement(v.a,{className:t.confirmIcon,onClick:function(){return h(e.tool)}},r.a.createElement(_e.a,{fontSize:"large"}))))))},Ye=Object(m.a)((function(e){return{root:{height:"250px",width:"95%",marginTop:"20px",marginLeft:"auto",marginRight:"auto",backgroundColor:e.palette.background.paper,color:"white"},title:{height:"48px",textTransform:"uppercase",fontSize:"14px",backgroundColor:z.a[900],textAlign:"center",padding:"10px",color:"rgba(255, 255, 255, 0.7)",letterSpacing:"0.02857em",boxShadow:"0px 4px 4px -1px rgba(0,0,0,0.2)"},titleLabel:{marginTop:"5px"},list:{marginLeft:"10px",marginRight:"10px"},listItem:{paddingTop:"0px",paddingBottom:"0px"},content:{height:"182px",overflow:"auto"},toolName:{color:"#ff6a1a",fontWeight:"bold",marginRight:"10px"},toolText:{paddingTop:"13px",paddingBottom:"13px",height:"100%",width:"100%"},conword:{color:"#b500d1",fontWeight:"bold",marginRight:"10px",marginLeft:"10px"},listIcon:{marginRight:"15px",color:"#e0e0e0"}}}));var qe=function(e){var t=Ye(),a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],o=c[1],s=Object(n.useRef)({}),m=Object(Pe.c)((function(e){var a=e.tool;return r.a.createElement("div",{className:t.toolText},function(e){switch(e.tool){case"Match":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:t.toolName},e.tool),e.pattern);case"Replace":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:t.toolName},e.tool),e.find,r.a.createElement("span",{className:t.conword},"with"),e.replace);default:return}}(a))})),u=Object(Pe.b)((function(a){var n=a.tool;return r.a.createElement(ze.a,{key:n.id,ContainerComponent:"li",divider:!0,className:t.listItem},r.a.createElement(v.a,{className:t.listIcon,size:"small",onClick:function(){return e.removeTool(n)}},r.a.createElement(Re.a,null)),r.a.createElement(v.a,{className:t.listIcon,size:"small",onClick:function(){return e.reactiveTool(n)}},n.active?r.a.createElement(Ie.a,null):r.a.createElement(Fe.a,null)),r.a.createElement(v.a,{className:t.listIcon,size:"small",onClick:function(){return function(e){s.current=e,o(!0)}(n)}},r.a.createElement(Me.a,null)),r.a.createElement(m,{tool:n}))})),d=Object(Pe.a)((function(e){var a=e.tools;return r.a.createElement(Te.a,{component:"ul",className:t.list},a.map((function(e,t){return r.a.createElement(u,{key:e.id,index:t,tool:e})})))}));return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.title},r.a.createElement(Be.a,null),r.a.createElement("div",{className:t.titleLabel},"Pipeline")),r.a.createElement("div",{className:t.content},r.a.createElement(d,{tools:e.tools,lockAxis:"y",useDragHandle:!0,updateBeforeSortStart:e.beforeSort,onSortEnd:e.sort})),l&&r.a.createElement(Je,{open:l,close:function(){o(!1)},tool:s.current,updateTool:e.updateTool}))},Ke=a(90),Qe=a.n(Ke),Ue=Object(S.a)({palette:{primary:{main:z.a[50]},type:"dark"}}),Xe={success:ke.a,warning:ye.a,error:Ce.a,info:Se.a},Ze=Object(m.a)((function(e){return{success:{backgroundColor:le.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:xe.a[500]},warning:{backgroundColor:je.a[700]},icon:{fontSize:25},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function et(e){var t=Ze(),a=e.className,n=e.message,c=e.onClose,l=e.variant,o=Object(s.a)(e,["className","message","onClose","variant"]),i=Xe[l];return r.a.createElement(ve.a,Object.assign({className:Object(we.a)(t[l],a),message:r.a.createElement("span",{id:"message-id",className:t.message},r.a.createElement(i,{className:Object(we.a)(t.icon,t.iconVariant)}),n),action:[r.a.createElement(v.a,{key:"close","aria-label":"close",color:"inherit",onClick:c},r.a.createElement(Ne.a,null))]},o))}function tt(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}var at=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(void 0),s=Object(i.a)(l,2),m=s[0],u=s[1],d=Object(n.useRef)([]),p=Object(n.useState)([]),h=Object(i.a)(p,2),b=h[0],f=h[1],g=Object(n.useState)(""),E=Object(i.a)(g,2),v=E[0],O=E[1],x=Object(n.useState)(""),j=Object(i.a)(x,2),k=j[0],y=j[1],C=Object(n.useRef)(!1),S=Object(n.useRef)(!0);Object(n.useEffect)((function(){for(var e=0;e<b.length;e++)b[e].id!==e+1&&(b[e].id=e+1);!0===C.current&&(!function(){for(var e=v,t=0;t<b.length;t++)if(!1!==b[t].active)switch(b[t].tool){case"Replace":e=e.replace(new RegExp(tt(b[t].find),"g"),b[t].replace);break;case"Match":e=null===(e=e.match(new RegExp(".*"+tt(b[t].pattern)+".*","g")))?"":e.join("\n")}y(e)}(),C.current=!1),0===d.current.length&&!1===a&&(S.current=!0),console.log(b)}));var w=function(){d.current.length>0&&(u(d.current.shift()),c(!0))},z=function(e,t){"clickaway"!==t&&c(!1)};return r.a.createElement(N.a,{theme:Ue},r.a.createElement("div",{className:"App"},r.a.createElement(M,null),r.a.createElement(J,{editorContent:v,editText:function(e){O(e),C.current=!0},editorResult:k}),r.a.createElement(qe,{tools:b,removeTool:function(e){f(b.filter((function(t){return t.id!==e.id}))),C.current=!0},reactiveTool:function(e){var t=Object(o.a)(b);for(var a in t)if(t[a].id===e.id){t[a].active=!t[a].active;break}f(t),C.current=!0},updateTool:function(e){var t=Object(o.a)(b);for(var a in t)if(t[a].id===e.id){t[a]=e;break}f(t),C.current=!0},sort:function(e){var t=e.oldIndex,a=e.newIndex;console.log(b),f((function(e){return Qe()(e,t,a)})),t!==a&&(C.current=!0)},sortable:S,beforeSort:function(){return new Promise((function(e,t){c(!1),d.current=[],!1===a&&e()}))}}),r.a.createElement(Ee,{displaySnackbar:function(e,t){d.current.push({variant:e,message:t,key:(new Date).getTime()}),S.current=!1,a?c(!1):w()},addTool:function(e){e.id=b.length+1,e.active=!0,f([].concat(Object(o.a)(b),[e])),C.current=!0}}),r.a.createElement(Oe.a,{key:m?m.key:void 0,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:a,autoHideDuration:2e3,onClose:z,onExited:function(){w()},ContentProps:{"aria-describedby":"message-id"}},r.a.createElement(et,{message:m?m.message:void 0,variant:m?m.variant:void 0,onClose:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(at,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[103,1,2]]]);
//# sourceMappingURL=main.a95ec36d.chunk.js.map