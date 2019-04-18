import Taro, {Component, Config} from '@tarojs/taro'
import {View, MovableArea, MovableView, Image} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import './index.less'

interface StarState {
  starList: Array<any>,
  disabled?: boolean,
  leftStart: any,
  topStart: any,
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
  private position: { x: number; y: number };

  constructor(props: {} | undefined) {
    super(props);
    const starList = [
      {id: 0, left: '150rpx', top: '120rpx'},
      {id: 1, left: '140rpx', top: '100rpx'},
      {id: 2, left: '400rpx', top: '190rpx'},
      {id: 3, left: '300rpx', top: '103rpx'},
      {id: 4, left: '50rpx', top: '603rpx'}];
    this.state = {
      starList: this.styleStart(starList),
      disabled: false,
      leftStart: 0,
      topStart: 0,
    };

    this.position = {
      x: -293,
      y: -238,
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
  styleStart = (arr) => {
    return arr.map(v => {
      return {
        ...v,
        left: Math.floor(Math.random() * (707 - 293) + 293),// 首屏随机值
        top: Math.floor(Math.random() * (762 - 238) + 238)// 首屏随机值
      }
    })
  };
// 拖动星星开始
  touchStart = (e) => {
    console.log(e, '===start===',this.position)
    this.setState({
      disabled: true,
    });
  }
// 拖动星星中
  touchMove = (e) => {
    // console.log(e, '===ing===', this.position);
    if (!e.changedTouches.length) return;
    const left = e.changedTouches[0].pageX - this.position.x;
    const top = e.changedTouches[0].pageY - this.position.y;
    const {starList} = this.state;
    let newArr = [...starList];
    newArr[e.currentTarget.id].left = left;
    newArr[e.currentTarget.id].top = top;
    console.log(this.position, left, top, '--');
    this.setState({
      disabled: true,
      starList: newArr,
    })

  }
  // 拖动星星结束
  touchEnd = (e) => {
    console.log(e, '===end===');
    this.setState({
      disabled: false,
    })
  };
  onChange=(e) => {
  this.position = e.detail
};

  render() {
    const {starList, disabled} = this.state;
    // const {
    //   home: {homeList},
    // } = this.props;
    // console.log(starList, '---')
    return (
      <View className='page_container'>
        <View className='star_box'>
          <MovableArea style='height: 524px; width: 414px; background: blue; overflow:hidden;'>
            <MovableView
              className='star_view'
              style='height: 1000px; width: 1000px;'
              direction='all'
              x={this.position.x}
              y={this.position.y}
              out-of-bounds
              disabled={disabled}
              onChange={this.onChange}
            >
              {starList.length && starList.map((v, index) => {
                return (
                  <View
                    id={v.id}
                    className='starts'
                    key={index}
                    style={{left: `${v.left}px`, top: `${v.top}px`}}
                    onTouchMove={this.touchMove}
                    onTouchStart={this.touchStart}
                    onTouchEnd={this.touchEnd}
                  >
                    <Image src={require('../../assets/starton.png')} className='pic_star'/>
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

