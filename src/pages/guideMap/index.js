import Taro, {Component} from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
//import ScaleImage from '../../components/scaleImage/scaleImage'
import { AtTimeline, AtCard , AtSegmentedControl, AtButton, Article, AtTabs, AtTabsPane, AtDivider } from 'taro-ui'
import './index.scss'



export default class GuideMap extends Taro.Component {
    config = {
        navigationBarTitleText: '游览指导'
    }

    constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      URL_LIST : [
        'https://i.loli.net/2019/09/14/SV1rCPeDxdQ3TXK.jpg'
      ]
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }


  onImageClick(x) {
    Taro.previewImage({
      urls: x,
      current: x[0]
    })
  }

  render () {
    return (

    <View>

      <View className='page'>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__content no-padding'>
              <View className='at-article'>
                <View className='at-article__content'>
              
                <View className='at-article__section'>
                  <View className='at-article__h2'>
                  </View>
                    {/*   
                    <View className='at-article__p'>
                    我们为您推荐一些既定路线以供您参考。
                    </View>

                    <View className='at-article__p'>
                    </View>

                    */}
                  </View>
                </View>
               
              </View>
              
            </View>
          </View>
        </View>
      </View>
      
      {/*
                <AtCard
                  title='游览线路推荐'>
                    <AtSegmentedControl
                      scroll
                      values={['1日游线路一', '1日游线路二','1日游线路三','2日旅游线路']}
                      onClick={this.handleClick.bind(this)}
                      current={this.state.current}
                    />
                    {
                      //这里放第一个标签的内容
                      this.state.current === 0
                      ? <View className='tab-content'>


                          <View className='at-row'>
                         
                          <View className='at-col'>
                              <AtTimeline
                                items={[
                                  { title: '东安门' },
                                  { title: '曲径通幽', color: 'green' },
                                  { title: '宝岩寺', color: 'red' },
                                  { title: '午餐', color: 'yellow' },
                                  { title: '樱花大道' },
                                  { title: '九莲池', color: 'green' },
                                  { title: '赵河水系', color: 'red' },
                                  { title: '峡谷古栈道', color: 'yellow' },
                                  { title: '返回东安门', color: 'green' }
                                ]}>
                              </AtTimeline>
                            </View>

                            <View className='at-col'>
                                <AtTimeline
                                  items={[
                                    { title: '刷牙洗脸' },
                                    { title: '吃早餐', color: 'green' },
                                    { title: '上班', color: 'red' },
                                    { title: '睡觉', color: 'yellow' },
                                    { title: '刷牙洗脸' },
                                    { title: '吃早餐', color: 'green' },
                                    { title: '上班', color: 'red' },
                                    { title: '睡觉', color: 'yellow' }
                                  ]}>
                                </AtTimeline>
                              </View>

                        </View>


                      </View>
                      : null
                    }
                    {
                      this.state.current === 1
                      ? <View className='tab-content'>

                      <View className='at-row'>

                      <View className='at-col'>
                          <AtTimeline
                            items={[
                              { title: '刷牙洗脸' },
                              { title: '吃早餐', color: 'green' },
                              { title: '上班', color: 'red' },
                              { title: '睡觉', color: 'yellow' },
                              { title: '刷牙洗脸' },
                              { title: '吃早餐', color: 'green' },
                              { title: '上班', color: 'red' },
                              { title: '睡觉', color: 'yellow' }
                            ]}>
                          </AtTimeline>
                        </View>

                        <View className='at-col'>
                            <AtTimeline
                              items={[
                                { title: '刷牙洗脸' },
                                { title: '吃早餐', color: 'green' },
                                { title: '上班', color: 'red' },
                                { title: '睡觉', color: 'yellow' },
                                { title: '刷牙洗脸' },
                                { title: '吃早餐', color: 'green' },
                                { title: '上班', color: 'red' },
                                { title: '睡觉', color: 'yellow' }
                              ]}>
                            </AtTimeline>
                          </View>

                    </View>
                      </View>
                      : null
                    }
                </AtCard>
                */} 

                
                <AtDivider content='游览线路推荐' fontColor='#E71F98' lineColor='#E71F5F' />
                
                <AtTabs
                  current={this.state.current}
                  scroll
                  height='330px'
                  tabDirection='vertical'
                  tabList={[
                    { title: '1日游线路一' },
                    { title: '1日游线路二' },
                    { title: '1日游线路三' },
                    { title: '2日旅游线路' },
                  ]}
                  onClick={this.handleClick.bind(this)}>
                  <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
                    <View style='font-size:18px;text-align:center;height:200px;' className='timeline' >
                      <AtTimeline
                      items={[
                        { title: '东安门' },
                        { title: '曲径通幽', color: 'green' },
                        { title: '宝岩寺', color: 'red' },
                        { title: '午餐', color: 'yellow' },
                        { title: '樱花大道' },
                        { title: '九莲池', color: 'green' },
                        { title: '赵河水系', color: 'red' },
                        { title: '峡谷古栈道', color: 'yellow' },
                        { title: '返回东安门', color: 'green' }
                      ]}>
                    </AtTimeline>
                    </View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
                    <View style='font-size:18px;text-align:center;height:200px;' className='timeline'>
                    <AtTimeline
                      items={[
                        { title: '东安门' },
                        { title: '玉皇峰', color: 'green' },
                        { title: '娲皇宫', color: 'red' },
                        { title: '午餐', color: 'yellow' },
                        { title: '樱花大道' },
                        { title: '九莲池', color: 'green' },
                        { title: '赵河水系', color: 'red' },
                        { title: '峡谷古栈道', color: 'yellow' },
                        { title: '返回东安门', color: 'green' }
                      ]}></AtTimeline>
                    </View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
                    <View style='font-size:18px;text-align:center;height:200px;' className='timeline'>
                    <View className='at-row'>
                      <View className='at-col'>
                    <AtTimeline
                      items={[
                        { title: '东安门' },
                        { title: '曲径通幽', color: 'green' },
                        { title: '宝岩寺', color: 'red' },
                        { title: '玉皇峰', color: 'yellow' },
                        { title: '午餐', color: 'red' },
                        { title: '娲皇宫' },
                        { title: '樱花大道', color: 'green' },
                        { title: '九连池', color: 'red' },
                        
                      ]}></AtTimeline>
                    </View>
                    <View className='at-col'>
                          <AtTimeline
                            items={[
                              { title: '赵河水系', color: 'yellow' },
                              { title: '返回东安门', color: 'green' }
                            ]}>
                          </AtTimeline>
                      </View>
                    </View>
                    </View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
                    <View style='font-size:18px;text-align:center;height:200px;' className='timeline1'>

                    <View className='at-row'>
                      <View className='at-col'>
                        <AtTimeline
                          items={[
                            { title: '东安门' },
                            { title: '曲径通幽', color: 'green' },
                            { title: '宝岩寺', color: 'red' },
                            { title: '午餐', color: 'yellow' },
                            { title: '采摘', content: ['欣赏自然和田园风光'] },
                            { title: '宿于西山宾馆' }
                          ]}></AtTimeline>
                      </View>

                      <View className='at-col'>
                          <AtTimeline
                            items={[
                              { title: '玉皇峰' },
                              { title: '娲皇宫', color: 'green' },
                              { title: '午餐', color: 'red' },
                              { title: '樱花大道', color: 'yellow' },
                              { title: '九连池' },
                              { title: '赵河水系', color: 'green' },
                              { title: '峡谷古栈道', color: 'red' },
                              { title: '返回东安门', color: 'yellow' }
                            ]}>
                          </AtTimeline>
                      </View>
                    </View>
                    </View>
                    
                    </AtTabsPane>
                  </AtTabs>
                

                <View>
                  <AtDivider content='景区地图' fontColor='#D67D1F' lineColor='#ff9900' />

                  {this.state.URL_LIST.map(item => (
                    <Image className='map'
                    mode='widthFix'
                    src={item} 
                    onClick={this.onImageClick.bind(this,URL_LIST)} 
                    /> 
                  ))}
                    
                </View>

           </View>

           
    )
    

    
  }
}
