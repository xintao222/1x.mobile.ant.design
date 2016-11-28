webpackJsonp([15,102],{453:function(n,a){"use strict";n.exports={content:[["p","Card \u9ed8\u8ba4\u6837\u5f0f"]],meta:{order:0,title:"\u9ed8\u8ba4",filename:"components/card/demo/basic.md",id:"components-card-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Card<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card.Header</span>\n        <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u662f</span> <span class="token attr-name" >title"</span>\n        <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >extra={&lt;span</span><span class="token punctuation" >></span></span><span class="token keyword" >this</span> is extra<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n      <span class="token operator" >/</span><span class="token operator" >></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card.Body</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\u8fd9\u662f\u5361\u7247\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card.Body</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card.Footer</span> <span class="token attr-name" >content</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u662f\u5361\u5c3e<span class="token punctuation" >"</span></span> <span class="token attr-name" >extra={&lt;div</span><span class="token punctuation" >></span></span>\u8fd9\u662f\u5c3e\u90e8\u4ecb\u7ecd<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code",'import { Card, WingBlank, WhiteSpace } from \'antd-mobile\';\n\nReactDOM.render(\n  <WingBlank size="lg">\n    <WhiteSpace size="lg" />\n    <Card>\n      <Card.Header\n        title="\u8fd9\u662f title"\n        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"\n        extra={<span>this is extra</span>}\n      />\n      <Card.Body>\n        <div>\u8fd9\u662f\u5361\u7247\u5185\u5bb9</div>\n      </Card.Body>\n      <Card.Footer content="\u8fd9\u662f\u5361\u5c3e" extra={<div>\u8fd9\u662f\u5c3e\u90e8\u4ecb\u7ecd</div>} />\n    </Card>\n    <WhiteSpace size="lg" />\n  </WingBlank>\n, mountNode);']]}},454:function(n,a){"use strict";n.exports={content:[["p","Card \u901a\u680f\u6837\u5f0f"]],meta:{order:1,title:"\u901a\u680f",filename:"components/card/demo/full.md",id:"components-card-demo-full"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Card<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >full</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card.Header</span>\n        <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u662f</span> <span class="token attr-name" >title"</span>\n        <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >extra={&lt;span</span><span class="token punctuation" >></span></span><span class="token keyword" >this</span> is extra<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n      <span class="token operator" >/</span><span class="token operator" >></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card.Body</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\u8fd9\u662f\u5361\u7247\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card.Body</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card.Footer</span> <span class="token attr-name" >content</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd9\u662f\u5361\u5c3e<span class="token punctuation" >"</span></span> <span class="token attr-name" >extra={&lt;div</span><span class="token punctuation" >></span></span>\u8fd9\u662f\u5c3e\u90e8\u4ecb\u7ecd<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code",'import { Card, WhiteSpace } from \'antd-mobile\';\n\nReactDOM.render(\n  <div>\n    <WhiteSpace size="lg" />\n    <Card full>\n      <Card.Header\n        title="\u8fd9\u662f title"\n        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"\n        extra={<span>this is extra</span>}\n      />\n      <Card.Body>\n        <div>\u8fd9\u662f\u5361\u7247\u5185\u5bb9</div>\n      </Card.Body>\n      <Card.Footer content="\u8fd9\u662f\u5361\u5c3e" extra={<div>\u8fd9\u662f\u5c3e\u90e8\u4ecb\u7ecd</div>} />\n    </Card>\n  </div>\n, mountNode);']]}},647:function(n,a,s){n.exports={basic:s(453),full:s(454)}}});