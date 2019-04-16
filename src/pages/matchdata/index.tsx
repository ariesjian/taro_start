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

