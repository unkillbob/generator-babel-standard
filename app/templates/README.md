# <%= moduleName %>
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![js-standard-style][standard-style-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/<%= githubUsername %>/<%= moduleName %>.svg?style=flat
[travis-url]: https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>
[npm-image]: https://img.shields.io/npm/v/<%= moduleName %>.svg?style=flat
[npm-url]: https://npmjs.org/package/<%= moduleName %>
[standard-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-style-url]: https://github.com/feross/standard

## Install

```
$ npm install --save <%= moduleName %>
```

## Usage

```js
var <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('unicorns');
//=> unicorns & rainbows
```

## API

### <%= camelModuleName %>(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.

## License

MIT © [<%= name %>](<%= website %>)
