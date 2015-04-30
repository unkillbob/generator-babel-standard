/*eslint-env mocha */
'use strict'

import assert from 'assert'
import <%= camelModuleName %> from '../'

describe('<%= moduleName %>', () => {
  it('should ', () => {
    assert.strictEqual(<%= camelModuleName %>('unicorns'), 'unicorns & rainbows')
  })
})
