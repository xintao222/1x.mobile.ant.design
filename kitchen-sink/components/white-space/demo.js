webpackJsonp([32,88],{14:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(4),e=t(p),l=s(5),o=t(l),c=s(7),u=t(c),i=s(6),k=t(i),r=s(1),d=t(r),f=s(3),g=t(f),m=function(n){function a(){return(0,o["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,l=a.style,o=a.onClick,c=(0,g["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return d["default"].createElement("div",{className:c,style:l,onClick:o})},a}(d["default"].Component);a["default"]=m,m.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},15:function(n,a,s){"use strict";s(11),s(30)},19:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(4),e=t(p),l=s(5),o=t(l),c=s(7),u=t(c),i=s(6),k=t(i),r=s(1),d=t(r),f=s(3),g=t(f),m=function(n){function a(){return(0,o["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,l=a.children,o=a.style,c=(0,g["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return d["default"].createElement("div",{className:c,style:o},l)},a}(d["default"].Component);a["default"]=m,m.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},20:function(n,a,s){"use strict";s(11),s(40)},27:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){return"string"==typeof n}function e(n){return p(n.type)&&N(n.props.children)?h["default"].cloneElement(n,{},n.props.children.split("").join(" ")):p(n)?(N(n)&&(n=n.split("").join(" ")),h["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var l=s(10),o=t(l),c=s(4),u=t(c),i=s(33),k=t(i),r=s(5),d=t(r),f=s(7),g=t(f),m=s(6),y=t(m),v=s(1),h=t(v),x=s(3),E=t(x),b=s(13),W=t(b),z=s(17),B=t(z),S=s(34),C=t(S),_=s(43),w=t(_),j=/^[\u4e00-\u9fa5]{2}$/,N=j.test.bind(j),T=function(n){function a(){return(0,d["default"])(this,a),(0,g["default"])(this,n.apply(this,arguments))}return(0,y["default"])(a,n),a.prototype.render=function(){var n,a=(0,C["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","touchFeedback","activeStyle"]),s=(0,k["default"])(a,2),t=s[0],p=t.children,l=t.className,c=t.prefixCls,i=t.type,r=t.size,d=t.inline,f=t.across,g=t.disabled,m=t.icon,y=t.loading,v=t.touchFeedback,x=t.activeStyle,b=s[1],z=(n={},(0,u["default"])(n,l,l),(0,u["default"])(n,c,!0),(0,u["default"])(n,c+"-primary","primary"===i),(0,u["default"])(n,c+"-ghost","ghost"===i),(0,u["default"])(n,c+"-warning","warning"===i),(0,u["default"])(n,c+"-small","small"===r),(0,u["default"])(n,c+"-inline",d),(0,u["default"])(n,c+"-across",f),(0,u["default"])(n,c+"-disabled",g),(0,u["default"])(n,c+"-loading",y),n),S=(0,W["default"])({},this.props.style);v&&(S=(0,W["default"])(S,x),z[c+"-active"]=!0);var _=y?"loading":m,w=h["default"].Children.map(p,e);return _&&(z[c+"-icon"]=!0),h["default"].createElement("a",(0,o["default"])({},b,{role:"button",style:S,className:(0,E["default"])(z),disabled:g}),_?h["default"].createElement(B["default"],{type:_}):null,w)},a}(h["default"].Component);T.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1},a["default"]=(0,w["default"])(T),n.exports=a["default"]},28:function(n,a,s){"use strict";s(11),s(18),s(37)},30:function(n,a){},37:function(n,a){},40:function(n,a){},719:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(20),s(19)),e=t(p),l=(s(28),s(27)),o=t(l),c=(s(15),s(14)),u=t(c),i=s(1),k=t(i),r=s(2);t(r);n.exports={content:[["p","\u4e0a\u4e0b\u7559\u767d ",["code","<WhiteSpace size='md' />"]]],meta:{order:0,title:"\u57fa\u672c",filename:"components/white-space/demo/basic.md",id:"components-white-space-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> WhiteSpace<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> WhiteSpaceExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>button-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xs<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u4e0b\u7559\u767dxs<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xs<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #108ee9\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sm<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u4e0b\u7559\u767dsm<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sm<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #108ee9\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token function" >\u4e0a\u4e0b\u7559\u767dmd</span><span class="token punctuation" >(</span>\u9ed8\u8ba4<span class="token punctuation" >)</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #108ee9\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u4e0b\u7559\u767dlg<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #108ee9\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u4e0b\u7559\u767dxl<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #108ee9\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpaceExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=k["default"].createClass({displayName:"WhiteSpaceExample",render:function(){return k["default"].createElement("div",{className:"button-container"},k["default"].createElement(u["default"],{size:"xs"}),k["default"].createElement(e["default"],null,k["default"].createElement(o["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dxs")),k["default"].createElement(u["default"],{size:"xs"}),k["default"].createElement("div",{style:{borderTop:"1px solid #108ee9"}}),k["default"].createElement(u["default"],{size:"sm"}),k["default"].createElement(e["default"],null,k["default"].createElement(o["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dsm")),k["default"].createElement(u["default"],{size:"sm"}),k["default"].createElement("div",{style:{borderTop:"1px solid #108ee9"}}),k["default"].createElement(u["default"],null),k["default"].createElement(e["default"],null,k["default"].createElement(o["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dmd(\u9ed8\u8ba4)")),k["default"].createElement(u["default"],null),k["default"].createElement("div",{style:{borderTop:"1px solid #108ee9"}}),k["default"].createElement(u["default"],{size:"lg"}),k["default"].createElement(e["default"],null,k["default"].createElement(o["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dlg")),k["default"].createElement(u["default"],{size:"lg"}),k["default"].createElement("div",{style:{borderTop:"1px solid #108ee9"}}),k["default"].createElement(u["default"],{size:"xl"}),k["default"].createElement(e["default"],null,k["default"].createElement(o["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dxl")),k["default"].createElement(u["default"],{size:"xl"}),k["default"].createElement("div",{style:{borderTop:"1px solid #108ee9"}}))}});return k["default"].createElement(n,null)}}},875:function(n,a,s){n.exports={basic:s(719)}}});