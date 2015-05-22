#! /usr/bin/env node
'use strict'

import yeoman from 'yeoman-environment'
import path from 'path'

const args = ['babel-standard', 'unkillbob', 'github.com/unkillbob']
const options = {
  silent: true,
  skipInstall: true,
  'skip-cache': true
}

process.chdir(path.join(__dirname, '../example/'))

const env = yeoman.createEnv()
env.lookup(function () {
  env.run(args, options)
})
