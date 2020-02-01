"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import ScaleImage from '../../components/scaleImage/scaleImage'

var GuideMap = (_temp2 = _class = function (_Taro$Component) {
  _inherits(GuideMap, _Taro$Component);

  function GuideMap() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GuideMap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GuideMap.__proto__ || Object.getPrototypeOf(GuideMap)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "$compid__24", "$compid__25", "$compid__26", "$compid__27", "$compid__28", "$compid__29", "$compid__30", "$compid__31", "$compid__32", "$compid__33", "$compid__34", "$compid__35", "$compid__36", "URL_LIST", "current"], _this.config = {
      navigationBarTitleText: '游览指导'
    }, _this.customComponents = ["AtDivider", "AtTabs", "AtTabsPane", "AtTimeline"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GuideMap, [{
    key: "_constructor",
    value: function _constructor() {
      _get(GuideMap.prototype.__proto__ || Object.getPrototypeOf(GuideMap.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        current: 0,
        URL_LIST: ['https://i.loli.net/2019/09/14/SV1rCPeDxdQ3TXK.jpg']
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        current: value
      });
    }
  }, {
    key: "onImageClick",
    value: function onImageClick(x) {
      _index2.default.previewImage({
        urls: x,
        current: x[0]
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__24"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__24 = _genCompid2[0],
          $compid__24 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__25"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__25 = _genCompid4[0],
          $compid__25 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__26"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__26 = _genCompid6[0],
          $compid__26 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__27"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__27 = _genCompid8[0],
          $compid__27 = _genCompid8[1];

      var _genCompid9 = (0, _index.genCompid)(__prefix + "$compid__28"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__28 = _genCompid10[0],
          $compid__28 = _genCompid10[1];

      var _genCompid11 = (0, _index.genCompid)(__prefix + "$compid__29"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__29 = _genCompid12[0],
          $compid__29 = _genCompid12[1];

      var _genCompid13 = (0, _index.genCompid)(__prefix + "$compid__30"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__30 = _genCompid14[0],
          $compid__30 = _genCompid14[1];

      var _genCompid15 = (0, _index.genCompid)(__prefix + "$compid__31"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__31 = _genCompid16[0],
          $compid__31 = _genCompid16[1];

      var _genCompid17 = (0, _index.genCompid)(__prefix + "$compid__32"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__32 = _genCompid18[0],
          $compid__32 = _genCompid18[1];

      var _genCompid19 = (0, _index.genCompid)(__prefix + "$compid__33"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__33 = _genCompid20[0],
          $compid__33 = _genCompid20[1];

      var _genCompid21 = (0, _index.genCompid)(__prefix + "$compid__34"),
          _genCompid22 = _slicedToArray(_genCompid21, 2),
          $prevCompid__34 = _genCompid22[0],
          $compid__34 = _genCompid22[1];

      var _genCompid23 = (0, _index.genCompid)(__prefix + "$compid__35"),
          _genCompid24 = _slicedToArray(_genCompid23, 2),
          $prevCompid__35 = _genCompid24[0],
          $compid__35 = _genCompid24[1];

      var _genCompid25 = (0, _index.genCompid)(__prefix + "$compid__36"),
          _genCompid26 = _slicedToArray(_genCompid25, 2),
          $prevCompid__36 = _genCompid26[0],
          $compid__36 = _genCompid26[1];

      var anonymousState__temp = [{ title: '1日游线路一' }, { title: '1日游线路二' }, { title: '1日游线路三' }, { title: '2日旅游线路' }];
      var anonymousState__temp2 = [{ title: '东安门' }, { title: '曲径通幽', color: 'green' }, { title: '宝岩寺', color: 'red' }, { title: '午餐', color: 'yellow' }, { title: '樱花大道' }, { title: '九莲池', color: 'green' }, { title: '赵河水系', color: 'red' }, { title: '峡谷古栈道', color: 'yellow' }, { title: '返回东安门', color: 'green' }];
      var anonymousState__temp3 = [{ title: '东安门' }, { title: '玉皇峰', color: 'green' }, { title: '娲皇宫', color: 'red' }, { title: '午餐', color: 'yellow' }, { title: '樱花大道' }, { title: '九莲池', color: 'green' }, { title: '赵河水系', color: 'red' }, { title: '峡谷古栈道', color: 'yellow' }, { title: '返回东安门', color: 'green' }];
      var anonymousState__temp4 = [{ title: '东安门' }, { title: '曲径通幽', color: 'green' }, { title: '宝岩寺', color: 'red' }, { title: '玉皇峰', color: 'yellow' }, { title: '午餐', color: 'red' }, { title: '娲皇宫' }, { title: '樱花大道', color: 'green' }, { title: '九连池', color: 'red' }];
      var anonymousState__temp5 = [{ title: '赵河水系', color: 'yellow' }, { title: '返回东安门', color: 'green' }];
      var anonymousState__temp6 = [{ title: '东安门' }, { title: '曲径通幽', color: 'green' }, { title: '宝岩寺', color: 'red' }, { title: '午餐', color: 'yellow' }, { title: '采摘', content: ['欣赏自然和田园风光'] }, { title: '宿于西山宾馆' }];
      var anonymousState__temp7 = [{ title: '玉皇峰' }, { title: '娲皇宫', color: 'green' }, { title: '午餐', color: 'red' }, { title: '樱花大道', color: 'yellow' }, { title: '九连池' }, { title: '赵河水系', color: 'green' }, { title: '峡谷古栈道', color: 'red' }, { title: '返回东安门', color: 'yellow' }];
      _index.propsManager.set({
        "content": "\u6E38\u89C8\u7EBF\u8DEF\u63A8\u8350",
        "fontColor": "#E71F98",
        "lineColor": "#E71F5F"
      }, $compid__24, $prevCompid__24);
      _index.propsManager.set({
        "current": this.__state.current,
        "scroll": true,
        "height": "330px",
        "tabDirection": "vertical",
        "tabList": anonymousState__temp,
        "onClick": this.handleClick.bind(this)
      }, $compid__25, $prevCompid__25);
      _index.propsManager.set({
        "tabDirection": "vertical",
        "current": this.__state.current,
        "index": 0
      }, $compid__26, $prevCompid__26);
      _index.propsManager.set({
        "items": anonymousState__temp2
      }, $compid__27, $prevCompid__27);
      _index.propsManager.set({
        "tabDirection": "vertical",
        "current": this.__state.current,
        "index": 1
      }, $compid__28, $prevCompid__28);
      _index.propsManager.set({
        "items": anonymousState__temp3
      }, $compid__29, $prevCompid__29);
      _index.propsManager.set({
        "tabDirection": "vertical",
        "current": this.__state.current,
        "index": 2
      }, $compid__30, $prevCompid__30);
      _index.propsManager.set({
        "items": anonymousState__temp4
      }, $compid__31, $prevCompid__31);
      _index.propsManager.set({
        "items": anonymousState__temp5
      }, $compid__32, $prevCompid__32);
      _index.propsManager.set({
        "tabDirection": "vertical",
        "current": this.__state.current,
        "index": 3
      }, $compid__33, $prevCompid__33);
      _index.propsManager.set({
        "items": anonymousState__temp6
      }, $compid__34, $prevCompid__34);
      _index.propsManager.set({
        "items": anonymousState__temp7
      }, $compid__35, $prevCompid__35);
      _index.propsManager.set({
        "content": "\u666F\u533A\u5730\u56FE",
        "fontColor": "#D67D1F",
        "lineColor": "#ff9900"
      }, $compid__36, $prevCompid__36);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        $compid__24: $compid__24,
        $compid__25: $compid__25,
        $compid__26: $compid__26,
        $compid__27: $compid__27,
        $compid__28: $compid__28,
        $compid__29: $compid__29,
        $compid__30: $compid__30,
        $compid__31: $compid__31,
        $compid__32: $compid__32,
        $compid__33: $compid__33,
        $compid__34: $compid__34,
        $compid__35: $compid__35,
        $compid__36: $compid__36
      });
      return this.__state;
    }
  }]);

  return GuideMap;
}(_index2.default.Component), _class.$$events = ["onImageClick"], _class.$$componentPath = "pages/guideMap/index", _temp2);
exports.default = GuideMap;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(GuideMap, true));