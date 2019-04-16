import Taro, {Component, Config} from '@tarojs/taro'
import {View, MovableArea, MovableView, Image} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import './index.less'

@connect(({home}) => ({
  ...home,
  home,
}))
export default class Matchdata extends Component<{}, HomeState> {
  config: Config = {
    navigationBarTitleText: 'start',
    enablePullDownRefresh: false
  }

  state = {
    starts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  }

  componentWillMount() {

  }

  componentDidMount() {
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
  }

  //星星渲染
  CoinsRender(CoinAry) {
    const _this = this;
    wx.createSelectorQuery()
      .selectAll('.star_view')
      .boundingClientRect(function (rects) {
        rects.forEach(function (rect) {
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
        // _this.starts = _this.RandomMoneyMake(CoinAry, obj);
        // _this.$apply();
        _this.setState({
          starts: _this.RandomMoneyMake(CoinAry, obj)
        })
      })
      .exec();
  }

  /***
   * RandomMoneyMake-随机生成节点位置
   * coinlist-金币数组
   * contdata-容器的data
   */
  RandomMoneyMake(coinlist, contdata) {
    let getAry = coinlist;
    let CoinCont = {
      width: contdata.width,
      height: contdata.height
    };
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
    return arr;
  }

  // 星星样式处理
  styleStart = (arr) => {
    arr.map(v => {
      return {
        left: U.RandomNum(v, 1000),
        top: U.RandomNum(v * 2, 500),
      }
    })
  };

  render() {
    const {starts} = this.state;
    const {
      home,
    } = this.props;
    console.log(home,'---1妈妈咪1: { homeList }---');
    return (
      <View className='page_container'>
        <View className='star_box'>
          <MovableArea style='height: 200px; width: 200px; background: blue;'>
            <MovableView className='star_view' style='height: 1000px; width: 1000px;' direction='all'>
              {starts.length && starts.map((v, index) => {
                return (
                  <View className='starts' key={index} style={{left: v.left, top: v.top}}>
                    <Image id={v + 'star'} src={require('../../assets/starton.png')} className='pic_star'/>
                  </View>
                )
              })}
              <View className='starts1' key={index}>
                <Image src={require('../../assets/starton.png')} className='pic_star'/>
              </View>
            </MovableView>
          </MovableArea>
        </View>
        <View className='wish'>许愿</View>
      </View>
    )
  }
}

