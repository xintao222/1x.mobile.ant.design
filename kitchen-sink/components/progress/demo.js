webpackJsonp([38,88],{27:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){return"string"==typeof n}function e(n){return p(n.type)&&S(n.props.children)?v["default"].cloneElement(n,{},n.props.children.split("").join(" ")):p(n)?(S(n)&&(n=n.split("").join(" ")),v["default"].createElement("span",null,n)):n}Object.defineProperty(s,"__esModule",{value:!0});var o=a(10),c=t(o),l=a(4),u=t(l),i=a(33),r=t(i),k=a(5),d=t(k),f=a(7),m=t(f),g=a(6),h=t(g),y=a(1),v=t(y),b=a(3),w=t(b),x=a(13),E=t(x),C=a(17),N=t(C),P=a(34),j=t(P),M=a(43),_=t(M),T=/^[\u4e00-\u9fa5]{2}$/,S=T.test.bind(T),z=function(n){function s(){return(0,d["default"])(this,s),(0,m["default"])(this,n.apply(this,arguments))}return(0,h["default"])(s,n),s.prototype.render=function(){var n,s=(0,j["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","touchFeedback","activeStyle"]),a=(0,r["default"])(s,2),t=a[0],p=t.children,o=t.className,l=t.prefixCls,i=t.type,k=t.size,d=t.inline,f=t.across,m=t.disabled,g=t.icon,h=t.loading,y=t.touchFeedback,b=t.activeStyle,x=a[1],C=(n={},(0,u["default"])(n,o,o),(0,u["default"])(n,l,!0),(0,u["default"])(n,l+"-primary","primary"===i),(0,u["default"])(n,l+"-ghost","ghost"===i),(0,u["default"])(n,l+"-warning","warning"===i),(0,u["default"])(n,l+"-small","small"===k),(0,u["default"])(n,l+"-inline",d),(0,u["default"])(n,l+"-across",f),(0,u["default"])(n,l+"-disabled",m),(0,u["default"])(n,l+"-loading",h),n),P=(0,E["default"])({},this.props.style);y&&(P=(0,E["default"])(P,b),C[l+"-active"]=!0);var M=h?"loading":g,_=v["default"].Children.map(p,e);return M&&(C[l+"-icon"]=!0),v["default"].createElement("a",(0,c["default"])({},x,{role:"button",style:P,className:(0,w["default"])(C),disabled:m}),M?v["default"].createElement(N["default"],{type:M}):null,_)},s}(v["default"].Component);z.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1},s["default"]=(0,_["default"])(z),n.exports=s["default"]},28:function(n,s,a){"use strict";a(11),a(18),a(37)},37:function(n,s){},671:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(28),a(27)),e=t(p),o=(a(754),a(753)),c=t(o),l=a(1),u=t(l),i=a(2);t(i);n.exports={content:[["p","\u57fa\u672c\u529f\u80fd\u5c55\u793a"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/progress/demo/basic.md",id:"components-progress-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Progress<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> MyProgress <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      percent<span class="token punctuation" >:</span> <span class="token number" >50</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >add</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> p <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >+</span> <span class="token number" >10</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >>=</span> <span class="token number" >100</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      p <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> percent<span class="token punctuation" >:</span> p <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> percent <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>progress-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >30</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fixed<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >36</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >40</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>normal<span class="token punctuation" >"</span></span> <span class="token attr-name" >unfilled</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>hide<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>show-info<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>progress<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>normal<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>percent<span class="token punctuation" >}</span><span class="token operator" >%</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >inline</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginTop<span class="token punctuation" >:</span> <span class="token number" >20</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>add<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >(</span><span class="token operator" >+</span><span class="token operator" >-</span><span class="token punctuation" >)</span><span class="token number" >10</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>MyProgress</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"MyProgress",getInitialState:function(){return{percent:50}},add:function(){var n=this.state.percent+10;this.state.percent>=100&&(n=0),this.setState({percent:n})},render:function(){var n=this.state.percent;return u["default"].createElement("div",{className:"progress-container"},u["default"].createElement(c["default"],{percent:30,position:"fixed"}),u["default"].createElement("div",{style:{height:36}}),u["default"].createElement(c["default"],{percent:40,position:"normal",unfilled:"hide"}),u["default"].createElement("div",{className:"show-info"},u["default"].createElement("div",{className:"progress"},u["default"].createElement(c["default"],{percent:n,position:"normal"})),u["default"].createElement("div",null,n,"%")),u["default"].createElement(e["default"],{inline:!0,style:{marginTop:20},onClick:this.add},"(+-)10"))}});return u["default"].createElement(n,null)},style:".show-info {\n  margin-top: 0.36rem;\n  display: flex;\n  align-items: center;\n}\n.show-info .progress {\n  margin-right: 0.1rem;\n  width: 100%;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.show-info</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-top</span><span class="token punctuation" >:</span> <span class="token number" >0.36</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> flex<span class="token punctuation" >;</span>\n  <span class="token property" >align-items</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.show-info</span> <span class="token class" >.progress</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >0.1</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >100%</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},753:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var p=a(4),e=t(p),o=a(5),c=t(o),l=a(7),u=t(l),i=a(6),r=t(i),k=a(1),d=t(k),f=a(3),m=t(f),g=a(13),h=t(g),y=function(n){function s(){return(0,c["default"])(this,s),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(s,n),s.prototype.componentWillReceiveProps=function(){this.noAppearTransition=!0},s.prototype.componentDidMount=function(){var n=this;this.props.appearTransition&&setTimeout(function(){n.refs.bar.style.width=n.props.percent+"%"},10)},s.prototype.render=function(){var n,s=this.props,a=s.prefixCls,t=s.position,p=s.unfilled,o=s.style,c=void 0===o?{}:o,l={width:this.noAppearTransition||!this.props.appearTransition?this.props.percent+"%":0,height:0},u=(0,m["default"])((n={},(0,e["default"])(n,a+"-outer",!0),(0,e["default"])(n,a+"-fixed-outer","fixed"===t),(0,e["default"])(n,a+"-hide-outer","hide"===p),n));return d["default"].createElement("div",{className:u},d["default"].createElement("div",{ref:"bar",className:a+"-bar",style:(0,h["default"])({},c,l)}))},s}(d["default"].Component);s["default"]=y,y.defaultProps={prefixCls:"am-progress",percent:0,position:"fixed",unfilled:"show",appearTransition:!1},n.exports=s["default"]},754:function(n,s,a){"use strict";a(11),a(1122)},858:function(n,s,a){n.exports={basic:a(671)}},1122:function(n,s){}});