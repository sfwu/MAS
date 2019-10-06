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
                      如果您对景区有任何建议和意见，请联系我们。

                      </View>
                      <View className='at-article__p'>
                      景区负责人联系电话: 138-xxx-xxxxx

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
