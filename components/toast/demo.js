webpackJsonp([19,102],{553:function(n,a){"use strict";n.exports={content:[["p","\u7eaf\u6587\u5b57\u3001\u7eaf\u56fe\u6807\u3001\u6210\u529f\u3001\u5931\u8d25\u3001\u79bb\u7ebf\u3001loading"]],meta:{order:0,title:"\u666e\u901a",filename:"components/toast/demo/basic.md",id:"components-toast-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Toast<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >showToast</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Toast<span class="token punctuation" >.</span><span class="token function" >info</span><span class="token punctuation" >(</span><span class="token string" >\'\u8fd9\u662f\u4e00\u4e2a toast \u63d0\u793a!!!\'</span><span class="token punctuation" >,</span> <span class="token number" >1</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >successToast</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Toast<span class="token punctuation" >.</span><span class="token function" >success</span><span class="token punctuation" >(</span><span class="token string" >\'\u52a0\u8f7d\u6210\u529f!!!\'</span><span class="token punctuation" >,</span> <span class="token number" >1</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >failToast</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Toast<span class="token punctuation" >.</span><span class="token function" >fail</span><span class="token punctuation" >(</span><span class="token string" >\'\u52a0\u8f7d\u5931\u8d25!!!\'</span><span class="token punctuation" >,</span> <span class="token number" >1</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >offline</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Toast<span class="token punctuation" >.</span><span class="token function" >offline</span><span class="token punctuation" >(</span><span class="token string" >\'\u7f51\u7edc\u8fde\u63a5\u5931\u8d25!!!\'</span><span class="token punctuation" >,</span> <span class="token number" >1</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >loadingToast</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Toast<span class="token punctuation" >.</span><span class="token function" >loading</span><span class="token punctuation" >(</span><span class="token string" >\'\u52a0\u8f7d\u4e2d...\'</span><span class="token punctuation" >,</span> <span class="token number" >1</span><span class="token punctuation" >,</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u52a0\u8f7d\u5b8c\u6210!!!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> ToastExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>toast-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>showToast<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u7eaf\u6587\u5b57 toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>successToast<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6210\u529f toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>failToast<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5931\u8d25 toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>offline<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u7f51\u7edc toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>loadingToast<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u52a0\u8f7d\u4e2d toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ToastExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code","import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';\n\nfunction showToast() {\n  Toast.info('\u8fd9\u662f\u4e00\u4e2a toast \u63d0\u793a!!!', 1);\n}\n\nfunction successToast() {\n  Toast.success('\u52a0\u8f7d\u6210\u529f!!!', 1);\n}\n\nfunction failToast() {\n  Toast.fail('\u52a0\u8f7d\u5931\u8d25!!!', 1);\n}\n\nfunction offline() {\n  Toast.offline('\u7f51\u7edc\u8fde\u63a5\u5931\u8d25!!!', 1);\n}\n\nfunction loadingToast() {\n  Toast.loading('\u52a0\u8f7d\u4e2d...', 1, () => {\n    console.log('\u52a0\u8f7d\u5b8c\u6210!!!');\n  });\n}\n\nconst ToastExample = React.createClass({\n  render() {\n    return (\n      <div className=\"toast-container\">\n        <WhiteSpace />\n        <WingBlank>\n          <Button onClick={showToast}>\u7eaf\u6587\u5b57 toast</Button>\n        </WingBlank>\n        <WhiteSpace />\n        <WingBlank>\n          <Button onClick={successToast}>\u6210\u529f toast</Button>\n        </WingBlank>\n        <WhiteSpace />\n        <WingBlank>\n          <Button onClick={failToast}>\u5931\u8d25 toast</Button>\n        </WingBlank>\n        <WhiteSpace />\n        <WingBlank>\n          <Button onClick={offline}>\u7f51\u7edc toast</Button>\n        </WingBlank>\n        <WhiteSpace />\n        <WingBlank>\n          <Button onClick={loadingToast}>\u52a0\u8f7d\u4e2d toast</Button>\n        </WingBlank>\n        <WhiteSpace />\n      </div>\n    );\n  },\n});\n\nReactDOM.render(<ToastExample />, mountNode);"]]}},683:function(n,a,s){n.exports={basic:s(553)}}});