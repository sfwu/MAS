import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtNoticebar } from 'taro-ui'
import './index.scss'
import Head from '../../components/head/head'
import Guide from '../../components/guide/index'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    backgroundColor: '#fafafa'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Head />

        <View className = 'noticeContainer'>
          <AtNoticebar
          marquee
          showMore
          icon='volume-plus'
          speed = {50}>
            马鞍山洹河峡谷风景区现已开业！欢迎各位莅临游览!
          </AtNoticebar>
        </View>

        <Guide />
      </View>
    )
  }
}
