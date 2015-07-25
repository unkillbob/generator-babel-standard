/* eslint-env mocha */
'use strict'

import { expect } from 'chai'
import <%= camelModuleName %> from '../'

describe('<%= moduleName %>', function () {
  it('should ', function () {
    expect(<%= camelModuleName %>('unicorns')).to.equal('unicorns & rainbows')
  })
})
