import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
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
  constructor(props: {} | undefined) {
    super(props);
  }
  componentWillMount() {

  }

  render() {
    return (
      <View className='page_container'>

      </View>
    )
  }
}

