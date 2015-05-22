#! /usr/bin/env node

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _yeomanEnvironment = require('yeoman-environment');

var _yeomanEnvironment2 = _interopRequireDefault(_yeomanEnvironment);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var args = ['babel-standard', 'unkillbob', 'github.com/unkillbob'];
var options = {
  silent: true,
  skipInstall: true,
  'skip-cache': true
};

process.chdir(_path2['default'].join(__dirname, '../example/'));

var env = _yeomanEnvironment2['default'].createEnv();
env.lookup(function () {
  env.run(args, options);
});