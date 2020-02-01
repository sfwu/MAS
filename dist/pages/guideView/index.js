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

var GuideView = (_temp2 = _class = function (_Taro$Component) {
  _inherits(GuideView, _Taro$Component);

  function GuideView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GuideView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GuideView.__proto__ || Object.getPrototypeOf(GuideView)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__86", "$compid__87", "$compid__88", "$compid__89", "$compid__90", "$compid__91", "$compid__92", "$compid__93", "$compid__94", "$compid__95", "$compid__96", "$compid__97", "$compid__98", "$compid__99", "$compid__100", "$compid__101", "$compid__102", "$compid__103", "$compid__104", "$compid__105", "$compid__106", "$compid__107", "$compid__108", "open"], _this.config = {
      navigationBarTitleText: '景点介绍'
    }, _this.customComponents = ["AtAccordion", "AtDivider"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GuideView, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this.$router.params);
    }
  }, {
    key: "_constructor",
    value: function _constructor() {
      _get(GuideView.prototype.__proto__ || Object.getPrototypeOf(GuideView.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        open: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "handleClick",
    value: function handleClick(key, value) {
      this.setState({
        open: value
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

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__86"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__86 = _genCompid2[0],
          $compid__86 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__87"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__87 = _genCompid4[0],
          $compid__87 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__88"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__88 = _genCompid6[0],
          $compid__88 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__89"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__89 = _genCompid8[0],
          $compid__89 = _genCompid8[1];

      var _genCompid9 = (0, _index.genCompid)(__prefix + "$compid__90"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__90 = _genCompid10[0],
          $compid__90 = _genCompid10[1];

      var _genCompid11 = (0, _index.genCompid)(__prefix + "$compid__91"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__91 = _genCompid12[0],
          $compid__91 = _genCompid12[1];

      var _genCompid13 = (0, _index.genCompid)(__prefix + "$compid__92"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__92 = _genCompid14[0],
          $compid__92 = _genCompid14[1];

      var _genCompid15 = (0, _index.genCompid)(__prefix + "$compid__93"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__93 = _genCompid16[0],
          $compid__93 = _genCompid16[1];

      var _genCompid17 = (0, _index.genCompid)(__prefix + "$compid__94"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__94 = _genCompid18[0],
          $compid__94 = _genCompid18[1];

      var _genCompid19 = (0, _index.genCompid)(__prefix + "$compid__95"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__95 = _genCompid20[0],
          $compid__95 = _genCompid20[1];

      var _genCompid21 = (0, _index.genCompid)(__prefix + "$compid__96"),
          _genCompid22 = _slicedToArray(_genCompid21, 2),
          $prevCompid__96 = _genCompid22[0],
          $compid__96 = _genCompid22[1];

      var _genCompid23 = (0, _index.genCompid)(__prefix + "$compid__97"),
          _genCompid24 = _slicedToArray(_genCompid23, 2),
          $prevCompid__97 = _genCompid24[0],
          $compid__97 = _genCompid24[1];

      var _genCompid25 = (0, _index.genCompid)(__prefix + "$compid__98"),
          _genCompid26 = _slicedToArray(_genCompid25, 2),
          $prevCompid__98 = _genCompid26[0],
          $compid__98 = _genCompid26[1];

      var _genCompid27 = (0, _index.genCompid)(__prefix + "$compid__99"),
          _genCompid28 = _slicedToArray(_genCompid27, 2),
          $prevCompid__99 = _genCompid28[0],
          $compid__99 = _genCompid28[1];

      var _genCompid29 = (0, _index.genCompid)(__prefix + "$compid__100"),
          _genCompid30 = _slicedToArray(_genCompid29, 2),
          $prevCompid__100 = _genCompid30[0],
          $compid__100 = _genCompid30[1];

      var _genCompid31 = (0, _index.genCompid)(__prefix + "$compid__101"),
          _genCompid32 = _slicedToArray(_genCompid31, 2),
          $prevCompid__101 = _genCompid32[0],
          $compid__101 = _genCompid32[1];

      var _genCompid33 = (0, _index.genCompid)(__prefix + "$compid__102"),
          _genCompid34 = _slicedToArray(_genCompid33, 2),
          $prevCompid__102 = _genCompid34[0],
          $compid__102 = _genCompid34[1];

      var _genCompid35 = (0, _index.genCompid)(__prefix + "$compid__103"),
          _genCompid36 = _slicedToArray(_genCompid35, 2),
          $prevCompid__103 = _genCompid36[0],
          $compid__103 = _genCompid36[1];

      var _genCompid37 = (0, _index.genCompid)(__prefix + "$compid__104"),
          _genCompid38 = _slicedToArray(_genCompid37, 2),
          $prevCompid__104 = _genCompid38[0],
          $compid__104 = _genCompid38[1];

      var _genCompid39 = (0, _index.genCompid)(__prefix + "$compid__105"),
          _genCompid40 = _slicedToArray(_genCompid39, 2),
          $prevCompid__105 = _genCompid40[0],
          $compid__105 = _genCompid40[1];

      var _genCompid41 = (0, _index.genCompid)(__prefix + "$compid__106"),
          _genCompid42 = _slicedToArray(_genCompid41, 2),
          $prevCompid__106 = _genCompid42[0],
          $compid__106 = _genCompid42[1];

      var _genCompid43 = (0, _index.genCompid)(__prefix + "$compid__107"),
          _genCompid44 = _slicedToArray(_genCompid43, 2),
          $prevCompid__107 = _genCompid44[0],
          $compid__107 = _genCompid44[1];

      var _genCompid45 = (0, _index.genCompid)(__prefix + "$compid__108"),
          _genCompid46 = _slicedToArray(_genCompid45, 2),
          $prevCompid__108 = _genCompid46[0],
          $compid__108 = _genCompid46[1];

      var anonymousState__temp = this.__state.open[0];
      _index.propsManager.set({
        "title": "\u666F\u70B9\u4ECB\u7ECD"
      }, $compid__86, $prevCompid__86);
      _index.propsManager.set({
        "open": anonymousState__temp,
        "onClick": this.handleClick.bind(this),
        "title": "\u4E1C\u5B89\u95E8"
      }, $compid__87, $prevCompid__87);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u4F1F\u4EBA\u50CF"
      }, $compid__88, $prevCompid__88);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u592A\u9633\u6C60\u548C\u6708\u4EAE\u6C60"
      }, $compid__89, $prevCompid__89);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u4E91\u6D77\u77F3"
      }, $compid__90, $prevCompid__90);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u62D3\u8352\u725B"
      }, $compid__91, $prevCompid__91);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u9F99\u541F\u4EAD"
      }, $compid__92, $prevCompid__92);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u5929\u9F13\u77F3"
      }, $compid__93, $prevCompid__93);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u66F2\u5F84\u901A\u5E7D"
      }, $compid__94, $prevCompid__94);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u6D4E\u516C\u5E3D"
      }, $compid__95, $prevCompid__95);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u68EE\u6797\u6C27\u5427"
      }, $compid__96, $prevCompid__96);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u7389\u7687\u5CF0"
      }, $compid__97, $prevCompid__97);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u5B9D\u5CA9\u5BFA"
      }, $compid__98, $prevCompid__98);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u771F\u6B66\u5E99"
      }, $compid__99, $prevCompid__99);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u6A31\u82B1\u5927\u9053"
      }, $compid__100, $prevCompid__100);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u4E5D\u8FDE\u6C60"
      }, $compid__101, $prevCompid__101);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u4E8C\u4ED9\u5CF0"
      }, $compid__102, $prevCompid__102);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u8001\u9E70\u5C71"
      }, $compid__103, $prevCompid__103);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u592B\u59BB\u6797"
      }, $compid__104, $prevCompid__104);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u5CE1\u8C37\u6808\u9053"
      }, $compid__105, $prevCompid__105);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u4ED9\u4EBA\u5C45"
      }, $compid__106, $prevCompid__106);
      _index.propsManager.set({
        "open": this.__state.open,
        "onClick": this.handleClick.bind(this),
        "title": "\u6708\u4EAE\u6E56"
      }, $compid__107, $prevCompid__107);
      _index.propsManager.set({
        "content": "\u6B22\u8FCE\u60A8\u524D\u6765\u6E38\u89C8\uFF01",
        "fontColor": "#E3CE33",
        "lineColor": "#B3E333"
      }, $compid__108, $prevCompid__108);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__86: $compid__86,
        $compid__87: $compid__87,
        $compid__88: $compid__88,
        $compid__89: $compid__89,
        $compid__90: $compid__90,
        $compid__91: $compid__91,
        $compid__92: $compid__92,
        $compid__93: $compid__93,
        $compid__94: $compid__94,
        $compid__95: $compid__95,
        $compid__96: $compid__96,
        $compid__97: $compid__97,
        $compid__98: $compid__98,
        $compid__99: $compid__99,
        $compid__100: $compid__100,
        $compid__101: $compid__101,
        $compid__102: $compid__102,
        $compid__103: $compid__103,
        $compid__104: $compid__104,
        $compid__105: $compid__105,
        $compid__106: $compid__106,
        $compid__107: $compid__107,
        $compid__108: $compid__108
      });
      return this.__state;
    }
  }]);

  return GuideView;
}(_index2.default.Component), _class.$$events = [], _class.$$componentPath = "pages/guideView/index", _temp2);
exports.default = GuideView;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(GuideView, true));