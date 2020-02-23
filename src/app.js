import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/user/user',
      'pages/guideTickect/index',
      'pages/guideView/index',
      'pages/guideMap/index',
      'pages/guideBus/index',
      'pages/guideHotel/index',
      'pages/guideFood/index',
      'pages/guideShopping/index',
      'pages/guideVideo/index',
      'pages/guideContact/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      color: '#666',
      selectedColor: '#b4282d',
      backgroundColor: '#fafafa',
      boarderStyle: 'black',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: './assets/tabBar/home.png',
          selectedIconPath: './assets/tabBar/home-active.png',
          text: '首页'
        },
        {
          pagePath: 'pages/user/user',
          iconPath: './assets/tabBar/user.png',
          selectedIconPath: './assets/tabBar/user-active.png',
          text: '我的'
        }
      ]


    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
