import Taro, {Component, Config} from '@tarojs/taro'
// 引入 MovableArea, MovableView 组件
import {View} from '@tarojs/components'
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
    xStart: 0,
    yStart: 0,
    transform: '',
  };

  componentWillMount() {

  }

  componentDidMount(callback?: any) {

  }

// 开始滑动 获取首指按的时候的位置
  touchStart = (e) => {
    console.log(e.touches[0].pageX, '开始滑动')
    this.setState({
      xStart: e.touches[0].pageX / 2,
      yStart: e.touches[0].pageY / 2,
    })

  };
  // 移动结束 获取移动结束的位置
  touchEnd = (e) => {
    console.log(e.changedTouches[0].pageX, '移动结束')
    const {xStart, yStart} = this.state;
    let xx = 0, yy = 0;
    const xEnd = e.changedTouches[0].pageX / 2;//获取鼠标移动时第一个点的坐标
    const yEnd = e.changedTouches[0].pageY / 2;
    yy += xEnd - xStart;//获得鼠标移动的距离
    xx += yEnd - yStart;
    //将旋转角度写入transform中
    this.setState({
      transform: "rotatex(" + xx + "deg) rotatey(" + yy + "deg) rotatez(0deg)",
    })
  };
  touchMove=(e)=>{
    const {xStart, yStart} = this.state;
    let xx = 0, yy = 0;
    const xEnd = e.touches[0].pageX / 2;//获取鼠标移动时第一个点的坐标
    const yEnd = e.touches[0].pageY / 2;
    yy += xEnd - xStart;//获得鼠标移动的距离
    xx += yEnd - yStart;
   // 将旋转角度写入transform中
    this.setState({
      transform: "rotatex(" + xx + "deg) rotatey(" + yy + "deg) rotatez(0deg)",
    })
  }
  render() {
    return (
      <View className='home_container'>
        <View className='star_box'>
          <View className='boll_box'
                style={{transform: this.state.transform}}
                onTouchMove={this.touchMove}
                onTouchStart={this.touchStart}
                onTouchEnd={this.touchEnd}
          >
            <View className="circle circle1"/>
            <View className="circle circle2"/>
            <View className="circle circle3"/>
            <View className="circle circle4"/>
            <View className="circle circle5"/>
            <View className="circle circle6"/>
            <View className='stars'>*</View>

          </View>

        </View>
        <View className='wish'>许愿</View>
      </View>
    )
  }
}

