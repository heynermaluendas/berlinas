"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6234],{18429:function(ce,J,n){n.d(J,{Z:function(){return H}});var x=n(1413),P=n(67294),N={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z"}}]},name:"close-circle",theme:"outlined"},R=N,G=n(91146),Y=function(Z,j){return P.createElement(G.Z,(0,x.Z)((0,x.Z)({},Z),{},{ref:j,icon:R}))},V=P.forwardRef(Y),H=V},34540:function(ce,J,n){var x=n(1413),P=n(91),N=n(86190),R=n(67294),G=n(66758),Y=n(47560),V=n(85893),H=["fieldProps","proFieldProps"],U="dateRange",Z=R.forwardRef(function(j,A){var S=j.fieldProps,a=j.proFieldProps,g=(0,P.Z)(j,H),C=(0,R.useContext)(G.Z);return(0,V.jsx)(Y.Z,(0,x.Z)({ref:A,fieldProps:(0,x.Z)({getPopupContainer:C.getPopupContainer},S),valueType:U,proFieldProps:a,filedConfig:{valueType:U,customLightMode:!0,lightFilterLabelFormatter:function($){return(0,N.c)($,(S==null?void 0:S.format)||"YYYY-MM-DD")}}},g))});J.Z=Z},64317:function(ce,J,n){var x=n(1413),P=n(91),N=n(22270),R=n(67294),G=n(66758),Y=n(47560),V=n(85893),H=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],U=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],Z=function(C,l){var $=C.fieldProps,c=C.children,e=C.params,I=C.proFieldProps,b=C.mode,X=C.valueEnum,Q=C.request,k=C.showSearch,M=C.options,q=(0,P.Z)(C,H),_=(0,R.useContext)(G.Z);return(0,V.jsx)(Y.Z,(0,x.Z)((0,x.Z)({valueEnum:(0,N.h)(X),request:Q,params:e,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,x.Z)({options:M,mode:b,showSearch:k,getPopupContainer:_.getPopupContainer},$),ref:l,proFieldProps:I},q),{},{children:c}))},j=R.forwardRef(function(g,C){var l=g.fieldProps,$=g.children,c=g.params,e=g.proFieldProps,I=g.mode,b=g.valueEnum,X=g.request,Q=g.options,k=(0,P.Z)(g,U),M=(0,x.Z)({options:Q,mode:I||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},l),q=(0,R.useContext)(G.Z);return(0,V.jsx)(Y.Z,(0,x.Z)((0,x.Z)({valueEnum:(0,N.h)(b),request:X,params:c,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,x.Z)({getPopupContainer:q.getPopupContainer},M),ref:C,proFieldProps:e},k),{},{children:$}))}),A=R.forwardRef(Z),S=j,a=A;a.SearchSelect=S,a.displayName="ProFormComponent",J.Z=a},5966:function(ce,J,n){var x=n(97685),P=n(1413),N=n(91),R=n(21770),G=n(8232),Y=n(55241),V=n(97435),H=n(67294),U=n(47560),Z=n(85893),j=["fieldProps","proFieldProps"],A=["fieldProps","proFieldProps"],S="text",a=function(c){var e=c.fieldProps,I=c.proFieldProps,b=(0,N.Z)(c,j);return(0,Z.jsx)(U.Z,(0,P.Z)({valueType:S,fieldProps:e,filedConfig:{valueType:S},proFieldProps:I},b))},g=function(c){var e=(0,R.Z)(c.open||!1,{value:c.open,onChange:c.onOpenChange}),I=(0,x.Z)(e,2),b=I[0],X=I[1];return(0,Z.jsx)(G.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(k){var M,q=k.getFieldValue(c.name||[]);return(0,Z.jsx)(Y.Z,(0,P.Z)((0,P.Z)({getPopupContainer:function(E){return E&&E.parentNode?E.parentNode:E},onOpenChange:function(E){return X(E)},content:(0,Z.jsxs)("div",{style:{padding:"4px 0"},children:[(M=c.statusRender)===null||M===void 0?void 0:M.call(c,q),c.strengthText?(0,Z.jsx)("div",{style:{marginTop:10},children:(0,Z.jsx)("span",{children:c.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},c.popoverProps),{},{open:b,children:c.children}))}})},C=function(c){var e=c.fieldProps,I=c.proFieldProps,b=(0,N.Z)(c,A),X=(0,H.useState)(!1),Q=(0,x.Z)(X,2),k=Q[0],M=Q[1];return e!=null&&e.statusRender&&b.name?(0,Z.jsx)(g,{name:b.name,statusRender:e==null?void 0:e.statusRender,popoverProps:e==null?void 0:e.popoverProps,strengthText:e==null?void 0:e.strengthText,open:k,onOpenChange:M,children:(0,Z.jsx)("div",{children:(0,Z.jsx)(U.Z,(0,P.Z)({valueType:"password",fieldProps:(0,P.Z)((0,P.Z)({},(0,V.Z)(e,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(_){var E;e==null||(E=e.onBlur)===null||E===void 0||E.call(e,_),M(!1)},onClick:function(_){var E;e==null||(E=e.onClick)===null||E===void 0||E.call(e,_),M(!0)}}),proFieldProps:I,filedConfig:{valueType:S}},b))})}):(0,Z.jsx)(U.Z,(0,P.Z)({valueType:"password",fieldProps:e,proFieldProps:I,filedConfig:{valueType:S}},b))},l=a;l.Password=C,l.displayName="ProFormComponent",J.Z=l},7738:function(ce,J,n){n.r(J),n.d(J,{default:function(){return nr}});var x=n(15009),P=n.n(x),N=n(99289),R=n.n(N),G=n(5574),Y=n.n(G),V=n(18429),H=n(34994),U=n(2236),Z=n(45629),j=n(5966),A=n(64317),S=n(34540),a=n(1413),g=n(91),C=n(86190),l=n(67294),$=n(66758),c=n(47560),e=n(85893),I=["fieldProps","proFieldProps"],b=["fieldProps","proFieldProps"],X="time",Q=l.forwardRef(function(r,s){var m=r.fieldProps,F=r.proFieldProps,K=(0,g.Z)(r,I),O=(0,l.useContext)($.Z);return(0,e.jsx)(c.Z,(0,a.Z)({ref:s,fieldProps:(0,a.Z)({getPopupContainer:O.getPopupContainer},m),valueType:"timeRange",proFieldProps:F,filedConfig:{valueType:"timeRange",customLightMode:!0,lightFilterLabelFormatter:function(re){return(0,C.c)(re,"HH:mm:ss")}}},K))}),k=function(s){var m=s.fieldProps,F=s.proFieldProps,K=(0,g.Z)(s,b),O=(0,l.useContext)($.Z);return(0,e.jsx)(c.Z,(0,a.Z)({fieldProps:(0,a.Z)({getPopupContainer:O.getPopupContainer},m),valueType:X,proFieldProps:F,filedConfig:{customLightMode:!0,valueType:X}},K))},M=k;M.RangePicker=Q;var q=M,_=n(4942),E=n(97685),xe=n(74165),be=n(15861),Me=n(87462),Oe=n(42110),De=n(78026),Se=function(s,m){return l.createElement(De.Z,(0,Me.Z)({},s,{ref:m,icon:Oe.Z}))},Ie=l.forwardRef(Se),Le=Ie,Ae=n(97462),Be=n(952),Ke=n(10915),Ze=n(48171),We=n(53914),Ce=n(22270),Ne=n(60249),Ve=n(14726),Ue=n(8232),$e=n(21770),me=n(88306),ye=n(8880),we=n(17644),ze=["onTableChange","maxLength","formItemProps","recordCreatorProps","rowKey","controlled","defaultValue","onChange","editableFormRef"],Je=["record","position","creatorButtonText","newRecordType","parentKey","style"],Ee=l.createContext(void 0);function Fe(r){var s=r.children,m=r.record,F=r.position,K=r.newRecordType,O=r.parentKey,ee=(0,l.useContext)(Ee);return l.cloneElement(s,(0,a.Z)((0,a.Z)({},s.props),{},{onClick:function(){var re=(0,be.Z)((0,xe.Z)().mark(function ie(de){var w,T,y,z;return(0,xe.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(w=(T=s.props).onClick)===null||w===void 0?void 0:w.call(T,de);case 2:if(z=i.sent,z!==!1){i.next=5;break}return i.abrupt("return");case 5:ee==null||(y=ee.current)===null||y===void 0||y.addEditRecord(m,{position:F,newRecordType:K,parentKey:O});case 6:case"end":return i.stop()}},ie)}));function ne(ie){return re.apply(this,arguments)}return ne}()}))}function Te(r){var s,m,F=(0,Ke.YB)(),K=r.onTableChange,O=r.maxLength,ee=r.formItemProps,re=r.recordCreatorProps,ne=r.rowKey,ie=r.controlled,de=r.defaultValue,w=r.onChange,T=r.editableFormRef,y=(0,g.Z)(r,ze),z=(0,l.useRef)(void 0),p=(0,l.useRef)(),i=(0,l.useRef)();(0,l.useImperativeHandle)(y.actionRef,function(){return p.current},[p.current]);var W=(0,$e.Z)(function(){return r.value||de||[]},{value:r.value,onChange:r.onChange}),le=(0,E.Z)(W,2),v=le[0],ar=le[1],oe=l.useMemo(function(){return typeof ne=="function"?ne:function(o,h){return o[ne]||h}},[ne]),he=(0,Ze.J)(function(o){if(typeof o=="number"&&!r.name){if(o>=v.length)return o;var h=v&&v[o];return oe==null?void 0:oe(h,o)}if((typeof o=="string"||o>=v.length)&&r.name){var t=v.findIndex(function(d,u){var f;return(oe==null||(f=oe(d,u))===null||f===void 0?void 0:f.toString())===(o==null?void 0:o.toString())});if(t!==-1)return t}return o});(0,l.useImperativeHandle)(T,function(){var o=function(d){var u,f;if(d==null)throw new Error("rowIndex is required");var D=he(d),ae=[r.name,(u=D==null?void 0:D.toString())!==null&&u!==void 0?u:""].flat(1).filter(Boolean);return(f=i.current)===null||f===void 0?void 0:f.getFieldValue(ae)},h=function(){var d,u=[r.name].flat(1).filter(Boolean);if(Array.isArray(u)&&u.length===0){var f,D=(f=i.current)===null||f===void 0?void 0:f.getFieldsValue();return Array.isArray(D)?D:Object.keys(D).map(function(ae){return D[ae]})}return(d=i.current)===null||d===void 0?void 0:d.getFieldValue(u)};return(0,a.Z)((0,a.Z)({},i.current),{},{getRowData:o,getRowsData:h,setRowData:function(d,u){var f,D;if(d==null)throw new Error("rowIndex is required");var ae=he(d),ue=[r.name,(f=ae==null?void 0:ae.toString())!==null&&f!==void 0?f:""].flat(1).filter(Boolean),vr=Object.assign({},(0,a.Z)((0,a.Z)({},o(d)),u||{})),mr=(0,ye.Z)({},ue,vr);return(D=i.current)===null||D===void 0||D.setFieldsValue(mr),!0}})},[he,r.name,i.current]),(0,l.useEffect)(function(){r.controlled&&(v||[]).forEach(function(o,h){var t;(t=i.current)===null||t===void 0||t.setFieldsValue((0,_.Z)({},"".concat(oe(o,h)),o))},{})},[(0,We.ZP)(v),r.controlled]),(0,l.useEffect)(function(){if(r.name){var o;i.current=r==null||(o=r.editable)===null||o===void 0?void 0:o.form}},[(s=r.editable)===null||s===void 0?void 0:s.form,r.name]);var te=re||{},or=te.record,Pe=te.position,tr=te.creatorButtonText,lr=te.newRecordType,ir=te.parentKey,dr=te.style,sr=(0,g.Z)(te,Je),je=Pe==="top",se=(0,l.useMemo)(function(){return typeof O=="number"&&O<=(v==null?void 0:v.length)?!1:re!==!1&&(0,e.jsx)(Fe,{record:(0,Ce.h)(or,v==null?void 0:v.length,v)||{},position:Pe,parentKey:(0,Ce.h)(ir,v==null?void 0:v.length,v),newRecordType:lr,children:(0,e.jsx)(Ve.ZP,(0,a.Z)((0,a.Z)({type:"dashed",style:(0,a.Z)({display:"block",margin:"10px 0",width:"100%"},dr),icon:(0,e.jsx)(Le,{})},sr),{},{children:tr||F.getMessage("editableTable.action.add","\u6DFB\u52A0\u4E00\u884C\u6570\u636E")}))})},[re,O,v==null?void 0:v.length]),ur=(0,l.useMemo)(function(){return se?je?{components:{header:{wrapper:function(h){var t,d=h.className,u=h.children;return(0,e.jsxs)("thead",{className:d,children:[u,(0,e.jsxs)("tr",{style:{position:"relative"},children:[(0,e.jsx)("td",{colSpan:0,style:{visibility:"hidden"},children:se}),(0,e.jsx)("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(t=y.columns)===null||t===void 0?void 0:t.length,children:se})]})]})}}}}:{tableViewRender:function(h,t){var d,u;return(0,e.jsxs)(e.Fragment,{children:[(d=(u=r.tableViewRender)===null||u===void 0?void 0:u.call(r,h,t))!==null&&d!==void 0?d:t,se]})}}:{}},[je,se]),ge=(0,a.Z)({},r.editable),cr=(0,Ze.J)(function(o,h){var t,d,u;if((t=r.editable)===null||t===void 0||(d=t.onValuesChange)===null||d===void 0||d.call(t,o,h),(u=r.onValuesChange)===null||u===void 0||u.call(r,h,o),r.controlled){var f;r==null||(f=r.onChange)===null||f===void 0||f.call(r,h)}});return(r!=null&&r.onValuesChange||(m=r.editable)!==null&&m!==void 0&&m.onValuesChange||r.controlled&&r!==null&&r!==void 0&&r.onChange)&&(ge.onValuesChange=cr),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ee.Provider,{value:p,children:(0,e.jsx)(we.Z,(0,a.Z)((0,a.Z)((0,a.Z)({search:!1,options:!1,pagination:!1,rowKey:ne,revalidateOnFocus:!1},y),ur),{},{tableLayout:"fixed",actionRef:p,onChange:K,editable:(0,a.Z)((0,a.Z)({},ge),{},{formProps:(0,a.Z)({formRef:i},ge.formProps)}),dataSource:v,onDataSourceChange:function(h){if(ar(h),r.name&&Pe==="top"){var t,d=(0,ye.Z)({},[r.name].flat(1).filter(Boolean),h);(t=i.current)===null||t===void 0||t.setFieldsValue(d)}}}))}),r.name?(0,e.jsx)(Ae.Z,{name:[r.name],children:function(h){var t,d;if(!z.current)return z.current=v,null;var u=(0,me.Z)(h,[r.name].flat(1)),f=u==null?void 0:u.find(function(D,ae){var ue;return!(0,Ne.A)(D,(ue=z.current)===null||ue===void 0?void 0:ue[ae])});return z.current=v,f&&(r==null||(t=r.editable)===null||t===void 0||(d=t.onValuesChange)===null||d===void 0||d.call(t,f,u)),null}}):null]})}function Re(r){var s=Be.ZP.useFormInstance();return r.name?(0,e.jsx)(Ue.Z.Item,(0,a.Z)((0,a.Z)({style:{maxWidth:"100%"}},r==null?void 0:r.formItemProps),{},{name:r.name,shouldUpdate:function(F,K){var O=[r.name].flat(1);try{return JSON.stringify((0,me.Z)(F,O))!==JSON.stringify((0,me.Z)(K,O))}catch(ee){return!0}},children:(0,e.jsx)(Te,(0,a.Z)((0,a.Z)({tableLayout:"fixed",scroll:{x:"max-content"}},r),{},{editable:(0,a.Z)((0,a.Z)({},r.editable),{},{form:s})}))})):(0,e.jsx)(Te,(0,a.Z)({tableLayout:"fixed",scroll:{x:"max-content"}},r))}Re.RecordCreator=Fe;var Ge=Re,Ye=n(55241),He=n(2453),fe=n(4393),ve=n(71230),B=n(15746),Xe=n(35312);function Qe(r){return pe.apply(this,arguments)}function pe(){return pe=R()(P()().mark(function r(s){return P()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.abrupt("return",(0,Xe.request)("/api/advancedForm",{method:"POST",data:s}));case 1:case"end":return F.stop()}},r)})),pe.apply(this,arguments)}var ke=n(98257),qe=(0,ke.kc)(function(r){var s=r.token;return{card:{marginBottom:"24px",".ant-legacy-form-item .ant-legacy-form-item-control-wrapper":{width:"100%"}},errorIcon:{marginRight:"12px",color:s.colorError,cursor:"pointer","span.anticon":{marginRight:"4px"},float:"left",marginTop:"4px",paddingBottom:"22px"},errorPopover:{".ant-popover-inner-content":{minWidth:"256px",maxHeight:"290px",padding:"0",overflow:"auto"}},errorListItem:{padding:"8px 16px",listStyle:"none",borderBottom:"1px solid ".concat(s.colorSplit),cursor:"pointer",transition:"all 0.3s","&:hover":{background:s.colorBgTextActive},"&:last-child":{border:"0"}},errorField:{marginTop:"2px",color:s.colorTextSecondary,fontSize:"12px"},editable:{td:{paddingTop:"13px",paddingBottom:"12.5px"}}}}),_e=qe,L={name:"Nombre del dep\xF3sito",url:"Dominio del dep\xF3sito",owner:"Administrador del dep\xF3sito",approver:"Aprobador",dateRange:"Rango de fechas",type:"Tipo de dep\xF3sito",name2:"Nombre de la tarea",url2:"Descripci\xF3n de la tarea",owner2:"Persona encargada de la ejecuci\xF3n",approver2:"Persona responsable",dateRange2:"Rango de fechas",type2:"Tipo de tarea"},er=[{key:"1",workId:"00001",name:"John Brown",department:"New York No. 1 Lake Park"},{key:"2",workId:"00002",name:"Jim Green",department:"London No. 1 Lake Park"},{key:"3",workId:"00003",name:"Joe Black",department:"Sidney No. 1 Lake Park"}],rr=function(){var s=_e(),m=s.styles,F=(0,l.useState)([]),K=Y()(F,2),O=K[0],ee=K[1],re=function(T){var y=T.filter(function(i){return i.errors.length>0}).length;if(!T||y===0)return null;var z=function(W){var le=document.querySelector('label[for="'.concat(W,'"]'));le&&le.scrollIntoView(!0)},p=T.map(function(i){if(!i||i.errors.length===0)return null;var W=i.name[0];return(0,e.jsxs)("li",{className:m.errorListItem,onClick:function(){return z(W)},children:[(0,e.jsx)(V.Z,{className:m.errorIcon}),(0,e.jsx)("div",{className:m.errorMessage,children:i.errors[0]}),(0,e.jsx)("div",{className:m.errorField,children:L[W]})]},W)});return(0,e.jsxs)("span",{className:m.errorIcon,children:[(0,e.jsx)(Ye.Z,{title:"Informaci\xF3n de verificaci\xF3n del formulario",content:p,overlayClassName:m.errorPopover,trigger:"click",getPopupContainer:function(W){return W&&W.parentNode?W.parentNode:W},children:(0,e.jsx)(V.Z,{})}),y]})},ne=function(){var w=R()(P()().mark(function T(y){return P()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return ee([]),p.prev=1,p.next=4,Qe(y);case 4:He.ZP.success("Enviado satisfactoriamente"),p.next=9;break;case 7:p.prev=7,p.t0=p.catch(1);case 9:case"end":return p.stop()}},T,null,[[1,7]])}));return function(y){return w.apply(this,arguments)}}(),ie=function(T){ee(T.errorFields)},de=[{title:"Nombre",dataIndex:"name",key:"name",width:"20%"},{title:"Id",dataIndex:"workId",key:"workId",width:"20%"},{title:"Departamento",dataIndex:"department",key:"department",width:"40%"},{title:"Manejar",key:"action",valueType:"option",render:function(T,y,z,p){return[(0,e.jsx)("a",{onClick:function(){p==null||p.startEditable(y.key)},children:"Editar"},"eidit")]}}];return(0,e.jsx)(H.A,{layout:"vertical",hideRequiredMark:!0,submitter:{render:function(T,y){return(0,e.jsxs)(U.S,{children:[re(O),y]})}},initialValues:{members:er},onFinish:ne,onFinishFailed:ie,children:(0,e.jsxs)(Z._z,{content:"Los formularios avanzados se utilizan com\xFAnmente en escenarios donde se ingresan y env\xEDan grandes cantidades de datos al mismo tiempo.",children:[(0,e.jsxs)(fe.Z,{title:"Gestion de almacenes",className:m.card,bordered:!1,children:[(0,e.jsxs)(ve.Z,{gutter:16,children:[(0,e.jsx)(B.Z,{lg:6,md:12,sm:24,children:(0,e.jsx)(j.Z,{label:L.name,name:"name",rules:[{required:!0,message:"Por favor, ingrese el nombre del deposito!"}],placeholder:"Nombre del deposito"})}),(0,e.jsx)(B.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,e.jsx)(j.Z,{label:L.url,name:"url",rules:[{required:!0,message:"Por favor, elige..."}],fieldProps:{style:{width:"100%"},addonBefore:"http://",addonAfter:".com"},placeholder:"Por favor escribe"})}),(0,e.jsx)(B.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,e.jsx)(A.Z,{label:L.owner,name:"owner",rules:[{required:!0,message:"Por favor seleccione un administrador"}],options:[{label:"Fu Xiaoxiao",value:"xiao"},{label:"Zhou Maomao",value:"mao"}],placeholder:"Seleccione un administrador"})})]}),(0,e.jsxs)(ve.Z,{gutter:16,children:[(0,e.jsx)(B.Z,{lg:6,md:12,sm:24,children:(0,e.jsx)(A.Z,{label:L.approver,name:"approver",rules:[{required:!0,message:"Por favor seleccione un aprobador"}],options:[{label:"Fu Xiaoxiao",value:"xiao"},{label:"Zhou Maomao",value:"mao"}],placeholder:"Seleccione un aprovador"})}),(0,e.jsx)(B.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,e.jsx)(S.Z,{label:L.dateRange,name:"dateRange",fieldProps:{style:{width:"100%"}},rules:[{required:!0,message:"Por favor seleccione una fecha efectiva"}]})}),(0,e.jsx)(B.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,e.jsx)(A.Z,{label:L.type,name:"type",rules:[{required:!0,message:"Por favor seleccione el tipo de almac\xE9n"}],options:[{label:"Privado",value:"private"},{label:"Publico",value:"public"}],placeholder:"Seleccione el tipo de deposito"})})]})]}),(0,e.jsxs)(fe.Z,{title:"Administracion de tareas",className:m.card,bordered:!1,children:[(0,e.jsxs)(ve.Z,{gutter:16,children:[(0,e.jsx)(B.Z,{lg:6,md:12,sm:24,children:(0,e.jsx)(j.Z,{label:L.name2,name:"name2",rules:[{required:!0,message:"Por favor escribe."}]})}),(0,e.jsx)(B.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,e.jsx)(j.Z,{label:L.url2,name:"url2",rules:[{required:!0,message:"Por favor elige"}]})}),(0,e.jsx)(B.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,e.jsx)(A.Z,{label:L.owner2,name:"owner2",rules:[{required:!0,message:"Por favor seleccione un administrador"}],options:[{label:"Fu Xiaoxiao",value:"xiao"},{label:"Zhou Maomao",value:"mao"}]})})]}),(0,e.jsxs)(ve.Z,{gutter:16,children:[(0,e.jsx)(B.Z,{lg:6,md:12,sm:24,children:(0,e.jsx)(A.Z,{label:L.approver2,name:"approver2",rules:[{required:!0,message:"Por favor seleccione un aprobador"}],options:[{label:"Fu Xiaoxiao",value:"xiao"},{label:"Zhou Maomao",value:"mao"}],placeholder:"Seleccione un aprovador"})}),(0,e.jsx)(B.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,e.jsx)(q,{label:L.dateRange2,name:"dateRange2",rules:[{required:!0,message:"Por favor escribe"}],placeholder:"Tiempo de recordatorio",fieldProps:{style:{width:"100%"}}})}),(0,e.jsx)(B.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,e.jsx)(A.Z,{label:L.type2,name:"type2",rules:[{required:!0,message:"Por favor seleccione el tipo de almac\xE9n"}],options:[{label:"Privado",value:"private"},{label:"Publico",value:"public"}],placeholder:"Seleccione tipo de deposito"})})]})]}),(0,e.jsx)(fe.Z,{title:"Gestion de miembros",bordered:!1,children:(0,e.jsx)(H.A.Item,{name:"members",children:(0,e.jsx)(Ge,{recordCreatorProps:{record:function(){return{key:"0".concat(Date.now())}}},columns:de,rowKey:"key"})})})]})})},nr=rr}}]);