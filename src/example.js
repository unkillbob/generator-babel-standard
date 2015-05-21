#! /usr/bin/env node
'use strict'

import path from 'path'
import yeoman from 'yeoman-generator'
import babelStandard from '../'

console.log(process.cwd())

const env = yeoman()
env.registerStub(babelStandard, 'babel-standard')

const args = ['babel-standard', 'unkillbob', 'github.com/unkillbob']
const options = {
  silent: true,
  'skip-install': true,
  'skip-cache': true
}

env.run(args, options)
