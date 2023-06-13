import{aG as s,a7 as n,Z as i,j as a,s as u,x as r}from"./index.6a6c2c3a.js";const A="/my-personal-blog/assets/xuanxiangshiapi.e3f2c350.png",c=s('<h3>\u4EC0\u4E48\u662F\u7EC4\u5408\u5F0FAPi</h3><p><a href="https://cn.vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api">\u7EC4\u5408\u5F0Fapi\u4ECB\u7ECD</a></p><p>\u7EC4\u5408\u5F0Fapi\u662F\u4E00\u7CFB\u5217API\u7684\u96C6\u5408\uFF0C\u4F7F\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u800C\u4E0D\u662F\u58F0\u660E\u9009\u9879\u7684\u65B9\u5F0F\u4E66\u5199Vue\u7EC4\u4EF6\u3002\u5B83\u662F\u4E00\u4E2A\u6982\u62EC\u6027\u7684\u672F\u8BED\uFF0C\u6DB5\u76D6\u4E86\u4EE5\u4E0B\u65B9\u9762\u7684API:</p><ul><li>\u54CD\u5E94\u5F0FAPI:\u4F8B\u5982ref()\u548Creactive()\uFF0C\u4F7F\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u521B\u5EFA\u54CD\u5E94\u5F0F\u72B6\u6001\u3001\u8BA1\u7B97\u5C5E\u6027\u548C\u4FA6\u542C\u5668</li><li>\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF1A\u4F8B\u5982onMounted()\u548ConUnmounted()\uFF0C\u4F7F\u6211\u4EEC\u53EF\u4EE5\u5728\u7EC4\u4EF6\u5404\u4E2A\u751F\u547D\u5468\u671F\u9636\u6BB5\u6DFB\u52A0\u903B\u8F91</li><li>\u4F9D\u8D56\u6CE8\u5165\uFF1A\u4F8B\u5982provide()\u548Cinject(),\u4F7F\u6211\u4EEC\u53EF\u4EE5\u5728\u4F7F\u7528\u54CD\u5E94\u5F0FAPI\u65F6\uFF0C\u5229\u7528Vue\u7684\u4F9D\u8D56\u6CE8\u5165\u7CFB\u7EDF</li></ul><h3>\u4E3A\u4EC0\u4E48\u8981\u6709\u7EC4\u5408\u5F0FAPI?</h3><h4>\u66F4\u597D\u7684\u903B\u8F91\u590D\u7528</h4><p>\u7EC4\u5408\u5F0Fapi\u6700\u57FA\u672C\u7684\u4F18\u52BF\u662F\u5B83\u80FD\u4F7F\u6211\u4EEC\u901A\u8FC7\u7EC4\u5408\u51FD\u6570\u6765\u5B9E\u73B0\u66F4\u52A0\u7B80\u6D01\u9AD8\u6548\u7684\u903B\u8F91\u590D\u7528\u3002\u5728\u9009\u9879\u5F0FAPi\u4E2D\u6211\u4EEC\u6CE8\u610F\u7684\u903B\u8F91\u590D\u7528\u673A\u5236\u662Fmixins\uFF0C\u800C\u7EC4\u5408\u5F0FAPI\u89E3\u51B3\uFF1B\u4E86mixins\u7684\u6240\u6709\u7F3A\u9677</p><h4>\u66F4\u7075\u6D3B\u7684\u4EE3\u7801\u7EC4\u7EC7</h4><p>\u8BB8\u591A\u7528\u6237\u559C\u6B22\u9009\u9879\u5F0FAPI\u7684\u539F\u56E0\u662F\u5B83\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5C31\u80FD\u591F\u8BA9\u4EBA\u5199\u51FA\u6709\u7EC4\u7EC7\u7684\u4EE3\u7801\uFF1A\u5927\u90E8\u5206\u4EE3\u7801\u90FD\u81EA\u7136\u5730\u88AB\u653E\u8FDB\u4E86\u5BF9\u5E94\u7684\u9009\u9879\u91CC\u3002\u7136\u800C\uFF0C\u9009\u9879\u5F0FAPI\u5728\u5355\u4E2A\u7EC4\u4EF6\u7684\u903B\u8F91\u590D\u6742\u5230\u4E00\u5B9A\u7A0B\u5EA6\u65F6\uFF0C\u4F1A\u9762\u4E34\u4E00\u4E9B\u65E0\u6CD5\u5FFD\u89C6\u7684\u9650\u5236\u3002\u8FD9\u4E9B\u9650\u5236\u4E3B\u8981\u4F53\u73B0\u5728\u9700\u8981\u5904\u7406\u591A\u4E2A\u903B\u8F91\u5173\u6CE8\u70B9\u7684\u7EC4\u4EF6\u4E2D\uFF0C\u8FD9\u662F\u6211\u4EEC\u5728\u8BB8\u591AVue2\u7684\u5B9E\u9645\u6848\u4F8B\u4E2D\u6240\u89C2\u5BDF\u5230\u7684</p><p>\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u5904\u7406\u76F8\u540C\u903B\u8F91\u5173\u6CE8\u70B9\u7684\u4EE3\u7801\u88AB\u5F3A\u5236\u62C6\u5206\u5728\u4E86\u4E0D\u540C\u7684\u9009\u9879\u4E2D\uFF0C\u4F4D\u4E8E\u6587\u4EF6\u7684\u4E0D\u540C\u90E8\u5206\u3002\u5728\u4E00\u4E2A\u51E0\u767E\u884C\u7684\u5927\u7EC4\u4EF6\u4E2D\uFF0C\u8981\u8BFB\u61C2\u4EE3\u7801\u4E2D\u7684\u4E00\u4E2A\u903B\u8F91\u5173\u6CE8\u70B9\uFF0C\u9700\u8981\u5728\u6587\u4EF6\u4E2D\u53CD\u590D\u4E0A\u4E0B\u6EDA\u52A8\uFF0C\u8FD9\u5E76\u4E0D\u7406\u60F3\u3002\u53E6\u5916\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u8981\u5C06\u4E00\u4E2A\u903B\u8F91\u5173\u6CE8\u70B9\u62BD\u53D6\u91CD\u6784\u5230\u4E00\u4E2A\u53EF\u590D\u7528\u7684\u5DE5\u5177\u51FD\u6570\u4E2D\uFF0C\u9700\u8981\u4ECE\u6587\u4EF6\u7684\u591A\u4E2A\u4E0D\u540C\u90E8\u5206\u627E\u5230\u6240\u9700\u7684\u6B63\u786E\u7247\u6BB5\u3002</p><p>\u800C\u5982\u679C\u7528\u7EC4\u5408\u5F0F API \u91CD\u6784\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u5C06\u4F1A\u53D8\u6210\u4E0B\u9762\u53F3\u8FB9\u8FD9\u6837\uFF1A</p><img src="'+A+'"><h4>\u66F4\u597D\u7684\u7C7B\u578B\u63A8\u5BFC</h4><p>\u8FD1\u51E0\u5E74\u6765\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u5F00\u53D1\u8005\u5F00\u59CB\u4F7F\u7528 TypeScript \u4E66\u5199\u66F4\u5065\u58EE\u53EF\u9760\u7684\u4EE3\u7801\uFF0CTypeScript \u8FD8\u63D0\u4F9B\u4E86\u975E\u5E38\u597D\u7684 IDE \u5F00\u53D1\u652F\u6301\u3002\u7136\u800C\u9009\u9879\u5F0F API \u662F\u5728 2013 \u5E74\u88AB\u8BBE\u8BA1\u51FA\u6765\u7684\uFF0C\u90A3\u65F6\u5E76\u6CA1\u6709\u628A\u7C7B\u578B\u63A8\u5BFC\u8003\u8651\u8FDB\u53BB\uFF0C\u56E0\u6B64\u6211\u4EEC\u4E0D\u5F97\u4E0D\u505A\u4E86\u4E00\u4E9B\u590D\u6742\u5230\u5938\u5F20\u7684\u7C7B\u578B\u4F53\u64CD\u624D\u5B9E\u73B0\u4E86\u5BF9\u9009\u9879\u5F0F API \u7684\u7C7B\u578B\u63A8\u5BFC\u3002\u4F46\u5C3D\u7BA1\u505A\u4E86\u8FD9\u4E48\u591A\u7684\u52AA\u529B\uFF0C\u9009\u9879\u5F0F API \u7684\u7C7B\u578B\u63A8\u5BFC\u5728\u5904\u7406 mixins \u548C\u4F9D\u8D56\u6CE8\u5165\u7C7B\u578B\u65F6\u4F9D\u7136\u4E0D\u751A\u7406\u60F3\u3002 </p><p>\u56E0\u6B64\uFF0C\u5F88\u591A\u60F3\u8981\u642D\u914D TS \u4F7F\u7528 Vue \u7684\u5F00\u53D1\u8005\u91C7\u7528\u4E86\u7531 vue-class-component \u63D0\u4F9B\u7684 Class API\u3002\u7136\u800C\uFF0C\u57FA\u4E8E Class \u7684 API \u975E\u5E38\u4F9D\u8D56 ES \u88C5\u9970\u5668\uFF0C\u5728 2019 \u5E74\u6211\u4EEC\u5F00\u59CB\u5F00\u53D1 Vue 3 \u65F6\uFF0C\u5B83\u4ECD\u662F\u4E00\u4E2A\u4EC5\u5904\u4E8E stage 2 \u7684\u8BED\u8A00\u529F\u80FD\u3002\u6211\u4EEC\u8BA4\u4E3A\u57FA\u4E8E\u4E00\u4E2A\u4E0D\u7A33\u5B9A\u7684\u8BED\u8A00\u63D0\u6848\u53BB\u8BBE\u8BA1\u6846\u67B6\u7684\u6838\u5FC3 API \u98CE\u9669\u5B9E\u5728\u592A\u5927\u4E86\uFF0C\u56E0\u6B64\u6CA1\u6709\u7EE7\u7EED\u5411 Class API \u7684\u65B9\u5411\u53D1\u5C55\u3002\u5728\u90A3\u4E4B\u540E\u88C5\u9970\u5668\u63D0\u6848\u679C\u7136\u53C8\u53D1\u751F\u4E86\u5F88\u5927\u7684\u53D8\u52A8\uFF0C\u5728 2022 \u5E74\u624D\u7EC8\u4E8E\u5230\u8FBE stage 3\u3002\u53E6\u4E00\u4E2A\u95EE\u9898\u662F\uFF0C\u57FA\u4E8E Class \u7684 API \u548C\u9009\u9879\u5F0F API \u5728\u903B\u8F91\u590D\u7528\u548C\u4EE3\u7801\u7EC4\u7EC7\u65B9\u9762\u5B58\u5728\u76F8\u540C\u7684\u9650\u5236\u3002</p><p>\u76F8\u6BD4\u4E4B\u4E0B\uFF0C\u7EC4\u5408\u5F0F API \u4E3B\u8981\u5229\u7528\u57FA\u672C\u7684\u53D8\u91CF\u548C\u51FD\u6570\uFF0C\u5B83\u4EEC\u672C\u8EAB\u5C31\u662F\u7C7B\u578B\u53CB\u597D\u7684\u3002\u7528\u7EC4\u5408\u5F0F API \u91CD\u5199\u7684\u4EE3\u7801\u53EF\u4EE5\u4EAB\u53D7\u5230\u5B8C\u6574\u7684\u7C7B\u578B\u63A8\u5BFC\uFF0C\u4E0D\u9700\u8981\u4E66\u5199\u592A\u591A\u7C7B\u578B\u6807\u6CE8\u3002\u5927\u591A\u6570\u65F6\u5019\uFF0C\u7528 TypeScript \u4E66\u5199\u7684\u7EC4\u5408\u5F0F API \u4EE3\u7801\u548C\u7528 JavaScript \u5199\u90FD\u5DEE\u4E0D\u592A\u591A\uFF01\u8FD9\u4E5F\u8BA9\u8BB8\u591A\u7EAF JavaScript \u7528\u6237\u4E5F\u80FD\u4ECE IDE \u4E2D\u4EAB\u53D7\u5230\u90E8\u5206\u7C7B\u578B\u63A8\u5BFC\u529F\u80FD</p><p></p><h4>\u66F4\u5C0F\u7684\u751F\u4EA7\u5305\u4F53\u79EF</h4><p>\u642D\u914D(&quot;&lt;&quot;script&quot; setup&gt;&quot;)\u4F7F\u7528\u7EC4\u5408\u5F0FAPI\u6BD4\u7B49\u4EF7\u60C5\u51B5\u4E0B\u4E0B\u7684\u9009\u9879\u5F0FAPI\u66F4\u9AD8\u6548\uFF0C\u5BF9\u4EE3\u7801\u538B\u7F29\u4E5F\u66F4\u53CB\u597D\u3002\u8FD9\u662F\u7531\u4E8E(&quot;&lt;&quot;script&quot; setup&gt;&quot;)\u5F62\u5F0F\u4E66\u5199\u7684\u7EC4\u4EF6\u6A21\u677F\u88AB\u7F16\u8BD1\u4E3A\u4E86\u4E00\u4E2A\u5185\u8054\u51FD\u6570\uFF0C\u548C(&quot;&lt;&quot;script&quot; setup&gt;&quot;)\u4E2D\u7684\u4EE3\u7801\u4F4D\u4E8E\u540C\u4E00\u4F5C\u7528\u57DF\u3002\u4E0D\u50CF\u9009\u9879\u5F0FAPI\u9700\u8981\u4F9D\u8D56this\u4E0A\u4E0B\u6587\u5BF9\u8C61\u8BBF\u95EE\u5C5E\u6027\uFF0C\u88AB\u7F16\u8BD1\u7684\u6A21\u677F\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE(&quot;&lt;&quot;script&quot; setup&gt;&quot;)\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u65E0\u9700\u4ECE\u4E00\u4E2A\u4EE3\u7801\u5B9E\u4F8B\u4ECE\u4E2D\u4EE3\u7406\u3002\u8FD9\u5BF9\u4EE3\u7801\u538B\u7F29\u66F4\u53CB\u597D\uFF0C\u56E0\u4E3A\u672C\u5730\u53D8\u91CF\u7684\u540D\u5B57\u53EF\u4EE5\u88AB\u538B\u7F29\uFF0C\u4F46\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u5219\u4E0D\u80FD</p><h3>\u4E0E\u9009\u9879\u5F0FAPI\u7684\u5173\u7CFB</h3><h4>\u53D6\u820D</h4><p>\u4E00\u4E9B\u4ECE\u9009\u9879\u5F0FAPI\u8FC1\u79FB\u6765\u7684\u7528\u6237\u53D1\u73B0\uFF0C\u5B83\u4EEC\u7684\u7EC4\u5408\u5F0FAPI\u4EE3\u7801\u7F3A\u4E4F\u7EC4\u7EC7\u6027\uFF0C\u5E76\u5F97\u51FA\u4E86\u7EC4\u5408\u5F0FAPI\u5728\u4EE3\u7801\u7EC4\u7EC7\u65B9\u9762&quot;\u66F4\u7CDF\u7CD5&quot;\u7684\u7ED3\u8BBA\u3002\u6211\u4EEC\u5EFA\u8BAE\u6301\u6709\u8FD9\u7C7B\u89C2\u70B9\u7684\u7528\u6237\u6362\u4E2A\u89D2\u5EA6\u601D\u8003\u8FD9\u4E2A\u7ED9\u95EE\u9898</p><p>\u7EC4\u5408\u5F0F API \u4E0D\u50CF\u9009\u9879\u5F0F API \u90A3\u6837\u4F1A\u624B\u628A\u624B\u6559\u4F60\u8BE5\u628A\u4EE3\u7801\u653E\u5728\u54EA\u91CC\u3002\u4F46\u53CD\u8FC7\u6765\uFF0C\u5B83\u5374\u8BA9\u4F60\u53EF\u4EE5\u50CF\u7F16\u5199\u666E\u901A\u7684 JavaScript \u90A3\u6837\u6765\u7F16\u5199\u7EC4\u4EF6\u4EE3\u7801\u3002\u8FD9\u610F\u5473\u7740\u4F60\u80FD\u591F\uFF0C\u5E76\u4E14\u5E94\u8BE5\u5728\u5199\u7EC4\u5408\u5F0F API \u7684\u4EE3\u7801\u65F6\u4E5F\u8FD0\u7528\u4E0A\u6240\u6709\u666E\u901A JavaScript \u4EE3\u7801\u7EC4\u7EC7\u7684\u6700\u4F73\u5B9E\u8DF5\u3002\u5982\u679C\u4F60\u53EF\u4EE5\u7F16\u5199\u7EC4\u7EC7\u826F\u597D\u7684 JavaScript\uFF0C\u4F60\u4E5F\u5E94\u8BE5\u6709\u80FD\u529B\u7F16\u5199\u7EC4\u7EC7\u826F\u597D\u7684\u7EC4\u5408\u5F0F API \u4EE3\u7801\u3002 </p><p>\u9009\u9879\u5F0F API \u786E\u5B9E\u5141\u8BB8\u4F60\u5728\u7F16\u5199\u7EC4\u4EF6\u4EE3\u7801\u65F6\u201C\u5C11\u601D\u8003\u201D\uFF0C\u8FD9\u662F\u8BB8\u591A\u7528\u6237\u559C\u6B22\u5B83\u7684\u539F\u56E0\u3002\u7136\u800C\uFF0C\u5728\u51CF\u5C11\u8D39\u795E\u601D\u8003\u7684\u540C\u65F6\uFF0C\u5B83\u4E5F\u5C06\u4F60\u9501\u5B9A\u5728\u89C4\u5B9A\u7684\u4EE3\u7801\u7EC4\u7EC7\u6A21\u5F0F\u4E2D\uFF0C\u6CA1\u6709\u6446\u8131\u7684\u4F59\u5730\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u5728\u66F4\u5927\u89C4\u6A21\u7684\u9879\u76EE\u4E2D\u96BE\u4EE5\u8FDB\u884C\u91CD\u6784\u6216\u63D0\u9AD8\u4EE3\u7801\u8D28\u91CF\u3002\u5728\u8FD9\u65B9\u9762\uFF0C\u7EC4\u5408\u5F0F API \u63D0\u4F9B\u4E86\u66F4\u597D\u7684\u957F\u671F\u53EF\u7EF4\u62A4\u6027\u3002</p><p></p><h4>\u7EC4\u5408\u5F0FAPI\u662F\u5426\u8986\u76D6\u4E86\u6240\u6709\u573A\u666F</h4><p>\u7EC4\u5408\u5F0FAPI\u80FD\u591F\u8986\u76D6\u6240\u6709\u72B6\u6001\u903B\u8F91\u65B9\u9762\u7684\u9700\u6C42\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u53EA\u9700\u8981\u7528\u5230\u4E00\u5C0F\u90E8\u5206\u9009\u9879\uFF1Aprops.emits,name\u548CinheritAttrs\uFF0C\u5982\u679C\u4F7F\u7528(&quot;&lt;&quot;script&quot; setup&gt;\uFF0C\u90A3\u4E48inheritAttrs\u5E94\u8BE5\u662F\u552F\u4E00\u4E00\u4E2A\u9700\u8981\u7528\u989D\u5916\u7684(&quot;&lt;&quot;script&quot;&gt;\u5757\u4E66\u5199\u7684\u9009\u9879\u4E86</p><p>\u5982\u679C\u4F60\u5728\u4EE3\u7801\u4E2D\u53EA\u4F7F\u7528\u4E86\u7EC4\u5408\u5F0F API (\u4EE5\u53CA\u4E0A\u8FF0\u5FC5\u9700\u7684\u9009\u9879)\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u7F16\u8BD1\u65F6\u6807\u8BB0\u6765\u53BB\u6389 Vue \u8FD0\u884C\u65F6\u4E2D\u9488\u5BF9\u9009\u9879\u5F0F API \u652F\u6301\u7684\u4EE3\u7801\uFF0C\u4ECE\u800C\u51CF\u5C0F\u751F\u4EA7\u5305\u5927\u6982\u51E0 kb \u5DE6\u53F3\u7684\u4F53\u79EF\u3002\u6CE8\u610F\u8FD9\u4E2A\u914D\u7F6E\u4E5F\u4F1A\u5F71\u54CD\u4F60\u4F9D\u8D56\u4E2D\u7684 Vue \u7EC4\u4EF6\u3002</p><h4>\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\u4E24\u79CD API \u5417\uFF1F</h4><p>\u53EF\u4EE5\u3002\u4F60\u53EF\u4EE5\u5728\u4E00\u4E2A\u9009\u9879\u5F0F API \u7684\u7EC4\u4EF6\u4E2D\u901A\u8FC7 setup() \u9009\u9879\u6765\u4F7F\u7528\u7EC4\u5408\u5F0F API\u3002</p><p>\u7136\u800C\uFF0C\u6211\u4EEC\u53EA\u63A8\u8350\u4F60\u5728\u4E00\u4E2A\u5DF2\u7ECF\u57FA\u4E8E\u9009\u9879\u5F0F API \u5F00\u53D1\u4E86\u5F88\u4E45\u3001\u4F46\u53C8\u9700\u8981\u548C\u57FA\u4E8E\u7EC4\u5408\u5F0F API \u7684\u65B0\u4EE3\u7801\u6216\u662F\u7B2C\u4E09\u65B9\u5E93\u6574\u5408\u7684\u9879\u76EE\u4E2D\u8FD9\u6837\u505A\u3002</p><h4>\u9009\u9879\u5F0F API \u4F1A\u88AB\u5E9F\u5F03\u5417\uFF1F</h4><p>\u4E0D\u4F1A\uFF0C\u6211\u4EEC\u6CA1\u6709\u4EFB\u4F55\u8BA1\u5212\u8FD9\u6837\u505A\u3002\u9009\u9879\u5F0F API \u4E5F\u662F Vue \u4E0D\u53EF\u5206\u5272\u7684\u4E00\u90E8\u5206\uFF0C\u4E5F\u6709\u5F88\u591A\u5F00\u53D1\u8005\u559C\u6B22\u5B83\u3002\u6211\u4EEC\u4E5F\u610F\u8BC6\u5230\u7EC4\u5408\u5F0F API \u66F4\u9002\u7528\u4E8E\u5927\u578B\u7684\u9879\u76EE\uFF0C\u800C\u5BF9\u4E8E\u4E2D\u5C0F\u578B\u9879\u76EE\u6765\u8BF4\u9009\u9879\u5F0F API \u4ECD\u7136\u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\u3002</p>',33);function I(p,e){return c}const t={render:I};t.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/vue3/combinedApi.md";const P={components:{MarkDownComponent:t},setup(){}};function h(p,e,l,m,q,d){const o=i("MarkDownComponent");return a(),u("article",null,[r(o)])}const g=n(P,[["render",h]]);export{g as default};