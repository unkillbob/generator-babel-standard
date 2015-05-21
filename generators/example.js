#! /usr/bin/env node

"use strict";

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _yeoman = require("yeoman-generator");

var _yeoman2 = _interopRequireDefault(_yeoman);

var _babelStandard = require("../");

var _babelStandard2 = _interopRequireDefault(_babelStandard);

console.log(process.cwd());

var env = _yeoman2["default"]();
env.registerStub(_babelStandard2["default"], "babel-standard");

var args = ["babel-standard", "unkillbob", "github.com/unkillbob"];
var options = {
  silent: true,
  "skip-install": true,
  "skip-cache": true
};

env.run(args, options);