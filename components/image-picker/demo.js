webpackJsonp([36,102],{470:function(n,s){"use strict";n.exports={content:[],meta:{order:0,title:"\u7b80\u5355\u7684\u56fe\u7247\u9009\u62e9\u7ec4\u4ef6",filename:"components/image-picker/demo/basic.md",id:"components-image-picker-demo-basic"},description:["section"],toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ImagePicker<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  url<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation" >,</span>\n  id<span class="token punctuation" >:</span> <span class="token string" >\'2121\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  url<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation" >,</span>\n  id<span class="token punctuation" >:</span> <span class="token string" >\'2122\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ImagePickerExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span> files<span class="token punctuation" >:</span> data<span class="token punctuation" >,</span> custom<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>files<span class="token punctuation" >,</span> type<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>files<span class="token punctuation" >,</span> type<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      files<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onAddImageClick</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      files<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>files<span class="token punctuation" >.</span><span class="token function" >concat</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        url<span class="token punctuation" >:</span> <span class="token string" >\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation" >,</span>\n        id<span class="token punctuation" >:</span> <span class="token string" >\'3\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >sw</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      custom<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>custom<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> files<span class="token punctuation" >,</span> custom <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >inline</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>sw<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>custom <span class="token operator" >?</span> <span class="token string" >\'\u81ea\u5b9a\u4e49\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\u5e38\u7528\u7684\'</span><span class="token punctuation" >}</span>\u9009\u62e9\u56fe\u7247\u7684\u65b9\u6cd5<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n      <span class="token punctuation" >{</span>custom <span class="token operator" >?</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ImagePicker</span>\n        <span class="token attr-name" >files</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>files<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onImageClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span>index<span class="token punctuation" >,</span> fs<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>index<span class="token punctuation" >,</span> fs<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onAddImageClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onAddImageClick<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >selectable</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>files<span class="token punctuation" >.</span>length <span class="token operator" >&lt;</span> <span class="token number" >5</span><span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >/></span></span> <span class="token punctuation" >:</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ImagePicker</span>\n        <span class="token attr-name" >files</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>files<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onImageClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span>index<span class="token punctuation" >,</span> fs<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>index<span class="token punctuation" >,</span> fs<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >selectable</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>files<span class="token punctuation" >.</span>length <span class="token operator" >&lt;</span> <span class="token number" >5</span><span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ImagePickerExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code","import { ImagePicker, Button } from 'antd-mobile';\n\nconst data = [{\n  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',\n  id: '2121',\n}, {\n  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',\n  id: '2122',\n}];\n\nconst ImagePickerExample = React.createClass({\n  getInitialState() {\n    return { files: data, custom: false };\n  },\n  onChange(files, type, index) {\n    console.log(files, type, index);\n    this.setState({\n      files,\n    });\n  },\n  onAddImageClick() {\n    this.setState({\n      files: this.state.files.concat({\n        url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',\n        id: '3',\n      }),\n    });\n  },\n  sw() {\n    this.setState({\n      custom: !this.state.custom,\n    });\n  },\n  render() {\n    const { files, custom } = this.state;\n    return (<div>\n      <Button inline style={{ margin: 10 }} onClick={this.sw}>{custom ? '\u81ea\u5b9a\u4e49' : '\u5e38\u7528\u7684'}\u9009\u62e9\u56fe\u7247\u7684\u65b9\u6cd5</Button>\n      {custom ? <ImagePicker\n        files={files}\n        onChange={this.onChange}\n        onImageClick={(index, fs) => console.log(index, fs)}\n        onAddImageClick={this.onAddImageClick}\n        selectable={files.length < 5}\n      /> : <ImagePicker\n        files={files}\n        onChange={this.onChange}\n        onImageClick={(index, fs) => console.log(index, fs)}\n        selectable={files.length < 5}\n      />}\n    </div>);\n  },\n});\n\nReactDOM.render(<ImagePickerExample />, mountNode);"]]}},656:function(n,s,a){n.exports={basic:a(470)}}});