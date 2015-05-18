'use strict'

export default function (str, opts) {
  opts = opts || {}

  const postfix = opts.postfix || 'rainbows'

  return `${str} & ${postfix}`
}
