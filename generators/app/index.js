'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _normalizeUrl = require('normalize-url');

var _normalizeUrl2 = _interopRequireDefault(_normalizeUrl);

var _humanizeUrl = require('humanize-url');

var _humanizeUrl2 = _interopRequireDefault(_humanizeUrl);

var _generators = require('yeoman-generator');

var _generators2 = _interopRequireDefault(_generators);

var _camelCase = require('lodash/string/camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

var _kebabCase = require('lodash/string/kebabCase');

var _kebabCase2 = _interopRequireDefault(_kebabCase);

module.exports = _generators2['default'].Base.extend({
  init: function init() {
    var _this = this;

    var done = this.async();

    this.prompt([{
      name: 'moduleName',
      message: 'What do you want to name your module?',
      'default': this.appname.replace(/\s/g, '-'),
      filter: function filter(val) {
        return _kebabCase2['default'](val);
      }
    }, {
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      store: true,
      validate: function validate(val) {
        return val.length > 0 ? true : 'You have to provide a username';
      }
    }, {
      name: 'website',
      message: 'What is the URL of your website?',
      store: true,
      validate: function validate(val) {
        return val.length > 0 ? true : 'You have to provide a website URL';
      },
      filter: function filter(val) {
        return _normalizeUrl2['default'](val);
      }
    }], function (props) {
      _this.moduleName = props.moduleName;
      _this.camelModuleName = _camelCase2['default'](props.moduleName);
      _this.githubUsername = props.githubUsername;
      _this.name = _this.user.git.name();
      _this.email = _this.user.git.email();
      _this.website = props.website;
      _this.humanizedWebsite = _humanizeUrl2['default'](_this.website);

      _this.template('editorconfig', '.editorconfig');
      _this.template('gitattributes', '.gitattributes');
      _this.template('gitignore', '.gitignore');
      _this.template('travis.yml', '.travis.yml');
      _this.template('src/index.js');
      _this.template('test/test.js');
      _this.template('LICENSE');
      _this.template('README.md');
      // needed so npm doesn't try to use it and fail
      _this.template('_package.json', 'package.json');

      done();
    });
  },

  install: function install() {
    this.npmInstall();
  }
});