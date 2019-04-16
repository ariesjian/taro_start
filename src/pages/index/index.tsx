import Taro, {Component, Config} from '@tarojs/taro'
// 引入 MovableArea, MovableView 组件
import { MovableArea, MovableView,View } from '@tarojs/components'
import './index.less'
interface HomeState {

}

export default class Index extends Component<{}, HomeState> {
  config: Config = {
    navigationBarTitleText: 'start',
    enablePullDownRefresh: false,
    navigationBarTextStyle: 'white',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#000'
  };

  constructor(props) {
    super(props)
  }

  state = {
    starts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  };

  componentWillMount() {

  }

  componentDidMount(callback?: any) {

  }
// 开始滑动
  bindchange = (e) => {
    console.log(e, '开始滑动')
  };
  // 纵向
  touchmove= (e) => {
    console.log(e, '纵向')
  };
  // 横向
  touchend= (e) => {
    console.log(e, '横向')
  };

  render() {
    return (
      <View className='home_container'>

        <MovableArea style={{width: '400px', height: '400px', margin: '50px auto',}}>
          <MovableView
            direction='all'
            style={{width: '400px', height: '400px',background:'blue'}}
            bindchange={this.bindchange}
          >
          <View className='star_box'>
            <View className='boll_box'>
              <View className="circle circle1">1</View>
              <View className="circle circle2">2</View>
              <View className="circle circle3">3</View>
              <View className="circle circle4">4</View>
              <View className="circle circle5">5</View>
              <View className="circle circle6">6</View>
            </View>
          </View>
          </MovableView>
        </MovableArea>
        <View className='wish'>许愿</View>
      </View>
    )
  }
}

