'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (str, opts) {
  opts = opts || {};

  var postfix = opts.postfix || 'rainbows';

  return '' + str + ' & ' + postfix;
};

module.exports = exports['default'];