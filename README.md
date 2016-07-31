# create-element-from-selector

[![NPM version](https://img.shields.io/npm/v/create-element-from-selector.svg)](https://npmjs.com/package/create-element-from-selector) [![NPM downloads](https://img.shields.io/npm/dm/create-element-from-selector.svg)](https://npmjs.com/package/create-element-from-selector) [![Build Status](https://img.shields.io/circleci/project/egoist/create-element-from-selector/master.svg)](https://circleci.com/gh/egoist/create-element-from-selector)

## Install

```bash
$ npm install --save create-element-from-selector
```

## Usage

```js
const createElement = require('create-element-from-selector')

const element = createElement('div#foo.bar')
//=> <div id="foo" class="bar"></div>

const elementObj = createElement.parse('div#foo.bar')
//=>
//  {
//    tagName: 'div',
//    classList: ['bar'],
//    id: 'foo'
//  }
```

## API

### createElement(selector)

#### selector

A valid dom selector.

### createElement.parse(selector)

## License

MIT © [EGOIST](https://github.com/egoist)
