'use strict'

var yeoman = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json')
  },

  prompting: function () {
    var done = this.async()

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the neat ' + chalk.red('BabelStandard') + ' generator!'
    ))

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }]

    this.prompt(prompts, function (props) {
      this.props = props
      // To access props later use this.props.someOption

      done()
    }.bind(this))
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      )
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      )
    }
  },

  install: function () {
    this.installDependencies()
  }
})
