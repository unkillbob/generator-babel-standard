/*eslint-env mocha */
'use strict'

var path = require('path')
var assert = require('yeoman-generator').assert
var helpers = require('yeoman-generator').test

describe('babel-standard:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({
        moduleName: 'foo-bar',
        githubUsername: 'fubar',
        website: 'foobar.com'
      })
      .on('end', done)
  })

  it('generates expected files', function () {
    assert.file([
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.travis.yml',
      'LICENSE',
      'README.md',
      'package.json',
      'src/index.js',
      'test/test.js'
    ])
  })
})
