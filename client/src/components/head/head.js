import Taro, { Component, render } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import HeadSwiper from '../head/headSwiper/headSwiper'
import './head.css'

export default class Head extends Component {
    render() {
        const { banner } = this.props;
        return (
            <View>
                <Text className='title'>景区风采</Text>
                <HeadSwiper banner={banner} />
            </View>
        )
    }
}
