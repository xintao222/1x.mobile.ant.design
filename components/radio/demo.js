webpackJsonp([29,102],{510:function(n,a){"use strict";n.exports={content:[],meta:{order:0,title:"\u793a\u4f8b",filename:"components/radio/demo/basic.md",id:"components-radio-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> List<span class="token punctuation" >,</span> Radio<span class="token punctuation" >,</span> Flex <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> RadioItem <span class="token operator" >=</span> Radio<span class="token punctuation" >.</span>RadioItem<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> value <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n      <span class="token punctuation" >{</span> value<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u535a\u58eb\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >{</span> value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u672c\u79d1\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >{</span> value<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u9ad8\u4e2d\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span> <span class="token attr-name" >renderHeader</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token string" >\'RadioItem \u6f14\u793a\'</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>data<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>i <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioItem</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>i<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span> <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>value <span class="token operator" >===</span> i<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >onChange</span><span class="token punctuation" >(</span>i<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>i<span class="token punctuation" >.</span>label<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioItem</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioItem</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>disabled<span class="token punctuation" >"</span></span> <span class="token attr-name" >data-seed</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>logId<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span> <span class="token attr-name" >defaultChecked</span> <span class="token attr-name" >multipleLine</span><span class="token punctuation" >></span></span>\n          \u521d\u4e2d<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item.Brief</span><span class="token punctuation" >></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item.Brief</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioItem</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'0.3rem\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'0.3rem 0\'</span><span class="token punctuation" >,</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#888\'</span><span class="token punctuation" >,</span> flex<span class="token punctuation" >:</span> <span class="token string" >\'none\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Radio \u6f14\u793a <span class="token punctuation" >(</span>\u81ea\u5b9a\u4e49\u6837\u5f0f<span class="token punctuation" >)</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>my-radio<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u540c\u610f\u534f\u8bae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Radio</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code","import { List, Radio, Flex } from 'antd-mobile';\n\nconst RadioItem = Radio.RadioItem;\n\nconst Test = React.createClass({\n  getInitialState() {\n    return {\n      value: 1,\n    };\n  },\n  onChange(value) {\n    this.setState({\n      value,\n    });\n  },\n  render() {\n    const { value } = this.state;\n    const data = [\n      { value: 0, label: '\u535a\u58eb' },\n      { value: 1, label: '\u672c\u79d1' },\n      { value: 2, label: '\u9ad8\u4e2d' },\n    ];\n    return (<div>\n      <List renderHeader={() => 'RadioItem \u6f14\u793a'}>\n        {data.map(i => (\n          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>\n            {i.label}\n          </RadioItem>\n        ))}\n        <RadioItem key=\"disabled\" data-seed=\"logId\" disabled defaultChecked multipleLine>\n          \u521d\u4e2d<List.Item.Brief>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9</List.Item.Brief>\n        </RadioItem>\n      </List>\n      <Flex style={{ padding: '0.3rem' }}>\n        <Flex.Item style={{ padding: '0.3rem 0', color: '#888', flex: 'none' }}>Radio \u6f14\u793a (\u81ea\u5b9a\u4e49\u6837\u5f0f)</Flex.Item>\n        <Flex.Item>\n          <Radio className=\"my-radio\">\u540c\u610f\u534f\u8bae</Radio>\n        </Flex.Item>\n      </Flex>\n    </div>);\n  },\n});\n\nReactDOM.render(<Test />, mountNode);"]],style:".my-radio .am-radio {\n  padding: 0.05rem;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  margin-right: 0.1rem;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.my-radio</span> <span class="token class" >.am-radio</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >0.05</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >border</span><span class="token punctuation" >:</span> <span class="token number" >1</span>px solid <span class="token hexcode" >#ccc</span><span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >50%</span><span class="token punctuation" >;</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >0.1</span>rem<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},668:function(n,a,s){n.exports={basic:s(510)}}});