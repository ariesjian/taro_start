import Taro, {Component, Config} from '@tarojs/taro'
import {View, MovableArea, MovableView, Image} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import './index.less'

interface StarState {
  starList: Array<any>,
  disabled?: boolean,
  leftStart:any,
  topStart:any,
}
@connect(({home}) => ({
  ...home,
  home,
}))
export default class Star extends Component<{}, StarState> {
  config: Config = {
    navigationBarTitleText: 'start',
    enablePullDownRefresh: false,
  }
  constructor(props: {} | undefined) {
    super(props);
    const starList = [
      {id: 0, left: '150rpx', top: '120rpx', x: 10, y: 10 },
      {id: 1, left: '140rpx', top: '100rpx', x: 10, y: 10 },
      {id: 2, left: '400rpx', top: '190rpx', x: 10, y: 10 },
      {id: 3, left: '300rpx', top: '103rpx', x: 10, y: 10},
      {id: 4, left: '50rpx', top: '603rpx', x: 10, y: 10}];
    this.state = {
      starList: this.styleStart(starList),
      disabled: false,
      leftStart:0,
      topStart:0,
    }
  }

  componentWillMount() {

  }
  /*  componentDidMount() {
      const { dispatch } = this.props;
      dispatch({
        type: 'home/fetch',
        payload: {
          apikey:'0b2bdeda43b5688921839c8ecb20399b',
          city:'北京',
          start:0,
          count:20,
        },
        callback:()=>{
          console.log('成功了')
        }
      })
    }*/
  // 星星位置的随机定位处理
  styleStart=(arr)=>{
    return arr.map(v=>{
      return{
        ...v,
        left:Math.floor(Math.random()*(707-293)+293),// 首屏随机值
        top:Math.floor(Math.random()*(762-238)+238)// 首屏随机值
      }
    })
  };
// 拖动星星开始
   tounchstart=(e)=>{
     console.log(e,'===start===')
      this.setState({
        disabled: true,
        leftStart:this.state.starList[e.currentTarget.id].left,
        topStart:this.state.starList[e.currentTarget.id].top,
      });
    }

// 拖动星星中
  tounchmove=(e)=>{
     console.log(e,'===ing===');
    let xx = 0, yy = 0;
    const {leftStart,topStart,starList}=this.state;
    const xEnd = e.changedTouches[0].pageX ;//获取鼠标移动时第一个点的坐标
    const yEnd = e.changedTouches[0].pageY;
    xx += xEnd - leftStart;//获得鼠标移动的距离
    yy += yEnd - topStart;
    let newArr=starList;
    newArr[e.currentTarget.id].left=xx;
    newArr[e.currentTarget.id].top=yy;
    //将旋转角度写入transform中
    console.log(newArr,e.currentTarget.id,'------newArr----', newArr[e.currentTarget.id].left)
    this.setState({
      disabled: true,
      starList:newArr,
    })

  }
 // 拖动星星结束
  touchend=(e)=>{
    let xx = 0, yy = 0;
    const {leftStart,topStart,starList}=this.state;
    const xEnd = e.changedTouches[0].pageX ;//获取鼠标移动时第一个点的坐标
    const yEnd = e.changedTouches[0].pageY;
    xx += xEnd + leftStart;//获得鼠标移动的距离
    yy += yEnd + topStart;
    let newArr=starList;
    newArr[e.currentTarget.id].left=xx;
    newArr[e.currentTarget.id].top=yy;
    //将旋转角度写入transform中
    this.setState({
      disabled: false,
      starList:newArr,
    })
  }
  render() {
    const {starList, disabled} = this.state;
    const {
      home: {homeList},
    } = this.props;
    console.log(starList, '---')
    return (
      <View className='page_container'>
        <View className='star_box'>
          <MovableArea style='height: 524px; width: 414px; background: blue; overflow:hidden;'>
            <MovableView
              className='star_view'
              style='height: 1000px; width: 1000px;'
              direction='all'
              x={-293}
              y={-238}
              out-of-bounds
              disabled={disabled}
            >
              {starList.length && starList.map((v, index) => {
                return (
                  <View id={v.id} className='starts' key={index} style={{left: `${v.left}px`, top: `${v.top}px`}}
                        onTouchMove={this.tounchmove.bind(this)}
                        onTouchStart={this.tounchstart.bind(this)}
                        onTouchEnd={this.touchend.bind(this)}
                  >
                    <Image  src={require('../../assets/starton.png')} className='pic_star'/>
                  </View>
                )
              })}
            </MovableView>
          </MovableArea>
        </View>
        <View className='wish'>许愿</View>
      </View>
    )
  }
}

