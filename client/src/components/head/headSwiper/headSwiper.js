import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './headSwiper.scss'

export default class HeadSwiper extends Component {

      static defaultProps = {
        img_list : [
          { key: 1, url:'https://i.loli.net/2019/09/06/dnTDSKJHzFN6wpE.jpg'},
          { key: 2, url:'https://i.loli.net/2019/09/15/iQ4DWrlZTVzGysh.jpg'},
          { key: 3, url:'https://i.loli.net/2019/09/06/yWRf8AoPkD9vIH7.jpg'},
          { key: 4, url:'https://i.loli.net/2019/09/06/YxjGIehQVRzF6ta.jpg'},
          { key: 5, url:'https://i.loli.net/2019/09/15/KhLJEpwi2e7luaA.jpg'},
          { key: 6, url:'https://i.loli.net/2019/09/15/Eb1Jna8lyBfxHC7.jpg'},
          { key: 7, url:'https://i.loli.net/2019/09/06/FQJfcpe6dCsyZH2.jpg'},
          { key: 8, url:'https://i.loli.net/2019/09/06/C1gvAqlmU3GLoZJ.jpg'},
          { key: 9, url:'https://i.loli.net/2019/09/06/DOwFAHKa1V2nch5.jpg'},
        ]
      }

      render () {
        const { img_list } = this.props

        return (
          <View className='home-banner'>
            <Swiper
              className='home-banner__swiper'
              circular
              autoplay
              indicatorDots
              indicatorActiveColor='rgb(100, 100, 100)'
            >
              {img_list.map(item => (
                <SwiperItem
                  key={item.key}
                  className='home-banner__swiper-item'
                  //onClick={this.previewImage.bind(this, item)}
                >
                  <Image
                    className='home-banner__swiper-item-img'
                    src={item.url}
                  />
                </SwiperItem>
              ))}
            </Swiper>
          </View>
        )
      }

}


/*
    render() {
            return (

              <Swiper
                  indicatorColor='#999'
                  indicatorActiveColor='#333'
                  circular='true'
                  indicatorDots
                  autoplay
                  skipHiddenItemLayout='true'
                  className='swiperContainer'>
                  <SwiperItem>
                      <image className='img' src='https://i.loli.net/2019/09/06/dnTDSKJHzFN6wpE.jpg' onclick = 'Taro.previewImg'/>
                  </SwiperItem>
                  <SwiperItem>
                      <image className='img' src='https://i.loli.net/2019/09/06/C1gvAqlmU3GLoZJ.jpg' onclick = 'Taro.previewImg'/>
                  </SwiperItem>
                  <SwiperItem>
                      <image className='img' src='https://i.loli.net/2019/09/06/dnTDSKJHzFN6wpE.jpg' onclick = 'Taro.previewImg'/>
                  </SwiperItem>
                  <SwiperItem>
                      <Image className='img' src='https://i.loli.net/2019/09/06/FQJfcpe6dCsyZH2.jpg' onclick = 'Taro.previewImg'/>
                  </SwiperItem>
                  <SwiperItem>
                      <image className='img' src='https://i.loli.net/2019/09/06/yWRf8AoPkD9vIH7.jpg' onclick = 'Taro.previewImg'/>
                  </SwiperItem>
                  <SwiperItem>
                      <image className='img' src='https://i.loli.net/2019/09/06/YxjGIehQVRzF6ta.jpg' onclick = 'Taro.previewImg'/>
                  </SwiperItem>
              </Swiper>

          )
      }
}

          <swiper class="" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
            <block wx:for="{{picList}}" wx:key="index">
              <swiper-item>
                <image src="{{item}}" class="slide-image" mode="aspectFill" onclick='previewImg' data-previewurl='{{picList}}' data-currenturl='{{item}}'/>
              </swiper-item>
            </block>
          </swiper>

      )
  }

          data: { },

      //预览图片

        previewImg (e) {

          Taro.previewImage({
            current: currentUrl, //必须是http图片，本地图片无效
            urls: previewUrls, //必须是http图片，本地图片无效
          })
        },

        onLoad () {
          picList = ['https://i.loli.net/2019/09/06/YxjGIehQVRzF6ta.jpg' ,'https://i.loli.net/2019/09/06/yWRf8AoPkD9vIH7.jpg', 'https://i.loli.net/2019/09/06/FQJfcpe6dCsyZH2.jpg']


        }


        const img_list = [
          { key: 1, url:'https://i.loli.net/2019/09/06/dnTDSKJHzFN6wpE.jpg'},
          { key: 2, url:'https://i.loli.net/2019/09/06/C1gvAqlmU3GLoZJ.jpg'},
          { key: 3, url:'https://i.loli.net/2019/09/06/dnTDSKJHzFN6wpE.jpg'},
          { key: 4, url:'https://i.loli.net/2019/09/06/FQJfcpe6dCsyZH2.jpg'},
          { key: 5, url:'https://i.loli.net/2019/09/06/yWRf8AoPkD9vIH7.jpg'},
          { key: 6, url:'https://i.loli.net/2019/09/06/YxjGIehQVRzF6ta.jpg'},
        ]

        <Swiper
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular='true'
            indicatorDots
            autoplay
            skipHiddenItemLayout='true'
            className='swiperContainer'>
            {img_list.map((url,i) => {
              return(
              <SwiperItem key={img_list.key} >
                <image className='img' src= {url}/>
              </SwiperItem>
             )
            })}

        </Swiper>
*/
