import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import dva from './dva'
import models from './models/index'

import Index from './pages/index'
import './app.less'

import { setGlobalData, setCacheData,getGlobalData } from './utils'

const dvaApp = dva.createApp({
  initialState:{},
  models:models
})
const store = dvaApp.getStore()

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const Globaldata={
  source:'0101',
  mobileType:3,
  loginType:1,
  appVersion:'1.5.0'
}
class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/matchdata/index',
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#F34747',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh:true
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '足球',
          iconPath: './assets/tab_football@3x.png',
          selectedIconPath: './assets/tab_lightvideo@3x.png',
        },
        {
          pagePath: 'pages/matchdata/index',
          text: '数据',
          iconPath: './assets/tab_date@3x.png',
          selectedIconPath: './assets/tab_lightdate@3x.png',
        },
      ],
      color: '#A9ACB0',
      selectedColor: '#EB5454',
      backgroundColor: '#fff',
      borderStyle: 'white',
    },
  }

  componentDidMount () {
    // console.log(this)
    setGlobalData('Globaldata',Globaldata)
    setCacheData('Globaldata',Globaldata)
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
