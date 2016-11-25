webpackJsonp([8,102],{502:function(n,s){"use strict";n.exports={content:[["p","Popup \u5411\u4e0b\u5f39\u51fa\u6548\u679c"]],meta:{order:0,title:"\u5411\u4e0b\u5f39\u51fa\u6548\u679c",filename:"components/popup/demo/basic.md",id:"components-popup-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Popup<span class="token punctuation" >,</span> List<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token comment" spellcheck="true">// const SelectorDataForPopup = [</span>\n<span class="token comment" spellcheck="true">//   {</span>\n<span class="token comment" spellcheck="true">//     label: \'\u4e2d\u9910\',</span>\n<span class="token comment" spellcheck="true">//     value: \'21\',</span>\n<span class="token comment" spellcheck="true">//   }, {</span>\n<span class="token comment" spellcheck="true">//     label: \'\u8fd8\u6ca1\u751f\u6548\',</span>\n<span class="token comment" spellcheck="true">//     value: \'22\',</span>\n<span class="token comment" spellcheck="true">//     disabled: true,</span>\n<span class="token comment" spellcheck="true">//   }, {</span>\n<span class="token comment" spellcheck="true">//     label: \'\u5173\u95ed\u6d6e\u5c42\',</span>\n<span class="token comment" spellcheck="true">//     value: \'qx\',</span>\n<span class="token comment" spellcheck="true">//   }, {</span>\n<span class="token comment" spellcheck="true">//     label: \'\u81ea\u52a9\u9910\',</span>\n<span class="token comment" spellcheck="true">//     value: \'24\',</span>\n<span class="token comment" spellcheck="true">//   }, {</span>\n<span class="token comment" spellcheck="true">//     label: \'\u5feb\u9910\',</span>\n<span class="token comment" spellcheck="true">//     value: \'25\',</span>\n<span class="token comment" spellcheck="true">//   }, {</span>\n<span class="token comment" spellcheck="true">//     label: \'\u5c0f\u5403\',</span>\n<span class="token comment" spellcheck="true">//     value: \'26\',</span>\n<span class="token comment" spellcheck="true">//   },</span>\n<span class="token comment" spellcheck="true">// ];</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      sel<span class="token punctuation" >:</span> <span class="token string" >\'\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onClick</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    Popup<span class="token punctuation" >.</span><span class="token function" >show</span><span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span>\n        <span class="token attr-name" >renderHeader</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token string" >\'\u8d26\u6237\u603b\u89c8 (\u5df2\u7ed1\u5b9a3\u4e2a\uff09\'</span><span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >onClose</span><span class="token punctuation" >(</span><span class="token string" >\'cancel\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\u4e1c\u5434\u8bc1\u5238 <span class="token punctuation" >(</span><span class="token number" >5728</span>\uff09<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >onClose</span><span class="token punctuation" >(</span><span class="token string" >\'cancel\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\u4e1c\u5434\u8bc1\u5238 <span class="token punctuation" >(</span><span class="token number" >5728</span>\uff09<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >onClose</span><span class="token punctuation" >(</span><span class="token string" >\'opt 1\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\u66f4\u591a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onClose</span><span class="token punctuation" >(</span>sel<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token comment" spellcheck="true">// if (sel === \'opt 1\') {</span>\n    <span class="token comment" spellcheck="true">//   // \u6f14\u793a\u518d\u5f39\u51fa\u5185\u5bb9</span>\n    <span class="token comment" spellcheck="true">//   this.newInstance();</span>\n    <span class="token comment" spellcheck="true">//   return;</span>\n    <span class="token comment" spellcheck="true">// }</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> sel <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    Popup<span class="token punctuation" >.</span><span class="token function" >hide</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token comment" spellcheck="true">// newInstance() {</span>\n  <span class="token comment" spellcheck="true">//   const ins = Popup.newInstance();</span>\n  <span class="token comment" spellcheck="true">//   const hide = (value) => {</span>\n  <span class="token comment" spellcheck="true">//     if (value[0] === \'qx\') {</span>\n  <span class="token comment" spellcheck="true">//       ins.hide();</span>\n  <span class="token comment" spellcheck="true">//     }</span>\n  <span class="token comment" spellcheck="true">//   };</span>\n  <span class="token comment" spellcheck="true">//   ins.show(&lt;Menu</span>\n  <span class="token comment" spellcheck="true">//     level={1}</span>\n  <span class="token comment" spellcheck="true">//     value={[SelectorDataForPopup[0]]}</span>\n  <span class="token comment" spellcheck="true">//     data={SelectorDataForPopup}</span>\n  <span class="token comment" spellcheck="true">//     onChange={hide}</span>\n  <span class="token comment" spellcheck="true">//   />, { maskClosable: true });</span>\n  <span class="token comment" spellcheck="true">// },</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'15px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u663e\u793a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code","import { Popup, List, Button } from 'antd-mobile';\n\n// const SelectorDataForPopup = [\n//   {\n//     label: '\u4e2d\u9910',\n//     value: '21',\n//   }, {\n//     label: '\u8fd8\u6ca1\u751f\u6548',\n//     value: '22',\n//     disabled: true,\n//   }, {\n//     label: '\u5173\u95ed\u6d6e\u5c42',\n//     value: 'qx',\n//   }, {\n//     label: '\u81ea\u52a9\u9910',\n//     value: '24',\n//   }, {\n//     label: '\u5feb\u9910',\n//     value: '25',\n//   }, {\n//     label: '\u5c0f\u5403',\n//     value: '26',\n//   },\n// ];\n\nconst Test = React.createClass({\n  getInitialState() {\n    return {\n      sel: '',\n    };\n  },\n  onClick() {\n    Popup.show(\n      <List\n        renderHeader={() => '\u8d26\u6237\u603b\u89c8 (\u5df2\u7ed1\u5b9a3\u4e2a\uff09'}\n      >\n        <List.Item\n          thumb=\"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png\"\n          onClick={() => { this.onClose('cancel'); }}\n        >\u4e1c\u5434\u8bc1\u5238 (5728\uff09</List.Item>\n        <List.Item\n          thumb=\"https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png\"\n          onClick={() => { this.onClose('cancel'); }}\n        >\u4e1c\u5434\u8bc1\u5238 (5728\uff09</List.Item>\n        <List.Item\n          thumb=\"https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png\"\n          arrow=\"horizontal\"\n          onClick={() => { this.onClose('opt 1'); }}\n        >\u66f4\u591a</List.Item>\n      </List>\n    );\n  },\n  onClose(sel) {\n    // if (sel === 'opt 1') {\n    //   // \u6f14\u793a\u518d\u5f39\u51fa\u5185\u5bb9\n    //   this.newInstance();\n    //   return;\n    // }\n    this.setState({ sel });\n    Popup.hide();\n  },\n  // newInstance() {\n  //   const ins = Popup.newInstance();\n  //   const hide = (value) => {\n  //     if (value[0] === 'qx') {\n  //       ins.hide();\n  //     }\n  //   };\n  //   ins.show(<Menu\n  //     level={1}\n  //     value={[SelectorDataForPopup[0]]}\n  //     data={SelectorDataForPopup}\n  //     onChange={hide}\n  //   />, { maskClosable: true });\n  // },\n  render() {\n    return (<div style={{ padding: '15px' }}>\n      <Button type=\"ghost\" onClick={this.onClick}>\u663e\u793a</Button>\n    </div>);\n  },\n});\n\nReactDOM.render(<Test />, mountNode);"]]}},503:function(n,s){"use strict";n.exports={content:[["p","Popup \u5411\u4e0a\u5f39\u51fa\u6548\u679c"]],meta:{order:1,title:"\u5411\u4e0a\u5f39\u51fa\u6548\u679c",filename:"components/popup/demo/basic1.md",id:"components-popup-demo-basic1"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Popup<span class="token punctuation" >,</span> List<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token comment" spellcheck="true">// fix touch to scroll background page on iOS</span>\n<span class="token comment" spellcheck="true">// https://github.com/ant-design/ant-design-mobile/issues/307</span>\n<span class="token comment" spellcheck="true">// https://github.com/ant-design/ant-design-mobile/issues/163</span>\n<span class="token keyword" >const</span> isIPhone <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >RegExp</span><span class="token punctuation" >(</span><span class="token string" >\'\\\\biPhone\\\\b|\\\\biPod\\\\b\'</span><span class="token punctuation" >,</span> <span class="token string" >\'i\'</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >test</span><span class="token punctuation" >(</span>window<span class="token punctuation" >.</span>navigator<span class="token punctuation" >.</span>userAgent<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token keyword" >let</span> wrapProps<span class="token punctuation" >;</span>\n<span class="token keyword" >if</span> <span class="token punctuation" >(</span>isIPhone<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token comment" spellcheck="true">// Note: the popup content will not scroll.</span>\n  wrapProps <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    <span class="token comment" spellcheck="true">// onTouchStart: e => e.preventDefault(),</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      sel<span class="token punctuation" >:</span> <span class="token string" >\'\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onClick</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    Popup<span class="token punctuation" >.</span><span class="token function" >show</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span> <span class="token attr-name" >renderHeader</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n        <span class="token operator" >&lt;</span>div style<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> position<span class="token punctuation" >:</span> <span class="token string" >\'relative\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          \u59d4\u6258\u4e70\u5165\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span>\n            <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n              position<span class="token punctuation" >:</span> <span class="token string" >\'absolute\'</span><span class="token punctuation" >,</span> right<span class="token punctuation" >:</span> <span class="token number" >3</span><span class="token punctuation" >,</span> top<span class="token punctuation" >:</span> <span class="token operator" >-</span><span class="token number" >5</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >onClose</span><span class="token punctuation" >(</span><span class="token string" >\'cancel\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>cross<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        className<span class="token operator" >=</span><span class="token string" >"popup-list"</span>\n      <span class="token operator" >></span>\n        <span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'\u80a1\u7968\u540d\u79f0\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u80a1\u7968\u4ee3\u7801\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u4e70\u5165\u4ef7\u683c\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u4e70\u5165\u6570\u91cf\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u66f4\u591a\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u66f4\u591a\'</span><span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>i<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>index<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>i<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ul</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'0.18rem 0.3rem\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span>\u6295\u8d44\u8bf4\u660e\u6295\u8d44\u8bf4\u660e<span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginTop<span class="token punctuation" >:</span> <span class="token string" >\'0.18rem\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >onClose</span><span class="token punctuation" >(</span><span class="token string" >\'cancel\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u4e70\u5165<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>ul</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span> animationType<span class="token punctuation" >:</span> <span class="token string" >\'slide-up\'</span><span class="token punctuation" >,</span> wrapProps<span class="token punctuation" >,</span> maskClosable<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onClose</span><span class="token punctuation" >(</span>sel<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> sel <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    Popup<span class="token punctuation" >.</span><span class="token function" >hide</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'15px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u663e\u793a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:["pre",{lang:"__react"},["code","import { Popup, List, Button, Icon } from 'antd-mobile';\n\n// fix touch to scroll background page on iOS\n// https://github.com/ant-design/ant-design-mobile/issues/307\n// https://github.com/ant-design/ant-design-mobile/issues/163\nconst isIPhone = new RegExp('\\\\biPhone\\\\b|\\\\biPod\\\\b', 'i').test(window.navigator.userAgent);\nlet wrapProps;\nif (isIPhone) {\n  // Note: the popup content will not scroll.\n  wrapProps = {\n    // onTouchStart: e => e.preventDefault(),\n  };\n}\n\nconst Test = React.createClass({\n  getInitialState() {\n    return {\n      sel: '',\n    };\n  },\n  onClick() {\n    Popup.show(<div>\n      <List renderHeader={() => (\n        <div style={{ position: 'relative' }}>\n          \u59d4\u6258\u4e70\u5165\n          <span\n            style={{\n              position: 'absolute', right: 3, top: -5,\n            }}\n            onClick={() => this.onClose('cancel')}\n          >\n            <Icon type=\"cross\" />\n          </span>\n        </div>)}\n        className=\"popup-list\"\n      >\n        {['\u80a1\u7968\u540d\u79f0', '\u80a1\u7968\u4ee3\u7801', '\u4e70\u5165\u4ef7\u683c', '\u4e70\u5165\u6570\u91cf', '\u66f4\u591a', '\u66f4\u591a'].map((i, index) => (\n          <List.Item key={index}>{i}</List.Item>\n        ))}\n      </List>\n      <ul style={{ padding: '0.18rem 0.3rem' }}>\n        <li>\u6295\u8d44\u8bf4\u660e\u6295\u8d44\u8bf4\u660e...</li>\n        <li style={{ marginTop: '0.18rem' }}>\n          <Button type=\"primary\" onClick={() => this.onClose('cancel')}>\u4e70\u5165</Button>\n        </li>\n      </ul>\n    </div>, { animationType: 'slide-up', wrapProps, maskClosable: false });\n  },\n  onClose(sel) {\n    this.setState({ sel });\n    Popup.hide();\n  },\n  render() {\n    return (<div style={{ padding: '15px' }}>\n      <Button type=\"ghost\" onClick={this.onClick}>\u663e\u793a</Button>\n    </div>);\n  },\n});\n\nReactDOM.render(<Test />, mountNode);"]],style:".popup-list .am-list-body {\n  height: 4.2rem;\n  overflow: auto;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.popup-list</span> <span class="token class" >.am-list-body</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >4.2</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >overflow</span><span class="token punctuation" >:</span> auto<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},667:function(n,s,a){n.exports={basic:a(502),basic1:a(503)}}});