import{Z as a,j as l,s as c,m as n,aa as t,x as o,w as i,F as m,aG as e,a7 as h}from"./index.420141bb.js";const g="/my-personal-blog/assets/leixingduanyan1.7630dde7.png",C="/my-personal-blog/assets/leixingduanyan2.2dcafa1b.png",y="/my-personal-blog/assets/leixingduanyan3.53867484.png",f="/my-personal-blog/assets/leixingduanyan4.ef727fd0.png",v="/my-personal-blog/assets/leiduanyan.54e4359f.png",A="/my-personal-blog/assets/leixingduanyanxianzhi.acd5b653.png",w=n("h3",null,"\u7C7B\u578B\u65AD\u8A00",-1),E=n("p",null,[n("a",{href:"http://ts.xcatliu.com/basics/type-assertion.html"},"\u7C7B\u578B\u65AD\u8A00")],-1),b=n("p",null,"\u7C7B\u578B\u65AD\u8A00\u53EF\u4EE5\u7528\u6765\u624B\u52A8\u6307\u5B9A\u4E00\u4E2A\u503C\u7684\u7C7B\u578B",-1),x=n("h4",null,"\u8BED\u6CD5",-1),S=n("p",null,"\u503C as \u7C7B\u578B",-1),B=n("p",null,"\u6216",-1),D=n("p",null,"<\u7C7B\u578B>\u503C",-1),J=n("p",null,"\u5728tsx\u8BED\u6CD5\uFF08React\u7684jsx\u8BED\u6CD5\u7684ts\u7248)\u4E2D\u5FC5\u987B\u4F7F\u7528\u524D\u8005\uFF0C\u5373\u503Cas\u7C7B\u578B",-1),k=n("br",null,null,-1),F=e('<h4>\u7C7B\u578B\u65AD\u8A00\u7684\u7528\u5904</h4><p>\u7C7B\u578B\u65AD\u8A00\u7684\u5E38\u89C1\u7528\u9014\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><h5>\u5C06\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u65AD\u8A00\u4E3A\u5176\u4E2D\u4E00\u4E2A\u7C7B\u578B</h5><p>\u4E4B\u524D\u8BB2\u8FC7\uFF0C\u5F53ts\u4E0D\u786E\u5B9A\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u7684\u53D8\u91CF\u5230\u5E95\u662F\u54EA\u4E2A\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EA\u80FD\u8BBF\u95EE\u6B64\u8054\u5408\u7C7B\u578B\u7684\u6240\u6709\u7C7B\u578B\u4E2D\u5171\u6709\u7684\u5C5E\u6027\u6216\u65B9\u6CD5</p><img src="'+g+'"><p>\u800C\u6709\u65F6\u5019\uFF0C\u6211\u4EEC\u786E\u5B9E\u9700\u8981\u5728\u8FD8\u4E0D\u786E\u5B9A\u7C7B\u578B\u7684\u65F6\u5019\u5C31\u8BBF\u95EE\u5176\u4E2D\u4E00\u4E2A\u7C7B\u578B\u7279\u6709\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u6BD4\u5982</p><img src="'+C+'"><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u83B7\u53D6animal.swim\u7684\u65F6\u5019\u4F1A\u62A5\u9519</p><p>\u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\uFF0C\u5C06animal\u65AD\u8A00\u6210Fish</p><img src="'+y+'"><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u89E3\u51B3\u8BBF\u95EEanimal.swim\u65F6\u62A5\u9519\u7684\u95EE\u9898\u4E86</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7C7B\u578B\u65AD\u8A00\u53EA\u80FD\u591F\u6B3A\u9A97ts\u7F16\u8F91\u5668\uFF0C\u65E0\u6CD5\u907F\u514D\u8FD0\u884C\u65F6\u7684\u9519\u8BEF\uFF0C\u53CD\u800C\u6EE5\u7528\u7C7B\u578B\u65AD\u8A00\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8FD0\u884C\u65F6\u9519\u8BEF</p><img src="'+f+'"><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u7F16\u8BD1\u65F6\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F46\u5728\u8FD0\u884C\u65F6\u4F1A\u62A5\u9519\uFF0C\u539F\u56E0\u662F(animal As Finsh).swim\u8FD9\u6BB5\u4EE3\u7801\u9690\u85CF\u4E86animal\u53EF\u80FD\u4E3ACat\u7684\u60C5\u51B5\uFF0C\u5C06animal\u76F4\u63A5\u65AD\u8A00\u4E3A\u4E86Fish\u4E86\uFF0C\u800Cts\u7F16\u8BD1\u5668\u4FE1\u4EFB\u4E86\u6211\u4EEC\u7684\u65AD\u8A00\uFF0C\u6545\u5728\u8C03\u7528swim()\u65F6\u6CA1\u6709\u7F16\u8BD1\u9519\u8BEF<br>\u53EF\u662Fswim\u51FD\u6570\u63A5\u53D7\u7684\u53C2\u6570\u662FCat | Finsh,\u4E00\u65E6\u4F20\u5165\u7684\u53C2\u6570\u662FCat\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u7531\u4E8ECat\u4E0A\u6CA1\u6709swim\u65B9\u6CD5\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u8FD0\u884C\u65F6\u9519\u8BEF\u4E86</p><p>\u603B\u4E4B\uFF0C\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u65F6\u4E00\u5B9A\u8981\u683C\u5916\u5C0F\u5FC3\uFF0C\u5C3D\u91CF\u907F\u514D\u65AD\u8A00\u540E\u8C03\u7528\u65B9\u6CD5\u6216\u5F15\u7528\u6DF1\u5C42\u5C5E\u6027\uFF0C\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u8FD0\u884C\u65F6\u9519\u8BEF</p><h5>\u5C06\u4E00\u4E2A\u7236\u7C7B\u65AD\u8A00\u4E3A\u66F4\u52A0\u5177\u4F53\u7684\u5B50\u7C7B</h5><p>\u5F53\u7C7B\u4E4B\u95F4\u6709\u7EE7\u627F\u5173\u7CFB\u65F6\uFF0C\u7C7B\u578B\u65AD\u8A00\u4E5F\u662F\u5F88\u5E38\u89C1\u7684</p><img src="'+v+'"><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u58F0\u660E\u4E86\u51FD\u6570isApiError\uFF0C\u5B83\u7528\u6765\u5224\u65AD\u4F20\u5165\u7684\u53C2\u6570\u662F\u4E0D\u662FApiError\u7C7B\u578B\uFF0C\u4F2A\u7C7B\u5B9E\u73B0\u8FD9\u6837\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u7684\u53C2\u6570\u7684\u7C7B\u578B\u80AF\u5B9A\u5F97\u65F6\u6BD4\u8F83\u62BD\u8C61\u7684\u7236\u7C7BError\uFF0C\u8FD9\u6837\u7684\u8BDD\u8FD9\u4E2A\u51FD\u6570\u5C31\u80FD\u63A5\u53D7Error\u6216\u5B83\u7684\u5B50\u7C7B\u4F5C\u4E3A\u53C2\u6570\u4E86</p><p>\u4F46\u662F\u7531\u4E8E\u7236\u7C7BError\u4E2D\u6CA1\u6709code\u5C5E\u6027\uFF0C\u6545\u76F4\u63A5\u83B7\u53D6error.code\u4F1A\u62A5\u9519\uFF0C\u9700\u8981\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u83B7\u53D6(error as ApiError).code</p><p>\u5927\u5BB6\u53EF\u80FD\u4F1A\u6CE8\u610F\u5230\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u6709\u4E00\u4E2A\u66F4\u5408\u9002\u7684\u65B9\u5F0F\u6765\u5224\u65AD\u662F\u4E0D\u662FApiError\uFF0C\u90A3\u5C31\u662F\u4F7F\u7528instanceof</p>',21),T=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
`)],-1),N=n("p",null,"\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u786E\u5B9E\u4F7F\u7528instanceof\u66F4\u52A0\u5408\u9002\uFF0C\u56E0\u4E3AApiError\u662F\u4E00\u4E2AJavaScript\u7684\u7C7B\uFF0C\u80FD\u591F\u901A\u8FC7instanceof\u6765\u5224\u65ADerror\u662F\u5426\u662F\u5B83\u7684\u5B9E\u4F8B",-1),V=n("p",null,"\u4F46\u662F\u6709\u7684\u60C5\u51B5\u4E0BApiError\u548CHttpError\u4E0D\u662F\u4E00\u4E2A\u771F\u6B63\u7684\u7C7B\uFF0C\u800C\u53EA\u662F\u4E00\u4E2ATs\u7684\u63A5\u53E3\uFF0C\u63A5\u53E3\u662F\u4E00\u4E2A\u7C7B\u578B\uFF0C\u4E0D\u662F\u4E00\u4E2A\u771F\u6B63\u7684\u503C\uFF0C\u5B83\u5728\u7F16\u8BD1\u7ED3\u679C\u4E2D\u4F1A\u88AB\u5220\u9664\uFF0C\u5F53\u7136\u5C31\u65E0\u6CD5\u4F7F\u7528instanceof\u6765\u505A\u8FD0\u884C\u65F6\u5224\u65AD\u4E86\uFF1A",-1),H=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

function isApiError(error: Error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}

// index.ts:9:26 - error TS2693: 'ApiError' only refers to a type, but is being used as a value here.
`)],-1),$=n("p",null,"\u6B64\u65F6\u5C31\u53EA\u80FD\u7528\u7C7B\u578B\u65AD\u8A00\uFF0C\u901A\u8FC7\u5224\u65AD\u662F\u5426\u5B58\u5728 code \u5C5E\u6027\uFF0C\u6765\u5224\u65AD\u4F20\u5165\u7684\u53C2\u6570\u662F\u4E0D\u662F ApiError \u4E86\uFF1A",-1),M=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}
`)],-1),R=n("h5",null,"\u5C06\u4EFB\u4F55\u4E00\u4E2A\u7C7B\u578B\u65AD\u8A00\u4E3Aany",-1),j=n("p",null,"\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0CTypeScript\u7684\u7C7B\u578B\u7CFB\u7EDF\u8FD0\u8F6C\u826F\u597D\uFF0C\u6BCF\u4E2A\u503C\u7684\u7C7B\u578B\u90FD\u5177\u4F53\u800C\u7CBE\u786E",-1),O=n("p",null,"\u5F53\u6211\u4EEC\u5F15\u7528\u4E00\u4E2A\u5728\u6B64\u7C7B\u578B\u4E0A\u4E0D\u5B58\u5728\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u65F6\uFF0C\u5C31\u4F1A\u62A5\u9519",-1),P=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`const foo: number = 1
foo.length//\u62A5\u9519 index.ts:2:5 - error TS2339: Property 'length' does not exist on type 'number'.
`)],-1),q=n("p",null,"\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6570\u5B57\u7C7B\u578B\u7684\u53D8\u91CFfoo\u4E0A\u662F\u6CA1\u6709length\u5C5E\u6027\u7684\uFF0C\u6545TypeScript\u7ED9\u51FA\u4E86\u76F8\u5E94\u7684\u9519\u8BEF\u63D0\u4EA4",-1),z=n("p",null,[t("\u8FD9\u79CD\u9519\u8BEF\u63D0\u793A\u663E\u7136\u662F\u975E\u5E38\u6709\u7528\u7684"),n("br"),t("\u4F46\u6709\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u975E\u5E38\u786E\u5B9A\u8FD9\u6BB5\u4EE3\u7801\u4E0D\u4F1A\u51FA\u9519\uFF0C\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50")],-1),G=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`window.foo = 1
`)],-1),I=n("p",null,"\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u5C06window\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u5C5E\u6027foo\uFF0C\u4F46ts\u7F16\u8BD1\u4F1A\u62A5\u9519\u63D0\u793A\u6211\u4EECwindow\u4E0A\u4E0D\u5B58\u5728foo\u5C5E\u6027",-1),Z=n("p",null,"\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 as any\u4E34\u65F6\u5C06window\u65AD\u8A00\u4E3Aany\u7C7B\u578B",-1),K=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`(window as any).foo =1
`)],-1),L=e("<p>\u5728any\u7C7B\u578B\u7684\u53D8\u91CF\u4E0A\uFF0C\u8BBF\u95EE\u4EFB\u4F55\u5C5E\u6027\u90FD\u662F\u5141\u8BB8\u7684</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5C06\u4E00\u4E2A\u53D8\u91CF\u65AD\u8A00\u4E3Aany\u53EF\u4EE5\u8BF4\u662F\u89E3\u51B3ts\u4E2D\u7C7B\u578B\u95EE\u9898\u7684\u6700\u540E\u4E00\u4E2A\u624B\u65AD</p><p><b>\u5B83\u6781\u6709\u53EF\u80FD\u63A9\u76D6\u4E86\u771F\u6B63\u7684\u7C7B\u578B\u9519\u8BEF\uFF0C\u6240\u4EE5\u5982\u679C\u4E0D\u662F\u975E\u5E38\u786E\u5B9A\uFF0C\u5C31\u4E0D\u8981\u7528as any</b></p><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6269\u5C55window\u7684\u7C7B\u578B\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4E0D\u8FC7\u5982\u679C\u53EA\u662F\u4E34\u65F6\u7684\u589E\u52A0foo\u5C5E\u6027\uFF0Cas any\u4F1A\u66F4\u52A0\u65B9\u4FBF</p><p>\u603B\u4E4B\uFF0C\u4E00\u65B9\u9762\u4E0D\u80FD\u6EE5\u7528as any\u3002\u800C\u53E6\u4E00\u65B9\u9762\u4E5F\u4E0D\u8981\u5B8C\u5168\u5426\u8BA4\u5B83\u7684\u4F5C\u7528\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u7C7B\u578B\u7684\u4E25\u683C\u6027\u548C\u5F00\u53D1\u7684\u4FBF\u5229\u6027\u4E4B\u95F4\u638C\u63E1\u5E73\u8861(\u8FD9\u4E5F\u662Fts\u7684\u8BBE\u8BA1\u7406\u5FF5\u804C\u4E1A)\u624D\u80FD\u53D1\u6325\u51FAts\u6700\u5927\u7684\u4EF7\u503C</p><h5>\u5C06any\u65AD\u8A00\u4E3A\u4E00\u4E2A\u5177\u4F53\u7684\u7C7B\u578B</h5><p>\u5728\u65E5\u5E38\u7684\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u4E0D\u53EF\u907F\u514D\u7684\u9700\u8981\u5904\u7406any\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u5B83\u4EEC\u53EF\u80FD\u662F\u7531\u4E8E\u7B2C\u4E09\u65B9\u5E93\u672A\u80FD\u5B9A\u4E49\u597D\u81EA\u5DF1\u7684\u7C7B\u578B\uFF0C\u4E5F\u6709\u53EF\u80FD\u662F\u5386\u53F2\u9057\u7559\u7684\u6216\u5176\u4ED6\u4EBA\u7F16\u5199\u7684\u70C2\u4EE3\u7801\uFF0C\u8FD8\u53EF\u80FD\u662F\u53D7\u5230ts\u7C7B\u578B\u7CFB\u7EDF\u7684\u9650\u5236\u800C\u65E0\u6CD5\u7CBE\u786E\u5B9A\u4E49\u7C7B\u578B\u7684\u573A\u666F</p><p>\u9047\u5230any\u7C7B\u578B\u7684\u53D8\u91CF\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9009\u4E2D\u65E0\u89C6\u5B83\uFF0C\u4EFB\u7531\u5B83\u6ECB\u751F\u66F4\u591A\u7684any</p><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u9009\u62E9\u6539\u8FDB\u5B83\uFF0C\u901A\u8FC7\u7C7B\u578B\u65AD\u8A00\u53CA\u65F6\u7684\u628Aany\u65AD\u8A00\u4E3A\u7CBE\u786E\u7684\u7C7B\u578B\uFF0C\u4EA1\u7F8A\u8865\u7262\uFF0C\u4F7F\u6211\u4EEC\u7684\u4EE3\u7801\u5411\u7740\u9AD8\u53EF\u7EF4\u62A4\u6027\u7684\u76EE\u6807\u53D1\u5C55</p><p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u5386\u53F2\u9057\u7559\u7684\u4EE3\u7801\u4E2D\u6709\u4E2AgetCacheData,\u5B83\u7684\u8FD4\u56DE\u503C\u662Fany</p>",10),Q=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`funcyion getCacheData(key: string): any{
  return(window as any).cache[key]
}
`)],-1),U=n("p",null,"\u90A3\u4E48\u6211\u4EEC\u5728\u4F7F\u7528\u5B83\u65F6\uFF0C\u6700\u597D\u80FD\u591F\u5C06\u8C03\u7528\u4E86\u5B83\u4E4B\u540E\u7684\u8FD4\u56DE\u503C\u65AD\u8A00\u6210\u4E00\u4E2A\u7CBE\u786E\u7684\u7C7B\u578B\uFF0C\u8FD9\u6837\u5C31\u65B9\u4FBF\u4E86\u540E\u7EED\u7684\u64CD\u4F5C",-1),W=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`function getCacheData(key: string): any{
  return (window as any).cache[key]
}
interface Cat {
  name: string
  run(): void
}
const tom = getCacheData('tom') as Cat
tom.run()
`)],-1),X=e('<p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u8C03\u7528\u5B8CgetCacheData\u4E4B\u540E\uFF0C\u7ACB\u5373\u5C06\u5B83\u65AD\u8A00\u4E3ACat\u7C7B\u578B\u3002\u8FD9\u6837\u7684\u5316\u660E\u786E\u4E86tom\u7684\u7C7B\u578B\uFF0C\u540E\u7EED\u5BF9tom\u7684\u8BBF\u95EE\u65F6\u5C31\u6709\u4E86\u4EE3\u7801\u8865\u5168\uFF0C\u63D0\u9AD8\u4E86\u4EE3\u7801\u7684\u53EF\u7EF4\u62A4\u6027</p><h4>\u7C7B\u578B\u65AD\u8A00\u7684\u9650\u5236</h4><p>\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u603B\u7ED3\u51FA\uFF1A</p><ul><li>\u8054\u5408\u7C7B\u578B\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A\u5176\u4E2D\u4E00\u4E2A\u7C7B\u578B</li><li>\u7236\u7C7B\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A\u5B50\u7C7B</li><li>\u4EFB\u4F55\u7C7B\u578B\u90FD\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A\u5B50\u7C7B</li><li>any\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A\u4EFB\u4F55\u7C7B\u578B</li></ul><p>\u90A3\u4E48\u7C7B\u578B\u65AD\u8A00\u6709\u6CA1\u6709\u4EC0\u4E48\u9650\u5236\u5462\uFF1F\u662F\u4E0D\u662F\u4EFB\u4F55\u4E00\u4E2A\u7C7B\u578B\u90FD\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A\u4EFB\u4F55\u53E6\u4E00\u4E2A\u7C7B\u578B\u5462\uFF1F</p><p>\u7B54\u6848\u662F\u5426\u5B9A\u7684\u2014\u2014\u2014\u2014\u5E76\u4E0D\u662F\u4EFB\u4F55\u4E00\u4E2A\u7C7B\u578B\u90FD\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A\u4EFB\u4F55\u53E6\u4E00\u4E2A\u7C7B\u578B</p><p>\u5177\u4F53\u6765\u8BF4\uFF0C\u82E5A\u517C\u5BB9B\uFF0C\u90A3\u4E48A\u80FD\u591F\u88AB\u65AD\u8A00\u4E3AB\uFF0CB\u4E5F\u80FD\u88AB\u65AD\u8A00\u4E3AA</p><p>\u4E0B\u9762\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u7B80\u5316\u7684\u4F8B\u5B50\uFF0C\u6765\u7406\u89E3\u7C7B\u578B\u65AD\u8A00\u7684\u9650\u5236</p><img src="'+A+'"><p>\u6211\u4EEC\u77E5\u9053\uFF0Cts\u662F\u7ED3\u6784\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u7C7B\u578B\u4E4B\u95F4\u7684\u5BF9\u6BD4\u53EA\u4F1A\u6BD4\u8F83\u5B83\u4EEC\u6700\u7EC8\u7684\u7ED3\u6784\uFF0C\u800C\u4F1A\u5FFD\u7565\u5B83\u4EEC\u5B9A\u4E49\u65F6\u7684\u5173\u7CFB</p><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0CCat\u5305\u542B\u4E86Animal\u4E2D\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u9664\u6B64\u4E4B\u5916\uFF0C\u5B83\u8FD8\u6709\u4E00\u4E2A\u989D\u5916\u7684\u65B9\u6CD5run\u3002ts\u5E76\u4E0D\u5173\u5FC3Cat\u548CAnimal\u4E4B\u95F4\u5B9A\u4E49\u65F6\u662F\u4EC0\u4E48\u5173\u7CFB\uFF0C\u800C\u53EA\u4F1A\u770B\u5B83\u4EEC\u6700\u7EC8\u7684\u7ED3\u6784\u6709\u4EC0\u4E48\u5173\u7CFB\u2014\u2014\u6240\u4EE5\u5B83\u4E0ECat extends Animal\u662F\u7B49\u4EF7\u7684</p>',11),Y=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`interface Animal {
  name: string
}
interface Cat extends Animal{
  run():void
}
`)],-1),nn=n("p",null,"\u90A3\u4E48\u4E5F\u4E0D\u96BE\u7406\u89E3\u4E3A\u4EC0\u4E48Cat\u7C7B\u578B\u7684tom\u53EF\u4EE5\u8D4B\u503C\u7ED9Animal\u7C7B\u578B\u7684animal\u4E86\u5C31\u50CF\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u4E2D\u6211\u4EEC\u53EF\u4EE5\u5C06\u5B50\u7C7B\u7684\u5B9E\u4F8B\u8D4B\u503C\u7ED9\u7C7B\u578B\u4E3A\u7236\u7C7B\u7684\u53D8\u91CF",-1),tn=n("p",null,"\u6211\u4EEC\u628A\u5B83\u6362\u6210ts\u4E2D\u66F4\u4E13\u4E1A\u7684\u8BF4\u6CD5\uFF0C\u5373Animal\u517C\u5BB9Cat",-1),en=n("p",null,"\u5F53Animal\u517C\u5BB9Cat\u65F6\uFF0C\u5B83\u4EEC\u5C31\u53EF\u4EE5\u4E92\u76F8\u8FDB\u884C\u7C7B\u578B\u65AD\u8A00\u4E86",-1),an=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

function testAnimal(animal: Animal) {
    return (animal as Cat);
}
function testCat(cat: Cat) {
    return (cat as Animal);
}
`)],-1),on=e("<p>\u8FD9\u6837\u7684\u8BBE\u8BA1\u5176\u5B9E\u4E5F\u5F88\u5BB9\u6613\u5C31\u80FD\u7406\u89E3\uFF1A</p><ul><li>\u5141\u8BB8 animal as Cat \u662F\u56E0\u4E3A\u300C\u7236\u7C7B\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A\u5B50\u7C7B\u300D\uFF0C\u8FD9\u4E2A\u524D\u9762\u5DF2\u7ECF\u5B66\u4E60\u8FC7\u4E86</li><li>\u5141\u8BB8 cat as Animal \u662F\u56E0\u4E3A\u65E2\u7136\u5B50\u7C7B\u62E5\u6709\u7236\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u90A3\u4E48\u88AB\u65AD\u8A00\u4E3A\u7236\u7C7B\uFF0C\u83B7\u53D6\u7236\u7C7B\u7684\u5C5E\u6027\u3001\u8C03\u7528\u7236\u7C7B\u7684\u65B9\u6CD5\uFF0C\u5C31\u4E0D\u4F1A\u6709\u4EFB\u4F55\u95EE\u9898\uFF0C\u6545\u300C\u5B50\u7C7B\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A\u7236\u7C7B\u300D</li></ul><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u4E86\u7B80\u5316\u7684\u7236\u7C7B\u5B50\u7C7B\u7684\u5173\u7CFB\u6765\u8868\u8FBE\u7C7B\u578B\u7684\u517C\u5BB9\u6027\uFF0C\u800C\u5B9E\u9645\u4E0A TypeScript \u5728\u5224\u65AD\u7C7B\u578B\u7684\u517C\u5BB9\u6027\u65F6\uFF0C\u6BD4\u8FD9\u79CD\u60C5\u51B5\u590D\u6742\u5F88\u591A\uFF0C\u8BE6\u7EC6\u8BF7\u53C2\u8003[\u7C7B\u578B\u7684\u517C\u5BB9\u6027\uFF08TODO)][]\u7AE0\u8282\u3002</p><p>\u603B\u4E4B\uFF0C\u82E5 A \u517C\u5BB9 B\uFF0C\u90A3\u4E48 A \u80FD\u591F\u88AB\u65AD\u8A00\u4E3A B\uFF0CB \u4E5F\u80FD\u88AB\u65AD\u8A00\u4E3A A\u3002</p><p>\u540C\u7406\uFF0C\u82E5 B \u517C\u5BB9 A\uFF0C\u90A3\u4E48 A \u80FD\u591F\u88AB\u65AD\u8A00\u4E3A B\uFF0CB \u4E5F\u80FD\u88AB\u65AD\u8A00\u4E3A A\u3002</p><p>\u6240\u4EE5\u8FD9\u4E5F\u53EF\u4EE5\u6362\u4E00\u79CD\u8BF4\u6CD5\uFF1A</p><p>\u8981\u4F7F\u5F97 A \u80FD\u591F\u88AB\u65AD\u8A00\u4E3A B\uFF0C\u53EA\u9700\u8981 A \u517C\u5BB9 B \u6216 B \u517C\u5BB9 A \u5373\u53EF\uFF0C\u8FD9\u4E5F\u662F\u4E3A\u4E86\u5728\u7C7B\u578B\u65AD\u8A00\u65F6\u7684\u5B89\u5168\u8003\u8651\uFF0C\u6BD5\u7ADF\u6BEB\u65E0\u6839\u636E\u7684\u65AD\u8A00\u662F\u975E\u5E38\u5371\u9669\u7684\u3002</p><p>\u7EFC\u4E0A\u6240\u8FF0\uFF1A</p><ul><li>\u8054\u5408\u7C7B\u578B\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A\u5176\u4E2D\u4E00\u4E2A\u7C7B\u578B</li><li>\u7236\u7C7B\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A\u5B50\u7C7B</li><li>\u4EFB\u4F55\u7C7B\u578B\u90FD\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A any</li><li>any \u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A\u4EFB\u4F55\u7C7B\u578B</li><li>\u8981\u4F7F\u5F97 A \u80FD\u591F\u88AB\u65AD\u8A00\u4E3A B\uFF0C\u53EA\u9700\u8981 A \u517C\u5BB9 B \u6216 B \u517C\u5BB9 A \u5373\u53EF</li></ul><p>\u5176\u5B9E\u524D\u56DB\u79CD\u60C5\u51B5\u90FD\u662F\u6700\u540E\u4E00\u4E2A\u7684\u7279\u4F8B\u3002</p><h4>\u53CC\u91CD\u65AD\u8A00</h4><p>\u65E2\u7136</p><ul><li>\u4EFB\u4F55\u7C7B\u578B\u90FD\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3Aany</li><li>any\u53EF\u4EE5\u88AB\u65AD\u8A00\u4E3A\u4EFB\u4F55\u7C7B\u578B</li></ul><p>\u90A3\u4E48\u6211\u4EEC\u662F\u4E0D\u662F\u80AF\u4F7F\u7528\u53CC\u91CD\u65AD\u8A00as any as Foo\u6765\u5C06\u4EFB\u4F55\u4E00\u4E2A\u7C7B\u578B\u65AD\u8A00\u4E3A\u4EFB\u4F55\u53E6\u4E00\u4E2A\u7C7B\u578B\u5462\uFF1F</p>",14),sn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`interface Cat {
  run(): void
}
interface Fish {
  swim(): void
}
function testCat(cat: Cat){
  return (cat as any as Fish)
}
`)],-1),rn=n("p",null,"\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u82E5\u76F4\u63A5\u4F7F\u7528 cat as Fish \u80AF\u5B9A\u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3A Cat \u548C Fish \u4E92\u76F8\u90FD\u4E0D\u517C\u5BB9\u3002",-1),ln=n("p",null,"\u4F46\u662F\u82E5\u4F7F\u7528\u53CC\u91CD\u65AD\u8A00\uFF0C\u5219\u53EF\u4EE5\u6253\u7834\u300C\u8981\u4F7F\u5F97 A \u80FD\u591F\u88AB\u65AD\u8A00\u4E3A B\uFF0C\u53EA\u9700\u8981 A \u517C\u5BB9 B \u6216 B \u517C\u5BB9 A \u5373\u53EF\u300D\u7684\u9650\u5236\uFF0C\u5C06\u4EFB\u4F55\u4E00\u4E2A\u7C7B\u578B\u65AD\u8A00\u4E3A\u4EFB\u4F55\u53E6\u4E00\u4E2A\u7C7B\u578B\u3002",-1),cn=n("p",null,"\u82E5\u4F60\u4F7F\u7528\u4E86\u8FD9\u79CD\u53CC\u91CD\u65AD\u8A00\uFF0C\u90A3\u4E48\u5341\u6709\u516B\u4E5D\u662F\u975E\u5E38\u9519\u8BEF\u7684\uFF0C\u5B83\u5F88\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8FD0\u884C\u65F6\u9519\u8BEF\u3002",-1),pn=n("p",null,"\u9664\u975E\u8FEB\u4E0D\u5F97\u5DF2\uFF0C\u5343\u4E07\u522B\u7528\u53CC\u91CD\u65AD\u8A00\u3002",-1),un=n("h4",null,"\u7C7B\u578B\u65AD\u8A00 vs \u7C7B\u578B\u8F6C\u6362",-1),_n=n("p",null,"\u7C7B\u578B\u65AD\u8A00\u53EA\u4F1A\u5F71\u54CDts\u7F16\u8BD1\u65F6\u7684\u7C7B\u578B\uFF0C\u7C7B\u578B\u65AD\u8A00\u5728\u7F16\u8BD1\u7ED3\u679C\u4E2D\u4F1A\u88AB\u5220\u9664",-1),dn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`function toBoolean(sonmething: any):boolean{
  return something as boolean
}
toBoolean(1)//\u8FD4\u56DE\u503C\u4E3A1
`)],-1),mn=n("p",null,"\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u5C06something\u65AD\u8A00\u4E3Aboolean\u867D\u7136\u53EF\u4EE5\u901A\u8FC7\u7F16\u8BD1\uFF0C\u4F46\u662F\u5E76\u6CA1\u6709\u4EC0\u4E48\u7528\uFF0C\u4EE3\u7801\u5728\u7F16\u8BD1\u540E\u4F1A\u53D8\u6210",-1),hn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`function toBoolean(something){
  return something
}
toBoolean(1)//\u8FD4\u56DE1
`)],-1),gn=n("p",null,"\u6240\u4EE5\u7C7B\u578B\u65AD\u8A00\u4E0D\u662F\u7C7B\u578B\u8F6C\u6362\uFF0C\u5B83\u4E0D\u4F1A\u771F\u7684\u5F71\u54CD\u5230\u53D8\u91CF\u7684\u7C7B\u578B",-1),Cn=n("p",null,"\u82E5\u8981\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\u3002\u9700\u8981\u76F4\u63A5\u8C03\u7528\u7C7B\u578B\u8F6C\u6362\u7684\u65B9\u6CD5",-1),yn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`function toBoolean(something: any):boolean{
  return Boolean(something)
}
toBoolean(1)//\u8FD4\u56DE\u503C\u4E3Atrue
`)],-1),fn=n("h4",null,"\u7C7B\u578B\u65AD\u8A00 vs\u7C7B\u578B\u58F0\u660E",-1),vn=n("p",null,"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF1A",-1),An=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`function getCacheData(key: string): any{
  return (window as any).cache[key]
}
interface Cat {
  name: string
  run(): void
}
const tom = getCacheData('tom') as Cat
tom.run()
`)],-1),wn=n("p",null,"\u6211\u4EEC\u4F7F\u7528as Cat\u5C06any\u7C7B\u578B\u65AD\u8A00\u4E3A\u4E86Cat\u7C7B\u578B",-1),En=n("p",null,"\u4F46\u5B9E\u9645\u4E0A\u8FD8\u6709\u5176\u4ED6\u65B9\u5F0F\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898",-1),bn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`function getCacheData(key: string): any{
  return (window as any).cache[key]
}
interface Cat{
  name: string
  run(): void
}
const tom: Cat = getCacheData('tom')
tom.run()
`)],-1),xn=n("p",null,"\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7\u7C7B\u578B\u58F0\u660E\u7684\u65B9\u5F0F\uFF0C\u5C06tom\u58F0\u660E\u4E3ACat,\u7136\u540E\u518D\u5C06any\u7C7B\u578B\u7684getCacheData('tom')\u8D4B\u503C\u7ED9Cat\u7C7B\u578B\u7684tom",-1),Sn=n("p",null,"\u8FD9\u548C\u7C7B\u578B\u65AD\u8A00\u662F\u975E\u5E38\u76F8\u4F3C\u7684\uFF0C\u800C\u4E14\u4EA7\u751F\u7684\u7ED3\u679C\u4E5F\u51E0\u4E4E\u662F\u4E00\u6837\u7684\u2014\u2014tom\u5728\u63A5\u4E0B\u6765\u7684\u4EE3\u7801\u4E2D\u90FD\u53D8\u6210\u4E86Cat\u7C7B\u578B",-1),Bn=n("p",null,"\u5B83\u4EEC\u7684\u533A\u522B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u4F8B\u5B50\u7406\u89E3",-1),Dn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

const animal: Animal = {
    name: 'tom'
};
let tom = animal as Cat;
`)],-1),Jn=n("p",null,"\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u7531\u4E8EAnimal\u517C\u5BB9Cat\uFF0C\u6545\u53EF\u4EE5\u5C06animal\u65AD\u8A00\u4E3ACat\u8D4B\u503C\u7ED9tom",-1),kn=n("p",null,"\u4F46\u662F\u82E5\u76F4\u63A5\u58F0\u660Etom\u4E3ACat\u7C7B\u578B",-1),Fn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

const animal: Animal = {
    name: 'tom'
};
let tom: Cat = animal;
// index.ts:12:5 - error TS2741: Property 'run' is missing in type 'Animal' but required in type 'Cat'.
`)],-1),Tn=n("p",null,"\u5219\u4F1A\u62A5\u9519\uFF0C\u4E0D\u5141\u8BB8\u5C06 animal \u8D4B\u503C\u4E3A Cat \u7C7B\u578B\u7684 tom\u3002",-1),Nn=n("p",null,"\u8FD9\u5F88\u5BB9\u6613\u7406\u89E3\uFF0CAnimal \u53EF\u4EE5\u770B\u4F5C\u662F Cat \u7684\u7236\u7C7B\uFF0C\u5F53\u7136\u4E0D\u80FD\u5C06\u7236\u7C7B\u7684\u5B9E\u4F8B\u8D4B\u503C\u7ED9\u7C7B\u578B\u4E3A\u5B50\u7C7B\u7684\u53D8\u91CF\u3002",-1),Vn=n("p",null,"\u6DF1\u5165\u7684\u8BB2\uFF0C\u5B83\u4EEC\u7684\u6838\u5FC3\u533A\u522B\u5C31\u5728\u4E8E\uFF1A",-1),Hn=n("ul",null,[n("li",null,"animal \u65AD\u8A00\u4E3A Cat\uFF0C\u53EA\u9700\u8981\u6EE1\u8DB3 Animal \u517C\u5BB9 Cat \u6216 Cat \u517C\u5BB9 Animal \u5373\u53EF"),n("li",null,"animal \u8D4B\u503C\u7ED9 tom\uFF0C\u9700\u8981\u6EE1\u8DB3 Cat \u517C\u5BB9 Animal \u624D\u884C")],-1),$n=n("p",null,"\u4F46\u662F Cat \u5E76\u4E0D\u517C\u5BB9 Animal\u3002",-1),Mn=n("p",null,"\u800C\u5728\u524D\u4E00\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u7531\u4E8E getCacheData('tom') \u662F any \u7C7B\u578B\uFF0Cany \u517C\u5BB9 Cat\uFF0CCat \u4E5F\u517C\u5BB9 any\uFF0C\u6545",-1),Rn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`const tom = getCacheData('tom') as Cat;
`)],-1),jn=n("p",null,"\u7B49\u4EF7\u4E8E",-1),On=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`const tom: Cat = getCacheData('tom');
`)],-1),Pn=n("p",null,"\u77E5\u9053\u4E86\u5B83\u4EEC\u7684\u6838\u5FC3\u533A\u522B\uFF0C\u5C31\u77E5\u9053\u4E86\u7C7B\u578B\u58F0\u660E\u662F\u6BD4\u7C7B\u578B\u65AD\u8A00\u66F4\u52A0\u4E25\u683C\u7684\u3002",-1),qn=n("p",null,"\u6240\u4EE5\u4E3A\u4E86\u589E\u52A0\u4EE3\u7801\u7684\u8D28\u91CF\uFF0C\u6211\u4EEC\u6700\u597D\u4F18\u5148\u4F7F\u7528\u7C7B\u578B\u58F0\u660E\uFF0C\u8FD9\u4E5F\u6BD4\u7C7B\u578B\u65AD\u8A00\u7684 as \u8BED\u6CD5\u66F4\u52A0\u4F18\u96C5\u3002",-1),zn=n("h4",null,"\u7C7B\u578B\u65AD\u8A00 vs \u6CDB\u578B",-1),Gn=n("p",null,"\u8FD8\u662F\u8FD9\u4E2A\u4F8B\u5B50",-1),In=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();
`)],-1),Zn=n("p",null,"\u6211\u4EEC\u8FD8\u6709\u7B2C\u4E09\u79CD\u65B9\u5F0F\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u90A3\u5C31\u662F\u6CDB\u578B\uFF1A",-1),Kn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`function getCacheData<T>(key: string): T {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData<Cat>('tom');
tom.run();
`)],-1);function Ln(u,_){const s=a("foo"),r=a("t");return l(),c(m,null,[w,E,b,x,S,B,D,J,n("p",null,[t("\u5F62\u5982"),o(s,null,{default:i(()=>[t("\u7684\u8BED\u6CD5\u5728tsx\u4E2D\u8868\u793A\u7684\u662F\u4E00\u4E2AReactNode\uFF0C\u5728ts\u4E2D\u51FA\u6765\u8868\u793A\u7C7B\u578B\u65AD\u8A00\u4E4B\u5916\uFF0C\u4E5F\u53EF\u80FD\u662F\u8868\u793A\u4E00\u4E2A\u6CDB\u578B"),k,t("\u6545\u5EFA\u8BAE\u5927\u5BB6\u5728\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u65F6\uFF0C\u7EDF\u4E00\u4F7F\u7528\u503C as \u7C7B\u578B\u8FD9\u6837\u7684\u8BED\u6CD5\uFF0C\u672C\u4E66\u4E2D\u4E5F\u4F1A\u8D2F\u5F7B\u8FD9\u4E00\u601D\u60F3")]),_:1})]),F,T,N,V,H,$,M,R,j,O,P,q,z,G,I,Z,K,L,Q,U,W,X,Y,nn,tn,en,an,on,sn,rn,ln,cn,pn,un,_n,dn,mn,hn,gn,Cn,yn,fn,vn,An,wn,En,bn,xn,Sn,Bn,Dn,Jn,kn,Fn,Tn,Nn,Vn,Hn,$n,Mn,Rn,jn,On,Pn,qn,zn,Gn,In,Zn,Kn,n("p",null,[t("\u901A\u8FC7\u7ED9 getCacheData \u51FD\u6570\u6DFB\u52A0\u4E86\u4E00\u4E2A\u6CDB\u578B "),o(r,null,{default:i(()=>[t("\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u52A0\u89C4\u8303\u7684\u5B9E\u73B0\u5BF9 getCacheData \u8FD4\u56DE\u503C\u7684\u7EA6\u675F\uFF0C\u8FD9\u4E5F\u540C\u65F6\u53BB\u9664\u6389\u4E86\u4EE3\u7801\u4E2D\u7684 any\uFF0C\u662F\u6700\u4F18\u7684\u4E00\u4E2A\u89E3\u51B3\u65B9\u6848")]),_:1})])],64)}const p={render:Ln};p.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/Ts/typeAssertions.md";const Qn={components:{MarkDownComponent:p},setup(){}};function Un(u,_,s,r,Wn,Xn){const d=a("MarkDownComponent");return l(),c("article",null,[o(d)])}const nt=h(Qn,[["render",Un]]);export{nt as default};
