webpackJsonp([29,88],{14:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(4),e=t(p),o=s(5),c=t(o),l=s(7),u=t(l),i=s(6),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,o=a.style,c=a.onClick,l=(0,m["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return d["default"].createElement("div",{className:l,style:o,onClick:c})},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},15:function(n,a,s){"use strict";s(11),s(29)},18:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(4),e=t(p),o=s(5),c=t(o),l=s(7),u=t(l),i=s(6),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,o=a.children,c=a.style,l=(0,m["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return d["default"].createElement("div",{className:l,style:c},o)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},19:function(n,a,s){"use strict";s(11),s(39)},26:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){return"string"==typeof n}function e(n){return p(n.type)&&M(n.props.children)?y["default"].cloneElement(n,{},n.props.children.split("").join(" ")):p(n)?(M(n)&&(n=n.split("").join(" ")),y["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(10),c=t(o),l=s(4),u=t(l),i=s(32),k=t(i),r=s(5),d=t(r),f=s(7),m=t(f),g=s(6),v=t(g),h=s(1),y=t(h),x=s(3),E=t(x),N=s(13),b=t(N),w=s(17),C=t(w),z=s(33),_=t(z),T=s(43),S=t(T),j=/^[\u4e00-\u9fa5]{2}$/,M=j.test.bind(j),W=function(n){function a(){return(0,d["default"])(this,a),(0,m["default"])(this,n.apply(this,arguments))}return(0,v["default"])(a,n),a.prototype.render=function(){var n,a=(0,_["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","touchFeedback","activeStyle"]),s=(0,k["default"])(a,2),t=s[0],p=t.children,o=t.className,l=t.prefixCls,i=t.type,r=t.size,d=t.inline,f=t.across,m=t.disabled,g=t.icon,v=t.loading,h=t.touchFeedback,x=t.activeStyle,N=s[1],w=(n={},(0,u["default"])(n,o,o),(0,u["default"])(n,l,!0),(0,u["default"])(n,l+"-primary","primary"===i),(0,u["default"])(n,l+"-ghost","ghost"===i),(0,u["default"])(n,l+"-warning","warning"===i),(0,u["default"])(n,l+"-small","small"===r),(0,u["default"])(n,l+"-inline",d),(0,u["default"])(n,l+"-across",f),(0,u["default"])(n,l+"-disabled",m),(0,u["default"])(n,l+"-loading",v),n),z=(0,b["default"])({},this.props.style);h&&(z=(0,b["default"])(z,x),w[l+"-active"]=!0);var T=v?"loading":g,S=y["default"].Children.map(p,e);return T&&(w[l+"-icon"]=!0),y["default"].createElement("a",(0,c["default"])({},N,{role:"button",style:z,className:(0,E["default"])(w),disabled:m}),T?y["default"].createElement(C["default"],{type:T}):null,S)},a}(y["default"].Component);W.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1},a["default"]=(0,S["default"])(W),n.exports=a["default"]},27:function(n,a,s){"use strict";s(11),s(21),s(36)},29:function(n,a){},36:function(n,a){},39:function(n,a){},607:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(19),s(18)),e=t(p),o=(s(27),s(26)),c=t(o),l=(s(725),s(724)),u=t(l),i=(s(15),s(14)),k=t(i),r=s(1),d=t(r),f=s(2);t(f);n.exports={content:[["p","\u57fa\u672c\u7684\u6d3b\u52a8\u6307\u793a\u5668\u3002"]],meta:{order:0,title:"\u57fa\u672c\u7528\u6cd5",filename:"components/activity-indicator/demo/basic.md",id:"components-activity-indicator-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ActivityIndicator<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      animating<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >componentWillUnmount</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >clearTimeout</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>closeTimer<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >showToast</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> animating<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>animating <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>closeTimer <span class="token operator" >=</span> <span class="token function" >setTimeout</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> animating<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>animating <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token number" >90000</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>icon\u65e0\u6587\u6848<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span> <span class="token attr-name" >animating</span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>icon\u5e26\u6587\u6848<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name" >text</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u52a0\u8f7d\u4e2d...<span class="token punctuation" >"</span></span>\n              <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5927\u53f7icon<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>align<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginTop<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u52a0\u8f7d\u4e2d<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>showToast<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u70b9\u51fb\u663e\u793a Toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>toast-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name" >toast</span>\n                <span class="token attr-name" >text</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b63\u5728\u52a0\u8f7d<span class="token punctuation" >"</span></span>\n                <span class="token attr-name" >animating</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>animating<span class="token punctuation" >}</span></span>\n              <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=d["default"].createClass({displayName:"App",getInitialState:function(){return{animating:!1}},componentWillUnmount:function(){clearTimeout(this.closeTimer)},showToast:function(){var n=this;this.setState({animating:!this.state.animating}),this.closeTimer=setTimeout(function(){n.setState({animating:!n.state.animating})},9e4)},render:function(){return d["default"].createElement("div",null,d["default"].createElement(e["default"],null,d["default"].createElement("div",{className:"loading-container"},d["default"].createElement(k["default"],{size:"xl"}),d["default"].createElement("div",{className:"loading-example"},d["default"].createElement("p",{className:"title"},"icon\u65e0\u6587\u6848"),d["default"].createElement(u["default"],{animating:!0})),d["default"].createElement(k["default"],{size:"xl"}),d["default"].createElement("div",{className:"loading-example"},d["default"].createElement("p",{className:"title"},"icon\u5e26\u6587\u6848"),d["default"].createElement(u["default"],{text:"\u52a0\u8f7d\u4e2d..."})),d["default"].createElement(k["default"],{size:"xl"}),d["default"].createElement("div",{className:"loading-example"},d["default"].createElement("p",{className:"title"},"\u5927\u53f7icon"),d["default"].createElement("div",{className:"align"},d["default"].createElement(u["default"],{size:"large"}),d["default"].createElement("span",{style:{marginTop:8}},"\u52a0\u8f7d\u4e2d"))),d["default"].createElement(k["default"],{size:"xl"}),d["default"].createElement(c["default"],{onClick:this.showToast},"\u70b9\u51fb\u663e\u793a Toast"),d["default"].createElement("div",{className:"toast-example"},d["default"].createElement(u["default"],{toast:!0,text:"\u6b63\u5728\u52a0\u8f7d",animating:this.state.animating})))))}});return d["default"].createElement(n,null)},style:".title {\n  font-size: 0.28rem;\n  color: #888;\n  font-weight: 300;\n  width: 25%;\n}\n.loading-example {\n  display: flex;\n  margin-left: 0.2rem;\n  margin-right: 0.2rem;\n}\n.align {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.loading-example .title {\n  margin-right: 0.2rem;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >0.28</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#888</span><span class="token punctuation" >;</span>\n  <span class="token property" >font-weight</span><span class="token punctuation" >:</span> <span class="token number" >300</span><span class="token punctuation" >;</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >25%</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.loading-example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> flex<span class="token punctuation" >;</span>\n  <span class="token property" >margin-left</span><span class="token punctuation" >:</span> <span class="token number" >0.2</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >0.2</span>rem<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.align</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> flex<span class="token punctuation" >;</span>\n  <span class="token property" >flex-direction</span><span class="token punctuation" >:</span> column<span class="token punctuation" >;</span>\n  <span class="token property" >align-items</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.loading-example</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >0.2</span>rem<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},724:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(4),e=t(p),o=s(5),c=t(o),l=s(7),u=t(l),i=s(6),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.prefixCls,p=s.className,o=s.animating,c=s.toast,l=s.size,u=s.color,i=s.text,k=(0,m["default"])((n={},(0,e["default"])(n,""+t,!0),(0,e["default"])(n,t+"-lg","large"===l),(0,e["default"])(n,t+"-sm","small"===l),(0,e["default"])(n,p,!!p),(0,e["default"])(n,t+"-toast",!!c),n)),r=(0,m["default"])((a={},(0,e["default"])(a,t+"-spinner",!0),(0,e["default"])(a,t+"-spinner-lg",!!c||"large"===l),(0,e["default"])(a,t+"-spinner-white",!!c||"white"===u),a));return o?c?d["default"].createElement("div",{className:k},d["default"].createElement("div",{className:t+"-content"},d["default"].createElement("span",{className:r}),i&&d["default"].createElement("span",{className:t+"-toast"},i))):d["default"].createElement("div",{className:k},d["default"].createElement("span",{className:r}),i&&d["default"].createElement("span",{className:t+"-tip"},i)):null},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-activity-indicator",animating:!0,size:"small",color:"gray",panelColor:"rgba(34,34,34,0.6)",toast:!1},n.exports=a["default"]},725:function(n,a,s){"use strict";s(11),s(1108)},833:function(n,a,s){n.exports={basic:s(607)}},1108:function(n,a){}});