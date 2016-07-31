import test from 'ava'
import createElement, {parse} from '../'

test('with tag', t => {
  var elObj = parse('div#foo.bar.baz')
  t.deepEqual(elObj, {
    tagName: 'div',
    classList: ['bar', 'baz'],
    id: 'foo'
  })
})

test('without tag', t => {
  var elObj = parse('#foo.bar.baz')
  t.deepEqual(elObj, {
    tagName: 'div',
    classList: ['bar', 'baz'],
    id: 'foo'
  })
})

test('override id', t => {
  var elObj = parse('div#foo#bar#baz')
  t.deepEqual(elObj, {
    tagName: 'div',
    classList: [],
    id: 'baz'
  })
})

test('createElement', t => {
  var el = createElement('div#foo.bar')
  t.is(el.className, 'bar')
  t.is(el.id, 'foo')
  t.is(el.tagName, 'DIV')
})
