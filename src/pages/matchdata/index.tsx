import Taro, { Component, Config } from '@tarojs/taro'
import { View,} from '@tarojs/components'
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
      <View className='index'>
        Matchdata
      </View>
    )
  }
}

