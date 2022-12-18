import{aI as s,a8 as n,a1 as p,l as i,z as l,A as g}from"./index.19214576.js";const h="/my-personal-blog/assets/previewhost.bcd63c69.png",c="/my-personal-blog/assets/previewport.18fece2f.png",a=s('<h3>\u9884\u89C8\u9009\u9879</h3><p><a href="https://cn.vitejs.dev/config/preview-options.html">\u9884\u89C8\u9009\u9879</a></p><hr><h4>preview.host</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> string | boolean</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> server.host</li></ul><p>\u4E3A\u5F00\u53D1\u670D\u52A1\u5668\u6307\u5B9Aip\u5730\u5740\u3002\u8BBE\u7F6E\u4E3A0.0.0.0\u6216true\u4F1A\u76D1\u542C\u6240\u6709\u5730\u5740\uFF0C\u5305\u62EC\u5C40\u57DF\u7F51\u548C\u516C\u5171\u5730\u5740 \u8FD8\u53EF\u4EE5\u901A\u8FC7CLI\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u4F7F\u7528--host 0.0.0.0\u6216--host </p><img src="'+h+'"><hr><h4>preview.port</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> number</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> 4173</li></ul><p>\u6307\u5B9A\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3\u3002\u6CE8\u610F\u5982\u679C\u8BBE\u7F6E\u7684\u7AEF\u53E3\u5DF2\u88AB\u4F7F\u7528\uFF0CVite\u5C06\u81EA\u52A8\u5C1D\u8BD5\u4E0B\u4E00\u4E2A\u53EF\u7528\u7AEF\u53E3\uFF0C\u6240\u4EE5\u8FD9\u53EF\u80FD\u4E0D\u662F\u6700\u7EC8\u76D1\u542C\u7684\u670D\u52A1\u5668\u7AEF\u53E3</p><p>\u793A\u4F8B\uFF1A</p><img src="'+c+'"><hr><h4>preview.stricPort</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> server.strictPort</li></ul><p>\u8BBE\u7F6E\u4E3Atrue\u65F6\uFF0C\u5982\u679C\u7AEF\u53E3\u5DF2\u88AB\u4F7F\u7528\u5219\u76F4\u63A5\u9000\u51FA\uFF0C\u800C\u4E0D\u4F1A\u518D\u8FDB\u884C\u540E\u7EED\u7AEF\u53E3\u7684\u5C1D\u8BD5</p><hr><h4>preview.https</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean | https.ServerOptions</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> server.https</li></ul><p>\u542F\u7528TLS+HTTP/2.\u6CE8\u610F\uFF0C\u53EA\u6709\u5728\u4E0Eserve.proxy\u9009\u9879\u540C\u65F6\u4F7F\u7528\u65F6\uFF0C\u624D\u4F1A\u964D\u7EA7\u4E3ATLS</p><p>\u8BE5\u503C\u4E5F\u53EF\u4EE5\u4F20\u9012\u7ED9https.createServer()\u7684options\u5BF9\u8C61</p><hr><h4>preview.open</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> booleab | string</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> server.open</li></ul><p>\u5F00\u53D1\u670D\u52A1\u5668\u542F\u52A8\u65F6\uFF0C\u81EA\u52A8\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5E94\u7528\u7A0B\u5E8F\u3002\u5F53\u8BE5\u503C\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u5B83\u5C06\u88AB\u7528\u4F5C URL \u7684\u8DEF\u5F84\u540D\u3002\u5982\u679C\u4F60\u60F3\u5728\u4F60\u559C\u6B22\u7684\u67D0\u4E2A\u6D4F\u89C8\u5668\u6253\u5F00\u8BE5\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF process.env.BROWSER \uFF08\u4F8B\u5982 firefox\uFF09</p><hr><h4>preview.proxy</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> Record&lt;string, string | ProxyOptions&gt;</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> server.proxy</li></ul><p>\u4E3A\u5F00\u53D1\u670D\u52A1\u5668\u914D\u7F6E\u81EA\u5B9A\u4E49\u4EE3\u7406\u89C4\u5219\u3002\u5176\u503C\u7684\u7ED3\u6784\u4E3A { key: options } \u7684\u5BF9\u8C61\u3002\u5982\u679C key \u4EE5 ^ \u5F00\u5934\uFF0C\u5B83\u5C06\u88AB\u8BC6\u522B\u4E3A RegExp\uFF0C\u5176\u4E2D configure \u9009\u9879\u53EF\u7528\u4E8E\u8BBF\u95EE\u4EE3\u7406\u5B9E\u4F8B</p><hr><h4>preview.cors</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> boolean | CorsOptions</li><li><strong>\u9ED8\u8BA4\uFF1A</strong> server.cors</li></ul><p>\u4E3A\u5F00\u53D1\u670D\u52A1\u5668\u914D\u7F6ECORS\u3002\u6B64\u529F\u80FD\u9ED8\u8BA4\u542F\u7528\u5E76\u652F\u6301\u4EFB\u4F55\u6765\u6E90\u3002\u53EF\u4F20\u9012\u4E00\u4E2Aoptions\u5BF9\u8C61\u6765\u8FDB\u884C\u914D\u7F6E\uFF0C\u6216\u8005\u4F20\u9012false\u6765\u7981\u7528\u6B64\u884C\u4E3A</p><hr><h4>preview.headers</h4><ul><li><strong>\u7C7B\u578B\uFF1A</strong> OutgoingHttpHeaders</li></ul><p>\u6307\u660E\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u54CD\u5E94\u5934</p>',38);function u(e,o){return a}const r={render:u};r.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/vitePreview.md";const v={components:{MarkDownComponent:r}};function m(e,o,_,d,w,f){const t=p("MarkDownComponent");return i(),l("article",null,[g(t)])}const x=n(v,[["render",m]]);export{x as default};
