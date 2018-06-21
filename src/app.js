'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(function (req, res, next) {
  res.status(200).json({
    message: 'Set for development'
  });
  next();
});

app.get('/', function (req, res) {
  res.send('Working well and fine');
});

module.export = app;