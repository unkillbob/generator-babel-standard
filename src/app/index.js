'use strict'

import normalizeUrl from 'normalize-url'
import humanizeUrl from 'humanize-url'
import generators from 'yeoman-generator'
import camelCase from 'lodash/string/camelCase'
import kebabCase from 'lodash/string/kebabCase'
import extend from 'lodash/object/extend'
import map from 'lodash/collection/map'
import isUndefined from 'lodash/lang/isUndefined'

module.exports = generators.Base.extend({
  constructor () {
    generators.Base.apply(this, arguments)

    this.option('silent', {
      defaults: false,
      type: Boolean,
      hide: true
    })

    this.argument('githubUsername', {
      type: String,
      required: this.options.silent
    })
    this.argument('website', {
      type: String,
      required: this.options.silent
    })
  },

  _configurePrompts (prompts) {
    const silent = this.options.silent

    return map(prompts, prompt => {
      const name = prompt.name
      const defaultVal = !isUndefined(prompt.default) ? prompt.default : this[name]

      return extend({
        default: defaultVal,
        when: props => {
          if (silent) {
            props[name] = defaultVal
          }
          return !silent
        }
      }, prompt)
    })
  },

  init () {
    const done = this.async()

    const prompts = this._configurePrompts([{
      name: 'moduleName',
      message: 'What do you want to name your module?',
      default: this.appname.replace(/\s/g, '-'),
      filter: val => kebabCase(val)
    }, {
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      store: true,
      validate: val => val.length > 0 ? true : 'You have to provide a username'
    }, {
      name: 'website',
      message: 'What is the URL of your website?',
      store: true,
      validate: val => val.length > 0 ? true : 'You have to provide a website URL',
      filter: val => normalizeUrl(val)
    }])

    this.prompt(prompts, props => {
      this.moduleName = props.moduleName
      this.camelModuleName = camelCase(props.moduleName)
      this.githubUsername = props.githubUsername
      this.name = this.user.git.name()
      this.email = this.user.git.email()
      this.website = props.website
      this.humanizedWebsite = humanizeUrl(this.website)

      this.template('editorconfig', '.editorconfig')
      this.template('gitattributes', '.gitattributes')
      this.template('gitignore', '.gitignore')
      this.template('travis.yml', '.travis.yml')
      this.template('src/index.js')
      this.template('test/test.js')
      this.template('LICENSE')
      this.template('README.md')
      // needed so npm doesn't try to use it and fail
      this.template('_package.json', 'package.json')

      done()
    })
  },

  install () {
    this.npmInstall()
  }
})
