'use strict'

function parse(selector) {
  if (typeof selector !== 'string') {
    throw new TypeError('Expected a string as selector')
  }

  if (selector[0] === '.' || selector[0] === '#') {
    selector = 'div' + selector
  }

  var parsed = selector.split(/(\.|#)/)

  var elObj = {
    tagName: parsed[0],
    classList: [],
    id: ''
  }
  parsed.forEach(function (key, index) {
    if (key === '.') {
      elObj.classList.push(parsed[index + 1])
    } else if (key === '#') {
      elObj.id = parsed[index + 1]
    }
  })

  return elObj
}

function createElement(selector) {
  var elObj = parse(selector)
  var el = document.createElement(elObj.tagName)
  if (elObj.id) {
    el.id = elObj.id
  }
  var className = elObj.classList.join(' ')
  if (className) {
    el.className = className
  }
  return el
}

module.exports = createElement
module.exports.parse = parse
