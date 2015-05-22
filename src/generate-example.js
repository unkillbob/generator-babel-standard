#! /usr/bin/env node
'use strict'

import yeoman from 'yeoman-environment'
import path from 'path'
import rimraf from 'rimraf'

const args = ['babel-standard', 'unkillbob', 'github.com/unkillbob']
const options = {
  silent: true,
  skipInstall: true,
  'skip-cache': true
}

const exampleDir = path.join(__dirname, '../example/'),
  allFilesInExampleDir = path.join(exampleDir, '{.,}*')

rimraf(allFilesInExampleDir, () => {
  process.chdir(exampleDir)

  const env = yeoman.createEnv()
  env.lookup(() => env.run(args, options))
})
