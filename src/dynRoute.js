export default [
  {
    path: '/technology',
    component: () => import('./components/Home/Technology/index.vue'),
    meta: {
      textName: 'markdown',
      role: ['admin', 'editor']
    },
    children: [
      {
        path: '',
        component: () => import('./components/Home/Technology/markdown.vue')
      },
      {
        path: '/markdown',
        component: () => import('./components/Home/Technology/markdown.vue'),
        meta: {
          textName: 'markdown'
        }
      },
      {
        path: '/git',
        component: () => import('./components/Home/Technology/git.vue'),
        meta: {
          textName: 'git'
        }
      }
    ]
  },
  {
    path: '/buildtools',
    component: () => import('./components/Home/BuildTools/index.vue'),
    meta: {
      role: ['admin', 'editor']
    },
    children: [
      {
        path: '',
        component: () => import('./components/Home/BuildTools/webpack.vue'),
        meta: {
          textName: 'webpack'
        },
      },
      {
        path: '/webpack',
        component: () => import('./components/Home/BuildTools/webpack.vue'),
        meta: {
          textName: 'webpack'
        }
      },
      {
        path: '/vite-intro',
        component: () => import('./components/Home/BuildTools/Vite/intro.vue'),
        meta: {
          textName: 'vite介绍'
        }
      },
      {
        path: '/vite-start',
        component: () => import('./components/Home/BuildTools/Vite/viteStart.vue'),
        meta: {
          textName: 'vite开始'
        }
      },
      {
        path: '/vite-general',
        component: () => import('./components/Home/BuildTools/Vite/general.vue'),
        meta: {
          textName: '配置vite'
        }
      },
      {
        path: '/vite-shareConfigure',
        component: () => import('./components/Home/BuildTools/Vite/shareConFigure.vue'),
        meta: {
          textName: 'vite共享配置'
        }
      },
      {
        path: '/vite-serve',
        component: () => import('./components/Home/BuildTools/Vite/viteServe.vue'),
        meta: {
          textName: 'vite开发服务器选项'
        }
      },
      {
        path: '/vite-structure',
        component: () => import('./components/Home/BuildTools/Vite/structure.vue'),
        meta: {
          textName: 'vite构建选项'
        }
      },
      {
        path: '/vite-preview',
        component: () => import('./components/Home/BuildTools/Vite/vitePreview.vue'),
        meta: {
          textName: 'vite预览选项'
        }
      },
      {
        path: '/vite-relyon',
        component: () => import('./components/Home/BuildTools/Vite/relyOn.vue'),
        meta: {
          textName: 'vite依赖优化'
        }
      },
      {
        path: '/vite-ssr',
        component: () => import('./components/Home/BuildTools/Vite/viteSsr.vue'),
        meta: {
          textName: 'viteSSR选项'
        }
      },
      {
        path: '/vite-difference',
        component: () => import('./components/Home/BuildTools/Vite/difference.vue'),
        meta: {
          textName: 'vite与webpack区别'
        }
      },
      {
        path: '/vite-worker',
        component: () => import('./components/Home/BuildTools/Vite/viteWorker.vue'),
        meta: {
          textName: 'viteworker选项'
        }
      }
    ]
  },
  {
    path: '/fontend',
    component: () => import('./components/Home/FontEnd/index.vue'),
    meta: {
      textName: '前端',
      role: ['admin', 'editor']
    },
    children: [
      {
        path: '',
        component: () => import('./components/Home/FontEnd/vue3/Start/briefIntroduction.vue'),
        meta: {
          textName: '简介'
        }
      },
      {
        path: '/vue3',
        children: [
          {
            path: '/vue-briefIntroduction',
            component: () => import('./components/Home/FontEnd/vue3/Start/briefIntroduction.vue'),
            meta: {
              textName: '简介'
            }
          },
          {
            path: '/vue-getStartedQuickly',
            component: () => import('@component/Home/FontEnd/vue3/start/getStartedQuickly.vue'),
            meta: {
              textName: '快速开始'
            }
          },
          {
            path: '/vue-compouted',
            component: () => import('./components/Home/FontEnd/vue3/start/computed.vue'),
            meta: {
              textName: '计算属性'
            }
          },
          {
            path: '/vue-watch',
            component: () => import('./components/Home/FontEnd/vue3/start/watch.vue'),
            meta: {
              textName: '监听器'
            }
          },
          {
            path: '/vue-custorm',
            component: () => import('./components/Home/FontEnd/vue3/start/custorm.vue'),
            meta: {
              textName: '自定义指令'
            }
          },

          {
            path: '/vue3-setupStart',
            component: () => import('./components/Home/FontEnd/vue3/Combined/setup.vue'),
            meta: {
              textName: '组合式API'
            }
          },
          {
            path: '/vue3-setup',
            component: () => import('@component/Home/FontEnd/vue3/Combined/setupTwo.vue'),
            meta: {
              textName: 'setup()'
            }
          },
          {
            path: '/vue3-core',
            component: () => import('@component/Home/FontEnd/vue3/Combined/setupCore.vue'),
            meta: {
              textName: '响应式核心'
            }
          },
          {
            path: '/vue3-tool',
            component: () => import('@component/Home/FontEnd/vue3/Combined/setupTool.vue'),
            meta: {
              textName: '响应式工具'
            }
          },
          //将组件与路由映射起来（1）
          {
            path: '/vue3-routerInstallation',
            component: () => import("@component/Home/FontEnd/vue3/Router/inStallation.vue"),
            meta: {
              textName: '路由安装'
            }
          },
          {
            path: '/vue3-routerGetStart',
            component: () => import("@component/Home/FontEnd/vue3/Router/getStart.vue"),
            meta: {
              textName: '入门'
            }
          },
          {
            path: '/vue3-dynRoutering/:id',
            component: () => import("@component/Home/FontEnd/vue3/Router/dynRoutering.vue"),
            meta: {
              textName: '动态路由'
            }
          },
          {
            path: '/vue3-routerMatch',
            component: () => import("@component/Home/FontEnd/vue3/Router/routerMatch.vue"),
            meta: {
              textName: '路由的匹配语法'
            }
          },
          {
            path: '/vue3-routerNested',
            component: () => import("@component/Home/FontEnd/vue3/Router/routerNested.vue"),
            meta: {
              textName: '路由嵌套'
            }
          },
          {
            path: '/vue3-gorNav',
            component: () => import("@component/Home/FontEnd/vue3/Router/gorNav.vue"),
            meta: {
              textName: '编程式导航'
            }
          },
          {
            path: '/vue3-nameRouter',
            component: () => import("@component/Home/FontEnd/vue3/Router/nameRouter.vue"),
            meta: {
              textName: '命名路由'
            }
          },
          {
            path: '/vue3-nameView',
            component: () => import("@component/Home/FontEnd/vue3/Router/nameView.vue"),
            meta: {
              textName: '命名视图'
            }
          },
          {
            path: '/vue3-redirect',
            component: () => import("@component/Home/FontEnd/vue3/Router/redirect.vue"),
            meta: {
              textName: '重定向和别名'
            }
          },
          {
            path: '/vue3-rotrerParameter',
            component: () => import("@component/Home/FontEnd/vue3/Router/routerParameter.vue"),
            meta: {
              textName: '路由组件传参'
            }
          },
          {
            path: '/vue3-historyMode',
            component: () => import("@component/Home/FontEnd/vue3/Router/historyMode.vue"),
            meta: {
              textName: '不同的历史纪录模式'
            }
          },
          {
            path: '/vue3-routerGuard',
            component: () => import("@component/Home/FontEnd/vue3/Router/routerGuard.vue"),
            meta: {
              textName: '导航守卫'
            }
          },
          {
            path: '/vue3-lazyLoading',
            component: () => import("@component/Home/FontEnd/vue3/Router/lazyLoading.vue"),
            meta: {
              textName: '路由懒加载'
            }
          },
          {
            path: '/pinia-introduce',
            component: () => import("@component/Home/FontEnd/vue3/Pinia/introduce.vue"),
            meta: {
              textName: 'pinia介绍'
            }
          },
          {
            path: '/pinia-start',
            component: () => import("@component/Home/FontEnd/vue3/Pinia/start.vue"),
            meta: {
              textName: 'pinia开始'
            }
          },
          {
            path: '/pinia-store',
            component: () => import("@component/Home/FontEnd/vue3/Pinia/store.vue"),
            meta: {
              textName: '定义Store'
            }
          },
          {
            path: '/pinia-state',
            component: () => import("@component/Home/FontEnd/vue3/Pinia/state.vue"),
            meta: {
              textName: 'State'
            }
          },
          {
            path: '/pinia-getter',
            component: () => import("@component/Home/FontEnd/vue3/Pinia/getter.vue"),
            meta: {
              textName: 'Getter'
            }
          },
          {
            path: '/pinia-action',
            component: () => import("@component/Home/FontEnd/vue3/Pinia/action.vue"),
            meta: {
              textName: 'Action'
            }
          },

        ]
      },
      {
        path: '/ts',
        children: [
          {
            path: '/ts-originalData',
            component: () => import('./components/Home/FontEnd/Ts/originalData.vue'),
            meta: {
              textName: '原始数据类型'
            }
          },
          {
            path: '/ts-arbitranily',
            component: () => import('@component/Home/FontEnd/Ts/arbitrarily.vue'),
            meta: {
              textName: '任意值'
            }
          },
          {
            path: '/ts-typeInference',
            component: () => import('@component/Home/FontEnd/Ts/typeInference.vue'),
            meta: {
              textName: '类型推论'
            }
          },
          {
            path: "/ts-fedratedType",
            component: () => import('@component/Home/Fontend/Ts/federatedType.vue'),
            meta: {
              textName: '联合类型'
            }
          },
          {
            path: '/ts-interface',
            component: () => import('@component/Home/FontEnd/Ts/interface.vue'),
            meta: {
              textName: '对象类型——接口'
            }
          },
          {
            path: '/ts-arrayType',
            component: () => import('@component/Home/FontEnd/Ts/arrayType.vue'),
            meta: {
              textName: '数组的类型'
            }
          },
          {
            path: '/ts-functionType',
            component: () => import("@component/Home/FontEnd/Ts/functionType.vue"),
            meta: {
              textName: '函数的类型'
            }
          },
          {
            path: '/ts-typeAssertions',
            component: () => import("@component/Home/FontEnd/Ts/typeAssertions.vue"),
            meta: {
              textName: '类型断言'
            }
          },
          {
            path: '/ts-builtObject',
            component: () => import("@component/Home/FontEnd/Ts/builtObject.vue"),
            meta: {
              textName: '内置对象'
            }
          },
          {
            path: '/ts-typeAlias',
            component: () => import("@component/Home/FontEnd/Ts/typeAlias.vue"),
            meta: {
              textName: '类型别名'
            }
          },
          {
            path: '/ts-stringLiteral',
            component: () => import("@component/Home/FontEnd/Ts/stringLiteral.vue"),
            meta: {
              textName: '字符串字面量类型'
            }
          },
          {
            path: '/ts-tuples',
            component: () => import("@component/Home/FontEnd/Ts/tuples.vue"),
            meta: {
              textName: '元组'
            }
          },
          {
            path: '/ts-enum',
            component: () => import("@component/Home/FontEnd/Ts/enum.vue"),
            meta: {
              textName: '枚举'
            }
          },
          {
            path: '/ts-generic',
            component: () => import("@component/Home/FontEnd/Ts/generic.vue"),
            meta: {
              textName: '泛型'
            }
          },
          {
            path: '/ts-class',
            component: () => import("@component/Home/FontEnd/Ts/class.vue"),
            meta: {
              textName: '类'
            }
          },
          {
            path: '/ts-classInterface',
            component: () => import("@component/Home/FontEnd/Ts/classInterface.vue"),
            meta: {
              textName: '类与接口'
            }
          },
          {
            path: '/ts-declarationMerge',
            component: () => import('@component/Home/FontEnd/Ts/declarationMerge.vue'),
            meta: {
              textName: '声明合并'
            }
          }
        ]
      },
      {
        path: '/js',
        children: [
          {
            path: "/js-proxy",
            component: () => import('@component/Home/FontEnd/Js/proxy.vue'),
            meta: {
              textName: 'proxy'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/interview',
    component: () => import('./components/Home/InterView/index.vue'),
    meta: {
      textName: '面试',
      role: ['admin']
    },
    children: [
      {
        path: '',
        component: () => import('@component/Home/InterView/Integrated/permissions.vue'),
        meta: {
          textName: '权限管理'
        }
      },
      {
        path: '/interview-permissions',
        component: () => import('@component/Home/InterView/Integrated/permissions.vue'),
        meta: {
          textName: '权限管理'
        }
      },
      {
        path: '/interview-prototype',
        component: () => import('@component/Home/InterView/JsView/prototype.vue'),
        meta: {
          textName: '原型/原型链'
        }
      },
      {
        path: '/interview-eventCycle',
        component: () => import('@component/Home/InterView/JsView/eventCycle.vue'),
        meta: {
          textName: '事件循环'
        }
      },
      {
        path: '/interview-select',
        component: () => import('@component/Home/InterView/CssView/select.vue'),
        meta: {
          textName: 'css选择器'
        }
      },
      {
        path: '/interview-center',
        component: () => import('@component/Home/InterView/CssView/center.vue'),
        meta: {
          textName: '元素水平垂直居中'
        }
      },
      {
        path: '/interview-layout',
        component: () => import('@component/Home/InterView/CssView/layout.vue'),
        meta: {
          textName: '双栏/三栏布局'
        }
      },
      {
        path: '/interview-bfc',
        component: () => import('@component/Home/InterView/CssView/bfc.vue'),
        meta: {
          textName: 'BFC'
        }
      },
      {
        path: '/interview-scattered',
        component: () => import('@component/Home/InterView/CssView/scattered.vue'),
        meta: {
          textName: '零散'
        }
      },
      {
        path: '/interview-copy',
        component: () => import('@component/Home/InterView/JsView/copy.vue'),
        meta: {
          textName: '浅拷贝/深拷贝'
        }
      },
      {
        path: '/interview-debounce',
        component: () => import('@component/Home/InterView/JsView/debounce.vue'),
        meta: {
          textName: '防抖/节流'
        }
      },
      {
        path: '/interview-comm',
        component: () => import('@component/Home/InterView/VueView/comm.vue'),
        meta: {
          textName: '组件通信'
        }
      },
      {
        path: '/template',
        component: () => import('@component/Home/InterView/template.vue'),
        meta: {
          textName: '面试模板'
        }
      }
    ]

  },
  {
    path: '/item',
    component: () => import("@component/Home/Item/index.vue"),
    meta: {
      textName: '项目回顾',
      role: ['admin']
    },
    children: [
      {
        path: '',
        component: () => import('@component/Home/Item/hxfGzh/index.vue'),
        meta: {
          textName: '慧薪福公众号'
        }
      },
      {
        path: '/hxfgzh',
        component: () => import('@component/Home/Item/hxfGzh/index.vue'),
        meta: {
          textName: '慧薪福公众号'
        }
      },
    ]
  }
]