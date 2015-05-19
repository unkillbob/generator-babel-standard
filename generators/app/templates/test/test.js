/*eslint-env mocha */
'use strict'

import assert from 'assert'
import <%= camelModuleName %> from '../'

describe('<%= moduleName %>', function () {
  it('should ', function () {
    assert.strictEqual(<%= camelModuleName %>('unicorns'), 'unicorns & rainbows')
  })
})
