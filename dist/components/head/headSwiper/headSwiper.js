"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeadSwiper = (_temp2 = _class = function (_BaseComponent) {
  _inherits(HeadSwiper, _BaseComponent);

  function HeadSwiper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeadSwiper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeadSwiper.__proto__ || Object.getPrototypeOf(HeadSwiper)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["img_list", "pureUrlList"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeadSwiper, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(HeadSwiper.prototype.__proto__ || Object.getPrototypeOf(HeadSwiper.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "onImageClick",
    value: function onImageClick(list, key) {
      _index2.default.previewImage({
        urls: list,
        current: list[key]
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

      var img_list = this.__props.img_list;

      var pureUrlList = img_list.map(function (item) {
        return item.url;
      });

      Object.assign(this.__state, {
        img_list: img_list,
        pureUrlList: pureUrlList
      });
      return this.__state;
    }
  }]);

  return HeadSwiper;
}(_index.Component), _class.$$events = ["onImageClick"], _class.defaultProps = {
  img_list: [{ key: 0, url: 'https://i.loli.net/2019/09/06/dnTDSKJHzFN6wpE.jpg' }, { key: 1, url: 'https://i.loli.net/2019/09/15/iQ4DWrlZTVzGysh.jpg' }, { key: 2, url: 'https://i.loli.net/2019/09/06/yWRf8AoPkD9vIH7.jpg' }, { key: 3, url: 'https://i.loli.net/2019/09/06/YxjGIehQVRzF6ta.jpg' }, { key: 4, url: 'https://i.loli.net/2019/09/15/KhLJEpwi2e7luaA.jpg' }, { key: 5, url: 'https://i.loli.net/2019/09/15/Eb1Jna8lyBfxHC7.jpg' }, { key: 6, url: 'https://i.loli.net/2019/09/06/FQJfcpe6dCsyZH2.jpg' }, { key: 7, url: 'https://i.loli.net/2019/09/06/C1gvAqlmU3GLoZJ.jpg' }, { key: 8, url: 'https://i.loli.net/2019/09/06/DOwFAHKa1V2nch5.jpg' }]
}, _class.$$componentPath = "components/head/headSwiper/headSwiper", _temp2);
exports.default = HeadSwiper;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(HeadSwiper));