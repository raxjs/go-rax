import { isKraken } from 'universal-env';
import { WEB, WEEX, ALI_MINI_APP, WECHAT } from './platform';

const animationAPIList = [
  {
    name: '动画',
    nameEn: 'Animation',
    desc: '可以对元素执行一系列的变换操作',
    path: 'animation',
    supported: [WEB, WEEX, ALI_MINI_APP],
  },
  {
    name: '过渡',
    nameEn: 'Transition',
    desc: '用于元素在不同状态之间切换时定义不同的过渡效果',
    path: 'transition',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
];

if (isKraken) {
  // Disable animation for Kraken.
  animationAPIList.shift(); 
}

const feedbackAPIList = [
  {
    name: '消息提示框',
    nameEn: 'Toast',
    desc: '消息提示框，通用弱提示',
    path: 'toast',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  {
    name: '警告框',
    nameEn: 'Alert',
    desc: '警告框，可以配置警告框的标题、内容、按钮文字等',
    path: 'alert',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  {
    name: '确认框',
    nameEn: 'Confirm',
    desc: '用于提示的确认框',
    path: 'confirm',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  }
];

const navigationAPIList = [
  {
    name: '页面跳转',
    nameEn: 'Navigate',
    desc: '从当前页面，跳转到某个指定页面',
    path: 'navigate',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  }
];

const mediaAPIList = [
  {
    name: '图片',
    nameEn: 'ChooseImage',
    desc: '拍照或从本地相册中选择图片',
    path: 'chooseimage',
    supported: [WEB, ALI_MINI_APP, WECHAT],
  }
];

if (isKraken) {
  // Disable chooseimage for Kraken.
  mediaAPIList.shift(); 
}

const networkAPIList = [
  {
    name: '网络请求',
    nameEn: 'Request',
    desc: '用于发起网络请求',
    path: 'request',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  // {
  //   name: 'MTOP',
  //   nameEn: 'MTOP',
  //   desc: 'MTOP（Mobile Taobao Open Platform）为客户端和服务端提供了一致的API平台，集成了大量的业务接口，支持客户端、H5的接入',
  //   path: 'mtop',
  //   supported: [WEB, WEEX, ALI_MINI_APP],
  // },
];

const systemAPIList = [
  {
    name: '运行时环境',
    nameEn: 'Env',
    desc: '判断和获取运行时环境',
    path: 'env',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  {
    name: '系统信息',
    nameEn: 'Device',
    desc: '获取系统信息',
    path: 'device',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  {
    name: '剪贴板',
    nameEn: 'Clipboard',
    desc: '获取或设置剪贴板数据',
    path: 'clipboard',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  },
  {
    name: '应用显示或隐藏',
    nameEn: 'AppState',
    desc: '应用被显示或即将被置于后台，仅在 Weex 端支持',
    path: 'appstate',
    supported: [WEEX],
  }
];

const dataAPIList = [
  {
    name: '缓存数据',
    nameEn: 'AsyncStorage',
    desc: '获取或设置缓存数据的异步接口',
    path: 'asyncstorage',
    supported: [WEB, WEEX, ALI_MINI_APP, WECHAT],
  }
];

const monitoringAPIList = [
  {
    name: 'goldlog 埋点',
    nameEn: 'Goldlog',
    desc: '提供了一系列工具方法，来发送 PV 埋点、黄金令箭等',
    path: 'goldlog',
    supported: [WEB, WEEX, ALI_MINI_APP],
  },
  {
    name: 'spm 操作',
    nameEn: 'Spm',
    desc: '提供了一系列工具方法，来操作 SPM',
    path: 'spm',
    supported: [WEB],
  }
];

export const APIList = [
  {
    type: '动画',
    typeEn: 'Animation',
    list: animationAPIList,
    icon: 'https://gw.alicdn.com/tfs/TB1A7EwcAL0gK0jSZFxXXXWHVXa-200-200.png',
  },
  {
    type: '提醒',
    typeEn: 'Feedback',
    list: feedbackAPIList,
    icon: 'https://gw.alicdn.com/tfs/TB1.o3xcAT2gK0jSZFkXXcIQFXa-200-200.png'
  },
  {
    type: '导航',
    typeEn: 'Navigation',
    list: navigationAPIList,
    icon: 'https://gw.alicdn.com/tfs/TB1koIwcAL0gK0jSZFxXXXWHVXa-200-200.png'
  },
  {
    type: '多媒体',
    typeEn: 'Media',
    list: mediaAPIList,
    icon: 'https://gw.alicdn.com/tfs/TB1AHgvcvb2gK0jSZK9XXaEgFXa-200-200.png'
  },
  {
    type: '网络',
    typeEn: 'Network',
    list: networkAPIList,
    icon: 'https://gw.alicdn.com/tfs/TB11loxcrj1gK0jSZFuXXcrHpXa-200-200.png'
  },
  {
    type: '系统',
    typeEn: 'System',
    list: systemAPIList,
    icon: 'https://gw.alicdn.com/tfs/TB15qAwcET1gK0jSZFrXXcNCXXa-200-200.png'
  },
  {
    type: '数据缓存',
    typeEn: 'Storage',
    list: dataAPIList,
    icon: 'https://gw.alicdn.com/tfs/TB1QU.ucEz1gK0jSZLeXXb9kVXa-200-200.png'
  }
];
