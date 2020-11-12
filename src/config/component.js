import { WEB, WEEX, ALI_MINI_APP, WECHAT, KRAKEN } from './platform';

export const basicBasics = [
  {
    name: '画布组件',
    nameEn: 'Canvas',
    path: 'canvas',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  {
    name: '基础视图',
    nameEn: 'View',
    path: 'view',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  {
    name: '文本组件',
    nameEn: 'Text',
    path: 'text',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  {
    name: '文本输入框',
    nameEn: 'TextInput',
    path: 'textinput',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  {
    name: '链接组件',
    nameEn: 'Link',
    path: 'link',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  {
    name: '图片组件',
    nameEn: 'Image',
    path: 'image',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  {
    name: '复杂图片组件',
    nameEn: 'Picture',
    path: 'picture',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  // {
  //   name: '视频播放组件',
  //   nameEn: 'Video',
  //   path: 'video',
  //   supported: [WEB, WEEX, ALI_MINI_APP],
  // },
  // {
  //   name: '图标组件',
  //   nameEn: 'Icon',
  //   path: 'icon',
  // },
  // {
  //   name: '弹层组件',
  //   nameEn: 'Modal',
  //   path: 'modal',
  // },
];

export const basicContainers = [
  {
    name: '滚动容器',
    nameEn: 'ScrollView',
    path: 'scrollview',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  {
    name: '瀑布流',
    nameEn: 'WaterFall',
    path: 'waterfall',
    supported: [WEB, WEEX],
  },
  // {
  //   name: '可回收容器',
  //   nameEn: 'RecyclerView',
  //   path: 'recyclerview',
  //   supported: [WEB, WEEX],
  // },
];
export const functionComponents = [
  // {
  //   name: '嵌入式组件',
  //   nameEn: 'Embed',
  //   path: 'embed',
  // },
  {
    name: '画布组件',
    nameEn: 'Canvas',
    path: 'canvas',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  // {
  //   name: '滑块组件',
  //   nameEn: 'Slider',
  //   path: 'slider',
  // },
  // {
  //   name: '倒计时',
  //   nameEn: 'CountDown',
  //   path: 'countdown',
  // },
];

export const basicComponentList = [
  {
    type: '基础组件',
    typeEn: 'Basic Components',
    list: basicBasics,
    // basics.png
    icon: 'https://gw.alicdn.com/tfs/TB1zPtycEH1gK0jSZSyXXXtlpXa-200-200.png',
  },
  {
    type: '基础容器',
    typeEn: 'Basic Containers',
    list: basicContainers,
    // container.png
    icon: 'https://gw.alicdn.com/tfs/TB1ojXBcuP2gK0jSZFoXXauIVXa-200-200.png',
  },
  // {
  //   type: '功能组件',
  //   typeEn: 'Functional Components',
  //   list: functionComponents,
  //   // function.png
  //   icon: 'https://gw.alicdn.com/tfs/TB1m7O4bKbviK0jSZFNXXaApXXa-200-200.png',
  // },
];
