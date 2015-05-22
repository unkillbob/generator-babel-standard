#! /usr/bin/env node

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _yeomanEnvironment = require('yeoman-environment');

var _yeomanEnvironment2 = _interopRequireDefault(_yeomanEnvironment);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _rimraf = require('rimraf');

var _rimraf2 = _interopRequireDefault(_rimraf);

var args = ['babel-standard', 'unkillbob', 'github.com/unkillbob'];
var options = {
  silent: true,
  skipInstall: true,
  'skip-cache': true
};

var exampleDir = _path2['default'].join(__dirname, '../example/'),
    allFilesInExampleDir = _path2['default'].join(exampleDir, '{.,}*');

(0, _rimraf2['default'])(allFilesInExampleDir, function () {
  process.chdir(exampleDir);

  var env = _yeomanEnvironment2['default'].createEnv();
  env.lookup(function () {
    return env.run(args, options);
  });
});