webpackJsonp([18,104],{435:function(n,a){"use strict";n.exports={content:[["p","\u6807\u7b7e\u5206\u4e3a\u9009\u62e9\u578b\u6807\u7b7e\u548c\u53ea\u8bfb\u578b\u6807\u7b7e\uff0c\u53ea\u8bfb\u578b\u6807\u7b7e\u4e3a\u5c0f\u6807\u7b7e\u65e0\u4ea4\u4e92\u8fc7\u7a0b\uff0c\u4ec5\u5c55\u793a\u5185\u5bb9\u3002"]],meta:{order:0,title:"\u6807\u7b7e\u7c7b\u578b",filename:"components/tag/demo/basic.md",id:"components-tag-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`tag selected: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selected<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tag-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u901a\u7528\u6807\u7b7e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>\u9ed8\u8ba4\u9009\u4e2d<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\u5931\u6548\u6807\u7b7e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u4e8b\u4ef6\u56de\u8c03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">afterClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      \u53ef\u5173\u95ed\u6807\u7b7e\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">small</span><span class="token punctuation">></span></span>\u5c0f\u53f7\u53ea\u8bfb\u6807\u7b7e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:["pre",{lang:"__react"},["code","import { Tag } from 'antd-mobile';\n\nfunction onChange(selected) {\n  console.log(`tag selected: ${selected}`);\n}\n\nReactDOM.render(\n  <div className=\"tag-container\">\n    <Tag data-seed=\"logId\">\u901a\u7528\u6807\u7b7e</Tag>\n    <Tag selected>\u9ed8\u8ba4\u9009\u4e2d</Tag>\n    <Tag disabled>\u5931\u6548\u6807\u7b7e</Tag>\n    <Tag onChange={onChange}>\u4e8b\u4ef6\u56de\u8c03</Tag>\n    <Tag closable onClose={() => {\n      console.log('onClose');\n    }} afterClose={() => {\n      console.log('afterClose');\n    }}\n    >\n      \u53ef\u5173\u95ed\u6807\u7b7e\n    </Tag>\n    <Tag small>\u5c0f\u53f7\u53ea\u8bfb\u6807\u7b7e</Tag>\n  </div>\n, mountNode);"]],style:".tag-container{\n  display: flex;\n  padding-top: 0.18rem;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.tag-container > div {\n  margin-left: 0.18rem;\n  margin-bottom: 0.18rem;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.tag-container</span></span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token number">0.18</span>rem<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.tag-container</span> > div </span><span class="token punctuation">{</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">0.18</span>rem<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">0.18</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},576:function(n,a,s){n.exports={basic:s(435)}}});