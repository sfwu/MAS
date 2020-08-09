import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

const GUIDE_LIST = [{
    key: 'tickect',
    text: '门票',
    url: '/pages/frontPageMenu/guideTickect/index',
    img: require('../../assets/gridIcon/ticket_2.png')
}, {
    key: 'view',
    text: '景点介绍',
    url: '/pages/frontPageMenu/guideView/index',
    img: require('../../assets/gridIcon/view.png')
}, {
    key: 'fun',
    text: '游览指导',
    url: '/pages/frontPageMenu/guideMap/index',
    img: require('../../assets/gridIcon/map.png')
}, {
    key: 'video',
    text: '风景视频',
    url: '/pages/frontPageMenu/guideVideo/index',
    img: require('../../assets/gridIcon/fun.png')
}, {
    key: 'bus',
    text: '交通',
    url: '/pages/frontPageMenu/guideBus/index',
    img: require('../../assets/gridIcon//bus.png')
}, {
    key: 'hotel',
    text: '住宿',
    url: '/pages/frontPageMenu/guideHotel/index',
    img: require('../../assets/gridIcon/hotel.png')
}, {
    key: 'food',
    text: '美食',
    url: '/pages/frontPageMenu/guideFood/index',
    img: require('../../assets/gridIcon/food_1.png')
}, {
    key: 'shopping',
    text: '购物',
    url: '/pages/frontPageMenu/guideShopping/index',
    img: require('../../assets/gridIcon/shopping.png')
}, {
    key: 'contact',
    text: '联系我们',
    url: '/pages/frontPageMenu/guideContact/index',
    img: require('../../assets/gridIcon/contactus.png')
}]

const COUNT_LINE = 1

export default class Guide extends Taro.Component {

    gotoPage = (menu) => {
        Taro.navigateTo({ url: menu.url })
    }

    render() {

        return (
            <View className='user-menu'>
                {GUIDE_LIST.map((menu, index) => {
                    const nth = (index + 1) % COUNT_LINE === 0
                    const lastLine = parseInt(index / COUNT_LINE) === parseInt(GUIDE_LIST.length / COUNT_LINE)
                    return (
                        <View
                            key={menu.key}
                            className={classNames(
                                'user-menu__item',
                                nth && 'user-menu__item--nth',
                                lastLine && 'user-menu__item--last',
                            )}
                            onClick={this.gotoPage.bind(this, menu)}
                        >
                            <Image className='user-menu__item-img' src={menu.img} />
                            <Text className='user-menu__item-txt'>{menu.text}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}
