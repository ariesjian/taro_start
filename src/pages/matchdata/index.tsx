import Taro, { Component, Config } from '@tarojs/taro'
import { View, MovableArea, MovableView} from '@tarojs/components'
import './index.less'
interface HomeState {

}

export default class Matchdata extends Component<{}, HomeState> {
  config: Config = {
    navigationBarTitleText: 'start',
    enablePullDownRefresh:false
  }

  state={

  }
  componentWillMount () { }

  componentDidMount (callback?: any) {

  }
  // //星星渲染
  // CoinsRender(CoinAry) {
  //   const _this = this;
  //   wx.createSelectorQuery()
  //     .selectAll('.stars')
  //     .boundingClientRect(function(rects) {
  //       rects.forEach(function(rect) {
  //         rect.id; // 节点的ID
  //         rect.dataset; // 节点的dataset
  //         rect.left; // 节点的左边界坐标
  //         rect.right; // 节点的右边界坐标
  //         rect.top; // 节点的上边界坐标
  //         rect.bottom; // 节点的下边界坐标
  //         rect.width; // 节点的宽度
  //         rect.height; // 节点的高度
  //       });
  //       let obj = {
  //         width: rects[0]['width'] * 2,
  //         height: rects[0]['height'] * 2
  //       };
  //       console.log(obj, '==========');
  //       _this.starts = _this.RandomMoneyMake(CoinAry, obj);
  //       _this.$apply();
  //     })
  //     .exec();
  // }
  //
  // /***
  //  * RandomMoneyMake-随机生成节点位置
  //  * coinlist-金币数组
  //  * contdata-容器的data
  //  */
  // RandomMoneyMake(coinlist, contdata) {
  //   let CoinList = this.state.starts;
  //   console.log(coinlist, 'coinlist');
  //   console.log(contdata, 'contdata');
  //   let getAry = coinlist;
  //   let CoinCont = {
  //     width: contdata.width,
  //     height: contdata.height
  //   };
  //   // let coin={
  //   //   width:168,
  //   //   height:168
  //   // }
  //   let coin = {
  //     width: 120,
  //     height: 120
  //   };
  //   let arr = [];
  //   getAry.map((item, index) => {
  //     let obj = item;
  //     let position = {
  //       left: U.RandomNum(10, CoinCont.width - coin.width / 2 - 100),
  //       top: U.RandomNum(220, CoinCont.height - coin.height / 2 - 100),
  //       opacity: 1,
  //       translateX: 0,
  //       translateY: 0,
  //       coinId: index,
  //       isOn: true,
  //       // ImgUrl:item.category===8?`../../images/changePf/coin1.png`:`../../images/changePf/coin3.png`,
  //       // ImgUrl:item.category===8?`../../images/home/icon_home_lucky_0${Math.round(Math.random()*2 + 1)}.png`:`../../images/home/coin${Math.round(Math.random()*5 + 1)}.png`,
  //       showType: true
  //     };
  //     obj = Object.assign({}, obj, position);
  //     arr.push(obj);
  //   });
  //   console.log(arr, 'arr');
  //   // let CoinsAry=CoinList.concat(arr)
  //   return arr;
  // }

  render () {
    return (
      <View className='page_container'>
        <View className='star_box'>
          <MovableArea style='height: 300px; width: 300px; background: red; overflow:hide'>
            <MovableView className='star_view' style='height: 300px; width: 300px; background: blue;' direction='all'>1</MovableView>
          </MovableArea>
        </View>
        <View className='wish'>许愿</View>
      </View>
    )
  }
}

