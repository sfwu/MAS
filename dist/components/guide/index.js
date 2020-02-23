"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GUIDE_LIST = [{
  key: 'tickect',
  text: '门票',
  url: '/pages/frontPageMenu/guideTickect/index',
  img: "/assets/gridIcon/ticket_2.png"
}, {
  key: 'view',
  text: '景点介绍',
  url: '/pages/frontPageMenu/guideView/index',
  img: "/assets/gridIcon/view.png"
}, {
  key: 'fun',
  text: '游览指导',
  url: '/pages/frontPageMenu/guideMap/index',
  img: "/assets/gridIcon/map.png"
}, {
  key: 'video',
  text: '风景视频',
  url: '/pages/frontPageMenu/guideVideo/index',
  img: "/assets/gridIcon/fun.png"
}, {
  key: 'bus',
  text: '交通',
  url: '/pages/frontPageMenu/guideBus/index',
  img: "/assets/gridIcon/bus.png"
}, {
  key: 'hotel',
  text: '住宿',
  url: '/pages/frontPageMenu/guideHotel/index',
  img: "/assets/gridIcon/hotel.png"
}, {
  key: 'food',
  text: '美食',
  url: '/pages/frontPageMenu/guideFood/index',
  img: "/assets/gridIcon/food_1.png"
}, {
  key: 'shopping',
  text: '购物',
  url: '/pages/frontPageMenu/guideShopping/index',
  img: "/assets/gridIcon/shopping.png"
}, {
  key: 'contact',
  text: '联系我们',
  url: '/pages/frontPageMenu/guideContact/index',
  img: "/assets/gridIcon/contactus.png"
}];

var COUNT_LINE = 1;

var Guide = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Guide, _Taro$Component);

  function Guide() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Guide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Guide.__proto__ || Object.getPrototypeOf(Guide)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray2", "GUIDE_LIST"], _this.gotoPage = function (menu) {
      _index2.default.navigateTo({ url: menu.url });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Guide, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Guide.prototype.__proto__ || Object.getPrototypeOf(Guide.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var loopArray2 = GUIDE_LIST.map(function (menu, index) {
        menu = {
          $original: (0, _index.internal_get_original)(menu)
        };

        var nth = (index + 1) % COUNT_LINE === 0;
        var lastLine = parseInt(index / COUNT_LINE) === parseInt(GUIDE_LIST.length / COUNT_LINE);
        var $loopState__temp2 = (0, _index4.default)('user-menu__item', nth && 'user-menu__item--nth', lastLine && 'user-menu__item--last');
        return {
          nth: nth,
          lastLine: lastLine,
          $loopState__temp2: $loopState__temp2,
          $original: menu.$original
        };
      });
      Object.assign(this.__state, {
        loopArray2: loopArray2,
        GUIDE_LIST: GUIDE_LIST
      });
      return this.__state;
    }
  }]);

  return Guide;
}(_index2.default.Component), _class.$$events = ["gotoPage"], _class.$$componentPath = "components/guide/index", _temp2);
exports.default = Guide;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Guide));