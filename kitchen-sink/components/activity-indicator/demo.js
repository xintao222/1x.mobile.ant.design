webpackJsonp([29,88],{14:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(4),p=t(e),o=s(5),l=t(o),c=s(7),i=t(c),u=s(6),r=t(u),E=s(1),k=t(E),R=s(3),d=t(R),_=function(n){function a(){return(0,l["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.style,l=a.onClick,c=(0,d["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return k["default"].createElement("div",{className:c,style:o,onClick:l})},a}(k["default"].Component);a["default"]=_,_.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},15:function(n,a,s){"use strict";s(11),s(30)},19:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(4),p=t(e),o=s(5),l=t(o),c=s(7),i=t(c),u=s(6),r=t(u),E=s(1),k=t(E),R=s(3),d=t(R),_=function(n){function a(){return(0,l["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.children,l=a.style,c=(0,d["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return k["default"].createElement("div",{className:c,style:l},o)},a}(k["default"].Component);a["default"]=_,_.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},20:function(n,a,s){"use strict";s(11),s(41)},27:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&y(n.props.children)?h["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(y(n)&&(n=n.split("").join(" ")),h["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(10),l=t(o),c=s(4),i=t(c),u=s(33),r=t(u),E=s(5),k=t(E),R=s(7),d=t(R),_=s(6),S=t(_),f=s(1),h=t(f),m=s(3),N=t(m),g=s(17),P=t(g),T=s(34),O=t(T),D=s(38),v=t(D),A=/^[\u4e00-\u9fa5]{2}$/,y=A.test.bind(A),I=function(n){function a(){return(0,k["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,S["default"])(a,n),a.prototype.render=function(){var n,a=(0,O["default"])(this.props,["children","className","prefixCls","onClick","type","size","inline","across","disabled","icon","loading","activeStyle"]),s=(0,r["default"])(a,2),t=s[0],e=t.children,o=t.className,c=t.prefixCls,u=t.type,E=t.size,k=t.inline,R=t.across,d=t.disabled,_=t.icon,S=t.loading,f=t.activeStyle,m=t.onClick,g=s[1],T=(n={},(0,i["default"])(n,o,o),(0,i["default"])(n,c,!0),(0,i["default"])(n,c+"-primary","primary"===u),(0,i["default"])(n,c+"-ghost","ghost"===u),(0,i["default"])(n,c+"-warning","warning"===u),(0,i["default"])(n,c+"-small","small"===E),(0,i["default"])(n,c+"-inline",k),(0,i["default"])(n,c+"-across",R),(0,i["default"])(n,c+"-disabled",d),(0,i["default"])(n,c+"-loading",S),n),D=this.props.style,A=S?"loading":_,y=h["default"].Children.map(e,p);return A&&(T[c+"-icon"]=!0),h["default"].createElement(v["default"],{onPress:m,activeClassName:c+"-active",disabled:d,activeStyle:f},h["default"].createElement("a",(0,l["default"])({},g,{role:"button",style:D,className:(0,N["default"])(T),disabled:d}),A?h["default"].createElement(P["default"],{type:A}):null,y))},a}(h["default"].Component);I.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1},a["default"]=I,n.exports=a["default"]},28:function(n,a,s){"use strict";s(11),s(18),s(37)},30:function(n,a){},37:function(n,a){},38:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return Object.keys(n).forEach(function(a){return n[a]=a}),n}function p(n){var a=n.touches,s=n.changedTouches,t=a&&a.length>0,e=s&&s.length>0;return!t&&e?s[0]:t?a[0]:n}function o(n,a){return Object.keys(a).forEach(function(s){var t=a[s];n.addEventListener(s,t,!1)}),function(){Object.keys(a).forEach(function(s){var t=a[s];n.removeEventListener(s,t,!1)})}}Object.defineProperty(a,"__esModule",{value:!0});var l=s(1),c=t(l),i=s(13),u=t(i),r=s(2),E=t(r),k=e({NOT_RESPONDER:null,RESPONDER_INACTIVE_PRESS_IN:null,RESPONDER_INACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_PRESS_IN:null,RESPONDER_ACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_LONG_PRESS_IN:null,RESPONDER_ACTIVE_LONG_PRESS_OUT:null,ERROR:null}),R={RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0},d={RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0},_={RESPONDER_ACTIVE_LONG_PRESS_IN:!0},S=e({DELAY:null,RESPONDER_GRANT:null,RESPONDER_RELEASE:null,RESPONDER_TERMINATED:null,ENTER_PRESS_RECT:null,LEAVE_PRESS_RECT:null,LONG_PRESS_DETECTED:null}),f={NOT_RESPONDER:{DELAY:k.ERROR,RESPONDER_GRANT:k.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:k.ERROR,RESPONDER_TERMINATED:k.ERROR,ENTER_PRESS_RECT:k.ERROR,LEAVE_PRESS_RECT:k.ERROR,LONG_PRESS_DETECTED:k.ERROR},RESPONDER_INACTIVE_PRESS_IN:{DELAY:k.RESPONDER_ACTIVE_PRESS_IN,RESPONDER_GRANT:k.ERROR,RESPONDER_RELEASE:k.NOT_RESPONDER,RESPONDER_TERMINATED:k.NOT_RESPONDER,ENTER_PRESS_RECT:k.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:k.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:k.ERROR},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:k.RESPONDER_ACTIVE_PRESS_OUT,RESPONDER_GRANT:k.ERROR,RESPONDER_RELEASE:k.NOT_RESPONDER,RESPONDER_TERMINATED:k.NOT_RESPONDER,ENTER_PRESS_RECT:k.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:k.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:k.ERROR},RESPONDER_ACTIVE_PRESS_IN:{DELAY:k.ERROR,RESPONDER_GRANT:k.ERROR,RESPONDER_RELEASE:k.NOT_RESPONDER,RESPONDER_TERMINATED:k.NOT_RESPONDER,ENTER_PRESS_RECT:k.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:k.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:k.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:k.ERROR,RESPONDER_GRANT:k.ERROR,RESPONDER_RELEASE:k.NOT_RESPONDER,RESPONDER_TERMINATED:k.NOT_RESPONDER,ENTER_PRESS_RECT:k.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:k.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:k.ERROR},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:k.ERROR,RESPONDER_GRANT:k.ERROR,RESPONDER_RELEASE:k.NOT_RESPONDER,RESPONDER_TERMINATED:k.NOT_RESPONDER,ENTER_PRESS_RECT:k.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:k.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:k.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:k.ERROR,RESPONDER_GRANT:k.ERROR,RESPONDER_RELEASE:k.NOT_RESPONDER,RESPONDER_TERMINATED:k.NOT_RESPONDER,ENTER_PRESS_RECT:k.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:k.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:k.ERROR},error:{DELAY:k.NOT_RESPONDER,RESPONDER_GRANT:k.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:k.NOT_RESPONDER,RESPONDER_TERMINATED:k.NOT_RESPONDER,ENTER_PRESS_RECT:k.NOT_RESPONDER,LEAVE_PRESS_RECT:k.NOT_RESPONDER,LONG_PRESS_DETECTED:k.NOT_RESPONDER}},h=130,m=20,N=500,g=N-h,P=10,T=c["default"].createClass({displayName:"Touchable",getDefaultProps:function(){return{disabled:!1,delayPressIn:h,delayLongPress:g,delayPressOut:100,pressRetentionOffset:{left:m,right:m,top:m,bottom:m},hitSlop:void 0,longPressCancelsPress:!0}},getInitialState:function(){return{active:!1}},componentWillMount:function(){this.touchable={touchState:void 0}},componentDidMount:function(){var n=this;"ontouchstart"in window?this.eventsToBeBinded={touchstart:this.touchableHandleResponderGrant,touchmove:this.touchableHandleResponderMove,touchend:this.touchableHandleResponderRelease,touchcancel:this.touchableHandleResponderTerminate}:!function(){var a=function s(a){document.removeEventListener("mousemove",n.touchableHandleResponderMove,!1),document.removeEventListener("mouseup",s,!1),n.touchableHandleResponderRelease(a)};n.eventsToBeBinded={mousedown:function(s){n.touchableHandleResponderGrant(s),document.addEventListener("mousemove",n.touchableHandleResponderMove,!1),document.addEventListener("mouseup",a,!1)}}}(),this.bindEvents()},componentDidUpdate:function(){this.bindEvents()},componentWillUnmount:function(){this.eventsReleaseHandle&&(this.eventsReleaseHandle(),this.eventsReleaseHandle=null),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout)},bindEvents:function(){var n=E["default"].findDOMNode(this),a=this.props.disabled;a&&this.eventsReleaseHandle?(this.eventsReleaseHandle(),this.eventsReleaseHandle=null):a||this.eventsReleaseHandle||(this.eventsReleaseHandle=o(n,this.eventsToBeBinded))},touchableHandleResponderGrant:function(n){var a=this;this.props.onLongPress&&n.preventDefault&&n.preventDefault(),this.pressOutDelayTimeout&&(clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null),this.touchable.touchState=k.NOT_RESPONDER,this._receiveSignal(S.RESPONDER_GRANT,n);var s=this.props.delayPressIn;s?this.touchableDelayTimeout=setTimeout(function(){a._handleDelay(n)},s):this._handleDelay(n);var t=this.props.delayLongPress;this.longPressDelayTimeout=setTimeout(function(){a._handleLongDelay(n)},t+s)},touchableHandleResponderRelease:function(n){this._receiveSignal(S.RESPONDER_RELEASE,n)},touchableHandleResponderTerminate:function(n){this._receiveSignal(S.RESPONDER_TERMINATED,n)},touchableHandleResponderMove:function(n){if(this.touchable.touchState!==k.RESPONDER_INACTIVE_PRESS_IN&&this.touchable.positionOnActivate){var a=this.touchable.positionOnActivate,s=this.touchable.dimensionsOnActivate,t=this.props,e=t.pressRetentionOffset,o=t.hitSlop,l=e.left,c=e.top,i=e.right,u=e.bottom;o&&(l+=o.left,c+=o.top,i+=o.right,u+=o.bottom);var r=p(n),E=r&&r.pageX,R=r&&r.pageY;if(this.pressInLocation){var d=this._getDistanceBetweenPoints(E,R,this.pressInLocation.pageX,this.pressInLocation.pageY);d>P&&this._cancelLongPressDelayTimeout()}var _=E>a.left-l&&R>a.top-c&&E<a.left+s.width+i&&R<a.top+s.height+u;if(_){this._receiveSignal(S.ENTER_PRESS_RECT,n);var f=this.touchable.touchState;f===k.RESPONDER_INACTIVE_PRESS_IN&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(S.LEAVE_PRESS_RECT,n)}},touchableHandleActivePressIn:function(n){this.setActive(!0),this.props.onPressIn&&this.props.onPressIn(n)},touchableHandleActivePressOut:function(n){this.setActive(!1),this.props.onPressOut&&this.props.onPressOut(n)},touchableHandlePress:function(n){this.props.onPress&&this.props.onPress(n)},touchableHandleLongPress:function(n){this.props.onLongPress&&this.props.onLongPress(n)},setActive:function(n){(this.props.activeClassName||this.props.activeStyle)&&this.setState({active:n})},_remeasureMetricsOnActivation:function(){var n=E["default"].findDOMNode(this),a=n.getBoundingClientRect();this.touchable.positionOnActivate={left:a.left+window.pageXOffset,top:a.top+window.pageYOffset},this.touchable.dimensionsOnActivate={width:a.width,height:a.height}},_handleDelay:function(n){this.touchableDelayTimeout=null,this._receiveSignal(S.DELAY,n)},_handleLongDelay:function(n){this.longPressDelayTimeout=null;var a=this.touchable.touchState;a!==k.RESPONDER_ACTIVE_PRESS_IN&&a!==k.RESPONDER_ACTIVE_LONG_PRESS_IN?console.error("Attempted to transition from state `"+a+"` to `"+k.RESPONDER_ACTIVE_LONG_PRESS_IN+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(S.LONG_PRESS_DETECTED,n)},_receiveSignal:function(n,a){var s=this.touchable.touchState,t=f[s]&&f[s][n];if(!t)throw new Error("Unrecognized signal `"+n+"` or state `"+s+"` for Touchable responder ``");if(t===k.ERROR)throw new Error("Touchable cannot transition from `"+s+"` to `"+n+"` for responder ``");s!==t&&(this._performSideEffectsForTransition(s,t,n,a),this.touchable.touchState=t)},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&(clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null)},_isHighlight:function(n){return n===k.RESPONDER_ACTIVE_PRESS_IN||n===k.RESPONDER_ACTIVE_LONG_PRESS_IN},_savePressInLocation:function(n){var a=p(n),s=a&&a.pageX,t=a&&a.pageY;this.pressInLocation={pageX:s,pageY:t}},_getDistanceBetweenPoints:function(n,a,s,t){var e=n-s,p=a-t;return Math.sqrt(e*e+p*p)},_performSideEffectsForTransition:function(n,a,s,t){var e=this._isHighlight(n),p=this._isHighlight(a),o=s===S.RESPONDER_TERMINATED||s===S.RESPONDER_RELEASE;if(o&&this._cancelLongPressDelayTimeout(),!R[n]&&R[a]&&this._remeasureMetricsOnActivation(),d[n]&&s===S.LONG_PRESS_DETECTED&&this.touchableHandleLongPress(t),p&&!e?this._startHighlight(t):!p&&e&&this._endHighlight(t),d[n]&&s===S.RESPONDER_RELEASE){var l=!!this.props.onLongPress,c=_[n]&&(!l||!this.props.longPressCancelsPress),i=!_[n]||c;i&&(p||e||(this._startHighlight(t),this._endHighlight(t)),this.touchableHandlePress(t))}this.touchableDelayTimeout&&(clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null)},_startHighlight:function(n){this._savePressInLocation(n),this.touchableHandleActivePressIn(n)},_endHighlight:function(n){var a=this;this.props.delayPressOut?this.pressOutDelayTimeout=setTimeout(function(){a.touchableHandleActivePressOut(n)},this.props.delayPressOut):this.touchableHandleActivePressOut(n)},render:function(){var n=c["default"].Children.only(this.props.children);if(this.state.active){var a=n.props.style,s=n.props.className,t=this.props,e=t.activeStyle,p=t.activeClassName;return e&&(a=(0,u["default"])({},a,e)),p&&(s?s+=" "+p:s=p),c["default"].cloneElement(n,{className:s,style:a})}return n}});a["default"]=T,n.exports=a["default"]},41:function(n,a){},611:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(20),s(19)),p=t(e),o=(s(28),s(27)),l=t(o),c=(s(729),s(728)),i=t(c),u=(s(15),s(14)),r=t(u),E=s(1),k=t(E),R=s(2);t(R);n.exports={content:[["p","\u57fa\u672c\u7684\u6d3b\u52a8\u6307\u793a\u5668\u3002"]],meta:{order:0,title:"\u57fa\u672c\u7528\u6cd5",filename:"components/activity-indicator/demo/basic.md",id:"components-activity-indicator-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ActivityIndicator<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      animating<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >componentWillUnmount</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >clearTimeout</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>closeTimer<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >showToast</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> animating<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>animating <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>closeTimer <span class="token operator" >=</span> <span class="token function" >setTimeout</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> animating<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>animating <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token number" >90000</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>icon\u65e0\u6587\u6848<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span> <span class="token attr-name" >animating</span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>icon\u5e26\u6587\u6848<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name" >text</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u52a0\u8f7d\u4e2d...<span class="token punctuation" >"</span></span>\n              <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5927\u53f7icon<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>align<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginTop<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u52a0\u8f7d\u4e2d<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>showToast<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u70b9\u51fb\u663e\u793a Toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>toast-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name" >toast</span>\n                <span class="token attr-name" >text</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6b63\u5728\u52a0\u8f7d<span class="token punctuation" >"</span></span>\n                <span class="token attr-name" >animating</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>animating<span class="token punctuation" >}</span></span>\n              <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=k["default"].createClass({displayName:"App",getInitialState:function(){return{animating:!1}},componentWillUnmount:function(){clearTimeout(this.closeTimer)},showToast:function(){var n=this;this.setState({animating:!this.state.animating}),this.closeTimer=setTimeout(function(){n.setState({animating:!n.state.animating})},9e4)},render:function(){return k["default"].createElement("div",null,k["default"].createElement(p["default"],null,k["default"].createElement("div",{className:"loading-container"},k["default"].createElement(r["default"],{size:"xl"}),k["default"].createElement("div",{className:"loading-example"},k["default"].createElement("p",{className:"title"},"icon\u65e0\u6587\u6848"),k["default"].createElement(i["default"],{animating:!0})),k["default"].createElement(r["default"],{size:"xl"}),k["default"].createElement("div",{className:"loading-example"},k["default"].createElement("p",{className:"title"},"icon\u5e26\u6587\u6848"),k["default"].createElement(i["default"],{text:"\u52a0\u8f7d\u4e2d..."})),k["default"].createElement(r["default"],{size:"xl"}),k["default"].createElement("div",{className:"loading-example"},k["default"].createElement("p",{className:"title"},"\u5927\u53f7icon"),k["default"].createElement("div",{className:"align"},k["default"].createElement(i["default"],{size:"large"}),k["default"].createElement("span",{style:{marginTop:8}},"\u52a0\u8f7d\u4e2d"))),k["default"].createElement(r["default"],{size:"xl"}),k["default"].createElement(l["default"],{onClick:this.showToast},"\u70b9\u51fb\u663e\u793a Toast"),k["default"].createElement("div",{className:"toast-example"},k["default"].createElement(i["default"],{toast:!0,text:"\u6b63\u5728\u52a0\u8f7d",animating:this.state.animating})))))}});return k["default"].createElement(n,null)},style:".title {\n  font-size: 0.28rem;\n  color: #888;\n  font-weight: 300;\n  width: 25%;\n}\n.loading-example {\n  display: flex;\n  margin-left: 0.2rem;\n  margin-right: 0.2rem;\n}\n.align {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.loading-example .title {\n  margin-right: 0.2rem;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >0.28</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#888</span><span class="token punctuation" >;</span>\n  <span class="token property" >font-weight</span><span class="token punctuation" >:</span> <span class="token number" >300</span><span class="token punctuation" >;</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >25%</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.loading-example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> flex<span class="token punctuation" >;</span>\n  <span class="token property" >margin-left</span><span class="token punctuation" >:</span> <span class="token number" >0.2</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >0.2</span>rem<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.align</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> flex<span class="token punctuation" >;</span>\n  <span class="token property" >flex-direction</span><span class="token punctuation" >:</span> column<span class="token punctuation" >;</span>\n  <span class="token property" >align-items</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.loading-example</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >0.2</span>rem<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'
}},728:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(4),p=t(e),o=s(5),l=t(o),c=s(7),i=t(c),u=s(6),r=t(u),E=s(1),k=t(E),R=s(3),d=t(R),_=function(n){function a(){return(0,l["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.prefixCls,e=s.className,o=s.animating,l=s.toast,c=s.size,i=s.color,u=s.text,r=(0,d["default"])((n={},(0,p["default"])(n,""+t,!0),(0,p["default"])(n,t+"-lg","large"===c),(0,p["default"])(n,t+"-sm","small"===c),(0,p["default"])(n,e,!!e),(0,p["default"])(n,t+"-toast",!!l),n)),E=(0,d["default"])((a={},(0,p["default"])(a,t+"-spinner",!0),(0,p["default"])(a,t+"-spinner-lg",!!l||"large"===c),(0,p["default"])(a,t+"-spinner-white",!!l||"white"===i),a));return o?l?k["default"].createElement("div",{className:r},k["default"].createElement("div",{className:t+"-content"},k["default"].createElement("span",{className:E}),u&&k["default"].createElement("span",{className:t+"-toast"},u))):k["default"].createElement("div",{className:r},k["default"].createElement("span",{className:E}),u&&k["default"].createElement("span",{className:t+"-tip"},u)):null},a}(k["default"].Component);a["default"]=_,_.defaultProps={prefixCls:"am-activity-indicator",animating:!0,size:"small",color:"gray",panelColor:"rgba(34,34,34,0.6)",toast:!1},n.exports=a["default"]},729:function(n,a,s){"use strict";s(11),s(1112)},837:function(n,a,s){n.exports={basic:s(611)}},1112:function(n,a){}});