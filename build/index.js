"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import './database'

_app["default"].listen(_app["default"].get('port'), function () {
  console.log('server on port ', _app["default"].get('port'));
});