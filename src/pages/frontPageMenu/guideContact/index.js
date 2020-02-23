import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { Article, AtDivider} from 'taro-ui'
import './index.scss'

export default class guideContact extends Taro.Component {

    render() {
        return (
          <View>

          <View className='page'>
            {/* S Header */}
            <DocsHeader title='景点介绍'></DocsHeader>
            {/* E Header */}

            {/* S Body */}
            <View className='doc-body'>
              <View className='panel'>
                <View className='panel__title'></View>
                <View className='panel__content no-padding'>
                  <View className='at-article'>
                    <View className='at-article__h1'>洹河风景区</View>
                    <View className='at-article__info'>2019-9-12</View>
                    <View className='at-article__content'>

                    <View className='at-article__section'>
                      <View className='at-article__p'>
                      如果您对景区有任何建议和意见，请在洹河风景区公众平台内留言。
                      如果您还未关注景区公众号，可以在微信消息页搜索公众号一栏中输入：洹河峡谷风景区，并点击关注。
                      </View>
                      <View className='at-article__p'>

                      </View>
                    </View>


                    </View>
                  </View>
                </View>
              </View>
            {/* E Body */}
            </View>
        </View>


      <AtDivider content='' fontColor='#ff9900' lineColor='#ff9900' />
      </View>
        )
    }
}
