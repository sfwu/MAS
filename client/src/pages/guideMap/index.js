import Taro, {Component} from '@tarojs/taro'
import { View } from '@tarojs/components'
//import ScaleImage from '../../components/scaleImage/scaleImage'
import { AtTimeline, AtCard , AtSegmentedControl, AtButton, Article } from 'taro-ui'
import './index.scss'

export default class GuideMap extends Taro.Component {
    config = {
        navigationBarTitleText: '游览指导'
    }

    constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
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
                    <View className='at-article__p'>
                    这里插入一些文字
                    </View>

                    <View className='at-article__p'>
                    </View>

                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
                <AtCard
                  title='游览线路推荐'>
                    <AtSegmentedControl
                      values={['游览线路1', '游览线路2', '游览线路3']}
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
                    {
                      this.state.current === 2
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
            </View>

    )
  }
}
