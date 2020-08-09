import Taro from '@tarojs/taro'
import { View, Image, Video } from '@tarojs/components'
import './index.scss'

export default class guideVideo extends Taro.Component {

    constructor() {
        super(...arguments)
      }

    render() {
        return (
        <View className='page'>
          <DocsHeader title='景点介绍'></DocsHeader>
          <View className='doc-body'>
              <View className='panel'>
              <View className='panel__title'></View>
                <View className='panel__content no-padding'>
                  <View className='at-article'>
                  <View className='at-article__h1'>景区视频 </View>
                  <View className='at-article__info'>2020-2-20 这是作者</View>
                </View>
              </View>
          </View>
          </View>
        
        <View className='at-article__p'>
            恒河峡谷风景区风景绝美，无人机航拍方能显示其风采。请点击下方短视频领略横河峡谷四季壮美风光!
        </View>

        <View className='video'>
            <Video
            src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
            controls={true}
            autoplay={false}
            poster='http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
            initialTime='0'
            id='video'
            loop={false}
            muted={false}
            />
        </View>



        </View>
        )
    }
}
