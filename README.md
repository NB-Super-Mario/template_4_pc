### template_4_react_pc

> 项目基于webpack + typescript + react + redux + antd

#### development
```
yarn install 
npm run dev
```

#### build 各个环境编译打包
 > 会在项目根目录下生成 target/template\_4\_react\pc 打包文件;
 > 读取config目录不同配置文件（主要是域名信息）在html及js调整静态资源引用路径及api调用接口域名）
 
- 开发环境编译

  ```
  npm run build
  ```
- 测试1 

  ```
  NODE_ENV=test npm run build
  ```
- 测试2 

  ```
  NODE_ENV=test npm run build
  ```
  
- 测试3 

  ```
  NODE_ENV=test3 npm run build
  ```
  
- 预生产 

  ```
  NODE_ENV=pre npm run build
  ```
- 生产 

  ```
  NODE_ENV=prod npm run build
  ```
  
#### serve
>预览编译后代码

```
npm run serve
```

```
.
├── __build
├── config # 不同 NODE_ENV 配置文件
├── src # 源代码位置
│   ├── css # mixins 文件
│   ├── dll # webpack dll 文件临时目录
│   ├── scripts # js 位置
│   │   ├── actions  # redux action 
│   │   ├── api # 与api 通信封装
│   │   │   ├── city
│   │   │   ├── foo
│   │   │   ├── form
│   │   │   └── mock
│   │   ├── common # 通用 js svg 字体 解决webpack 打包重复问题
│   │   │   └── fonts
│   │   ├── components # 自有组件库
│   │   │   ├── amap-demo
│   │   │   ├── car-category-demo
│   │   │   ├── charts
│   │   │   │   ├── bar
│   │   │   │   ├── chart-card
│   │   │   │   ├── field
│   │   │   │   ├── min-area
│   │   │   │   ├── min-bar
│   │   │   │   └── min-progress
│   │   │   ├── dashboard-demo
│   │   │   ├── detail-demo
│   │   │   ├── detail-list
│   │   │   ├── error-page
│   │   │   │   └── img
│   │   │   ├── footer
│   │   │   ├── form-demo
│   │   │   ├── form-detail-list
│   │   │   ├── gallery-demo
│   │   │   ├── header
│   │   │   │   └── img
│   │   │   ├── left-menu
│   │   │   │   └── img
│   │   │   ├── list-demo
│   │   │   ├── loading
│   │   │   ├── main
│   │   │   ├── main-frame
│   │   │   ├── navigation-bar
│   │   │   ├── not-found
│   │   │   │   └── img
│   │   │   ├── notice-message
│   │   │   ├── page-header
│   │   │   ├── preview-image
│   │   │   ├── tab-page
│   │   │   ├── trend
│   │   │   └── upload-item
│   │   ├── constants # 常量定义
│   │   ├── entry # 入口文件
│   │   ├── lib # 三方库 不需要webpack 打包
│   │   │   └── min
│   │   ├── pages # 页面入口
│   │   │   ├── amap
│   │   │   ├── car-category
│   │   │   ├── dashboard
│   │   │   ├── detail
│   │   │   ├── form
│   │   │   ├── gallery
│   │   │   ├── home
│   │   │   │   └── img
│   │   │   └── list
│   │   ├── reducers # redux reducers
│   │   ├── routes # 路由
│   │   │   ├── home
│   │   │   │   ├── detail
│   │   │   │   ├── home
│   │   │   │   │   └── img
│   │   │   │   └── index
│   │   │   ├── login
│   │   │   │   ├── index
│   │   │   │   ├── login
│   │   │   │   │   └── img
│   │   │   │   ├── reset
│   │   │   │   │   └── img
│   │   │   │   └── reset-state
│   │   │   │       └── img
│   │   │   └── no-match
│   │   ├── store # store 初始化
│   │   └── util # 工具&函数
│   │       └── location
│   └── static-res # webpack 打包需要 合并的静态资源
│       ├── css
│       ├── icons
│       ├── img
│       ├── mock
│       ├── remote-data
│       └── svg
└── target # 编译后目录
    └── template_4_react_pc
        ├── css
        ├── img
        ├── lib
        ├── scripts
        ├── static-icons
        ├── static-img
        └── static-mock
```