webpackJsonp([35,88],{81:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(84),p=s(e),o=t(85),c=s(o);p["default"].Item=c["default"],a["default"]=p["default"],n.exports=a["default"]},82:function(n,a,t){"use strict";t(12),t(89)},84:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(5),p=s(e),o=t(6),c=s(o),u=t(8),l=s(u),r=t(7),i=s(r),d=t(1),f=s(d),k=t(4),m=s(k),g=function(n){function a(){return(0,c["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,i["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.direction,s=a.wrap,e=a.justify,o=a.align,c=a.alignContent,u=a.className,l=a.children,r=a.prefixCls,i=a.style,d=a.onClick,k=(0,m["default"])((n={},(0,p["default"])(n,r,!0),(0,p["default"])(n,r+"-dir-row","row"===t),(0,p["default"])(n,r+"-dir-row-reverse","row-reverse"===t),(0,p["default"])(n,r+"-dir-column","column"===t),(0,p["default"])(n,r+"-dir-column-reverse","column-reverse"===t),(0,p["default"])(n,r+"-nowrap","nowrap"===s),(0,p["default"])(n,r+"-wrap","wrap"===s),(0,p["default"])(n,r+"-wrap-reverse","wrap-reverse"===s),(0,p["default"])(n,r+"-justify-start","start"===e),(0,p["default"])(n,r+"-justify-end","end"===e),(0,p["default"])(n,r+"-justify-center","center"===e),(0,p["default"])(n,r+"-justify-between","between"===e),(0,p["default"])(n,r+"-justify-around","around"===e),(0,p["default"])(n,r+"-align-top","top"===o||"start"===o),(0,p["default"])(n,r+"-align-middle","middle"===o||"center"===o),(0,p["default"])(n,r+"-align-bottom","bottom"===o||"end"===o),(0,p["default"])(n,r+"-align-baseline","baseline"===o),(0,p["default"])(n,r+"-align-stretch","stretch"===o),(0,p["default"])(n,r+"-align-content-start","start"===c),(0,p["default"])(n,r+"-align-content-end","end"===c),(0,p["default"])(n,r+"-align-content-center","center"===c),(0,p["default"])(n,r+"-align-content-between","between"===c),(0,p["default"])(n,r+"-align-content-around","around"===c),(0,p["default"])(n,r+"-align-content-stretch","stretch"===c),(0,p["default"])(n,u,u),n));return f["default"].createElement("div",{className:k,style:i,onClick:d},l)},a}(f["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=a["default"]},85:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(5),p=s(e),o=t(6),c=s(o),u=t(8),l=s(u),r=t(7),i=s(r),d=t(1),f=s(d),k=t(4),m=s(k),g=function(n){function a(){return(0,c["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,i["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.children,s=a.className,e=a.prefixCls,o=a.style,c=a.onClick,u=(0,m["default"])((n={},(0,p["default"])(n,e+"-item",!0),(0,p["default"])(n,s,s),n));return f["default"].createElement("div",{className:u,style:o,onClick:c},t)},a}(f["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},89:function(n,a){},105:function(n,a,t){"use strict";var s=t(15);n.exports=function(n,a){for(var t=s({},n),e=0;e<a.length;e++){var p=a[e];delete t[p]}return t}},161:function(n,a,t){"use strict";var s=t(204);n.exports=function(n,a,t,e){var p=t?t.call(e,n,a):void 0;if(void 0!==p)return!!p;if(n===a)return!0;if("object"!=typeof n||null===n||"object"!=typeof a||null===a)return!1;var o=s(n),c=s(a),u=o.length;if(u!==c.length)return!1;e=e||null;for(var l=Object.prototype.hasOwnProperty.bind(a),r=0;r<u;r++){var i=o[r];if(!l(i))return!1;var d=n[i],f=a[i],k=t?t.call(e,d,f,i):void 0;if(k===!1||void 0===k&&d!==f)return!1}return!0}},201:function(n,a){function t(n){return!!n&&"object"==typeof n}function s(n,a){var t=null==n?void 0:n[a];return o(t)?t:void 0}function e(n){return p(n)&&d.call(n)==c}function p(n){var a=typeof n;return!!n&&("object"==a||"function"==a)}function o(n){return null!=n&&(e(n)?f.test(r.call(n)):t(n)&&u.test(n))}var c="[object Function]",u=/^\[object .+?Constructor\]$/,l=Object.prototype,r=Function.prototype.toString,i=l.hasOwnProperty,d=l.toString,f=RegExp("^"+r.call(i).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=s},202:function(n,a){function t(n){return e(n)&&k.call(n,"callee")&&(!g.call(n,"callee")||m.call(n)==r)}function s(n){return null!=n&&o(n.length)&&!p(n)}function e(n){return u(n)&&s(n)}function p(n){var a=c(n)?m.call(n):"";return a==i||a==d}function o(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=l}function c(n){var a=typeof n;return!!n&&("object"==a||"function"==a)}function u(n){return!!n&&"object"==typeof n}var l=9007199254740991,r="[object Arguments]",i="[object Function]",d="[object GeneratorFunction]",f=Object.prototype,k=f.hasOwnProperty,m=f.toString,g=f.propertyIsEnumerable;n.exports=t},203:function(n,a){function t(n){return!!n&&"object"==typeof n}function s(n,a){var t=null==n?void 0:n[a];return c(t)?t:void 0}function e(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=y}function p(n){return o(n)&&k.call(n)==l}function o(n){var a=typeof n;return!!n&&("object"==a||"function"==a)}function c(n){return null!=n&&(p(n)?m.test(d.call(n)):t(n)&&r.test(n))}var u="[object Array]",l="[object Function]",r=/^\[object .+?Constructor\]$/,i=Object.prototype,d=Function.prototype.toString,f=i.hasOwnProperty,k=i.toString,m=RegExp("^"+d.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),g=s(Array,"isArray"),y=9007199254740991,h=g||function(n){return t(n)&&e(n.length)&&k.call(n)==u};n.exports=h},204:function(n,a,t){function s(n){return function(a){return null==a?void 0:a[n]}}function e(n){return null!=n&&o(h(n))}function p(n,a){return n="number"==typeof n||f.test(n)?+n:-1,a=null==a?y:a,n>-1&&n%1==0&&n<a}function o(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=y}function c(n){for(var a=l(n),t=a.length,s=t&&n.length,e=!!s&&o(s)&&(d(n)||i(n)),c=-1,u=[];++c<t;){var r=a[c];(e&&p(r,s)||m.call(n,r))&&u.push(r)}return u}function u(n){var a=typeof n;return!!n&&("object"==a||"function"==a)}function l(n){if(null==n)return[];u(n)||(n=Object(n));var a=n.length;a=a&&o(a)&&(d(n)||i(n))&&a||0;for(var t=n.constructor,s=-1,e="function"==typeof t&&t.prototype===n,c=Array(a),l=a>0;++s<a;)c[s]=s+"";for(var r in n)l&&p(r,a)||"constructor"==r&&(e||!m.call(n,r))||c.push(r);return c}var r=t(201),i=t(202),d=t(203),f=/^\d+$/,k=Object.prototype,m=k.hasOwnProperty,g=r(Object,"keys"),y=9007199254740991,h=s("length"),v=g?function(n){var a=null==n?void 0:n.constructor;return"function"==typeof a&&a.prototype===n||"function"!=typeof n&&e(n)?c(n):u(n)?g(n):[]}:c;n.exports=v},262:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function p(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function o(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function c(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):e(n,a))}Object.defineProperty(a,"__esModule",{value:!0});var l=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},r=t(1),i=s(r),d=t(281),f=s(d),k=t(4),m=s(k),g=function(n){function a(t){o(this,a);var s=c(this,n.call(this,t));s.handleFocus=function(n){s.setState({focus:!0}),s.props.onFocus(n)},s.handleBlur=function(n){s.setState({focus:!1}),s.props.onBlur(n)},s.handleChange=function(n){"checked"in s.props||s.setState({checked:n.target.checked}),s.props.onChange({target:l({},s.props,{checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()}})};var e=!1;return e="checked"in t?t.checked:t.defaultChecked,s.state={checked:e,focus:!1},s}return u(a,n),a.prototype.componentWillReceiveProps=function(n){"checked"in n&&this.setState({checked:n.checked})},a.prototype.shouldComponentUpdate=function(){for(var n=arguments.length,a=Array(n),t=0;t<n;t++)a[t]=arguments[t];return f["default"].shouldComponentUpdate.apply(this,a)},a.prototype.render=function(){var n,a=l({},this.props);delete a.defaultChecked;var t=this.state,s=a.prefixCls,e=t.checked;"boolean"==typeof e&&(e=e?1:0);var o=(0,m["default"])((n={},p(n,a.className,!!a.className),p(n,s,1),p(n,s+"-checked",e),p(n,s+"-checked-"+e,!!e),p(n,s+"-focused",t.focus),p(n,s+"-disabled",a.disabled),n));return i["default"].createElement("span",{className:o,style:a.style},i["default"].createElement("span",{className:s+"-inner"}),i["default"].createElement("input",{name:a.name,type:a.type,readOnly:a.readOnly,disabled:a.disabled,tabIndex:a.tabIndex,className:s+"-input",checked:!!e,onClick:this.props.onClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:this.handleChange}))},a}(i["default"].Component);g.propTypes={name:i["default"].PropTypes.string,prefixCls:i["default"].PropTypes.string,style:i["default"].PropTypes.object,type:i["default"].PropTypes.string,className:i["default"].PropTypes.string,defaultChecked:i["default"].PropTypes.oneOfType([i["default"].PropTypes.number,i["default"].PropTypes.bool]),checked:i["default"].PropTypes.oneOfType([i["default"].PropTypes.number,i["default"].PropTypes.bool]),onFocus:i["default"].PropTypes.func,onBlur:i["default"].PropTypes.func,onChange:i["default"].PropTypes.func,onClick:i["default"].PropTypes.func},g.defaultProps={prefixCls:"rc-checkbox",style:{},type:"checkbox",className:"",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},a["default"]=g,n.exports=a["default"]},263:function(n,a,t){"use strict";n.exports=t(262)},281:function(n,a,t){"use strict";function s(n,a,t){return!e(n.props,a)||!e(n.state,t)}var e=t(161),p={shouldComponentUpdate:function(n,a){return s(this,n,a)}};n.exports=p},293:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(10),p=s(e),o=t(5),c=s(o),u=t(6),l=s(u),r=t(8),i=s(r),d=t(7),f=s(d),k=t(1),m=s(k),g=t(263),y=s(g),h=t(105),v=s(h),b=t(4),C=s(b),x=function(n){function a(){return(0,l["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,f["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.className,e=a.style,o=a.children,u=(0,C["default"])((n={},(0,c["default"])(n,s,!!s),(0,c["default"])(n,t+"-wrapper",!0),n)),l=m["default"].createElement("label",{className:u,style:e},m["default"].createElement(y["default"],(0,p["default"])({},(0,v["default"])(this.props,["className","style"]),{type:"radio"})),o?m["default"].createElement("span",null,o):null);return this.props.wrapLabel?l:m["default"].createElement(y["default"],(0,p["default"])({},this.props,{type:"radio"}))},a}(m["default"].Component);a["default"]=x,x.defaultProps={prefixCls:"am-radio",wrapLabel:!0},n.exports=a["default"]},334:function(n,a,t){"use strict";t(12),t(64),t(401)},401:function(n,a){},698:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(82),t(81)),p=s(e),o=(t(64),t(70)),c=s(o),u=(t(334),t(780)),l=s(u),r=t(1),i=s(r),d=t(3);s(d);n.exports={content:[],meta:{order:0,title:"\u793a\u4f8b",filename:"components/radio/demo/basic.md",id:"components-radio-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> List<span class="token punctuation" >,</span> Radio<span class="token punctuation" >,</span> Flex <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> RadioItem <span class="token operator" >=</span> Radio<span class="token punctuation" >.</span>RadioItem<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> value <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n      <span class="token punctuation" >{</span> value<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u535a\u58eb\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >{</span> value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u672c\u79d1\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >{</span> value<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u9ad8\u4e2d\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span> <span class="token attr-name" >renderHeader</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token string" >\'RadioItem \u6f14\u793a\'</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>data<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>i <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioItem</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>i<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span> <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>value <span class="token operator" >===</span> i<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >onChange</span><span class="token punctuation" >(</span>i<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>i<span class="token punctuation" >.</span>label<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioItem</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioItem</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>disabled<span class="token punctuation" >"</span></span> <span class="token attr-name" >data-seed</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>logId<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span> <span class="token attr-name" >defaultChecked</span> <span class="token attr-name" >multipleLine</span><span class="token punctuation" >></span></span>\n          \u521d\u4e2d<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item.Brief</span><span class="token punctuation" >></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item.Brief</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioItem</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'0.3rem\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'0.3rem 0\'</span><span class="token punctuation" >,</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#888\'</span><span class="token punctuation" >,</span> flex<span class="token punctuation" >:</span> <span class="token string" >\'none\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Radio \u6f14\u793a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>my-radio<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u4e00<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>my-radio<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token string" >\'0.1rem\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u4e8c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=l["default"].RadioItem,a=i["default"].createClass({displayName:"Test",getInitialState:function(){return{value:1}},onChange:function(n){this.setState({value:n})},render:function(){var a=this,t=this.state.value,s=[{value:0,label:"\u535a\u58eb"},{value:1,label:"\u672c\u79d1"},{value:2,label:"\u9ad8\u4e2d"}];return i["default"].createElement("div",null,i["default"].createElement(c["default"],{renderHeader:function(){return"RadioItem \u6f14\u793a"}},s.map(function(s){return i["default"].createElement(n,{key:s.value,checked:t===s.value,onChange:function(){return a.onChange(s.value)}},s.label)}),i["default"].createElement(n,{key:"disabled","data-seed":"logId",disabled:!0,defaultChecked:!0,multipleLine:!0},"\u521d\u4e2d",i["default"].createElement(c["default"].Item.Brief,null,"\u8f85\u52a9\u6587\u5b57\u5185\u5bb9"))),i["default"].createElement(p["default"],{style:{padding:"0.3rem"}},i["default"].createElement(p["default"].Item,{style:{padding:"0.3rem 0",color:"#888",flex:"none"}},"Radio \u6f14\u793a"),i["default"].createElement(p["default"].Item,null,i["default"].createElement(l["default"],{className:"my-radio"},"\u9009\u9879\u4e00"),i["default"].createElement(l["default"],{className:"my-radio",style:{marginLeft:"0.1rem"}},"\u9009\u9879\u4e8c"))))}});return i["default"].createElement(a,null)},style:".my-radio .am-radio {\n  padding: 0.05rem;\n  border: 1px solid #ccc;\n  border-radius: 0.15rem;\n  margin-right: 0.1rem;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.my-radio</span> <span class="token class" >.am-radio</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >0.05</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >border</span><span class="token punctuation" >:</span> <span class="token number" >1</span>px solid <span class="token hexcode" >#ccc</span><span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >0.15</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >0.1</span>rem<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},779:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(){}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=t(10),o=s(p),c=t(5),u=s(c),l=t(6),r=s(l),i=t(8),d=s(i),f=t(7),k=s(f),m=t(1),g=s(m),y=t(4),h=s(y),v=t(70),b=s(v),C=t(293),x=s(C),j=t(105),w=s(j),P=b["default"].Item,O=function(n){function a(){return(0,r["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this,t=this.props,s=t.prefixCls,p=t.listPrefixCls,c=t.className,l=t.children,r=t.disabled,i=t.radioProps,d=void 0===i?{}:i,f=(0,h["default"])((n={},(0,u["default"])(n,s+"-item",!0),(0,u["default"])(n,s+"-item-disabled",r===!0),(0,u["default"])(n,c,c),n)),k=(0,w["default"])(this.props,["listPrefixCls","disabled","radioProps"]);r?delete k.onClick:k.onClick=k.onClick||e;var m={};return["name","defaultChecked","checked","onChange","disabled"].forEach(function(n){n in a.props&&(m[n]=a.props[n])}),g["default"].createElement(P,(0,o["default"])({},k,{prefixCls:p,className:f,extra:g["default"].createElement(x["default"],(0,o["default"])({},d,m))}),l)},a}(g["default"].Component);a["default"]=O,O.defaultProps={prefixCls:"am-radio",listPrefixCls:"am-list"},n.exports=a["default"]},780:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(293),p=s(e),o=t(779),c=s(o);p["default"].RadioItem=c["default"],a["default"]=p["default"],n.exports=a["default"]},881:function(n,a,t){n.exports={basic:t(698)}}});