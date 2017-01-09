webpackJsonp([23,104],{408:function(n,s){"use strict";n.exports={content:[],meta:{order:0,title:"\u793a\u4f8b",filename:"components/segmented-control/demo/basic.md",id:"components-segmented-control-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SegmentedControl<span class="token punctuation">,</span> WingBlank <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> SegmentedControlExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onChange</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`selectedIndex:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span>selectedSegmentIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onValueChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sc-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u6700\u7b80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span> <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7981\u7528<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span> <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9ed8\u8ba4\u9009\u4e2d\u4e00\u9879<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span> <span class="token attr-name">selectedIndex</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e09\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e3b\u8272\u8c03\u6837\u5f0f tintColor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span>\n          <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e09\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">tintColor</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'#ff0000\'</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token string">\'0.8rem\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'5rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e8b\u4ef6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span>\n          <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e8c\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u4e09\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onValueChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onValueChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControlExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:["pre",{lang:"__react"},["code","import { SegmentedControl, WingBlank } from 'antd-mobile';\n\nconst SegmentedControlExample = React.createClass({\n  onChange(e) {\n    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);\n  },\n  onValueChange(value) {\n    console.log(value);\n  },\n  render() {\n    return (\n      <WingBlank size=\"lg\" className=\"sc-example\">\n        <p className=\"title\">\u6700\u7b80</p>\n        <SegmentedControl values={['\u5207\u6362\u4e00', '\u5207\u6362\u4e8c']} />\n\n        <p className=\"title\">\u7981\u7528</p>\n        <SegmentedControl values={['\u5207\u6362\u4e00', '\u5207\u6362\u4e8c']} disabled />\n\n        <p className=\"title\">\u9ed8\u8ba4\u9009\u4e2d\u4e00\u9879</p>\n        <SegmentedControl selectedIndex={1} values={['\u5207\u6362\u4e00', '\u5207\u6362\u4e8c', '\u5207\u6362\u4e09']} />\n\n        <p className=\"title\">\u4e3b\u8272\u8c03\u6837\u5f0f tintColor</p>\n        <SegmentedControl\n          values={['\u5207\u6362\u4e00', '\u5207\u6362\u4e8c', '\u5207\u6362\u4e09']}\n          tintColor={'#ff0000'}\n          style={{ height: '0.8rem', width: '5rem' }}\n        />\n\n        <p className=\"title\">\u4e8b\u4ef6</p>\n        <SegmentedControl\n          values={['\u5207\u6362\u4e00', '\u5207\u6362\u4e8c', '\u5207\u6362\u4e09']}\n          onChange={this.onChange}\n          onValueChange={this.onValueChange}\n        />\n      </WingBlank>\n    );\n  },\n});\n\nReactDOM.render(<SegmentedControlExample />, mountNode);"]],style:".sc-example {\n  padding-bottom: 0.26rem;\n}\n.sc-example .title {\n  padding: 0.26rem 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.sc-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token number">0.26</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sc-example</span> <span class="token class">.title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0.26</span>rem <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},567:function(n,s,a){n.exports={basic:a(408)}}});