webpackJsonp([43,90],{273:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(4),e=t(p),o=s(5),c=t(o),l=s(7),u=t(l),k=s(6),i=t(k),r=s(1),g=t(r),d=s(3),m=t(d),f=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,i["default"])(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.text,p=s.prefixCls,o=s.overflowCount,c=s.className,l=s.style,u=s.children,k=s.hot,i=this.props.dot,r=this.props.size,d=this.props.corner;t=t>o?o+"+":t,i&&(t="");var f=!(t&&"0"!==t||i),b=(0,m["default"])((n={},(0,e["default"])(n,p+"-dot",i),(0,e["default"])(n,p+"-dot-large",i&&"large"===r),(0,e["default"])(n,p+"-text",!i&&!d),(0,e["default"])(n,p+"-corner",d),(0,e["default"])(n,p+"-corner-large",d&&"large"===r),n)),h=(0,m["default"])((a={},(0,e["default"])(a,c,!!c),(0,e["default"])(a,p,!0),(0,e["default"])(a,p+"-not-a-wrapper",!u),(0,e["default"])(a,p+"-corner-wrapper",d),(0,e["default"])(a,p+"-hot",!!k),(0,e["default"])(a,p+"-corner-wrapper-large",d&&"large"===r),a));return g["default"].createElement("span",{className:h,title:t},u,!f&&g["default"].createElement("sup",{className:b,style:l},t))},a}(g["default"].Component);a["default"]=f,f.defaultProps={prefixCls:"am-badge",text:null,dot:!1,corner:!1,overflowCount:99,size:null},n.exports=a["default"]},274:function(n,a,s){"use strict";s(10),s(344)},344:function(n,a){},520:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(20),s(27)),e=t(p),o=(s(274),s(273)),c=t(o),l=s(1),u=t(l),k=s(2);t(k);n.exports={content:[["p","\u7ed3\u5408\u5217\u8868\u7684\u6848\u4f8b\u53c2\u8003"]],meta:{order:4,title:"\u7efc\u5408\u793a\u4f8b",filename:"components/badge/demo/basic.md",id:"components-badge-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'0.52rem\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">\'0.52rem\'</span><span class="token punctuation">,</span> background<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span><span class="token punctuation">,</span> display<span class="token punctuation">:</span> <span class="token string">\'inline-block\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5c0f\u5706\u70b9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n      <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png<span class="token punctuation">"</span></span>\n      <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Badge text<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">77</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      arrow<span class="token operator">=</span><span class="token string">"horizontal"</span>\n    <span class="token operator">></span>\n      \u6587\u672c\u5185\u5bb9\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>special-badge<span class="token punctuation">"</span></span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Badge text<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'\u4fc3\'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n      \u6587\u672c\u5185\u5bb9\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      \u6587\u672c\u5185\u5bb9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'new\'</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n      \u8425\u9500\uff1a\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u51cf<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u60e0<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u514d<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u53cd<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>HOT<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n      \u81ea\u5b9a\u4e49\uff1a\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5238<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 0.06rem\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#f19736\'</span><span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>NEW<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 0.06rem\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#21b68a\'</span><span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u81ea\u52a8\u7f34\u8d39<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n        padding<span class="token punctuation">:</span> <span class="token string">\'0 0.06rem\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n        borderRadius<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'#f19736\'</span><span class="token punctuation">,</span>\n        border<span class="token punctuation">:</span> <span class="token string">\'1px solid #f19736\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      \u8d85\u51fa<span class="token number">99</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){return u["default"].createElement(e["default"],{renderHeader:function(){return""}},u["default"].createElement(e["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal"},u["default"].createElement(c["default"],{dot:!0},u["default"].createElement("span",{style:{width:"0.52rem",height:"0.52rem",background:"#ddd",display:"inline-block"}})),u["default"].createElement("span",{style:{marginLeft:12}},"\u5c0f\u5706\u70b9")),u["default"].createElement(e["default"].Item,{thumb:"https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png",extra:u["default"].createElement(c["default"],{text:77}),arrow:"horizontal"},"\u6587\u672c\u5185\u5bb9"),u["default"].createElement(e["default"].Item,{className:"special-badge",extra:u["default"].createElement(c["default"],{text:"\u4fc3"})},"\u6587\u672c\u5185\u5bb9"),u["default"].createElement(e["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal"},"\u6587\u672c\u5185\u5bb9",u["default"].createElement(c["default"],{text:"new",style:{marginLeft:12}})),u["default"].createElement(e["default"].Item,null,"\u8425\u9500\uff1a",u["default"].createElement(c["default"],{text:"\u51cf",hot:!0,style:{marginLeft:12}}),u["default"].createElement(c["default"],{text:"\u60e0",hot:!0,style:{marginLeft:12}}),u["default"].createElement(c["default"],{text:"\u514d",hot:!0,style:{marginLeft:12}}),u["default"].createElement(c["default"],{text:"\u53cd",hot:!0,style:{marginLeft:12}}),u["default"].createElement(c["default"],{text:"HOT",hot:!0,style:{marginLeft:12}})),u["default"].createElement(e["default"].Item,null,"\u81ea\u5b9a\u4e49\uff1a",u["default"].createElement(c["default"],{text:4,style:{marginLeft:12}}),u["default"].createElement(c["default"],{text:"\u5238",style:{marginLeft:12,padding:"0 0.06rem",backgroundColor:"#f19736",borderRadius:2}}),u["default"].createElement(c["default"],{text:"NEW",style:{marginLeft:12,padding:"0 0.06rem",backgroundColor:"#21b68a",borderRadius:2}}),u["default"].createElement(c["default"],{text:"\u81ea\u52a8\u7f34\u8d39",style:{marginLeft:12,padding:"0 0.06rem",backgroundColor:"#fff",borderRadius:2,color:"#f19736",border:"1px solid #f19736"}})),u["default"].createElement(e["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal"},"\u8d85\u51fa99",u["default"].createElement(c["default"],{text:100,style:{marginLeft:12}})))},style:".special-badge .am-list-line {\n  padding-right: 0;\n}\n.special-badge .am-list-line .am-list-extra {\n  padding: 0;\n  height: 100%;\n}\n.special-badge .am-badge {\n  transform: rotate(45deg);\n  transform-origin: right bottom;\n  right: 0;\n  top: 0.26rem;\n  width: 1rem;\n}\n.special-badge .am-badge-text {\n  border-radius: 0.02rem;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.special-badge</span> <span class="token class">.am-list-line</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.special-badge</span> <span class="token class">.am-list-line</span> <span class="token class">.am-list-extra</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.special-badge</span> <span class="token class">.am-badge</span> </span><span class="token punctuation">{</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">45</span>deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transform-origin</span><span class="token punctuation">:</span> right bottom<span class="token punctuation">;</span>\n  <span class="token property">right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">0.26</span>rem<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">1</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.special-badge</span> <span class="token class">.am-badge-text</span> </span><span class="token punctuation">{</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">0.02</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},763:function(n,a,s){n.exports={basic:s(520)}}});