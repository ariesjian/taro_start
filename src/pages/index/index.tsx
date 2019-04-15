import Taro, {Component, Config} from '@tarojs/taro'
import {View,} from '@tarojs/components'
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
  }

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

  render() {
    return (
      <View className='home_container'>
        index
      </View>
    )
  }
}

