
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { Article, AtDivider, AtAccordion} from 'taro-ui'
import './index.scss'

// var backImgStyle = {
//   width: "100%",
//   height: "100%",
//   backgroundImage: `url(${"https://i.loli.net/2020/02/24/WQaFfMVlnuPET1s.jpg"})`
// };

export default class GuideView extends Taro.Component {
    componentWillMount() {
        console.log(this.$router.params)
    }
    config = {
      navigationBarTitleText: '景点介绍',
    }
  
    

    constructor () {
      super(...arguments)
      this.state = {
        open0: true,
        open1: true,
        open2: false,
        open3: false,
        open4: false,
        open5: false,
        open6: false,
        open7: false,
        open8: false,
        open9: false,
        open10: false,
        open11: false,
        open12: false,
        open13: false,
        open14: false,
        open15: false,
        open16: false,
        open17: false,
        open18: false,
        open19: false,
        open20: false,
      }
      this.props = {
        description : [
          { key: 0, title: '东安门',
            text: '东安门是洹河峡谷风景区标志性建筑之一。依山而建，布局严整。底上九层，六柱高耸。红墙金瓦，雕梁画栋。群楼重叠，错落有致。规模宏伟，巍峨壮观。月台上汉白玉护栏“梅兰竹菊”雕刻细腻，巧夺天工，栩栩如生，活龙活现。东南门对面是元宝山，左边是青龙山，右边是白虎山，民间说，这里“左青龙，右白虎”，是难得的洞天福地。登上楼层台廊，凭栏眺望，锦绣山川，扑面而来。顿感视野开阔，神清气爽，令人陶醉。'
            ,url: "https://i.loli.net/2019/09/13/tWdDsH5aYJGQ2h4.jpg"},
          { key: 1, title: '伟人像', 
            text: '这是一座汉白玉伟人雕像，产自北京房山，材质优良，工艺考究，制作精美。雕像身材魁梧，雄姿伟岸。神采奕奕，气宇轩昂，充分彰显了人民领袖的杰出风采。每年12月26日毛泽东诞辰前后，前来瞻仰纪念的人络绎不绝，已成为马鞍山森林公园的靓丽品牌。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 2, title: '太阳池和月亮池',
            text: '传说在远古的时候，这一带山上住着一对恩爱夫妻。男人叫后羿，女人叫嫦娥。嫦娥吞下王母娘娘给的长生不老药之后，飘向月宫。后羿思念妻子，就把妻子常常在这里用来洗浴的池子扩建为月亮形，取名月亮池，以表达对妻子的思念之情。后来，后羿卧佛成仙。人们又在月亮池的旁边挖了一个形如太阳的池子，取名太阳池。寓“日月同辉”之意，象征他俩永远相守相爱。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 3, title:'云海石',
            text: '这座云海石生长于山西五台山中，经过精心挑选运到这里，投资40余万元。云海石天造地设，自然形成，无任何人工雕饰。图案精美，千姿百态。有的像大河奔流，洪波涌起；   有的像苍龙戏水，时有时无；有的像雄狮出山，仰天长啸。令人心驰神往，浮想联翩，无不惊叹大自然的神奇。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 4, title:'拓荒牛',
            text: '牛是人们崇拜的对象，是勤勤恳恳、埋头苦干、任劳任怨、默默奉献的代名词。从2006年开始，马鞍山人历经千辛万苦，克服重重困难，锲而不舍、艰苦奋斗，经过十余年的不懈努力，终于使昔日的荒山秃岭变成了满目苍翠，林果飘香的洞天福地、生态绿洲，成为省级森林公园，充分展现了牛的“吃苦耐劳、负重拼搏、不图名利、甘于付出”宝贵精神。故在这里为拓荒牛塑像筑台，以示纪念。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 5, title:'龙吟亭',
            text: '相传，玉皇大帝巡游凡间至此，见这里风景优美，便赐山峰为玉皇峰，在峰顶建了一座行宫。为了确保行宫安全，玉帝颁下御旨，令龟蛇二将前来山前守卫，于是便形成了“龟蛇护山门”的景观。因右边为蛇山，蛇又称“小龙”，故这座亭子取名为“龙吟亭”。'
            ,url: "https://i.loli.net/2020/02/05/uGzlv4jqZWwIcgV.jpg"},
          { key: 6, title:'天鼓石',
            text: '相传，玉皇大帝在山顶修建行宫之后，每年3月3日，便在玉皇峰行宫举行盛大宴会，邀请天地三界各路神仙在这里欢聚，共度良宵美景。是日，太白金星便奉命在这里击鼓传令，声震云天，各路大仙便闻迅而至。传说这块岩石就是当年那面“石鼓”，故名“天鼓石。”'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 7, title:'曲径通幽',
            text: '曲径通幽全长四公里，经轿顶山、山顶茶社、状元岭、可达玉皇峰下。沿途有天鼓石、熊猫石、海狮石、船头石、夫妻树等景点。一路苍松翠柏，郁郁葱葱；古木繁茂，阴翳蔽日；奇峰异石，千姿百态；鸟语花香，沁人心脾。登石阶而上，野趣扑面，无限风光，引人入胜。因曲径盘旋，环境清幽，故名“曲径通幽。”'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 8, title:'济公帽',
            text: '济公，南宋僧人，世称济公活佛。他是一位学识渊博，行善积德的高僧，他的“扶危济困，除暴安良，彰善惩恶”等多种品德，在人们心中留下了美好印象。相传济公当年云游至此，见这里风景优美，便将帽子留在宝岩寺，作为纪念。这是马鞍山中一块自然形成的石头，顶部扁方，两头微尖，下部椭圆，棱角分明。酷似济公所戴帽子的形状。为褒扬济公，故名“济公帽”。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 9, title:'森林氧吧',
            text: ' 这是一片植被丰富的原始丛林，除松树、柏树、枫树，黄莲树等主要树种外，还有大量的观花、观果，观叶、观形的植物广泛分布，郁郁葱葱，遮天蔽日。那原汁原味的自然生态和清洁纯净的空气，造就了一种返璞归真的清幽境界。大量的植物通过光合作用源源不断地.释放出大量氧气，令人精神愉悦，心情舒适，故称，“森林氧吧”。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 10, title:'玉皇峰',
            text: '玉皇峰海拔668米，为马鞍山主峰。因其地处太行东麓，自东西来，山势最高，故有“太行第一峰”之称。传说远古时候玉皇大帝与王母娘娘巡游凡间至此，见这里风景秀丽，笑逐颜开，欣然赐名，故称名为“玉皇峰”。千百年来，慕名登临此山者络绎不绝，成为一方闻名遐迩的风景胜地。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 11, title:'宝岩寺',
            text: '唐朝白马寺僧人始建，已有1300多年历史。代代修葺，原迹犹存，碑刻有记。现占地110余亩，为豫北地区最大的寺院之一。寺内殿宇巍峨，金碧辉煌，佛像庄严，香火鼎盛。经声不绝，梵钟悠扬。更有“神耳台”奇观，传说月夜可听“天籁之音。”丰富的人文景观和环山美丽的自然景观交相辉映，使这里成为远近闻名的一方佛教圣地。'
            ,url: "https://i.loli.net/2020/02/05/JkrgC9WIl4oAXmK.jpg"},
          { key: 12, title:'真武庙',
            text: '真武帝名太玄，相传是净乐国国王之子。他自小天资聪颖，少时入武当山修道，历时42载，功成果满，武功超群，法力惊人。玉皇大帝闻其勇猛，便敕封为北方真武玄天上帝之位，以收天下妖邪。并在马鞍山玉皇峰上敕修寺庙，永受香火。自此成为道教中赫赫有名的玉京尊神，称其为真武帝君。历朝历代前来朝拜者络绎不绝。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 13, title:'樱花大道',
            text: '樱花大道位于马鞍山到洹河峡谷途中，长达1000余米。沿路两旁栽植成行，一望无际，形成了蜿蜒盘旋的绿化带，令人耳目一新。每年5月上旬粲然开放，花团锦簇，争奇斗艳，色彩缤纷，耀眼夺目，馨香四溢，沁人心脾。风姿绰约的鲜花和青山绿水交相辉映，形成了美丽动人的自然景观，如诗如画，赏心悦目。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 14, title:'九连池',
            text: '“九连池”顾名思义，因九座池塘相连而得名。这是一处特意修建的人造景观，别开生面。沿路而下，池池相通，连为一体，如同长龙一般。中间利用自然落差形成了道道瀑布，喷珠泻玉，蔚为壮观。峡谷两侧奇峰突起，溢绿流翠，山水辉映，像一幅巨大的水墨画。有人为九连池写了这样一首诗：“长藤结瓜好风景，九池相连似长龙。风吹涟漪泛银光，日照碧水映倒影。层层闸门泻清流，道道瀑布挂玉屏。奇山秀峰增灵气，沿路如在画中行。”'
            ,url: "https://i.loli.net/2020/02/05/N7o6eq8DlAacB9F.jpg"},
          { key: 15, title:'二仙峰',
            text: '二仙峰缘于民间传说石爷爷石奶奶的故事。古代一富家少女冲破门第观念，和一贫穷男子私奔到这里定居生活。两人相亲相爱，矢志不渝，白发偕老。南海观音感念他们的一片真情，就超度他俩返老还还童，升天成仙。而将他们的肉体化为石人，于是便出现了东山石爷爷和西山石奶奶遥相对望的奇观。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 16, title:'老鹰山',
            text: '当年，石爷爷石奶奶在这一带定居生活的时候，常常受到野兽的侵扰。玉皇大帝和王母娘得知了这一情况后，便让猛禽之王黑鹰前来保护。野兽闻鹰丧胆，逃之夭夭，再也不敢来此出沒走动。从此石爷爷石奶奶再无后顾之忧，生活安定下来。后来这黑鹰幻化成山，故名老鹰山。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 17, title:'夫妻林',
            text: '上世纪七十年代，乡政府号召凡是新婚夫妇都到青龙岭植树，青年人纷纷响应，树越来越多，使上万亩的青龙岭松柏茂盛，郁郁葱葱。夫妻林精神先后被新华社、河南电视台、大河报、安阳日报等多家媒体报道，在社会上产生了广泛影响。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 18, title:'峡谷栈道',
            text: '位于洹河彼岸，令旗山腰，长达3000余米，横贯东西。如长蛇蜿蜒盘旋，缠绕于悬崖峭壁之间。沿石径拾阶而上，穿林跨涧，峰回路转，无限风光，尽收眼底。一路前行，既可以领略群山巍峨，奇峰竞秀，万木争荣，古树沧桑；又可俯瞰河水如带，碧波荡漾，倒影婆娑，水天一色；还能目睹群鸟飞翔，鸳鸯戏水。徜徉其中，碧水与栈道交相辉映，万千气象，目不暇接，亮点纷呈，美不胜收。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 19, title:'仙人居',
            text: '位于古栈道的悬崖峭壁之下，旁边有一小石潭。这里环境优雅，充满了神奇色彩。相唐朝年间冀州人张果云游四方，发现这个洞穴。他终年以山水为伴，和群鸟为友，苦心孤诣，兀兀穷年，终于修成正果，得道成仙。因为他在八洞神仙中年龄最大，所以被尊称为张果老。他修行的洞穴被人们称为仙人居。'
            ,url: "https://i.loli.net/2019/09/13/aYHpcuC5ibWElNm.jpg"},
          { key: 20, title:'月亮湖',
            text: '月亮湖位于洹河峡谷中的宽阔地带，一道大坝横贯南北，形成了长达1600米的清澈水面，平均水深两米有余，为广大游客提供了水上游玩娱乐的最佳场所。走上码头，登船而坐，惬意之情，油然而生。在湖中乘船游览，一路可以欣赏山峦叠翠，奇峰竞秀；领略水面坦荡如砥，碧波荡漾。湖中冲浪别开生面，情绪盎然，格外刺激，更是一种难得的享受，置身其中，令人心旷神怡。'
            ,url: "https://i.loli.net/2020/02/05/1xh23TlN65HIkSE.jpg"}
        ]
      }
    }

    handleClick (key, value) {

      this.setState({
        ["open" + key.toString()]: !value
      })
    }

    render() {

      let { description } = this.props


      return (

        <View className='background'>
            <View className='page'>

              <DocsHeader title='景点介绍'></DocsHeader>

              <View className='doc-body'>
                  <View className='panel'>
                  <View className='panel__title'></View>
                        <View className='panel__content no-padding'>

                          <View className='at-article'>
                            <View className='at-article__h1'>洹河风景区景点介绍</View>
                            <View className='at-article__info'>2019-9-12</View>
                          </View>
                      </View>
                </View>
                </View>
              <View>

              

              {description.map(item => (
                <AtAccordion
                  key = {item.key} 
                  open={this.state["open" + String(item.key)]}
                  onClick={this.handleClick.bind(this,item.key,this.state["open" + String(item.key)])}
                  title={item.title}
                >
                <Image src={item.url} className='at-article__img' mode='widthFix'/>
                <View className='at-article__p'>
                  {item.text}
                </View>
                </AtAccordion>
                  
              ))}
              </View>

                <AtDivider content='欢迎您前来游览！' fontColor='#323ea8' lineColor='#a8326d' />


            </View>
    
        </View>

        
      )
      
    
    }
}


