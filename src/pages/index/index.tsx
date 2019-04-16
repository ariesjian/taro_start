import Taro, {Component, Config} from '@tarojs/taro'
// 引入 MovableArea, MovableView 组件
import {MovableArea, MovableView, View} from '@tarojs/components'
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
    xStart: 0,
    yStart: 0,
    transform: '',
    // xEnd:0,
    // yEnd:0,
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
  //星星渲染
  CoinsRender(CoinAry) {
    const _this = this;
    wx.createSelectorQuery()
      .selectAll('.stars')
      .boundingClientRect(function(rects) {
        rects.forEach(function(rect) {
          rect.id; // 节点的ID
          rect.dataset; // 节点的dataset
          rect.left; // 节点的左边界坐标
          rect.right; // 节点的右边界坐标
          rect.top; // 节点的上边界坐标
          rect.bottom; // 节点的下边界坐标
          rect.width; // 节点的宽度
          rect.height; // 节点的高度
        });
        let obj = {
          width: rects[0]['width'] * 2,
          height: rects[0]['height'] * 2
        };
        console.log(obj, '==========');
        _this.starts = _this.RandomMoneyMake(CoinAry, obj);
        _this.$apply();
      })
      .exec();
  }

  /***
   * RandomMoneyMake-随机生成节点位置
   * coinlist-金币数组
   * contdata-容器的data
   */
  RandomMoneyMake(coinlist, contdata) {
    let CoinList = this.state.starts;
    console.log(coinlist, 'coinlist');
    console.log(contdata, 'contdata');
    let getAry = coinlist;
    let CoinCont = {
      width: contdata.width,
      height: contdata.height
    };
    // let coin={
    //   width:168,
    //   height:168
    // }
    let coin = {
      width: 120,
      height: 120
    };
    let arr = [];
    getAry.map((item, index) => {
      let obj = item;
      let position = {
        left: U.RandomNum(10, CoinCont.width - coin.width / 2 - 100),
        top: U.RandomNum(220, CoinCont.height - coin.height / 2 - 100),
        opacity: 1,
        translateX: 0,
        translateY: 0,
        coinId: index,
        isOn: true,
        // ImgUrl:item.category===8?`../../images/changePf/coin1.png`:`../../images/changePf/coin3.png`,
        // ImgUrl:item.category===8?`../../images/home/icon_home_lucky_0${Math.round(Math.random()*2 + 1)}.png`:`../../images/home/coin${Math.round(Math.random()*5 + 1)}.png`,
        showType: true
      };
      obj = Object.assign({}, obj, position);
      arr.push(obj);
    });
    console.log(arr, 'arr');
    // let CoinsAry=CoinList.concat(arr)
    return arr;
  }

  render() {
    return (
      <View className='home_container'>
        <View className='star_box'>
          <View className='boll_box'
                style={{transform: this.state.transform}}
                onTouchMove={this.touchMove}
                onTouchStart={this.touchStart}
                onTouchEnd={this.touchEnd}>
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

