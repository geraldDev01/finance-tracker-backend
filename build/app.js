"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _package = _interopRequireDefault(require("../package.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

//Settings
app.set("port", process.env.PORT || 4000);
app.set("pkg", _package["default"]);
app.get("/", function (req, res) {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version
  });
});

//body parser
app.use(_express["default"].json());

//middleware
app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])());

//routes
// app.use("/api/auth", authRoutes);
var _default = app;
exports["default"] = _default;