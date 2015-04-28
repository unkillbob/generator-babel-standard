'use strict'

var normalizeUrl = require('normalize-url'),
  humanizeUrl = require('humanize-url'),
  yeoman = require('yeoman-generator'),
  camelCase = require('lodash/string/camelCase'),
  kebabCase = require('lodash/string/kebabCase')

module.exports = yeoman.generators.Base.extend({
  init: function () {
    var done = this.async()

    this.prompt([{
      name: 'moduleName',
      message: 'What do you want to name your module?',
      default: this.appname.replace(/\s/g, '-'),
      filter: kebabCase
    }, {
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      store: true,
      validate: function (val) {
        return val.length > 0 ? true : 'You have to provide a username'
      }
    }, {
      name: 'website',
      message: 'What is the URL of your website?',
      store: true,
      validate: function (val) {
        return val.length > 0 ? true : 'You have to provide a website URL'
      },
      filter: normalizeUrl
    }], function (props) {
      this.moduleName = props.moduleName
      this.camelModuleName = camelCase(props.moduleName)
      this.githubUsername = props.githubUsername
      this.name = this.user.git.name()
      this.email = this.user.git.email()
      this.website = props.website
      this.humanizedWebsite = humanizeUrl(this.website)

      this.template('editorconfig', '.editorconfig')
      this.template('gitignore', '.gitignore')
      this.template('travis.yml', '.travis.yml')
      this.template('src/index.js')
      this.template('test/test.js')
      this.template('LICENSE')
      this.template('README.md')
      // needed so npm doesn't try to use it and fail
      this.template('_package.json', 'package.json')

      done()
    }.bind(this))
  },

  install: function () {
    this.npmInstall()
  }
})
