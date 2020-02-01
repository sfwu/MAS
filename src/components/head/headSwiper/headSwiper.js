import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './headSwiper.scss'

export default class HeadSwiper extends Component {

      static defaultProps = {
        img_list : [
          { key: 0, url:'https://i.loli.net/2019/09/06/dnTDSKJHzFN6wpE.jpg'},
          { key: 1, url:'https://i.loli.net/2019/09/15/iQ4DWrlZTVzGysh.jpg'},
          { key: 2, url:'https://i.loli.net/2019/09/06/yWRf8AoPkD9vIH7.jpg'},
          { key: 3, url:'https://i.loli.net/2019/09/06/YxjGIehQVRzF6ta.jpg'},
          { key: 4, url:'https://i.loli.net/2019/09/15/KhLJEpwi2e7luaA.jpg'},
          { key: 5, url:'https://i.loli.net/2019/09/15/Eb1Jna8lyBfxHC7.jpg'},
          { key: 6, url:'https://i.loli.net/2019/09/06/FQJfcpe6dCsyZH2.jpg'},
          { key: 7, url:'https://i.loli.net/2019/09/06/C1gvAqlmU3GLoZJ.jpg'},
          { key: 8, url:'https://i.loli.net/2019/09/06/DOwFAHKa1V2nch5.jpg'},
        ]
      }

      onImageClick(list,key) {
        Taro.previewImage({
          urls: list,
          current: list[key]
        })
      }

      render () {
        const { img_list } = this.props
        let pureUrlList = img_list.map(item => item.url);

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
                    onClick={this.onImageClick.bind(this,pureUrlList,item.key)}
                    src={item.url}
                  />
                </SwiperItem>
              ))}
            </Swiper>
          </View>
        )
      }

}

