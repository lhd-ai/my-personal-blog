import{Z as s,j as o,s as n,m as l,x as r,w as e,aa as t,F as h,aH as u,a7 as m}from"./index.647868c6.js";const c="/my-personal-blog/assets/buildmodule.fb39a3fc.png",b="/my-personal-blog/assets/buildmoduletwo.95a3f365.png",f=u('<h3>\u6784\u5EFA\u9009\u9879</h3><p><a href="https://cn.vitejs.dev/config/build-options.html">\u6784\u5EFA\u9009\u9879</a></p><hr><h4>build.targrt</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> string | string[]</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> &#39;modules&#39;</li><li><strong>\u76F8\u5173\u5185\u5BB9\uFF1A</strong> <a href="https://cn.vitejs.dev/guide/build.html#browser-compatibility">\u6D4F\u89C8\u5668\u517C\u5BB9\u6027</a></li></ul><p>\u8BBE\u7F6E\u6700\u7EC8\u6784\u5EFA\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u76EE\u6807\u3002\u9ED8\u8BA4\u503C\u662F\u4E00\u4E2A Vite \u7279\u6709\u7684\u503C\u2014\u2014&#39;modules&#39;\uFF0C\u8FD9\u662F\u6307 \u652F\u6301\u539F\u751F ES \u6A21\u5757\u3001\u539F\u751F ESM \u52A8\u6001\u5BFC\u5165 \u548C import.meta \u7684\u6D4F\u89C8\u5668\u3002 </p><p>\u53E6\u4E00\u4E2A\u7279\u6B8A\u503C\u662F \u201Cesnext\u201D \u2014\u2014 \u5373\u5047\u8BBE\u6709\u539F\u751F\u52A8\u6001\u5BFC\u5165\u652F\u6301\uFF0C\u5E76\u4E14\u5C06\u4F1A\u8F6C\u8BD1\u5F97\u5C3D\u53EF\u80FD\u5C0F\uFF1A</p><p></p><ul><li>\u5982\u679C build.minify \u9009\u9879\u4E3A &#39;terser&#39;\uFF0C&#39;esnext&#39; \u5C06\u4F1A\u5F3A\u5236\u964D\u7EA7\u4E3A &#39;es2019&#39;\u3002</li><li>\u5176\u4ED6\u60C5\u51B5\u4E0B\u5C06\u5B8C\u5168\u4E0D\u4F1A\u6267\u884C\u8F6C\u8BD1\u3002 \u8F6C\u6362\u8FC7\u7A0B\u5C06\u4F1A\u7531 esbuild \u6267\u884C\uFF0C\u5E76\u4E14\u6B64\u503C\u5E94\u8BE5\u662F\u4E00\u4E2A\u5408\u6CD5\u7684 esbuild \u76EE\u6807\u9009\u9879\u3002\u81EA\u5B9A\u4E49\u76EE\u6807\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A ES \u7248\u672C\uFF08\u4F8B\u5982\uFF1Aes2015\uFF09\u3001\u4E00\u4E2A\u6D4F\u89C8\u5668\u7248\u672C\uFF08\u4F8B\u5982\uFF1Achrome58\uFF09\u6216\u662F\u591A\u4E2A\u76EE\u6807\u7EC4\u6210\u7684\u4E00\u4E2A\u6570\u7EC4\u3002</li></ul><p>\u6CE8\u610F\uFF1A\u5982\u679C\u4EE3\u7801\u5305\u542B\u4E0D\u80FD\u88AB esbuild \u5B89\u5168\u5730\u7F16\u8BD1\u7684\u7279\u6027\uFF0C\u90A3\u4E48\u6784\u5EFA\u5C06\u4F1A\u5931\u8D25\u3002\u67E5\u770B esbuild \u6587\u6863 \u83B7\u53D6\u66F4\u591A\u7EC6\u8282\u3002</p><hr><h4>build.modulePreload</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean | { polyfill?: boolean, resolveDependencies?: ResolveModulePreloadDependenciesFn }</li><li><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> true</li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E2A \u6A21\u5757\u9884\u52A0\u8F7D polyfill \u4F1A\u88AB\u81EA\u52A8\u6CE8\u5165\u3002\u8BE5 polyfill \u4F1A\u81EA\u52A8\u6CE8\u5165\u5230\u6BCF\u4E2A index.html \u5165\u53E3\u7684\u7684\u4EE3\u7406\u6A21\u5757\u4E2D\u3002\u5982\u679C\u6784\u5EFA\u901A\u8FC7 build.rollupOptions.input \u88AB\u914D\u7F6E\u4E3A\u4E86\u4F7F\u7528\u975E HTML \u5165\u53E3\u7684\u5F62\u5F0F\uFF0C\u90A3\u4E48\u5FC5\u987B\u8981\u5728\u4F60\u7684\u81EA\u5B9A\u4E49\u5165\u53E3\u4E2D\u624B\u52A8\u5F15\u5165\u8BE5 polyfill\uFF1A</p><p><strong>import &#39;vite/modulepreload-polyfill&#39;</strong></p><p>\u6CE8\u610F\uFF1A\u6B64 polyfill \u4E0D\u9002\u7528\u4E8E Library \u6A21\u5F0F\u3002\u5982\u679C\u4F60\u9700\u8981\u652F\u6301\u4E0D\u652F\u6301\u52A8\u6001\u5F15\u5165\u7684\u6D4F\u89C8\u5668\uFF0C\u4F60\u5E94\u8BE5\u907F\u514D\u5728\u4F60\u7684\u5E93\u4E2D\u4F7F\u7528\u6B64\u9009\u9879\u3002 </p><p>\u6B64 polyfill \u53EF\u4EE5\u901A\u8FC7 { polyfill: false } \u6765\u7981\u7528\u3002</p><p>\u6BCF\u4E2A\u52A8\u6001\u5BFC\u5165\u8981\u9884\u52A0\u8F7D\u7684\u5757\u5217\u8868\u5C06\u7531 Vite \u8BA1\u7B97\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u8F7D\u5165\u8FD9\u4E9B\u4F9D\u8D56\u65F6\uFF0C\u4F1A\u4F7F\u7528\u4E00\u4E2A\u5305\u542B base \u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002\u5982\u679C base \u662F\u76F8\u5BF9\u8DEF\u5F84\uFF08&#39;&#39; \u6216\u8005 &#39;./&#39;\uFF09\uFF0C\u89E3\u6790\u65F6\u5219\u4F1A\u4F7F\u7528 import.meta.url\uFF0C\u4EE5\u907F\u514D\u51FA\u73B0\u4F9D\u8D56\u4E8E\u6700\u7EC8\u90E8\u7F72\u57FA\u8DEF\u5F84\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002</p><p>\u76EE\u524D\u6709\u4E00\u4E2A\u5B9E\u9A8C\u6027\u529F\u80FD\u652F\u6301\u4F7F\u7528 resolveDependencies \u51FD\u6570\u5BF9\u4F9D\u8D56\u9879\u5217\u8868\u53CA\u5176\u8DEF\u5F84\u8FDB\u884C\u7EC6\u7C92\u5EA6\u63A7\u5236\u3002\u5B83\u671F\u671B\u63A5\u6536\u4E00\u4E2A ResolveModulePreloadDependenciesFn \u7C7B\u578B\u7684\u51FD\u6570:</p><p></p><img src="'+c+'"><p>resolveDependencies \u51FD\u6570\u5C06\u4E3A\u6BCF\u4E2A\u52A8\u6001\u5BFC\u5165\u8C03\u7528\uFF0C\u540C\u65F6\u5E26\u7740\u4E00\u4E2A\u5B83\u6240\u4F9D\u8D56\u7684 chunk \u5217\u8868\u3002\u5E76\u4E14\u5B83\u8FD8\u4F1A\u4E3A\u6BCF\u4E2A\u5728\u5165\u53E3 HTML \u6587\u4EF6\u4E2D\u5BFC\u5165\u7684 chunk \u8C03\u7528\u3002 \u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u4F9D\u8D56\u5173\u7CFB\u6570\u7EC4\uFF0C\u53EF\u80FD\u88AB\u8FC7\u6EE4\u540E\u53D8\u5C11\u4E86\uFF0C\u4E5F\u53EF\u80FD\u6709\u66F4\u591A\u4F9D\u8D56\u6CE8\u5165\u8FDB\u6765\u4E86\uFF0C\u540C\u65F6\u5B83\u4EEC\u7684\u8DEF\u5F84\u4E5F\u88AB\u4FEE\u6539\u8FC7\u3002deps \u8DEF\u5F84\u662F\u76F8\u5BF9\u4E8E build.outDir \u7684\u3002\u82E5\u5728\u6CE8\u5165\u8BE5\u6A21\u5757\u5230 HTML head \u65F6\u4F7F\u7528 new URL(dep, import.meta.url) \u83B7\u53D6\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5219\u5BF9\u4E8E hostType === &#39;js&#39;\uFF0C\u5141\u8BB8\u8FD4\u56DE\u4E00\u4E2A\u76F8\u5BF9\u4E8E hostId \u7684\u8DEF\u5F84\u3002</p><img src="'+b+'"><p>\u89E3\u6790\u5F97\u5230\u7684\u4F9D\u8D56\u8DEF\u5F84\u53EF\u4EE5\u518D\u5728\u4E4B\u540E\u4F7F\u7528 experimental.renderBuiltUrl \u66F4\u6539\u3002</p><hr><h4>build.polyfillModulePreload</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> true</li></ul><p>\u5DF2\u5E9F\u5F03 \u8BF7\u4F7F\u7528 build.modulePreload.polyfill \u66FF\u4EE3 \u662F\u5426\u81EA\u52A8\u6CE8\u5165\u4E00\u4E2A \u6A21\u5757\u9884\u52A0\u8F7D polyfill\u3002</p><hr><h4>build.outDir</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> string</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> dist</li></ul><p>\u6307\u5B9A\u8F93\u51FA\u8DEF\u5F84\uFF08\u76F8\u5BF9\u4E8E \u9879\u76EE\u6839\u76EE\u5F55).</p><hr><h4>build.assetsDir</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> string</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> assets</li></ul><p>\u6307\u5B9A\u751F\u6210\u9759\u6001\u8D44\u6E90\u7684\u5B58\u653E\u8DEF\u5F84\uFF08\u76F8\u5BF9\u4E8E build.outDir\uFF09\u3002</p><hr><h4>build.assetsInlineLimit</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> number</li><li><strong>\u9ED8\u8BA4\uFF1A</strong>* 4096 (4kb)</li></ul><p>\u5C0F\u4E8E\u6B64\u9608\u503C\u7684\u5BFC\u5165\u6216\u5F15\u7528\u8D44\u6E90\u5C06\u5185\u8054\u4E3A base64 \u7F16\u7801\uFF0C\u4EE5\u907F\u514D\u989D\u5916\u7684 http \u8BF7\u6C42\u3002\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u5B8C\u5168\u7981\u7528\u6B64\u9879\u3002 </p><p>Git LFS \u5360\u4F4D\u7B26\u4F1A\u81EA\u52A8\u6392\u9664\u5728\u5185\u8054\u4E4B\u5916\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4E0D\u5305\u542B\u5B83\u4EEC\u6240\u8868\u793A\u7684\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p><p>\u6CE8\u610F:</p><p></p>',43),S=l("hr",null,null,-1),_=l("h4",null,"build.cssCodeSplit",-1),y=l("ul",null,[l("li",null,[l("strong",null,"\u7C7B\u578B\uFF1A"),t(" boolean")]),l("li",null,[l("strong",null,"\u9ED8\u8BA4\uFF1A"),t(" true \u542F\u7528/\u7981\u7528 CSS \u4EE3\u7801\u62C6\u5206\u3002\u5F53\u542F\u7528\u65F6\uFF0C\u5728\u5F02\u6B65 chunk \u4E2D\u5BFC\u5165\u7684 CSS \u5C06\u5185\u8054\u5230\u5F02\u6B65 chunk \u672C\u8EAB\uFF0C\u5E76\u5728\u5176\u88AB\u52A0\u8F7D\u65F6\u63D2\u5165\u3002")])],-1),v=l("p",null,"\u5982\u679C\u7981\u7528\uFF0C\u6574\u4E2A\u9879\u76EE\u4E2D\u7684\u6240\u6709 CSS \u5C06\u88AB\u63D0\u53D6\u5230\u4E00\u4E2A CSS \u6587\u4EF6\u4E2D\u3002",-1),D=l("p",null,"\u6CE8\u610F",-1),k=u('<hr><h4>build.cssTarget</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> string | string[]</li><li><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> \u4E0E <a href="https://cn.vitejs.dev/config/">build.target</a> \u4E00\u81F4</li></ul><p>\u6B64\u9009\u9879\u5141\u8BB8\u7528\u6237\u4E3A CSS \u7684\u538B\u7F29\u8BBE\u7F6E\u4E00\u4E2A\u4E0D\u540C\u7684\u6D4F\u89C8\u5668 target\uFF0C\u6B64\u5904\u7684 target \u5E76\u975E\u662F\u7528\u4E8E JavaScript \u8F6C\u5199\u76EE\u6807\u3002 </p><p>\u5E94\u53EA\u5728\u9488\u5BF9\u975E\u4E3B\u6D41\u6D4F\u89C8\u5668\u65F6\u4F7F\u7528\u3002 \u6700\u76F4\u89C2\u7684\u793A\u4F8B\u662F\u5F53\u4F60\u8981\u517C\u5BB9\u7684\u573A\u666F\u662F\u5B89\u5353\u5FAE\u4FE1\u4E2D\u7684 webview \u65F6\uFF0C\u5B83\u652F\u6301\u5927\u591A\u6570\u73B0\u4EE3\u7684 JavaScript \u529F\u80FD\uFF0C\u4F46\u5E76\u4E0D\u652F\u6301 CSS \u4E2D\u7684 #RGBA \u5341\u516D\u8FDB\u5236\u989C\u8272\u7B26\u53F7\u3002 \u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u9700\u8981\u5C06 build.cssTarget \u8BBE\u7F6E\u4E3A chrome61\uFF0C\u4EE5\u9632\u6B62 vite \u5C06 rgba() \u989C\u8272\u8F6C\u5316\u4E3A #RGBA \u5341\u516D\u8FDB\u5236\u7B26\u53F7\u7684\u5F62\u5F0F\u3002</p><p></p><hr><h4>build.sourcemap</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean | &#39;inline&#39; | &#39;hidden&#39;</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> false</li></ul><p>\u6784\u5EFA\u540E\u662F\u5426\u751F\u6210 source map \u6587\u4EF6\u3002\u5982\u679C\u4E3A true\uFF0C\u5C06\u4F1A\u521B\u5EFA\u4E00\u4E2A\u72EC\u7ACB\u7684 source map \u6587\u4EF6\u3002\u5982\u679C\u4E3A &#39;inline&#39;\uFF0Csource map \u5C06\u4F5C\u4E3A\u4E00\u4E2A data URI \u9644\u52A0\u5728\u8F93\u51FA\u6587\u4EF6\u4E2D\u3002&#39;hidden&#39; \u7684\u5DE5\u4F5C\u539F\u7406\u4E0E &#39;true&#39; \u76F8\u4F3C\uFF0C\u53EA\u662F bundle \u6587\u4EF6\u4E2D\u76F8\u5E94\u7684\u6CE8\u91CA\u5C06\u4E0D\u88AB\u4FDD\u7559\u3002</p><hr><h4>build.rollupOptions</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <a href="https://rollupjs.org/guide/en/#big-list-of-options">RollupOptions</a></li></ul><p>\u81EA\u5B9A\u4E49\u5E95\u5C42\u7684 Rollup \u6253\u5305\u914D\u7F6E\u3002\u8FD9\u4E0E\u4ECE Rollup \u914D\u7F6E\u6587\u4EF6\u5BFC\u51FA\u7684\u9009\u9879\u76F8\u540C\uFF0C\u5E76\u5C06\u4E0E Vite \u7684\u5185\u90E8 Rollup \u9009\u9879\u5408\u5E76\u3002\u67E5\u770B Rollup \u9009\u9879\u6587\u6863 \u83B7\u53D6\u66F4\u591A\u7EC6\u8282\u3002</p><hr><h4>build.commonjsOptions</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <a href="https://github.com/rollup/plugins/tree/master/packages/commonjs#options">RollupCommonJSOptions</a></li></ul><p>\u4F20\u9012\u7ED9 @rollup/plugin-commonjs \u63D2\u4EF6\u7684\u9009\u9879\u3002</p><hr><h4>build.dynamicImportVarsOptions</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> RollupDynamicImportVarsOptions \u76F8\u5173\u5185\u5BB9\uFF1A <a href="https://cn.vitejs.dev/guide/features.html#dynamic-import">\u52A8\u6001\u5BFC\u5165</a></li></ul><p>\u4F20\u9012\u7ED9 @rollup/plugin-dynamic-import-vars \u7684\u9009\u9879\u3002</p><hr><h4>build.lib</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> { entry: string | string[] | { [entryAlias: string]: string }, name?: string, formats?: (&#39;es&#39; | &#39;cjs&#39; | &#39;umd&#39; | &#39;iife&#39;)[], fileName?: string | ((format: ModuleFormat, entryName: string) =&gt; string) }</li><li><strong>\u76F8\u5173\u5185\u5BB9\uFF1A</strong> <a href="https://cn.vitejs.dev/guide/build.html#library-mode">\u5E93\u6A21\u5F0F</a></li></ul><p>\u6784\u5EFA\u4E3A\u5E93\u3002entry \u662F\u5FC5\u9700\u7684\uFF0C\u56E0\u4E3A\u5E93\u4E0D\u80FD\u4F7F\u7528 HTML \u4F5C\u4E3A\u5165\u53E3\u3002name \u5219\u662F\u66B4\u9732\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u5E76\u4E14\u5728 formats \u5305\u542B &#39;umd&#39; \u6216 &#39;iife&#39; \u65F6\u662F\u5FC5\u9700\u7684\u3002\u9ED8\u8BA4 formats \u662F [&#39;es&#39;, &#39;umd&#39;]\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u591A\u4E2A\u914D\u7F6E\u5165\u53E3\uFF0C\u5219\u662F [&#39;es&#39;, &#39;cjs&#39;]\u3002fileName \u662F\u8F93\u51FA\u7684\u5305\u6587\u4EF6\u540D\uFF0C\u9ED8\u8BA4 fileName \u662F package.json \u7684 name \u9009\u9879\uFF0C\u540C\u65F6\uFF0C\u5B83\u8FD8\u53EF\u4EE5\u88AB\u5B9A\u4E49\u4E3A\u53C2\u6570\u4E3A format \u548C entryAlias \u7684\u51FD\u6570\u3002</p><hr><h4>build.manifest</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean | string</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> false</li><li><strong>\u76F8\u5173\u5185\u5BB9\uFF1A</strong> <a href="https://cn.vitejs.dev/guide/backend-integration.html">\u540E\u7AEF\u96C6\u6210</a></li></ul><p>\u5F53\u8BBE\u7F6E\u4E3A true\uFF0C\u6784\u5EFA\u540E\u5C06\u4F1A\u751F\u6210 manifest.json \u6587\u4EF6\uFF0C\u5305\u542B\u4E86\u6CA1\u6709\u88AB hash \u8FC7\u7684\u8D44\u6E90\u6587\u4EF6\u540D\u548C hash \u540E\u7248\u672C\u7684\u6620\u5C04\u3002\u53EF\u4EE5\u4E3A\u4E00\u4E9B\u670D\u52A1\u5668\u6846\u67B6\u6E32\u67D3\u65F6\u63D0\u4F9B\u6B63\u786E\u7684\u8D44\u6E90\u5F15\u5165\u94FE\u63A5\u3002\u5F53\u8BE5\u503C\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\u65F6\uFF0C\u5B83\u5C06\u4F5C\u4E3A manifest \u6587\u4EF6\u7684\u540D\u5B57\u3002</p><hr><h4>build.ssrManifest</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean | string</li><li><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> false</li><li><strong>\u76F8\u5173\u94FE\u63A5\uFF1A</strong> <a href="https://cn.vitejs.dev/guide/ssr.html">\u670D\u52A1\u7AEF\u6E32\u67D3</a></li></ul><p>\u5F53\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u6784\u5EFA\u4E5F\u5C06\u751F\u6210 SSR \u7684 manifest \u6587\u4EF6\uFF0C\u4EE5\u786E\u5B9A\u751F\u4EA7\u4E2D\u7684\u6837\u5F0F\u94FE\u63A5\u4E0E\u8D44\u4EA7\u9884\u52A0\u8F7D\u6307\u4EE4\u3002\u5F53\u8BE5\u503C\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\u65F6\uFF0C\u5B83\u5C06\u4F5C\u4E3A manifest \u6587\u4EF6\u7684\u540D\u5B57\u3002</p><hr><h4>build.ssr</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean | string</li><li><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> undefined</li><li><strong>\u76F8\u5173\u94FE\u63A5\uFF1A</strong> <a href="https://cn.vitejs.dev/guide/ssr.html">Server-Side Rendering</a></li></ul><p>\u751F\u6210\u9762\u5411 SSR \u7684\u6784\u5EFA\u3002\u6B64\u9009\u9879\u7684\u503C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\uFF0C\u7528\u4E8E\u76F4\u63A5\u5B9A\u4E49 SSR \u7684\u5165\u53E3\uFF0C\u4E5F\u53EF\u4EE5\u4E3A true\uFF0C\u4F46\u8FD9\u9700\u8981\u901A\u8FC7\u8BBE\u7F6E rollupOptions.input \u6765\u6307\u5B9A SSR \u7684\u5165\u53E3\u3002</p><hr><h4>build.minify</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean | &#39;terser&#39; | &#39;esbuild&#39;</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> &#39;esbuild&#39;</li></ul><p>\u8BBE\u7F6E\u4E3A false \u53EF\u4EE5\u7981\u7528\u6700\u5C0F\u5316\u6DF7\u6DC6\uFF0C\u6216\u662F\u7528\u6765\u6307\u5B9A\u4F7F\u7528\u54EA\u79CD\u6DF7\u6DC6\u5668\u3002\u9ED8\u8BA4\u4E3A Esbuild\uFF0C\u5B83\u6BD4 terser \u5FEB 20-40 \u500D\uFF0C\u538B\u7F29\u7387\u53EA\u5DEE 1%-2%\u3002Benchmarks </p><p>\u6CE8\u610F\uFF0C\u5728 lib \u6A21\u5F0F\u4E0B\u4F7F\u7528 &#39;es&#39; \u65F6\uFF0Cbuild.minify \u9009\u9879\u4E0D\u4F1A\u7F29\u51CF\u7A7A\u683C\uFF0C\u56E0\u4E3A\u4F1A\u79FB\u9664\u6389 pure \u6807\u6CE8\uFF0C\u5BFC\u81F4\u7834\u574F tree-shaking\u3002</p><p>\u5F53\u8BBE\u7F6E\u4E3A &#39;terser&#39; \u65F6\u5FC5\u987B\u5148\u5B89\u88C5 Terser\u3002</p><p></p><p><strong>npm add -D terser</strong></p><hr><h4>build.terserOptions</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> TerserOptions</li></ul><p>\u4F20\u9012\u7ED9 Terser \u7684\u66F4\u591A minify \u9009\u9879\u3002</p><hr><h4>build.write</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> true \u8BBE\u7F6E\u4E3A false \u6765\u7981\u7528\u5C06\u6784\u5EFA\u540E\u7684\u6587\u4EF6\u5199\u5165\u78C1\u76D8\u3002\u8FD9\u5E38\u7528\u4E8E \u7F16\u7A0B\u5F0F\u5730\u8C03\u7528 build() \u5728\u5199\u5165\u78C1\u76D8\u4E4B\u524D\uFF0C\u9700\u8981\u5BF9\u6784\u5EFA\u540E\u7684\u6587\u4EF6\u8FDB\u884C\u8FDB\u4E00\u6B65\u5904\u7406\u3002</li></ul><hr><h4>build.emptyOutDir</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> \u82E5 outDir \u5728 root \u76EE\u5F55\u4E0B\uFF0C\u5219\u4E3A true</li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u82E5 outDir \u5728 root \u76EE\u5F55\u4E0B\uFF0C\u5219 Vite \u4F1A\u5728\u6784\u5EFA\u65F6\u6E05\u7A7A\u8BE5\u76EE\u5F55\u3002\u82E5 outDir \u5728\u6839\u76EE\u5F55\u4E4B\u5916\u5219\u4F1A\u629B\u51FA\u4E00\u4E2A\u8B66\u544A\u907F\u514D\u610F\u5916\u5220\u9664\u6389\u91CD\u8981\u7684\u6587\u4EF6\u3002\u53EF\u4EE5\u8BBE\u7F6E\u8BE5\u9009\u9879\u6765\u5173\u95ED\u8FD9\u4E2A\u8B66\u544A\u3002\u8BE5\u529F\u80FD\u4E5F\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C\u53C2\u6570 --emptyOutDir \u6765\u4F7F\u7528\u3002</p><hr><h4>build.copyPublicDir</h4><ul><li><strong>\u5B9E\u9A8C\u6027\u7279\u6027</strong></li><li><strong>\u7C7B\u578B\uFF1A</strong> boolean</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> true</li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CVite \u4F1A\u5728\u6784\u5EFA\u9636\u6BB5\u5C06 publicDir \u76EE\u5F55\u4E2D\u7684\u6240\u6709\u6587\u4EF6\u590D\u5236\u5230 outDir \u76EE\u5F55\u4E2D\u3002\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u8BE5\u9009\u9879\u4E3A false \u6765\u7981\u7528\u8BE5\u884C\u4E3A\u3002</p><hr><h4>build.reportCompressedSize</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> true \u542F\u7528/\u7981\u7528 gzip \u538B\u7F29\u5927\u5C0F\u62A5\u544A\u3002\u538B\u7F29\u5927\u578B\u8F93\u51FA\u6587\u4EF6\u53EF\u80FD\u4F1A\u5F88\u6162\uFF0C\u56E0\u6B64\u7981\u7528\u8BE5\u529F\u80FD\u53EF\u80FD\u4F1A\u63D0\u9AD8\u5927\u578B\u9879\u76EE\u7684\u6784\u5EFA\u6027\u80FD\u3002</li></ul><hr><h4>build.chunkSizeWarningLimit</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> number</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> 500 \u89C4\u5B9A\u89E6\u53D1\u8B66\u544A\u7684 chunk \u5927\u5C0F\u3002\uFF08\u4EE5 kbs \u4E3A\u5355\u4F4D\uFF09</li></ul><hr><h4>build.watch</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> WatcherOptions| null</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> null \u8BBE\u7F6E\u4E3A {} \u5219\u4F1A\u542F\u7528 rollup \u7684\u76D1\u542C\u5668\u3002\u5BF9\u4E8E\u53EA\u5728\u6784\u5EFA\u9636\u6BB5\u6216\u8005\u96C6\u6210\u6D41\u7A0B\u4F7F\u7528\u7684\u63D2\u4EF6\u5F88\u5E38\u7528\u3002</li></ul><p>\u5728 Windows Linux \u5B50\u7CFB\u7EDF\uFF08WSL\uFF09\u4E0A\u4F7F\u7528 Vite</p><p>\u67D0\u4E9B\u60C5\u51B5\u4E0B WSL2 \u7684\u6587\u4EF6\u7CFB\u7EDF\u76D1\u542C\u53EF\u80FD\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u3002 \u67E5\u770B server.watch \u4E86\u89E3\u66F4\u591A\u7EC6\u8282\u3002</p>',72);function R(a,g){const i=s("font");return o(),n(h,null,[f,l("p",null,[r(i,{color:"red"},{default:e(()=>[t("\u5982\u679C\u4F60\u6307\u5B9A\u4E86 build.lib\uFF0C\u90A3\u4E48 build.assetsInlineLimit \u5C06\u88AB\u5FFD\u7565\uFF0C\u65E0\u8BBA\u6587\u4EF6\u5927\u5C0F\u6216\u662F\u5426\u4E3A Git LFS \u5360\u4F4D\u7B26\uFF0C\u8D44\u6E90\u90FD\u4F1A\u88AB\u5185\u8054\u3002")]),_:1})]),S,_,y,v,D,l("p",null,[r(i,{color:"red"},{default:e(()=>[t("\u5982\u679C\u6307\u5B9A\u4E86 build.lib\uFF0Cbuild.cssCodeSplit \u4F1A\u9ED8\u8BA4\u4E3A false\u3002")]),_:1})]),k],64)}const p={render:R};p.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/viteStructure.md";const j={components:{MarkDownComponent:p}};function C(a,g,i,w,L,x){const d=s("MarkDownComponent");return o(),n("article",null,[r(d)])}const O=m(j,[["render",C]]);export{O as default};
