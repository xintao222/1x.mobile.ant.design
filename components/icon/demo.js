webpackJsonp([12,102],{470:function(n,s){"use strict";n.exports={content:[],meta:{order:0,title:"\u57fa\u672c",filename:"components/icon/demo/icons.md",id:"components-icon-demo-icons"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> icons <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n  <span class="token string" >\'check\'</span><span class="token punctuation" >,</span> <span class="token string" >\'check-circle\'</span><span class="token punctuation" >,</span> <span class="token string" >\'check-circle-o\'</span><span class="token punctuation" >,</span>\n  <span class="token string" >\'cross\'</span><span class="token punctuation" >,</span> <span class="token string" >\'cross-circle\'</span><span class="token punctuation" >,</span> <span class="token string" >\'cross-circle-o\'</span><span class="token punctuation" >,</span>\n  <span class="token string" >\'down\'</span><span class="token punctuation" >,</span> <span class="token string" >\'left\'</span><span class="token punctuation" >,</span> <span class="token string" >\'right\'</span><span class="token punctuation" >,</span> <span class="token string" >\'ellipsis\'</span><span class="token punctuation" >,</span> <span class="token string" >\'loading\'</span><span class="token punctuation" >,</span> <span class="token string" >\'koubei-o\'</span><span class="token punctuation" >,</span> <span class="token string" >\'koubei\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n\n<span class="token keyword" >class</span> <span class="token class-name" >IconItems</span> <span class="token keyword" >extends</span> <span class="token class-name" >React<span class="token punctuation" >.</span>Component</span> <span class="token punctuation" >{</span>\n  <span class="token function" >constructor</span><span class="token punctuation" >(</span>props<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >super</span><span class="token punctuation" >(</span>props<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>state <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      first<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token punctuation" >{</span>\n        icons<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>item<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >}</span></span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>icon-item-wrap<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> first<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>first <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>first <span class="token operator" >?</span> icons<span class="token punctuation" >[</span><span class="token number" >100</span><span class="token punctuation" >]</span> <span class="token punctuation" >:</span> item<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>icon-item<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>item<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span><span class="token punctuation" >)</span>\n      <span class="token punctuation" >}</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u81ea\u5b9a\u4e49\u56fe\u6807<span class="token punctuation" >:</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >require</span><span class="token punctuation" >(</span><span class="token string" >\'./reload.svg\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>IconItems</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code","import { Icon } from 'antd-mobile';\n\nconst icons = [\n  'check', 'check-circle', 'check-circle-o',\n  'cross', 'cross-circle', 'cross-circle-o',\n  'down', 'left', 'right', 'ellipsis', 'loading', 'koubei-o', 'koubei',\n];\n/* eslint global-require: 0 */\n\nclass IconItems extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      first: false,\n    };\n  }\n  render() {\n    return (<div>\n      {\n        icons.map((item) => (\n          <span key={item} className=\"icon-item-wrap\" onClick={() => this.setState({ first: !this.state.first })}>\n            <Icon type={this.state.first ? icons[100] : item} />\n            <span className=\"icon-item\">{item}</span>\n          </span>\n        ))\n      }\n      <div>\n        <span>\u81ea\u5b9a\u4e49\u56fe\u6807:</span> <Icon type={require('./reload.svg')} />\n      </div>\n    </div>);\n  }\n}\n\nReactDOM.render(<IconItems />, mountNode);"]],style:".icon-item-wrap {\n  width: 1.5rem;\n  text-align: center;\n  display: inline-block;\n  margin-bottom: 0.24rem;\n}\n.icon-item {\n\tdisplay: block;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.icon-item-wrap</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >1.5</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >text-align</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> inline-block<span class="token punctuation" >;</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >0.24</span>rem<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.icon-item</span> </span><span class="token punctuation" >{</span>\n\t<span class="token property" >display</span><span class="token punctuation" >:</span> block<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},471:function(n,s){"use strict";n.exports={content:[],meta:{order:1,title:"\u5927\u5c0f",filename:"components/icon/demo/size.md",id:"components-icon-demo-size"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>search<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xxs<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>search<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xs<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>search<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sm<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>search<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>md<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>search<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code",'import { Icon } from \'antd-mobile\';\n\nReactDOM.render(<div>\n  <Icon type="search" size="xxs" />\n  <Icon type="search" size="xs" />\n  <Icon type="search" size="sm" />\n  <Icon type="search" size="md" />\n  <Icon type="search" size="lg" />\n</div>, mountNode);']]}},654:function(n,s,a){n.exports={icons:a(470),size:a(471)}}});