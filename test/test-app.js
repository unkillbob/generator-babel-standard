/*eslint-env mocha */
'use strict'

import path from 'path'
import { assert, test as helpers } from 'yeoman-generator'

describe('babel-standard:app', () => {
  before(done => {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({
        moduleName: 'foo-bar',
        githubUsername: 'fubar',
        website: 'foobar.com'
      })
      .on('end', done)
  })

  it('generates expected files', () => {
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
