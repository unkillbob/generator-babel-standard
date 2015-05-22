'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _normalizeUrl = require('normalize-url');

var _normalizeUrl2 = _interopRequireDefault(_normalizeUrl);

var _humanizeUrl = require('humanize-url');

var _humanizeUrl2 = _interopRequireDefault(_humanizeUrl);

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _lodashStringCamelCase = require('lodash/string/camelCase');

var _lodashStringCamelCase2 = _interopRequireDefault(_lodashStringCamelCase);

var _lodashStringKebabCase = require('lodash/string/kebabCase');

var _lodashStringKebabCase2 = _interopRequireDefault(_lodashStringKebabCase);

var _lodashObjectExtend = require('lodash/object/extend');

var _lodashObjectExtend2 = _interopRequireDefault(_lodashObjectExtend);

var _lodashCollectionMap = require('lodash/collection/map');

var _lodashCollectionMap2 = _interopRequireDefault(_lodashCollectionMap);

var _lodashLangIsUndefined = require('lodash/lang/isUndefined');

var _lodashLangIsUndefined2 = _interopRequireDefault(_lodashLangIsUndefined);

module.exports = _yeomanGenerator2['default'].Base.extend({
  constructor: function constructor() {
    _yeomanGenerator2['default'].Base.apply(this, arguments);

    this.option('silent', {
      defaults: false,
      type: Boolean,
      hide: true
    });

    this.argument('githubUsername', {
      type: String,
      required: this.options.silent
    });
    this.argument('website', {
      type: String,
      required: this.options.silent
    });
  },

  _configurePrompts: function _configurePrompts(prompts) {
    var _this = this;

    var silent = this.options.silent;

    return (0, _lodashCollectionMap2['default'])(prompts, function (prompt) {
      var name = prompt.name;
      var defaultVal = !(0, _lodashLangIsUndefined2['default'])(prompt['default']) ? prompt['default'] : _this[name];

      return (0, _lodashObjectExtend2['default'])({
        'default': defaultVal,
        when: function when(props) {
          if (silent) {
            props[name] = defaultVal;
          }
          return !silent;
        }
      }, prompt);
    });
  },

  init: function init() {
    var _this2 = this;

    var done = this.async();

    var prompts = this._configurePrompts([{
      name: 'moduleName',
      message: 'What do you want to name your module?',
      'default': this.appname.replace(/\s/g, '-'),
      filter: function filter(val) {
        return (0, _lodashStringKebabCase2['default'])(val);
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
        return (0, _normalizeUrl2['default'])(val);
      }
    }]);

    this.prompt(prompts, function (props) {
      _this2.moduleName = props.moduleName;
      _this2.camelModuleName = (0, _lodashStringCamelCase2['default'])(props.moduleName);
      _this2.githubUsername = props.githubUsername;
      _this2.name = _this2.user.git.name();
      _this2.email = _this2.user.git.email();
      _this2.website = props.website;
      _this2.humanizedWebsite = (0, _humanizeUrl2['default'])(_this2.website);

      _this2.template('editorconfig', '.editorconfig');
      _this2.template('gitattributes', '.gitattributes');
      _this2.template('gitignore', '.gitignore');
      _this2.template('travis.yml', '.travis.yml');
      _this2.template('src/index.js');
      _this2.template('test/test.js');
      _this2.template('LICENSE');
      _this2.template('README.md');
      // needed so npm doesn't try to use it and fail
      _this2.template('_package.json', 'package.json');

      done();
    });
  },

  install: function install() {
    this.npmInstall();
  }
});