(self.webpackChunkkasa=self.webpackChunkkasa||[]).push([[5476],{32652:E=>{function x(s,e,r,n){for(var l=s.length,c=r+(n?1:-1);n?c--:++c<l;)if(e(s[c],c,s))return c;return-1}E.exports=x},62878:(E,x,s)=>{var e=s(32652),r=s(2784),n=s(51425);function l(c,f,A){return f===f?n(c,f,A):e(c,r,A)}E.exports=l},1786:E=>{function x(s,e,r,n){for(var l=r-1,c=s.length;++l<c;)if(n(s[l],e))return l;return-1}E.exports=x},2784:E=>{function x(s){return s!==s}E.exports=x},12186:(E,x,s)=>{var e=s(36393),r=s(62878),n=s(1786),l=s(20435),c=s(22033),f=Array.prototype,A=f.splice;function O(C,j,L,Z){var m=Z?n:r,u=-1,P=j.length,g=C;for(C===j&&(j=c(j)),L&&(g=e(C,l(L)));++u<P;)for(var y=0,v=j[u],$=L?L(v):v;(y=m(g,$,y,Z))>-1;)g!==C&&A.call(g,y,1),A.call(C,y,1);return C}E.exports=O},51425:E=>{function x(s,e,r){for(var n=r-1,l=s.length;++n<l;)if(s[n]===e)return n;return-1}E.exports=x},58422:(E,x,s)=>{var e=s(36393),r=s(90040),n=s(92403),l=s(26126);function c(f,A){var O=l(f)?e:n;return O(f,r(A,3))}E.exports=c},22009:(E,x,s)=>{var e=s(52431),r=s(45906),n=e(r);E.exports=n},45906:(E,x,s)=>{var e=s(12186);function r(n,l){return n&&n.length&&l&&l.length?e(n,l):n}E.exports=r},34049:(E,x,s)=>{var e=s(20454);function r(n){var l=n==null?0:n.length;return l?e(n,1,l):[]}E.exports=r},75476:(E,x,s)=>{"use strict";s.d(x,{A:()=>Se});var e=s(74081),r=s(27279),n=s(93415),l=s(10701),c=s(32370),f=s(23298),A=s(74577),O=s(73354),C=s(27875),j=s(48102),L=s(74758),Z=s(45322),m=s(24920),u=s(34642),P=s(22572),g=s(15530),y=s(71563),v=s(61020),$=s(40464),F=s(59461),G=s(51447),D=s(76873),z=s(12847),B=s(44485),H=s(90114),k=s(64129),a=s(70627),se=s(59082),re=s(35318),V=s(58422),te=s(34049),X=s(19003),Pe=s(98344),le=s(61815),ne=s(22009);const[de,oe]=(0,D.k)("ApiTokenPermissionsContext"),ae=({children:t,...i})=>(0,e.jsx)(de,{...i,children:t}),J=()=>oe("useApiTokenPermissions"),fe=t=>{const i={allActionsIds:[],permissions:[]};return i.permissions=Object.keys(t).map(o=>({apiId:o,label:o.split("::")[1],controllers:Object.keys(t[o].controllers).map(_=>({controller:_,actions:t[o].controllers[_].map(d=>{const T=`${o}.${_}.${d}`;return o.includes("api::")&&i.allActionsIds.push(T),{action:d,actionId:T}}).flat()})).flat()})),i},ce=({errors:t,onChange:i,canEditInputs:o,isCreating:_,values:d,apiToken:T,onDispatch:h,setHasChangedPermissions:N})=>{const{formatMessage:U}=(0,v.Z)(),W=({target:{value:K}})=>{N(!1),K==="full-access"&&h({type:"SELECT_ALL_ACTIONS"}),K==="read-only"&&h({type:"ON_CHANGE_READ_ONLY"})},Q=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return(0,e.jsx)(n.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(c.Z,{variant:"delta",as:"h2",children:U({id:"global.details",defaultMessage:"Details"})}),(0,e.jsxs)(f.r,{gap:5,children:[(0,e.jsx)(A.P,{col:6,xs:12,children:(0,e.jsx)(k.T,{errors:t,values:d,canEditInputs:o,onChange:i})},"name"),(0,e.jsx)(A.P,{col:6,xs:12,children:(0,e.jsx)(k.a,{errors:t,values:d,canEditInputs:o,onChange:i})},"description"),(0,e.jsx)(A.P,{col:6,xs:12,children:(0,e.jsx)(k.L,{isCreating:_,errors:t,values:d,onChange:i,token:T})},"lifespan"),(0,e.jsx)(A.P,{col:6,xs:12,children:(0,e.jsx)(k.b,{values:d,errors:t,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:K=>{W({target:{value:K}}),i({target:{name:"type",value:K}})},options:Q,canEditInputs:o})},"type")]})]})})};ce.propTypes={errors:a.shape({name:a.string,description:a.string,lifespan:a.string,type:a.string}),onChange:a.func.isRequired,canEditInputs:a.bool.isRequired,values:a.shape({name:a.string,description:a.string,lifespan:a.oneOfType([a.number,a.string]),type:a.string}).isRequired,isCreating:a.bool.isRequired,apiToken:a.shape({id:a.oneOfType([a.number,a.string]),type:a.string,lifespan:a.string,name:a.string,accessKey:a.string,permissions:a.array,description:a.string,createdAt:a.string}),onDispatch:a.func.isRequired,setHasChangedPermissions:a.func.isRequired},ce.defaultProps={errors:{},apiToken:{}};const pe=({apiTokenName:t})=>{const{formatMessage:i}=(0,v.Z)();return(0,g.go)(),(0,e.jsxs)(O.o,{"aria-busy":"true",children:[(0,e.jsx)(g.SL,{name:"API Tokens"}),(0,e.jsx)(C.T,{primaryAction:(0,e.jsx)(j.z,{disabled:!0,startIcon:(0,e.jsx)(se.Z,{}),type:"button",size:"L",children:i({id:"global.save",defaultMessage:"Save"})}),title:t||i({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),(0,e.jsx)(L.D,{children:(0,e.jsx)(g.dO,{})})]})};pe.defaultProps={apiTokenName:null},pe.propTypes={apiTokenName:a.string};const Te=t=>{switch(t){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Ce=(0,X.ZP)(n.x)`
  margin: -1px;
  border-radius: ${({theme:t})=>t.spaces[1]} 0 0 ${({theme:t})=>t.spaces[1]};
`;function ue({route:t}){const{formatMessage:i}=(0,v.Z)(),{method:o,handler:_,path:d}=t,T=d?te(d.split("/")):[],[h="",N=""]=_?_.split("."):[],U=Te(t.method);return(0,e.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsxs)(c.Z,{variant:"delta",as:"h3",children:[i({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,e.jsx)("span",{children:h}),(0,e.jsxs)(c.Z,{variant:"delta",textColor:"primary600",children:[".",N]})]}),(0,e.jsxs)(l.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,e.jsx)(Ce,{background:U.background,borderColor:U.border,padding:2,children:(0,e.jsx)(c.Z,{fontWeight:"bold",textColor:U.text,children:o})}),(0,e.jsx)(n.x,{paddingLeft:2,paddingRight:2,children:V(T,W=>(0,e.jsxs)(c.Z,{textColor:W.includes(":")?"neutral600":"neutral900",children:["/",W]},W))})]})]})}ue.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},ue.propTypes={route:a.shape({handler:a.string,method:a.string,path:a.string})};const Me=()=>{const{value:{selectedAction:t,routes:i}}=J(),{formatMessage:o}=(0,v.Z)(),_=t?.split(".")[0];return(0,e.jsx)(A.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:t?(0,e.jsx)(l.k,{direction:"column",alignItems:"stretch",gap:2,children:i[_]?.map(d=>d.config.auth?.scope?.includes(t)||d.handler===t?(0,e.jsx)(ue,{route:d},d.handler):null)}):(0,e.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsx)(c.Z,{variant:"delta",as:"h3",children:o({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),(0,e.jsx)(c.Z,{as:"p",textColor:"neutral600",children:o({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},ye=(0,X.iv)`
  background: ${t=>t.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Oe=(0,X.ZP)(n.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${t=>t.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${t=>t.isActive&&ye}
  &:hover {
    ${ye}
  }
`,ve=X.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,ge=({controllers:t,label:i,orderNumber:o,disabled:_,onExpanded:d,indexExpandendCollapsedContent:T})=>{const{value:{onChangeSelectAll:h,onChange:N,selectedActions:U,setSelectedAction:W,selectedAction:Q}}=J(),[K,ie]=(0,r.useState)(!1),{formatMessage:Ee}=(0,v.Z)(),w=()=>{ie(M=>!M),d(o)};(0,r.useEffect)(()=>{T!==null&&T!==o&&K&&ie(!1)},[T,o,K]);const R=M=>M===Q;return(0,e.jsxs)(Z.U,{expanded:K,onToggle:w,variant:o%2?"primary":"secondary",children:[(0,e.jsx)(m.B,{title:Pe(i)}),(0,e.jsx)(u.v,{children:t?.map(M=>{const q=M.actions.every(S=>U.includes(S.actionId)),_e=M.actions.some(S=>U.includes(S.actionId));return(0,e.jsxs)(n.x,{children:[(0,e.jsxs)(l.k,{justifyContent:"space-between",alignItems:"center",padding:4,children:[(0,e.jsx)(n.x,{paddingRight:4,children:(0,e.jsx)(c.Z,{variant:"sigma",textColor:"neutral600",children:M?.controller})}),(0,e.jsx)(ve,{}),(0,e.jsx)(n.x,{paddingLeft:4,children:(0,e.jsx)(P.X,{value:q,indeterminate:!q&&_e,onValueChange:()=>{h({target:{value:[...M.actions]}})},disabled:_,children:Ee({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,e.jsx)(f.r,{gap:4,padding:4,children:M?.actions&&M?.actions.map(S=>(0,e.jsx)(A.P,{col:6,children:(0,e.jsxs)(Oe,{isActive:R(S.actionId),padding:2,hasRadius:!0,children:[(0,e.jsx)(P.X,{value:U.includes(S.actionId),name:S.actionId,onValueChange:()=>{N({target:{value:S.actionId}})},disabled:_,children:S.action}),(0,e.jsx)("button",{type:"button","data-testid":"action-cog",onClick:()=>W({target:{value:S.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:(0,e.jsx)(re.Z,{})})]})},S.actionId))})]},`${i}.${M?.controller}`)})})]})};ge.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},ge.propTypes={controllers:a.array,orderNumber:a.number,label:a.string.isRequired,disabled:a.bool,onExpanded:a.func,indexExpandendCollapsedContent:a.number};const he=({section:t,...i})=>{const[o,_]=(0,r.useState)(null),d=T=>_(T);return(0,e.jsx)(n.x,{padding:4,background:"neutral0",children:t&&t.map((T,h)=>(0,e.jsx)(ge,{label:T.label,controllers:T.controllers,orderNumber:h,indexExpandendCollapsedContent:o,onExpanded:d,name:T.apiId,...i},T.apiId))})};he.defaultProps={section:null},he.propTypes={section:a.arrayOf(a.object)};const De=({...t})=>{const{value:{data:i}}=J(),{formatMessage:o}=(0,v.Z)();return(0,e.jsxs)(f.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,e.jsxs)(A.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,e.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsx)(c.Z,{variant:"delta",as:"h2",children:o({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),(0,e.jsx)(c.Z,{as:"p",textColor:"neutral600",children:o({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),i?.permissions&&(0,e.jsx)(he,{section:i?.permissions,...t})]}),(0,e.jsx)(Me,{})]})},Ie=(0,r.memo)(De),je=(t,i=[])=>({...t,selectedAction:null,routes:[],selectedActions:[],data:fe(i)}),Re={data:{},selectedActions:[]},Le=(t,i)=>(0,le.ZP)(t,o=>{switch(i.type){case"ON_CHANGE":{o.selectedActions.includes(i.value)?ne(o.selectedActions,i.value):o.selectedActions.push(i.value);break}case"SELECT_ALL_IN_PERMISSION":{i.value.every(d=>o.selectedActions.includes(d.actionId))?i.value.forEach(d=>{ne(o.selectedActions,d.actionId)}):i.value.forEach(d=>{o.selectedActions.push(d.actionId)});break}case"SELECT_ALL_ACTIONS":{o.selectedActions=[...o.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const _=o.data.allActionsIds.filter(d=>d.includes("find")||d.includes("findOne"));o.selectedActions=[..._];break}case"UPDATE_PERMISSIONS_LAYOUT":{o.data=fe(i.value);break}case"UPDATE_ROUTES":{o.routes={...i.value};break}case"UPDATE_PERMISSIONS":{o.selectedActions=[...i.value];break}case"SET_SELECTED_ACTION":{o.selectedAction=i.value;break}default:return o}}),ke="Name already taken",Se=()=>{(0,g.go)();const{formatMessage:t}=(0,v.Z)(),{lockApp:i,unlockApp:o}=(0,g.o1)(),_=(0,g.lm)(),d=(0,G.k6)(),T=(0,F.v9)(z.s),[h,N]=(0,r.useState)(d.location.state?.apiToken.accessKey?{...d.location.state.apiToken}:null),{trackUsage:U}=(0,g.rS)(),W=(0,r.useRef)(U),{setCurrentStep:Q}=(0,g.c1)(),{allowedActions:{canCreate:K,canUpdate:ie,canRegenerate:Ee}}=(0,g.ss)(T.settings["api-tokens"]),[w,R]=(0,r.useReducer)(Le,Re,p=>je(p,{})),{params:{id:M}}=(0,G.$B)("/settings/api-tokens/:id"),{get:q,post:_e,put:S}=(0,g.kY)(),b=M==="create";(0,$.useQuery)("content-api-permissions",async()=>{const[p,Y]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async ee=>{const{data:I}=await q(ee);return I.data}));R({type:"UPDATE_PERMISSIONS_LAYOUT",value:p}),R({type:"UPDATE_ROUTES",value:Y}),h&&(h?.type==="read-only"&&R({type:"ON_CHANGE_READ_ONLY"}),h?.type==="full-access"&&R({type:"SELECT_ALL_ACTIONS"}),h?.type==="custom"&&R({type:"UPDATE_PERMISSIONS",value:h?.permissions}))},{onError(){_({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,r.useEffect)(()=>{W.current(b?"didAddTokenFromList":"didEditTokenFromList",{tokenType:H.A})},[b]);const{status:Be}=(0,$.useQuery)(["api-token",M],async()=>{const{data:{data:p}}=await q(`/admin/api-tokens/${M}`);return N({...p}),p?.type==="read-only"&&R({type:"ON_CHANGE_READ_ONLY"}),p?.type==="full-access"&&R({type:"SELECT_ALL_ACTIONS"}),p?.type==="custom"&&R({type:"UPDATE_PERMISSIONS",value:p?.permissions}),p},{enabled:!b&&!h,onError(){_({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),be=async(p,Y)=>{W.current(b?"willCreateToken":"willEditToken",{tokenType:H.A}),i();const ee=p.lifespan&&parseInt(p.lifespan,10)&&p.lifespan!=="0"?parseInt(p.lifespan,10):null;try{const{data:{data:I}}=b?await _e("/admin/api-tokens",{...p,lifespan:ee,permissions:p.type==="custom"?w.selectedActions:null}):await S(`/admin/api-tokens/${M}`,{name:p.name,description:p.description,type:p.type,permissions:p.type==="custom"?w.selectedActions:null});b&&(d.replace(`/settings/api-tokens/${I.id}`,{apiToken:I}),Q("apiTokens.success")),o(),N({...I}),_({type:"success",message:t(b?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),W.current(b?"didCreateToken":"didEditToken",{type:h.type,tokenType:H.A})}catch(I){const Ae=(0,B.f)(I.response.data);Y.setErrors(Ae),I?.response?.data?.error?.message===ke?_({type:"warning",message:I.response.data.message||"notification.error.tokennamenotunique"}):_({type:"warning",message:I?.response?.data?.message||"notification.error"}),o()}},[Ue,xe]=(0,r.useState)(!1),We={...w,onChange:({target:{value:p}})=>{xe(!0),R({type:"ON_CHANGE",value:p})},onChangeSelectAll:({target:{value:p}})=>{xe(!0),R({type:"SELECT_ALL_IN_PERMISSION",value:p})},setSelectedAction:({target:{value:p}})=>{R({type:"SET_SELECTED_ACTION",value:p})}},me=ie&&!b||K&&b;return!b&&!h&&Be!=="success"?(0,e.jsx)(pe,{apiTokenName:h?.name}):(0,e.jsx)(ae,{value:We,children:(0,e.jsxs)(O.o,{children:[(0,e.jsx)(g.SL,{name:"API Tokens"}),(0,e.jsx)(y.J9,{validationSchema:k.s,validateOnChange:!1,initialValues:{name:h?.name||"",description:h?.description||"",type:h?.type,lifespan:h?.lifespan?h.lifespan.toString():h?.lifespan},enableReinitialize:!0,onSubmit:(p,Y)=>be(p,Y),children:({errors:p,handleChange:Y,isSubmitting:ee,values:I,setFieldValue:Ae})=>(Ue&&I?.type!=="custom"&&Ae("type","custom"),(0,e.jsxs)(g.l0,{children:[(0,e.jsx)(k.F,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:h,setToken:N,canEditInputs:me,canRegenerate:Ee,isSubmitting:ee,regenerateUrl:"/admin/api-tokens/"}),(0,e.jsx)(L.D,{children:(0,e.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(h?.name)&&(0,e.jsx)(k.c,{token:h?.accessKey,tokenType:H.A}),(0,e.jsx)(ce,{errors:p,onChange:Y,canEditInputs:me,isCreating:b,values:I,apiToken:h,onDispatch:R,setHasChangedPermissions:xe}),(0,e.jsx)(Ie,{disabled:!me||I?.type==="read-only"||I?.type==="full-access"})]})})]}))})]})})}},45322:(E,x,s)=>{"use strict";s.d(x,{U:()=>Z,y:()=>j});var e=s(74081),r=s(27279),n=s(19003),l=s(39267),c=s(74513),f=s(32370),A=s(10701),O=s(93415);const C=({theme:m,expanded:u,variant:P,disabled:g,error:y})=>y?`1px solid ${m.colors.danger600} !important`:g?`1px solid ${m.colors.neutral150}`:u?`1px solid ${m.colors.primary600}`:P==="primary"?`1px solid ${m.colors.neutral0}`:`1px solid ${m.colors.neutral100}`,j=(0,n.ZP)(f.Z)``,L=(0,n.ZP)(O.x)`
  border: ${C};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:m})=>m.colors.primary600};

    ${j} {
      color: ${({theme:m,expanded:u})=>u?void 0:m.colors.primary700};
    }

    ${f.Z} {
      color: ${({theme:m,expanded:u})=>u?void 0:m.colors.primary600};
    }

    & > ${A.k} {
      background: ${({theme:m})=>m.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:m})=>m.colors.primary200};
    }
  }
`,Z=({children:m,disabled:u=!1,error:P,expanded:g=!1,hasErrorMessage:y=!0,id:v,onToggle:$,toggle:F,size:G="M",variant:D="primary",shadow:z})=>{const B=(0,c.M)(v),H=r.useMemo(()=>({expanded:g,onToggle:$,toggle:F,id:B,size:G,variant:D,disabled:u}),[u,g,B,$,G,F,D]);return(0,e.jsxs)(l.S.Provider,{value:H,children:[(0,e.jsx)(L,{"data-strapi-expanded":g,disabled:u,"aria-disabled":u,expanded:g,hasRadius:!0,variant:D,error:P,shadow:z,children:m}),P&&y&&(0,e.jsx)(O.x,{paddingTop:1,children:(0,e.jsx)(f.Z,{variant:"pi",textColor:"danger600",children:P})})]})}},34642:(E,x,s)=>{"use strict";s.d(x,{v:()=>l});var e=s(74081),r=s(39267),n=s(93415);const l=({children:c,...f})=>{const{expanded:A,id:O}=(0,r.A)();if(!A)return null;const C=`accordion-content-${O}`,j=`accordion-label-${O}`,L=`accordion-desc-${O}`;return(0,e.jsx)(n.x,{role:"region",id:C,"aria-labelledby":j,"aria-describedby":L,...f,children:c})}},39267:(E,x,s)=>{"use strict";s.d(x,{A:()=>n,S:()=>r});var e=s(27279);const r=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,e.useContext)(r)},24920:(E,x,s)=>{"use strict";s.d(x,{B:()=>m});var e=s(74081),r=s(10411),n=s(19003),l=s(45322),c=s(39267);const f=({expanded:u,disabled:P,variant:g})=>{let y="neutral100";return u?y="primary100":P?y="neutral150":g==="primary"&&(y="neutral0"),y};var A=s(1782),O=s(50703),C=s(10701),j=s(32370);const L=(0,n.ZP)(A.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:u,expanded:P})=>P?u.colors.primary600:u.colors.neutral500};
    }
  }
`,Z=(0,n.ZP)(C.k)`
  min-height: ${({theme:u,size:P})=>u.sizes.accordions[P]};
  border-radius: ${({theme:u,expanded:P})=>P?`${u.borderRadius} ${u.borderRadius} 0 0`:u.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:u})=>u.colors.primary600};
      }
    }
  }
`,m=({title:u,description:P,as:g="span",togglePosition:y="right",action:v,...$})=>{const{onToggle:F,toggle:G,expanded:D,id:z,size:B,variant:H,disabled:k}=(0,c.A)(),a=`accordion-content-${z}`,se=`accordion-label-${z}`,re=`accordion-desc-${z}`,V=B==="M"?6:4,te=B==="M"?V:V-2,X=f({expanded:D,disabled:k,variant:H}),le={as:g,fontWeight:B==="S"?"bold":void 0,id:se,textColor:D?"primary600":"neutral700",ellipsis:!0,variant:B==="M"?"delta":void 0},ne=D?"primary600":"neutral600",de=D?"primary200":"neutral200",oe=B==="M"?`${32/16}rem`:`${24/16}rem`,ae=()=>{k||(G&&!F?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),G()):F&&F())},J=(0,e.jsx)(C.k,{justifyContent:"center",borderRadius:"50%",height:oe,width:oe,transform:D?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:de,cursor:k?"not-allowed":"pointer",onClick:ae,shrink:0,children:(0,e.jsx)(O.J,{as:r.Z,width:B==="M"?`${11/16}rem`:`${8/16}rem`,color:D?"primary600":"neutral600"})});return(0,e.jsx)(Z,{paddingBottom:te,paddingLeft:V,paddingRight:V,paddingTop:te,background:X,expanded:D,size:B,justifyContent:"space-between",cursor:k?"not-allowed":"",children:(0,e.jsxs)(C.k,{gap:3,flex:1,maxWidth:"100%",children:[y==="left"&&J,(0,e.jsx)(L,{onClick:ae,"aria-disabled":k,"aria-expanded":D,"aria-controls":a,"aria-labelledby":se,"data-strapi-accordion-toggle":!0,expanded:D,type:"button",flex:1,minWidth:0,...$,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.y,{...le,children:u}),P&&(0,e.jsx)(j.Z,{as:"p",id:re,textColor:ne,children:P})]})}),y==="right"&&(0,e.jsxs)(C.k,{gap:3,children:[J,v]}),y==="left"&&v]})})}}}]);
