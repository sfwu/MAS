import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class GuideFood extends Taro.Component {
    componentWillMount() {
        console.log(this.$router.params)
    }
    render() {
        return (
            <View>
                <Text>正在开发，敬请期待！这里是门票购买界面</Text>
            </View>
        )
    }
}
