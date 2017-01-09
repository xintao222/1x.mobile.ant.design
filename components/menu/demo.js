webpackJsonp([7,104],{376:function(n,a){"use strict";n.exports={content:[],meta:{order:0,title:"\u4e00\u7ea7\u83dc\u5355",filename:"components/menu/demo/basic.md",id:"components-menu-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u4e2d\u9910\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'21\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u672a\u751f\u6548\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'22\'</span><span class="token punctuation">,</span>\n    disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u706b\u9505\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'23\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u81ea\u52a9\u9910\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'24\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u5feb\u9910\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'25\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MenuExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> label <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n    data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>value <span class="token operator">===</span> value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        label <span class="token operator">=</span> el<span class="token punctuation">.</span>label<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`\u9009\u4e2d\u4e86 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>label<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:["pre",{lang:"__react"},["code","import { Menu } from 'antd-mobile';\n\nconst data = [\n  {\n    label: '\u4e2d\u9910',\n    value: '21',\n  }, {\n    label: '\u672a\u751f\u6548',\n    value: '22',\n    disabled: true,\n  }, {\n    label: '\u706b\u9505',\n    value: '23',\n  }, {\n    label: '\u81ea\u52a9\u9910',\n    value: '24',\n  }, {\n    label: '\u5feb\u9910',\n    value: '25',\n  },\n];\n\nconst MenuExample = React.createClass({\n  onChange(value) {\n    let label = '';\n    data.forEach((el) => {\n      if (el.value === value[0]) {\n        label = el.label;\n      }\n    });\n    console.log(`\u9009\u4e2d\u4e86 ${label}`);\n  },\n  render() {\n    return <Menu data={data} level={1} onChange={this.onChange} height={Math.round(document.documentElement.clientHeight / 3)} />;\n  },\n});\n\nReactDOM.render(<MenuExample />, mountNode);"]]}},377:function(n,a){"use strict";n.exports={content:[],meta:{order:1,title:"\u4e8c\u7ea7\u83dc\u5355",filename:"components/menu/demo/basic1.md",id:"components-menu-demo-basic1"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u5168\u90e8\u5206\u7c7b\'</span><span class="token punctuation">,</span>\n    isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u7f8e\u98df\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5168\u90e8\u7f8e\u98df\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'22\'</span><span class="token punctuation">,</span>\n        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u4e2d\u9910\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'21\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u706b\u9505\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'23\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u81ea\u52a9\u9910\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'24\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5feb\u9910\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'25\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5c0f\u5403\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'26\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u9762\u5305\u751c\u70b9\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'27\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u751f\u9c9c\u6c34\u679c\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'28\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u9762\u98df\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'29\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u4f11\u95f2\u98df\u54c1\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'210\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u8d85\u5e02\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5168\u90e8\u8d85\u5e02\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'31\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u8d85\u5e02\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'32\'</span><span class="token punctuation">,</span>\n        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u4fbf\u5229\u5e97\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'33\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u4e2a\u4eba\u62a4\u7406\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'34\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MenuExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">getInitialState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      initData<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        initData<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> label <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n    data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>dataItem <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>dataItem<span class="token punctuation">.</span>value <span class="token operator">===</span> value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        label <span class="token operator">=</span> dataItem<span class="token punctuation">.</span>label<span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>dataItem<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          dataItem<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>cItem <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>cItem<span class="token punctuation">.</span>value <span class="token operator">===</span> value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              label <span class="token operator">+</span><span class="token operator">=</span> <span class="token template-string"><span class="token string">` </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cItem<span class="token punctuation">.</span>label<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>initData <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'2\'</span><span class="token punctuation">,</span> <span class="token string">\'22\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>loading<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:["pre",{lang:"__react"},["code","import { Menu } from 'antd-mobile';\n\nconst data = [\n  {\n    value: '1',\n    label: '\u5168\u90e8\u5206\u7c7b',\n    isLeaf: true,\n  }, {\n    value: '2',\n    label: '\u7f8e\u98df',\n    children: [\n      {\n        label: '\u5168\u90e8\u7f8e\u98df',\n        value: '22',\n        disabled: true,\n      },\n      {\n        label: '\u4e2d\u9910',\n        value: '21',\n      }, {\n        label: '\u706b\u9505',\n        value: '23',\n      }, {\n        label: '\u81ea\u52a9\u9910',\n        value: '24',\n      }, {\n        label: '\u5feb\u9910',\n        value: '25',\n      }, {\n        label: '\u5c0f\u5403',\n        value: '26',\n      }, {\n        label: '\u9762\u5305\u751c\u70b9',\n        value: '27',\n      }, {\n        label: '\u751f\u9c9c\u6c34\u679c',\n        value: '28',\n      }, {\n        label: '\u9762\u98df',\n        value: '29',\n      }, {\n        label: '\u4f11\u95f2\u98df\u54c1',\n        value: '210',\n      }],\n  }, {\n    value: '3',\n    label: '\u8d85\u5e02',\n    children: [\n      {\n        label: '\u5168\u90e8\u8d85\u5e02',\n        value: '31',\n      }, {\n        label: '\u8d85\u5e02',\n        value: '32',\n        disabled: true,\n      }, {\n        label: '\u4fbf\u5229\u5e97',\n        value: '33',\n      }, {\n        label: '\u4e2a\u4eba\u62a4\u7406',\n        value: '34',\n      }],\n  },\n];\n\nconst MenuExample = React.createClass({\n  getInitialState() {\n    return {\n      initData: '',\n    };\n  },\n  componentDidMount() {\n    setTimeout(() => {\n      this.setState({\n        initData: data,\n      });\n    }, 1000);\n  },\n  onChange(value) {\n    let label = '';\n    data.forEach(dataItem => {\n      if (dataItem.value === value[0]) {\n        label = dataItem.label;\n        if (dataItem.children && value[1]) {\n          dataItem.children.forEach(cItem => {\n            if (cItem.value === value[1]) {\n              label += ` ${cItem.label}`;\n            }\n          });\n        }\n      }\n    });\n    console.log(label);\n  },\n  render() {\n    return this.state.initData ? <Menu data={data} value={['2', '22']} onChange={this.onChange} />\n      : <div>loading...</div>;\n  },\n});\n\nReactDOM.render(<MenuExample />, mountNode);"]]}},553:function(n,a,s){n.exports={basic:s(376),basic1:s(377)}}});